import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const requirements = {
  minimum: [
    { label: "操作系统", value: "Windows 10 / macOS 11.0" },
    { label: "处理器", value: "Intel Core i3 或同等性能" },
    { label: "内存", value: "4 GB RAM" },
    { label: "显卡", value: "集成显卡" },
    { label: "存储空间", value: "需要 2 GB 可用空间" },
  ],
  recommended: [
    { label: "操作系统", value: "Windows 11 / macOS 12.0" },
    { label: "处理器", value: "Intel Core i5 或更高" },
    { label: "内存", value: "8 GB RAM" },
    { label: "显卡", value: "独立显卡" },
    { label: "存储空间", value: "需要 4 GB 可用空间" },
  ],
}

export function SystemRequirements() {
  return (
    <section className="py-16 bg-muted border-y-4 border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">系统要求</h2>
          <p className="text-lg text-muted-foreground">确保你的设备符合以下配置要求</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Minimum Requirements */}
          <Card className="border-4 border-border">
            <CardHeader className="bg-card border-b-2 border-border">
              <CardTitle className="text-xl">最低配置</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {requirements.minimum.map((req, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm">{req.label}</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{req.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommended Requirements */}
          <Card className="border-4 border-primary">
            <CardHeader className="bg-primary text-primary-foreground border-b-2 border-border">
              <CardTitle className="text-xl">推荐配置</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {requirements.recommended.map((req, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm">{req.label}</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{req.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
