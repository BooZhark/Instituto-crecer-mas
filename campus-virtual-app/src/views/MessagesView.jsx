import React from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const MessagesView = () => {
  const [activeChat, setActiveChat] = React.useState(1);

  const contacts = [
    { id: 1, name: "Dr. Alan Turing", role: "Docente IA", avatar: "https://ui-avatars.com/api/?name=Alan+Turing&background=0f766e&color=fff", lastMsg: "Recuerden revisar el material para mañana.", time: "10:30", unread: 2 },
    { id: 2, name: "Ada Lovelace", role: "Docente Móvil", avatar: "https://ui-avatars.com/api/?name=Ada+Lovelace&background=6366f1&color=fff", lastMsg: "Excelente trabajo en el proyecto.", time: "Ayer", unread: 0 },
    { id: 3, name: "Soporte Técnico", role: "Admin", avatar: "https://ui-avatars.com/api/?name=Soporte&background=ef4444&color=fff", lastMsg: "Tu ticket #402 ha sido resuelto.", time: "Lun", unread: 0 },
  ];

  const messages = [
    { id: 1, sender: "other", text: "Hola Juan, ¿cómo vas con el laboratorio de redes neuronales?", time: "10:15" },
    { id: 2, sender: "me", text: "Hola Dr. Turing. Voy bien, pero tengo una duda sobre la función de activación.", time: "10:20" },
    { id: 3, sender: "other", text: "Entiendo. Podemos revisarlo en la sesión de mañana, o te puedo enviar un recurso extra.", time: "10:22" },
    { id: 4, sender: "other", text: "Recuerden revisar el material para mañana.", time: "10:30" },
  ];

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-surface-200 shadow-sm overflow-hidden flex">
      {/* Sidebar List */}
      <div className="w-80 border-r border-surface-200 flex flex-col bg-surface-50/50">
        <div className="p-4 border-b border-surface-200">
          <h2 className="font-bold text-slate-900 mb-4">Mensajes</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`p-4 flex gap-3 cursor-pointer transition-colors hover:bg-white ${
                activeChat === contact.id ? 'bg-white border-l-4 border-brand-500 shadow-sm' : 'border-l-4 border-transparent'
              }`}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                {contact.id === 1 && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className={`text-sm font-bold truncate ${activeChat === contact.id ? 'text-slate-900' : 'text-slate-700'}`}>
                    {contact.name}
                  </h4>
                  <span className="text-[10px] text-slate-400">{contact.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{contact.lastMsg}</p>
              </div>
              {contact.unread > 0 && (
                <div className="flex flex-col justify-center">
                  <span className="w-5 h-5 bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                    {contact.unread}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-16 border-b border-surface-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={contacts[0].avatar} alt="Active" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Dr. Alan Turing</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-slate-500">En línea</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <button className="p-2 hover:bg-surface-50 rounded-full hover:text-brand-600"><Phone size={20} /></button>
            <button className="p-2 hover:bg-surface-50 rounded-full hover:text-brand-600"><Video size={20} /></button>
            <button className="p-2 hover:bg-surface-50 rounded-full hover:text-slate-600"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-50/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-2xl p-4 ${
                msg.sender === 'me' 
                  ? 'bg-brand-600 text-white rounded-br-none' 
                  : 'bg-white border border-surface-200 text-slate-700 rounded-bl-none shadow-sm'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-2 text-right ${msg.sender === 'me' ? 'text-brand-100' : 'text-slate-400'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-surface-200">
          <div className="flex items-center gap-2 bg-surface-50 p-2 rounded-xl border border-surface-200 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-500/10 transition-all">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Escribe un mensaje..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <button className="p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-md shadow-brand-600/20">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;
