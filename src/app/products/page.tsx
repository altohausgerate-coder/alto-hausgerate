import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "Fakir Kofe VKM 6018",
    brand: "Fakir",
    price: "1 150 ₼",
    img: "/img/products/670b7964fc726f0057ce4b3d719991-65153.jpg",
    tag: "🔥 Top Satılan",
  },
  {
    name: "IYO LED Üz Maskası",
    brand: "IYO",
    price: "799 ₼",
    img: "/img/products/led-light-face-mask.png",
    tag: "✨ Yeni",
  },
  {
    name: "BergHOFF Çaynik Orange",
    brand: "BergHOFF",
    price: "190 ₼",
    img: "/img/products/berghoff-natural-17-lt-orange_qXmPGiJ.webp",
    tag: null,
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-3">
          <ShoppingBag size={14} /> Katalog
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Məhsullar</h1>
        <p className="mt-2 text-zinc-500">Geniş çeşid, ən sərfəli qiymətlər</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="group relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {p.tag && (
              <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-pink-600 text-white text-xs font-bold">
                {p.tag}
              </span>
            )}
            <div className="h-52 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center p-6">
              <Image src={p.img} alt={p.name} width={180} height={180} className="object-contain h-full w-auto" />
            </div>
            <div className="p-4">
              <p className="text-xs text-pink-600 font-semibold mb-1">{p.brand}</p>
              <h3 className="font-semibold text-zinc-900 dark:text-white text-sm leading-snug">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-zinc-900 dark:text-white">{p.price}</span>
                <button className="px-4 py-1.5 rounded-full bg-pink-600 text-white text-xs font-semibold hover:bg-pink-700 transition-colors">
                  Səbətə əlavə et
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
