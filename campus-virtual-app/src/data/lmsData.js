export const courses = [
  {
    id: 1,
    title: "Inteligencia Artificial Aplicada",
    instructor: "Dr. Alan Turing",
    progress: 75,
    nextSession: "Hoy, 14:00 hrs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    engagement: 88, // High
    notifications: 2
  },
  {
    id: 2,
    title: "Desarrollo Móvil Avanzado",
    instructor: "Ing. Ada Lovelace",
    progress: 45,
    nextSession: "Mañana, 10:00 hrs",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    engagement: 62, // Medium
    notifications: 0
  },
  {
    id: 3,
    title: "Ética Profesional",
    instructor: "Lic. Aristóteles",
    progress: 90,
    nextSession: "Jueves, 16:00 hrs",
    image: "https://images.unsplash.com/photo-1555421217-d8f490160ba9?auto=format&fit=crop&q=80&w=800",
    engagement: 95, // High
    notifications: 1
  }
];

export const courseContent = [
  {
    id: 1,
    module: "Módulo 3: Redes Neuronales",
    items: [
      { type: "video", title: "Introducción a Perceptrones", duration: "15 min" },
      { type: "doc", title: "Lectura Obligatoria: Backpropagation", pages: "12 págs" },
      { type: "quiz", title: "Evaluación Corta", status: "Pendiente" }
    ]
  },
  {
    id: 2,
    module: "Módulo 4: Deep Learning",
    items: [
      { type: "live", title: "Sesión Híbrida - Laboratorio 2", status: "Scheduled" },
      { type: "task", title: "Proyecto Final: Clasificador de Imágenes", due: "25 Nov" }
    ]
  }
];
