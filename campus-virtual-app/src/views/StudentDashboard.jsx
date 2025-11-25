import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/lmsData';
import { Clock, MoreVertical, PlayCircle, AlertCircle, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hola, Juan 👋</h1>
          <p className="text-slate-500">Aquí tienes el resumen de tu actividad académica.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-xl border border-surface-200 shadow-sm">
          <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Nivel de Engagement (SAT)</p>
            <div className="w-32 h-2 bg-surface-100 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-brand-500 w-[85%] rounded-full" />
            </div>
          </div>
          <span className="text-sm font-bold text-brand-700 ml-2">Alto</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-orange-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-orange-800 text-sm">Tarea Pendiente</h4>
            <p className="text-xs text-orange-700 mt-1">"Ensayo de Ética" vence hoy a las 23:59.</p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
          <PlayCircle className="text-blue-500 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-blue-800 text-sm">Clase en Vivo</h4>
            <p className="text-xs text-blue-700 mt-1">Tu clase de IA comienza en 15 minutos.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Mis Cursos Activos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id} className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col">
              <div className="h-32 bg-slate-200 relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider bg-brand-500/90 px-2 py-0.5 rounded w-fit mb-1">Semestre I</p>
                  <h3 className="font-bold text-lg leading-tight">{course.title}</h3>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {course.instructor.charAt(0)}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{course.instructor}</span>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical size={16} />
                  </button>
                </div>

                <div className="mt-auto space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500">Progreso</span>
                      <span className="font-bold text-slate-700">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 rounded-full" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-surface-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Clock size={14} />
                      <span>{course.nextSession}</span>
                    </div>
                    <span className="text-xs font-bold text-brand-600 group-hover:underline">Ir al curso →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
