export default function Interior() {
  return (
    <section id="interior" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">店内紹介</h2>
          <p className="marugame-section-subtitle">温かみのある空間でくつろぎのひとときを</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">カウンター席</h3>
              <p className="text-gray-600 leading-relaxed">オープンキッチンを目の前に、職人の技を間近で見ながらお食事いただけます。一人でも気軽に立ち寄れる空間です。</p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">テーブル席</h3>
              <p className="text-gray-600 leading-relaxed">4名様までゆったりとお座りいただけるテーブル席。家族連れやお友達同士でのご来店に最適です。</p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">雰囲気</h3>
              <p className="text-gray-600 leading-relaxed">温かみのある木目調の内装と、柔らかな照明で落ち着いた雰囲気。大阪の下町の居酒屋のような親しみやすさを演出しています。</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">席数</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• カウンター席：8席</li>
                <li>• テーブル席：4席（4名様用）</li>
                <li>• 合計：約20名様まで</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">営業時間</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 火〜土：17:00〜22:00</li>
                <li>• 定休日：日曜日・月曜日</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">ご利用可能</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• クレジットカード決済</li>
                <li>• 電子マネー決済</li>
                <li>• 禁煙席あり</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="marugame-card p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">ご予約について</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              混雑時はお待ちいただく場合がございます。ご予約の際はお電話にてお気軽にお問い合わせください。
            </p>
            <a
              href="#contact"
              className="marugame-button text-lg px-8 py-4"
            >
              ご予約・お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 