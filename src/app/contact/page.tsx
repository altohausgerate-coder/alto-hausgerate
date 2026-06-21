import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Telefon", value: "+994 50 000 00 00", href: "tel:+994500000000" },
  { icon: Mail, label: "E-poçt", value: "info@altohausgerate.com", href: "mailto:info@altohausgerate.com" },
  { icon: MapPin, label: "Ünvan", value: "Bakı, Azərbaycan", href: "#" },
  { icon: Clock, label: "İş saatları", value: "B.e – Şənbə: 09:00 – 19:00", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-3">
          <Phone size={14} /> Əlaqə
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Bizimlə əlaqə</h1>
        <p className="mt-2 text-zinc-500">Sualınız var? Bizə yazın, ən qısa zamanda cavablandıraq.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="flex gap-4 p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-pink-200 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600">
              <Icon size={18} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 mb-0.5">{label}</div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">{value}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact form */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6">
        <h2 className="font-semibold text-zinc-900 dark:text-white mb-4">Mesaj göndər</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Adınız"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-pink-400 transition-colors"
          />
          <input
            type="email"
            placeholder="E-poçt"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-pink-400 transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Mesajınız..."
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-pink-400 transition-colors resize-none"
          />
          <button className="w-full py-2.5 rounded-full bg-pink-600 text-white font-semibold text-sm hover:bg-pink-700 transition-colors">
            Göndər
          </button>
        </div>
      </div>
    </div>
  );
}
