import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, CreditCard, FileText, AlertCircle } from 'lucide-react';
import { studentData } from '../data/mockData';

const StudentDashboard = () => {
  const [enrollmentStep, setEnrollmentStep] = React.useState(1);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mi Espacio Estudiantil</h1>
          <p className="text-slate-500">Gestión académica y administrativa</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium shadow-sm hover:bg-slate-50 transition-colors">
            Descargar Certificado
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-colors">
            Nueva Solicitud
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="p-1.5 bg-primary-100 text-primary-600 rounded-lg">
                  <FileText size={20} />
                </div>
                Matrícula Digital 2025-I
              </h2>
              <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                Periodo Abierto
              </span>
            </div>

            <div className="flex items-center mb-8 relative">
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-100 -z-10" />
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step <= enrollmentStep 
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
                        : 'bg-white border-2 border-slate-200 text-slate-400'
                    }`}
                  >
                    {step < enrollmentStep ? <CheckCircle size={16} /> : step}
                  </div>
                  <span className={`text-xs font-medium ${step <= enrollmentStep ? 'text-primary-700' : 'text-slate-400'}`}>
                    {step === 1 ? 'Selección' : step === 2 ? 'Pago' : 'Confirmación'}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              {enrollmentStep === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-semibold text-slate-900 mb-4">Selección de Periodo Académico</h3>
                  <div className="space-y-3">
                    {[
                      { id: '2025-1', label: '2025 - Primer Semestre', status: 'Abierto', active: true },
                      { id: '2025-2', label: '2025 - Segundo Semestre', status: 'Próximamente', active: false }
                    ].map((period) => (
                      <label key={period.id} className={`flex items-center p-4 bg-white rounded-xl border cursor-pointer transition-all ${
                        period.active 
                          ? 'border-primary-500 ring-1 ring-primary-500 shadow-sm' 
                          : 'border-slate-200 opacity-60 cursor-not-allowed'
                      }`}>
                        <input 
                          type="radio" 
                          name="period" 
                          defaultChecked={period.active} 
                          disabled={!period.active}
                          className="w-5 h-5 text-primary-600 border-slate-300 focus:ring-primary-500" 
                        />
                        <div className="ml-4 flex-1">
                          <span className={`block text-sm font-bold ${period.active ? 'text-slate-900' : 'text-slate-500'}`}>
                            {period.label}
                          </span>
                          <span className="text-xs text-slate-500">Marzo - Julio 2025</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          period.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {period.status}
                        </span>
                      </label>
                    ))}
                  </div>
                  <button 
                    onClick={() => setEnrollmentStep(2)}
                    className="mt-6 w-full py-3 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-primary-600/30 transition-all"
                  >
                    Continuar al Pago
                  </button>
                </motion.div>
              )}

              {enrollmentStep === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-semibold text-slate-900 mb-4">Resumen de Pago</h3>
                  <div className="bg-white p-4 rounded-lg border border-slate-200 mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">Matrícula Semestral</span>
                      <span className="font-medium text-slate-900">$150.000</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">Seguro Estudiantil</span>
                      <span className="font-medium text-slate-900">$12.000</span>
                    </div>
                    <div className="border-t border-slate-100 my-2 pt-2 flex justify-between font-bold text-slate-900">
                      <span>Total</span>
                      <span>$162.000</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setEnrollmentStep(3)}
                    className="w-full py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Confirmar Pago
                  </button>
                </motion.div>
              )}

              {enrollmentStep === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">¡Matrícula Exitosa!</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Se ha enviado el comprobante a tu correo institucional. Los datos se han sincronizado con el CRM.
                  </p>
                  <div className="p-3 bg-blue-50 text-blue-700 text-xs rounded-lg border border-blue-100 inline-flex items-center gap-2">
                    <AlertCircle size={14} />
                    Datos sincronizados con CRM Educativo
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg">
                <BookOpen size={20} />
              </div>
              Mi Expediente Académico
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Asignatura</th>
                    <th className="px-4 py-3">Nota</th>
                    <th className="px-4 py-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentData.grades.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900">{item.subject}</td>
                      <td className="px-4 py-3">
                        <span className={`font-bold ${item.grade >= 4.0 ? 'text-slate-900' : 'text-red-600'}`}>
                          {item.grade}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          item.status === 'Aprobado' ? 'bg-green-100 text-green-700' :
                          item.status === 'Riesgo' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full -mr-8 -mt-8" />
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CreditCard size={20} className="text-primary-600" />
              Estado Financiero
            </h3>
            <div className="text-center py-4">
              <span className="block text-sm text-slate-500 mb-1">Estado Actual</span>
              <span className="text-2xl font-bold text-green-600 bg-green-50 px-4 py-1 rounded-full inline-block mb-4">
                {studentData.paymentStatus}
              </span>
              <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-4">
                <span className="text-slate-500">Próximo Pago</span>
                <span className="font-medium text-slate-900">{studentData.nextPayment}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock size={20} className="text-orange-500" />
              Asistencia General
            </h3>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeDasharray={`${studentData.attendance}, 100`}
                    className="animate-[spin_1s_ease-out_reverse]"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-2xl font-bold text-slate-900">{studentData.attendance}%</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-slate-400 mt-2">
              Datos sincronizados en tiempo real para SAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
