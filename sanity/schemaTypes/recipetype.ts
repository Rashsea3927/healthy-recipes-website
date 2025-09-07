import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'recipes',
  title: 'Recipes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'servingSize',
      title: 'Serving Size',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation Time (minutes)',
      type: 'number',
      initialValue: 15,
    }),
    defineField({
      name: 'cookTime',
      title: 'Cooking Time (minutes)',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'recipeSmallImage',
          options: { hotspot: true },
        },
        {
          type: 'image',
          name: 'recipeLargeImage',
          options: { hotspot: true },
        },
      ],
    }),
  ],
});
