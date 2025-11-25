export const funnelMetrics = {
  conversionRate: "12.5%",
  newLeadsToday: 45,
  potentialValue: "$125M",
  stages: [
    { name: 'Interesado', value: 450, color: '#94a3b8' },
    { name: 'Contactado', value: 280, color: '#0ea5e9' },
    { name: 'Postulante', value: 120, color: '#6366f1' },
    { name: 'Matriculado', value: 56, color: '#10b981' },
  ]
};

export const initialLeads = [
  { id: 'l1', name: 'Sofía Ramirez', career: 'Ingeniería Informática', stage: 'Interesado', interest: 'Alto', lastContact: 'Hace 2h' },
  { id: 'l2', name: 'Javier Torres', career: 'Mecánica Automotriz', stage: 'Contactado', interest: 'Medio', lastContact: 'Ayer' },
  { id: 'l3', name: 'Valentina Castro', career: 'Diseño Gráfico', stage: 'Postulante', interest: 'Alto', lastContact: 'Hace 30min' },
  { id: 'l4', name: 'Diego Morales', career: 'Administración', stage: 'Interesado', interest: 'Bajo', lastContact: 'Hace 3d' },
  { id: 'l5', name: 'Camila Silva', career: 'Ingeniería Informática', stage: 'Matriculado', interest: 'Alto', lastContact: 'Hoy' },
];

export const campaigns = [
  { 
    id: 1, 
    name: "Bienvenida 2026", 
    status: "Active", 
    steps: [
      { type: 'email', label: 'Email de Bienvenida', delay: 'Inmediato' },
      { type: 'wait', label: 'Esperar 2 días', delay: '48h' },
      { type: 'sms', label: 'Recordatorio Beneficios', delay: 'Día 3' },
    ]
  },
  { 
    id: 2, 
    name: "Recuperación de Carrito", 
    status: "Paused", 
    steps: [
      { type: 'email', label: '¿Olvidaste tu matrícula?', delay: '1h' },
      { type: 'call', label: 'Llamada de Asesor', delay: '24h' },
    ]
  }
];
