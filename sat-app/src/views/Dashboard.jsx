import React from 'react';
import { riskMetrics } from '../data/satData';
import { 
  Users, 
  AlertTriangle, 
  TrendingDown, 
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Alto Riesgo</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{riskMetrics.totalHighRisk}</h3>
            </div>
            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
              <AlertTriangle size={24} />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-red-600">
            <ArrowUpRight size={14} />
            <span>+5 nuevos hoy</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Alertas (24h)</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{riskMetrics.alerts24h}</h3>
            </div>
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Activity size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-400">Requieren revisión inmediata</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-slate-700 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Deserción Proyectada</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{riskMetrics.dropoutRate}</h3>
            </div>
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <TrendingDown size={24} />
            </div>
          </div>
          <p className="text-xs text-slate-400">Basado en modelo predictivo v2.1</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6">Distribución de Riesgo Estudiantil</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskMetrics.riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskMetrics.riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Alertas Recientes</h3>
            <button className="text-xs font-bold text-slate-500 hover:text-slate-800">Ver Todo</button>
          </div>
          <div className="space-y-4">
            {[
              { msg: "Baja asistencia crítica detectada", student: "Carlos Ruiz", time: "Hace 2h", type: "high" },
              { msg: "Ausencia prolongada en LMS", student: "Miguel Ángel", time: "Hace 3h", type: "high" },
              { msg: "Calificación parcial bajo el promedio", student: "Ana Gómez", time: "Hace 5h", type: "medium" },
            ].map((alert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className={`w-2 h-2 mt-1.5 rounded-full ${alert.type === 'high' ? 'bg-red-500' : 'bg-orange-500'}`} />
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800">{alert.msg}</p>
                  <p className="text-xs text-slate-500">Estudiante: {alert.student}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
