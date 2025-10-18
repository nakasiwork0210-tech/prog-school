import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";

// アニメーション効果を定義
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay },
});

// データ構造は前回提案のものをそのまま使用
// price.tsx の冒頭
const services = [
  {
    service: "メール自動生成・送信AI",
    plans: [
      { name: "ライトプラン", desc: "テンプレートから営業メールを自動作成・一括送信可能。初期導入や小規模対応に最適。", price: "20,000円", features: ["テンプレートからの自動生成", "一括送信機能", "開封・クリック計測"] },
      { name: "スタンダードプラン", desc: "顧客属性ごとに文面を自動調整。予約送信やステップ配信に対応し、継続営業に効果的。", price: "40,000円", features: ["ライトプランの全機能", "顧客属性別カスタマイズ", "ステップメール配信"], recommended: true },
      { name: "プレミアムプラン", desc: "AIが反応率や行動履歴を分析し、自動で文面最適化。ABテストや配信最適化も全自動で実施。", price: "50,000円〜", features: ["スタンダードプランの全機能", "AIによる文面最適化", "自動ABテスト機能"] },
    ],
  },
  {
    service: "AIソリューション事業",
    plans: [
      { name: "オーダーメイド開発", desc: "業務ヒアリングから要件定義、設計・開発・運用まで一貫支援。お客様の環境や課題に応じて、通話AI、チャットボットなど、最適な解決策を柔軟に構築します。", price: "個別お見積もり", features: ["業務・課題ヒアリング", "要件定義・設計", "開発・導入支援", "運用・保守サポート"], recommended: true },
    ],
  },
];

export default function PricePage() {
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
      <div className="h-72 w-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/30" />
        <motion.h1 {...fadeIn()} className="text-5xl font-bold text-white relative z-10 drop-shadow-md">
          Price
        </motion.h1>
      </div>

      {services.map(({ service, plans }, serviceIndex) => (
        <section key={service} className={`px-6 ${serviceIndex === 0 ? 'pt-24' : 'py-24'}`}>
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl py-16">
            <motion.div {...fadeIn(0.2)} className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">{service}</h2>
              
              {/* ↓↓↓ ここからが修正箇所です ↓↓↓ */}
              <div 
                className={
                  plans.length === 1
                    ? "flex justify-center" // プランが1つの場合はflexboxで中央寄せ
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // 複数の場合はグリッドレイアウト
                }
              >
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    {...fadeIn(0.4 + i * 0.1)}
                    className={`rounded-2xl p-8 flex flex-col bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                        plan.recommended ? 'border-2 border-indigo-500' : 'border border-gray-200'
                      } ${
                        plans.length === 1 ? 'w-full md:w-3/4 lg:w-1/2' : '' // プランが1つの場合は横幅を調整
                      }`
                    }
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <Star size={14} />
                        <span>一番人気</span>
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-3">{plan.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-8">{plan.desc}</p>
                      {plan.features && (
                        <ul className="space-y-3 text-gray-700">
                          {plan.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mt-10 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">月額</p>
                      <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* ↑↑↑ ここまでが修正箇所です ↑↑↑ */}

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block mt-16 bg-gray-800 text-white px-10 py-3 rounded-full hover:bg-gray-900 transition-colors font-semibold shadow-lg text-lg"
                >
                  詳細・導入のご相談はこちら
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <div className="py-12 bg-gray-900/80 backdrop-blur-lg mt-12">
        <p className="text-sm text-center text-gray-300">
          ※ 表示価格はすべて税込です。お客様の課題に応じて柔軟なカスタマイズ・お見積もりが可能です。
        </p>
      </div>
    </main>
  );
}









