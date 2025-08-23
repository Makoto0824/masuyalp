export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">ご予約・お問い合わせ</h2>
          <p className="marugame-section-subtitle">お気軽にお電話でご予約ください</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="marugame-card p-8 marugame-red-card">
                <h3 className="text-xl font-medium mb-4 marugame-red-accent">お電話でのご予約</h3>
                <p className="text-gray-600 mb-4">
                  営業時間内にお電話ください。<br />
                  ご予約・お問い合わせ承ります。
                </p>
                <div className="text-center">
                  <p className="text-2xl font-medium marugame-red-accent mb-2">0466-44-2909</p>
                  <p className="text-sm text-gray-500">営業時間：17:00〜22:00</p>
                </div>
              </div>
              
              <div className="marugame-card p-8">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient">営業時間</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 火〜土：17:00〜22:00（L.O. 21:30）</li>
                  <li>• 定休日：日曜日・月曜日</li>
                </ul>
              </div>
              
              <div className="marugame-card p-8 marugame-red-card">
                <h3 className="text-xl font-medium mb-4 marugame-red-accent">ご予約について</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 混雑時はお待ちいただく場合がございます</li>
                  <li>• ご予約は前日までにお願いいたします</li>
                  <li>• キャンセルの際は早めにご連絡ください</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="marugame-card p-8">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient">アクセス情報</h3>
                <div className="text-gray-600 space-y-4">
                  <p><strong>住所：</strong>〒252-0804<br />神奈川県藤沢市湘南台2-17-14</p>
                  <p><strong>最寄り駅：</strong>湘南台駅 徒歩5分</p>
                  <p><strong>駐車場：</strong>近隣のコインパーキングをご利用ください</p>
                </div>
                <div className="mt-6">
                  <a
                    href="#access"
                    className="marugame-button text-lg px-6 py-3 inline-block"
                  >
                    地図を見る
                  </a>
                </div>
              </div>
              
              <div className="marugame-card p-8">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient">お店の特徴</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 大阪仕込みの本格串カツ</li>
                  <li>• カウンター席で職人の技を間近で</li>
                  <li>• アットホームな雰囲気</li>
                  <li>• お酒との相性抜群</li>
                  <li>• 地元の方に愛される隠れた名店</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="marugame-card p-10 max-w-3xl mx-auto relative">
            {/* 赤色のアクセントライン */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">初回ご来店の方へ</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              初回ご来店の際は、お電話でのご予約をお勧めいたします。<br />
              混雑時はお待ちいただく場合がございますので、ご了承ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0466-44-2909"
                className="marugame-button text-lg px-8 py-4"
              >
                お電話でご予約
              </a>
              <a
                href="#access"
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-lg font-medium border-b-2 border-transparent hover:border-red-600 pb-1"
              >
                アクセスを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 