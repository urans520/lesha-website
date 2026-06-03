import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "关于我们", href: "#about" },
    { label: "品牌故事", href: "#brand" },
    { label: "新闻动态", href: "#news" },
  ],
  products: [
    { label: "化妆棉", href: "#products" },
    { label: "美妆蛋", href: "#products" },
    { label: "粉扑系列", href: "#products" },
    { label: "眉刀眉剪", href: "#products" },
  ],
  certifications: ["ISO9001", "SGS", "FDA"],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">女人传说</h3>
              <p className="text-sm text-primary-foreground/70 mt-1">
                Legend of Women
              </p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              让美丽变得更简单。专注美容化妆用具领域十余年，为全球消费者提供高品质、高性价比的美容工具。
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              公司信息
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              产品系列
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              联系我们
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  134-2368-8868
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  694416131@qq.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  广州市白云区云城东路白云美湾广场3号门二楼2002号
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} 广州市乐莎美容用具有限公司 版权所有
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs font-medium px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
