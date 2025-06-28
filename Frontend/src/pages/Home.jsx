import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Award, Users } from "lucide-react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import axios from "axios";

const Home = () => {
  const [PremiumProducts, setPremiumProduct] = useState(null);
  const [onSaleProducts, setSaleProduct] = useState(null);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_PORT}/products`).then((res) => {
      const PProducts = res.data.filter((p) => p.isPremium).slice(0, 4);
      const SProducts = res.data.filter((p) => p.isOnSale).slice(0, 4);
      setPremiumProduct(PProducts);
      setSaleProduct(SProducts);
    });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="mb-12">
        <Carousel />
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Complete range of fish farming equipment and aquaculture supplies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110  group-hover:opacity-50 black transition-transform duration-300"
              ></img>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-black opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm font-bold text-black-200">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Premium Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Premium Equipment
            </h2>
            <p className="text-lg text-gray-600">
              Professional-grade equipment for serious fish farmers
            </p>
          </div>
          <Link
            to="/products?filter=premium"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PremiumProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* On Sale Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Special Offers
              </h2>
              <p className="text-lg text-gray-600">
                Limited time deals on essential equipment
              </p>
            </div>
            <Link
              to="/products?filter=sale"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Deals
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onSaleProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Ghosh Hardware?
          </h2>
          <p className="text-lg text-gray-600">
            Your trusted partner for fish farming success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Best Price
            </h3>
            <p className="text-gray-600">We offer great price in market</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quality Assured
            </h3>
            <p className="text-gray-600">
              All products are from reputed brand in their segment
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5+ Years Experience
            </h3>
            <p className="text-gray-600">
              Trusted by fish farming community since 2020
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Expert Support
            </h3>
            <p className="text-gray-600">
              Technical guidance and support from our experts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
