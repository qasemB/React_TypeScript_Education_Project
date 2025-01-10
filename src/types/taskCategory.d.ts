export interface AddCategoryType {
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  icon: string;
};
export interface  CategoryListItemType extends AddCategoryType {
  id: string;
};