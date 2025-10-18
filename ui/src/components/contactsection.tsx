import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactSection() {
    return (
        <footer className=" text-gray-400 text-sm text-center">
          <section className="bg-white text-gray-800 px-6 py-24"
            style={{
              backgroundImage: "url('/images/header.png')",
              backgroundColor: "rgba(255,255,255,0.8)",  // 白で透明感
              backgroundBlendMode: "lighten",            // 明るく重ねる
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                ご相談やご質問は、お電話・Webフォーム・メールにて承っております。お気軽にお問い合わせください。
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "お電話でのお問い合わせ",
                  detail: "070-9100-6625（平日 10:00〜18:00）",
                  image: "images/icons/phone.png",
                  link: "tel:07091006625",
                },
                {
                  title: "Webフォーム",
                  detail: "こちらから24時間受付中",
                  image: "images/icons/form.jpeg",
                  link: "/contact",
                },
                {
                  title: "メールでのお問い合わせ",
                  detail: "info@neuroledger.jp",
                  image: "images/icons/mail.png",
                  link: "mailto:info@neuroledger.jp",
                },
              ].map(({ title, detail, image, link }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-3">
                    <img src={image} alt={title} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  {link ? (
                    link.startsWith("mailto:") ? (
                      <a
                        href={link}
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {detail}
                      </a>
                    ) : (
                      <Link
                        to={link}
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {detail}
                      </Link>
                    )
                  ) : (
                    <p className="text-gray-600 text-sm">{detail}</p>
                  )}
                </motion.div>
              ))}

            </div>
          </section>
        </footer>
    );
}