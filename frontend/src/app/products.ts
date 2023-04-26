export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  rating: number;
  category: string;
}

export const products = [
  {
    id: 1,
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    name: 'ты не это ищешь',
    price: 231_980,
    description: "asdyagdfywyfysgdufygywegfjdsyfw\n\n" +
      "sudfhiewufhdsjfyewf\n" +
      "iwuefwheufh\n",
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 4.2,
    category: 'watch'
  },
  {
    id: 2,
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 231_980,
    description: "asdyagdfywyfysgdufygywegfjdsyfw\n\n" +
      "sudfhiewufhdsjfyewf\n" +
      "iwuefwheufh\n",
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 4.2,
    category: 'watch'
  },
  {
    id: 3,
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 231_980,
    description: "asdyagdfywyfysgdufygywegfjdsyfw\n\n" +
      "sudfhiewufhdsjfyewf\n" +
      "iwuefwheufh\n",
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 4.2,
    category: 'watch'
  }
];
