import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#532d6b] text-white py-20 relative overflow-hidden">
      {/* 背景の装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c5a922] via-[#d69e2e] to-[#c5a922]"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#c5a922]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#c5a922]/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6 text-[#c5a922] tracking-wide">串かつ枡や</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              湘南台で本格的な串かつをお楽しみいただける居酒屋です。<br />
              大阪の味をそのまま再現し、地元の方々に愛される店を目指しています。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white tracking-wide">営業情報</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                火〜土：17:00〜22:00
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                定休日：日曜日・月曜日
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                電話：0466-44-2909
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white tracking-wide">アクセス</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                〒252-0804
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                神奈川県藤沢市湘南台2-17-14
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c5a922] rounded-full mr-3"></span>
                湘南台駅徒歩5分
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-white tracking-wide">Instagram</h4>
            <div>
              <a 
                href="https://www.instagram.com/kushikatsu_masuya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/instagram_logo.png"
                  alt="Instagram"
                  width={64}
                  height={64}
                  className="mb-3 rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 串かつ枡や. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 