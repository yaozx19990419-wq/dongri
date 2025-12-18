"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryCategories = [
  { id: "all", label: "全部" },
  { id: "scenes", label: "场景" },
  { id: "characters", label: "角色" },
  { id: "cg", label: "CG" },
  { id: "minigames", label: "小游戏" },
];

const galleryImages = [
  {
    id: 1,
    src: "/jietu/14826a39-d5a2-4ade-bcd7-73a48d5254e9.png",
    alt: "温馨的客厅场景",
    category: "scenes",
  },
  {
    id: 2,
    src: "/jietu/333.jpg",
    alt: "雪夜小镇街道",
    category: "scenes",
  },
  {
    id: 3,
    src: "/jietu/ss_428d9d8b64d36bab9c2f391232c240c17e66701a.jpg",
    alt: "角色对话场景",
    category: "characters",
  },
  {
    id: 4,
    src: "/jietu/1b53421b-2049-4272-a0e1-88766515f0a7.png",
    alt: "钓鱼小游戏",
    category: "minigames",
  },
  {
    id: 5,
    src: "/jietu/297c1606-3224-4211-b8ea-c2d9e5d2a53e.png",
    alt: "温馨CG画面",
    category: "cg",
  },
  {
    id: 6,
    src: "/jietu/ss_7d2813039fbb7b68e0a1bcdd7cd247bdc1fc62e0.1920x1080.jpg",
    alt: "小镇场景",
    category: "scenes",
  },
  {
    id: 7,
    src: "/jietu/a02c7bc3-7e7a-41c1-b061-56f3815bd2da.png",
    alt: "小游戏对战",
    category: "minigames",
  },
  {
    id: 8,
    src: "/jietu/ss_c8be065ba117de4b7e394b8f76a0f7ffdef8f50d.1920x1080.jpg",
    alt: "角色立绘",
    category: "characters",
  },
  {
    id: 9,
    src: "/jietu/ss_85a882f644401acbadb5490fdfa0bfa7cc6cb997.1920x1080.jpg",
    alt: "野外场景",
    category: "scenes",
  },
  {
    id: 10,
    src: "/jietu/666.jpg",
    alt: "感人CG场景",
    category: "cg",
  },
  {
    id: 11,
    src: "/jietu/97cbd2b0-83e3-4532-96e2-5d346e84f8ed.png",
    alt: "体力小游戏",
    category: "minigames",
  },
  {
    id: 12,
    src: "/jietu/wenxin.jpg",
    alt: "温馨卧室",
    category: "scenes",
  },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const currentIndex =
    selectedImage !== null
      ? filteredImages.findIndex((img) => img.id === selectedImage)
      : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory !== category.id ? "bg-transparent" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="border-4 border-border overflow-hidden group cursor-pointer hover:border-primary transition-colors"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-3 py-2 border-2 border-border bg-card">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm font-medium">查看大图</span>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t-2 border-border">
                <p className="text-sm font-medium truncate">{image.alt}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center mt-8 text-muted-foreground">
          共 {filteredImages.length} 张图片
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 border-4 border-border bg-card hover:bg-secondary transition-colors"
            aria-label="关闭"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-4 p-2 border-4 border-border bg-card hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="上一张"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === filteredImages.length - 1}
            className="absolute right-4 p-2 border-4 border-border bg-card hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="下一张"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl max-h-[80vh] mx-4">
            <div className="border-4 border-border bg-card">
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 border-t-4 border-border text-center">
                <p className="font-medium">{selectedImageData.alt}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
