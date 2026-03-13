import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-slate-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm text-slate-300 hidden sm:block">
          专注于单片机方案开发 · 芯片销售贸易
        </p>
        <div className="flex items-center gap-6 ml-auto">
          <a
            href="tel:400-XXX-XXXX"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>400-XXX-XXXX</span>
          </a>
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">contact@example.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
