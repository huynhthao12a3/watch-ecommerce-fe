import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';
import { useProductsContext } from '../context/products_context';

const ProductEditPage = ({ match, history }) => {
  const productId = match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const {
    // productDetails
    listProductDetails,
    productDetails,

    // updateProduct
    updateProduct,
    updateProductLoading,
    updateProductSuccess,
    updateProductError,
    updateProductReset,
  } = useProductsContext();

  useEffect(() => {
    if (updateProductSuccess) {
      updateProductReset();
      history.push('/admin/productlist');
    } else {
      if (!productDetails.name || productDetails._id !== productId) {
        listProductDetails(productId);
      } else {
        setName(productDetails.name);
        setPrice(productDetails.price);
        setImage(productDetails.image);
        setBrand(productDetails.brand);
        setCategory(productDetails.category);
        setStock(productDetails.stock);
        setDescription(productDetails.description);
      }
    }
  }, [history, productId, productDetails, updateProductSuccess]);

  const uploadFileHandler = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/v1/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    updateProduct({
      _id: productId,
      name,
      price: +price,
      image,
      brand,
      category,
      description,
      stock: +stock,
    });
  };

  return (
    <>
      <section className="bg-amber-50 min-h-screen py-10">
        {/* Product edit form */}
        <div className="flex-col items-center justify-center">
          <div className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto ">
            <Link to="/admin/productlist">
              <button className="relative inline-block px-3 py-1 font-medium group justify-self-start">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Go back
                </span>
              </button>
            </Link>
            <h1 className="text-center text-2xl font-semibold mt-8">
              Edit product
            </h1>
          </div>

          {updateProductLoading && <Loading />}
          {updateProductError && (
            <div className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto bg-red-100 rounded-lg">
              <Error title={updateProductError} />
            </div>
          )}
          <form
            onSubmit={submitHandler}
            className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto pb-5 "
          >
            {/* Name */}
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Price */}
            <div className="mb-2">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1 "
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>

            {/* Image */}
            <div className="mb-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Image
              </label>
              <input
                type="text"
                placeholder="Enter image url"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                required
                value={image}
                onChange={e => setImage(e.target.value)}
              />
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1 "
                onChange={uploadFileHandler}
              />
              {uploading && <Loading />}
            </div>

            {/* Brand */}
            <div className="mb-2">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Brand
              </label>
              <input
                type="text"
                placeholder="Enter brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                required
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </div>

            {/* Stock */}
            <div className="mb-2">
              <label
                htmlFor="stock"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Stock
              </label>
              <input
                type="number"
                placeholder="Enter stock number"
                id="stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                required
                value={stock}
                onChange={e => setStock(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="mb-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Category
              </label>
              <input
                type="text"
                placeholder="Enter country"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                id="description"
                rows="2"
                placeholder="Enter description"
                required
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Update btn*/}
            <button
              type="submit"
              className="relative inline-block px-3 py-1 font-medium group mt-2"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Update
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProductEditPage;
