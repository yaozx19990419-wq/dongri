import { Gamepad2, Users, Trophy, Camera, Clock, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "丰富角色",
    description: "三位女主角与七位女配角，每位角色都有独特的性格与故事线，等待你来发掘。",
  },
  {
    icon: Clock,
    title: "时间管理",
    description: "18天的寒假时光，合理安排每天的活动，与角色们建立深厚的羁绊。",
  },
  {
    icon: Gamepad2,
    title: "趣味小游戏",
    description: "算术、洗碗、钓鱼、拍卡对战等多种小游戏，让你的冬日生活更加丰富多彩。",
  },
  {
    icon: Trophy,
    title: "成就系统",
    description: "完善的成就系统为你提供长期游戏目标，达成成就还能获得额外奖励。",
  },
  {
    icon: Camera,
    title: "精美CG",
    description: "59张精心绘制的CG场景，记录下每一个珍贵的瞬间，可在回忆房间随时回顾。",
  },
  {
    icon: Sparkles,
    title: "好感度系统",
    description: "通过聊天、送礼、完成任务提升好感度，解锁独特的剧情与亲密互动。",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card border-y-4 border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">游戏特色</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            延续前作精髓，全新冬日体验，更多惊喜等你发现
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const gradientColors = [
              "from-indigo-500 to-purple-500",
              "from-pink-500 to-rose-500",
              "from-cyan-500 to-blue-500",
              "from-amber-500 to-orange-500",
              "from-violet-500 to-purple-500",
              "from-emerald-500 to-teal-500",
            ]
            const gradient = gradientColors[index % gradientColors.length]
            return (
              <Card key={index} className="border-4 border-border hover:border-primary transition-all group hover:shadow-xl">
                <CardHeader>
                  <div className={`w-14 h-14 border-4 border-border bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
