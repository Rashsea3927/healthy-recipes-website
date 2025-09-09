import { groq } from 'next-sanity';
import { client } from './client';

export const getAllRecipes = async ({
  prepTime,
  cookTime,
  q,
}: {
  prepTime?: number;
  cookTime?: number;
  q?: string;
}) => {
  return await client.fetch(
    groq`*[_type == "recipes" 
      && (!defined($prepTime) || prepTime <= $prepTime)
      && (!defined($cookTime) || cookTime <= $cookTime)
      && (!defined($q) || title match $q + "*") || overview match $q + "*"] | order(_createdAt asc){ 
      _id,
      title,
      slug,
      overview,
      servingSize,
      prepTime,
      cookTime,
      "smallImage": images[0].asset->url,
      "largeImage": images[1].asset->url
    }`,
    { prepTime: prepTime ?? null, cookTime: cookTime ?? null, q: q ?? null }
  );
};

export const getRecipeDetails = async (slug: string) => {
  return await client.fetch(
    groq`*[_type == "recipes" && slug.current == $slug][0]{ 
      _id,
      title,
      slug,
      overview,
      servingSize,
      prepTime,
      cookTime,
      ingredients[],
      instructions[],
      "smallImage": images[0].asset->url,
      "largeImage": images[1].asset->url
    }`,
    { slug }
  );
};
