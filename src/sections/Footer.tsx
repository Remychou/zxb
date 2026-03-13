import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const quickLinks = [
  { name: "首页", href: "#home" },
  { name: "关于我们", href: "#about" },
  { name: "产品中心", href: "#products" },
  { name: "新闻中心", href: "#news" },
  { name: "联系我们", href: "#contact" },
];

const productLinks = [
  { name: "单片机系列", href: "#" },
  { name: "接口芯片", href: "#" },
  { name: "电源管理", href: "#" },
  { name: "开发工具", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">芯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">芯创科技</h3>
                <p className="text-slate-400 text-sm">XINCHUANG TECH</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              专注于单片机方案开发和芯片销售，为客户提供从芯片选型、方案设计到量产支持的一站式服务。
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">快捷导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">产品中心</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  XX省XX市XX区XX路XX号
                  <br />
                  科技大厦A座1001室
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:400-XXX-XXXX"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  400-XXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:contact@example.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © 2024 芯创科技 版权所有 | ICP备案号: 京ICP备XXXXXXXX号
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-white text-sm transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-white text-sm transition-colors"
              >
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
