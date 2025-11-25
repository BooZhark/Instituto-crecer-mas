import React from 'react';
import { teacherData } from '../data/mockData';
import { Users, AlertTriangle, Calendar, Save, Search } from 'lucide-react';

const TeacherDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Portal Docente</h1>
          <p className="text-slate-500">Gestión de clases y seguimiento estudiantil</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                  <Users size={20} />
                </div>
                Mesa de Trabajo
              </h2>
              <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2">
                {teacherData.classes.map(c => (
                  <option key={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar estudiante..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-primary-700 transition-colors">
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium">
                  <tr>
                    <th className="px-6 py-3">Estudiante</th>
                    <th className="px-6 py-3 text-center">Parcial 1</th>
                    <th className="px-6 py-3 text-center">Parcial 2</th>
                    <th className="px-6 py-3 text-center">Final</th>
                    <th className="px-6 py-3 text-center">Asistencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">Estudiante {i}</td>
                      <td className="px-6 py-4 text-center">
                        <input type="text" className="w-12 text-center border border-slate-200 rounded p-1 focus:border-primary-500 outline-none" defaultValue={(Math.random() * 3 + 4).toFixed(1)} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <input type="text" className="w-12 text-center border border-slate-200 rounded p-1 focus:border-primary-500 outline-none" defaultValue="-" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <input type="text" className="w-12 text-center border border-slate-200 rounded p-1 focus:border-primary-500 outline-none" defaultValue="-" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">9{i}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="p-1.5 bg-red-100 text-red-600 rounded-lg">
                  <AlertTriangle size={20} />
                </div>
                Alertas Tempranas
              </h2>
              <a 
                href="http://localhost:5175" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold px-2 py-1 bg-red-50 text-red-600 rounded border border-red-100 hover:bg-red-100 transition-colors cursor-pointer flex items-center gap-1"
              >
                SAT CONECTADO
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/>
              </a>
            </div>

            <div className="space-y-4">
              {teacherData.alerts.map((alert) => (
                <div key={alert.id} className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                  <div className="mt-1">
                    <AlertTriangle size={18} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{alert.student}</h4>
                    <p className="text-xs text-red-700 font-medium mt-0.5">{alert.type}</p>
                    <p className="text-xs text-slate-500 mt-1">{alert.course}</p>
                  </div>
                  <div className="ml-auto">
                    <a 
                      href="http://localhost:5175/monitor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-white border border-red-200 text-red-600 px-2 py-1 rounded hover:bg-red-50 transition-colors block"
                    >
                      Ver Detalle
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Estas alertas son generadas automáticamente por el Sistema de Alerta Temprana (SAT) basado en asistencia y notas.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white shadow-lg shadow-primary-600/20">
            <h3 className="font-bold text-lg mb-2">Próxima Clase</h3>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-primary-200" />
              <div>
                <p className="font-medium">Programación Web</p>
                <p className="text-sm text-primary-200">Sala Híbrida 304</p>
              </div>
            </div>
            <a 
              href="http://localhost:5174"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium transition-colors block text-center"
            >
              Iniciar Clase Híbrida (Campus Virtual)
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
