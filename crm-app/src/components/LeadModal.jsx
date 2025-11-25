import React from 'react';
import { X, Mail, MessageSquare, Phone, Calendar, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadModal = ({ isOpen, onClose, lead }) => {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-xl">{lead.name}</h3>
            <p className="text-sm text-slate-500">{lead.career} • <span className="text-primary-600 font-medium">{lead.stage}</span></p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Interés</p>
              <p className="font-bold text-slate-900">{lead.interest}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Último Contacto</p>
              <p className="font-bold text-slate-900">{lead.lastContact}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Probabilidad</p>
              <p className="font-bold text-green-600">High (85%)</p>
            </div>
          </div>

          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ClockIcon /> Historial de Automatización
          </h4>
          
          <div className="space-y-6 relative pl-4 border-l-2 border-slate-100 ml-2">
            {[
              { type: 'email', title: 'Email de Bienvenida Enviado', time: 'Hace 2 días', icon: Mail, color: 'bg-blue-100 text-blue-600' },
              { type: 'sms', title: 'SMS: Recordatorio de Documentos', time: 'Ayer 10:00 AM', icon: MessageSquare, color: 'bg-purple-100 text-purple-600' },
              { type: 'call', title: 'Llamada de Asesor (No contesta)', time: 'Hoy 09:30 AM', icon: Phone, color: 'bg-orange-100 text-orange-600' },
              { type: 'system', title: 'Cambio de Estado: Postulante', time: 'Hace 30 min', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
            ].map((event, idx) => (
              <div key={idx} className="relative pl-6">
                <div className={`absolute -left-[21px] top-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center ${event.color}`}>
                  <event.icon size={14} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{event.title}</h5>
                  <p className="text-xs text-slate-400">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-100">
            Agendar Llamada
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white font-bold text-sm rounded-lg hover:bg-primary-700">
            Enviar Email Manual
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default LeadModal;
