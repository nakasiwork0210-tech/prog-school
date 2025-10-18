import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react'; // アイコンライブラリの例

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // ページ遷移時にメニューを閉じる
  }, [location]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Service", to: "/service" },
    { label: "Price", to: "/price" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          NeuroLedger
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <Menu size={28} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md absolute top-0 left-0 w-full h-screen"
          >
            <div className="flex justify-end p-6">
               <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
               </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
              {navLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="text-gray-200 text-2xl hover:text-blue-300 transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

