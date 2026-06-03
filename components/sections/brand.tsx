import { Quote } from "lucide-react"

export function BrandSection() {
  return (
    <section id="brand" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-widest">
              品牌故事
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              女人传说
            </h2>
            <p className="mt-2 text-lg text-primary-foreground/70">
              Legend of Women
            </p>

            <div className="mt-10 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                「女人传说」是乐莎美容倾力打造的自有品牌，承载着「让美丽变得更简单」的品牌使命。
              </p>
              <p>
                我们相信每一位女性都值得拥有高品质、高性价比的美容工具，让日常护肤与化妆成为一种享受。品牌自创立以来，始终坚持精选优质原材料，结合先进生产工艺与严格品控体系，为全球消费者提供安全、好用、耐用的美容化妆用具。
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 relative">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-foreground/20" />
              <blockquote className="pl-8 text-xl font-medium italic text-primary-foreground">
                让美丽变得更简单
              </blockquote>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {[
              {
                title: "品质至上",
                desc: "ISO9001质量管理体系全程把控",
              },
              {
                title: "专注专业",
                desc: "深耕美容化妆用具领域十余年",
              },
              {
                title: "高性价比",
                desc: "源头工厂直供，去除中间环节",
              },
              {
                title: "全球视野",
                desc: "产品远销东南亚、中东、欧美等地",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-6 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xl font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
