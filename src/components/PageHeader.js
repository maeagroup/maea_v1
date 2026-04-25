import React from "react";

export default function PageHeader({ 
  title, 
  subtitle, 
  description,
  backgroundImage,
  breadcrumbs 
}) {
  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-gray-300 text-sm mb-8">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-500">/</span>}
                {crumb.link ? (
                  <a href={crumb.link} className="hover:text-white transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Main content */}
        <div className="max-w-3xl">
          {subtitle && (
            <div className="inline-block mb-4">
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="hero-title text-white mb-6">
            {title}
          </h1>

          {description && (
            <p className="hero-description text-gray-300 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom wave/gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
}
