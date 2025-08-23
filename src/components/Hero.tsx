import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-800 to-red-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* 背景の装飾要素 - 新しい赤色ベース */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-700 to-red-800 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-700 to-red-800 rounded-full opacity-20 blur-3xl"></div>
      
      {/* 白色のアクセントライン */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-4 px-8">
        <div className="mb-8">
          <Image 
            src="/images/ロゴ横透過.png" 
            alt="串かつ枡や" 
            width={300}
            height={100}
            className="mx-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
            priority
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-red-100 font-light leading-relaxed">
          口も心も串かつ日和
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#menu"
            className="bg-white text-red-800 hover:bg-red-50 transition-colors duration-300 text-lg px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            メニューを見る
          </a>
          <a
            href="#contact"
            className="text-white hover:text-red-100 transition-colors duration-300 text-lg font-medium border-2 border-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-full"
          >
            ご予約
          </a>
        </div>
        
        {/* 白色のアクセント要素 */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-red-100 rounded-full"></div>
          <div className="w-2 h-2 bg-red-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
} 