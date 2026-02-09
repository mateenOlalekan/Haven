import React, { useState } from "react";
import { 
  Home, 
  Building2, 
  Users, 
  BarChart3, 
  Wallet, 
  MessageSquare, 
  Settings,
  Bell,
  Search,
  Calendar,
  FileText,
  MapPin,
  TrendingUp,
  DollarSign,
  Globe,
  Shield,
  Award,
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
  CreditCard,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  MoreVertical
} from "lucide-react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("overview");
  const [user, setUser] = useState({
    name: "John Anderson",
    role: "Senior Agent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    notifications: 3
  });

  // Sample data for charts
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [65000, 79000, 82000, 78000, 92000, 89000, 97000, 102000, 95000, 110000, 105000, 115000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const propertyTypesData = {
    labels: ['Residential', 'Commercial', 'Luxury', 'Industrial', 'Land'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)'
        ]
      }
    ]
  };

  const salesPerformanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 15, 25],
        backgroundColor: 'rgb(59, 130, 246)',
      },
      {
        label: 'Leases',
        data: [8, 12, 10, 18],
        backgroundColor: 'rgb(16, 185, 129)',
      }
    ]
  };

  // Navigation menu items
  const menuItems = [
    { id: "overview", label: "Overview", icon: <Home className="h-5 w-5" />, badge: null },
    { id: "properties", label: "Properties", icon: <Building2 className="h-5 w-5" />, badge: 24 },
    { id: "clients", label: "Clients", icon: <Users className="h-5 w-5" />, badge: 156 },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-5 w-5" />, badge: null },
    { id: "transactions", label: "Transactions", icon: <Wallet className="h-5 w-5" />, badge: 42 },
    { id: "messages", label: "Messages", icon: <MessageSquare className="h-5 w-5" />, badge: 5 },
    { id: "documents", label: "Documents", icon: <FileText className="h-5 w-5" />, badge: 12 },
    { id: "calendar", label: "Calendar", icon: <Calendar className="h-5 w-5" />, badge: 8 },
  ];

  const settingsMenuItems = [
    { id: "profile", label: "Profile Settings", icon: <User className="h-5 w-5" /> },
    { id: "billing", label: "Billing & Plans", icon: <CreditCard className="h-5 w-5" /> },
    { id: "security", label: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
  ];

  // Sample properties data
  const properties = [
    {
      id: 1,
      name: "Ocean View Penthouse",
      location: "Miami, FL",
      type: "Luxury",
      price: "$3.2M",
      status: "Active",
      clients: 12,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Tech Hub Office Space",
      location: "San Francisco, CA",
      type: "Commercial",
      price: "$8.5M",
      status: "Pending",
      clients: 8,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Suburban Family Home",
      location: "Austin, TX",
      type: "Residential",
      price: "$850K",
      status: "Sold",
      clients: 15,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Lakeside Villa",
      location: "Geneva, Switzerland",
      type: "Luxury",
      price: "$5.7M",
      status: "Active",
      clients: 6,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Sample clients data
  const clients = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      type: "Buyer",
      budget: "$2-3M",
      status: "Active",
      properties: 3,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@email.com",
      phone: "+1 (555) 987-6543",
      type: "Investor",
      budget: "$5-10M",
      status: "VIP",
      properties: 8,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma.r@email.com",
      phone: "+44 20 1234 5678",
      type: "Seller",
      budget: "-",
      status: "Active",
      properties: 2,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Sample transactions
  const transactions = [
    {
      id: 1,
      property: "Ocean View Penthouse",
      client: "Sarah Johnson",
      type: "Sale",
      amount: "$3,200,000",
      date: "2024-01-15",
      status: "Completed",
      commission: "$96,000"
    },
    {
      id: 2,
      property: "Tech Hub Office Space",
      client: "TechCorp Inc.",
      type: "Lease",
      amount: "$45,000/mo",
      date: "2024-01-20",
      status: "Pending",
      commission: "$13,500"
    },
    {
      id: 3,
      property: "Suburban Family Home",
      client: "Emma Rodriguez",
      type: "Sale",
      amount: "$850,000",
      date: "2024-01-05",
      status: "Completed",
      commission: "$25,500"
    }
  ];

  // Sample notifications
  const notifications = [
    {
      id: 1,
      title: "New Client Inquiry",
      message: "Michael Chen wants to schedule a property viewing",
      time: "10 min ago",
      read: false,
      type: "client"
    },
    {
      id: 2,
      title: "Document Signed",
      message: "Purchase agreement for Ocean View Penthouse has been signed",
      time: "1 hour ago",
      read: true,
      type: "document"
    },
    {
      id: 3,
      title: "Property Listing Live",
      message: "Your new listing is now live on the platform",
      time: "2 hours ago",
      read: true,
      type: "property"
    }
  ];

  // Dashboard statistics
  const stats = [
    { label: "Total Properties", value: "24", change: "+12%", icon: <Building2 className="h-5 w-5" />, color: "blue" },
    { label: "Active Clients", value: "156", change: "+8%", icon: <Users className="h-5 w-5" />, color: "emerald" },
    { label: "Monthly Revenue", value: "$245,800", change: "+15%", icon: <DollarSign className="h-5 w-5" />, color: "purple" },
    { label: "Success Rate", value: "92%", change: "+3%", icon: <TrendingUp className="h-5 w-5" />, color: "amber" },
    { label: "Avg. Commission", value: "$48,500", change: "+5%", icon: <Wallet className="h-5 w-5" />, color: "indigo" },
    { label: "Global Reach", value: "8", change: "+2", icon: <Globe className="h-5 w-5" />, color: "cyan" }
  ];

  // Render active screen based on menu selection
  const renderScreen = () => {
    switch(activeMenu) {
      case "overview":
        return <OverviewScreen />;
      case "properties":
        return <PropertiesScreen />;
      case "clients":
        return <ClientsScreen />;
      case "analytics":
        return <AnalyticsScreen />;
      case "transactions":
        return <TransactionsScreen />;
      case "messages":
        return <MessagesScreen />;
      case "documents":
        return <DocumentsScreen />;
      case "calendar":
        return <CalendarScreen />;
      default:
        return <OverviewScreen />;
    }
  };

  // Screen Components
  const OverviewScreen = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-blue-100">Here's what's happening with your portfolio today.</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Top 5% Agent</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>8 Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors">
            View Performance Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <div className={`text-${stat.color}-600`}>{stat.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Revenue Trend</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64">
            <Line 
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Property Types Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Property Types Distribution</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
          </div>
          <div className="h-64">
            <Pie 
              data={propertyTypesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Properties */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Properties</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            Add Property
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Property</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Location</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Price</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map(property => (
                <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <img src={property.image} alt={property.name} className="h-10 w-10 rounded-lg object-cover mr-3" />
                      <div>
                        <p className="font-medium">{property.name}</p>
                        <p className="text-sm text-gray-500">{property.clients} clients interested</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      {property.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.type === 'Luxury' ? 'bg-purple-100 text-purple-800' :
                      property.type === 'Commercial' ? 'bg-emerald-100 text-emerald-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {property.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-semibold">{property.price}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Active' ? 'bg-green-100 text-green-800' :
                      property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PropertiesScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Properties Management</h2>
          <p className="text-gray-600">Manage your property portfolio and listings</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Property
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All (24)</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">Active (18)</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">Pending (4)</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">Sold (2)</button>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="relative">
              <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  property.status === 'Active' ? 'bg-green-100 text-green-800' :
                  property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {property.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{property.name}</h3>
                <button className="p-1 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-bold text-xl">{property.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </button>
                <button className="px-4 py-2.5 border border-gray-300 hover:bg-gray-50 rounded-lg">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ClientsScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Clients Management</h2>
          <p className="text-gray-600">Manage your clients and their preferences</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Client
        </button>
      </div>

      {/* Clients List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Types</option>
                <option>Buyers</option>
                <option>Sellers</option>
                <option>Investors</option>
              </select>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Client</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Contact</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Budget</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Properties</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clients.map(client => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img src={client.avatar} alt={client.name} className="h-10 w-10 rounded-full object-cover mr-3" />
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-gray-500">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-1" />
                      {client.phone}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.type === 'Buyer' ? 'bg-blue-100 text-blue-800' :
                      client.type === 'Investor' ? 'bg-purple-100 text-purple-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {client.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium">{client.budget}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === 'VIP' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium">{client.properties}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AnalyticsScreen = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-gray-600">Comprehensive insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Sales Performance</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>Quarterly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="h-64">
            <Bar 
              data={salesPerformanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top'
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Market Insights</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View Details
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">Average Days on Market</p>
                <p className="text-sm text-gray-600">Residential Properties</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">42 days</p>
                <p className="text-sm text-green-600">-12% from last month</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
              <div>
                <p className="font-medium">Price per SqFt</p>
                <p className="text-sm text-gray-600">Luxury Segment</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$1,245</p>
                <p className="text-sm text-green-600">+8% from last quarter</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium">Inventory Levels</p>
                <p className="text-sm text-gray-600">Active Listings</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">2.4 months</p>
                <p className="text-sm text-red-600">+15% from last year</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Geographic Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { region: "North America", value: "$12.5M", change: "+15%", color: "blue" },
            { region: "Europe", value: "$8.2M", change: "+22%", color: "emerald" },
            { region: "Asia Pacific", value: "$6.8M", change: "+18%", color: "purple" },
            { region: "Middle East", value: "$4.3M", change: "+31%", color: "amber" }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{item.region}</span>
                <div className={`h-2 w-2 rounded-full bg-${item.color}-500`}></div>
              </div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {item.change} growth
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TransactionsScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Transactions</h2>
          <p className="text-gray-600">Track and manage all your property transactions</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Transaction
        </button>
      </div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-2xl font-bold mt-2">$24.8M</p>
            </div>
            <div className="p-3 rounded-xl bg-green-100">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+18% from last quarter</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Avg. Commission</p>
              <p className="text-2xl font-bold mt-2">$48,500</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-100">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+5% from last quarter</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Pending Deals</p>
              <p className="text-2xl font-bold mt-2">8</p>
            </div>
            <div className="p-3 rounded-xl bg-yellow-100">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">$3.2M total value</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export Report
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Property</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Client</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{transaction.property}</td>
                  <td className="py-4 px-6">{transaction.client}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.type === 'Sale' ? 'bg-blue-100 text-blue-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold">{transaction.amount}</td>
                  <td className="py-4 px-6">{transaction.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {transaction.status === 'Completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                      )}
                      {transaction.status}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-green-600">{transaction.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const MessagesScreen = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Messages</h2>
        <p className="text-gray-600">Communicate with clients and colleagues</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation List */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    className="h-10 w-10 rounded-full"
                    alt="User"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Michael Chen</h4>
                      <span className="text-xs text-gray-500">2 min ago</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">Looking forward to the property viewing tomorrow...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                className="h-10 w-10 rounded-full mr-3"
                alt="Client"
              />
              <div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Buyer • $2-3M budget</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                  <p className="text-sm">Hi John, I'm interested in the Ocean View Penthouse. When can we schedule a viewing?</p>
                  <span className="text-xs text-gray-500 mt-2 block">10:30 AM</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 max-w-xs">
                  <p className="text-sm">Hello Sarah! I have availability tomorrow at 2 PM or Thursday at 11 AM. What works best for you?</p>
                  <span className="text-xs text-blue-200 mt-2 block">10:32 AM • Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DocumentsScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Documents</h2>
          <p className="text-gray-600">Manage all your contracts, agreements, and documents</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Upload Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Purchase Agreement", type: "PDF", size: "2.4 MB", date: "2024-01-15", client: "Sarah Johnson" },
          { name: "Property Disclosure", type: "DOC", size: "1.8 MB", date: "2024-01-10", client: "Michael Chen" },
          { name: "Lease Contract", type: "PDF", size: "3.2 MB", date: "2024-01-05", client: "Emma Rodriguez" },
        ].map((doc, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <h3 className="font-bold text-lg mb-2">{doc.name}</h3>
            <p className="text-sm text-gray-600 mb-4">Client: {doc.client}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{doc.type} • {doc.size}</span>
              <span>{doc.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CalendarScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Calendar</h2>
          <p className="text-gray-600">Schedule and manage your appointments</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">January 2024</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg">Today</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg">Week</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg">Month</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <div key={i} className={`h-24 border border-gray-200 rounded-lg p-2 ${
                i === 14 ? 'bg-blue-50 border-blue-200' : ''
              }`}>
                <div className="flex justify-between">
                  <span className={`font-medium ${i === 14 ? 'text-blue-600' : 'text-gray-700'}`}>
                    {i + 1}
                  </span>
                  {i === 14 && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                </div>
                {i === 14 && (
                  <div className="mt-1 space-y-1">
                    <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded">Property Viewing</div>
                    <div className="bg-green-100 text-green-800 text-xs p-1 rounded">Client Meeting</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {[
              { title: "Property Viewing", time: "2:00 PM", client: "Sarah Johnson", type: "viewing" },
              { title: "Contract Signing", time: "4:30 PM", client: "Michael Chen", type: "meeting" },
              { title: "Market Analysis", time: "11:00 AM", client: "Team Meeting", type: "analysis" },
            ].map((event, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{event.title}</h4>
                  <span className="text-sm text-gray-500">{event.time}</span>
                </div>
                <p className="text-sm text-gray-600">With {event.client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
             alt="Logo" className="h-8" />
        <div className="flex items-center space-x-3">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            {user.notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {user.notifications}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div>
                    <h1 className="text-xl font-bold">Global Estates</h1>
                    <p className="text-xs text-gray-500">Professional Portal</p>
                  </div>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* User Profile */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{user.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{user.role}</p>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                  Main Menu
                </p>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-colors ${
                      activeMenu === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`mr-3 ${activeMenu === item.id ? 'text-blue-600' : 'text-gray-400'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeMenu === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}

                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mt-6">
                  Settings
                </p>
                {settingsMenuItems.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 text-gray-400">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Secure Session</p>
                    <p className="text-xs text-gray-500">Active • Verified</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="hidden lg:block bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeMenu}</h2>
                <p className="text-gray-600">
                  {activeMenu === "overview" && "Dashboard overview and key metrics"}
                  {activeMenu === "properties" && "Manage your property portfolio"}
                  {activeMenu === "clients" && "Client relationships and management"}
                  {activeMenu === "analytics" && "Performance insights and analytics"}
                  {activeMenu === "transactions" && "Transaction history and management"}
                  {activeMenu === "messages" && "Client communication"}
                  {activeMenu === "documents" && "Contracts and documents"}
                  {activeMenu === "calendar" && "Schedule and appointments"}
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2.5 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="relative">
                  <Bell className="h-6 w-6 text-gray-600" />
                  {user.notifications > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {user.notifications}
                    </span>
                  )}
                </button>
                <div className="flex items-center space-x-3">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="p-4 lg:p-8">
            {renderScreen()}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>© 2024 Global Estates International. All rights reserved.</p>
              <div className="flex space-x-4">
                <button className="hover:text-gray-700">Privacy Policy</button>
                <button className="hover:text-gray-700">Terms of Service</button>
                <button className="hover:text-gray-700">Support</button>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;