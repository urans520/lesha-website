import type { Metadata, Viewport } from "next"
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google"
import "./globals.css"

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "广州市乐莎美容用具有限公司 - 女人传说",
  description:
    "乐莎美容是一家集研发、生产、销售于一体的专业美容化妆用具制造商。主营化妆棉、棉签、粉扑、美妆蛋、眉刀眉剪、喷雾瓶、卷发工具等系列产品。",
  keywords: ["美容用具", "化妆棉", "美妆蛋", "粉扑", "女人传说", "乐莎美容"],
  authors: [{ name: "广州市乐莎美容用具有限公司" }],
  openGraph: {
    title: "广州市乐莎美容用具有限公司 - 女人传说",
    description: "让美丽变得更简单 - 专业美容化妆用具制造商",
    type: "website",
    locale: "zh_CN",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f7f4",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${notoSans.variable} ${notoSerif.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
