export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: {
    width: number;
    height: number;
    public_id: string;
    secure_url: string;
  };
  createdAt: string;
  updatedAt: string;
}
