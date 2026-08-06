"use client";

import { useEffect, useRef } from "react";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { useTranslations } from "next-intl";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

type FeatureMail = {
  sender: string;
  subject: string;
  time: string;
};

type SovereigntyCard = {
  num: string;
  title: string;
  text: string;
};

const MessagerieBlueMind = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("MessagerieBluemind");

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els || els.length === 0) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add("in"));
    }
  }, []);

  const featureItems = t.raw("features.items") as string[];
  const mails = t.raw("mock.mails") as FeatureMail[];
  const sovereigntyCards = t.raw("sovereignty.cards") as SovereigntyCard[];
  const trackParagraphs = t.raw("track.paragraphs") as string[];

  return (
    <div
      ref={rootRef}
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} bm-root`}
    >
      <section className="hero ">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{t("hero.eyebrow")}</div>
            <h1>
              {t("hero.titlePrefix")}{" "}
              <span className="accent">{t("hero.titleAccent")}</span>
            </h1>
            <p className="hero-sub">{t("hero.subtitle")}</p>
            <p className="lead">{t("hero.lead")}</p>
            <div className="cta-row">
              <a href="/#contact" className="btn btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M4 6l8 7 8-7M4 6v12h16V6" stroke="#fff" />
                </svg>
                {t("hero.ctaContact")}
              </a>
            </div>
            <div className="badge-row">
              <span className="badge">{t("hero.badges.imap")}</span>
              <span className="badge">{t("hero.badges.smtp")}</span>
              <span className="badge">{t("hero.badges.caldav")}</span>
              <span className="badge">{t("hero.badges.carddav")}</span>
              <span className="badge">{t("hero.badges.rgpd")}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit-hero">
              <div className="ring-static" />
              <div className="ring-inner" />
              <svg className="wheel-svg" viewBox="0 0 200 200">
                <circle className="rim" cx="100" cy="100" r="70" />
                <g className="spoke">
                  <line x1="100" y1="100" x2="180" y2="100" />
                  <line x1="100" y1="100" x2="156.6" y2="156.6" />
                  <line x1="100" y1="100" x2="100" y2="180" />
                  <line x1="100" y1="100" x2="43.4" y2="156.6" />
                  <line x1="100" y1="100" x2="20" y2="100" />
                  <line x1="100" y1="100" x2="43.4" y2="43.4" />
                  <line x1="100" y1="100" x2="100" y2="20" />
                  <line x1="100" y1="100" x2="156.6" y2="43.4" />
                </g>
                <circle className="grip" cx="180" cy="100" r="6" />
                <circle className="grip" cx="156.6" cy="156.6" r="6" />
                <circle className="grip" cx="100" cy="180" r="6" />
                <circle className="grip" cx="43.4" cy="156.6" r="6" />
                <circle className="grip" cx="20" cy="100" r="6" />
                <circle className="grip" cx="43.4" cy="43.4" r="6" />
                <circle className="grip" cx="100" cy="20" r="6" />
                <circle className="grip" cx="156.6" cy="43.4" r="6" />
                <circle className="hub" cx="100" cy="100" r="18" />
              </svg>
              <div className="orbit-track">
                <div className="orbit-node node-1">
                  <div className="node-inner">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e31c5f"
                      strokeWidth={2}
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </div>
                </div>
                <div className="orbit-node node-2">
                  <div className="node-inner">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2456de"
                      strokeWidth={2}
                    >
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M3 9h18M8 2v4M16 2v4" />
                    </svg>
                  </div>
                </div>
                <div className="orbit-node node-3">
                  <div className="node-inner">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0ea5a0"
                      strokeWidth={2}
                    >
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20a6.5 6.5 0 0113 0" />
                      <circle cx="17.5" cy="9" r="2.7" />
                      <path d="M15 20a5 5 0 018-3.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="statement reveal">
        <div className="wrap">
          <h2>{t("statement.title")}</h2>
          <p>{t("statement.text")}</p>
        </div>
      </section>
      <section className="features">
        <div className="wrap features-grid">
          <div className="reveal">
            <h3>{t("features.title")}</h3>
            <ul className="feature-list">
              {featureItems.map((item) => (
                <li key={item}>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={3}>
                      <path d="M5 12l5 5 9-9" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="features-note">{t("features.note")}</p>
          </div>
          <div className="reveal mock">
            <div className="mock-topbar">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="url">{t("mock.url")}</div>
            </div>
            <div className="mock-body">
              <div className="mock-rail">
                <div className="rail-icon active">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div className="rail-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                </div>
                <div className="rail-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M4.5 20a7.5 7.5 0 0115 0" />
                  </svg>
                </div>
              </div>
              <div className="mock-main">
                <div className="row-title">
                  <span>{t("mock.inboxTitle")}</span>
                  <span>{t("mock.inboxNew")}</span>
                </div>

                {mails.map((mail, index) => (
                  <div
                    className={`mail-row${index < 2 ? " unread" : ""}`}
                    key={`${mail.sender}-${mail.subject}`}
                  >
                    <div
                      className="avatar"
                      style={{
                        background: [
                          "var(--crimson)",
                          "var(--cobalt)",
                          "var(--teal)",
                          "#c7cede",
                        ][index],
                      }}
                    />
                    <div className="txt">
                      <div className="sender">{mail.sender}</div>
                      <div className="subject">{mail.subject}</div>
                    </div>
                    <div className="time">{mail.time}</div>
                  </div>
                ))}

                <div className="mock-cal">
                  <div className="cell" />
                  <div className="cell busy" />
                  <div className="cell" />
                  <div className="cell busy2" />
                  <div className="cell" />
                  <div className="cell" />
                  <div className="cell busy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="track">
        <div className="wrap track-grid">
          <div className="reveal">
            <div className="years">
              {t("track.yearsValue")}
              <sup>{t("track.yearsSuffix")}</sup>
            </div>
            <div className="years-label">{t("track.yearsLabel")}</div>
          </div>
          <div className="track-copy reveal">
            {trackParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="sovereignty" id="comparatif">
        <div className="wrap">
          <div className="eyebrow">{t("sovereignty.eyebrow")}</div>
          <h2>{t("sovereignty.title")}</h2>
          <div className="sov-grid">
            {sovereigntyCards.map((card) => (
              <div className="sov-card reveal" key={card.title}>
                <div className="num">{card.num}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="final-cta">
        <div className="wrap">
          <h2>{t("finalCta.title")}</h2>
          <p>{t("finalCta.text")}</p>
          <a href="/#contact" className="btn btn-primary">
            {t("finalCta.cta")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MessagerieBlueMind;
