import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Efeito de partículas/bolhas */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforme Seu Negócio com Nossas Soluções
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Somos especialistas em consultoria, certificações e treinamentos corporativos. 
            Deixe-nos ajudá-lo a alcançar excelência operacional e conformidade total.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contactos"
              className="btn-gradient px-8 py-4 text-lg font-semibold inline-flex items-center"
            >
              <i className="fas fa-envelope mr-3"></i>
              Solicite uma Consulta
            </Link>
            
            <a 
              href="https://wa.me/244922000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center"
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Certificado ISO</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Equipe Experiente</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
