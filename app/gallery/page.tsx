import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "游戏画廊 | 冬日狂想曲 - Winter Memories",
  description:
    "浏览《冬日狂想曲》精美的像素风格游戏截图和CG画面，感受温馨的冬日氛围。包含场景截图、角色CG、小游戏画面等。",
  keywords: ["冬日狂想曲", "游戏截图", "CG画廊", "像素游戏", "Winter Memories"],
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="py-16 bg-muted border-b-4 border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">游戏画廊</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">精美的像素艺术世界，每一帧都是用心之作</p>
          </div>
        </section>

        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}
