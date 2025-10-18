import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">NeuroLedger</h3>
            <p className="text-sm">AIの力で、営業・顧客対応を自動化。</p>
            <p className="text-xs">© {new Date().getFullYear()} NeuroLedger. All rights reserved.</p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li><Link to="/service" className="hover:text-white transition-colors">Service</Link></li>
              <li><Link to="/price" className="hover:text-white transition-colors">Price</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li>東京都文京区弥生2-7-11-303</li>
              <li>📞 070-9100-6625</li>
              <li>✉️ info@neuroledger.jp</li>
            </ul>
          </div>

        </div>
        <div className="bg-black text-center py-4">
            <p className="text-xs text-gray-500">
              Powered by AI & Innovation
            </p>
        </div>
      </footer>
    );
  }
  