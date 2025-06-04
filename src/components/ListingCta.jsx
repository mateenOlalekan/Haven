
import { ArrowRight, MapPin } from 'lucide-react';

const ListingCTA = () => {
  return (
    <div className="py-16 px-4 md:px-8">
      <div 
        className="max-w-7xl mx-auto rounded-xl overflow-hidden relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div>
        
        <div className="relative py-16 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-white max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              List on our<br />#1 Rural Real<br />Estate Network
            </h2>
            <p className="mb-6">
              Landee, part of CoStar Group Network, stands as the online rural property leader, offering a wide range of options for serious purchasers.
            </p>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center">
              Find your Listing
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="bg-white p-1 rounded-full">
            <MapPin size={40} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCTA;