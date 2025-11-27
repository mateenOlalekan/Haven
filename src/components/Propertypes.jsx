import { ArrowRight } from 'lucide-react';

const Propertytypes = () => {
  const propertyTypes = [
    {
      id: 1,
      title: 'Farm Land',
      description: 'Explore 15,000+ premium acres ideal for crop farming, livestock, and agro-investments.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1932&q=80'
    },
    {
      id: 2,
      title: 'Residential Plots',
      description: 'Secure over 8,000 fully serviced estate plots ready for housing development.',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1746&q=80'
    },
    {
      id: 3,
      title: 'Waterfront Property',
      description: '4,000+ stunning waterfront homes & plots with breathtaking lagoon and ocean views.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      title: 'Recreational Land',
      description: '2,000+ acres of lush recreational land perfect for resorts, parks, & adventure sites.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1575&q=80'
    },
    {
      id: 5,
      title: 'Commercial Land',
      description: '5,500+ strategically located plots ideal for malls, offices, and major business developments.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1932&q=80'
    },
    {
      id: 6,
      title: 'Industrial Land',
      description: '3,200 industrial zones perfect for factories, warehouses, and heavy-duty operations.',
      image: 'https://images.unsplash.com/photo-1581092795360-5f3a3c41c3f3?auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Popular Property Types
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Discover a curated selection of premium land opportunities across multiple categories.
          Whether you're investing, developing, or expanding your portfolio, we connect you to the best land deals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {propertyTypes.map((property) => (
          <div
            key={property.id}
            className="
              group relative rounded-xl overflow-hidden shadow-lg 
              transition-transform duration-300 hover:scale-[1.02]
            "
          >
            {/* Background Image */}
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: `url('${property.image}')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-xl font-semibold mb-1 drop-shadow">
                {property.title}
              </h3>
              <p className="text-sm text-gray-200 drop-shadow">
                {property.description}
              </p>
            </div>

            {/* Button */}
            <button
              className="
                absolute top-4 right-4 z-10
                bg-white/90 backdrop-blur-md p-2 rounded-full 
                shadow-md transition-all duration-200 
                group-hover:bg-white 
              "
            >
              <ArrowRight size={18} className="text-gray-800" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propertytypes;
