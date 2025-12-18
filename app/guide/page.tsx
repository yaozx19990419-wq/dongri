import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GuideHero } from "@/components/guide/guide-hero"
import { GuideCategories } from "@/components/guide/guide-categories"
import { CharacterGuides } from "@/components/guide/character-guides"
import { TipsSection } from "@/components/guide/tips-section"
import { TimelineGuide } from "@/components/guide/timeline-guide"

export const metadata: Metadata = {
  title: "游戏攻略",
  description: "冬日狂想曲完整攻略指南，包含角色好感度攻略、时间规划、小游戏技巧、成就解锁和CG收集攻略。",
  keywords: ["冬日狂想曲攻略", "角色攻略", "好感度", "CG收集", "成就解锁"],
}

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <GuideHero />
        <GuideCategories />
        <TimelineGuide />
        <CharacterGuides />
        <TipsSection />
      </main>
      <Footer />
    </div>
  )
}
