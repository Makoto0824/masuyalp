export default function Menu() {
  const menuItems = [
    {
      name: "串カツ（豚肉）",
      price: "¥120",
      description: "サクッとした衣とジューシーな豚肉の絶妙なバランス",
      image: "/menu/kushikatsu-pork.jpg",
      popular: true
    },
    {
      name: "串カツ（牛肉）",
      price: "¥150",
      description: "上質な牛肉を使用した贅沢な串カツ",
      image: "/menu/kushikatsu-beef.jpg",
      popular: false
    },
    {
      name: "串カツ（海老）",
      price: "¥180",
      description: "プリプリの海老の串カツ",
      image: "/menu/kushikatsu-shrimp.jpg",
      popular: true
    },
    {
      name: "串カツ（野菜）",
      price: "¥100",
      description: "新鮮な野菜の串カツ",
      image: "/menu/kushikatsu-vegetable.jpg",
      popular: false
    },
    {
      name: "串カツ（チーズ）",
      price: "¥130",
      description: "とろけるチーズの串カツ",
      image: "/menu/kushikatsu-cheese.jpg",
      popular: false
    },
    {
      name: "串カツ（アスパラ）",
      price: "¥140",
      description: "春の味覚、アスパラの串カツ",
      image: "/menu/kushikatsu-asparagus.jpg",
      popular: false
    }
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">メニュー</h2>
          <p className="marugame-section-subtitle">本格串カツの数々</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className={`marugame-card overflow-hidden relative ${item.popular ? 'marugame-red-card' : ''}`}>
              {item.popular && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  人気
                </div>
              )}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-60">🍢</div>
                  <p className="text-gray-500 text-sm font-medium">写真準備中</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <span className={`text-xl font-medium ${item.popular ? 'marugame-red-accent' : 'marugame-text-gradient'}`}>{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="marugame-card p-10 max-w-4xl mx-auto relative">
            {/* 赤色のアクセントライン */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient">その他のメニュー</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-medium mb-4 text-gray-800 text-lg">おつまみ</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 枝豆 ¥400</li>
                  <li>• 冷奴 ¥350</li>
                  <li>• ポテトフライ ¥450</li>
                  <li>• 唐揚げ ¥550</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-gray-800 text-lg">ドリンク</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 生ビール ¥580</li>
                  <li>• ハイボール ¥480</li>
                  <li>• 日本酒 ¥450</li>
                  <li>• ソフトドリンク ¥200</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 