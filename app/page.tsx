import Image from "next/image";
import Footer from "@/components/ui/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Home() {
  const slides = [
    {
      title: "新しい技術をいっぱい触っておもったこと",
      description: "UniProject 2025 LT大会 冬の陣",
      href: "many-new-technology.pdf",
      image: "/4d6fda81-b932-4e5b-f10a-74f927d36120.png",
      date: "2025.12.27",
    },
    {
      title: "支払い履歴を閲覧できるAPIを作ってみた",
      description: "UniProject 2025 LT大会 夏の陣",
      href: "create-open-balance.pdf",
      image: "/71cc71b3-e8fb-e618-b36f-567f22087430.png",
      date: "2025.10.05",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F7]">
      <main className="flex-1 px-4 py-12">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              スライド一覧
            </h1>
            <p className="text-gray-600 text-lg">
              これまでに作成したプレゼンテーションスライド
            </p>
          </div>

          {slides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={`http://ayane0857.m1.xrea.com/lt/${slide.href}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        quality={75}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                        {slide.title}
                      </CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span>{slide.description}</span>
                        <span className="text-xs">{slide.date}</span>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <p className="text-gray-500 text-lg">スライドはまだありません</p>
            </div>
          )}
        </section>
        <div className="max-w-6xl mx-auto mb-8 mt-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50/80 border border-amber-200 text-amber-900 px-4 py-3 rounded-lg flex items-start gap-3 shadow-sm backdrop-blur-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <h3 className="font-semibold text-amber-800">リンク先に関するご注意</h3>
              <p className="text-amber-700/80 mt-1">
                スライドデータは外部サーバー（Xrea）を利用しているため、リンク先は暗号化されていないHTTP接続となります。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
