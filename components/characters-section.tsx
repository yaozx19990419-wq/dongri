import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const characters = [
  {
    name: "姑姑",
    role: "温柔的守护者",
    description: "温柔体贴的姑姑，在你的寒假中给予无微不至的关怀。",
    image: "/juese/gugu.jpg",
    color:
      "bg-gradient-to-br from-rose-100 via-pink-100 to-rose-50 dark:from-rose-950 dark:via-pink-950 dark:to-rose-900",
  },
  {
    name: "大表姐",
    role: "成熟的姐姐",
    description: "成熟稳重的大表姐，有着让人安心的可靠气质。",
    image: "/juese/20250228113037413741.jpg",
    color:
      "bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-50 dark:from-purple-950 dark:via-indigo-950 dark:to-purple-900",
  },
  {
    name: "小表姐",
    role: "活泼的少女",
    description: "活泼开朗的小表姐，总是带来欢声笑语。",
    image: "/juese/xiaobiaojie.jpg",
    color:
      "bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-50 dark:from-amber-950 dark:via-yellow-950 dark:to-amber-900",
  },
];

export function CharactersSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">主要角色</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            在这个冬天，与她们建立特别的羁绊
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {characters.map((character, index) => (
            <Card
              key={index}
              className="border-4 border-border overflow-hidden group hover:shadow-lg transition-all"
            >
              {/* Character Image */}
              <div
                className={`aspect-[5/6] ${character.color} relative overflow-hidden`}
              >
                <img
                  src={character.image || "/placeholder.svg"}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Pixel overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{character.name}</h3>
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary font-medium">{character.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {character.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            除了三位主要角色外，还有七位魅力十足的配角等待你的邂逅
          </p>
        </div>
      </div>
    </section>
  );
}
