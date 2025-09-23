import RecipeDetail from '@/app/recipes/[slug]/RecipeDetail';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getAllRecipes, getRecipeDetails } from '@/sanity/lib/query';
import { Recipe, RecipeDetailType } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';
import MoreRecipes from './MoreRecipes';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const recipe: RecipeDetailType = await getRecipeDetails(slug);

  return {
    title: `${recipe.title} | Healthy Recipe Finder`,
    description: recipe.overview,
  };
}

export async function generateStaticParams() {
  const recipes: Recipe[] = await getAllRecipes({});
  return recipes.map((recipe) => ({
    slug: recipe.slug.current,
  }));
}

const RecipeDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const recipe: RecipeDetailType = await getRecipeDetails(slug);
  const recipes: Recipe[] = await getAllRecipes({});
  const current = recipes.find((r: Recipe) => r.slug.current === slug);

  // 現在表示中を除外してランダム3件
  const moreRecipes = recipes
    .filter((r) => r._id !== current?._id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <main className='py-12 lg:py-24 border-b border-green-300'>
      <div className='pb-12 lg:pb-24 lg:border-b border-green-300'>
        <div className='border-b border-green-300 pb-12 lg:border-none mx-4 md:mx-8 lg:max-w-(--container) lg:mx-auto lg:px-8 lg:pb-0 xl:px-0'>
          <Breadcrumb className='mb-4'>
            <BreadcrumbList className='flex-nowrap'>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/recipes' className='text-preset-7 text-green-900/60'>
                    Recipes
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <span className='text-preset-7 !text-green-900/60'>/</span>
              </BreadcrumbSeparator>
              <BreadcrumbItem className='min-w-0 truncate pr-1'>
                <BreadcrumbPage className='text-green-900 text-preset-7 truncate'>{recipe.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* Recipe Detail */}
          <RecipeDetail recipe={recipe} />
          {/* More Recipes */}
        </div>
      </div>
      <MoreRecipes recipes={moreRecipes} />
    </main>
  );
};

export default RecipeDetailPage;
