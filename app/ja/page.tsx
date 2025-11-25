import type { Metadata } from "next";
import { ProfilePage, type ProfileContent } from "../components/ProfilePage";

const japaneseContent: ProfileContent = {
  headerLabel: "ミンのROOM",
  profileName: "ミンのKビューティーROOM",
  tagline: "毎日使えるリアルな韓国コスメをやさしく紹介",
  introFooter: [
    "——.+",
    "166cm / 1996 / プロダクトエンジニア",
    "→ ビューティーブロガー（2年目）",
  ],
  introParagraphs: [
    "実際に使って「本当に良かった」と思えた韓国コスメだけを、やさしく分かりやすく紹介するチャンネルです。",
    "派手な誇張よりも、毎日使えるリアルさを大切に。Kビューティーの魅力を、丁寧にお届けします。",
  ],
  highlights: [
    "実際に使って良かったものだけ紹介",
    "毎日使えるリアルな使用感を重視",
    "初心者でも選びやすい丁寧な説明",
    "敏感肌でも使いやすいアイテム中心",
    "動画で紹介した商品の情報をまとめて掲載",
  ],
  tags: ["韓国コスメ", "スキンケア", "メイクアップ", "ベースメイク", "トーンアップ", "レビュー"],
  posts: [
    {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      title: "水分エッセンス重ね塗り",
      detail: "敏感肌OKな夜ケア",
      size: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1554344058-8d1d1bc1a3d7?auto=format&fit=crop&w=700&q=80",
      title: "二段階クレンジング",
      detail: "バーム→ジェルの組み合わせ",
      size: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
      title: "うるツヤリップ",
    },
    {
      src: "https://images.unsplash.com/photo-1502736840710-4b0b60f9b9a9?auto=format&fit=crop&w=500&q=80",
      title: "アンプル＋クリーム",
    },
    {
      src: "https://images.unsplash.com/photo-1546484959-f9a9c6c915b9?auto=format&fit=crop&w=500&q=80",
      title: "ツヤ仕上げのハイライト",
    },
    {
      src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
      title: "シートマスクベスト3",
    },
    {
      src: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=500&q=80",
      title: "夜用オイルの重ね方",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      title: "トーンアップベース",
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
    alt: "ミンのKビューティーROOMのプロフィール写真",
  },
  socialLinks: [
    { type: "naver", href: "https://m.blog.naver.com/ees238?tab=1" },
    { type: "thread", href: "https://www.threads.com/@nomad._hy" },
    { type: "youtube", href: "https://www.youtube.com/@ミンのKビューティーROOM" },
  ],
};

export const metadata: Metadata = {
  title: "ミンのKビューティーROOM | 日本語",
  description: "毎日使えるリアルな韓国コスメだけを届ける、ミンのKビューティーROOM 日本語ページ。",
};

export default function JapanesePage() {
  return <ProfilePage content={japaneseContent} />;
}
