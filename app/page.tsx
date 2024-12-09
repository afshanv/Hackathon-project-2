import  HeroSection from "./components/HeroSection"
import { PartnersSection } from "./components/Logos";
import FeaturedProducts from "./components/ProductCard"
import TopCategories from "./components/TopCategories";
import GalleryLayout from "./components/HotCategories"
import OurProduct from "./components/OurProducts";

const Home = () => {
  return (
    <div>
      <section id="products" className="py-16">
        <HeroSection />
        <PartnersSection />
        <FeaturedProducts />
        <TopCategories />
        <GalleryLayout />
        <OurProduct />
     
      </section>
    </div>
  );
};

export default Home;


