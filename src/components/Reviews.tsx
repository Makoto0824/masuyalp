export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="marugame-card p-12 max-w-4xl mx-auto shadow-xl border border-gray-100">
            <h3 className="text-3xl font-medium mb-8 marugame-text-gradient tracking-wide">食べログ評価</h3>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <span className="text-5xl">⭐</span>
              <div className="text-center">
                <span className="text-4xl font-bold marugame-text-gradient block">3.03</span>
                <span className="text-gray-500 text-lg">/ 5.0</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              多くのお客様にご満足いただいております。本格的な串カツの味と温かいおもてなしで、
              リピーターの方も多くいらっしゃいます。
            </p>
            <p className="text-sm text-gray-500 mb-10 italic">※2025年9月現在</p>
            <a
              href="https://tabelog.com/kanagawa/A1404/A140405/14033139/"
              target="_blank"
              rel="noopener noreferrer"
              className="marugame-button text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              食べログで見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 