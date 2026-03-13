import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import aboutUsImg from "../../public/about-us.jpg";

const features = [
  "十年以上行业经验",
  "专业技术团队支持",
  "全流程服务体系",
  "优质供应链保障",
];

const stats = [
  { value: "10+", label: "年行业经验" },
  { value: "500+", label: "服务客户" },
  { value: "1000+", label: "成功案例" },
  { value: "50+", label: "技术专利" },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutUsImg}
                alt="关于我们"
                className="w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-slate-600">年行业经验</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-sm font-medium">
                关于我们
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              专业单片机方案开发
              <span className="text-blue-600">服务商</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              我们是一家专注于单片机方案开发和芯片销售的技术型企业。拥有十年以上行业经验，为客户提供从芯片选型、方案设计、样品调试到量产支持的全流程服务。
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              我们与国内外多家知名芯片厂商建立了长期稳定的合作关系，确保为客户提供优质可靠的产品和及时专业的技术支持。
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
