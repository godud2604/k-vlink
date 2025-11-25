import type { Metadata } from "next";
import { ProfilePage, type ProfileContent } from "../components/ProfilePage";

const videoSrc = "/video/info_card_shorts.mp4";

const koreanContent: ProfileContent = {
  headerLabel: "BeautyPicked",
  profileName: "뷰티픽트 | BeautyPicked",
  tagline: "실사용 기준으로 솔직하게 리뷰하는 K-뷰티 픽",
  postsHint: "영상 클릭하면 해당 제품을 더 자세히 볼 수 있어요.",
  introParagraphs: [
    "2년째 뷰티 제품을 직접 써보고 리뷰하고 있어요.",
    "과장 없이, 실사용 기준으로 솔직하게.",
  ],
  highlights: [
    "실제로 써보고 좋았던 제품만 소개",
    "과장 없는 리얼 사용감 중심 후기",
    "매일쓰기 좋은 데일리템 위주 픽",
    "영상 속 제품 정보를 한곳에 정리",
  ],
  tags: ["K-Beauty", "스킨케어", "메이크업", "클렌징", "민감피부", "리뷰/추천"],
  posts: [
    {
      src: videoSrc,
      poster: "https://link.coupang.com/a/c69wOq",
      mediaType: "video",
      title: "입가·턱선 고민이면 이거부터 써보세요",
      size: "col-span-2 row-span-2",
    },
  ],
  heroImage: {
    src: "/profile.jpg",
    alt: "BeautyPicked 프로필 사진",
  },
  socialLinks: [
    { type: "naver", href: "https://m.blog.naver.com/ees238?tab=1" },
    { type: "thread", href: "https://www.threads.com/@nomad._hy" },
    { type: "youtube", href: "http://www.youtube.com/@뷰티픽트" },
  ],
};

export const metadata: Metadata = {
  title: "BeautyPicked",
  description: "실사용 기준으로 솔직하게 리뷰하는 K-뷰티 픽, BeautyPicked 한국어 페이지.",
};

export default function KoreanPage() {
  return <ProfilePage content={koreanContent} />;
}
