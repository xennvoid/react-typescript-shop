export interface IProduct {
    id: number;
    name: string;
    brand: string;
    image: string;
    category: string;
    product_type: string;
    country: string;
    description: string;
    price: number;
    discounted_price: number;
    availability: boolean;
    rating: number;
    colors: string[];
}