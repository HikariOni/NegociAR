import { motion } from 'framer-motion';
import { Store, Camera, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { BottomNav } from '../components/BottomNav';

export const CreateBusiness = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen bg-bg text-text pb-40"
    >
      <header className="fixed top-0 w-full z-50 bg-inset/70 backdrop-blur-xl border-b border-white/5 h-16 flex items-center px-6">
        <h2 className="text-xl font-extrabold tracking-tighter headline flex items-center gap-2">
          <Store className="text-primary" size={24} />
          <span>Tu Negocio</span>
        </h2>
      </header>

      <main className="pt-24 px-6 max-w-xl mx-auto space-y-10 w-full">
        {/* Intro Section */}
        <section className="text-center space-y-4">
          <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-2xl shadow-primary/20">
            <Sparkles className="text-primary" size={40} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight headline uppercase">Eleva tu Éxito</h1>
          <p className="text-secondary text-sm mono uppercase tracking-tight">Crea tu tienda digital en segundos</p>
        </section>

        {/* Business Form */}
        <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all pointer-events-none">
            <Store size={120} />
          </div>
          <form className="space-y-6">
            <div className="flex flex-col items-center justify-center p-8 bg-inset/50 rounded-2xl border-2 border-dashed border-white/10 hover:border-primary/50 cursor-pointer transition-all">
              <Camera className="text-secondary mb-2" size={32} />
              <span className="text-[10px] mono uppercase font-bold text-secondary">Añadir Portada / Logo</span>
            </div>

            <Input label="Nombre del Negocio" placeholder="Ej: Café Rioplatense" />
            <Input label="Rubro principal" placeholder="Ej: Gastronomía" />
            <Input label="Breve descripción" placeholder="¿Qué hace especial a tu negocio?" />
            
            <div className="flex items-center gap-3 p-4 bg-inset rounded-xl border border-white/5 hover:border-primary/30 cursor-pointer transition-all shadow-xl group/loc">
              <MapPin className="text-primary" size={20} />
              <div className="flex-1">
                <p className="text-[10px] mono uppercase font-bold text-secondary">Ubicación</p>
                <p className="text-sm font-bold headline">Mar del Plata, Argentina</p>
              </div>
              <ChevronRight className="text-secondary group-hover/loc:translate-x-1 transition-transform" size={20} />
            </div>

            <Button className="w-full h-16 shadow-lg shadow-primary/20" size="lg">CREAR NEGOCIO</Button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-card rounded-2xl border border-white/5 space-y-2">
            <p className="text-[10px] mono uppercase font-bold text-primary">Ventas</p>
            <p className="text-2xl font-bold headline">$0.00</p>
            <p className="text-[10px] mono uppercase text-secondary">Próximamente</p>
          </div>
          <div className="p-6 bg-card rounded-2xl border border-white/5 space-y-2">
            <p className="text-[10px] mono uppercase font-bold text-primary">Vistas</p>
            <p className="text-2xl font-bold headline">0</p>
            <p className="text-[10px] mono uppercase text-secondary">Interacciones AI</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </motion.div>
  );
};
