export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="marugame-card p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">食べログ評価</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-4xl">⭐</span>
              <span className="text-3xl font-medium marugame-text-gradient">3.58</span>
              <span className="text-gray-600">/ 5.0</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              多くのお客様にご満足いただいております。本格的な串カツの味と温かいおもてなしで、
              リピーターの方も多くいらっしゃいます。
            </p>
            <a
              href="https://tabelog.com/kanagawa/A1404/A140405/14033139/"
              target="_blank"
              rel="noopener noreferrer"
              className="marugame-button text-lg px-8 py-4"
            >
              食べログで詳しく見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 