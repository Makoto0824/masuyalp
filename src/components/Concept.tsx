export default function Concept() {
  return (
    <section id="concept" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">店のこだわり</h2>
          <p className="marugame-section-subtitle">大阪の味を湘南台で</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="marugame-card p-8 marugame-red-card">
              <h3 className="text-xl font-medium mb-4 marugame-red-accent">本格串カツ</h3>
              <p className="text-gray-600 leading-relaxed">創業以来受け継がれる秘伝の衣と、厳選された新鮮な食材。サクッとした食感とジューシーな中身の絶妙なバランスをお楽しみください。</p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">大阪の味</h3>
              <p className="text-gray-600 leading-relaxed">大阪の老舗から学んだ本格的な串カツの技術と、伝統的な調理法を忠実に再現。本場の味をそのままお届けします。</p>
            </div>
            
            <div className="marugame-card p-8 marugame-red-card">
              <h3 className="text-xl font-medium mb-4 marugame-red-accent">地元密着</h3>
              <p className="text-gray-600 leading-relaxed">湘南台の皆様に愛される店を目指し、親しみやすい価格と温かいおもてなしで、いつでも気軽に立ち寄れる居酒屋を心がけています。</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="marugame-card p-10 relative">
              {/* 赤色のアクセント要素 */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">創業の想い</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                「湘南台で本格的な串カツを食べたい」というお客様の声から始まった枡や。
                大阪の味をそのまま再現し、地元の方々に愛される店を目指して日々精進しています。
                家族連れから一人飲みまで、誰でも気軽に立ち寄れる温かい居酒屋として、
                これからも湘南台の皆様に寄り添い続けます。
              </p>
              {/* 赤色の装飾要素 */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                <div className="w-1 h-1 bg-red-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 