import type { Metadata } from "next";
import { ProfilePage, type ProfileContent } from "../components/ProfilePage";

const videoSrc = "/video/info_card_shorts.mp4";

const japaneseContent: ProfileContent = {
  headerLabel: "清潔マン30秒",
  profileName: "清潔マン30秒",
  tagline: "30秒で清潔感アップ。ビジネスマン向け即効ケア",
  postsHint: "動画をタップすると商品の詳細が見られます。",
  introFooter: [
    "——.+",
    "1988 / サラリーマン",
    "→ メンズ向け清潔ケア研究家",
  ],
  introParagraphs: [
    "実際に使って「本当に効果を感じた」アイテムだけを、短く・分かりやすく紹介するチャンネルです。",
    "派手な演出よりも、仕事場で通用する“清潔感”を最優先。Amazonでそのまま買える即効アイテムを厳選し、実用的なソリューションをお届けします。",
  ],
  highlights: [
    "30秒で見た目が変わる即効ケアだけ紹介",
    "テカリ・毛穴・乾燥などメンズの悩みに特化",
    "難しい美容知識ゼロでも分かる説明",
    "職場で使いやすいアイテム中心",
    "動画で紹介した商品のリンクをまとめて掲載",
  ],
  tags: [
    "清潔感",
    "身だしなみ",
    "メンズケア",
    "ビジネスマン",
    "30秒ケア",
    "Amazonおすすめ",
    "大人男子",
    "テカリ対策",
    "毛穴ケア",
  ],
  posts: [
    {
      src: "/video/labello_ja.mp4",
      poster: "https://amzn.to/48lKaIh",
      mediaType: "video",
      title: "30代、第一印象は「唇」で決まる。",
      size: "col-span-2 row-span-2",
    },
    {
      src: "/video/노세밤_ja.mp4",
      poster: "https://amzn.to/48mkxH5",
      mediaType: "video",
      title: "30代、第一印象は「唇」で決まる。",
      size: "col-span-2 row-span-2",
    },
  ],
  heroImage: {
    src: "/profile-ja.png",
    alt: "清潔マン30秒のプロフィール写真",
  },
  theme: {
    background:
      "radial-gradient(circle at 18% 22%, rgba(76,188,255,0.18), transparent 32%), radial-gradient(circle at 82% 8%, rgba(45,255,214,0.12), transparent 30%), linear-gradient(135deg, #0c1f33 0%, #123957 50%, #0f4856 100%)",
    surface: "rgba(15,36,54,0.82)",
    card: "rgba(10,28,43,0.86)",
    textStrong: "#e8f3fb",
    textMuted: "#a8c8df",
    textSoft: "#c4d8e8",
    accent: "#4cc7ff",
    tagBg: "rgba(255,255,255,0.08)",
    tagText: "#b5d1e5",
    shadow: "rgba(6,14,24,0.6)",
    ring: "#38f2d5",
    line: "#4cb5ff",
    overlay: "linear-gradient(to top, rgba(6,14,24,0.58), rgba(6,14,24,0.2), transparent)",
  },
};

export const metadata: Metadata = {
  title: "清潔マン30秒",
  description: "30秒で清潔感アップ。ビジネスマン向け即効ケアを紹介するページ。",
};

export default function JapanesePage() {
  return <ProfilePage content={japaneseContent} />;
}
