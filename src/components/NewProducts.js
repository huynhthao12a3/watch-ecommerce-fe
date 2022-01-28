import SectionTitle from './SectionTitle';
import { newProducts } from '../data';
import Btn from './Btn';
import NewProduct from './NewProduct';

const NewProducts = () => {
  return (
    <section id="new" className="py-24">
      <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
        <SectionTitle title="New Products" />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10  -mt-12">
          {newProducts.map(product => (
            <NewProduct product={product} key={product.id} />
          ))}
        </div>
        <Btn name="All products" to="/products" />
      </div>
    </section>
  );
};

export default NewProducts;
