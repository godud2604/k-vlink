import type { Metadata } from "next";
import { ProfilePage, type ProfileContent } from "../components/ProfilePage";

const koreanContent: ProfileContent = {
  headerLabel: "BeautyPicked",
  profileName: "뷰티픽트 | BeautyPicked",
  tagline: "실사용 기준으로 솔직하게 리뷰하는 K-뷰티 픽",
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
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      title: "수분 진정 에센스",
      detail: "2레이어링으로 밤까지 촉촉",
      size: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1554344058-8d1d1bc1a3d7?auto=format&fit=crop&w=700&q=80",
      title: "저자극 클렌징",
      detail: "밤+폼 2단계 루틴",
      size: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
      title: "데일리 립",
    },
    {
      src: "https://images.unsplash.com/photo-1502736840710-4b0b60f9b9a9?auto=format&fit=crop&w=500&q=80",
      title: "앰플 믹싱 팁",
    },
    {
      src: "https://images.unsplash.com/photo-1546484959-f9a9c6c915b9?auto=format&fit=crop&w=500&q=80",
      title: "탄력 케어 루틴",
    },
    {
      src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
      title: "쿨링 마스크",
    },
    {
      src: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=500&q=80",
      title: "밤 사이 오일 세럼",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      title: "톤 보정 베이스",
    },
  ],
  picks: [
    "https://images.unsplash.com/photo-1524504542391-127872011665?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1542293787938-4d273c37c4d5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524504388940-9e7dc253a0d4?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524504388940-1e9822e6f677?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1542293787938-4d273c37c4d5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
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
  title: "BeautyPicked | 한국어",
  description: "실사용 기준으로 솔직하게 리뷰하는 K-뷰티 픽, BeautyPicked 한국어 페이지.",
};

export default function KoreanPage() {
  return <ProfilePage content={koreanContent} />;
}
