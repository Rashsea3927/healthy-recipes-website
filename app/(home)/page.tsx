import Explain from '@/app/(home)/Explain';
import Feature from '@/app/(home)/Feature';
import Hero from '@/app/(home)/Hero';
import ReadyToCook from '@/components/ReadyToCook';

export const metadata = {
  title: 'Home | Healthy Recipe Finder',
  description: 'Discover healthy and delicious recipes for a balanced lifestyle.',
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Feature />
      <Explain />
      <ReadyToCook />
    </main>
  );
};

export default HomePage;
