import { ArrowUpRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "228片三层加厚无纺布化妆棉",
    category: "化妆棉",
    description: "三层加厚无纺布材质，双面省水设计，不掉絮，柔软亲肤，适合日常卸妆及护肤使用。",
    spec: "228片/盒",
  },
  {
    id: 2,
    name: "双头纯棉棉签 500支装",
    category: "棉签",
    description: "100%纯棉双头设计，纸轴环保材质，不掉棉絮，适合化妆补妆、婴儿护理及日常清洁。",
    spec: "500支/盒",
  },
  {
    id: 3,
    name: "干湿两用美妆蛋套装",
    category: "美妆蛋",
    description: "亲水性聚氨酯材质，遇水膨胀柔软Q弹，上妆服帖不卡粉，多种形状满足全脸需求。",
    spec: "3个/套",
  },
  {
    id: 4,
    name: "丝绒蜜粉扑 大号散粉扑",
    category: "粉扑",
    description: "进口丝绒面料，绒毛细腻均匀，抓粉力强，释放均匀，定妆自然服帖，可反复清洗使用。",
    spec: "直径7cm",
  },
  {
    id: 5,
    name: "安全防护眉刀 3把装",
    category: "眉刀眉剪",
    description: "不锈钢刀片+防护网设计，锋利耐用不伤皮肤，弯头设计贴合眉骨，轻松修出精致眉形。",
    spec: "3把/套",
  },
  {
    id: 6,
    name: "透明喷雾瓶 100ml",
    category: "喷雾瓶",
    description: "PET透明瓶身，超细雾化喷头，出雾均匀细腻，密封防漏设计，适合化妆水、爽肤水分装。",
    spec: "50/75/100ml",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              产品中心
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              精选美容工具
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              我们提供全系列美容化妆用具，从基础护肤到专业彩妆，满足您的各种美丽需求。
            </p>
          </div>
          <a
            href="https://shop1381510538134.1688.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            查看全部产品
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-background/80 text-xs font-medium text-muted-foreground mb-3">
                    {product.category}
                  </span>
                  <p className="text-lg font-medium text-foreground/80">
                    {product.name}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {product.spec}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
