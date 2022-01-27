import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data';
import Btn from './Btn';

export const Featured = () => {
  return (
    <section className="flex-col" id="features">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center mt-15">
        <SectionTitle title="Featured Products" />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
          {featuredProducts.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        <div>
          <Btn name="More products" to="/products" />
        </div>
      </div>
    </section>
  );
};
