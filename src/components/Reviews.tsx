export default function Reviews() {
  const reviews = [
    {
      name: "田中さん",
      rating: 5,
      comment: "大阪の味がそのまま！衣がサクサクで中身もジューシー。湘南台でこんな本格的な串カツが食べられるなんて嬉しいです。",
      date: "2024年1月"
    },
    {
      name: "佐藤さん",
      rating: 5,
      comment: "家族で利用しました。お子様連れでも気軽に入れる雰囲気で、串カツも美味しく、また来たいと思います。",
      date: "2024年2月"
    },
    {
      name: "山田さん",
      rating: 4,
      comment: "一人でも気軽に入れる居酒屋です。カウンター席で職人の技を見ながら食べる串カツは格別でした。",
      date: "2024年3月"
    },
    {
      name: "鈴木さん",
      rating: 5,
      comment: "価格も手頃で、味も本格的。大阪出身の私にとって、故郷の味を思い出させてくれる素晴らしいお店です。",
      date: "2024年3月"
    },
    {
      name: "高橋さん",
      rating: 4,
      comment: "海老の串カツが特に美味しかったです。新鮮でプリプリの食感。お酒との相性も抜群です。",
      date: "2024年4月"
    },
    {
      name: "渡辺さん",
      rating: 5,
      comment: "地元の隠れた名店です。友達を連れて行ったら大絶賛でした。また来ます！",
      date: "2024年4月"
    }
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">お客様の声</h2>
          <p className="marugame-section-subtitle">ご来店いただいたお客様からの声</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="marugame-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">{review.name}</h3>
                <span className="text-yellow-500 text-lg">{renderStars(review.rating)}</span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">&ldquo;{review.comment}&rdquo;</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
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