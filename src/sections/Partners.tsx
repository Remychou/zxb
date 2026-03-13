import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "STMicroelectronics", abbr: "ST" },
  { name: "Microchip", abbr: "MC" },
  { name: "Texas Instruments", abbr: "TI" },
  { name: "NXP", abbr: "NXP" },
  { name: "Renesas", abbr: "RN" },
  { name: "Infineon", abbr: "IF" },
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            合作伙伴
          </h2>
          <p className="text-slate-500">Our Partners</p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
              title={partner.name}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  {partner.abbr}
                </div>
                <div className="text-xs text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
