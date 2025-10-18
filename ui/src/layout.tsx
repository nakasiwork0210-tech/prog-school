import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow pt-20"> {/* Headerの高さ分の余白 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

