import React from 'react';
import { studentsInRisk } from '../data/satData';
import { 
  Search, 
  Filter, 
  AlertCircle, 
  MoreHorizontal, 
  Phone, 
  Calendar, 
  CheckCircle,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RiskMonitor = () => {
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenIntervention = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Monitoreo de Riesgo</h1>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar estudiante..." 
              className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500/20 text-sm w-64"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium text-sm flex items-center gap-2 hover:bg-slate-50">
            <Filter size={18} />
            Filtros
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Estudiante</th>
                <th className="px-6 py-4">Nivel de Riesgo</th>
                <th className="px-6 py-4">Asistencia (SIGAA)</th>
                <th className="px-6 py-4">Actividad LMS</th>
                <th className="px-6 py-4">Financiero</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {studentsInRisk.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.program}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      student.riskLevel === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${student.riskLevel === 'Alto' ? 'bg-red-600' : 'bg-orange-600'}`} />
                      {student.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{student.attendance}</td>
                  <td className="px-6 py-4 text-slate-600">{student.lmsActivity}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold ${student.financial.includes('Atrasado') ? 'text-red-600' : 'text-green-600'}`}>
                      {student.financial}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleOpenIntervention(student)}
                      className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      Registrar Intervención
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Intervention Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg">Nueva Intervención</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-start gap-3">
                  <AlertCircle size={18} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-blue-900">Estudiante: {selectedStudent?.name}</p>
                    <p className="text-xs text-blue-700">Riesgo detectado: {selectedStudent?.riskLevel} - {selectedStudent?.lastAlert}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Tipo de Intervención</label>
                  <select className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-slate-500/20 outline-none">
                    <option>Llamada Telefónica</option>
                    <option>Cita Presencial</option>
                    <option>Correo Electrónico</option>
                    <option>Derivación a Psicología</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Notas del Caso</label>
                  <textarea 
                    rows="3" 
                    className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-slate-500/20 outline-none resize-none"
                    placeholder="Describe el resultado del contacto..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Fecha Seguimiento</label>
                    <input type="date" className="w-full p-2.5 rounded-lg border border-slate-300 text-sm outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Estado</label>
                    <select className="w-full p-2.5 rounded-lg border border-slate-300 text-sm outline-none">
                      <option>En Proceso</option>
                      <option>Cerrado</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold text-sm hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <CheckCircle size={16} />
                  Guardar Registro
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RiskMonitor;
