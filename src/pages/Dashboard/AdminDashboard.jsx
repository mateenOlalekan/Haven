import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  DollarSign,
  BarChart3,
  Shield,
  Settings,
  FileText,
  Globe,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter,
  MoreVertical,
  UserCheck,
  Home,
  CreditCard,
  MessageSquare,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Calendar,
  PieChart,
  MapPin,
  Award,
  Lock,
  Activity,
  Star,
  Target
} from "lucide-react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
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

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("overview");
  const [admin, setAdmin] = useState({
    name: "Admin User",
    role: "System Administrator",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    notifications: 12
  });

  // Navigation menu items
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, badge: null },
    { id: "users", label: "User Management", icon: <Users className="h-5 w-5" />, badge: 156 },
    { id: "properties", label: "Properties", icon: <Building2 className="h-5 w-5" />, badge: 245 },
    { id: "transactions", label: "Transactions", icon: <DollarSign className="h-5 w-5" />, badge: 42 },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-5 w-5" />, badge: null },
    { id: "reports", label: "Reports", icon: <FileText className="h-5 w-5" />, badge: 8 },
    { id: "content", label: "Content", icon: <Globe className="h-5 w-5" />, badge: null },
    { id: "support", label: "Support", icon: <HelpCircle className="h-5 w-5" />, badge: 23 },
  ];

  const systemMenuItems = [
    { id: "security", label: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "settings", label: "System Settings", icon: <Settings className="h-5 w-5" /> },
    { id: "payments", label: "Payment Gateway", icon: <CreditCard className="h-5 w-5" /> },
    { id: "logs", label: "Audit Logs", icon: <Activity className="h-5 w-5" /> },
  ];

  // Dashboard stats
  const stats = [
    { label: "Total Users", value: "15,842", change: "+12.5%", icon: <Users className="h-5 w-5" />, color: "blue" },
    { label: "Active Properties", value: "8,456", change: "+8.2%", icon: <Home className="h-5 w-5" />, color: "emerald" },
    { label: "Monthly Revenue", value: "$2.8M", change: "+18.3%", icon: <DollarSign className="h-5 w-5" />, color: "purple" },
    { label: "Pending Approvals", value: "124", change: "-3.2%", icon: <Clock className="h-5 w-5" />, color: "amber" },
    { label: "Support Tickets", value: "87", change: "+5.6%", icon: <MessageSquare className="h-5 w-5" />, color: "red" },
    { label: "Success Rate", value: "94.2%", change: "+2.1%", icon: <Target className="h-5 w-5" />, color: "green" }
  ];

  // Sample users data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@globalestates.com",
      role: "Senior Agent",
      status: "active",
      joinDate: "2023-08-15",
      properties: 42,
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@globalestates.com",
      role: "Broker",
      status: "active",
      joinDate: "2023-06-22",
      properties: 128,
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "James Wilson",
      email: "james@globalestates.com",
      role: "Investor",
      status: "pending",
      joinDate: "2024-01-10",
      properties: 18,
      rating: 4.7,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Sarah Miller",
      email: "sarah@globalestates.com",
      role: "Agent",
      status: "inactive",
      joinDate: "2023-11-05",
      properties: 24,
      rating: 4.6,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Sample properties for admin
  const properties = [
    {
      id: 1,
      title: "Ocean View Penthouse",
      owner: "Alex Johnson",
      location: "Miami, FL",
      type: "Luxury",
      price: "$3.2M",
      status: "approved",
      views: 1245,
      created: "2024-01-15",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Tech Hub Office Space",
      owner: "Maria Garcia",
      location: "San Francisco, CA",
      type: "Commercial",
      price: "$8.5M",
      status: "pending",
      views: 856,
      created: "2024-01-18",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Lakeside Villa",
      owner: "James Wilson",
      location: "Geneva, Switzerland",
      type: "Luxury",
      price: "$5.7M",
      status: "approved",
      views: 2103,
      created: "2024-01-10",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Recent transactions
  const transactions = [
    {
      id: 1,
      user: "Alex Johnson",
      property: "Ocean View Penthouse",
      type: "Sale",
      amount: "$3,200,000",
      commission: "$96,000",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      user: "Michael Chen",
      property: "Tech Hub Office",
      type: "Lease",
      amount: "$45,000/mo",
      commission: "$13,500",
      date: "2024-01-18",
      status: "pending"
    },
    {
      id: 3,
      user: "Emma Rodriguez",
      property: "Suburban Home",
      type: "Sale",
      amount: "$850,000",
      commission: "$25,500",
      date: "2024-01-05",
      status: "completed"
    }
  ];

  // Support tickets
  const tickets = [
    {
      id: 1,
      user: "Sarah Johnson",
      subject: "Account Verification Issue",
      priority: "high",
      status: "open",
      assignee: "Admin",
      created: "2 hours ago",
      lastUpdate: "30 min ago"
    },
    {
      id: 2,
      user: "Michael Chen",
      subject: "Payment Processing Delay",
      priority: "medium",
      status: "in-progress",
      assignee: "Support Team",
      created: "1 day ago",
      lastUpdate: "2 hours ago"
    },
    {
      id: 3,
      user: "Emma Rodriguez",
      subject: "Property Listing Question",
      priority: "low",
      status: "resolved",
      assignee: "Admin",
      created: "3 days ago",
      lastUpdate: "1 day ago"
    }
  ];

  // Chart data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [1.2, 1.5, 1.8, 2.1, 2.4, 2.6, 2.8, 3.0, 2.9, 2.7, 2.8, 3.1],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Users',
        data: [450, 520, 610, 730, 820, 890, 950, 1020, 1100, 1200, 1250, 1350],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1
      },
      {
        label: 'Active Users',
        data: [8500, 8900, 9200, 9500, 9800, 10100, 10500, 10800, 11200, 11500, 11800, 12400],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      }
    ]
  };

  const propertyTypeData = {
    labels: ['Residential', 'Commercial', 'Luxury', 'Industrial', 'Land'],
    datasets: [{
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 158, 11)',
        'rgb(239, 68, 68)',
        'rgb(139, 92, 246)'
      ]
    }]
  };

  // Render active screen
  const renderScreen = () => {
    switch(activeMenu) {
      case "overview":
        return <OverviewScreen />;
      case "users":
        return <UsersScreen />;
      case "properties":
        return <PropertiesScreen />;
      case "transactions":
        return <TransactionsScreen />;
      case "analytics":
        return <AnalyticsScreen />;
      case "reports":
        return <ReportsScreen />;
      case "content":
        return <ContentScreen />;
      case "support":
        return <SupportScreen />;
      default:
        return <OverviewScreen />;
    }
  };

  // Screen Components
  const OverviewScreen = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">System Overview</h1>
            <p className="text-gray-300">Welcome back, {admin.name}. Here's what's happening with your platform today.</p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors">
            Generate Report
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
                <div className="flex items-center mt-1">
                  {stat.change.startsWith('+') ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
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
            <h3 className="text-lg font-semibold">Revenue Growth (Millions)</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
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
                },
                scales: {
                  y: {
                    ticks: {
                      callback: function(value) {
                        return '$' + value + 'M';
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">User Growth</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
          </div>
          <div className="h-64">
            <Bar 
              data={userGrowthData}
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
      </div>

      {/* Recent Activity Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Users</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {users.slice(0, 3).map(user => (
              <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' :
                    user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Properties */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Properties</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {properties.slice(0, 3).map(property => (
              <div key={property.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <img src={property.image} alt={property.title} className="h-10 w-10 rounded-lg object-cover mr-3" />
                  <div>
                    <p className="font-medium">{property.title}</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    property.status === 'approved' ? 'bg-green-100 text-green-800' :
                    property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const UsersScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-gray-600">Manage all users, roles, and permissions</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
            <UserCheck className="h-5 w-5 mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: "15,842", color: "blue" },
          { label: "Active Users", value: "12,450", color: "emerald" },
          { label: "Pending Approval", value: "124", color: "amber" },
          { label: "Suspended", value: "38", color: "red" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or role..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="ml-4 px-4 py-2 border border-gray-300 rounded-lg">
              <option>All Roles</option>
              <option>Agents</option>
              <option>Brokers</option>
              <option>Investors</option>
              <option>Developers</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">User</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Role</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Properties</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Rating</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Joined</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium">{user.properties}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{user.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-500">{user.joinDate}</td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Showing 4 of 15,842 users</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PropertiesScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Property Management</h2>
          <p className="text-gray-600">Manage all property listings and approvals</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2.5 border border-gray-300 rounded-lg">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Add Property
          </button>
        </div>
      </div>

      {/* Property Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Properties", value: "8,456", color: "blue" },
          { label: "Pending Review", value: "124", color: "amber" },
          { label: "Premium Listings", value: "2,134", color: "purple" },
          { label: "Featured", value: "356", color: "emerald" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="relative">
              <img src={property.image} alt={property.title} className="h-48 w-full object-cover" />
              <div className="absolute top-3 right-3 flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  property.status === 'approved' ? 'bg-green-100 text-green-800' :
                  property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {property.status}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {property.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-bold text-xl">{property.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Views</p>
                  <p className="font-medium">{property.views.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Owner: {property.owner}</span>
                <span>Created: {property.created}</span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg">
                  Review
                </button>
                <button className="p-2.5 border border-gray-300 hover:bg-gray-50 rounded-lg">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TransactionsScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Transaction Management</h2>
          <p className="text-gray-600">Monitor and manage all platform transactions</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </button>
      </div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-2xl font-bold mt-2">$245.8M</p>
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
              <p className="text-sm text-gray-500">Total Commission</p>
              <p className="text-2xl font-bold mt-2">$7.3M</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-100">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12% from last quarter</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Pending Transactions</p>
              <p className="text-2xl font-bold mt-2">42</p>
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
            <div className="flex space-x-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Types</option>
                <option>Sales</option>
                <option>Leases</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Transaction ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">User</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Property</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Commission</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-mono text-sm">TX-{1000 + index}</td>
                  <td className="py-4 px-6 font-medium">{tx.user}</td>
                  <td className="py-4 px-6">{tx.property}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.type === 'Sale' ? 'bg-blue-100 text-blue-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold">{tx.amount}</td>
                  <td className="py-4 px-6 font-bold text-green-600">{tx.commission}</td>
                  <td className="py-4 px-6">{tx.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {tx.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                      )}
                      <span className={`font-medium ${
                        tx.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {tx.status}
                      </span>
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
        <h2 className="text-2xl font-bold">Advanced Analytics</h2>
        <p className="text-gray-600">Comprehensive platform analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Property Types Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Property Types Distribution</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>Current Month</option>
              <option>Last Month</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-64">
            <Doughnut 
              data={propertyTypeData}
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

        {/* Platform Performance */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Platform Performance</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
          </div>
          <div className="space-y-4">
            {[
              { label: "Page Load Time", value: "1.2s", target: "<2s", status: "good" },
              { label: "API Response Time", value: "180ms", target: "<200ms", status: "good" },
              { label: "Database Query Time", value: "45ms", target: "<50ms", status: "good" },
              { label: "Server Uptime", value: "99.9%", target: "99.95%", status: "warning" }
            ].map((metric, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{metric.label}</span>
                  <span className={`font-bold ${
                    metric.status === 'good' ? 'text-green-600' :
                    metric.status === 'warning' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {metric.value}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Target: {metric.target}</span>
                  {metric.status === 'good' ? (
                    <span className="text-green-600">✓ Meeting target</span>
                  ) : (
                    <span className="text-yellow-600">⚠ Below target</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Analytics */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Geographic Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { country: "USA", users: "4,850", revenue: "$98.2M", growth: "+18%" },
            { country: "UK", users: "2,340", revenue: "$45.6M", growth: "+12%" },
            { country: "UAE", users: "1,560", revenue: "$38.4M", growth: "+24%" },
            { country: "Canada", users: "1,280", revenue: "$32.1M", growth: "+15%" },
            { country: "Australia", users: "980", revenue: "$28.7M", growth: "+9%" }
          ].map((region, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-xl">
              <div className="font-semibold mb-2">{region.country}</div>
              <div className="text-sm text-gray-500 mb-1">Users: {region.users}</div>
              <div className="text-sm text-gray-500 mb-1">Revenue: {region.revenue}</div>
              <div className={`text-sm ${region.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                Growth: {region.growth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ReportsScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <p className="text-gray-600">Generate and download platform reports</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Monthly Revenue Report",
            desc: "Detailed revenue breakdown by region and property type",
            type: "Financial",
            lastRun: "2 days ago",
            icon: <DollarSign className="h-6 w-6" />,
            color: "green"
          },
          {
            title: "User Growth Analysis",
            desc: "New user registrations and activation rates",
            type: "Analytics",
            lastRun: "1 week ago",
            icon: <Users className="h-6 w-6" />,
            color: "blue"
          },
          {
            title: "Property Performance",
            desc: "Listing views, inquiries, and conversion rates",
            type: "Performance",
            lastRun: "3 days ago",
            icon: <Home className="h-6 w-6" />,
            color: "purple"
          },
          {
            title: "Commission Report",
            desc: "Agent commissions and payout breakdown",
            type: "Financial",
            lastRun: "1 day ago",
            icon: <CreditCard className="h-6 w-6" />,
            color: "amber"
          },
          {
            title: "Platform Performance",
            desc: "System uptime, response times, and errors",
            type: "Technical",
            lastRun: "4 hours ago",
            icon: <Activity className="h-6 w-6" />,
            color: "red"
          },
          {
            title: "Market Analysis",
            desc: "Price trends and market demand by region",
            type: "Research",
            lastRun: "2 weeks ago",
            icon: <BarChart3 className="h-6 w-6" />,
            color: "emerald"
          }
        ].map((report, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${report.color}-100`}>
                <div className={`text-${report.color}-600`}>{report.icon}</div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <h3 className="font-bold text-lg mb-2">{report.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.desc}</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">
                {report.type}
              </span>
              <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContentScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Content Management</h2>
          <p className="text-gray-600">Manage platform content and announcements</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Content
        </button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Published Articles", value: "156", color: "blue" },
          { label: "Draft Articles", value: "24", color: "amber" },
          { label: "Active Announcements", value: "8", color: "emerald" },
          { label: "Total Views", value: "245K", color: "purple" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Content</h3>
            <div className="flex space-x-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Types</option>
                <option>Articles</option>
                <option>Announcements</option>
                <option>Blog Posts</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Scheduled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">Real Estate Market Trends 2024</h4>
                  <p className="text-gray-600 mb-3">Comprehensive analysis of global real estate market trends and predictions for 2024...</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Published: 2024-01-15</span>
                    <span>Views: 12,456</span>
                    <span>Type: Article</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Published
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SupportScreen = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Support Management</h2>
          <p className="text-gray-600">Manage user support tickets and inquiries</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Ticket
        </button>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Open Tickets", value: "87", color: "amber" },
          { label: "In Progress", value: "23", color: "blue" },
          { label: "Resolved Today", value: "14", color: "emerald" },
          { label: "Avg. Response Time", value: "2.4h", color: "purple" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="ml-4 px-4 py-2 border border-gray-300 rounded-lg">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Ticket ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">User</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Subject</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Priority</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Assignee</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Created</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map(ticket => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-mono text-sm">TICKET-{1000 + ticket.id}</td>
                  <td className="py-4 px-6 font-medium">{ticket.user}</td>
                  <td className="py-4 px-6">{ticket.subject}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                      ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                      ticket.status === 'in-progress' ? 'bg-amber-100 text-amber-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">{ticket.assignee}</td>
                  <td className="py-4 px-6">{ticket.created}</td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Custom Plus icon component
  const Plus = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="font-bold">Admin</span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            {admin.notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {admin.notifications}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <div>
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                    <p className="text-xs text-gray-400">Global Estates</p>
                  </div>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* User Profile */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <img 
                  src={admin.avatar} 
                  alt={admin.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-gray-700"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{admin.name}</h3>
                  <p className="text-sm text-gray-400 truncate">{admin.role}</p>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Main Menu
                </p>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-colors ${
                      activeMenu === item.id
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`mr-3 ${activeMenu === item.id ? 'text-blue-300' : 'text-gray-400'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeMenu === item.id
                          ? 'bg-blue-800 text-blue-200'
                          : 'bg-gray-800 text-gray-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-6">
                  System
                </p>
                {systemMenuItems.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    <div className="mr-3 text-gray-400">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-900/30 rounded-lg">
                    <Lock className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Secure Session</p>
                    <p className="text-xs text-gray-400">Active • Admin</p>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2.5 bg-red-900/30 hover:bg-red-900/50 border border-red-800 rounded-lg text-red-200 transition-colors">
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
                  {activeMenu === "overview" && "System overview and platform analytics"}
                  {activeMenu === "users" && "User management and permissions"}
                  {activeMenu === "properties" && "Property listings and approvals"}
                  {activeMenu === "transactions" && "Transaction monitoring and management"}
                  {activeMenu === "analytics" && "Advanced analytics and insights"}
                  {activeMenu === "reports" && "Report generation and management"}
                  {activeMenu === "content" && "Content management and announcements"}
                  {activeMenu === "support" && "Support ticket management"}
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
                  {admin.notifications > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {admin.notifications}
                    </span>
                  )}
                </button>
                <div className="flex items-center space-x-3">
                  <img 
                    src={admin.avatar} 
                    alt={admin.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-medium">{admin.name}</p>
                    <p className="text-xs text-gray-500">{admin.role}</p>
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
              <p>© 2024 Global Estates International • Admin Panel v2.1.4</p>
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <Activity className="h-3 w-3 mr-1 text-green-500" />
                  System: <span className="text-green-600 ml-1 font-medium">Operational</span>
                </span>
                <button className="hover:text-gray-700">Audit Logs</button>
                <button className="hover:text-gray-700">System Status</button>
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

export default AdminDashboard;