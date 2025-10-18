import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactSection from "@/components/contactsection";
import { ArrowRight } from 'lucide-react';

// Animation variants for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};


export default function Home() {
  return (
    <main className="w-full text-white font-sans">
      {/* Hero Section */}
      <section 
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/header.png')"}}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
              面倒な新規開拓を、AIに任せよう
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
          >
            リサーチとパーソナライズをAIが自動化。<br />あなたのチームを「未来の顧客との対話」だけに集中させる営業支援AI。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
              <Link
                to="/contact"
                // classNameを下のボタンと同じスタイルに変更しました
                className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                導入を相談する <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20}/>
              </Link>

              <Link
                to="/service"
                className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
              >
                プロダクトを見る
              </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="bg-gray-900 text-gray-300 px-6 py-24">
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technology</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            私たちが活用する最新のAIテクノロジーで、精度と創造性を両立。
          </p>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "ローカルLLM活用", desc: "社内ネットワーク完結のローカルAIで、セキュリティと応答速度を両立。" },
            { title: "自社サーバー運用で低コスト", desc: "クラウド利用料不要。高性能かつ費用を抑えたAI導入を実現。" },
            { title: "柔軟なカスタマイズ性", desc: "業務フローやUIを用途に応じて自在に変更可能。業種ごとの最適解を提供。" },
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300 shadow-lg"
            >
              <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Service Section */}
      <section className="bg-black text-white px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Service</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            営業とカスタマーサポートに特化した、NeuroLedgerのAIソリューション。
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {[
              { title: "パーソナライズの自動化", desc: "企業のウェブサイトをAIが読み込み、一社一社に合わせた最適な文面を自動で生成します。" },
              { title: "アプローチの完全自動化", desc: "リストアップから問い合わせフォームへの入力・送信まで、人間が介在することなくAIが実行します。" },
              { title: "高価値な業務への集中", desc: "営業担当者を退屈な単純作業から解放し、見込み客との商談や関係構築に集中させます。" },
            ].map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-400 transition-colors duration-300 shadow-lg"
            >
              <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <ContactSection />
    </main>
  );
}