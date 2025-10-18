import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

// カテゴリーの定義
const CATEGORIES = [
  "営業の自動化・効率化（営業DX）",
  "顧客対応の自動化・チャットボット導入（顧客対応DX）",
  "DXに関する相談・構想段階のご相談（DX相談）",
  "その他",
];

// アニメーション効果を定義
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay },
});

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", company: "", position: "", phone: "", email: "", categories: [] as string[], otherCategory: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // ↓↓↓ ここを修正しました ↓↓↓
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // [name] を [e.target.name] に修正
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // ↑↑↑ ここまでが修正箇所です ↑↑↑

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({ ...prev, categories: checked ? [...prev.categories, value] : prev.categories.filter(v => v !== value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("送信データ:", formData);
    setSubmitted(true);
  };

  return (
    <main
      style={{
        backgroundImage: "url('/images/header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <div className="h-72 w-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/30" />
        <motion.h1 {...fadeIn()} className="text-5xl font-bold text-white relative z-10 drop-shadow-md">
          Contact
        </motion.h1>
      </div>

      <section className="px-6 py-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeIn(0.2)} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
              <p className="text-gray-600">AI導入に関するご相談、お見積もりのご依頼など、お気軽にお問い合わせください。</p>
            </motion.div>
            
            <motion.div {...fadeIn(0.3)} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <Check size={60} className="mx-auto text-green-500 bg-green-100 rounded-full p-3 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">お問い合わせありがとうございます</h3>
                  <p className="text-gray-600">確認後、担当者より3営業日以内にご連絡いたします。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* 必須項目 */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">お名前<span className="text-red-500 ml-1">*</span></label>
                      <input type="text" id="name" name="name" required onChange={handleChange} placeholder="例）山田 太郎" className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">メールアドレス<span className="text-red-500 ml-1">*</span></label>
                      <input type="email" id="email" name="email" required onChange={handleChange} placeholder="例）info@example.com" className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                    </div>
                    {/* 任意項目 */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">会社名</label>
                      <input type="text" id="company" name="company" onChange={handleChange} placeholder="例）株式会社NeuroLedger" className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                    </div>
                     <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">電話番号</label>
                      <input type="tel" id="phone" name="phone" onChange={handleChange} placeholder="例）090-1234-5678" className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">お問い合わせ種別<span className="text-red-500 ml-1">*</span></label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {CATEGORIES.map(cat => (
                        <label key={cat} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 border border-gray-200 transition cursor-pointer">
                          <input type="checkbox" value={cat} checked={formData.categories.includes(cat)} onChange={handleCheckbox} className="h-5 w-5 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"/>
                          <span className="text-sm text-gray-800">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">お問い合わせ内容詳細</label>
                    <textarea id="message" name="message" rows={6} onChange={handleChange} placeholder="ご相談内容や、導入を検討されている背景などをご自由にご記入ください。" className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button type="submit" className="group inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-lg">
                      <span>送信する</span>
                      <Send size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

