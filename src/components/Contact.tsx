export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient text-lg md:text-2xl">ご予約・お問い合わせ</h2>
          <p className="marugame-section-subtitle">お気軽にお電話ください</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="marugame-card p-8 marugame-red-card shadow-lg border border-red-100">
              <h3 className="text-xl font-medium mb-4 marugame-red-accent tracking-wide">お電話でのご予約</h3>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#b41b4b] mb-4">0466-44-2909</p>
                <p className="text-gray-600 mb-6 text-sm md:text-base">営業時間内にお気軽にお電話ください</p>
                <a
                  href="tel:0466-44-2909"
                  className="md:hidden marugame-button text-lg px-8 py-4 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  今すぐ電話する
                </a>
              </div>
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
        </div>
      </div>
    </section>
  );
} 