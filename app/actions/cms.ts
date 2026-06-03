'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { company, products, brands, news } from '@/lib/db/schema'
import { eq, desc, asc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function requireAdmin() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user
}

// Company Actions
export async function getCompany() {
  const result = await db.select().from(company).limit(1)
  return result[0] || null
}

export async function updateCompany(data: {
  name: string
  slogan?: string
  description?: string
  founded?: string
  employees?: string
  factoryArea?: string
  address?: string
  phone?: string
  email?: string
}) {
  await requireAdmin()
  const existing = await getCompany()
  
  if (existing) {
    await db.update(company)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(company.id, existing.id))
  } else {
    await db.insert(company).values(data)
  }
  
  revalidatePath('/admin')
  revalidatePath('/')
}

// Products Actions
export async function getProducts() {
  return db.select().from(products).orderBy(asc(products.sortOrder), desc(products.createdAt))
}

export async function createProduct(data: {
  name: string
  category: string
  description?: string
  image?: string
  features?: string[]
}) {
  await requireAdmin()
  await db.insert(products).values(data)
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updateProduct(id: number, data: {
  name?: string
  category?: string
  description?: string
  image?: string
  features?: string[]
  isActive?: boolean
  sortOrder?: number
}) {
  await requireAdmin()
  await db.update(products)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(products.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function deleteProduct(id: number) {
  await requireAdmin()
  await db.delete(products).where(eq(products.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}

// Brands Actions
export async function getBrands() {
  return db.select().from(brands).orderBy(asc(brands.sortOrder), desc(brands.createdAt))
}

export async function createBrand(data: {
  name: string
  logo?: string
  description?: string
}) {
  await requireAdmin()
  await db.insert(brands).values(data)
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updateBrand(id: number, data: {
  name?: string
  logo?: string
  description?: string
  isActive?: boolean
  sortOrder?: number
}) {
  await requireAdmin()
  await db.update(brands)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(brands.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function deleteBrand(id: number) {
  await requireAdmin()
  await db.delete(brands).where(eq(brands.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}

// News Actions
export async function getNews() {
  return db.select().from(news).orderBy(desc(news.publishDate))
}

export async function createNews(data: {
  title: string
  summary?: string
  content?: string
  image?: string
  isPublished?: boolean
}) {
  await requireAdmin()
  await db.insert(news).values(data)
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updateNews(id: number, data: {
  title?: string
  summary?: string
  content?: string
  image?: string
  isPublished?: boolean
  publishDate?: Date
}) {
  await requireAdmin()
  await db.update(news)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(news.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function deleteNews(id: number) {
  await requireAdmin()
  await db.delete(news).where(eq(news.id, id))
  revalidatePath('/admin')
  revalidatePath('/')
}
