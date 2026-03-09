import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:pr-8 text-center lg:text-left z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Strategic Analysis <br className="hidden lg:block" />& Consulting
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Touchi Strategies LLC is a strategic analysis and consulting firm focused on analytical frameworks, research, and decision-making support for businesses and investors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative z-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 aspect-[4/3] bg-gray-100 border-3 border-[#000]">
              <ImageWithFallback
                src="/investments.jpg"
                alt="Finances and investments abstract illustration"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
