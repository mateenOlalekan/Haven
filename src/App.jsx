import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import PublicLayout from "./components/layouts/PublicLayout";
import AuthLayout from "./components/layouts/AuthLayout";

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PropertyTypes = lazy(() => import('./components/Propertypes'));
const ShowcaseProperties = lazy(() => import('./components/ShowcaseProperty'));
const AdvertiseSection = lazy(() => import('./components/AdvertiseSection'));
const ListingCTA = lazy(() => import('./components/ListingCTA'));

const ExploreLand = lazy(() => import('./pages/ExploreLand'));
const SearchByState = lazy(() => import('./pages/SearchByState'));
const FindAgent = lazy(() => import('./pages/FindAgent'));
const Activities = lazy(() => import('./pages/Activities'));
const Login = lazy(() => import('./pages/Login'));
const AddListing = lazy(() => import('./pages/AddListing'));
const Register = lazy(() => import('./pages/Register'));

const SavedProperties = () => <div>Saved Properties Page</div>;
const PropertyDetails = () => <div>Property Details Page</div>;

// Dashboard
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const AdminDashboard = lazy(() => import('./pages/Dashboard/AdminDashboard'));

const LoadingSpinner = ({ fullScreen }) => (
  <div className={`flex items-center justify-center ${fullScreen ? "min-h-screen" : "min-h-[200px]"}`}>
    <p className="text-lg">Loading...</p>
  </div>
);

// Scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to: ${location.pathname}`);
  }, [location]);

  return (
    <>
      <ScrollToTop />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { background: '#333', color: '#fff' },
        }}
      />

      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes location={location} key={location.pathname}>

            {/* ================= PUBLIC ROUTES ================= */}
            <Route element={<PublicLayout />}>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <SearchBar />
                    <PropertyTypes />
                    <ShowcaseProperties
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                    <AdvertiseSection />
                    <ListingCTA />
                  </>
                }
              />

              <Route path="/explore-land" element={<ExploreLand />} />
              <Route path="/search-by-state" element={<SearchByState />} />
              <Route path="/find-agent" element={<FindAgent />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/add-listing" element={<AddListing />} />
              <Route path="/saved-properties" element={<SavedProperties />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
            </Route>

            {/* ================= AUTH ROUTES ================= */}
            <Route element={<AuthLayout />}>
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route  path="dash" element={<Dashboard/>}/>
            <Route  path="admin" element={<AdminDashboard/>}/>

            {/* ================= 404 ================= */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-screen">
                  <h2 className="text-4xl font-bold mb-4 dark:text-white">404</h2>
                  <p className="text-xl dark:text-gray-300">Page Not Found</p>
                </div>
              }
            />

          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
