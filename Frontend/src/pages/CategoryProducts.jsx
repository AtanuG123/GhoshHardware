import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Filter, SortAsc, SortDesc, Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/products";
import axios from "axios";
const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_PORT}/products`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const categoryProduct = product.filter(
    (product) => product.category === categoryId
  );
  const category = categories.filter((c) => c.id === categoryId);

  if (!categoryProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Category Not Found
          </h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const categoryProducts = product.filter(
    (p) => p.categoryProduct === categoryId
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...categoryProduct];

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        case "name":
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [categoryProducts, priceRange, sortBy, sortOrder, product]);

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

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
          <span className="text-gray-900">{category[0].name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="relative h-48 rounded-lg overflow-hidden mb-6">
            <img
              src={category[0].image}
              alt={category[0].name}
              className="w-full h-full object-cover"
            ></img>

            {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{category[0].name}</h1>
                <p className="text-lg text-gray-200">
                  {category[0].description}
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600">
            {filteredAndSortedProducts.length} product
            {filteredAndSortedProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>

              <div
                className={`space-y-6 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                {/* Price Range Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Min Price: ₹{priceRange[0]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[0]}
                        onChange={(e) =>
                          handlePriceRangeChange(0, parseInt(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Max Price: ₹{priceRange[1]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          handlePriceRangeChange(1, parseInt(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Quick Filters
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setPriceRange([0, 500])}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                    >
                      Under ₹500
                    </button>
                    <button
                      onClick={() => setPriceRange([500, 1000])}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                    >
                      ₹500 - ₹1,000
                    </button>
                    <button
                      onClick={() => setPriceRange([1000, 2000])}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                    >
                      ₹1,000 - ₹2,000
                    </button>
                    <button
                      onClick={() => setPriceRange([2000, 5000])}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                    >
                      Above ₹2,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and View Controls */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">
                      Sort by:
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>

                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="p-1 text-gray-600 hover:text-gray-900"
                    title={`Sort ${
                      sortOrder === "asc" ? "Descending" : "Ascending"
                    }`}
                  >
                    {sortOrder === "asc" ? (
                      <SortAsc className="h-4 w-4" />
                    ) : (
                      <SortDesc className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md ${
                      viewMode === "grid"
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md ${
                      viewMode === "list"
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found in this categoryProduct.
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
