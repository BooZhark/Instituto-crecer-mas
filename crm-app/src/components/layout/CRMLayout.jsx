import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Kanban, 
  Users, 
  Megaphone, 
  LogOut, 
  ShieldCheck,
  Briefcase,
  Menu
} from 'lucide-react';
import { motion } from 'framer-motion';

const CRMLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Kanban, label: 'Pipeline de Ventas', path: '/pipeline' },
    { icon: Users, label: 'Base de Contactos', path: '/contacts' },
    { icon: Megaphone, label: 'Campañas', path: '/campaigns' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-slate-200 flex flex-col shadow-sm z-20 transition-all duration-300"
      >
        <div className="p-6 flex items-center gap-3 h-20 border-b border-slate-100">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
            <Briefcase size={24} />
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="font-bold text-slate-800 leading-tight tracking-tight">CRM</h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Admisión</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          <div className="mb-6">
            <p className={`px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
              Navegación
            </p>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 ${
                  location.pathname === item.path 
                    ? 'bg-primary-50 text-primary-700 font-medium' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon size={20} className={location.pathname === item.path ? 'text-primary-600' : 'text-slate-400'} />
                {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          {isSidebarOpen && (
            <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-600" />
              <div>
                <p className="text-[10px] font-bold text-slate-600">Seguridad de Datos</p>
                <p className="text-[10px] text-slate-400">Cumplimiento Normativo</p>
              </div>
            </div>
          )}
          <button className="flex items-center gap-3 w-full px-4 py-2 text-slate-500 hover:text-red-600 transition-colors text-sm rounded-lg hover:bg-red-50">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Cerrar Sesión</span>}
          </button>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-10">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-900">Ejecutivo de Admisión</p>
              <p className="text-xs text-slate-500">Sede Central</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=User+CRM&background=6366f1&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;
