import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, FileText } from 'lucide-react';

const CalendarView = () => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // Simulated events
  const events = [
    { day: 21, title: "Clase: Inteligencia Artificial", time: "14:00 - 16:00", type: "live", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { day: 21, title: "Entrega: Ensayo Ética", time: "23:59", type: "task", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { day: 22, title: "Clase: Desarrollo Móvil", time: "10:00 - 12:00", type: "live", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { day: 24, title: "Quiz: Redes Neuronales", time: "Todo el día", type: "exam", color: "bg-red-100 text-red-700 border-red-200" },
    { day: 25, title: "Entrega Proyecto Final", time: "23:59", type: "task", color: "bg-orange-100 text-orange-700 border-orange-200" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Calendario Académico</h1>
          <p className="text-slate-500">Noviembre 2025</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-surface-100 rounded-lg border border-surface-200">
            <ChevronLeft size={20} className="text-slate-500" />
          </button>
          <button className="px-4 py-2 bg-white border border-surface-200 rounded-lg text-sm font-medium text-slate-700">
            Hoy
          </button>
          <button className="p-2 hover:bg-surface-100 rounded-lg border border-surface-200">
            <ChevronRight size={20} className="text-slate-500" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-surface-200 shadow-sm overflow-hidden">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-surface-200 bg-surface-50">
          {days.map((day) => (
            <div key={day} className="py-3 text-center text-sm font-bold text-slate-500 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 auto-rows-fr min-h-[600px]">
          {Array.from({ length: 35 }).map((_, i) => {
            const dayNum = i - 2; // Offset to start month correctly (simulated)
            const isCurrentMonth = dayNum > 0 && dayNum <= 30;
            const dayEvents = events.filter(e => e.day === dayNum);
            const isToday = dayNum === currentDay;

            return (
              <div 
                key={i} 
                className={`min-h-[120px] border-b border-r border-surface-100 p-2 transition-colors ${
                  isCurrentMonth ? 'bg-white hover:bg-surface-50' : 'bg-surface-50/50'
                }`}
              >
                {isCurrentMonth && (
                  <>
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium mb-2 ${
                      isToday ? 'bg-brand-600 text-white shadow-md' : 'text-slate-700'
                    }`}>
                      {dayNum}
                    </div>
                    <div className="space-y-1.5">
                      {dayEvents.map((event, idx) => (
                        <div key={idx} className={`px-2 py-1.5 rounded-lg border text-[10px] font-medium truncate cursor-pointer hover:opacity-80 ${event.color}`}>
                          <div className="flex items-center gap-1 mb-0.5">
                            {event.type === 'live' ? <Video size={10} /> : 
                             event.type === 'task' ? <Clock size={10} /> : 
                             <FileText size={10} />}
                            <span>{event.time}</span>
                          </div>
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
