import Link from "next/link";

const languageCards = [
  {
    href: "/ko",
    label: "한국어 페이지",
    title: "뷰티픽트 | BeautyPicked",
    description: "실사용 기준으로 솔직하게 리뷰하는 K-뷰티 픽",
  },
  {
    href: "/ja",
    label: "日本語ページ",
    title: "ミンのKビューティーROOM",
    description: "毎日使えるリアルな韓国コスメをやさしく紹介",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff6f9] px-6 text-[#2d1e21]">
      <main className="w-full max-w-xl rounded-2xl bg-white/90 p-8 shadow-lg shadow-[#e3c9d5]/60">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a7180]">Language</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#2c1a1d]">언어를 선택하세요</h1>
        <p className="mt-1 text-sm text-[#6b555d]">뷰티픽트의 한국어/일본어 프로필을 나눴어요.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {languageCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-1 rounded-xl border border-[#f0d9e3] bg-white/70 p-4 shadow-sm shadow-[#e3c9d5]/60 transition hover:-translate-y-0.5 hover:border-[#d6b8c5] hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a56a7b]">
                {card.label}
              </span>
              <span className="text-lg font-semibold text-[#2c1a1d]">{card.title}</span>
              <span className="text-sm text-[#6b555d]">{card.description}</span>
              <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-[#a56a7b]">
                바로 가기
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
