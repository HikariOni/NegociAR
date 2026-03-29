import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Check, User, Store } from 'lucide-react';
import { Button } from '../components/ui';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    title: "¿Cuál es tu objetivo principal?",
    subtitle: "Podrás cambiar esto más tarde",
    options: [
      { label: "Comprar productos locales", icon: User, value: "client" },
      { label: "Ofrecer mis servicios / vender", icon: Store, value: "business" }
    ]
  },
  {
    id: 2,
    title: "¿Qué categorías te interesan?",
    subtitle: "Personalizaremos tu feed según esto",
    options: [
      { label: "Gastronomía", value: "food" },
      { label: "Tecnología", value: "tech" },
      { label: "Hogar y Decoración", value: "home" },
      { label: "Servicios Profesionales", value: "services" }
    ],
    multiple: true
  },
  {
    id: 3,
    title: "¿Con qué frecuencia planeas usar NegociaAR?",
    subtitle: "Ajustaremos tus notificaciones",
    options: [
      { label: "Diariamente", value: "daily" },
      { label: "Semanalmente", value: "weekly" },
      { label: "Solo cuando necesite algo", value: "occasional" }
    ]
  },
  {
    id: 4,
    title: "¿Eres emprendedor?",
    subtitle: "Queremos saber si ya tienes un negocio",
    options: [
      { label: "Sí, ya tengo un negocio", value: "yes_biz" },
      { label: "Estoy empezando", value: "starting" },
      { label: "No por ahora", value: "no" }
    ]
  },
  {
    id: 5,
    title: "¿Qué esperas de la comunidad?",
    subtitle: "Selecciona tu mayor expectativa",
    options: [
      { label: "Conocer vecinos", value: "networking" },
      { label: "Ahorrar dinero", value: "saving" },
      { label: "Hacer crecer mi negocio", value: "growth" }
    ]
  }
];

export const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    const currentQ = questions[step];
    if (currentQ.multiple) {
      const currentAnswers = answers[currentQ.id] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter((v: string) => v !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [currentQ.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [currentQ.id]: value });
    }
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Determine if customer or business dashboard
      const type = answers[1] === 'business' || answers[4] === 'yes_biz' ? 'business' : 'client';
      navigate(type === 'business' ? '/business-dashboard' : '/dashboard');
    }
  };

  const currentQ = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-bg text-text p-6 flex flex-col">
      <header className="flex items-center justify-between mb-12 pt-4">
        <button 
          onClick={() => step > 0 && setStep(step - 1)}
          className={`p-2 rounded-full bg-card/50 ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1 mx-8 h-1 bg-inset rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-bold mono text-secondary">{step + 1}/{questions.length}</span>
      </header>

      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-10">
              <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold mono uppercase tracking-widest mb-4 inline-block">
                Paso {step + 1}
              </span>
              <h1 className="text-3xl font-extrabold headline uppercase tracking-tighter leading-tight mb-2">
                {currentQ.title}
              </h1>
              <p className="text-secondary text-sm mono uppercase tracking-tight">
                {currentQ.subtitle}
              </p>
            </div>

            <div className="space-y-4 mb-20">
              {currentQ.options.map((opt) => {
                const isSelected = currentQ.multiple 
                  ? (answers[currentQ.id] || []).includes(opt.value)
                  : answers[currentQ.id] === opt.value;
                
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full p-6 rounded-2xl border transition-all flex items-center gap-4 text-left group
                      ${isSelected 
                        ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10' 
                        : 'bg-card border-white/5 hover:border-white/20'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all
                      ${isSelected ? 'bg-primary text-bg' : 'bg-inset text-secondary group-hover:text-primary'}`}>
                      {(opt as any).icon ? React.createElement((opt as any).icon, { size: 24 }) : <Check size={20} opacity={isSelected ? 1 : 0} />}
                    </div>
                    <div>
                      <h3 className={`font-bold uppercase tracking-tight ${isSelected ? 'text-text' : 'text-secondary'}`}>
                        {opt.label}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="pb-10">
        <Button 
          className="w-full h-16 shadow-2xl shadow-primary/20" 
          size="lg"
          onClick={handleNext}
          disabled={!answers[currentQ.id]}
        >
          {step === questions.length - 1 ? 'FINALIZAR' : 'SIGUIENTE'}
        </Button>
      </footer>
    </div>
  );
};
