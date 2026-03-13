import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "公司成功通过ISO9001质量管理体系认证",
    date: "2024-01-15",
    summary:
      "经过严格的审核评估，公司顺利通过ISO9001质量管理体系认证，标志着公司质量管理水平迈上新台阶。",
    image: "/about-us.jpg",
    category: "公司新闻",
  },
  {
    id: 2,
    title: "与知名芯片厂商达成战略合作协议",
    date: "2024-01-10",
    summary:
      "公司与国内外多家知名芯片厂商签署战略合作协议，将进一步扩大产品线，为客户提供更多优质选择。",
    image: "/chip-1.jpg",
    category: "合作动态",
  },
  {
    id: 3,
    title: "新一代智能控制方案正式发布",
    date: "2024-01-05",
    summary:
      "经过团队不懈努力，公司新一代智能控制方案正式发布，性能提升30%，功耗降低20%。",
    image: "/chip-3.jpg",
    category: "产品发布",
  },
];

export default function News() {
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
    <section id="news" ref={sectionRef} className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            公司资讯
          </h2>
          <p className="text-lg text-slate-500">Company News</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <article
              key={news.id}
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                  {news.summary}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  阅读更多
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
          >
            查看更多资讯
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
