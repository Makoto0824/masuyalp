import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-800 to-red-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* 背景の装飾要素 - より控えめに */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-700 to-red-800 rounded-full opacity-15 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-700 to-red-800 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-4 px-8">
        <div className="mb-16">
          <Image 
            src="/images/ロゴ横透過.png" 
            alt="串かつ枡や" 
            width={300}
            height={100}
            className="mx-auto max-w-[160px] md:max-w-[200px] lg:max-w-[240px] drop-shadow-lg"
            priority
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-16 text-red-100 font-light leading-relaxed tracking-wide">
          口も心も串かつ日和
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#menu"
            className="text-white hover:text-red-100 transition-all duration-300 text-lg font-medium border-2 border-white hover:bg-white hover:text-red-800 px-10 py-4 rounded-full transform hover:-translate-y-1"
          >
            メニューを見る
          </a>
          <a
            href="#contact"
            className="text-white hover:text-red-100 transition-all duration-300 text-lg font-medium border-2 border-white hover:bg-white hover:text-red-800 px-10 py-4 rounded-full transform hover:-translate-y-1"
          >
            ご予約
          </a>
        </div>
      </div>
    </section>
  );
} 