import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  AlertTriangle, 
  LogOut, 
  Menu,
  X,
  Building2,
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isStudent = location.pathname.includes('/student') || location.pathname === '/dashboard';
  const isTeacher = location.pathname.includes('/teacher');
  const isAdmin = location.pathname.includes('/admin');

  const allMenuItems = [
    { icon: LayoutDashboard, label: 'Inicio', path: '/dashboard', roles: ['student', 'admin'] },
    { icon: GraduationCap, label: 'Campus Virtual', path: 'http://localhost:5174', external: true, roles: ['student', 'teacher', 'admin'] },
    { icon: Users, label: 'CRM Educativo', path: 'http://localhost:5176', external: true, roles: ['admin'] },
    { icon: AlertTriangle, label: 'SAT (Alertas)', path: 'http://localhost:5175', external: true, roles: ['teacher', 'admin'] },
  ];

  const menuItems = allMenuItems.filter(item => {
    if (isStudent) return item.roles.includes('student');
    if (isTeacher) return item.roles.includes('teacher');
    if (isAdmin) return item.roles.includes('admin');
    return true;
  });

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-slate-200 shadow-sm z-20 flex flex-col transition-all duration-300"
      >
        <div className="p-6 flex items-center gap-3 h-20 border-b border-slate-100">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
            <div className="font-bold text-lg">CM</div>
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="font-bold text-slate-800 leading-tight">SIGAA</h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Gestión Académica</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          <div className="mb-6">
            <p className={`px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
              Navegación
            </p>
            {menuItems.map((item) => {
              const commonClasses = `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 group ${
                location.pathname === item.path 
                  ? 'bg-primary-50 text-primary-700 font-medium' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`;

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClasses}
                  >
                    <item.icon size={20} className="group-hover:text-primary-600 transition-colors" />
                    {isSidebarOpen && (
                      <div className="flex-1 flex items-center justify-between">
                        <span>{item.label}</span>
                        <div className="opacity-50 text-[10px] border border-slate-200 rounded px-1">EXT</div>
                      </div>
                    )}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={commonClasses}
                >
                  <item.icon size={20} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          {isSidebarOpen && (
            <div className="mb-4 p-3 bg-primary-50 rounded-xl border border-primary-100 flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary-800">Sistema Operativo</p>
                <p className="text-[10px] text-primary-600">Sincronizado</p>
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
          <button onClick={toggleSidebar} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-900">Juan Pérez</p>
              <p className="text-xs text-slate-500">Estudiante de Ingeniería</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Juan+Perez&background=0ea5e9&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
