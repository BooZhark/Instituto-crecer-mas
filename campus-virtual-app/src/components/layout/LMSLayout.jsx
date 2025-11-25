import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Layout, 
  Calendar, 
  MessageSquare, 
  LogOut, 
  Menu,
  Activity,
  ExternalLink,
  Wifi
} from 'lucide-react';
import { motion } from 'framer-motion';

const LMSLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface-50 overflow-hidden font-sans">
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-surface-200 shadow-sm z-20 flex flex-col transition-all duration-300"
      >
        <div className="p-6 flex items-center gap-3 h-20 border-b border-surface-100">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-600/20">
            <BookOpen size={24} />
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="font-bold text-slate-800 leading-tight">Campus Virtual</h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Crecer Más</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          <div className="mb-6">
            <p className={`px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
              Aprendizaje
            </p>
            {[
              { icon: Layout, label: 'Mis Cursos', path: '/' },
              { icon: Calendar, label: 'Calendario', path: '/calendar' },
              { icon: MessageSquare, label: 'Mensajes', path: '/messages' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 ${
                  location.pathname === item.path 
                    ? 'bg-brand-50 text-brand-700 font-medium' 
                    : 'text-slate-500 hover:bg-surface-100 hover:text-slate-900'
                }`}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </div>

          <div>
            <p className={`px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
              Ecosistema
            </p>
            {[
              { icon: Activity, label: 'Mi Expediente (SIGAA)', path: '#', external: true },
              { icon: ExternalLink, label: 'Biblioteca Digital', path: '#', external: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-surface-100 hover:text-slate-900 transition-all duration-200 mb-1 group"
              >
                <item.icon size={20} className="group-hover:text-brand-600 transition-colors" />
                {isSidebarOpen && (
                  <div className="flex-1 flex items-center justify-between">
                    <span>{item.label}</span>
                    <ExternalLink size={12} className="opacity-50" />
                  </div>
                )}
              </a>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-surface-100">
          {isSidebarOpen && (
            <div className="mb-4 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-800">Sistema Operativo</p>
                <p className="text-[10px] text-brand-600">Disponibilidad: 99.9%</p>
              </div>
            </div>
          )}
          <button className="flex items-center gap-3 w-full px-4 py-2 text-slate-500 hover:text-red-600 transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium text-sm">Cerrar Sesión</span>}
          </button>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-10">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
              <Wifi size={14} className="text-green-600" />
              <span className="text-xs font-medium text-green-700">Conexión Estable</span>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-900">Juan Pérez</p>
              <p className="text-xs text-slate-500">Estudiante de Ingeniería</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-100 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Juan+Perez&background=14b8a6&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LMSLayout;
