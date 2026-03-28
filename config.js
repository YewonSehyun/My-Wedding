/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이세현",
    nameEn: "Lee Se Hyun",
    father: "이용욱",
    mother: "김연자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김예원",
    nameEn: "Kim Ye Won",
    father: "김주진",
    mother: "이유진",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-23",
    time: "12:00",
    venue: "잠실 더베네치아",
    hall: "웨딩홀 3층",
    address: "서울시 송파구 올림픽로 35 다길 42 (루터회관 3층)",
    tel: "02-6424-7000",
    mapLinks: {
      kakao: "https://kko.to/8x6IQU7Vq5",
      naver: "https://naver.me/5UEc8CvQ"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "세상에서 가장 편한 사이로 만나,\n현관 앞에서 서로를 기다리고,\n\n예쁜 웃음으로 하루를 나누며,\n원래부터 함께였던 것처럼 살아가려 합니다."
  },
const storyContentEl = document.getElementById("storyContent");



  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이세현", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "이용욱", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김연자", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김예원", bank: "하나은행", number: "000-000-000000" },
      { role: "어머니", name: "이유진", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "세현 ♥ 예원 결혼합니다",
    description: "2026년 8월 23일, 소중한 분들을 초대합니다."
  }
};
