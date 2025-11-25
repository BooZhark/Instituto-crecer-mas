import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseContent } from '../data/lmsData';
import { 
  Video, 
  FileText, 
  CheckSquare, 
  ChevronDown, 
  Play, 
  MessageCircle,
  Users,
  Award
} from 'lucide-react';

const CourseView = () => {
  const { id } = useParams();

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content Area */}
      <div className="lg:col-span-2 space-y-6">
        {/* Hybrid Class Module */}
        <div className="bg-gradient-to-r from-[#464775] to-[#6264A7] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">EN VIVO</span>
              <p className="text-sm font-medium text-white/80">Sesión Híbrida Actual</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Laboratorio de Redes Neuronales</h2>
            <p className="text-white/80 text-sm mb-6 max-w-md">
              Únete a la sesión en tiempo real. La asistencia se registrará automáticamente y se sincronizará con el SIGAA.
            </p>

            <button className="bg-white text-[#464775] px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-colors shadow-xl">
              <div className="w-6 h-6 bg-[#464775] rounded flex items-center justify-center text-white text-xs font-bold">T</div>
              Unirse vía Microsoft Teams
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 text-lg">Contenido del Curso</h3>
          
          {courseContent.map((module) => (
            <div key={module.id} className="bg-white border border-surface-200 rounded-xl overflow-hidden">
              <div className="p-4 bg-surface-50 border-b border-surface-200 flex items-center justify-between cursor-pointer hover:bg-surface-100 transition-colors">
                <h4 className="font-bold text-slate-800">{module.module}</h4>
                <ChevronDown size={20} className="text-slate-400" />
              </div>
              <div className="divide-y divide-surface-100">
                {module.items.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors group">
                    <div className={`p-2 rounded-lg ${
                      item.type === 'video' ? 'bg-red-100 text-red-600' :
                      item.type === 'doc' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'live' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {item.type === 'video' ? <Play size={18} /> :
                       item.type === 'doc' ? <FileText size={18} /> :
                       item.type === 'live' ? <Video size={18} /> :
                       <CheckSquare size={18} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-slate-500">
                        {item.duration || item.pages || item.due || item.status}
                      </p>
                    </div>
                    <button className="text-xs font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-lg hover:border-brand-500 hover:text-brand-600 transition-colors">
                      Ver
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Right */}
      <div className="space-y-6">
        {/* Instructor */}
        <div className="bg-white p-6 rounded-2xl border border-surface-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Instructor</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Alan+Turing&background=0f766e&color=fff" alt="Instructor" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Dr. Alan Turing</p>
              <p className="text-xs text-slate-500">Ciencias de la Computación</p>
            </div>
          </div>
          <button className="w-full py-2 border border-surface-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-surface-50 flex items-center justify-center gap-2">
            <MessageCircle size={16} />
            Enviar Mensaje
          </button>
        </div>

        {/* Classmates */}
        <div className="bg-white p-6 rounded-2xl border border-surface-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Compañeros</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">24 Online</span>
          </div>
          <div className="flex -space-x-2 overflow-hidden mb-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-100 flex items-center justify-center text-xs font-bold text-slate-500">
              +15
            </div>
          </div>
        </div>

        {/* Gamification / Engagement */}
        <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-6 rounded-2xl text-white shadow-lg shadow-brand-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-yellow-300" />
            <h3 className="font-bold">Tu Progreso</h3>
          </div>
          <p className="text-sm text-brand-100 mb-4">Estás en el top 10% de la clase. ¡Sigue así!</p>
          <div className="w-full bg-black/20 rounded-full h-2 mb-1">
            <div className="bg-yellow-400 h-full rounded-full" style={{ width: '85%' }} />
          </div>
          <p className="text-xs text-right text-brand-200">850/1000 XP</p>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
