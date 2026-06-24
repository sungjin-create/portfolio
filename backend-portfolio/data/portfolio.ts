import { Project, Feature } from "@/shared/types/portfolio";

export const profile = {
  name: "유성진",
  role: "Backend Developer",
  description:
    "Java와 Spring 기반으로 주문, 결제, 재고, 이벤트 처리 시스템을 설계하고 구현합니다. \n 동시성 제어와 데이터 정합성에 관심이 많습니다.",
  githubUrl: "https://github.com/sungjin-create",
  email: "sungjinny5@naver.com",
};

export const featuredProjects: Project[] = [
  {
    slug: "limitedgoods",
    title: "LimitedGoods",
    desc: "Redis 재고 선점, Kafka 이벤트 처리, PostgreSQL 트랜잭션, K6 부하 테스트를 적용한 한정 상품 주문 시스템입니다.",
    stack: ["Java", "Spring Boot", "Redis", "Kafka", "PostgreSQL", "K6"],
    githubUrl: "https://github.com/sungjin-create/limitedgoods",
  },
];

export const projects: Project[] = [
  {
    slug: "mentomate",
    title: "MentoMate Service",
    desc: "주문 생성, 결제 승인, 결제 확정 흐름을 분리한 결제 시스템 프로젝트입니다.",
    stack: ["Spring", "JPA", "Transaction", "API Design"],
    externalUrl: "https://app.notion.com/p/MENTOR-MATE-e1dc122c527d4a8ab22fe717e3ad66cd?source=copy_link",
  },
];

export const features: Feature[] = [
  {
    title: "API Design",
    desc: "주문, 결제, 회원, 상품 API 설계",
  },
  {
    title: "Data Consistency",
    desc: "트랜잭션, 락, 재고 정합성 처리",
  },
  {
    title: "Event Driven",
    desc: "Kafka 기반 비동기 이벤트 처리",
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
    period: "2024.06 - 2026.01",
    description:
      "Java, Spring Framework, JSP, Oracle, PostgreSQL 기반의 기준정보 관리 시스템 개발과 데이터 정비 업무를 수행했습니다.",
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
