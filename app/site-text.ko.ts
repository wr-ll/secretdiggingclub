// 웹사이트 전체에서 사용하는 한국어 문구를 편집하는 파일입니다.
export const siteTextKo = {
  brandName: "비밀발굴부",
  description: "츠쿠미즈, 비봉클럽, 동방 프로젝트에 관해 이야기하는 동인 서클 겸 디스코드 서버입니다.",
  ui: { skipToContent: "본문으로 이동", homeLabel: "비밀발굴부 홈", primaryNavigation: "주요 메뉴", footerNavigation: "하단 메뉴", languageNavigation: "언어" },
  gateway: { metadataDescription: "비밀발굴부의 표시 언어를 선택하세요.", message: "언어를 선택하세요. 브라우저 설정에 따라 자동으로 선택됩니다.", navigationLabel: "언어 선택" },
  notFound: { message: "이 페이지는 존재하지 않습니다." },
  nav: { writings: "글", people: "사람들", about: "소개", discord: "디스코드" },
  home: {
    read: "글 읽기", recent: "최근 글", viewAll: "전체 보기", noWritings: "아직 게시한 글이 없습니다.", club: "서클 소개",
    clubText: "저희는 작은 동인 서클 겸 디스코드 커뮤니티입니다. 관심사에 관한 에세이, 워킹 페이퍼, 분석, 의견/해석 글을 게시합니다.",
    privacy: "사이트는 수동으로 관리합니다. 디스코드 서버와 웹사이트는 별도로 관리합니다.",
    about: "자세히 보기", people: "사람들", allProfiles: "프로필 전체 보기", noPeople: "아직 공개 프로필이 없습니다.", join: "저희 디스코드에 참여",
    joinText: "츠쿠미즈, 비봉클럽 및 관련 관심사에 관해 이야기해 보세요.", serverInfo: "서버 안내",
  },
  writings: { title: "글", intro: "에세이, 분석, 워킹 페이퍼, 의견/해석 글을 게시합니다.", search: "글 검색", placeholder: "제목, 작성자, 종류, 태그로 검색…", noResults: "검색 결과가 없습니다.", empty: "아직 게시한 글이 없습니다." },
  people: { title: "사람들", intro: "공개 프로필은 선택 사항이며 수동으로 관리합니다. 디스코드 서버 참여만으로 이곳에 표시되지 않습니다.", empty: "아직 공개 프로필이 없습니다.", interests: "관심사", elsewhere: "외부 링크", noLinks: "등록된 링크가 없습니다.", policy: "프로필 방침", policyText: "가명을 사용하며 수동으로 관리합니다.", publications: "게시한 글", noPublications: "아직 게시한 글이 없습니다.", allPeople: "사람들 전체 보기" },
  about: {
    title: "소개", intro: "비밀발굴부는 독립 동인 서클이자 디스코드 커뮤니티입니다.",
    p1: "한 번 더 검색하고 비교하거나 주석을 달 가치가 있는 주제를 좋아합니다. 에세이, 분석, 워킹 페이퍼, 리뷰, 의견/해석 글을 게시합니다.",
    serverTitle: "웹사이트와 서버", server1: "이 사이트는 검색 가능한 공개 아카이브입니다. 대화는 디스코드에서 이루어집니다. 참여만으로 공개 프로필이 만들어지지 않으며 서버 메시지도 자동으로 옮겨지지 않습니다.", server2: "디스코드 인용은 수동으로 선정하고 해당 참여자의 승인을 받은 경우에만 게시합니다.",
    editorialTitle: "편집 방침", editorial: "모든 자료는 사이트 소유자가 검토하고 수동으로 게시합니다. 투고, 협업, 공개 프로필 게재 여부는 소유자가 결정합니다.",
    copyrightTitle: "저작권", copyright: "저작권은 각 작성자에게 있습니다. 공개 콘텐츠 라이선스를 부여하지 않으며 모든 권리를 보유합니다.",
  },
  discord: { title: "디스코드", intro: "대화, 참고자료 공유, 작업 중인 글을 위한 공간입니다.", widget: "디스코드 서버", widgetHelp: "디스코드에서 불러오기를 허용하면 여기에 서버 위젯이 표시됩니다.", expect: "서버 안내", items: ["작품, 번역, 아카이브 및 관련 관심사에 관해 대화합니다.", "가벼운 대화와 자세한 분석을 모두 환영하는 환경입니다.", "대화는 기본적으로 비공개이며 웹사이트에 자동으로 옮겨지지 않습니다.", "공개 프로필과 기고는 선택 사항이며 가명을 사용할 수 있습니다."], join: "서버 참여", forthcoming: "초대 링크 준비 중" },
  article: { writtenBy: "작성자", published: "게시일", format: "종류", length: "읽는 시간", minutes: "분", tags: "태그", rights: "저작권은 작성자에게 있습니다." },
  kinds: { "essay": "에세이", "working-paper": "워킹 페이퍼", "opinion-hc": "의견/해석" },
  footer: "비밀발굴부 및 각 작성자. 모든 권리를 보유합니다.",
} as const;
