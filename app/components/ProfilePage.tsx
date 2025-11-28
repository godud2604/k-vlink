import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type SocialType = "naver" | "thread" | "youtube" | "instagram";

type SocialLink = {
  type: SocialType;
  href: string;
};

type Post = {
  src: string;
  title: string;
  detail?: string;
  size?: string;
  poster?: string;
  mediaType?: "image" | "video";
};

type ProfileTheme = {
  background?: string;
  surface?: string;
  card?: string;
  textStrong?: string;
  textMuted?: string;
  textSoft?: string;
  accent?: string;
  tagBg?: string;
  tagText?: string;
  shadow?: string;
  ring?: string;
  line?: string;
  overlay?: string;
};

export type ProfileContent = {
  headerLabel: string;
  profileName: string;
  tagline: string;
  introParagraphs?: string[];
  introLead?: string;
  introList?: string[];
  introFooter?: string[];
  highlights: string[];
  tags: string[];
  posts: Post[];
  postsHint?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  socialLinks?: SocialLink[];
  socials?: SocialType[];
  footerLabel?: string;
  theme?: ProfileTheme;
};

const defaultSocials: SocialType[] = ["youtube", "instagram"];

function SocialIcon({ type }: { type: SocialType }) {
  if (type === "naver") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M4 4h16v16H4zm4.7 4.5v7h2.7v-2.9l2.1 2.9H16v-7h-2.7v2.8l-2-2.8z"
        />
      </svg>
    );
  }

  if (type === "thread") {
    return (
      <Image src="/threads.svg" alt="Threads" width={20} height={20} className="h-5 w-5" priority={false} />
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M21.8 7.2s-.2-1.5-.8-2.2c-.8-.8-1.6-.8-2-0.9C16.3 4 12 4 12 4h0s-4.3 0-7 .1c-.4 0-1.2.1-2 .9-.6.7-.8 2.2-.8 2.2S2 8.9 2 10.6v1.2c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.8.8 1.8.8 2.3.9 1.7.2 7 .2 7 .2s4.3 0 7-.2c.4 0 1.2-.1 2-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-1.2c0-1.7-.2-3.4-.2-3.4Z"
        />
        <path fill="#fff" d="m10 9 4.5 2.6L10 14.2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm5.4-.6a.9.9 0 1 1 .9-.9.9.9 0 0 1-.9.9Z"
      />
    </svg>
  );
}

