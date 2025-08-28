'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MenuItem {
  name: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  const menuCategories: MenuCategory[] = [
    {
      name: "串",
      items: [
        { name: "豚肉", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "れんこん", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "イカ", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "鳥セロリ", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "玉ねぎ", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "キスしそ巻き", price: "¥180", image: "/images/jyunbicyu.jpg" },
        { name: "牛肉", price: "¥180", image: "/images/jyunbicyu.jpg" },
        { name: "帆立", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "しし唐", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "鴨とネギ", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "ししゃも", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "茄子", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "サーモンチーズ", price: "¥180", image: "/images/jyunbicyu.jpg" },
        { name: "長ネギ", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "砂肝", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "海老", price: "¥180", image: "/images/jyunbicyu.jpg" },
        { name: "うずら", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "椎茸", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "鶏スティック", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "にんにく", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "餅", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "ウインナー", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "紅生姜", price: "¥130", image: "/images/jyunbicyu.jpg" },
        { name: "牡蠣", price: "¥250", image: "/images/jyunbicyu.jpg" },
        { name: "あさり", price: "¥150", image: "/images/jyunbicyu.jpg" },
        { name: "チーズ竹輪", price: "¥170", image: "/images/jyunbicyu.jpg" },
        { name: "アスパラ", price: "¥250", image: "/images/jyunbicyu.jpg" },
        { name: "チーズ", price: "¥150", image: "/images/jyunbicyu.jpg" }
      ]
    },
    {
      name: "料理",
      items: [
        { name: "コロッケ（2ヶ）", price: "¥550", image: "/images/jyunbicyu.jpg" },
        { name: "銀杏", price: "¥650", image: "/images/jyunbicyu.jpg" },
        { name: "鶏皮ぽんず", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "ネギチャーシュー", price: "¥700", image: "/images/jyunbicyu.jpg" },
        { name: "にんにく揚げ", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "冷やしトマト", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "鮭ハラス", price: "¥750", image: "/images/jyunbicyu.jpg" },
        { name: "出し巻き玉子", price: "¥600", image: "/images/jyunbicyu.jpg" },
        { name: "とん平", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "玉子かけご飯", price: "¥450", image: "/images/jyunbicyu.jpg" },
        { name: "おにぎり（１個）", price: "¥300", image: "/images/jyunbicyu.jpg" },
        { name: "牛すじ煮込み", price: "¥550", image: "/images/jyunbicyu.jpg" },
        { name: "新生姜甘酢漬け", price: "¥400", image: "/images/jyunbicyu.jpg" },
        { name: "フライドポテト", price: "¥400", image: "/images/jyunbicyu.jpg" },
        { name: "酒盗ポテト", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "つぶ貝バター炒め", price: "¥600", image: "/images/jyunbicyu.jpg" },
        { name: "ポテトサラダ", price: "¥450", image: "/images/jyunbicyu.jpg" },
        { name: "油揚げ", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "エイヒレ焼き", price: "¥500", image: "/images/jyunbicyu.jpg" },
        { name: "冷奴", price: "¥450", image: "/images/jyunbicyu.jpg" },
        { name: "鯖焼き（半身）", price: "¥550", image: "/images/jyunbicyu.jpg" },
        { name: "鯖みりん焼き", price: "¥550", image: "/images/jyunbicyu.jpg" }
      ]
    },
    {
      name: "焼酎・日本酒",
      items: [
        { name: "大隅", price: "¥490" },
        { name: "黒霧島", price: "¥490" },
        { name: "さつま白波", price: "¥490" },
        { name: "赤霧島", price: "¥550" },
        { name: "三岳", price: "¥660" },
        { name: "晴耕雨読", price: "¥660" },
        { name: "赤兎馬", price: "¥660" },
        { name: "富乃宝山", price: "¥660" },
        { name: "吉兆宝山", price: "¥660" },
        { name: "森伊蔵", price: "¥1700" },
        { name: "村尾", price: "¥1400" },
        { name: "魔王", price: "¥1400" },
        { name: "佐藤", price: "¥1100" },
        { name: "なかむら", price: "¥900" },
        { name: "中々", price: "¥880" },
        { name: "二階堂", price: "¥490" },
        { name: "神の河", price: "¥490" },
        { name: "鳥飼", price: "¥660" },
        { name: "川辺", price: "¥660" },
        { name: "れんと", price: "¥490" },
        { name: "朝日", price: "¥660" },
        { name: "鍛高譚", price: "¥550" },
        { name: "紅乙女", price: "¥490" },
        { name: "久米仙", price: "¥490" },
        { name: "残波", price: "¥490" },
        { name: "豪快（1合）", price: "¥490" },
        { name: "八海山（グラス）", price: "¥490" },
        { name: "久保田（グラス）", price: "¥490" },
        { name: "獺祭（3割9分）（グラス）", price: "¥880" },
        { name: "獺祭（4.5割）（グラス）", price: "¥680" },
        { name: "田酒（グラス）", price: "¥880" },
        { name: "黒龍（グラス）", price: "¥880" },
        { name: "雪の茅舎（グラス）", price: "¥660" }
      ]
    },
    {
      name: "ビール・ハイボール・サワー",
      items: [
        { name: "ザ・プレミアム・モルツ（生）グラス", price: "¥450" },
        { name: "ザ・プレミアム・モルツ（生）中ジョッキ", price: "¥580" },
        { name: "ザ・プレミアム・モルツ　中瓶", price: "¥550" },
        { name: "角ハイボール", price: "¥500" },
        { name: "稲妻ハイボール", price: "¥550" },
        { name: "メーカーズクラフトハイボール", price: "¥660" },
        { name: "レモンサワー", price: "¥480" },
        { name: "トマトサワー", price: "¥480" },
        { name: "ウーロンハイ", price: "¥480" },
        { name: "緑茶割り", price: "¥480" },
        { name: "ひげ茶割り", price: "¥480" },
        { name: "巨峰サワー", price: "¥480" },
        { name: "柚子サワー", price: "¥480" },
        { name: "青りんごサワー", price: "¥480" },
        { name: "柚子みつサワー", price: "¥480" },
        { name: "グレープフルーツサワー", price: "¥480" },
        { name: "自家製赤しそサワー", price: "¥600" },
        { name: "翠ジンソーダ", price: "¥480" },
        { name: "ホッピー", price: "¥500" },
        { name: "電気ブラン", price: "¥490" },
        { name: "ホッピー中身", price: "¥330" }
      ]
    },
    {
      name: "ソフトドリンク・その他",
      items: [
        { name: "ウーロン茶", price: "¥300" },
        { name: "緑茶", price: "¥300" },
        { name: "コーラ", price: "¥300" },
        { name: "カルピス", price: "¥300" },
        { name: "ジンジャーエール", price: "¥300" },
        { name: "オレンジジュース", price: "¥300" },
        { name: "グレープフルーツジュース", price: "¥300" },
        { name: "杏露酒", price: "¥450" },
        { name: "梅酒", price: "¥520" },
        { name: "黒糖梅酒", price: "¥520" },
        { name: "オールフリー", price: "¥400" },
        { name: "赤ワインボトル", price: "¥2800〜" },
        { name: "いいちこ（乙）ボトルキープ", price: "¥3300" },
        { name: "黒霧島（芋）ボトルキープ", price: "¥3300" },
        { name: "ウーロン茶（ピッチャー）", price: "¥400" },
        { name: "緑茶（ピッチャー）", price: "¥500" },
        { name: "氷セット", price: "¥300" }
      ]
    }
  ];

  const renderMenuItem = (item: MenuItem, itemIndex: number) => {
    if (item.image) {
      // 写真付きメニューアイテム（串と料理）
      return (
        <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 bg-gray-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
              <span className="text-xl font-bold marugame-red-accent">{item.price}</span>
            </div>
          </div>
        </div>
      );
    } else {
      // 写真なしメニューアイテム（ドリンク類）
      return (
        <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
          <span className="text-gray-800 font-medium">{item.name}</span>
          <span className="text-lg font-bold marugame-red-accent">{item.price}</span>
        </div>
      );
    }
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="marugame-section-title marugame-text-gradient">メニュー</h2>
          <p className="marugame-section-subtitle">本格串かつと豊富なドリンク</p>
        </div>
        
        {/* タブナビゲーション */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? 'bg-[#b41b4b] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* タブコンテンツ */}
        <div className="marugame-card p-8 shadow-lg border border-gray-100 min-h-[400px]">
          <h3 className="text-2xl font-medium mb-8 marugame-text-gradient text-center tracking-wide">
            {menuCategories[activeTab].name}
          </h3>
          <div className={`grid gap-6 ${
            menuCategories[activeTab].items[0]?.image 
              ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {menuCategories[activeTab].items.map((item, itemIndex) => 
              renderMenuItem(item, itemIndex)
            )}
          </div>
        </div>
        
        <div className="text-center mt-20">
          <div className="marugame-card p-12 max-w-4xl mx-auto relative shadow-xl border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b41b4b] to-[#c42d5a]"></div>
            <h3 className="text-2xl font-medium mb-6 marugame-text-gradient tracking-wide">メニューについて</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-medium mb-4 text-gray-800 text-lg flex items-center">
                  <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                  串かつについて
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 本格的な大阪風串かつ</li>
                  <li>• サクッとした衣とジューシーな具材</li>
                  <li>• 特製ソースでお召し上がりください</li>
                  <li>• お好みで塩や辛子もご用意</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-gray-800 text-lg flex items-center">
                  <span className="w-2 h-2 bg-[#b41b4b] rounded-full mr-3"></span>
                  ドリンクについて
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 豊富な焼酎・日本酒の品揃え</li>
                  <li>• 各種サワー・ハイボール</li>
                  <li>• ボトルキープサービスあり</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 