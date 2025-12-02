import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<main className="bg-purple-100">
  <section className="grid grid-cols-2 h-[50vh]">
    <div className="flex flex-col gap-4 text-black items-center justify-center">
     <p className="text-3xl font-bold">
       The best URL shortener for your business.</p>
     <p className="px-16 text-xs text-center">
      We are the most starightforward URL shortener on the market. Most of the url shorteners will try to upsell you on features you don't need. We focus on providing a simple, reliable service that just works.
     </p>
                     <div className="flex gap-3">
                    <Link href="/shorten"><button className='bg-purple-500 rounded-lg font-bold text-white shadow-lg p-3 py-1'>Try Now</button></Link>
                    <Link href="github"><button className='bg-purple-500 rounded-lg font-bold text-white shadow-lg p-3 py-1'>Github</button></Link>
                </div>
    </div>
    <div className="flex justify-start relative">
<Image className="mix-blend-darken" src="/craft.jpg" alt="Vector Background" fill={true} />
    </div>

    </section>
</main>
  );
}