export function ProfilePage({ content }: { content: ProfileContent }) {
  const socialLinks = content.socialLinks;
  const socials = content.socials ?? defaultSocials;
  const footerLabel = content.footerLabel ?? content.headerLabel;
  const postsHint =
    content.postsHint ?? "영상 클릭하면 해당 제품을 더 자세히 볼 수 있어요.";
  const theme = {
    background: content.theme?.background ?? "#fff6f9",
    surface: content.theme?.surface ?? "rgba(255,255,255,0.9)",
    card: content.theme?.card ?? "#ffffff",
    textStrong: content.theme?.textStrong ?? "#2d1e21",
    textMuted: content.theme?.textMuted ?? "#5a424a",
    textSoft: content.theme?.textSoft ?? "#3f3033",
    accent: content.theme?.accent ?? "#a56a7b",
    tagBg: content.theme?.tagBg ?? "rgba(255,255,255,0.9)",
    tagText: content.theme?.tagText ?? "#5a424a",
    shadow: content.theme?.shadow ?? "rgba(227,201,213,0.55)",
    ring: content.theme?.ring ?? "#ffffff",
    line: content.theme?.line ?? "#a56a7b",
    overlay:
      content.theme?.overlay ??
      "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.1), transparent)",
  };
  const themeVars: CSSProperties = {
    ["--page-bg" as string]: theme.background,
    ["--surface-bg" as string]: theme.surface,
    ["--card-bg" as string]: theme.card,
    ["--text-strong" as string]: theme.textStrong,
    ["--text-muted" as string]: theme.textMuted,
    ["--text-soft" as string]: theme.textSoft,
    ["--accent" as string]: theme.accent,
    ["--tag-bg" as string]: theme.tagBg,
    ["--tag-text" as string]: theme.tagText,
    ["--shadow-color" as string]: theme.shadow,
    ["--ring-color" as string]: theme.ring,
    ["--line-color" as string]: theme.line,
  };

  return (
    <div
      className="flex min-h-screen justify-center px-4"
      style={{ ...themeVars, background: theme.background, color: theme.textStrong }}
    >
      <main className="w-full max-w-[520px] py-6">
        <header
          className="flex items-center justify-center rounded-b-2xl px-2 py-3 backdrop-blur"
          style={{ background: "var(--surface-bg)", boxShadow: "0 14px 38px var(--shadow-color)" }}
        >
          <div className="flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.18em]">
            <span>{content.headerLabel}</span>
          </div>
        </header>

        <section className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-[var(--ring-color)] shadow-[0_16px_40px_var(--shadow-color)]">
              <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                fill
                sizes="112px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--text-strong)]">{content.profileName}</h1>
              <p className="text-sm font-semibold text-[var(--text-muted)]">{content.tagline}</p>
            </div>
          </div>

          {content.introLead ? (
            <p className="mt-1 text-[15px] font-bold leading-[1.6] text-[var(--text-strong)]">
              {content.introLead}
            </p>
          ) : null}

          {content.introList?.length ? (
            <ul className="mt-1 space-y-1 text-[15px] font-semibold leading-[1.55] text-[var(--text-strong)]">
              {content.introList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 self-center rounded-sm bg-[var(--accent)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {content.introParagraphs?.length ? (
            <div className="mt-1 space-y-1 text-[14px] font-semibold leading-[1.55] text-[var(--text-soft)]">
              {content.introParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          ) : null}

          {content.introFooter?.length ? (
            <div className="mt-2 space-y-1 text-[15px] font-bold leading-[1.55] text-[var(--text-strong)]">
              {content.introFooter.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          ) : null}

          <ul className="mt-1 space-y-1 text-[14px] font-semibold leading-[1.5] text-[var(--text-strong)]">
            {content.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 self-center rounded-sm bg-[var(--accent)]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap justify-start gap-2 text-[13px] font-semibold text-[var(--tag-text)]">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 backdrop-blur shadow-[0_12px_28px_var(--shadow-color)]"
                style={{ background: "var(--tag-bg)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            {socialLinks
              && socialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full text-[var(--text-strong)] transition hover:-translate-y-0.5"
                    style={{
                      background: "var(--card-bg)",
                      boxShadow: "0 16px 40px var(--shadow-color)",
                    }}
                    aria-label={item.type}
                  >
                    <SocialIcon type={item.type} />
                  </Link>
                ))
              }
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-start justify-between gap-3 text-[var(--text-strong)]">
            <div className="flex items-center gap-2">
              <div className="h-5 w-1 rounded-full bg-[var(--line-color)]" />
              <h2 className="text-xl font-semibold">Posts</h2>
            </div>
            <p className="text-right text-xs font-semibold leading-5 text-[var(--text-muted)] whitespace-nowrap">
              {postsHint}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
            {content.posts.map((post) => (
              <div
                key={`${post.title}-${post.src}`}
                className={`relative aspect-[9/16] overflow-hidden rounded-2xl ${post.size ?? ""}`}
                style={{
                  background: "var(--card-bg)",
                  boxShadow: "0 12px 32px var(--shadow-color)",
                }}
              >
                {post.mediaType === "video" || post.src.endsWith(".mp4") ? (
                  <a
                    href={post.poster ?? post.src}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0"
                    aria-label={`${post.title} product detail`}
                  >
                    <video
                      src={post.src}
                      poster={post.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="h-full w-full cursor-pointer object-cover"
                    />
                  </a>
                ) : (
                  <Image
                    src={post.src}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 33vw, 200px"
                    className="absolute inset-0 object-cover"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: theme.overlay }}
                />
                <div className="absolute inset-x-3 bottom-3 z-[2] text-white">
                  <p className="text-xs uppercase tracking-wide">{post.title}</p>
                  {post.detail && <p className="text-[11px] text-white/90">{post.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--line-color)]" aria-hidden />
          Created by
          <div className="flex items-center gap-1 font-semibold text-[var(--text-strong)]">
            <span>{footerLabel}</span>
          </div>
          <span className="h-px w-8 bg-[var(--line-color)]" aria-hidden />
        </footer>
      </main>
    </div>
  );
}
