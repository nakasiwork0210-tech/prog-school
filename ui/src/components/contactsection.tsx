import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight ,Mail, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <footer className="text-gray-400 text-sm text-center">
      <section
        className="relative overflow-hidden px-6 py-24"
        style={{
          backgroundImage: "url('/images/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* 見出し・リード */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 tracking-wide">
              まずは無料相談から
            </h2>
            <div className="mx-auto mt-3 h-1.5 w-28 bg-sky-500 rounded-full" />
            <p className="mt-6 text-slate-700 text-base md:text-lg">
              学習の目標や現在の状況をヒアリングし、最短でアプリ公開までのルートをご提案します。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-8 py-3 hover:bg-blue-700 transition-colors"
              aria-label="無料相談を申し込む"
            >
              無料相談を申し込む
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 3ステップ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: <Mail className="size-6 text-sky-600" />,
                title: "STEP 1：お申し込み",
                desc: "フォームからご連絡。現在のご状況・目標・希望スケジュールをお書きください。",
              },
              {
                icon: <Calendar className="size-6 text-sky-600" />,
                title: "STEP 2：無料相談（30分）",
                desc: "オンラインでヒアリングし、Python×TypeScriptでの最短ルートをご提案します。",
              },
              {
                icon: <ArrowRight className="size-6 text-sky-600" />,
                title: "STEP 3：学習開始",
                desc: "あなた専用カリキュラムで、企画→実装→公開を最短サイクルで伴走します。",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-md ring-1 ring-slate-900/5 p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <h3 className="text-slate-900 font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-slate-700 leading-7">{desc}</p>
              </div>
            ))}
          </motion.div>

          {/* 注意書き/安心材料 */}
          <p className="mt-10 text-slate-500 text-xs">
            ※ 無料相談のみのご利用でも構いません。しつこい営業は行いません。入会金は0円です。
          </p>
        </div>
      </section>
    </footer>
  );
}
