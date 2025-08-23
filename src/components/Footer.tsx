export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6 marugame-text-gradient">串カツ酒場 枡や</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              湘南台で本格的な串カツをお楽しみいただける居酒屋です。<br />
              大阪の味をそのまま再現し、地元の方々に愛される店を目指しています。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98.196-1.353.569-.373.373-.569.863-.569 1.353s.196.98.569 1.353c.373.373.863.569 1.353.569s.98-.196 1.353-.569c.373-.373.569-.863.569-1.353s-.196-.98-.569-1.353c-.373-.373-.863-.569-1.353-.569z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">営業情報</h4>
            <ul className="space-y-3 text-gray-400">
              <li>月〜金：17:00〜23:00</li>
              <li>土日祝：16:00〜23:00</li>
              <li>定休日：不定休</li>
              <li>電話：0466-XX-XXXX</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">アクセス</h4>
            <ul className="space-y-3 text-gray-400">
              <li>〒252-0804</li>
              <li>神奈川県藤沢市湘南台1-1-1</li>
              <li>湘南台駅前ビル1階</li>
              <li>湘南台駅徒歩1分</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 串カツ酒場 枡や. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 