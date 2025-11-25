import React from 'react';
import { adminData } from '../data/mockData';
import { DollarSign, TrendingUp, Users, FileText, Download, PieChart } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Panel Administrativo</h1>
          <p className="text-slate-500">Visión general y reportes de gestión</p>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2 h-fit my-auto">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Sistema Operativo
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1">Ingresos Totales</p>
            <h3 className="text-2xl font-bold text-slate-900">{adminData.income}</h3>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1 mt-2">
              <TrendingUp size={12} />
              +12.5% vs mes anterior
            </span>
          </div>
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1">Pagos Pendientes</p>
            <h3 className="text-2xl font-bold text-slate-900">{adminData.pending}</h3>
            <span className="text-orange-600 text-xs font-bold flex items-center gap-1 mt-2">
              85 estudiantes
            </span>
          </div>
          <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1">Matrícula Total</p>
            <h3 className="text-2xl font-bold text-slate-900">{adminData.enrollmentStats.total}</h3>
            <span className="text-blue-600 text-xs font-bold flex items-center gap-1 mt-2">
              {adminData.enrollmentStats.new} nuevos ingresos
            </span>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Users size={24} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <div className="p-1.5 bg-slate-100 text-slate-600 rounded-lg">
                <PieChart size={20} />
              </div>
              Resumen de Tesorería
            </h2>
            <button className="text-primary-600 text-sm font-medium hover:underline">Ver Detalle</button>
          </div>
          
          <div className="h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 mb-4">
            <p className="text-slate-400 text-sm">Gráfico de Flujo de Caja (Simulado)</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-slate-700">Matrículas</span>
              </div>
              <span className="text-sm font-bold text-slate-900">65%</span>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-700">Mensualidades</span>
              </div>
              <span className="text-sm font-bold text-slate-900">25%</span>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-medium text-slate-700">Otros Servicios</span>
              </div>
              <span className="text-sm font-bold text-slate-900">10%</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg">
                <FileText size={20} />
              </div>
              Reportes Rápidos
            </h2>
          </div>

          <div className="grid gap-4 mb-8">
            {[
              { title: "Tasa de Deserción", desc: "Análisis comparativo por periodo", color: "bg-red-50 text-red-600" },
              { title: "Estudiantes por Programa", desc: "Distribución de matrícula vigente", color: "bg-blue-50 text-blue-600" },
              { title: "Morosidad General", desc: "Reporte de cuentas por cobrar", color: "bg-orange-50 text-orange-600" },
              { title: "Rendimiento Académico", desc: "Promedios por carrera y nivel", color: "bg-green-50 text-green-600" }
            ].map((report, idx) => (
              <div key={idx} className="group p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${report.color}`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{report.title}</h4>
                    <p className="text-xs text-slate-500">{report.desc}</p>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Acceso al Ecosistema</h3>
            <div className="grid grid-cols-3 gap-3">
              <a href="http://localhost:5176" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary-400 hover:shadow-md transition-all text-center group">
                <div className="w-8 h-8 mx-auto bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Users size={16} />
                </div>
                <p className="text-xs font-bold text-slate-700">CRM Educativo</p>
              </a>
              <a href="http://localhost:5175" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-400 hover:shadow-md transition-all text-center group">
                <div className="w-8 h-8 mx-auto bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <AlertTriangle size={16} />
                </div>
                <p className="text-xs font-bold text-slate-700">SAT Alerta</p>
              </a>
              <a href="http://localhost:5174" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-center group">
                <div className="w-8 h-8 mx-auto bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText size={16} />
                </div>
                <p className="text-xs font-bold text-slate-700">Campus Virtual</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

import { AlertTriangle } from 'lucide-react';
export default AdminDashboard;
