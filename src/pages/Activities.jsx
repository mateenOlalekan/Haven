import React from 'react';
import { Home, Star, MapPin, Calendar, Users, Heart, Shield, Wifi, Coffee, Umbrella } from 'lucide-react';

const ActivitiesPage = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Lekki, Lagos",
      price: "₦450,000/night",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      amenities: ["Pool", "Beach Access", "5 bedrooms", "Free WiFi"]
    },
    {
      id: 2,
      title: "Modern City Apartment",
      location: "Victoria Island, Lagos",
      price: "₦180,000/night",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      amenities: ["Gym", "Rooftop", "2 bedrooms", "Smart Home"]
    },
    {
      id: 3,
      title: "Cozy Countryside Home",
      location: "Abuja Hills",
      price: "₦120,000/night",
      rating: 4.8,
      reviews: 64,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      amenities: ["Garden", "BBQ", "3 bedrooms", "Mountain View"]
    }
  ];

  const popularDestinations = [
    {
      name: "Lagos",
      properties: 1245,
      image: "https://images.unsplash.com/photo-1522562592260-09e9abc627ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Abuja",
      properties: 876,
      image: "https://images.unsplash.com/photo-1581434681384-9d5bfa1b0a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Port Harcourt",
      properties: 543,
      image: "https://images.unsplash.com/photo-1597045561927-2d5d6a9a5d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Calabar",
      properties: 321,
      image: "https://images.unsplash.com/photo-1602002418816-5c0aeef42610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    }
  ];

  const propertyTypes = [
    { name: "Apartments", icon: <Home size={24} />, count: 2456 },
    { name: "Villas", icon: <Home size={24} />, count: 1243 },
    { name: "Beach Houses", icon: <Umbrella size={24} />, count: 567 },
    { name: "Country Homes", icon: <Home size={24} />, count: 892 },
    { name: "Luxury Estates", icon: <Star size={24} />, count: 378 },
    { name: "Serviced Apartments", icon: <Coffee size={24} />, count: 1023 }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Perfect Property</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore premium homes, vacation rentals, and investment properties across Africa's most desirable locations
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4+ guests</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <a href="#" className="text-green-600 font-medium flex items-center">
            View all properties <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={20} className="text-gray-700" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{property.title}</h3>
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="ml-1">{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 mt-1 flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {property.location}
                </p>
                <p className="text-lg font-semibold mt-2">{property.price}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  <p className="text-white">{destination.properties} properties</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Property Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {propertyTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-green-600 flex justify-center mb-3">
                {type.icon}
              </div>
              <h3 className="font-medium">{type.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{type.count} properties</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
              <p className="text-green-100">
                Verified properties and secure payment options to ensure your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
              <p className="text-green-100">
                Curated collection of high-quality properties that meet our strict standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Amenities</h3>
              <p className="text-green-100">
                Properties equipped with the latest amenities for your comfort and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I found my dream vacation home through this platform. The process was seamless and the property exceeded all my expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Adebayo Johnson</h4>
                  <p className="text-gray-500 text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have found their ideal homes and vacation rentals with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Browse Properties
            </button>
            <button className="bg-white text-green-600 border border-green-600 py-3 px-8 rounded-lg font-medium hover:bg-green-50 transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;