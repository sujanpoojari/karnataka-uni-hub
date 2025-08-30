import { useState } from "react";

const LoginTabs = () => {
  const [activeTab, setActiveTab] = useState('Student');

  const tabs = [
    'State Admin',
    'University', 
    'College/PG Center',
    'Student',
    'KSOU Reg Centre'
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-slate-600 rounded-t-lg overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === tab
                ? 'bg-orange-500 text-white'
                : 'bg-slate-600 text-white hover:bg-slate-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginTabs;