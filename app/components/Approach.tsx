import { BrainCircuit, Search, Blocks } from "lucide-react";

export function Approach() {
  const principles = [
    {
      title: "Analytical thinking",
      description: "Applying structured analytical models to complex business problems.",
      icon: <BrainCircuit className="h-6 w-6 text-gray-900" />,
    },
    {
      title: "Research-based insights",
      description: "Using qualitative and quantitative research to support strategic decisions.",
      icon: <Search className="h-6 w-6 text-gray-900" />,
    },
    {
      title: "Practical frameworks",
      description: "Developing methodologies that can be applied in real operational and strategic contexts.",
      icon: <Blocks className="h-6 w-6 text-gray-900" />,
    },
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our work is based on three key principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
