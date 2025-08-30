import LoginTabs from "./LoginTabs";
import LoginForm from "./LoginForm";
import studentsLeft from "@/assets/students-left.png";
import studentsRight from "@/assets/students-right.png";

const MainLoginSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-200 via-cyan-100 to-blue-200 overflow-hidden">
      {/* Background curved shape */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path 
            d="M0,300 C300,200 600,400 1200,250 L1200,800 L0,800 Z" 
            fill="#1e293b" 
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Left Student Illustration */}
      <div className="absolute left-0 bottom-0 w-80 h-80 z-10">
        <img 
          src={studentsLeft} 
          alt="Celebrating students" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Student Illustration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 z-10">
        <img 
          src={studentsRight} 
          alt="Graduating student" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Login Content */}
      <div className="relative z-20 pt-20 pb-20">
        <div className="container mx-auto px-4">
          <LoginTabs />
          <div className="relative">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-4 h-4 bg-orange-300 rounded-full opacity-70"></div>
      <div className="absolute top-32 right-40 w-3 h-3 bg-blue-300 rounded-full opacity-70"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-teal-300 rounded-full opacity-70"></div>
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-orange-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-60 w-3 h-3 bg-cyan-300 rounded-full opacity-70"></div>
    </div>
  );
};

export default MainLoginSection;