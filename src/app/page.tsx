import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-white dark:bg-zinc-950">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-4">
              Rəsmi Distribütor
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Eviniz üçün <br />
              <span className="text-pink-600">ən yaxşı texnika</span>
            </h1>
            <p className="mt-4 text-zinc-500 text-lg">
              BergHOFF · Fakir · Singer · IYO · Gastro
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Alto Hausgerate məhsullar"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </main>
  );
}
