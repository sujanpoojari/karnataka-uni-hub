import karnatakaEmblem from "@/assets/karnataka-emblem.png";

const MainHeader = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* UUCMS Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-orange-500">UUCMS</h1>
              <p className="text-sm text-gray-600">Department of Higher Education</p>
            </div>
          </div>

          {/* Minister Photos */}
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 text-xs">Minister</span>
                </div>
              </div>
              <h3 className="font-bold text-lg">SHRI SIDDARAMAIAH</h3>
              <p className="text-xs text-gray-600">Hon'ble Chief Minister | Govt. of Karnataka</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 text-xs">Minister</span>
                </div>
              </div>
              <h3 className="font-bold text-lg">Dr. M.C. SUDHAKAR</h3>
              <p className="text-xs text-gray-600">Hon'ble Minister of Higher Education</p>
              <p className="text-xs text-gray-600">Department of Higher Education | Government of Karnataka</p>
            </div>
          </div>

          {/* Karnataka Emblem */}
          <div className="text-center">
            <img 
              src={karnatakaEmblem} 
              alt="Government of Karnataka" 
              className="h-20 w-20 mx-auto mb-2" 
            />
            <p className="text-sm font-semibold">Government of Karnataka</p>
            <div className="text-right mt-4">
              <a href="#" className="text-orange-500 text-sm hover:underline">
                ◄◄ Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;