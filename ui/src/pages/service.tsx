import { motion } from "framer-motion";
import ContactSection from "@/components/contactsection";
import { Link } from "react-router-dom";
import { Layers, Box, Sparkles, MousePointerClick, LayoutDashboard, BarChart } from "lucide-react"; // Sparklesなどを追加

// アニメーション効果を定義
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay },
});


export default function ServicePage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="h-72 w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
        <div className="absolute inset-0 bg-black/30" />
        <motion.h1 {...fadeIn()} className="text-5xl font-bold text-white relative z-10 drop-shadow-md">
          Service
        </motion.h1>
      </div>

      {/* Main Content Section */}
      <section className="px-6 py-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div {...fadeIn(0.2)} className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">事業内容</h2>
              <p className="text-gray-600">営業と顧客対応のDXを、コンサルティングからプロダクト導入まで一貫して支援します。</p>
            </motion.div>
            
            <div className="space-y-20">
              {/* ↓↓↓ここからが修正箇所です↓↓↓ */}
              {/* AIソリューション事業：プロダクト事業とレイアウトを統一 */}
              <motion.div {...fadeIn(0.3)}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                    <Layers size={32} className="text-indigo-500" />
                    AIプロダクト事業：メール自動生成・送信AI
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                  営業担当者が定めた戦略に基づき、AIがターゲット企業への初期アプローチを代行します。新規開拓で最も時間のかかるリサーチ後の単純作業からチームを解放し、本来注力すべき、顧客との対話にリソースを集中できる環境を実現します
                  </p>
                </div>
                <div className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        Icon: Sparkles,
                        title: "AIによる自動リサーチ & パーソナライズ",
                        desc: "ターゲット企業のウェブサイトをAIが読み込み、事業内容や最近のニュースに基づいた、心に響くパーソナルなメッセージを自動で生成します。"
                      },
                      {
                        Icon: MousePointerClick,
                        title: "問い合わせフォームの自動検索 & 送信",
                        desc: "サイト構造をAIが解析し、最適な問い合わせフォームを自動で特定。手作業によるコピペや入力ミスから、あなたを完全に解放します。"
                      },
                      {
                        Icon: LayoutDashboard,
                        title: "シンプルな進捗管理ダッシュボード",
                        desc: "どこの企業に、いつ、どんな内容を送信したか、その反応はどうだったかを一目で確認。営業活動全体を可視化します。"
                      },
                      {
                        Icon: BarChart,
                        title: "効果測定と改善サイクル支援",
                        desc: "メールの開封率やクリック率を計測（※）し、どんなメッセージが響くのかをデータで分析。次のアプローチの成功率を高めます。"
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={feature.title}
                        {...fadeIn(0.4 + i * 0.1)}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-left"
                      >
                        <div className="mb-4">
                          <feature.Icon className="h-10 w-10 text-indigo-500" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    ※開封率・クリック率の計測は、メール形式でのアプローチが可能な場合に限ります。
                  </p>
                </div>
                <div className="text-center mt-8">
                  <Link to="/price" className="text-indigo-600 font-semibold hover:underline">
                    メールAIの料金プランを見る →
                  </Link>
                </div>
              </motion.div>

              {/* AIソリューション事業 */}
              <motion.div {...fadeIn(0.4)}>
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                    <Box size={32} className="text-purple-500" />
                    AIソリューション事業：オーダーメイド開発
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    標準プロダクトでは解決できない、お客様固有の複雑な課題に対し、私たちのAI技術を応用したオーダーメイドの解決策を開発・提供します。業務効率化、コスト削減など、あらゆるご相談に対応可能です。
                  </p>
                </div>
                {/* ここに「通話AI」を実績として掲載 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">導入事例：テレアポ録音・評価AI</h4>
                  <p className="text-gray-600 text-sm">
                    課題： 営業担当者の電話応対後の内容要約や、次取るべき行動が属人化していた<br/>
                    解決策：通話内容をAIが自動で要約・テキスト化し、ラベリングする専用システムを開発。<br/>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-12">
        <ContactSection />
      </div>
    </main>
  );
}



