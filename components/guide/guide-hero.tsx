import { Book, Clock, Heart, Trophy } from "lucide-react"

export function GuideHero() {
  const stats = [
    { icon: Clock, label: "游戏天数", value: "18天" },
    { icon: Heart, label: "可攻略角色", value: "10位" },
    { icon: Trophy, label: "成就数量", value: "30+" },
    { icon: Book, label: "CG总数", value: "59张" },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold text-sm border-4 border-border shadow-md mb-6">
            完整攻略指南
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">冬日狂想曲 攻略大全</h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            从新手入门到全CG收集，这里有你需要的所有攻略信息。 合理规划18天的寒假时光，解锁所有角色剧情和隐藏内容。
          </p>

          {/* 数据统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card p-4 border-4 border-border shadow-md">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
