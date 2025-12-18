import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    content: "超越常规Galgame的佳作，像素风格小黄游的天花板！剧情感人，角色鲜活，强烈推荐。",
    author: "Steam玩家",
    rating: 5,
  },
  {
    content: "延续了夏日狂想曲的所有优点，新增的成就系统和小游戏让可玩性大增。",
    author: "B站用户",
    rating: 5,
  },
  {
    content: "引导系统比前作友好很多，新手也能轻松上手。CG质量一如既往的高水准。",
    author: "贴吧玩家",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-border bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30">
            <Star className="w-5 h-5 fill-current text-yellow-500" />
            <span className="font-bold">93% 好评率</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">玩家评价</h2>
          <p className="text-xl text-muted-foreground">来自全球玩家的真实反馈</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => {
            const gradientColors = [
              "from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30",
              "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
              "from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30",
            ]
            const gradient = gradientColors[index % gradientColors.length]
            return (
              <Card key={index} className={`border-4 border-border bg-gradient-to-br ${gradient} hover:shadow-lg transition-all`}>
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-primary" />
                  <p className="text-lg leading-relaxed">{review.content}</p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-border">
                    <span className="font-medium text-muted-foreground">— {review.author}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
