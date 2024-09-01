export type Product = {
  id: any;
  attributes: {
    title: any;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    style: string;
    format: string;
    price: number;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    category: {
      data: {
        attributes: {
          slug: string;
          categoryName: string;
        };
      };
    };
  };
};
