import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminDashboard } from '@/components/admin/dashboard'
import { getCompany, getProducts, getBrands, getNews } from '@/app/actions/cms'

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')
  
  const [company, products, brands, news] = await Promise.all([
    getCompany(),
    getProducts(),
    getBrands(),
    getNews(),
  ])
  
  return (
    <AdminDashboard 
      user={session.user}
      company={company}
      products={products}
      brands={brands}
      news={news}
    />
  )
}
