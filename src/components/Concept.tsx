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
              <h3 className="text-xl font-medium mb-4 marugame-red-accent">本格串かつ</h3>
              <p className="text-gray-600 leading-relaxed">創業以来受け継がれる秘伝のソースと衣。厳選された新鮮な食材。サクッとした食感とジューシーな中身の絶妙なバランスをお楽しみください。</p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">地元密着</h3>
              <p className="text-gray-600 leading-relaxed">湘南台の皆様に愛される店を目指し、親しみやすい価格と温かいおもてなしで、いつでも気軽に立ち寄れる串かつ居酒屋を心がけています。</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="marugame-card p-10 relative">
              {/* 赤色のアクセント要素 */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">創業の想い</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                2008年、関西出身のご夫婦がここ湘南台で始めた「串かつ 枡や」。関東ではあまり馴染みのなかった「串かつ」に、開店当初は食べ方に戸惑うお客様も多かったとか。本場大阪の味を伝え守り続け、地元の方々に愛されてきたお店です。これからも変わらぬ大阪の串かつを、湘南台の皆さまと共に楽しみ、家族や仲間と笑顔で過ごせる場所であり続けたい。「枡や」は、これまでも、これからも。湘南台の街に寄り添い、皆さまに愛されるお店を目指して精進してまいります。
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