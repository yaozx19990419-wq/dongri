"use client"

import { useState } from "react"
import { Users, Calendar, Gamepad2, Trophy, ImageIcon, Lightbulb, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "characters",
    icon: Users,
    title: "角色攻略",
    description: "全角色好感度提升方法与事件触发条件",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "timeline",
    icon: Calendar,
    title: "时间规划",
    description: "18天最优时间安排与每日推荐行程",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "minigames",
    icon: Gamepad2,
    title: "小游戏技巧",
    description: "算术、钓鱼、拍卡等小游戏攻略",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "achievements",
    icon: Trophy,
    title: "成就解锁",
    description: "全成就达成条件与奖励一览",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "cg",
    icon: ImageIcon,
    title: "CG收集",
    description: "59张CG触发条件与回忆房间解锁",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "tips",
    icon: Lightbulb,
    title: "新手指南",
    description: "游戏基础机制与实用小技巧",
    color: "bg-orange-100 text-orange-600",
  },
]

export function GuideCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">攻略分类</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">选择你需要的攻略类型，快速找到想要的信息</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={cn(
                "group p-6 bg-card border-4 border-border shadow-md transition-all duration-200",
                "hover:shadow-lg hover:-translate-y-1",
              )}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={cn("w-14 h-14 flex items-center justify-center border-4 border-border mb-4", category.color)}
              >
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {category.title}
                <ChevronRight
                  className={cn("w-5 h-5 transition-transform", hoveredId === category.id && "translate-x-1")}
                />
              </h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
