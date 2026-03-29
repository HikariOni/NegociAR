import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col min-h-screen px-6 pt-24 pb-12 w-full max-w-xl mx-auto"
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-white transition-all">
            <ArrowLeft size={20} />
            <span className="text-xl font-extrabold tracking-tighter headline">NegociaAR</span>
          </Link>
        </div>
      </header>

      <div className="mb-10">
        <h1 className="headline font-extrabold text-3xl tracking-tighter text-text mb-4 leading-tight uppercase">
          CREAR CUENTA
        </h1>
        <p className="text-secondary text-base leading-relaxed mono uppercase tracking-tight">
          Únete a la comunidad local
        </p>
      </div>

      <div className="glass p-8 rounded-2xl border border-white/5 shadow-2xl">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/onboarding'); }}>
          <Input label="Nombre completo" placeholder="Juan Pérez" />
          <Input label="Email" placeholder="juan@negocia.ar" type="email" />
          <Input label="Contraseña" placeholder="••••••••" type="password" />

          <div className="flex items-start gap-4 p-4 bg-inset/50 rounded-xl border border-white/5">
            <input type="checkbox" className="mt-1 accent-primary" id="terms" required />
            <label htmlFor="terms" className="text-[10px] text-text-muted font-bold leading-relaxed uppercase tracking-widest">
              Acepto los términos y condiciones de la comunidad NegociaAR
            </label>
          </div>

          <Button className="w-full text-lg" size="lg">REGISTRARSE</Button>
        </form>

        <p className="mt-8 text-center text-[10px] text-text-muted px-8 leading-relaxed uppercase tracking-[0.15em] font-bold">
          ¿Ya tienes cuenta? <Link to="/" className="text-primary hover:underline">Ingresar</Link>
        </p>
      </div>
    </motion.div>
  );
};
