export default function Access() {
  return (
    <section id="access" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">アクセス</h2>
          <p className="marugame-section-subtitle">湘南台駅から徒歩圏内</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">住所</h3>
              <p className="text-gray-600">
                〒252-0804<br />
                神奈川県藤沢市湘南台1-1-1<br />
                （湘南台駅前ビル1階）
              </p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">アクセス方法</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 小田急江ノ島線「湘南台駅」徒歩1分</li>
                <li>• 相鉄いずみ野線「湘南台駅」徒歩1分</li>
                <li>• 横浜市営地下鉄ブルーライン「湘南台駅」徒歩1分</li>
                <li>• 駅前のロータリーからすぐ</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">営業時間</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 月〜金：17:00〜23:00（L.O. 22:30）</li>
                <li>• 土日祝：16:00〜23:00（L.O. 22:30）</li>
                <li>• 定休日：不定休</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">駐車場</h3>
              <p className="text-gray-600">
                湘南台駅前の有料駐車場をご利用ください。<br />
                お車でお越しの際は、駅前の駐車場に停めて徒歩でお越しください。
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">地図</h3>
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-60">🗺️</div>
                  <p className="text-gray-500 font-medium">地図準備中</p>
                  <p className="text-sm text-gray-400 mt-2">Google Mapsで表示予定</p>
                </div>
              </div>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">周辺情報</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 湘南台駅前ロータリー</li>
                <li>• 湘南台ショッピングセンター</li>
                <li>• 湘南台図書館</li>
                <li>• 湘南台公園</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">お電話でのお問い合わせ</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-lg">0466-XX-XXXX</span>
              </p>
              <p className="text-sm text-gray-500">
                営業時間内にお電話ください。<br />
                ご予約・お問い合わせ承ります。
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="marugame-card p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">初回ご来店の方へ</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              湘南台駅の改札を出て、ロータリー方面にお進みください。<br />
              駅前ビルの1階にございます。看板が目印です。
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