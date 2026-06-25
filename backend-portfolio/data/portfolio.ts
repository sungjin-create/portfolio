import { Project, Feature } from "@/shared/types/portfolio";

export const profile = {
  name: "유성진",
  role: "Backend Developer",
  description:
    "엔터프라이즈 SI 환경에서 2년 2개월간 백엔드 개발을 경험하며 데이터 정합성과 업무 흐름을 다뤄왔습니다.\n이 경험을 바탕으로 주문, 결제, 재고, 이벤트 처리처럼 신뢰성이 중요한 커머스 백엔드 시스템을 깊게 \n학습하고 구현하고 있습니다.", githubUrl: "https://github.com/sungjin-create",
  email: "sungjinny5@naver.com",
};

export const featuredProjects: Project[] = [
  {
    slug: "limitedgoods",
    title: "LimitedGoods",
    period: "2026.05 - 2026.06",
    desc: "Redis 재고 선점, Kafka 이벤트 처리, PostgreSQL 트랜잭션, K6 부하 테스트를 적용한 한정 상품 주문 시스템입니다.",
    stack: ["Java", "Spring Boot", "Redis", "Kafka", "PostgreSQL", "K6"],
    githubUrl: "https://github.com/sungjin-create/limitedgoods",
  },
];

export const projects: Project[] = [
  {
    slug: "mentomate",
    title: "MentoMate Service",
    period: "2023.10 - 2023.11",
    desc: "학습을 위해 멘토와 멘티를 매칭시켜주고 과제 관리를 할 수 있는 웹 어플리케이션입니다.",
    stack: ["Java", "Spring", "JPA", "Redis", "WebSocket"],
    externalUrl:
      "https://app.notion.com/p/MENTOR-MATE-e1dc122c527d4a8ab22fe717e3ad66cd?source=copy_link",
  },
];

export const features: Feature[] = [
  {
    title: "Order & Payment Flow",
    desc: "주문 생성, 결제 승인, 결제 확정처럼 단계가 \n 나뉘는 거래 흐름을 명확한 상태와 책임으로 \n 설계합니다.",
  },
  {
    title: "Data Consistency",
    desc: "트랜잭션, 락, 멱등성, 보상 처리를 고려해 \n 주문과 재고 데이터가 어긋나지 않도록 \n 설계합니다.",
  },
  {
    title: "Event Driven Processing",
    desc: "Kafka와 Outbox 패턴을 활용해 주문 이후 \n 알림, 정산, 재고 처리 같은 후속 작업을 \n 안정적으로 분리합니다.",
  },
];

export const skillGroups = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "JPA",
      "JSP",
      "JavaScript",
    ],
  },
  {
    category: "Database / Cache",
    skills: ["Oracle", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Infra / Tools",
    skills: [
      "Kafka",
      "AWS EC2",
      "S3",
      "Git",
      "Jenkins",
      "DBeaver",
      "IntelliJ",
      "Eclipse",
    ],
  },
];

export const experiences = [
  {
    slug: "tobeway",
    company: "TobeWay",
    companyLabel: "MDM 솔루션 기업",
    role: "Backend Developer",
    period: "2023.12 - 2026.01",
    duration: "2년 2개월",
    description:
      "엔터프라이즈 SI 환경에서 Java, Spring Framework 기반의 백엔드 개발을 수행했습니다. \n 기준정보 관리, 승인 Workflow, ERP 인터페이스 연동, 데이터 정합성 검증 업무를 통해 \n 안정적인 업무 처리 흐름과 데이터 검증 경험을 쌓았습니다.",
    highlights: [
      "LG 에너지솔루션 NMDM 구축 프로젝트 ",
      "LG 팜한농 SAP S/4HANA 업그레이드 프로젝트",
    ],
  },
];

export const learningPlans = [
  {
    title: "CI/CD",
    status: "Learning",
    description:
      "GitHub Actions와 Jenkins를 활용한 자동 빌드, 테스트, 배포 파이프라인을 학습하고 있습니다.",
    skills: ["GitHub Actions", "Jenkins", "Docker"],
  },
  {
    title: "AWS",
    status: "Learning",
    description:
      "EC2, S3, RDS를 활용해 백엔드 서비스를 클라우드 환경에 배포하는 과정을 학습하고 있습니다.",
    skills: ["EC2", "S3", "RDS", "VPC"],
  },
  {
    title: "Deployment",
    status: "Planned",
    description:
      "Docker 기반 배포, 무중단 배포, 서버 모니터링까지 확장할 계획입니다.",
    skills: ["Docker", "Nginx", "Monitoring"],
  },
];
