import { Lightbulb, Coins, Zap, Eye, Save, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tips = [
  {
    icon: Coins,
    title: "快速赚钱",
    description: "拍卡对战是前期最佳赚钱方式，赢得的道具可以卖出换钱或直接使用",
  },
  {
    icon: Zap,
    title: "体力管理",
    description: "升级时会恢复满体力并增加上限，合理安排活动时间避免浪费",
  },
  {
    icon: Eye,
    title: "角色位置",
    description: "鼠标右键呼出菜单可查看所有角色状态和位置，还能直接传送",
  },
  {
    icon: Save,
    title: "多存档策略",
    description: "关键剧情节点前记得存档，方便回溯体验不同选择的结局",
  },
  {
    icon: Trophy,
    title: "成就奖励",
    description: "完成成就不仅有成就感，还能获得游戏机制上的实际好处",
  },
  {
    icon: Lightbulb,
    title: "神社提示",
    description: "神社算卦可以获得任务线索，供奉1000G还能解锁成就提示",
  },
]

export function TipsSection() {
  return (
    <section id="tips" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-bold text-sm border-4 border-border shadow-md mb-4">
            <Lightbulb className="w-4 h-4" />
            新手指南
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">实用小技巧</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">掌握这些技巧，让你的游戏体验更加顺畅</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div key={index} className="bg-card p-6 border-4 border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 border-4 border-border flex items-center justify-center mb-4">
                <tip.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 md:p-8 bg-card border-4 border-border shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">准备好开始冬日冒险了吗？</h3>
            <p className="text-muted-foreground mb-6">下载游戏，开启属于你的18天寒假时光</p>
            <Button asChild size="lg">
              <Link href="/download">
                前往下载
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
