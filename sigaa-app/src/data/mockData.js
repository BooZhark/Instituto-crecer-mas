export const currentUser = {
  name: "Juan Pérez",
  role: "student", // options: 'student', 'teacher', 'admin'
  avatar: "https://ui-avatars.com/api/?name=Juan+Perez&background=0ea5e9&color=fff"
};

export const studentData = {
  grades: [
    { subject: "Matemáticas Aplicadas", grade: 6.5, status: "Aprobado" },
    { subject: "Programación Web", grade: 5.8, status: "En Curso" },
    { subject: "Base de Datos", grade: 4.2, status: "Riesgo" },
  ],
  attendance: 85,
  paymentStatus: "Al día",
  nextPayment: "30 de Noviembre",
};

export const teacherData = {
  classes: [
    { id: 1, name: "Programación Web - Sec 1", students: 25, schedule: "Lun/Mie 10:00" },
    { id: 2, name: "Base de Datos - Sec 2", students: 20, schedule: "Mar/Jue 14:00" },
  ],
  alerts: [
    { id: 1, student: "Ana Gómez", course: "Base de Datos", type: "Riesgo de Asistencia", severity: "high" },
    { id: 2, student: "Carlos Ruiz", course: "Programación Web", type: "Bajo Rendimiento", severity: "medium" },
  ]
};

export const adminData = {
  income: "$15.400.000",
  pending: "$2.300.000",
  enrollmentStats: {
    total: 1250,
    new: 340,
    dropoutRate: "4.2%"
  }
};
