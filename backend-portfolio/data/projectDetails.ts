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
        githubUrl: "https://github.com",

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
            title: "Kafka Consumer 수신 실패",
            problem:
            "Producer는 정상적으로 offset을 증가시키고 있었지만 Spring Consumer에서 메시지를 수신하지 못했습니다.",
            cause:
            "Consumer Group offset, bootstrap server 설정, local/docker 실행 환경 구분이 명확하지 않았습니다.",
            solution:
            "groupId를 새로 분리하고, 로컬 실행 시 localhost:9092, 컨테이너 실행 시 kafka:9092를 사용하도록 설정을 정리했습니다.",
            result:
            "console consumer와 Spring consumer 양쪽에서 메시지 수신을 확인했습니다.",
        },
        {
            title: "Redis 재고 차감 후 DB 주문 생성 실패",
            problem:
            "Redis 재고 차감은 성공했지만 이후 DB 주문 생성 과정에서 예외가 발생하면 재고 불일치가 생길 수 있었습니다.",
            cause:
            "Redis 작업과 DB 트랜잭션은 하나의 트랜잭션으로 묶이지 않기 때문입니다.",
            solution:
            "예외 발생 시 Redis 재고를 다시 증가시키는 보상 트랜잭션 로직을 추가했습니다.",
            result:
            "DB 저장 실패 상황에서도 선점된 Redis 재고를 복구할 수 있도록 처리했습니다.",
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