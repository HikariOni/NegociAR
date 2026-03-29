import { motion } from 'framer-motion';
import { Star, Grid, List as ListIcon } from 'lucide-react';
import { Input, Button, cn } from '../components/ui';
import { BottomNav } from '../components/BottomNav';

export const Explore = () => {
  const categories = ['Comida', 'Gimnasios', 'Talleres', 'Salud', 'Hogar', 'Tecnología'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen bg-bg text-text pb-40"
    >
      <header className="fixed top-0 w-full z-50 bg-inset/70 backdrop-blur-xl border-b border-white/5 h-24 flex items-center px-6">
        <div className="w-full max-w-xl mx-auto">
          <Input placeholder="Buscar por nombre, rubro o zona..." className="h-12" />
        </div>
      </header>

      <main className="pt-32 px-6 max-w-xl mx-auto space-y-8 w-full">
        {/* Chips Categories */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-6 px-6">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={cn(
                'px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border border-white/5',
                i === 0 ? 'bg-primary text-bg' : 'bg-card text-secondary hover:text-text'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Store */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold tracking-tight headline uppercase">DESTACADOS</h2>
            <div className="flex gap-2">
              <button className="p-2 bg-card rounded-lg text-secondary"><Grid size={16} /></button>
              <button className="p-2 bg-card rounded-lg text-secondary"><ListIcon size={16} /></button>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&q=80&w=800&fit=crop`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Business"
                  />
                  <div className="absolute top-4 right-4 bg-bg/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="text-primary fill-primary" />
                    <span className="text-xs font-bold mono">4.9</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold headline">Café Rioplatense</h3>
                    <span className="text-primary font-bold mono text-xs uppercase px-2 py-0.5 bg-primary/10 rounded">$$</span>
                  </div>
                  <p className="text-secondary text-sm mb-4 line-clamp-2 mono uppercase tracking-tight text-[10px]">
                    Café de especialidad y pastelería de autor en el corazón de la ciudad.
                  </p>
                  <Button variant="secondary" className="w-full h-10 text-[10px]" size="sm">VER DETALLES</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </motion.div>
  );
};
