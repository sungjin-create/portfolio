import { ProjectDetail } from "@/shared/types/project";

export const projectDetails: ProjectDetail[] = [
    {
        slug: "limitedgoods",
        title: "LimitedGoods",
        subtitle: "한정 상품 주문 시스템",
        description:
            "동시 주문 상황에서 재고 초과 판매를 방지하기 위해 Redis, DB Lock, Kafka를 적용한 백엔드 프로젝트입니다.",
        period: "2026.05 - 2026.06",
        role: "Backend Developer",
        techStack: [
            "Java",
            "Spring Boot",
            "JPA",
            "PostgreSQL",
            "Redis",
            "Kafka",
            "Docker",
            "K6",
        ],
        githubUrl: "https://github.com/sungjin-create/-limitedgoods",

        overview: [
            "한정 수량 상품에 대해 동시에 주문 요청이 들어오는 상황을 가정했습니다.",
            "초기에는 DB Lock 기반으로 재고 정합성을 맞췄고, 이후 Redis 재고 선점 구조로 확장했습니다.",
            "Kafka를 활용해 주문 이벤트를 발행하고, 알림 소비자 구조를 실험했습니다.",
        ],

        features: [
            {
                title: "Redis 재고 선점",
                description:
                    "주문 생성 시 Redis에서 먼저 재고를 차감해 빠르게 재고를 선점하고, 실패 시 보상 복구를 수행했습니다.",
            },
            {
                title: "결제 승인 / 확정 분리",
                description:
                    "결제 승인 상태와 최종 결제 완료 상태를 분리하여 주문 상태 전이를 명확히 관리했습니다.",
            },
            {
                title: "Kafka 이벤트 발행",
                description:
                    "주문 생성 이후 Outbox 이벤트를 Kafka로 발행해 비동기 처리 구조를 구성했습니다.",
            },
        ],

        troubleshooting: [
            {
                title: "주문 동시성 문제 해결",
                summary:
                    "한정 수량 상품에 동시에 주문이 몰리면 여러 요청이 같은 재고 값을 읽은 뒤 각각 주문을 생성해 초과 판매가 발생할 수 있습니다. 단순 DB 조회 후 차감 방식으로는 동시 요청을 안전하게 제어하기 어렵다고 판단했고, 비관적 락, 낙관적 락, Redis 기반 원자 차감을 비교한 뒤 한정 판매 시나리오에 가장 적합한 Redis Lua Script 방식을 적용했습니다.",
                keywords: [
                    "Concurrency",
                    "Redis Lua Script",
                    "Stock Reservation",
                    "Compensation",
                    "K6",
                ],
                problem: [
                    {
                        label: "1",
                        text: "동시에 여러 주문이 들어오면 단순 DB 조회 후 차감 방식으로는 같은 재고 값을 기준으로 주문이 생성되어 초과 판매를 막기 어려웠습니다.",
                    },
                    {
                        label: "2",
                        text: "비관적 락은 정합성은 보장하지만 트래픽이 몰릴수록 DB lock 경합과 대기 시간이 커졌습니다.",
                    },
                    {
                        label: "3",
                        text: "낙관적 락은 대기 시간은 줄일 수 있지만 충돌이 잦은 인기 상품에서는 재시도 비용이 커졌습니다.",
                    },
                    {
                        label: "4",
                        text: "Redis 차감 후 주문 생성에 실패하면 재고와 주문 상태가 어긋날 수 있었습니다.",
                    },
                ],
                cause: [
                    {
                        label: "1",
                        text: "재고 조회와 차감이 분리되어 있어 동시 요청 사이에 경쟁 조건이 발생했습니다.",
                    },
                    {
                        label: "2",
                        text: "DB lock 방식은 동일한 재고 row에 요청이 몰릴수록 병목이 발생했습니다.",
                    },
                    {
                        label: "3",
                        text: "낙관적 락은 충돌을 감지한 뒤 재시도하므로 충돌 빈도가 높을수록 비용이 커졌습니다.",
                    },
                    {
                        label: "4",
                        text: "Redis 작업과 DB 트랜잭션은 하나로 묶을 수 없어 보상 처리가 필요했습니다.",
                    },
                ],
                solution: [
                    {
                        title: "Redis Lua Script로 재고 조회와 차감을 원자적으로 처리",
                        description:
                            "주문 생성 전에 Redis에서 재고 조회, 비교, 차감을 하나의 Lua Script로 실행했습니다. Redis 단에서 재고 부족 요청을 빠르게 차단하고, DB까지 도달하는 요청 수를 줄였습니다.",
                        points: [
                            "Lua Script 안에서 현재 재고를 조회하고 요청 수량과 비교했습니다.",
                            "재고가 부족하면 즉시 실패 응답을 반환해 주문 생성을 진행하지 않았습니다.",
                            "재고가 충분하면 Redis에서 먼저 차감해 요청을 선점했습니다.",
                        ],
                        code: {
                            title: "Redis Lua Script",
                            language: "java",
                            content: `
                            private static final String DECREASE_SCRIPT =
                                "local stock = tonumber(redis.call('GET', KEYS[1])) " +
                                "if stock == nil then return -1 end " +
                                "if stock < tonumber(ARGV[1]) then return -1 end " +
                                "return redis.call('DECRBY', KEYS[1], ARGV[1])";
                            `,
                        },
                    },
                    {
                        title: "주문 생성 실패 시 Redis 재고 보상 복구",
                        description:
                            "Redis 재고 차감에 성공한 뒤 DB 주문 생성 과정에서 예외가 발생할 수 있기 때문에, 실패 시 Redis 재고를 다시 증가시키는 보상 로직을 추가했습니다.",
                        points: [
                            "Redis 재고 차감 성공 후 주문 생성을 시도했습니다.",
                            "주문 생성 또는 예약 정보 저장에 실패하면 catch 블록에서 Redis 재고를 복구했습니다.",
                            "Redis와 DB 사이의 상태 불일치를 줄이기 위해 실패 지점에서 보상 처리를 수행했습니다.",
                        ],
                        code: {
                            title: "주문 생성 실패 시 재고 복구",
                            language: "java",
                            content: `
                                redisStockService.decreaseStock(productId, quantity);
                                try {
                                    OrderResponseDto order = orderService.createOrder(
                                        userId,
                                        request,
                                        EXPIRED_SECONDS
                                    );

                                    redisReservationService.createReservation(
                                        order.getId(),
                                        productId,
                                        quantity,
                                        EXPIRED_SECONDS
                                    );

                                    return order;
                                } catch (RuntimeException e) {
                                    redisStockService.increaseStock(productId, quantity);
                                    throw e;
                                }
                            `,
                        },
                    },
                    {
                        title: "DB 최종 차감은 조건부 update로 처리",
                        description:
                            "결제 확정 단계에서는 DB 재고를 최종 차감했습니다. 이때 stock >= quantity 조건을 포함한 update 쿼리로 재고 부족 상태를 한 번 더 방어했습니다.",
                        points: [
                            "최종 확정 시점에 DB 재고를 조건부 update로 차감했습니다.",
                            "재고가 부족하면 update count가 0이 되어 실패로 처리했습니다.",
                            "Redis 선점과 DB 최종 차감을 분리해 빠른 요청 차단과 최종 정합성을 함께 확보했습니다.",
                        ],
                        code: {
                            title: "DB 최종 차감",
                            language: "java",
                            content: `
                                @Modifying(flushAutomatically = true)
                                @Query("""
                                    update Product p
                                    set p.stock = p.stock - :quantity
                                    where p.id = :id
                                    and p.stock >= :quantity
                                    """)
                                int decreaseStock(@Param("id") Long id, @Param("quantity") int quantity);
                            `,
                        },
                    },
                    {
                        title: "K6 부하 테스트로 동시 주문 처리 방식 검증",
                        description:
                            "비관적 락 방식과 Redis Lua Script 방식을 같은 조건에서 비교하기 위해 K6로 동시 주문 요청을 발생시키고 TPS와 P95 응답 시간을 측정했습니다.",
                        points: [
                            "1,000건부터 50,000건까지 요청 수를 늘리며 두 방식의 처리량을 비교했습니다.",
                            "TPS를 통해 트래픽 증가 상황에서 처리량이 안정적으로 유지되는지 확인했습니다.",
                            "P95 응답 시간을 기준으로 사용자 경험에 영향을 줄 수 있는 지연 구간을 비교했습니다.",
                        ],
                    },
                ],
                result: [
                    "Redis Lua Script로 재고 조회와 차감을 원자적으로 처리해 초과 판매를 방지했습니다.",
                    "주문 생성 실패 시 Redis 재고를 보상 복구해 재고와 주문 상태의 불일치를 줄였습니다.",
                    "재고 부족 요청을 Redis 단계에서 빠르게 차단해 DB lock 경합을 줄였습니다.",
                    "1,000건부터 50,000건까지의 동시 주문 테스트에서 평균 TPS가 약 15% 향상되었습니다.",
                    "P95 기준 응답 시간이 평균 약 60% 개선되었습니다.",
                    "트래픽 증가 상황에서도 TPS를 약 1,400~1,500 수준으로 안정적으로 유지했습니다.",],
                resultTable: {
                    title: "K6 - TPS, P95 테스트 결과",
                    columns: [
                        "요청 수",
                        "Redis TPS(ms)",
                        "비관적 락 TPS(ms)",
                        "TPS 승자",
                        "iteration p(95) 승자",
                    ],
                    rows: [
                        ["1,000개", "1,475", "1,488", "비관적락", "비관적락(231 vs 288 ms)"],
                        ["5,000개", "1,496", "1,521", "비관적락", "Redis(229 vs 323 ms)"],
                        ["10,000개", "1,438", "1,271", "Redis", "Redis(291 vs 541 ms)"],
                        ["20,000개", "1,451", "1,090", "Redis", "Redis(241 vs 969 ms)"],
                        ["50,000개", "1,498", "957", "Redis", "Redis(226 vs 1,220 ms)"],
                    ],
                },
                analysis: [
                    "Redis는 트래픽이 증가해도 TPS 1,400~1,500을 안정적으로 유지했습니다.",
                    "비관적 락은 소규모 요청에서는 유리했지만, 트래픽이 증가할수록 TPS가 불안정해졌습니다.",
                    "50,000건 테스트에서 비관적 락의 iteration p(95)가 1.2초를 넘으면서 사용자 경험이 크게 저하될 수 있음을 확인했습니다.",
                    "이 데이터를 근거로 한정 판매처럼 재고보다 많은 요청이 몰리는 상황에서는 Redis에서 재고 부족 요청을 먼저 차단하는 방식이 더 적합하다고 판단했습니다.",
                ],
            },
            {
                title: "결제 멱등성과 주문 확정 실패 문제",
                summary:
                    "결제 API는 사용자의 중복 클릭, 브라우저 새로고침, 네트워크 재시도 등으로 같은 요청이 여러 번 들어올 수 있습니다. 이때 요청마다 PG 결제를 호출하면 같은 주문에 대해 중복 결제가 발생할 수 있고, PG 결제는 성공했지만 내부 DB 처리에서 실패하면 결제는 완료됐지만 주문은 확정되지 않는 상태가 생길 수 있습니다.",
                keywords: [
                    "Idempotency Key",
                    "Redis Lock",
                    "PAYMENT_APPROVED",
                    "Order Finalization",
                ],
                problem: [
                    {
                        label: "1",
                        text: "같은 결제 요청이 반복되면 PG 결제가 중복 호출될 수 있었습니다.",
                    },
                    {
                        label: "2",
                        text: "PG 결제 성공 후 내부 주문 생성 또는 재고 차감 단계에서 실패하면 결제 상태와 주문 상태가 어긋날 수 있었습니다.",
                    },
                    {
                        label: "3",
                        text: "결제 성공 직후 바로 PAID 상태로 변경하면 장애 발생 시 어느 단계까지 성공했는지 복구 기준이 모호했습니다.",
                    },
                ],
                cause: [
                    {
                        label: "1",
                        text: "외부 PG 결제와 내부 DB 트랜잭션은 하나의 원자적 작업으로 묶을 수 없었습니다.",
                    },
                    {
                        label: "2",
                        text: "동일 요청을 구분하고 재사용할 수 있는 멱등성 기준이 필요했습니다.",
                    },
                    {
                        label: "3",
                        text: "결제 승인과 주문 확정을 하나의 상태로 처리하면 실패 지점을 분리해서 복구하기 어려웠습니다.",
                    },
                ],
                solution: [
                    {
                        title: "Idempotency Key 기반 결제 멱등성 적용",
                        description:
                            "클라이언트가 결제 요청 시 Idempotency-Key를 전달하고, 서버에서는 userId, orderId, idempotencyKey를 조합해 Redis key를 생성했습니다.",
                        points: [
                            "이미 처리된 요청이면 Redis에 저장된 응답을 그대로 반환했습니다.",
                            "처리 중인 요청이면 Redis lock으로 추가 진입을 차단했습니다.",
                            "결제 성공 후 응답을 Redis에 저장해 같은 요청에 동일 응답을 반환했습니다.",
                        ],
                    },
                    {
                        title: "결제 승인과 주문 확정 상태 분리",
                        description:
                            "PG 결제 성공 후 바로 PAID로 변경하지 않고, 먼저 PAYMENT_APPROVED 상태로 기록했습니다. 이후 DB 재고 차감과 주문 확정을 별도 단계로 처리했습니다.",
                        points: [
                            "PAYMENT_APPROVED 상태는 PG 결제는 승인됐지만 내부 주문 확정은 아직 완료되지 않은 상태를 의미합니다.",
                            "주문 확정 단계에서는 PAYMENT_APPROVED 상태의 주문만 재고 차감 후 PAID로 변경했습니다.",
                            "이미 PAID인 주문은 그대로 반환해 중복 재고 차감을 방지했습니다.",
                        ],
                    },
                ],
                result: [
                    "같은 결제 요청이 반복되어도 PG 결제가 중복 호출되지 않도록 막을 수 있었습니다.",
                    "처리 중인 요청은 Redis lock으로 차단하고, 이미 성공한 요청은 저장된 응답을 반환했습니다.",
                    "PAYMENT_APPROVED 상태를 통해 결제 승인과 주문 확정을 분리해 장애 발생 시 복구 기준을 명확히 했습니다.",
                    "결제는 성공했지만 내부 확정이 실패한 주문도 재시도 가능한 구조로 만들었습니다.",
                ],
            },
            {
                title: "Kafka 이벤트 유실과 중복 소비 문제",
                summary:
                    "주문 결제, 만료, 취소 같은 상태 변경이 발생하면 Kafka로 이벤트를 발행해야 합니다. 하지만 DB 상태 변경과 Kafka 발행은 하나의 원자적 작업으로 묶기 어렵기 때문에, DB 변경은 성공했지만 Kafka 발행이 실패하는 이벤트 유실 문제가 발생할 수 있습니다. 반대로 Kafka는 메시지를 최소 한 번 이상 전달할 수 있어 같은 이벤트가 중복 소비될 가능성도 있었습니다.",
                keywords: [
                    "Transactional Outbox",
                    "Kafka",
                    "ProcessedEvent",
                    "At-least-once",
                ],
                problem: [
                    {
                        label: "1",
                        text: "주문 상태는 PAID로 변경됐지만 Kafka 이벤트 발행에 실패하면 다른 서비스가 결제 완료 사실을 알 수 없었습니다.",
                    },
                    {
                        label: "2",
                        text: "Kafka의 at-least-once 전달 특성 때문에 같은 이벤트가 여러 번 소비될 수 있었습니다.",
                    },
                    {
                        label: "3",
                        text: "이벤트 유실과 중복 소비를 모두 고려하지 않으면 후속 처리의 신뢰성이 떨어질 수 있었습니다.",
                    },
                ],
                cause: [
                    {
                        label: "1",
                        text: "DB 트랜잭션과 Kafka 발행은 하나의 트랜잭션으로 처리하기 어렵습니다.",
                    },
                    {
                        label: "2",
                        text: "Kafka 발행 성공 여부를 DB에 남기지 않으면 실패한 이벤트를 추적하거나 재시도하기 어렵습니다.",
                    },
                    {
                        label: "3",
                        text: "Consumer가 이미 처리한 이벤트인지 확인하지 않으면 같은 비즈니스 로직이 반복 실행될 수 있습니다.",
                    },
                ],
                solution: [
                    {
                        title: "Transactional Outbox 패턴 적용",
                        description:
                            "주문 상태를 변경하는 DB 트랜잭션 안에서 Kafka를 바로 발행하지 않고, Outbox 테이블에 이벤트를 먼저 저장했습니다.",
                        points: [
                            "주문 상태 변경과 Outbox 이벤트 저장을 같은 DB 트랜잭션 안에서 처리했습니다.",
                            "별도 Publisher가 PENDING 또는 FAILED 상태의 Outbox 이벤트를 조회해 Kafka로 발행했습니다.",
                            "Kafka 발행 성공 시 PUBLISHED, 실패 시 FAILED로 상태를 저장해 재시도할 수 있게 했습니다.",
                        ],
                    },
                    {
                        title: "ProcessedEvent 테이블로 중복 소비 방지",
                        description:
                            "Kafka 이벤트에 eventId를 포함하고, Consumer는 이벤트 처리 전에 해당 eventId가 이미 처리됐는지 확인했습니다.",
                        points: [
                            "이미 처리된 eventId라면 비즈니스 로직을 다시 수행하지 않고 종료했습니다.",
                            "정상 처리된 이벤트는 ProcessedEvent 테이블에 저장했습니다.",
                            "Consumer Group 기준으로 처리 이력을 관리해 같은 이벤트의 중복 실행을 방지했습니다.",
                        ],
                    },
                ],
                result: [
                    "Outbox 패턴으로 DB 상태 변경 이후 Kafka 발행이 유실되는 문제를 줄였습니다.",
                    "발행 실패 이벤트를 FAILED 상태로 남겨 재시도 가능한 구조를 만들었습니다.",
                    "ProcessedEvent 테이블을 통해 Kafka 이벤트의 중복 소비를 방지했습니다.",
                    "주문 상태 변경 이후의 후속 처리를 더 안정적으로 확장할 수 있는 구조를 만들었습니다.",
                ],
            },
        ],

        performance: {
            testTool: "K6",
            scenario: "100VU / 100,000 requests",
            results: [
                "성공률 약 76%",
                "평균 응답 시간 약 16.17초",
                "p95 응답 시간 약 27.79초",
            ],
        },

        learned: [
            "DB 트랜잭션과 Redis 작업은 하나의 트랜잭션으로 묶이지 않으므로 보상 로직이 필요하다는 점을 학습했습니다.",
            "Kafka는 Producer 성공 여부만으로 Consumer 동작을 보장할 수 없고, Consumer Group과 offset 확인이 중요하다는 점을 경험했습니다.",
            "부하 테스트 결과는 단순 성공률보다 병목 원인을 함께 분석해야 의미가 있다는 점을 배웠습니다.",
        ],

        techGroups: [
            {
                category: "Backend",
                items: ["Java", "Spring Boot", "JPA", "Spring Security"],
            },
            {
                category: "Database / Cache",
                items: ["PostgreSQL", "Redis"],
            },
            {
                category: "Message Queue",
                items: ["Kafka"],
            },
            {
                category: "Infra / Test",
                items: ["Docker", "K6"],
            },
        ],
    },
];

export function getProjectDetail(slug: string) {
    return projectDetails.find((project) => project.slug === slug);
}