import React, { useState, useEffect } from "react";

export default function StatsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = 1000 / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setCounters({
        projects: Math.floor(150 * progress),
        clients: Math.floor(80 * progress),
        experience: Math.floor(15 * progress),
        team: Math.floor(45 * progress)
      });

      if (progress === 1) clearInterval(interval);
    }, increment);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: counters.projects, label: "Projetos Realizados", icon: "fas fa-briefcase" },
    { number: counters.clients, label: "Clientes Satisfeitos", icon: "fas fa-handshake" },
    { number: counters.experience, label: "Anos de Experiência", icon: "fas fa-award" },
    { number: counters.team, label: "Profissionais Qualificados", icon: "fas fa-users" }
  ];

  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="section-title-wrapper">
          <div className="section-title-sub">NOSSA EXCELÊNCIA</div>
          <h2 className="section-title-main text-white">Números que Falam</h2>
          <p className="section-title-desc text-gray-400">Resultados comprovados e satisfação garantida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="mb-4 text-4xl">
                <i className={stat.icon} style={{background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}></i>
              </div>
              <div className="stat-number">{stat.number}+</div>
              <div className="stat-label text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
