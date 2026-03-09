import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Focus", href: "#focus" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex logo-text text-xl font-bold tracking-tight text-gray-900">
              <span className="mr-2 font-black">T</span><span className="mr-2">|</span><span>Touchi Strategies</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            > 
            <span className="sr-only">Toggle Menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-20 left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
