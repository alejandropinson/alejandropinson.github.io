export interface Item {
  id: string;
  title: string;
  host: string;
  img: string;
}

export interface Category {
  id: string;
  title: string;
  items: Item[];
}

export interface RootObject {
  categories: Category[];
}
