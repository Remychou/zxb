import { useEffect, useRef, useState } from "react";
import { Award, Trophy, FileCheck, Star } from "lucide-react";

const honors = [
  {
    icon: Trophy,
    title: "国家级高新技术企业",
    description: "通过国家高新技术企业认定",
    year: "2020",
  },
  {
    icon: FileCheck,
    title: "ISO9001认证",
    description: "质量管理体系认证",
    year: "2021",
  },
  {
    icon: Award,
    title: "多项发明专利",
    description: "拥有自主知识产权50余项",
    year: "2022",
  },
  {
    icon: Star,
    title: "优秀供应商",
    description: "多家知名企业优秀供应商",
    year: "2023",
  },
];

export default function Honors() {
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
    <section ref={sectionRef} className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            公司荣誉
          </h2>
          <p className="text-lg text-slate-500">Glories of Company</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {honors.map((honor, index) => (
            <div
              key={honor.title}
              className={`group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                {honor.year}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <honor.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {honor.title}
              </h3>
              <p className="text-slate-600 text-sm">{honor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
