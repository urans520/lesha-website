'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { 
  Building2, 
  Package, 
  Award, 
  Newspaper, 
  LogOut,
  Menu,
  X,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { CompanyEditor } from './company-editor'
import { ProductsEditor } from './products-editor'
import { BrandsEditor } from './brands-editor'
import { NewsEditor } from './news-editor'

type TabType = 'company' | 'products' | 'brands' | 'news'

interface AdminDashboardProps {
  user: { id: string; name: string; email: string }
  company: any
  products: any[]
  brands: any[]
  news: any[]
}

export function AdminDashboard({ user, company, products, brands, news }: AdminDashboardProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('company')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push('/sign-in')
    router.refresh()
  }

  const tabs = [
    { id: 'company' as const, label: '公司信息', icon: Building2, count: company ? 1 : 0 },
    { id: 'products' as const, label: '产品管理', icon: Package, count: products.length },
    { id: 'brands' as const, label: '品牌管理', icon: Award, count: brands.length },
    { id: 'news' as const, label: '新闻管理', icon: Newspaper, count: news.length },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-50 flex items-center px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:bg-muted rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="ml-3 font-semibold">管理后台</span>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-64 bg-card border-r border-border transform transition-transform duration-200 z-50",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            <span className="font-bold text-lg">管理后台</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setSidebarOpen(false)
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <tab.icon className="w-5 h-5" />
                <span className="flex-1">{tab.label}</span>
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  activeTab === tab.id ? "bg-primary-foreground/20" : "bg-muted"
                )}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              退出登录
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <span>管理后台</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">
              {tabs.find(t => t.id === activeTab)?.label}
            </span>
          </div>

          {/* Content */}
          <div className="bg-card rounded-xl border border-border">
            {activeTab === 'company' && <CompanyEditor company={company} />}
            {activeTab === 'products' && <ProductsEditor products={products} />}
            {activeTab === 'brands' && <BrandsEditor brands={brands} />}
            {activeTab === 'news' && <NewsEditor news={news} />}
          </div>
        </div>
      </main>
    </div>
  )
}
