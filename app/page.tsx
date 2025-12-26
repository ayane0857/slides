import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const slides = [
    {
      title: "支払い履歴を閲覧できるAPIを作ってみた",
      description: "UniProject 夏のLT大会 2025",
      href: "/create-open-balance.pdf",
      image: "/1759661892013-043e3006-43a6-41ce-b19a-f4a5c49d7f78_1.png", // サムネイル画像のパス
      date: "2025.10.05",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F7]">
      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-12">
        <section className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              スライド一覧
            </h1>
            <p className="text-gray-600 text-lg">
              これまでに作成したプレゼンテーションスライド
            </p>
          </div>

          {/* スライドグリッド */}
          {slides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.map((slide, index) => (
                <Link key={index} href={slide.href} className="group">
                  <Card className="overflow-hidden border-2 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full">
                    {/* サムネイル画像 */}
                    <div className="relative w-full aspect-video">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        quality={75}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* カード内容 */}
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
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <p className="text-gray-500 text-lg">スライドはまだありません</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
