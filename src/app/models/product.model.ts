
export interface Product{
    productName: string,
    storeName: string,
    brandName: string,
    assessment: number,
    price: number,
    description: string,
    images: ProductImages[]
}

export interface ProductImages{
    id: number,
    url: string
}