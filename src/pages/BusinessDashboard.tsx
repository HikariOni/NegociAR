import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, MessageSquare, Menu, Search, Rocket, Sparkles, MoreHorizontal, ArrowUpRight, BarChart3, Target } from 'lucide-react';
import { Button, cn } from '../components/ui';
import { BottomNav } from '../components/BottomNav';

const MetricCard = ({ title, value, change, icon: Icon, color = "primary" }: any) => (
  <div className="bg-card p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-inset transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${color}/10 text-${color}`}>
        <Icon size={24} />
      </div>
      <span className={`text-[10px] font-bold mono flex items-center gap-1 text-emerald-400 capitalize`}>
        <TrendingUp size={12} />
        {change}
      </span>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] text-secondary mono uppercase tracking-widest">{title}</p>
      <h3 className="text-2xl font-extrabold headline tracking-tight">{value}</h3>
    </div>
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color} opacity-[0.03] blur-3xl -z-10`}></div>
  </div>
);

export const BusinessDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-bg text-text pb-40"
    >
      <header className="fixed top-0 w-full z-50 bg-inset/70 backdrop-blur-xl border-b border-white/5 h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <Menu className="text-secondary cursor-pointer hover:text-primary" size={24} />
            <span className="text-xl font-extrabold tracking-tighter text-primary headline">PANEL NEGOCIO</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-inset border border-white/5 flex items-center justify-center cursor-pointer">
              <Sparkles size={18} className="text-primary" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center cursor-pointer">
              <span className="text-primary font-bold text-xs uppercase mono tracking-tight">BR</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-10 w-full">
        {/* Main Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Ventas Totales" value="$42,500" change="+12%" icon={DollarSign} />
          <MetricCard title="Clientes" value="1.2k" change="+8.3%" icon={Users} />
          <MetricCard title="Visitas" value="5,892" change="+24.5%" icon={BarChart3} />
          <MetricCard title="Consultas" value="48" change="+15%" icon={MessageSquare} />
        </section>

        {/* Growth Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight headline uppercase flex items-center gap-2">
              <TrendingUp className="text-primary" size={20} />
              Rendimiento Semanal
            </h2>
            <Button variant="ghost" size="sm" className="gap-2 mono text-[10px]">VER REPORTE COMPLETO <ArrowUpRight size={14} /></Button>
          </div>
          <div className="bg-inset rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group min-h-[250px] flex flex-col justify-end">
            <div className="relative z-10">
              <p className="text-[10px] text-primary mono uppercase font-bold tracking-widest mb-2">Objetivo Mensual</p>
              <h3 className="text-4xl font-extrabold headline mb-4 tracking-tighter">$60,000 ESPERADO</h3>
              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "70%" }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="h-full bg-gradient-to-r from-primary to-cyan-400" 
                />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[10px] text-secondary mono uppercase">$42.5k ACTUAL</span>
                <span className="text-[10px] text-secondary mono uppercase">70% COMPLETADO</span>
              </div>
            </div>
            <Target className="absolute -right-8 -top-8 text-primary/5 size-48 transition-transform group-hover:scale-110 duration-1000" />
          </div>
        </section>

        {/* Recent Activity Bento */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-6 rounded-3xl border border-white/5 space-y-6">
            <h3 className="font-bold headline uppercase text-sm tracking-wider">Últimos Pedidos</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-inset/50 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase mono">JM</div>
                    <div>
                      <h4 className="font-bold text-sm headline tracking-tight text-text">Juan Manuel</h4>
                      <p className="text-[10px] text-secondary mono uppercase">Hace 15 min</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold headline text-primary">+$1,500</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-3xl border border-white/5 space-y-6 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-2">
                <Rocket className="text-primary" size={32} />
             </div>
             <h3 className="font-bold headline uppercase text-lg tracking-tight px-4">¡Eleva tu presencia en el barrio!</h3>
             <p className="text-secondary text-xs mono uppercase tracking-tight mb-4 px-6 leading-relaxed">Impulsa tu negocio con anuncios localizados por IA para tus vecinos cercanos.</p>
             <Button className="w-full uppercase font-bold tracking-widest text-[10px] h-12" size="sm">CREAR CAMPAÑA</Button>
          </div>
        </section>
      </main>

      <BottomNav />
    </motion.div>
  );
};
