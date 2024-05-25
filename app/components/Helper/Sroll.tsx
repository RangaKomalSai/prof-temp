"use client"

import React, { useEffect, useState } from 'react';

const Scroll = () => {
  const [isVisi, setIsVisi] = useState(false);

  useEffect(() => {
    const toggleVisi = () => {
      if (window.scrollY > 300) {
        setIsVisi(true);
      } else {
        setIsVisi(false);
      }
    };

    window.addEventListener('scroll', toggleVisi);
    return () => {
      window.removeEventListener('scroll', toggleVisi);
    };
  }, []);

  return (
    <div>
      {isVisi && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded">
          Scroll Position: {window.scrollY}
        </div>
      )}
    </div>
  );
}

export default Scroll;
