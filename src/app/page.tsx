import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Tag, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-5">
            Rəsmi Distribütor
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            Eviniz üçün <br />
            <span className="text-pink-600">ən yaxşı texnika</span>
          </h1>
          <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
            BergHOFF · Fakir · Singer · IYO · Gastro brendlərinin rəsmi distribütoru
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pink-600 text-white font-semibold text-sm hover:bg-pink-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-pink-200 dark:shadow-pink-900/30"
            >
              Məhsullara bax →
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-white font-semibold text-sm hover:border-pink-300 hover:-translate-y-0.5 transition-all"
            >
              Brendlər
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 bg-pink-100 dark:bg-pink-950/30 rounded-full blur-3xl" />
            <Image
              src="/img/products/670b7964fc726f0057ce4b3d719991-65153.jpg"
              alt="Fakir VKM 6018"
              width={280}
              height={280}
              className="relative z-10 object-contain w-full h-full drop-shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-4 z-20 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-2.5 shadow-lg">
              <div className="text-xs text-zinc-400">Top Satılan</div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">VKM 6018</div>
            </div>
            <div className="absolute -top-2 -left-4 z-20 bg-pink-600 text-white rounded-2xl px-4 py-2.5 shadow-lg">
              <div className="text-xs opacity-80">Qiymət</div>
              <div className="text-sm font-bold">1 150 ₼</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/products"
          className="flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-pink-200 hover:-translate-y-1 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
            <ShoppingBag size={20} />
          </div>
          <div>
            <div className="font-semibold text-zinc-900 dark:text-white text-sm">Məhsullar</div>
            <div className="text-xs text-zinc-400">500+ məhsul</div>
          </div>
        </Link>
        <Link
          href="/brands"
          className="flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-pink-200 hover:-translate-y-1 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
            <Tag size={20} />
          </div>
          <div>
            <div className="font-semibold text-zinc-900 dark:text-white text-sm">Brendlər</div>
            <div className="text-xs text-zinc-400">5 premium brend</div>
          </div>
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-pink-200 hover:-translate-y-1 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
            <Info size={20} />
          </div>
          <div>
            <div className="font-semibold text-zinc-900 dark:text-white text-sm">Haqqımızda</div>
            <div className="text-xs text-zinc-400">3+ il təcrübə</div>
          </div>
        </Link>
      </section>
    </div>
  );
}
