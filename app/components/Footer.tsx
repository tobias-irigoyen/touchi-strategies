import { Mail, MapPin, Building, Briefcase, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300 py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              <a href="#" className="flex logo-text text-xl font-bold tracking-tight text-white">
                <span className="mr-2 font-black">T</span><span className="mr-2">|</span><span>Touchi Strategies</span>
              </a>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Strategic Analysis & Consulting firm delivering structured frameworks and insights.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                <span><strong className="text-gray-300 font-medium">Legal Name:</strong> Touchi Strategies LLC</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                <span><strong className="text-gray-300 font-medium">Jurisdiction:</strong> United States</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                <span><strong className="text-gray-300 font-medium">Business Activity:</strong> Strategic analysis, research, and consulting services</span>
              </li>
              <li className="flex items-start">
                <Building className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                <span><strong className="text-gray-300 font-medium">Company Type:</strong> Limited Liability Company (LLC)</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <p className="text-gray-400 mb-4">For business inquiries:</p>
            <a 
              href="mailto:info.touchistrategies@gmail.com" 
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors bg-gray-900 px-4 py-3 rounded-lg border border-gray-800 hover:border-gray-700"
            >
              <Mail className="h-5 w-5 mr-3" />
              <span>info.touchistrategies@gmail.com</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Touchi Strategies LLC. All rights reserved.</p>
          <p className="mt-4 md:mt-0">United States</p>
        </div>
      </div>
    </footer>
  );
}
