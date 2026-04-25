import React from "react";

export default function ServiceCard({ icon, title, description, color = "blue", link = "#" }) {
  const colorMap = {
    blue: {
      bg: "from-blue-600 to-blue-700",
      text: "text-blue-600",
      hover: "hover:from-blue-700 hover:to-blue-800"
    },
    green: {
      bg: "from-green-600 to-green-700",
      text: "text-green-600",
      hover: "hover:from-green-700 hover:to-green-800"
    },
    purple: {
      bg: "from-purple-600 to-purple-700",
      text: "text-purple-600",
      hover: "hover:from-purple-700 hover:to-purple-800"
    },
    cyan: {
      bg: "from-cyan-600 to-cyan-700",
      text: "text-cyan-600",
      hover: "hover:from-cyan-700 hover:to-cyan-800"
    }
  };

  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className="feature-card group">
      <div className={`feature-card-icon bg-gradient-to-br ${colors.bg} ${colors.hover} transition-all duration-300`}>
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text mb-4">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
      >
        <span>Saiba mais</span>
        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-2"></i>
      </a>
    </div>
  );
}
