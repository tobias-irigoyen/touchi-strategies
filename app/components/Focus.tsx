import { CheckCircle2 } from "lucide-react";

export function Focus() {
  const areas = [
    "Business strategy",
    "Market research",
    "Financial analysis",
    "Operational efficiency",
    "Strategic planning",
  ];

  return (
    <section id="focus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Areas of Focus</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our analytical work is tailored to address specific challenges and opportunities. We operate across a variety of domains to deliver comprehensive strategic insights.
            </p>
            <div className="h-1 w-20 bg-gray-900 rounded-full"></div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wider mb-8">Core Competencies</h3>
            <ul className="space-y-6">
              {areas.map((area, index) => (
                <li key={index} className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 mr-4 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
