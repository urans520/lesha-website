import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    id: 1,
    date: "2026-05-15",
    title: "乐莎美容参加第29届CBE中国美容博览会",
    summary:
      "我司将于2026年5月12日至14日参加在上海新国际博览中心举办的第29届CBE中国美容博览会，届时将展出多款新品化妆工具，欢迎新老客户莅临展位洽谈合作。",
  },
  {
    id: 2,
    date: "2026-04-20",
    title: "新品发布：228片三层加厚化妆棉全面升级",
    summary:
      "针对市场需求，我们对经典款化妆棉进行了全面升级，采用全新三层复合工艺，双面省水效果提升30%，现已批量生产接受订单。",
  },
  {
    id: 3,
    date: "2026-03-08",
    title: "三八妇女节：致敬每一位了不起的她",
    summary:
      "三月八日国际妇女节，乐莎美容向所有女性致以节日的祝福。我们始终秉持让美丽变得更简单的品牌理念，用心做好每一款美容工具。",
  },
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function NewsSection() {
  return (
    <section id="news" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            新闻动态
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            最新资讯
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            了解乐莎美容的最新动态、行业新闻和产品发布信息
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`p-8 ${index === 0 ? "lg:p-12" : ""} h-full flex flex-col`}>
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.date)}
                </div>

                {/* Title */}
                <h3
                  className={`font-semibold text-foreground group-hover:text-accent transition-colors mb-4 ${
                    index === 0 ? "text-2xl lg:text-3xl" : "text-lg"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Summary */}
                <p
                  className={`text-muted-foreground leading-relaxed flex-grow ${
                    index === 0 ? "text-base" : "text-sm line-clamp-3"
                  }`}
                >
                  {item.summary}
                </p>

                {/* Read More */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    阅读更多
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
