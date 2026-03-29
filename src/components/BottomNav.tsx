import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Store, ClipboardList, User, Settings } from 'lucide-react';
import { cn } from './ui';

export const BottomNav = () => {
  const tabs = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Mi Negocio', path: '/business-dashboard', icon: Store },
    { name: 'Contratos', path: '/contracts', icon: ClipboardList },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      <div className="bg-[#171924]/80 backdrop-blur-xl border-t border-white/5 px-6 pt-3 pb-8 flex justify-between items-center shadow-[0_-8px_26.25px_rgba(0,0,0,0.5)]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-2xl px-3 py-2',
                isActive 
                  ? 'bg-primary/10 text-primary shadow-[0_4px_20px_rgba(34,211,238,0.1)]' 
                  : 'text-secondary/60 hover:text-white'
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className={cn("transition-transform duration-300", isActive && "scale-110")}>
                  <tab.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn(
                  "text-[9px] font-black tracking-[0.05em] uppercase",
                  isActive ? "text-primary" : "text-secondary/60"
                )}>
                  {tab.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
