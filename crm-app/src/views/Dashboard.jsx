import React from 'react';
import { funnelMetrics } from '../data/crmData';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowUpRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Tasa de Conversión</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{funnelMetrics.conversionRate}</h3>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <TrendingUp size={24} />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-green-600">
            <ArrowUpRight size={14} />
            <span>+2.4% vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Leads Nuevos (Hoy)</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{funnelMetrics.newLeadsToday}</h3>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-400">Meta diaria: 50 leads</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Valor Potencial</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{funnelMetrics.potentialValue}</h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <DollarSign size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-400">Pipeline ponderado</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-6">Embudo de Conversión</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={funnelMetrics.stages}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                {funnelMetrics.stages.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
