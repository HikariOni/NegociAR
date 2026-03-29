import { motion } from 'framer-motion';
import { Menu, Search, MapPin, Star, ChevronRight, LayoutGrid, Heart, Coffee, Laptop, ShoppingBag, ClipboardList, Clock, DollarSign } from 'lucide-react';
import { Button, cn } from '../components/ui';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col gap-1 mb-4 px-1">
    <h2 className="text-xl font-bold tracking-tight headline uppercase text-white">{title}</h2>
    {subtitle && <p className="text-[10px] text-secondary mono uppercase tracking-widest font-medium">{subtitle}</p>}
  </div>
);

const CategoryCard = ({ icon: Icon, label, color, className }: any) => (
  <div className={cn("bg-[#171924] border border-white/5 rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 hover:bg-inset transition-all group", className)}>
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
      <Icon size={28} />
    </div>
    <span className="text-[10px] font-bold mono uppercase tracking-tight text-center text-secondary/80 group-hover:text-white transition-colors">
      {label}
    </span>
  </div>
);

const FeaturedCard = ({ name, category, rating, image, onClick }: any) => (
  <div 
    onClick={onClick} 
    className="min-w-[280px] bg-[#171924] rounded-[2.5rem] border border-white/5 overflow-hidden group cursor-pointer transition-all active:scale-[0.98]"
  >
    <div className="h-40 bg-inset relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] to-transparent opacity-60"></div>
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
        <Star size={12} className="text-yellow-400 fill-yellow-400" />
        <span className="text-[10px] font-black mono text-white">{rating}</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-extrabold text-lg headline tracking-tight mb-1 text-white uppercase">{name}</h3>
          <span className="text-[10px] text-primary mono uppercase font-black tracking-widest">{category}</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-inset flex items-center justify-center text-secondary hover:text-red-400 transition-colors cursor-pointer border border-white/5">
          <Heart size={18} />
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full mt-4 border-white/10 text-[10px] uppercase font-black tracking-[0.2em] h-10">
        VER DETALLES
      </Button>
    </div>
  </div>
);

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0C0E17] text-text pb-40"
    >
      <header className="fixed top-0 w-full z-50 bg-[#171924b2] backdrop-blur-xl border-b border-white/5 h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-inset border border-white/10 flex items-center justify-center cursor-pointer">
              <Menu size={20} className="text-secondary" />
            </div>
            <span className="text-lg font-black tracking-tight headline uppercase">NegociaAR</span>
          </div>
          <div className="flex items-center gap-4">
            <Search size={22} className="text-secondary cursor-pointer hover:text-primary transition-colors" />
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 p-0.5 bg-primary/10">
               <img src="https://picsum.photos/seed/user/100" className="w-full h-full rounded-full object-cover" alt="profile" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 space-y-10 max-w-5xl mx-auto">
        <section className="relative bg-[#171924] rounded-[2rem] p-8 border border-white/10 overflow-hidden group shadow-2xl">
          <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-[#00bcd4]/10 blur-[60px] rounded-full group-hover:bg-[#00bcd4]/20 transition-all duration-700"></div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] text-primary mono font-black uppercase tracking-[0.25em] mb-4">SISTEMA COMUNITARIO ACTIVO</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold headline tracking-tighter uppercase leading-[0.85] text-white">
                Hola, <span className="text-primary italic">Julian</span><br />
                <span className="opacity-30">Bienvenido al barrio</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 p-4 bg-bg/50 backdrop-blur-md rounded-2xl border border-white/5 w-fit">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs font-black mono uppercase tracking-tight text-white/80">Buenos Aires, AR</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader title="Explorar" subtitle="Categorías de la comunidad" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <CategoryCard icon={Coffee} label="GASTRONOMÍA" color="amber-400" className="bg-amber-400/5 border-amber-400/10" />
            <CategoryCard icon={Laptop} label="TECNOLOGÍA" color="blue-400" className="bg-blue-400/5 border-blue-400/10" />
            <CategoryCard icon={ShoppingBag} label="MODA" color="purple-400" className="bg-purple-400/5 border-purple-400/10" />
            <CategoryCard icon={LayoutGrid} label="MÁS" color="primary" className="bg-primary/10 border-primary/20" />
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-end">
             <SectionHeader title="Destacados" subtitle="Tendencia en tu zona" />
             <Button onClick={() => navigate('/dashboard')} variant="ghost" size="sm" className="mb-8 text-[10px] font-black tracking-widest underline decoration-primary/30 underline-offset-4 pointer-events-none opacity-0">VER TODOS</Button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar -mx-6 px-6">
            <FeaturedCard 
              name="Café Rioplatense" 
              category="GASTRONOMÍA" 
              rating="4.9" 
              image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop" 
              onClick={() => navigate('/business/cafe-rioplatense')}
            />
            <FeaturedCard 
              name="CyberLink Store" 
              category="TECNOLOGÍA" 
              rating="4.7" 
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop" 
              onClick={() => navigate('/business/cyberlink-store')}
            />
            <FeaturedCard 
              name="Arte Nativo" 
              category="DECORACIÓN" 
              rating="4.8" 
              image="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop" 
              onClick={() => navigate('/business/arte-nativo')}
            />
          </div>
        </section>

        {/* Section - Últimos Contratos (New sync with kDD6G design) */}
        <section className="space-y-6">
           <div className="flex justify-between items-center">
              <SectionHeader title="Contratos" subtitle="Tareas disponibles ahora" />
              <Button onClick={() => navigate('/contracts')} variant="ghost" className="text-primary text-[10px] font-black uppercase tracking-widest h-8 mb-4">Marketplace</Button>
           </div>
           <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'Reparto Gastronómico', price: '2.500', icon: Clock },
                { title: 'Logística de Tienda', price: '4.800', icon: ClipboardList }
              ].map((contract, i) => (
                <div key={i} onClick={() => navigate('/contracts')} className="bg-[#171924] p-5 rounded-[2rem] border border-white/5 flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                         <contract.icon size={20} />
                      </div>
                      <div>
                         <h4 className="font-extrabold text-sm headline uppercase tracking-tight text-white mb-0.5">{contract.title}</h4>
                         <div className="flex items-center gap-2">
                            <DollarSign size={10} className="text-secondary" />
                            <span className="text-[10px] text-primary mono font-black uppercase tracking-widest">{contract.price}</span>
                         </div>
                      </div>
                   </div>
                   <ChevronRight size={18} className="text-secondary" />
                </div>
              ))}
           </div>
        </section>

        <section className="space-y-6">
          <SectionHeader title="Negocios Cercanos" subtitle="A pocos minutos de ti" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#171924] p-5 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-inset border border-white/5 overflow-hidden ring-1 ring-white/5">
                    <img src={`https://picsum.photos/seed/${i+50}/200`} alt="shop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-extrabold headline tracking-tight text-white uppercase">Comercio Local #{i}</h4>
                    <p className="text-[10px] text-secondary mono font-black uppercase tracking-widest">Encontrado hoy cerca de ti</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00bcd4]/10 flex items-center justify-center text-[#00bcd4] group-hover:bg-[#00bcd4] group-hover:text-bg transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </motion.div>
  );
};
