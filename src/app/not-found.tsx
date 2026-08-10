import { getTranslations } from "next-intl/server";
import Link from "next/link";

const NotFound = async () => {
  const t = await getTranslations("NotFound");

  return (
    <main className="chart">
      <svg
        className="chart__contours"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#c9a22733"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />
        <path
          d="M -50 620 C 250 520, 450 700, 750 560 S 1150 480, 1300 560"
          fill="none"
          stroke="#c9a22755"
          strokeWidth="1.5"
        />
        <path
          d="M -50 680 C 280 600, 500 760, 800 640 S 1150 560, 1300 640"
          fill="none"
          stroke="#c9a22740"
          strokeWidth="1.5"
        />
        <path
          d="M -50 100 C 200 40, 420 160, 700 90 S 1050 20, 1300 90"
          fill="none"
          stroke="#c9a22733"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        className="chart__trail"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          className="trail-path"
          d="M 610 430 C 760 480, 880 430, 1000 520 S 1180 560, 1320 480"
          fill="none"
          stroke="#e8dfc8"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        <circle cx="1000" cy="520" r="3.5" fill="#e8dfc8" />
        <text x="1012" y="512" className="trail-label">
          {t("trail")}
        </text>
      </svg>

      <div className="chart__content">
        <div className="stamp" role="img" aria-label="404">
          <svg viewBox="0 0 260 260" className="stamp__svg">
            <circle
              cx="130"
              cy="130"
              r="118"
              fill="none"
              stroke="#c9a227"
              strokeWidth="2"
            />
            <circle
              cx="130"
              cy="130"
              r="104"
              fill="none"
              stroke="#c9a227"
              strokeWidth="1"
              strokeDasharray="1 6"
            />
            {Array.from({ length: 36 }).map((_, i) => {
              const angle = (i * 10 * Math.PI) / 180;
              const long = i % 9 === 0;
              const r1 = 118;
              const r2 = long ? 104 : 111;
              const x1 = 130 + r1 * Math.sin(angle);
              const y1 = 130 - r1 * Math.cos(angle);
              const x2 = 130 + r2 * Math.sin(angle);
              const y2 = 130 - r2 * Math.cos(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#c9a227"
                  strokeWidth={long ? 1.5 : 0.75}
                />
              );
            })}
            <text x="130" y="118" textAnchor="middle" className="stamp__number">
              404
            </text>
            <text
              x="130"
              y="148"
              textAnchor="middle"
              className="stamp__caption"
            >
              {t("hors")}
            </text>
            <g
              className="stamp__needle"
              style={{ transformOrigin: "130px 130px" }}
            >
              <path
                d="M 130 60 L 138 130 L 130 122 L 122 130 Z"
                fill="#8a5a3b"
              />
            </g>
          </svg>
        </div>

        <div className="copy">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1>{t("title")}</h1>
          <p className="lede">{t("lede")}</p>
          <div className="actions">
            <Link href={`/`} className="btn-primary">
              <span>{t("cta")}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M2 8h11M9 3l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <p className="footline">{t("foot")}</p>
    </main>
  );
};

export default NotFound;
