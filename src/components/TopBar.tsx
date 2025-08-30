import { useState } from "react";

const TopBar = () => {
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const adjustFontSize = (size: 'small' | 'normal' | 'large') => {
    setFontSize(size);
    const root = document.documentElement;
    switch(size) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'normal':
        root.style.fontSize = '16px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
    }
  };

  return (
    <div className="bg-slate-700 text-white text-sm py-1">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2">✉</span>
          <span>contact-uucms.helpdesk@gmail.com</span>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Font Size Controls */}
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => adjustFontSize('small')}
              className={`px-2 py-1 border ${fontSize === 'small' ? 'bg-white text-black' : 'border-white'}`}
            >
              A-
            </button>
            <button 
              onClick={() => adjustFontSize('normal')}
              className={`px-2 py-1 border ${fontSize === 'normal' ? 'bg-white text-black' : 'border-white'}`}
            >
              A
            </button>
            <button 
              onClick={() => adjustFontSize('large')}
              className={`px-2 py-1 border ${fontSize === 'large' ? 'bg-white text-black' : 'border-white'}`}
            >
              A+
            </button>
            <button className="px-2 py-1 border border-white">
              +
            </button>
          </div>
          
          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(prev => prev === 'en' ? 'kn' : 'en')}
            className="hover:underline"
          >
            {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;