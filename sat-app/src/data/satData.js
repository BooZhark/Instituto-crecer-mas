export const riskMetrics = {
  totalHighRisk: 42,
  alerts24h: 15,
  dropoutRate: "4.8%",
  riskDistribution: [
    { name: 'Alto', value: 42, color: '#ef4444' },
    { name: 'Medio', value: 128, color: '#f59e0b' },
    { name: 'Bajo', value: 850, color: '#10b981' },
  ]
};

export const studentsInRisk = [
  {
    id: 1,
    name: "Carlos Ruiz",
    program: "Ingeniería Informática",
    riskLevel: "Alto",
    attendance: "45%",
    lmsActivity: "Inactivo (15 días)",
    financial: "Atrasado (2 cuotas)",
    lastAlert: "Hace 2 horas"
  },
  {
    id: 2,
    name: "Ana Gómez",
    program: "Diseño Gráfico",
    riskLevel: "Alto",
    attendance: "52%",
    lmsActivity: "Bajo Engagement",
    financial: "Al día",
    lastAlert: "Hace 5 horas"
  },
  {
    id: 3,
    name: "Pedro Martínez",
    program: "Administración",
    riskLevel: "Medio",
    attendance: "68%",
    lmsActivity: "Regular",
    financial: "Atrasado (1 cuota)",
    lastAlert: "Ayer"
  },
  {
    id: 4,
    name: "Lucía Fernández",
    program: "Ingeniería Informática",
    riskLevel: "Medio",
    attendance: "70%",
    lmsActivity: "Inactivo (5 días)",
    financial: "Al día",
    lastAlert: "Ayer"
  },
  {
    id: 5,
    name: "Miguel Ángel",
    program: "Mecánica Automotriz",
    riskLevel: "Alto",
    attendance: "30%",
    lmsActivity: "Nula",
    financial: "Atrasado (3 cuotas)",
    lastAlert: "Hace 1 hora"
  }
];

export const interventions = [
  { id: 1, student: "Carlos Ruiz", type: "Llamada Telefónica", date: "2025-11-20", status: "En Proceso", notes: "No contesta, se dejó mensaje." },
  { id: 2, student: "Ana Gómez", type: "Cita Presencial", date: "2025-11-18", status: "Cerrado", notes: "Compromiso de asistencia firmado." },
];
