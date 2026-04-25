import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "A MAEA Solutions transformou completamente nossos processos de qualidade. Implementação profissional e equipe excepcional.",
      author: "João Silva",
      role: "Diretor de Operações",
      company: "Empresa Industrial"
    },
    {
      quote: "Consultoria ambiental de excelência. Ajudaram-nos a atingir conformidade e sustentabilidade simultaneamente.",
      author: "Maria Santos",
      role: "Gerente Ambiental",
      company: "Empresa de Energia"
    },
    {
      quote: "Os treinamentos corporativos elevaram significativamente o desempenho da nossa equipe. Recomendo sem hesitação.",
      author: "Carlos Oliveira",
      role: "CEO",
      company: "Consultoria Empresarial"
    }
  ];

  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="section-title-sub">DEPOIMENTOS</div>
          <h2 className="section-title-main">O que Nossos Clientes Dizem</h2>
          <p className="section-title-desc">Histórias de sucesso de empresas que confiaram em nossos serviços</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card hover-lift"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Star rating */}
              <div className="mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-4 border-t border-gray-200">
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="text-gray-500 text-sm mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider my-16"></div>

        {/* Trust badges */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 font-semibold">Confiado por empresas líderes</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <i className="fas fa-certificate text-blue-600 text-2xl"></i>
              <span className="font-semibold">Certificado ISO</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <i className="fas fa-award text-green-600 text-2xl"></i>
              <span className="font-semibold">Premiado</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <i className="fas fa-users text-purple-600 text-2xl"></i>
              <span className="font-semibold">1000+ Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
