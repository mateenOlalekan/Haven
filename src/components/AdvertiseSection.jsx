import { ArrowRight } from 'lucide-react';


function AdvertiseSection() {
    const stats = [
        { value: '12M+', label: 'Buyers and sellers use our platform to connect every month' },
        { value: '$4B+', label: 'Total land value in farm, recreational, and residential land sold' },
        { value: '12X', label: 'More exposure than the next largest land listing network' },
        { value: '40', label: 'Years of experience' }
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Advertise with<br />our Team for Make<br />Good Audiance
          </h2>
          <p className="text-gray-600 mb-6">
            Landee is one of the largest land-focused real estate advertising networks in the country and the largest listing service that specializes in land. When you list with our network, you'll reach the most serious land buyers in the market.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center">
            Get Started
            <ArrowRight size={16} className="ml-2" />
          </button>
          
          <div className="mt-12">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" 
                alt="Rural land property" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold text-lg">Rural Land Investor</h3>
                <p className="text-sm">Significant returns in buy, develop, build and resell</p>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors">
                  <ArrowRight size={16} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="mb-8">
                <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-gray-600 mb-4">
              Market smarter with our suite of marketing tools. Our complete suite of marketing tools is just one reason why property owners trust us to sell their property faster and with less fuss.
            </p>
            <a href="#" className="text-green-600 font-medium hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertiseSection