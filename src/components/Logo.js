import React from "react";
import logoImage from "../assets/img/logo.png";

export default function Logo({ className = "", scrolled = false, showText = true }) {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer transition-all duration-300 ${className}`}>
      <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg' 
          : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20'
      } group-hover:shadow-2xl`}>
        <img
          src={logoImage}
          alt="MAEA SOLUTIONS Logo"
          className="h-8 w-8 filter drop-shadow-lg"
        />
      </div>
      {showText && (
        <div className="hidden sm:flex flex-col">
          <span className={`font-bold text-lg transition-all duration-300 tracking-tight ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}>
            MAEA
          </span>
          <span className={`text-xs font-semibold transition-all duration-300 ${
            scrolled ? 'text-blue-600' : 'text-cyan-300'
          }`}>
            SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
} 