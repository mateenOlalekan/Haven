import { useState } from "react";
import { 
  User, Mail, Lock, Eye, EyeOff, Phone, Building, Globe, CheckCircle,
  ArrowRight, Briefcase, Building2, CreditCard, Home, BarChart, 
  MapPin, Globe2, Award, Users, FileText, Calendar, DollarSign,
  Percent, Key
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    password: "",
    confirmPassword: "",
    userType: "agent",
    termsAccepted: false,
    newsletter: true,
    
    // Agent specific
    licenseNumber: "",
    yearsExperience: "",
    specialties: [],
    languages: [],
    
    // Broker specific
    brokerageName: "",
    brokerageLicense: "",
    teamSize: "",
    markets: [],
    
    // Investor specific
    investmentFocus: [],
    investmentBudget: "",
    preferredLocations: [],
    
    // Developer specific
    companyType: "",
    projectsCompleted: "",
    projectScale: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const countries = [
    "Select Country",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "United Arab Emirates",
    "Singapore",
    "Japan",
    "China",
    "Switzerland",
    "Netherlands",
    "Brazil",
    "Mexico",
    "South Africa",
    "India",
    "Portugal"
  ];

  const userTypes = [
    { value: "agent", label: "Agent", icon: "👔", desc: "Real Estate Agent" },
    { value: "broker", label: "Broker", icon: "🏢", desc: "Brokerage Owner" },
    { value: "investor", label: "Investor", icon: "👤", desc: "Property Investor" },
    { value: "developer", label: "Developer", icon: "🏗️", desc: "Property Developer" }
  ];

  const agentSpecialties = [
    "Residential",
    "Commercial",
    "Luxury",
    "Industrial",
    "Agricultural",
    "Rental",
    "Property Management"
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Arabic", 
    "Russian", "Portuguese", "Japanese", "Italian"
  ];

  const investmentFocusOptions = [
    "Residential",
    "Commercial",
    "Luxury",
    "Short-term Rental",
    "REITs",
    "Land Development",
    "Mixed-Use",
    "Industrial"
  ];

  const projectScaleOptions = [
    "Small (<10 units)",
    "Medium (10-50 units)",
    "Large (50-200 units)",
    "Mega (>200 units)"
  ];

  const passwordRequirements = [
    { id: 1, text: "8+ characters", validator: (pwd) => pwd.length >= 8 },
    { id: 2, text: "Uppercase letter", validator: (pwd) => /[A-Z]/.test(pwd) },
    { id: 3, text: "Number", validator: (pwd) => /[0-9]/.test(pwd) },
    { id: 4, text: "Special char", validator: (pwd) => /[!@#$%^&*]/.test(pwd) }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name.startsWith('specialties_')) {
      const specialty = name.replace('specialties_', '');
      setFormData(prev => ({
        ...prev,
        specialties: prev.specialties.includes(specialty)
          ? prev.specialties.filter(s => s !== specialty)
          : [...prev.specialties, specialty]
      }));
      return;
    }
    
    if (type === 'checkbox' && name.startsWith('languages_')) {
      const language = name.replace('languages_', '');
      setFormData(prev => ({
        ...prev,
        languages: prev.languages.includes(language)
          ? prev.languages.filter(l => l !== language)
          : [...prev.languages, language]
      }));
      return;
    }
    
    if (type === 'checkbox' && name.startsWith('investmentFocus_')) {
      const focus = name.replace('investmentFocus_', '');
      setFormData(prev => ({
        ...prev,
        investmentFocus: prev.investmentFocus.includes(focus)
          ? prev.investmentFocus.filter(f => f !== focus)
          : [...prev.investmentFocus, focus]
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleUserTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      userType: type,
      // Reset role-specific fields when switching types
      specialties: [],
      languages: [],
      investmentFocus: [],
      markets: [],
      preferredLocations: []
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Common validation
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.country || formData.country === "Select Country") newErrors.country = "Select country";
    
    // Password validation
    passwordRequirements.forEach(req => {
      if (!req.validator(formData.password)) {
        newErrors.password = "Weak password";
      }
    });
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "No match";
    }
    
    // Role-specific validation
    if (formData.userType === "agent") {
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = "License number required";
      if (!formData.yearsExperience) newErrors.yearsExperience = "Years of experience required";
    }
    
    if (formData.userType === "broker") {
      if (!formData.brokerageName.trim()) newErrors.brokerageName = "Brokerage name required";
      if (!formData.brokerageLicense.trim()) newErrors.brokerageLicense = "Brokerage license required";
    }
    
    if (formData.userType === "investor") {
      if (formData.investmentFocus.length === 0) newErrors.investmentFocus = "Select at least one focus area";
      if (!formData.investmentBudget) newErrors.investmentBudget = "Investment budget required";
    }
    
    if (formData.userType === "developer") {
      if (!formData.companyType.trim()) newErrors.companyType = "Company type required";
      if (!formData.projectsCompleted) newErrors.projectsCompleted = "Number of projects required";
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Must accept terms";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 2000);
  };

  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;
    
    if (score === 0) return { strength: "Very Weak", color: "bg-red-500", width: "25%" };
    if (score === 1) return { strength: "Weak", color: "bg-red-400", width: "25%" };
    if (score === 2) return { strength: "Fair", color: "bg-yellow-500", width: "50%" };
    if (score === 3) return { strength: "Good", color: "bg-green-400", width: "75%" };
    if (score === 4) return { strength: "Strong", color: "bg-green-600", width: "100%" };
  };

  const renderAgentForm = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Award className="h-4 w-4 text-blue-600 mr-2" />
        <h3 className="text-sm font-semibold text-gray-900">Agent Information</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            License Number *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Key className="h-4 w-4" />
            </span>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                errors.licenseNumber ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="e.g., BRE#123456"
            />
          </div>
          {errors.licenseNumber && (
            <p className="mt-1 text-xs text-red-600">{errors.licenseNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Years of Experience *
          </label>
          <select
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
              errors.yearsExperience ? 'border-red-300' : 'border-gray-200'
            }`}
          >
            <option value="">Select years</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
          {errors.yearsExperience && (
            <p className="mt-1 text-xs text-red-600">{errors.yearsExperience}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Specialties *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {agentSpecialties.map((specialty) => (
            <label key={specialty} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`specialties_${specialty}`}
                checked={formData.specialties.includes(specialty)}
                onChange={handleChange}
                className="h-3 w-3 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">{specialty}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Languages Spoken
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {languages.slice(0, 6).map((language) => (
            <label key={language} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`languages_${language}`}
                checked={formData.languages.includes(language)}
                onChange={handleChange}
                className="h-3 w-3 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">{language}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBrokerForm = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Building2 className="h-4 w-4 text-blue-600 mr-2" />
        <h3 className="text-sm font-semibold text-gray-900">Brokerage Information</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Brokerage Name *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Building className="h-4 w-4" />
            </span>
            <input
              type="text"
              name="brokerageName"
              value={formData.brokerageName}
              onChange={handleChange}
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                errors.brokerageName ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="Your brokerage name"
            />
          </div>
          {errors.brokerageName && (
            <p className="mt-1 text-xs text-red-600">{errors.brokerageName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Brokerage License *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Key className="h-4 w-4" />
            </span>
            <input
              type="text"
              name="brokerageLicense"
              value={formData.brokerageLicense}
              onChange={handleChange}
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                errors.brokerageLicense ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="License number"
            />
          </div>
          {errors.brokerageLicense && (
            <p className="mt-1 text-xs text-red-600">{errors.brokerageLicense}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Team Size
        </label>
        <select
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
        >
          <option value="">Select team size</option>
          <option value="1-5">1-5 agents</option>
          <option value="6-20">6-20 agents</option>
          <option value="21-50">21-50 agents</option>
          <option value="50+">50+ agents</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Primary Markets
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Residential", "Commercial", "Luxury", "Rental", "Industrial", "International"].map((market) => (
            <label key={market} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`markets_${market}`}
                checked={formData.markets.includes(market)}
                onChange={(e) => {
                  const marketType = e.target.name.replace('markets_', '');
                  setFormData(prev => ({
                    ...prev,
                    markets: prev.markets.includes(marketType)
                      ? prev.markets.filter(m => m !== marketType)
                      : [...prev.markets, marketType]
                  }));
                }}
                className="h-3 w-3 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">{market}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInvestorForm = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <DollarSign className="h-4 w-4 text-blue-600 mr-2" />
        <h3 className="text-sm font-semibold text-gray-900">Investment Profile</h3>
      </div>
      
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Investment Focus *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {investmentFocusOptions.map((focus) => (
            <label key={focus} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`investmentFocus_${focus}`}
                checked={formData.investmentFocus.includes(focus)}
                onChange={handleChange}
                className="h-3 w-3 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">{focus}</span>
            </label>
          ))}
        </div>
        {errors.investmentFocus && (
          <p className="mt-1 text-xs text-red-600">{errors.investmentFocus}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Investment Budget *
          </label>
          <select
            name="investmentBudget"
            value={formData.investmentBudget}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
              errors.investmentBudget ? 'border-red-300' : 'border-gray-200'
            }`}
          >
            <option value="">Select budget range</option>
            <option value="<100k">&lt; $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="500k-2M">$500,000 - $2M</option>
            <option value="2M-10M">$2M - $10M</option>
            <option value="10M+">$10M+</option>
          </select>
          {errors.investmentBudget && (
            <p className="mt-1 text-xs text-red-600">{errors.investmentBudget}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Preferred Property Type
          </label>
          <select
            name="preferredPropertyType"
            value={formData.preferredPropertyType}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
          >
            <option value="">Select type</option>
            <option value="apartments">Apartments</option>
            <option value="houses">Single Family Homes</option>
            <option value="condos">Condominiums</option>
            <option value="office">Office Buildings</option>
            <option value="retail">Retail Spaces</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Target Markets
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPin className="h-4 w-4" />
          </span>
          <input
            type="text"
            name="preferredLocations"
            value={formData.preferredLocations}
            onChange={handleChange}
            className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
            placeholder="e.g., Miami, London, Dubai"
          />
        </div>
      </div>
    </div>
  );

  const renderDeveloperForm = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Building2 className="h-4 w-4 text-blue-600 mr-2" />
        <h3 className="text-sm font-semibold text-gray-900">Development Company</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Company Type *
          </label>
          <select
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
              errors.companyType ? 'border-red-300' : 'border-gray-200'
            }`}
          >
            <option value="">Select company type</option>
            <option value="private">Private Developer</option>
            <option value="public">Public Company</option>
            <option value="joint-venture">Joint Venture</option>
            <option value="reit">REIT</option>
            <option value="contractor">General Contractor</option>
          </select>
          {errors.companyType && (
            <p className="mt-1 text-xs text-red-600">{errors.companyType}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Projects Completed *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FileText className="h-4 w-4" />
            </span>
            <input
              type="number"
              name="projectsCompleted"
              value={formData.projectsCompleted}
              onChange={handleChange}
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                errors.projectsCompleted ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="Number of completed projects"
              min="0"
            />
          </div>
          {errors.projectsCompleted && (
            <p className="mt-1 text-xs text-red-600">{errors.projectsCompleted}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Typical Project Scale
          </label>
          <select
            name="projectScale"
            value={formData.projectScale}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
          >
            <option value="">Select scale</option>
            {projectScaleOptions.map(scale => (
              <option key={scale} value={scale}>{scale}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Years in Business
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Calendar className="h-4 w-4" />
            </span>
            <input
              type="number"
              name="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
              placeholder="Years"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Development Focus
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Residential", "Commercial", "Mixed-Use", "Luxury", "Affordable", "Green"].map((focus) => (
            <label key={focus} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`devFocus_${focus}`}
                onChange={(e) => {
                  const devFocus = e.target.name.replace('devFocus_', '');
                  setFormData(prev => ({
                    ...prev,
                    developmentFocus: prev.developmentFocus?.includes(devFocus)
                      ? prev.developmentFocus?.filter(f => f !== devFocus)
                      : [...(prev.developmentFocus || []), devFocus]
                  }));
                }}
                className="h-3 w-3 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-gray-700">{focus}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRoleSpecificForm = () => {
    switch (formData.userType) {
      case "agent":
        return renderAgentForm();
      case "broker":
        return renderBrokerForm();
      case "investor":
        return renderInvestorForm();
      case "developer":
        return renderDeveloperForm();
      default:
        return null;
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Success!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Account created. Redirecting...
            </p>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 p-2 sm:p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden h-[95vh] max-h-[900px]">
        {/* Left Side - Registration Info */}
        <div className="lg:w-2/5 relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2873&q=80"
              alt="Global Real Estate Network"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-emerald-900/70"></div>
          </div>
          
          <div className="relative z-20 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">Global Estates</h1>
                <p className="text-blue-100 text-xs sm:text-sm">Join Our Network</p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Join 10,000+<br />Professionals
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Access exclusive listings, global connections, and premium tools.
              </p>

              {/* Benefits */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: "🌍", title: "Global Reach", desc: "Connect worldwide" },
                  { icon: "🔒", title: "Verified Network", desc: "Professionally verified" },
                  { icon: "📈", title: "Market Insights", desc: "Premium analytics" },
                  { icon: "🤝", title: "Cross-Border", desc: "International deals" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="text-xl sm:text-2xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{benefit.title}</h3>
                      <p className="text-blue-100/80 text-xs sm:text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="border-t border-white/20 pt-4">
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">50+</div>
                  <div className="text-blue-100/80 text-xs">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">500K+</div>
                  <div className="text-blue-100/80 text-xs">Listings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">$10B+</div>
                  <div className="text-blue-100/80 text-xs">Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">24/7</div>
                  <div className="text-blue-100/80 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Create Account
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Join the premier real estate network
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    I am a:
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {userTypes.map((type) => (
                      <button
                        type="button"
                        key={type.value}
                        onClick={() => handleUserTypeChange(type.value)}
                        className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                          formData.userType === type.value
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
                        }`}
                      >
                        <div className="text-xl mb-1">{type.icon}</div>
                        <div className="text-xs font-semibold text-gray-800">{type.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Common Fields */}
                <div className="pt-2 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Basic Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        First Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User className="h-4 w-4" />
                        </span>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.firstName ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User className="h-4 w-4" />
                        </span>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.lastName ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.email ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.phone ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Briefcase className="h-4 w-4" />
                        </span>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Country *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Globe className="h-4 w-4" />
                        </span>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-8 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none appearance-none ${
                            errors.country ? 'border-red-300' : 'border-gray-200'
                          }`}
                        >
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.country && (
                        <p className="mt-1 text-xs text-red-600">{errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Role-Specific Form */}
                <div className="pt-2 border-t border-gray-100">
                  {renderRoleSpecificForm()}
                </div>

                {/* Password */}
                <div className="pt-2 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Account Security</h3>
                  
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Password *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Lock className="h-4 w-4" />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-10 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.password ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="Strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      
                      {/* Password Strength Indicator */}
                      {formData.password && (
                        <div className="mt-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-gray-700">Strength</span>
                            <span className="text-xs font-medium text-gray-900">
                              {calculatePasswordStrength(formData.password).strength}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${calculatePasswordStrength(formData.password).color} transition-all duration-300`}
                              style={{ width: calculatePasswordStrength(formData.password).width }}
                            ></div>
                          </div>
                          
                          {/* Password Requirements */}
                          <div className="mt-2 grid grid-cols-2 gap-1">
                            {passwordRequirements.map(req => (
                              <div key={req.id} className="flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-1 flex items-center justify-center ${
                                  req.validator(formData.password) 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-gray-200'
                                }`}>
                                  {req.validator(formData.password) && (
                                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <span className={`text-xs ${
                                  req.validator(formData.password) 
                                    ? 'text-green-600' 
                                    : 'text-gray-500'
                                }`}>
                                  {req.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {errors.password && (
                        <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Lock className="h-4 w-4" />
                        </span>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-10 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none ${
                            errors.confirmPassword ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="Confirm password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <label className="flex items-start space-x-2">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        formData.termsAccepted 
                          ? 'bg-blue-600 border-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {formData.termsAccepted && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-700">
                        I agree to{" "}
                        <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                          Terms
                        </Link>{" "}
                        &{" "}
                        <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                          Privacy
                        </Link>
                      </span>
                      {errors.termsAccepted && (
                        <p className="mt-0.5 text-xs text-red-600">{errors.termsAccepted}</p>
                      )}
                    </div>
                  </label>

                  <label className="flex items-start space-x-2">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        formData.newsletter 
                          ? 'bg-blue-600 border-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {formData.newsletter && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-700">
                      Receive market insights & updates
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isLoading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 shadow hover:shadow-md'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Create Account as {formData.userType.charAt(0).toUpperCase() + formData.userType.slice(1)}
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </div>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="my-4 sm:my-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-gray-500 text-xs font-medium">
                      Or sign up with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Sign Up */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-100 text-red-600 transition-all duration-200 hover:shadow-sm">
                  <FaGoogle className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-100 text-blue-700 transition-all duration-200 hover:shadow-sm">
                  <FaLinkedin className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-gray-800 transition-all duration-200 hover:shadow-sm">
                  <FaApple className="h-4 w-4" />
                </button>
              </div>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-600">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;