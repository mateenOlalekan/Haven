import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
