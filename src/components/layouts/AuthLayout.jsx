import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
}
