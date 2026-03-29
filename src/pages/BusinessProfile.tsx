import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Info, ShoppingBag, MapPin, Star, Share2, Heart, Clock, Phone, ChevronRight, Bookmark } from 'lucide-react';
import { Button, cn } from '../components/ui';
import { useNavigate, useParams } from 'react-router-dom';

const CatalogItem = ({ name, price, image }: any) => (
  <div className="bg-[#171924] border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:border-primary/20 transition-all">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 bg-inset rounded-xl overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-sm tracking-tight text-white mb-0.5">{name}</h4>
        <span className="text-[10px] text-primary mono font-black uppercase tracking-widest">${price}</span>
      </div>
    </div>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-xl p-0 border border-white/5 text-secondary hover:text-primary">
      <ChevronRight size={18} />
    </Button>
  </div>
);

const QuickAction = ({ icon: Icon, label }: any) => (
  <div className="flex-1 bg-[#171924] border border-white/5 rounded-3xl p-5 flex flex-col items-center gap-3 group hover:bg-inset transition-all cursor-pointer">
    <div className="w-12 h-12 rounded-2xl bg-[#00bcd4]/10 flex items-center justify-center text-[#00bcd4] group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-secondary group-hover:text-white transition-colors">
      {label}
    </span>
  </div>
);

export const BusinessProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - syncing with design labels
  const business = {
    name: "Café Rioplatense",
    category: "GASTRONOMÍA",
    rating: "4.9",
    reviews: "128",
    description: "Expertos en café de especialidad y pastelería artesanal con el toque porteño que nos caracteriza.",
    address: "Av. Corrientes 1234, Buenos Aires",
    delivery: "15-25 min",
    status: "ABIERTO",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0C0E17] text-text pb-20"
    >
      {/* Header - Top Navigation (eeOg9 sync) */}
      <header className="fixed top-0 w-full z-50 bg-[#0c0e17b2] backdrop-blur-xl h-16 flex items-center px-6 justify-between border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-lg font-black tracking-tight headline">NegociaAR</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
          <Bookmark size={18} />
        </div>
      </header>

      <main className="pt-20 px-4 space-y-6 max-w-5xl mx-auto">
        {/* Hero Section (Zi8qk sync) */}
        <section className="space-y-4">
          <div className="h-48 bg-inset rounded-3xl overflow-hidden relative border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="store-front"
            />
            {/* Gradient Overlay (EutBv sync) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-[#0c0e17]/0 to-[#0c0e17]/40"></div>
          </div>

          {/* Business Info Overlay (8PrPe sync) */}
          <div className="bg-[#171924b2] backdrop-blur-md border border-white/10 p-6 rounded-[2.5rem] shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                   <span className="text-[10px] text-[#00bcd4] mono font-black uppercase tracking-widest mb-1.5 block">
                     {business.category}
                   </span>
                   <h1 className="text-3xl font-extrabold headline tracking-tighter uppercase leading-none text-white">
                     {business.name}
                   </h1>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-[#00bcd4]/10 flex items-center justify-center text-[#00bcd4]">
                  <Heart size={20} className="fill-[#00bcd4]/20" />
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary/80">
                <div className="flex items-center gap-1.5">
                   <Star size={14} className="text-yellow-400 fill-yellow-400" />
                   <span className="text-xs font-bold text-white">{business.rating}</span>
                   <span className="text-[10px] font-bold mono">({business.reviews})</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="text-xs font-bold">{business.delivery}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid (GHi8v sync) */}
        <section className="flex gap-4">
          <QuickAction icon={MessageCircle} label="WhatsApp" />
          <QuickAction icon={ShoppingBag} label="Ver Carta" />
        </section>

        {/* Catalog Section (OxbZl sync) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="headline text-lg uppercase tracking-tight text-white">Menú Recomendado</h3>
            <span className="text-[10px] text-secondary font-black tracking-widest uppercase">Ver todo</span>
          </div>
          <div className="space-y-3">
            <CatalogItem name="Flat White XL" price="2.800" image="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&auto=format&fit=crop" />
            <CatalogItem name="Alfajor Artisano" price="1.500" image="https://images.unsplash.com/photo-1623945359620-cc9f7a731309?w=400&auto=format&fit=crop" />
            <CatalogItem name="Avocado Toast" price="4.500" image="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&auto=format&fit=crop" />
          </div>
        </section>

        {/* Business Details (w4KKf sync) */}
        <section className="bg-[#11131d] p-6 rounded-[2.5rem] border border-white/5 space-y-5">
           <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#aaaab7]">Detalles del Negocio</h3>
           <div className="space-y-4">
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Info size={18} />
               </div>
               <p className="text-xs leading-relaxed text-secondary/80 font-medium">{business.description}</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={18} />
               </div>
               <span className="text-xs font-bold text-white uppercase tracking-tight">{business.status} • CIERRA 19:00</span>
             </div>
           </div>
        </section>

        {/* Map Section (fk7Af sync with Cyan marker) */}
        <section className="h-40 bg-[#0F172A] rounded-3xl overflow-hidden relative border border-white/10 group shadow-xl">
           <div className="absolute inset-0 bg-[#00bcd4] opacity-[0.03]"></div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#00bcd4] p-3 rounded-full shadow-[0_0_20px_rgba(0,188,212,0.4)] relative">
                <MapPin size={24} className="text-bg" />
                <div className="absolute inset-0 rounded-full animate-ping bg-[#00bcd4] opacity-20"></div>
              </div>
           </div>
           {/* Placeholder for Map Texture */}
           <div className="absolute bottom-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-[9px] font-black uppercase tracking-widest text-secondary">{business.address}</span>
           </div>
        </section>

        <Button className="w-full h-14 bg-[#00bcd4] text-[#0c0e17] font-black text-[12px] tracking-[0.2em] shadow-[0_8px_32px_rgba(0,188,212,0.2)]" size="lg">
           CÓMO LLEGAR
        </Button>
      </main>
    </motion.div>
  );
};
