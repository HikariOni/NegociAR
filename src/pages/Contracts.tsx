import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, Clock, MapPin, DollarSign, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button, Input, cn } from '../components/ui';
import { BottomNav } from '../components/BottomNav';

const TaskCard = ({ title, category, price, time, location, status }: any) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-[#171924]/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 space-y-4 hover:border-primary/30 transition-all cursor-pointer group"
  >
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <span className="text-[10px] text-primary mono font-black uppercase tracking-widest">{category}</span>
        <h3 className="text-lg font-extrabold headline text-white uppercase tracking-tight leading-tight">{title}</h3>
      </div>
      <div className="bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 flex items-center gap-1">
        <DollarSign size={12} className="text-primary" />
        <span className="text-xs font-black text-primary mono">{price}</span>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-4 pt-2">
      <div className="flex items-center gap-2 text-secondary/70">
        <Clock size={14} />
        <span className="text-[10px] font-bold uppercase">{time}</span>
      </div>
      <div className="flex items-center gap-2 text-secondary/70">
        <MapPin size={14} />
        <span className="text-[10px] font-bold uppercase">{location}</span>
      </div>
    </div>

    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-400" />
        <span className="text-[9px] font-black tracking-widest text-emerald-400 uppercase">{status}</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all">
        <ChevronRight size={18} />
      </div>
    </div>
  </motion.div>
);

export const Contracts = () => {
  return (
    <div className="min-h-screen bg-[#0C0E17] text-text pb-40">
      {/* Header - TopAppBar (blgCG sync) */}
      <header className="fixed top-0 w-full z-50 bg-[#0c0e17b2] backdrop-blur-xl h-20 flex items-center px-8 border-b border-white/5">
        <div className="flex items-end justify-between w-full max-w-5xl mx-auto">
          <div className="space-y-0.5">
             <h1 className="text-2xl font-black headline tracking-tighter uppercase leading-none">Marketplace</h1>
             <p className="text-[10px] text-secondary font-black tracking-[0.2em] uppercase">Contratos Comunitarios</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <Filter size={20} />
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 space-y-10 max-w-5xl mx-auto">
        {/* Search and Filters (qz41T sync) */}
        <section className="space-y-6">
          <div className="relative">
             <Input placeholder="BUSCAR TAREAS O CONTRATOS..." className="pl-12 !bg-[#171924]/60" />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
            {['TODOS', 'ENTREGA', 'LOGÍSTICA', 'SERVICIOS', 'URGENTE'].map((tag, i) => (
              <button 
                key={tag} 
                className={cn(
                  "px-6 h-10 rounded-full text-[9px] font-black tracking-widest transition-all whitespace-nowrap",
                  i === 0 ? "bg-primary text-bg shadow-[0_4px_16px_rgba(34,211,238,0.3)]" : "bg-white/5 text-secondary border border-white/10 hover:bg-white/10"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Task Bento Grid (5zkz4 sync) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskCard 
            title="Envío de Mercadería Urgente" 
            category="LOGÍSTICA" 
            price="4.500" 
            time="HACE 10 MIN" 
            location="VILLA DEVOTO" 
            status="PRESUPUESTADO"
          />
          <TaskCard 
            title="Personal de Apoyo Local" 
            category="SERVICIOS" 
            price="8.000" 
            time="HACE 1 HORA" 
            location="PALERMO SOHO" 
            status="PENDIENTE"
          />
          <TaskCard 
            title="Reparto Gastronómico" 
            category="ENTREGA" 
            price="2.900" 
            time="AHORA" 
            location="BELGRANO C" 
            status="ACTIVO"
          />
          <TaskCard 
            title="Armado de mobiliario" 
            category="MANTENIMIENTO" 
            price="12.000" 
            time="HACE 2 DÍAS" 
            location="TIGRE CENTER" 
            status="PENDIENTE"
          />
        </section>
      </main>

      {/* FAB - Create Contract (P8a9c sync) */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-32 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center text-[#0c0e17] shadow-[0_15px_43px_rgba(34,211,238,0.4)] z-[60]"
      >
        <Plus size={28} />
      </motion.button>

      <BottomNav />
    </div>
  );
};
