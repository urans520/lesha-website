import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact Info */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              联系我们
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              期待与您合作
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              无论您是寻找OEM/ODM合作、代理分销，还是有任何产品咨询，我们的团队随时为您服务。
            </p>

            {/* Contact Items */}
            <div className="mt-12 space-y-6">
              <a
                href="tel:13423688868"
                className="flex items-start gap-5 p-5 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-background flex items-center justify-center">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground mb-1">电话咨询</h3>
                  <p className="text-muted-foreground">134-2368-8868</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a
                href="mailto:694416131@qq.com"
                className="flex items-start gap-5 p-5 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-background flex items-center justify-center">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground mb-1">邮件联系</h3>
                  <p className="text-muted-foreground">694416131@qq.com</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-secondary">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-background flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">公司地址</h3>
                  <p className="text-muted-foreground">
                    广州市白云区云城东路白云美湾广场3号门二楼2002号
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-secondary">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-background flex items-center justify-center">
                  <Clock className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">营业时间</h3>
                  <p className="text-muted-foreground">
                    周一至周六 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-card rounded-3xl border border-border p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                访问我们的1688店铺
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                在1688平台上浏览我们的完整产品目录，查看实时价格和库存信息，直接在线下单采购。
              </p>

              <a
                href="https://shop1381510538134.1688.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                立即访问店铺
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Certifications */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">认证资质</p>
                <div className="flex flex-wrap gap-3">
                  {["ISO9001", "SGS", "FDA"].map((cert) => (
                    <span
                      key={cert}
                      className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
