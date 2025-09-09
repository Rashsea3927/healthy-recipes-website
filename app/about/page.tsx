import AboutHero from '@/app/about/AboutHero';
import BeyondThePlate from '@/app/about/BeyondThePlate';
import FoodPhilosophy from '@/app/about/FoodPhilosophy';
import WhyExist from '@/app/about/WhyExist';
import ReadyToCook from '@/components/ReadyToCook';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <WhyExist />
      <FoodPhilosophy />
      <BeyondThePlate />
      <ReadyToCook />
    </main>
  );
};

export default AboutPage;
