import React from "react";

export default function FeaturesGrid({ title, subtitle, description, features }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-30 -mr-48 -mt-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-title-wrapper mb-16">
          <div className="section-title-sub">{subtitle}</div>
          <h2 className="section-title-main">{title}</h2>
          {description && <p className="section-title-desc">{description}</p>}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`feature-card-icon bg-gradient-to-br ${feature.colorClass}`}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-text">{feature.description}</p>
              {feature.link && (
                <a 
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-4 group"
                >
                  <span>Explorar</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
