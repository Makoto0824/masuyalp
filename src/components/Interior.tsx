export default function Interior() {
  return (
    <section id="interior" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">店内紹介</h2>
          <p className="marugame-section-subtitle">温かみのある空間でくつろぎのひとときを</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">店内の雰囲気</h3>
              <p className="text-gray-600 leading-relaxed">
                大阪の下町の居酒屋をイメージした温かみのある店内。カウンター席では職人の技を間近で見ることができ、テーブル席ではゆったりとお食事をお楽しみいただけます。
              </p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">席数</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• カウンター席：8席</li>
                <li>• テーブル席：4席（4名様用）</li>
                <li>• 合計：約20名様まで</li>
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
      </div>
    </section>
  );
} 