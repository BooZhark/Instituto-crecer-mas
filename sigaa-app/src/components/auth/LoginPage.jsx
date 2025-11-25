import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate based on the selected role for the prototype demo
    if (role === 'student') navigate('/student');
    else if (role === 'teacher') navigate('/teacher');
    else if (role === 'admin') navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 z-10 relative"
      >
        {/* Left Side - Form */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-10">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-primary-600/30">
              CM
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido a SIGAA</h1>
            <p className="text-slate-500">Sistema Integrado de Gestión Académica</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Usuario Institucional</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="ej. jperez@crecermas.edu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Contraseña</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                Recordarme
              </label>
              <a href="#" className="text-primary-600 font-medium hover:text-primary-700">¿Olvidaste tu clave?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-primary-600/40 transition-all flex items-center justify-center gap-2 group"
            >
              Ingresar al Portal
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Role Selector for Prototype */}
          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-3 uppercase font-bold tracking-wider">Simular Perfil (Demo)</p>
            <div className="flex gap-2">
              {['student', 'teacher', 'admin'].map((r) => (
                <button 
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    role === r 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {r === 'student' ? 'Estudiante' : r === 'teacher' ? 'Docente' : 'Admin'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Visuals */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Sistema Operativo
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Transformando la educación hacia el futuro digital.
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              Accede a tus notas, gestiona matrículas y conecta con el campus virtual en una sola plataforma integrada.
            </p>
          </div>

          {/* Security Notice */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck size={24} className="text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Aviso de Confidencialidad</h3>
                <p className="text-sm text-primary-100 leading-relaxed">
                  Este sistema procesa datos sensibles bajo la normativa de protección de datos vigente. El acceso es monitoreado y exclusivo para personal autorizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-6 text-center text-slate-400 text-sm">
        © 2025 Instituto Técnico Profesional Crecer Más
      </div>
    </div>
  );
};

export default LoginPage;
