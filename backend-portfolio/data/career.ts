export const careers = [
  {
    slug: "tobeway",
    company: "투비웨이",
    role: "Backend Developer",
    period: "2023.12 - 2026.01",
    duration: "2년 2개월",

    summary:
      "기업 MDM 및 ERP 연계 시스템 구축, 기준정보 데이터 관리 및 인터페이스 개발 수행",

    projects: 2,

    achievements: [
      "기준정보 약 210만 건 정비",
      "인터페이스 데이터 일 평균 1,100건 처리",
      "처리 시간 최대 30% 단축",
      "오류율 최대 20% 감소",
    ],
  },
];

export const career = {
  company: "투비웨이",
  department: "솔루션 개발팀",
  role: "Backend Developer",
  position: "사원 / 팀원",
  period: "2023.12 - 2026.01",
  duration: "2년 2개월",
  summary:
    "솔루션 유지보수, 업그레이드, SI 솔루션 개발 업무를 수행하며 기업 MDM 및 ERP 연계 시스템을 개발했습니다.",

  metrics: [
    { label: "총 경력", value: "2년 2개월" },
    { label: "정비 데이터", value: "210만 건+" },
    { label: "일 처리 인터페이스", value: "1,100건+" },
    { label: "주요 프로젝트", value: "2건" },
  ],

  projects: [
    {
      title: "LG에너지솔루션 NMDM 개발 프로젝트",
      period: "2024.06 - 2025.07",
      client: "LG에너지솔루션",
      team: "BE 3명 / FE 1명 / 기획 2명",
      overview:
        "LG화학과 공동 사용 중이던 MDM 시스템 분리 과정에서 신규 NMDM 시스템 구축 및 기준정보 데이터 정비를 수행했습니다.",
      responsibilities: [
        "Material / Customer / Vendor / COA 기준정보 관리 시스템 개발",
        "MBR(Master Business Rule) 검증 로직 설계 및 개발",
        "기준정보 등록/변경 Workflow 및 권한(Role) 관리 기능 개발",
        "ERP 인터페이스 연동 및 데이터 정합성 검증",
        "대량 데이터 정비 및 테스트 데이터 생성",
      ],
      achievements: [
        "기준정보 약 200만 건 데이터 정비 및 검증 수행",
        "일 평균 1,000건 이상 인터페이스 데이터 처리",
        "데이터 처리 프로세스 개선으로 처리 시간 30% 단축",
        "데이터 검증 로직 강화로 오류율 20% 감소",
        "인터페이스 사전 검증 체계 구축으로 ERP 연동 안정성 향상",
      ],
      techStack: [
        "Java",
        "Spring Framework",
        "JSP",
        "PostgreSQL",
        "OracleDB",
        "ExtJS",
        "SVN",
        "Jenkins",
      ],
    },
    {
      title: "LG 팜한농 SAP ERP S/4HANA 업그레이드 프로젝트",
      period: "2025.08 - 2026.01",
      client: "팜한농",
      team: "BE 2명 / 기획 1명",
      overview:
        "SAP ERP S/4HANA 업그레이드 대응을 위한 MDM 인터페이스 개선 및 기준정보 데이터 정비를 수행했습니다.",
      responsibilities: [
        "S/4HANA 연계 인터페이스 개선 및 프로그램 개발",
        "ERP 데이터 송수신 구조 분석 및 로직 개선",
        "기준정보 데이터 정비 및 검증 프로세스 구축",
        "예외 처리 및 조건 로직 개발",
        "통합 테스트 및 인터페이스 검증 수행",
      ],
      achievements: [
        "기준정보 약 10만 건 데이터 정비 및 검증 수행",
        "일 평균 100건 이상 인터페이스 데이터 처리",
        "인터페이스 개선을 통해 처리 시간 20% 단축",
        "데이터 검증 로직 강화로 오류율 20% 감소",
        "ERP 업그레이드 대응 인터페이스 안정성 확보",
      ],
      techStack: [
        "Java",
        "Spring Framework",
        "JSP",
        "PostgreSQL",
        "OracleDB",
        "ExtJS",
        "SVN",
        "Jenkins",
      ],
    },
  ],

  technicalExperience: [
    {
      category: "Backend",
      items: ["Java", "Spring Framework", "JSP"],
    },
    {
      category: "Database",
      items: ["OracleDB", "PostgreSQL"],
    },
    {
      category: "Integration",
      items: ["ERP Interface", "SAP S/4HANA"],
    },
    {
      category: "Tools",
      items: ["SVN", "Jenkins", "DBeaver", "Eclipse"],
    },
  ],

  learned: [
    "기준정보 시스템에서는 기능 구현보다 데이터 정합성과 업무 프로세스 이해가 중요하다는 점을 경험했습니다.",
    "ERP 인터페이스는 단순 송수신보다 사전 검증, 예외 처리, 데이터 추적 가능성이 중요하다는 점을 배웠습니다.",
    "대량 데이터 정비 업무를 통해 SQL 기반 데이터 분석과 검증 역량을 키웠습니다.",
  ],
};