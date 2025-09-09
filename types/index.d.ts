export type Recipe = {
  _id: string;
  slug: { current: string };
  title: string;
  overview: string;
  servingSize: number;
  prepTime: number;
  cookTime: number;
  smallImage: string;
  largeImage: string;
};

export type RecipeDetailType = Recipe & {
  ingredients: string[];
  instructions: string[];
};
