import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Noto_Sans_SC, Pixelify_Sans, DM_Sans as V0_Font_DM_Sans, Space_Mono as V0_Font_Space_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900","1000"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const _notoSansSC = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-sans" })
const _pixelify = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" })

export const metadata: Metadata = {
  title: {
    default: "冬日狂想曲 - Winter Memories | 官方游戏下载站",
    template: "%s | 冬日狂想曲 - Winter Memories",
  },
  description:
    "《冬日狂想曲》是一款温馨治愈的像素风格文字冒险游戏（AVG），在18天的寒假时光里，与她们共度难忘的冬日回忆。Steam 93%好评如潮，59+精美CG，10+可攻略角色。立即下载体验！",
  keywords: [
    "冬日狂想曲",
    "Winter Memories",
    "像素游戏",
    "AVG游戏",
    "文字冒险游戏",
    "Galgame",
    "夏日狂想曲续作",
    "Steam游戏",
    "恋爱模拟",
    "剧情游戏",
  ],
  authors: [{ name: "冬日狂想曲官方" }],
  creator: "冬日狂想曲团队",
  publisher: "冬日狂想曲",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://winter-memories.game",
    siteName: "冬日狂想曲 - Winter Memories",
    title: "冬日狂想曲 - 温馨治愈的像素风文字冒险游戏",
    description: "在姑姑家度过的18天寒假，与她们共同编织温馨难忘的冬日回忆。Steam 93%好评，59+精美CG，立即下载！",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "冬日狂想曲游戏封面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "冬日狂想曲 - Winter Memories",
    description: "温馨治愈的像素风格文字冒险游戏，Steam 93%好评如潮",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://winter-memories.game",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "冬日狂想曲",
              alternateName: "Winter Memories",
              description: "一款温馨治愈的像素风格文字冒险游戏",
              genre: ["文字冒险", "模拟", "像素"],
              gamePlatform: ["PC", "Steam"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "93",
                bestRating: "100",
                ratingCount: "981",
              },
              offers: {
                "@type": "Offer",
                price: "68",
                priceCurrency: "CNY",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
