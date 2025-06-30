import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Badge,
  ArrowLeft,
  Heart,
  Loader,
} from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_PORT}/product/`, { id })
      .then((item) => {
        setProduct(item.data);
      });
    setLoading(false);
  }, [id]);

  if (!product || loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div className="text-gray-600 text-lg flex items-center gap-2">
          <span>Loading product...</span>
          <Loader className="animate-spin h-5 w-5 text-blue-600" />
        </div>
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const productImages = [product.image1, product.image2, product.image3];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              <div className="flex space-x-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  {product.isPremium && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Badge className="h-3 w-3 mr-1" />
                      Premium
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Sale
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-blue-600">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-lg font-medium text-green-600">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm text-gray-600">
                  Stock: {product.stock} items available
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                      className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <span className="text-gray-600">
                    Total: ₹{(product.price * quantity).toLocaleString()}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      product.stock === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>

                  <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:text-red-600 hover:border-red-300 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
