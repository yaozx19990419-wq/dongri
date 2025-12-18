"use client"

import { useState } from "react"
import { Heart, Star, Gift, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const characters = [
  {
    id: "aunt",
    name: "姑姑",
    type: "main",
    difficulty: 2,
    description: "温柔体贴的家庭主妇，负责照顾一家人的起居",
    gifts: ["鲜花", "首饰", "甜点"],
    tips: "每天早上在厨房帮忙可以快速提升好感度",
    events: ["厨房帮忙事件", "夜间散步事件", "生日惊喜事件"],
  },
  {
    id: "cousin1",
    name: "表姐",
    type: "main",
    difficulty: 3,
    description: "性格活泼开朗的大学生，喜欢户外活动",
    gifts: ["运动装备", "音乐专辑", "零食"],
    tips: "下午经常在院子里活动，一起玩小游戏效果最好",
    events: ["雪地冒险事件", "深夜谈心事件", "告别前夕事件"],
  },
  {
    id: "cousin2",
    name: "表妹",
    type: "main",
    difficulty: 4,
    description: "害羞内向的高中生，喜欢阅读和画画",
    gifts: ["书籍", "画具", "可爱饰品"],
    tips: "需要更多耐心，每天坚持送礼和对话",
    events: ["图书馆事件", "画画教学事件", "烟花祭事件"],
  },
  {
    id: "neighbor",
    name: "邻居姐姐",
    type: "sub",
    difficulty: 3,
    description: "住在隔壁的上班族，经常加班很晚回家",
    gifts: ["咖啡", "护肤品", "便当"],
    tips: "晚上8点后在她家门口等待是最佳时机",
    events: ["偶遇事件", "加班照顾事件", "假日约会事件"],
  },
  {
    id: "shopkeeper",
    name: "商店老板娘",
    type: "sub",
    difficulty: 2,
    description: "经营村里小卖部的年轻寡妇",
    gifts: ["特产", "家用品", "鲜花"],
    tips: "经常光顾店铺购物可以触发特殊对话",
    events: ["店铺帮忙事件", "进货搬运事件", "雪夜事件"],
  },
]

export function CharacterGuides() {
  const [selectedType, setSelectedType] = useState<"all" | "main" | "sub">("all")
  const [expandedChar, setExpandedChar] = useState<string | null>(null)

  const filteredCharacters = characters.filter((char) => selectedType === "all" || char.type === selectedType)

  return (
    <section id="characters" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white font-bold text-sm border-4 border-border shadow-md mb-4">
            <Heart className="w-4 h-4" />
            角色攻略
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">全角色好感度攻略</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">详细的角色攻略，包含送礼偏好、事件触发条件和实用技巧</p>
        </div>

        {/* 筛选按钮 */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { value: "all", label: "全部角色" },
            { value: "main", label: "主要角色" },
            { value: "sub", label: "支线角色" },
          ].map((filter) => (
            <Button
              key={filter.value}
              variant={selectedType === filter.value ? "default" : "outline"}
              onClick={() => setSelectedType(filter.value as typeof selectedType)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* 角色卡片 */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {filteredCharacters.map((char) => (
            <div key={char.id} className="bg-card border-4 border-border shadow-md overflow-hidden">
              <div
                className="p-4 md:p-6 cursor-pointer hover:bg-secondary/30 transition-colors"
                onClick={() => setExpandedChar(expandedChar === char.id ? null : char.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* 角色头像占位 */}
                  <div className="w-20 h-20 bg-secondary border-4 border-border flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">{char.name[0]}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{char.name}</h3>
                      <span
                        className={cn(
                          "px-2 py-0.5 text-xs font-bold border-2 border-border",
                          char.type === "main" ? "bg-pink-100 text-pink-600" : "bg-blue-100 text-blue-600",
                        )}
                      >
                        {char.type === "main" ? "主角色" : "支线"}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{char.description}</p>
                    {/* 难度星级 */}
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground mr-1">攻略难度:</span>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < char.difficulty ? "text-amber-500 fill-amber-500" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    {expandedChar === char.id ? "收起" : "展开详情"}
                  </Button>
                </div>
              </div>

              {/* 展开详情 */}
              {expandedChar === char.id && (
                <div className="p-4 md:p-6 border-t-4 border-border bg-muted/30">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* 喜欢的礼物 */}
                    <div>
                      <div className="flex items-center gap-2 font-bold mb-3">
                        <Gift className="w-5 h-5 text-pink-500" />
                        喜欢的礼物
                      </div>
                      <ul className="space-y-1">
                        {char.gifts.map((gift, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-pink-500"></span>
                            {gift}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 重要事件 */}
                    <div>
                      <div className="flex items-center gap-2 font-bold mb-3">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        重要事件
                      </div>
                      <ul className="space-y-1">
                        {char.events.map((event, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500"></span>
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 攻略技巧 */}
                    <div>
                      <div className="flex items-center gap-2 font-bold mb-3">
                        <Star className="w-5 h-5 text-amber-500" />
                        攻略技巧
                      </div>
                      <p className="text-sm text-muted-foreground bg-amber-50 p-3 border-2 border-amber-200">
                        {char.tips}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
