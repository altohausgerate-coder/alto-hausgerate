import { Info, Truck, ShieldCheck, RotateCcw, Star } from "lucide-react";

const stats = [
  { num: "500+", label: "Məhsul" },
  { num: "5", label: "Brend" },
  { num: "3+", label: "İl Təcrübə" },
  { num: "4.9★", label: "Reytinq" },
];

const features = [
  { icon: Truck, title: "Sürətli çatdırılma", desc: "Bakı daxilindən 24 saat, rayonlara 3 iş günü ərzində" },
  { icon: ShieldCheck, title: "Rəsmi zəmanət", desc: "Bütün məhsullar istehsalçının rəsmi zəmanəti ilə satılır" },
  { icon: RotateCcw, title: "Asan qaytarış", desc: "14 gün ərzində səbəbsiz qaytarma və dəyişdirmə imkanı" },
  { icon: Star, title: "Premium keyfiyyət", desc: "Yalnız dünya standartlarına uyğun brendlər" },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-3">
          <Info size={14} /> Haqqımızda
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Alto Hausgerate</h1>
        <p className="mt-4 text-zinc-500 leading-relaxed max-w-2xl">
          Azərbaycanın aparıcı məişət texnikası distribütoru olaraq biz keyfiyyətli brendləri sizə çatdırırıq.
          BergHOFF, Fakir, Singer, IYO və Gastro brendlərinin rəsmi nümayəndəsiyik.
          Missiyamız — hər bir evə müasir texnologiyanı gətirmək, həyat keyfiyyətini yüksəltmək
          və müştərilərimizə ən sərfəli qiymətləri təmin etməkdir.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {stats.map((s) => (
          <div key={s.label} className="bg-pink-50 dark:bg-pink-950/20 rounded-2xl p-5 text-center">
            <div className="text-2xl font-extrabold text-pink-600">{s.num}</div>
            <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-5">Niyə Alto?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-pink-200 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">{title}</h3>
              <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
