import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="section-title-main mb-3">Mantenha-se Informado</h3>
            <p className="text-gray-600">
              Receba as últimas notícias sobre consultoria, certificações e treinamentos corporativos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-6 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 hover-lift"
              required
            />
            <button
              type="submit"
              className="btn-gradient px-8 py-4 font-semibold whitespace-nowrap"
            >
              <i className="fas fa-envelope mr-2"></i>
              Inscrever-se
            </button>

            {/* Success message */}
            {submitted && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-semibold animate-slide-in-up">
                <i className="fas fa-check-circle mr-2"></i>
                Obrigado! Verifique seu e-mail.
              </div>
            )}
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Respeitamos sua privacidade. Nunca compartilharemos seus dados.
          </p>
        </div>
      </div>
    </section>
  );
}
