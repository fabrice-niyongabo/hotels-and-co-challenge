export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: IImage;
  createdAt: string;
  updatedAt: string;
}

export interface IImage {
  width: number;
  height: number;
  public_id: string;
  secure_url: string;
}

export interface IProduct {
  _id: string;
  name: string;
  categoryId: string;
  price: number;
  description: string;
  ratings: number;
  address: string;
  images: IImage[];
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}
