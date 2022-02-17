import SectionTitle from './SectionTitle';
import Btn from './Btn';
import FeaturedProduct from './FeaturedProduct';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import Loading from './Loading';
import Error from './Error';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products,
  } = useProductsContext();
  return (
    
    <section className="flex-col  py-24" id="features">
      <div className="section-center text-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error title={error}/>
        ) : (
          <>
            <SectionTitle title="Featured Products" />
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
              {featured_products?.map(product => (
                <FeaturedProduct product={product} key={product.id} />
              ))}
            </div>

            <div>
              <Link to="/products">
                <Btn name="More products" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
