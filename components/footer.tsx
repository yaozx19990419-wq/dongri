import Link from "next/link";
import { Snowflake, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t-4 border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Snowflake className="w-6 h-6 text-primary" />
              冬日狂想曲
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              一款温馨治愈的像素风格文字冒险游戏，在18天的寒假时光里，与她们共度难忘的冬日回忆。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 border-border pb-2">
              快速导航
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary transition-colors"
                >
                  游戏画廊
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="hover:text-primary transition-colors"
                >
                  下载游戏
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 border-border pb-2">
              相关链接
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Steam商店 <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  进入首页 <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t-2 border-border text-center text-muted-foreground">
          <p>&copy; 2025 冬日狂想曲 | Winter Memories. All Rights Reserved.</p>
          <p className="text-sm mt-2">本站为冬日狂想曲官方网站</p>
        </div>
      </div>
    </footer>
  );
}
