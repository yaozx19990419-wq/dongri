import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";

const screenshots = [
  {
    src: "/jietu/wenxin.jpg",
    alt: "温馨的室内场景",
  },
  {
    src: "/jietu/333.jpg",
    alt: "雪夜小镇",
  },
  {
    src: "/jietu/ss_428d9d8b64d36bab9c2f391232c240c17e66701a.jpg",
    alt: "角色对话",
  },
  {
    src: "/jietu/97cbd2b0-83e3-4532-96e2-5d346e84f8ed.png",
    alt: "趣味小游戏",
  },
];

export function ScreenshotsPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">游戏截图</h2>
            <p className="text-xl text-muted-foreground">
              精美的像素艺术，沉浸的冬日氛围
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto bg-transparent"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative aspect-video border-4 border-border overflow-hidden bg-card"
            >
              <img
                src={screenshot.src || "/placeholder.svg"}
                alt={screenshot.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 border-4 border-border bg-card">
                  <ImageIcon className="w-5 h-5" />
                  <span className="font-bold">{screenshot.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
