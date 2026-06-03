import { CheckCircle2, Award, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "品质至上",
    description:
      "精选优质原材料，ISO9001质量管理体系全程把控，产品通过SGS、FDA等国际检测认证。",
  },
  {
    icon: Sparkles,
    title: "专注专业",
    description:
      "深耕美容化妆用具领域十余年，从研发到生产，只做一件事——做好每一款美容工具。",
  },
  {
    icon: CheckCircle2,
    title: "高性价比",
    description:
      "源头工厂直供，去除中间环节，让消费者以合理的价格享受到高品质的美容用具产品。",
  },
  {
    icon: Globe,
    title: "全球视野",
    description:
      "产品远销东南亚、中东、欧美等国家和地区，与众多国际品牌建立长期OEM/ODM合作关系。",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            关于我们
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            专业美容用具制造商
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            广州市乐莎美容用具有限公司坐落于广州市白云区，拥有标准化生产车间和先进的生产设备，主营化妆棉、棉签、粉扑、美妆蛋、眉刀眉剪、喷雾瓶、卷发工具等系列产品。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border hover:border-accent/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-8 right-8 text-6xl font-semibold text-muted/50">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary mb-6">
                <feature.icon className="h-7 w-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
