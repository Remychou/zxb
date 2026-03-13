import { useEffect, useRef, useState } from "react";
import { 
  Smartphone, 
  Factory, 
  Car, 
  Heart, 
  Wifi, 
  Shield 
} from "lucide-react";

const applications = [
  {
    icon: Smartphone,
    title: "消费电子",
    description: "智能家居、可穿戴设备、便携式电子产品",
    color: "bg-blue-500",
  },
  {
    icon: Factory,
    title: "工业控制",
    description: "PLC控制系统、传感器、工业自动化",
    color: "bg-emerald-500",
  },
  {
    icon: Car,
    title: "汽车电子",
    description: "车载系统、新能源控制、智能驾驶辅助",
    color: "bg-amber-500",
  },
  {
    icon: Heart,
    title: "医疗设备",
    description: "健康监测、医疗器械、康复设备",
    color: "bg-rose-500",
  },
  {
    icon: Wifi,
    title: "物联网",
    description: "智能连接、数据采集、远程监控",
    color: "bg-cyan-500",
  },
  {
    icon: Shield,
    title: "安防监控",
    description: "智能门禁、监控系统、报警设备",
    color: "bg-violet-500",
  },
];

export default function Applications() {
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
    <section
      id="applications"
      ref={sectionRef}
      className="w-full py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            应用领域
          </h2>
          <p className="text-lg text-slate-500">Application Areas</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${app.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <app.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {app.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {app.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
