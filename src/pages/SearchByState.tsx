import React, { useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';

const SearchByLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // African countries with popular cities and listing counts
  const countries = [
    {
      name: 'Nigeria',
      cities: [
        { name: 'Lagos', count: 512, popularAreas: ['Lekki', 'Victoria Island', 'Ikeja'] },
        { name: 'Abuja', count: 367, popularAreas: ['Maitama', 'Asokoro', 'Wuse'] },
        { name: 'Port Harcourt', count: 245, popularAreas: ['GRA', 'Rumuokoro', 'Trans-Amadi'] },
        { name: 'Kano', count: 189, popularAreas: ['Nassarawa GRA', 'Bompai', 'Zaria Road'] },
        { name: 'Enugu', count: 156, popularAreas: ['Independence Layout', 'GRA', 'Thinkers Corner'] }
      ]
    },
    {
      name: 'Ghana',
      cities: [
        { name: 'Accra', count: 423, popularAreas: ['East Legon', 'Cantonments', 'Osu'] },
        { name: 'Kumasi', count: 278, popularAreas: ['Ahodwo', 'Ayigya', 'Bantama'] },
        { name: 'Takoradi', count: 145, popularAreas: ['Airport Ridge', 'Fijai', 'Effiakuma'] }
      ]
    },
    {
      name: 'Cameroon',
      cities: [
        { name: 'Douala', count: 312, popularAreas: ['Bonapriso', 'Akwa', 'Bonanjo'] },
        { name: 'Yaoundé', count: 267, popularAreas: ['Bastos', 'Odza', 'Nkolbisson'] }
      ]
    },
    {
      name: 'Egypt',
      cities: [
        { name: 'Cairo', count: 678, popularAreas: ['Zamalek', 'Maadi', 'New Cairo'] },
        { name: 'Alexandria', count: 389, popularAreas: ['Stanley', 'Smouha', 'Gleem'] }
      ]
    },
    {
      name: 'South Africa',
      cities: [
        { name: 'Johannesburg', count: 567, popularAreas: ['Sandton', 'Rosebank', 'Melville'] },
        { name: 'Cape Town', count: 498, popularAreas: ['Camps Bay', 'Sea Point', 'Constantia'] },
        { name: 'Durban', count: 345, popularAreas: ['Umhlanga', 'Berea', 'Morningside'] }
      ]
    },
    {
      name: 'Morocco',
      cities: [
        { name: 'Casablanca', count: 412, popularAreas: ['Anfa', 'Maarif', 'Racine'] },
        { name: 'Marrakesh', count: 356, popularAreas: ['Gueliz', 'Hivernage', 'Palmeraie'] }
      ]
    },
    {
      name: 'Ethiopia',
      cities: [
        { name: 'Addis Ababa', count: 389, popularAreas: ['Bole', 'Kazanchis', 'Old Airport'] }
      ]
    },
    {
      name: 'Kenya',
      cities: [
        { name: 'Nairobi', count: 478, popularAreas: ['Karen', 'Westlands', 'Runda'] },
        { name: 'Mombasa', count: 267, popularAreas: ['Nyali', 'Bamburi', 'Shanzu'] }
      ]
    },
    {
      name: 'Liberia',
      cities: [
        { name: 'Monrovia', count: 189, popularAreas: ['Sinkor', 'Mamba Point', 'Paynesville'] }
      ]
    }
  ];

  const popularCountries = ['Nigeria', 'Ghana', 'South Africa', 'Egypt', 'Kenya'];
  
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.cities.some(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
    setSelectedCity(null);
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };

  const getSelectedCountryData = () => {
    return countries.find(country => country.name === selectedCountry);
  };

  const getSelectedCityData = () => {
    const country = getSelectedCountryData();
    return country?.cities.find(city => city.name === selectedCity);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[500px] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Land Across Africa
            </h1>
            <p className="text-white text-lg max-w-2xl mb-8">
              Explore premium land listings in Africa's fastest growing markets. Find residential, commercial, and agricultural properties in prime locations.
            </p>
            
            <div className="relative max-w-2xl">
              <input 
                type="text" 
                placeholder="Search by country or city..." 
                className="w-full px-6 py-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search size={24} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Countries */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Countries</h2>
          <button className="text-green-600 font-medium flex items-center">
            View all countries <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {popularCountries.map((countryName, index) => {
            const country = countries.find(c => c.name === countryName);
            const totalListings = country?.cities.reduce((sum, city) => sum + city.count, 0) || 0;
            
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => handleCountryClick(countryName)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg group-hover:text-green-600 transition-colors">{countryName}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {country?.cities.length || 0} cities
                  </span>
                </div>
                <p className="text-gray-500 mb-3">{totalListings}+ listings</p>
                <div className="flex flex-wrap gap-2">
                  {country?.cities.slice(0, 3).map((city, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {city.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Countries */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">All Countries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country, index) => {
              const totalListings = country.cities.reduce((sum, city) => sum + city.count, 0);
              
              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    selectedCountry === country.name 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-white hover:shadow-md'
                  }`}
                  onClick={() => handleCountryClick(country.name)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-lg">{country.name}</h3>
                    <span className={`text-sm ${
                      selectedCountry === country.name 
                        ? 'text-green-100' 
                        : 'text-gray-500'
                    }`}>
                      {totalListings} listings
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {country.cities.slice(0, 3).map((city, i) => (
                      <div 
                        key={i} 
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          selectedCountry === country.name 
                            ? 'bg-green-700' 
                            : 'bg-gray-100'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCityClick(city.name);
                        }}
                      >
                        <div>
                          <p className="font-medium">{city.name}</p>
                          <p className={`text-xs ${
                            selectedCountry === country.name 
                              ? 'text-green-200' 
                              : 'text-gray-500'
                          }`}>
                            {city.count} listings
                          </p>
                        </div>
                        <ChevronRight size={16} className={selectedCountry === country.name ? 'text-white' : 'text-gray-400'} />
                      </div>
                    ))}
                  </div>
                  
                  {country.cities.length > 3 && (
                    <p className={`text-sm mt-3 ${
                      selectedCountry === country.name 
                        ? 'text-green-200' 
                        : 'text-gray-500'
                    }`}>
                      +{country.cities.length - 3} more cities
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Country/City Info */}
      {selectedCountry && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {!selectedCity ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedCountry} Land Listings</h2>
                    <p className="text-gray-600 mt-2">
                      Explore our premium land offerings across {getSelectedCountryData()?.cities.length} cities in {selectedCountry}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {getSelectedCountryData()?.cities.reduce((sum, city) => sum + city.count, 0)} total listings
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {getSelectedCountryData()?.cities.map((city, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg p-5 hover:border-green-500 transition-colors cursor-pointer"
                      onClick={() => handleCityClick(city.name)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg">{city.name}</h3>
                        <span className="text-green-600 text-sm font-medium">{city.count} listings</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {city.popularAreas.map((area, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center mx-auto">
                  <MapPin size={18} className="mr-2" />
                  View All {selectedCountry} Listings
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedCity}, {selectedCountry} Land</h2>
                    <p className="text-gray-600 mt-2">
                      Premium land offerings in {selectedCity}'s most desirable neighborhoods
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {getSelectedCityData()?.count} listings
                  </span>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-3">Popular Areas in {selectedCity}</h3>
                  <div className="flex flex-wrap gap-3">
                    {getSelectedCityData()?.popularAreas.map((area, index) => (
                      <div key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-green-100 hover:text-green-800 transition-colors cursor-pointer">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {['Residential', 'Commercial', 'Agricultural', 'Waterfront', 'Industrial', 'Recreational'].map((type, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <h3 className="font-bold mb-2">{type} Land</h3>
                      <p className="text-gray-500 text-sm mb-3">
                        {Math.floor(Math.random() * 50) + 10} listings available
                      </p>
                      <button className="text-green-600 text-sm font-medium flex items-center">
                        Explore <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                    <MapPin size={18} className="mr-2" />
                    View {selectedCity} Listings
                  </button>
                  <button 
                    className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center"
                    onClick={() => setSelectedCity(null)}
                  >
                    Back to {selectedCountry}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchByLocation;