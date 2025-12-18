import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Snowflake } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Snowflake className="w-20 h-20" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Snowflake className="w-16 h-16" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-15">
        <Snowflake className="w-12 h-12" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 opacity-15">
        <Snowflake className="w-14 h-14" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">准备好开始你的冬日冒险了吗？</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            立即下载《冬日狂想曲》，在温馨的像素世界中， 与她们共度一个难忘的寒假。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/download" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                立即下载
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer">
                Steam商店页面
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
