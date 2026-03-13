import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBgImg from "../../public/hero-bg.jpg";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroBg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
        if (heroBg) {
          heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-[calc(100vh-104px)] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">
              专业单片机方案开发商
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            为您的创新提供
            <span className="text-blue-400">核心动力</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            十年专注单片机方案开发，提供从芯片选型、方案设计到量产支持的一站式服务。
            我们与国内外知名芯片厂商深度合作，为您的创新产品保驾护航。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5"
            >
              了解我们
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              产品中心
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">10+</div>
              <div className="text-slate-400 text-sm mt-1">年行业经验</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
              <div className="text-slate-400 text-sm mt-1">服务客户</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">1000+</div>
              <div className="text-slate-400 text-sm mt-1">成功案例</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
