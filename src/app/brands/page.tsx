import { Tag } from "lucide-react";

const brands = [
  {
    name: "BergHOFF",
    country: "Belçika",
    desc: "Premium məişət texnikası və mətbəx avadanlıqları",
    color: "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20",
    accent: "text-orange-600",
  },
  {
    name: "Fakir",
    country: "Türkiyə",
    desc: "Geniş çeşidli elektrik məişət cihazları",
    color: "from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20",
    accent: "text-red-600",
  },
  {
    name: "Singer",
    country: "ABŞ",
    desc: "Tikiş maşınları və tekstil avadanlıqları",
    color: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    accent: "text-blue-600",
  },
  {
    name: "IYO",
    country: "Cənubi Koreya",
    desc: "İnnovativ gözəllik və estetik cihazlar",
    color: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    accent: "text-purple-600",
  },
  {
    name: "Gastro",
    country: "Türkiyə",
    desc: "Professional mətbəx və yemək hazırlama avadanlıqları",
    color: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    accent: "text-green-600",
  },
];

export default function BrandsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-3">
          <Tag size={14} /> Brendlər
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Partnyorlarımız</h1>
        <p className="mt-2 text-zinc-500">Dünyanın aparıcı məişət texnikası istehsalçıları</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {brands.map((b) => (
          <div
            key={b.name}
            className={`bg-gradient-to-br ${b.color} border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
          >
            <div className={`text-xl font-extrabold ${b.accent} mb-1`}>{b.name}</div>
            <div className="text-xs text-zinc-400 mb-2">{b.country}</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
