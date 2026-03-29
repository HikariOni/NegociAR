import { motion } from 'framer-motion';
import { Lock, Globe } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col min-h-screen px-6 pt-24 pb-12 w-full max-w-xl mx-auto"
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <Lock className="text-primary" size={20} />
            <span className="text-xl font-extrabold tracking-tighter headline">NegociaAR</span>
          </div>
        </div>
      </header>

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary opacity-[0.05] blur-[120px] rounded-full -z-10"></div>

      <div className="text-center mb-10 mt-12">
        <h1 className="headline font-extrabold text-4xl md:text-5xl tracking-tighter text-text mb-4 leading-tight uppercase">
          Tu negocio, <span className="text-primary italic">elevado</span>
        </h1>
        <p className="text-secondary text-lg leading-relaxed mono uppercase tracking-tight">
          una plataforma ajustada a vos
        </p>
      </div>

      <div className="glass p-8 rounded-2xl border border-white/5 shadow-2xl">
        <div className="flex bg-inset p-1 rounded-lg mb-8">
          <button className="flex-1 py-1.5 px-6 rounded-md bg-primary text-bg font-bold text-xs uppercase transition-all shadow-primary/20">
            Ingresar
          </button>
          <Link to="/register" className="flex-1 py-1.5 px-6 rounded-md text-text-muted font-bold text-xs uppercase hover:text-text transition-all text-center">
            Crear cuenta
          </Link>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <Input label="Email" placeholder="nombre@negocia.ar" type="email" />
          <Input label="Contraseña" placeholder="••••••••" type="password" />

          <Button className="w-full text-lg" size="lg">CONTINUAR</Button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-grow h-[1px] bg-white/10"></div>
          <span className="mx-4 text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">O ingresar con</span>
          <div className="flex-grow h-[1px] bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Button variant="secondary" className="gap-3 w-full capitalize" size="md">
            <Globe size={18} />
            Google
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-[10px] text-text-muted px-8 leading-relaxed uppercase tracking-[0.15em] font-bold">
        Al continuar en <span className="text-text">NegociaAR</span>, aceptas nuestros <a className="text-primary hover:underline" href="#">Términos</a> y <a className="text-primary hover:underline" href="#">Privacidad</a>.
      </p>
    </motion.div>
  );
};
