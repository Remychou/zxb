import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "全部",
  "8位单片机",
  "32位单片机",
  "ARM芯片",
  "接口芯片",
  "电源管理",
];

const products = [
  {
    id: 1,
    name: "STM32F103系列",
    description: "32位ARM Cortex-M3内核，高性能低功耗",
    category: "32位单片机",
    image: "/chip-1.jpg",
    specs: "72MHz | 64-512KB Flash",
  },
  {
    id: 2,
    name: "MSP430系列",
    description: "超低功耗16位MCU，适合电池供电应用",
    category: "8位单片机",
    image: "/chip-2.jpg",
    specs: "16MHz | 0.5-256KB Flash",
  },
  {
    id: 3,
    name: "PIC16F系列",
    description: "高性能8位单片机，工业级可靠性",
    category: "8位单片机",
    image: "/chip-3.jpg",
    specs: "32MHz | 7-128KB Flash",
  },
  {
    id: 4,
    name: "CH340系列",
    description: "USB转串口芯片，即插即用免驱动",
    category: "接口芯片",
    image: "/chip-4.jpg",
    specs: "USB 2.0 | 全速",
  },
  {
    id: 5,
    name: "AMS1117",
    description: "低压差线性稳压器，输出电流1A",
    category: "电源管理",
    image: "/chip-5.jpg",
    specs: "1A | 1.2V-5V",
  },
  {
    id: 6,
    name: "ESP32",
    description: "WiFi+蓝牙双模芯片，物联网首选",
    category: "ARM芯片",
    image: "/chip-6.jpg",
    specs: "240MHz | 双核",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProducts =
    activeCategory === "全部"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
      id="products"
      ref={sectionRef}
      className="w-full py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            产品中心
          </h2>
          <p className="text-lg text-slate-500">Product Center</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-48 bg-slate-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="text-xs text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full mb-4">
                  {product.specs}
                </div>

                {/* Action */}
                <button className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                  了解详情
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            查看全部产品
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
