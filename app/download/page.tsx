import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DownloadSection } from "@/components/download-section"
import { SystemRequirements } from "@/components/system-requirements"
import { FAQSection } from "@/components/faq-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "下载游戏 | 冬日狂想曲 - Winter Memories",
  description:
    "下载《冬日狂想曲》游戏，支持Steam、Windows、Mac等多个平台。查看系统要求和安装指南，立即开始你的冬日冒险。",
  keywords: ["冬日狂想曲下载", "Winter Memories下载", "游戏下载", "Steam下载", "PC游戏"],
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background border-b-4 border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">下载游戏</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">选择适合你的平台，立即开始冬日冒险</p>
          </div>
        </section>

        <DownloadSection />
        <SystemRequirements />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
