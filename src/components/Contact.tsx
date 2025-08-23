export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient tracking-wide">ご予約・お問い合わせ</h2>
          <p className="marugame-section-subtitle">お気軽にお電話でご予約ください</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="marugame-card p-8 marugame-red-card shadow-lg border border-red-100">
                <h3 className="text-xl font-medium mb-4 marugame-red-accent tracking-wide">お電話でのご予約</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  営業時間内にお電話ください。<br />
                  ご予約・お問い合わせ承ります。
                </p>
                <div className="text-center">
                  <p className="text-3xl font-bold marugame-red-accent mb-3">0466-44-2909</p>
                  <p className="text-sm text-gray-500">営業時間：17:00〜22:00</p>
                </div>
              </div>
              
              <div className="marugame-card p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient tracking-wide">営業時間</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    火〜土：17:00〜22:00（L.O. 21:30）
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    定休日：日曜日・月曜日
                  </li>
                </ul>
              </div>
              
              <div className="marugame-card p-8 marugame-red-card shadow-lg border border-red-100">
                <h3 className="text-xl font-medium mb-4 marugame-red-accent tracking-wide">ご予約について</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    混雑時はお待ちいただく場合がございます
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    ご予約は前日までにお願いいたします
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    キャンセルの際は早めにご連絡ください
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="marugame-card p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient tracking-wide">アクセス情報</h3>
                <div className="text-gray-600 space-y-4">
                  <div>
                    <p className="font-medium text-gray-700 mb-1">住所：</p>
                    <p>〒252-0804<br />神奈川県藤沢市湘南台2-17-14</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">最寄り駅：</p>
                    <p>湘南台駅 徒歩5分</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">駐車場：</p>
                    <p>近隣のコインパーキングをご利用ください</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#access"
                    className="marugame-button text-lg px-8 py-3 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    地図を見る
                  </a>
                </div>
              </div>
              
              <div className="marugame-card p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-4 marugame-text-gradient tracking-wide">お店の特徴</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    大阪仕込みの本格串カツ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    カウンター席で職人の技を間近で
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    アットホームな雰囲気
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    お酒との相性抜群
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                    地元の方に愛される隠れた名店
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <div className="marugame-card p-12 max-w-4xl mx-auto relative shadow-xl border border-gray-100">
            {/* 赤色のアクセントライン */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b41b4b] to-[#c42d5a]"></div>
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient tracking-wide">初回ご来店の方へ</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              初回ご来店の際は、お電話でのご予約をお勧めいたします。<br />
              混雑時はお待ちいただく場合がございますので、ご了承ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 