import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, RotateCcw } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: ''
  });
  const [captchaValue] = useState('89561'); // Static captcha for demo

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Username
          </label>
          <Input
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))}
            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter username"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
          <div className="text-right mt-2">
            <a href="#" className="text-white text-sm hover:underline">
              Forgot Password? <span className="text-orange-500">Click Here</span>
            </a>
          </div>
        </div>

        {/* Captcha */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Enter Captcha
          </label>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white p-2 rounded border-2 border-gray-300">
              <span className="font-mono text-black text-lg tracking-wider">{captchaValue}</span>
            </div>
            <Button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          <Input
            type="text"
            placeholder="Enter Captcha"
            value={formData.captcha}
            onChange={(e) => setFormData(prev => ({...prev, captcha: e.target.value}))}
            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
          />
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-lg"
        >
          Log In
        </Button>

        {/* Additional Links */}
        <div className="text-center space-y-2">
          <a href="#" className="block text-orange-500 hover:underline">
            New Candidate Registration?
          </a>
          <a href="#" className="block text-orange-500 hover:underline">
            Download Students Manual
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;