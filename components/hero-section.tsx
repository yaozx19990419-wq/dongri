import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Snowflake, Star, Clock, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Pixel Snow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        {/* Decorative Snowflakes */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: "3s" }}>
          <Snowflake className="w-8 h-8 text-indigo-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDuration: "4s" }}>
          <Snowflake className="w-6 h-6 text-pink-300 opacity-50" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{ animationDuration: "3.5s" }}>
          <Snowflake className="w-10 h-10 text-purple-400 opacity-40" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDuration: "5s" }}>
          <Snowflake className="w-5 h-5 text-cyan-300 opacity-50" />
        </div>
        <div className="absolute top-60 left-1/3 animate-bounce" style={{ animationDuration: "4.5s" }}>
          <Snowflake className="w-7 h-7 text-violet-300 opacity-45" />
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{ animationDuration: "3.8s" }}>
          <Snowflake className="w-6 h-6 text-rose-300 opacity-50" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-border bg-secondary text-secondary-foreground font-bold shadow-md">
            <Star className="w-4 h-4" />
            <span>Steam 93% 好评如潮</span>
            <Star className="w-4 h-4" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            冬日狂想曲
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-muted-foreground">Winter Memories</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            在姑姑家度过的18天寒假，与她们共同编织温馨难忘的冬日回忆。
            像素风格的文字冒险游戏，延续《夏日狂想曲》的感动。
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-card">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-bold">18天</span>
              <span className="text-muted-foreground">游戏时长</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-card">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-bold">10+</span>
              <span className="text-muted-foreground">可攻略角色</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-card">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-bold">59+</span>
              <span className="text-muted-foreground">精美CG</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/download">立即下载游戏</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/gallery">浏览游戏画廊</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-4 border-border bg-card flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
