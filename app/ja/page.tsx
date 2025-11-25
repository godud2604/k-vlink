import type { Metadata } from "next";
import { ProfilePage, type ProfileContent } from "../components/ProfilePage";

const videoSrc = "/video/info_card_shorts.mp4";

const japaneseContent: ProfileContent = {
  headerLabel: "ミンのROOM",
  profileName: "ミンのKビューティーROOM",
  tagline: "毎日使えるリアルな韓国コスメをやさしく紹介",
  postsHint: "動画をタップすると商品の詳細が見られます。",
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
      src: videoSrc,
      poster: "https://amzn.to/4ocfU8s",
      mediaType: "video",
      title: "フェイスラインがすっきり見えるクリームでした",
      size: "col-span-2 row-span-2",
    },
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
  title: "ミンのKビューティーROOM",
  description: "毎日使えるリアルな韓国コスメだけを届ける、ミンのKビューティーROOM 日本語ページ。",
};

export default function JapanesePage() {
  return <ProfilePage content={japaneseContent} />;
}
