'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // スムーズスクロールの実装
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href) as HTMLElement;
          if (targetElement) {
            const headerHeight = 80; // ヘッダーの高さ
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
} 