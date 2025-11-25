import React from 'react';
import { initialLeads } from '../data/crmData';
import { MoreHorizontal, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import LeadModal from '../components/LeadModal';

const Pipeline = () => {
  const [leads, setLeads] = React.useState(initialLeads);
  const [selectedLead, setSelectedLead] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const stages = [
    { id: 'Interesado', color: 'bg-slate-100 border-slate-200' },
    { id: 'Contactado', color: 'bg-blue-50 border-blue-100' },
    { id: 'Postulante', color: 'bg-indigo-50 border-indigo-100' },
    { id: 'Matriculado', color: 'bg-green-50 border-green-100' },
  ];

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex gap-6 overflow-x-auto pb-4">
      {stages.map((stage) => (
        <div key={stage.id} className={`flex-shrink-0 w-80 flex flex-col rounded-xl border ${stage.color}`}>
          {/* Column Header */}
          <div className="p-4 border-b border-white/50 flex items-center justify-between">
            <h3 className="font-bold text-slate-700">{stage.id}</h3>
            <span className="bg-white/50 px-2 py-0.5 rounded text-xs font-bold text-slate-500">
              {leads.filter(l => l.stage === stage.id).length}
            </span>
          </div>

          {/* Cards Container */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {leads.filter(l => l.stage === stage.id).map((lead) => (
              <div 
                key={lead.id}
                onClick={() => handleLeadClick(lead)}
                className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-primary-300 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    lead.interest === 'Alto' ? 'bg-green-100 text-green-700' :
                    lead.interest === 'Medio' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {lead.interest} Interés
                  </span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
                
                <h4 className="font-bold text-slate-900 mb-0.5">{lead.name}</h4>
                <p className="text-xs text-slate-500 mb-3">{lead.career}</p>
                
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock size={12} />
                  <span>{lead.lastContact}</span>
                </div>

                {/* Transfer Action for Matriculado */}
                {stage.id === 'Matriculado' && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <button className="w-full py-1.5 bg-green-600 text-white rounded text-xs font-bold flex items-center justify-center gap-1 hover:bg-green-700 transition-colors">
                      <CheckCircle size={12} />
                      Transferir a SIGAA
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        lead={selectedLead} 
      />
    </div>
  );
};

export default Pipeline;
