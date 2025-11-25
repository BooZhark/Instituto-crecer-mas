import React from 'react';
import { campaigns } from '../data/crmData';
import { Mail, MessageSquare, Phone, Clock, PlayCircle, PauseCircle, ArrowRight } from 'lucide-react';

const Campaigns = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Automatización de Marketing</h1>
        <button className="px-4 py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
          + Nueva Campaña
        </button>
      </div>

      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${campaign.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {campaign.status === 'Active' ? <PlayCircle size={24} /> : <PauseCircle size={24} />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{campaign.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{campaign.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-bold text-slate-900">1,240</p>
                  <p className="text-xs text-slate-500">Enviados</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900">45%</p>
                  <p className="text-xs text-slate-500">Apertura</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900">12%</p>
                  <p className="text-xs text-slate-500">Clics</p>
                </div>
              </div>
            </div>

            <div className="p-8 overflow-x-auto">
              <div className="flex items-center min-w-max">
                {campaign.steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    {/* Step Card */}
                    <div className="relative group">
                      <div className="w-64 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-primary-300 hover:shadow-md transition-all z-10 relative">
                        <div className="flex justify-between items-start mb-3">
                          <div className={`p-2 rounded-lg ${
                            step.type === 'email' ? 'bg-blue-50 text-blue-600' :
                            step.type === 'sms' ? 'bg-purple-50 text-purple-600' :
                            step.type === 'call' ? 'bg-orange-50 text-orange-600' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {step.type === 'email' ? <Mail size={18} /> :
                             step.type === 'sms' ? <MessageSquare size={18} /> :
                             step.type === 'call' ? <Phone size={18} /> :
                             <Clock size={18} />}
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                            {step.delay}
                          </span>
                        </div>
                        <p className="font-bold text-slate-800 text-sm">{step.label}</p>
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    {idx < campaign.steps.length - 1 && (
                      <div className="flex items-center justify-center w-16 text-slate-300">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
                
                {/* End Node */}
                <div className="flex items-center justify-center w-16 text-slate-300">
                  <ArrowRight size={24} />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-300 font-bold text-xs">
                  FIN
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
