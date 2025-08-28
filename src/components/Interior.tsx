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
                ステンドグラスの灯りが彩る大正ロマン風の店内で、串かつを囲み賑やかなひとときを。朱色の壁に包まれた金沢茶室風の個室では、落ち着いた時間を。華やぎと静けさ、二つの空間を楽しめるのが枡やの魅力です。
              </p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">席数</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• カウンター席：6席</li>
                <li>• テーブル席：3席（4名様用）</li>
                <li>• 個室：1席（4~5名様用）</li>
                <li>• 合計：約22名様まで</li>
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