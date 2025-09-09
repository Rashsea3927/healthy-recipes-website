import Explain from '@/app/(home)/Explain';
import Feature from '@/app/(home)/Feature';
import Hero from '@/app/(home)/Hero';
import ReadyToCook from '@/components/ReadyToCook';

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
