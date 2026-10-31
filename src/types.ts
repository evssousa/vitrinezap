export interface Product {
    id: string
    name: string
    price: number
    available: boolean
    description: string
    imageUrl: string
}

export interface Store {
    slug: string
    name: string
    whatsapp: string
    products: Product[]
}