import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, Laptop, Apple, Monitor } from "lucide-react"

const platforms = [
  {
    name: "Steam",
    icon: Monitor,
    description: "官方正版渠道，支持成就、云存档、自动更新",
    price: "¥68",
    recommended: true,
    url: "https://store.steampowered.com",
  },
  {
    name: "Windows 直接下载",
    icon: Laptop,
    description: "适用于 Windows 10/11 系统的独立安装包",
    price: "免费试玩版",
    recommended: false,
    url: "#",
  },
  {
    name: "Mac 版本",
    icon: Apple,
    description: "适用于 macOS 系统，需要 macOS 11.0 或更高版本",
    price: "¥68",
    recommended: false,
    url: "#",
  },
]

export function DownloadSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Download Options */}
          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <Card key={index} className={`border-4 ${platform.recommended ? "border-primary" : "border-border"}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-4 border-border bg-secondary flex items-center justify-center">
                        <platform.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          {platform.name}
                          {platform.recommended && (
                            <span className="text-xs px-2 py-1 bg-primary text-primary-foreground border-2 border-border">
                              推荐
                            </span>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="text-2xl font-bold">{platform.price}</span>
                      <Button
                        asChild
                        className={platform.recommended ? "" : "bg-transparent"}
                        variant={platform.recommended ? "default" : "outline"}
                      >
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          {platform.name === "Steam" ? "前往 Steam" : "立即下载"}
                          {platform.name === "Steam" && <ExternalLink className="w-3 h-3" />}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Installation Guide */}
          <Card className="border-4 border-border bg-muted">
            <CardHeader>
              <CardTitle>安装指南</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 border-2 border-border bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold">选择下载方式</h4>
                    <p className="text-sm text-muted-foreground mt-1">推荐通过 Steam 购买，可获得最佳游戏体验</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 border-2 border-border bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold">下载并安装</h4>
                    <p className="text-sm text-muted-foreground mt-1">下载完成后运行安装程序，按提示完成安装</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 border-2 border-border bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold">开始游戏</h4>
                    <p className="text-sm text-muted-foreground mt-1">安装完成后启动游戏，开始你的冬日冒险</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="border-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">重要提示</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>本游戏包含成人内容，仅限18岁以上玩家购买和游戏</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Steam版本为全年龄版，成人内容需要额外下载补丁</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>请确保从官方渠道下载游戏，避免遭受病毒或恶意软件侵害</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
