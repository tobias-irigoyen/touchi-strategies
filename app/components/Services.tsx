import { Target, ListTree, Activity, Lightbulb } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Strategic Analysis",
      description: "Research and evaluation of business environments, market conditions, and operational structures to support strategic planning.",
      icon: <Target className="h-6 w-6 text-gray-900" />,
    },
    {
      title: "Decision-Making Frameworks",
      description: "Development of structured analytical models that help organizations improve decision-making processes.",
      icon: <ListTree className="h-6 w-6 text-gray-900" />,
    },
    {
      title: "Performance Optimization",
      description: "Analysis of operational and strategic processes with the objective of identifying improvements and efficiency opportunities.",
      icon: <Activity className="h-6 w-6 text-gray-900" />,
    },
    {
      title: "Research & Advisory",
      description: "Independent research and advisory services for organizations seeking analytical support for strategic initiatives.",
      icon: <Lightbulb className="h-6 w-6 text-gray-900" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Touchi Strategies LLC provides consulting and analytical services in the following areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gray-100 border border-gray-200">
                    {service.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
