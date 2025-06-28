import React from 'react';
import { Wrench, Users, Award, Truck, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Bengal Fishery Hardware</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Serving West Bengal's fish farming community since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bengal Fishery Hardware was founded in 1995 with a mission to provide fish farmers 
                  across West Bengal with reliable, high-quality equipment for successful aquaculture 
                  operations. What started as a small hardware store has grown into the region's most 
                  trusted supplier of fish farming equipment.
                </p>
                <p>
                  Our founder, Mr. Ramesh Kumar, recognized the need for specialized equipment that 
                  could withstand Bengal's unique climate and water conditions. His experience working 
                  with local fish farmers helped him understand their specific requirements and challenges.
                </p>
                <p>
                  Today, we offer everything from basic nets and containers to advanced aeration systems 
                  and water quality monitoring equipment. Our commitment to quality and customer service 
                  has made us the go-to supplier for fish farmers throughout the region.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fish farming equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide our business and help us serve the fish farming community better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every piece of equipment is tested for durability and performance before reaching 
                our customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Farmer Support</h3>
              <p className="text-gray-600">
                We support local fish farmers with technical guidance, installation help, and 
                ongoing maintenance support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new technologies and equipment to help farmers improve 
                their productivity and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Numbers that showcase our commitment to the fish farming community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-700 font-medium">Fish Farmers Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700 font-medium">Equipment Types</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Districts Covered</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">
              Meet the experienced team leading Bengal Fishery Hardware
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ramesh Kumar"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ramesh Kumar</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 30 years in the aquaculture industry, Ramesh founded Bengal Fishery Hardware 
                  to bridge the gap between farmers and quality equipment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Priya Devi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Devi</h3>
                <p className="text-blue-600 font-medium mb-3">Technical Director</p>
                <p className="text-gray-600 text-sm">
                  Priya leads our technical team, ensuring all equipment meets quality standards 
                  and providing installation guidance to customers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Amit Ghosh"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Ghosh</h3>
                <p className="text-blue-600 font-medium mb-3">Sales Manager</p>
                <p className="text-gray-600 text-sm">
                  Amit manages our sales operations and customer relationships, ensuring farmers 
                  get the right equipment for their specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To be West Bengal's most trusted supplier of fish farming equipment, empowering farmers 
              with reliable tools and expert guidance to achieve sustainable aquaculture success. 
              We are committed to supporting the growth of the fish farming industry through quality 
              products, technical expertise, and exceptional customer service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;