import ProductDetails from './components/ProductDetails';
import SimilarProducts from './components/SimilarProducts';
import FeatureSection from './components/FeatureSection';

export default function HomePage() {
  return (
    <>
      <ProductDetails />
      <SimilarProducts title="Articles Similaires" units="5"/>
      <SimilarProducts title="Ces produits pourraient vous intéresser" units="3"/>
      <FeatureSection />
    </>
  );
}
