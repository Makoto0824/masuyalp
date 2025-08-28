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
                神奈川県藤沢市湘南台2-17-14
              </p>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">アクセス方法</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 小田急江ノ島線「湘南台駅」徒歩5分</li>
                <li>• 相鉄いずみ野線「湘南台駅」徒歩5分</li>
                <li>• 横浜市営地下鉄ブルーライン「湘南台駅」徒歩5分</li>
                <li>• 駅前のロータリーから徒歩5分</li>
              </ul>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">駐車場</h3>
              <p className="text-gray-600">
                お車でお越しの際は、近隣のコインパーキングをご利用下さい。
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">地図</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.4219117066223!2d139.46428011185762!3d35.394791272567126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018516cb44db20b%3A0x8a31291389a081da!2z44CSMjUyLTA4MDQg56We5aWI5bed55yM6Jek5rKi5biC5rmY5Y2X5Y-w77yS5LiB55uu77yR77yX4oiS77yR77yU!5e0!3m2!1sja!2sjp!4v1755958590315!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="串かつ枡やの地図"
                ></iframe>
              </div>
            </div>
            
            <div className="marugame-card p-8">
              <h3 className="text-xl font-medium mb-4 marugame-text-gradient">初回ご来店の方へ</h3>
              <p className="text-gray-600 leading-relaxed">
                湘南台駅の改札を出て、西口D出口へお進みください。バスロータリー前のパラッツォ(パチスロ店)と線路の間の道を線路沿いに直進です。2個目のT字路に当店がございます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 