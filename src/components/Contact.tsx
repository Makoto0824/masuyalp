export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">ご予約・お問い合わせ</h2>
          <p className="marugame-section-subtitle">お気軽にお電話またはお問い合わせください</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="marugame-card p-8 marugame-red-card">
              <h3 className="text-xl font-medium mb-4 marugame-red-accent">お電話でのご予約</h3>
              <p className="text-gray-600 mb-4">
                営業時間内にお電話ください。<br />
                ご予約・お問い合わせ承ります。
              </p>
              <div className="text-center">
                <p className="text-2xl font-medium marugame-red-accent mb-2">0466-XX-XXXX</p>
                <p className="text-sm text-gray-500">営業時間：17:00〜23:00（月〜金）</p>
              </div>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">営業時間</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 月〜金：17:00〜23:00（L.O. 22:30）</li>
                <li>• 土日祝：16:00〜23:00（L.O. 22:30）</li>
                <li>• 定休日：不定休</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8 marugame-red-card">
              <h3 className="text-xl font-medium mb-4 marugame-red-accent">ご予約について</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 混雑時はお待ちいただく場合がございます</li>
                <li>• ご予約は前日までにお願いいたします</li>
                <li>• キャンセルの際は早めにご連絡ください</li>
                <li>• お子様連れ歓迎です</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">お問い合わせフォーム</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    お電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                    placeholder="090-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望日時
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    ご来店人数
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">選択してください</option>
                    <option value="1">1名様</option>
                    <option value="2">2名様</option>
                    <option value="3">3名様</option>
                    <option value="4">4名様</option>
                    <option value="5+">5名様以上</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ご要望・お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors duration-300"
                    placeholder="ご要望やお問い合わせ内容をご記入ください"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full marugame-button text-lg py-4"
                >
                  送信する
                </button>
              </form>
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
                href="tel:0466-XX-XXXX"
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