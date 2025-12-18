import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "游戏支持中文吗？",
    answer: "是的，游戏提供完整的简体中文支持，包括界面、剧情和所有菜单选项。",
  },
  {
    question: "如何获取内容补丁？",
    answer: "安装包里已包含内容补丁。下载之后可直接安装使用",
  },
  {
    question: "游戏可以存档吗？",
    answer:
      "可以。游戏支持多个存档位，你可以随时保存和加载进度。Steam版本还支持云存档功能。",
  },
  {
    question: "是否需要玩过《夏日狂想曲》？",
    answer:
      "不需要。虽然《冬日狂想曲》是《夏日狂想曲》的续作，但可以独立游玩。玩过前作会有更好的体验，但不是必须的。",
  },
  {
    question: "通关大概需要多长时间？",
    answer:
      "游戏设定为18天的游戏内时间。正常游玩一周目大约需要6-10小时。如果要完成所有角色线路和收集全部CG，总游戏时间约为20-30小时。",
  },
  {
    question: "游戏有多个结局吗？",
    answer:
      "是的，游戏根据你与不同角色的互动和好感度，会有多个不同的结局。每个主要角色都有独立的故事线和结局。",
  },
  {
    question: "如何解锁所有CG？",
    answer:
      "一周目通关后会解锁回忆房间。在神社供奉10000G可以解锁全部CG。持续供奉直到出现全解放提示后，在回忆室的客厅冷气下方可找到红色按钮解锁全部内容。",
  },
  {
    question: "购买后可以退款吗？",
    answer:
      "通过Steam购买的游戏，如果游戏时间少于2小时且购买时间不超过14天，可以申请退款。具体退款政策请参考Steam条款。",
  },
];

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground">
            关于游戏下载和游玩的常见问题解答
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-4 border-border bg-card px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left font-bold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
