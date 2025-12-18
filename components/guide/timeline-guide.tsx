"use client"

import { useState } from "react"
import { Calendar, Sun, Moon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const timelineData = [
  {
    day: "第1-3天",
    phase: "熟悉阶段",
    morning: ["探索房屋和周边区域", "与所有角色对话了解性格", "收集初期物品和金钱"],
    afternoon: ["尝试各种小游戏熟悉规则", "记录角色位置和作息规律", "前往神社算卦了解任务线索"],
    tips: "不要急于提升好感度，先熟悉游戏机制",
  },
  {
    day: "第4-7天",
    phase: "好感培养",
    morning: ["确定主攻角色1-2位", "每日送礼提升好感度", "完成角色给予的小任务"],
    afternoon: ["解锁聊天话题扩展互动", "参与钓鱼和拍卡赚取道具", "关注角色特殊事件触发"],
    tips: "点击角色会提示下一步方向，善用这个功能",
  },
  {
    day: "第8-12天",
    phase: "剧情推进",
    morning: ["触发角色核心剧情事件", "学习绅士技能解锁新互动", "收集稀有CG"],
    afternoon: ["完成成就系统目标", "探索隐藏区域和事件", "维持其他角色基础好感"],
    tips: "注意体力管理，升级时可恢复并增加上限",
  },
  {
    day: "第13-18天",
    phase: "结局冲刺",
    morning: ["完成主攻角色最终事件", "收集剩余CG和成就", "准备多周目存档"],
    afternoon: ["触发角色专属结局", "解锁回忆房间内容", "神社供奉10000G解锁全CG"],
    tips: "一周目通关后解锁回忆房间，可重温所有剧情",
  },
]

export function TimelineGuide() {
  const [expandedDay, setExpandedDay] = useState<string | null>("第1-3天")

  return (
    <section id="timeline" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold text-sm border-4 border-border shadow-md mb-4">
            <Calendar className="w-4 h-4" />
            时间规划
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">18天完美攻略时间线</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">按照这个时间规划，一周目即可达成大部分内容</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {timelineData.map((item) => (
            <div key={item.day} className="bg-card border-4 border-border shadow-md overflow-hidden">
              <button
                className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 md:w-24 px-3 py-2 bg-primary text-primary-foreground font-bold text-center border-2 border-border">
                    {item.day}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground hidden md:block">{item.tips}</p>
                  </div>
                </div>
                <ChevronDown className={cn("w-6 h-6 transition-transform", expandedDay === item.day && "rotate-180")} />
              </button>

              {expandedDay === item.day && (
                <div className="p-4 md:p-6 pt-0 border-t-4 border-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 上午活动 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-bold text-amber-600">
                        <Sun className="w-5 h-5" />
                        上午推荐
                      </div>
                      <ul className="space-y-2">
                        {item.morning.map((task, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="w-5 h-5 flex items-center justify-center bg-secondary border-2 border-border text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 下午活动 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-bold text-indigo-600">
                        <Moon className="w-5 h-5" />
                        下午推荐
                      </div>
                      <ul className="space-y-2">
                        {item.afternoon.map((task, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="w-5 h-5 flex items-center justify-center bg-secondary border-2 border-border text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 小贴士 */}
                  <div className="mt-4 p-3 bg-accent/10 border-2 border-accent">
                    <p className="text-sm">
                      <span className="font-bold text-accent">小贴士：</span>
                      {item.tips}
                    </p>
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
