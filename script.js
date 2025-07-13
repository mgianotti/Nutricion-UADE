const materias = [
  // Primer año
  { nombre: "Biología General", anio: 1, cuatrimestre: 1, correlativas: [] },
  { nombre: "Anatomía e Histología", anio: 1, cuatrimestre: 1, correlativas: [] },
  { nombre: "Bioquímica de la Nutrición I", anio: 1, cuatrimestre: 1, correlativas: [] },
  { nombre: "Cultura de la Alimentación", anio: 1, cuatrimestre: 1, correlativas: [] },
  { nombre: "Salud Pública", anio: 1, cuatrimestre: 1, correlativas: [] },
  { nombre: "Nutrición I", anio: 1, cuatrimestre: 2, correlativas: [] },
  { nombre: "Psicología de la Alimentación", anio: 1, cuatrimestre: 2, correlativas: [] },
  { nombre: "Comunicación de la Nutrición", anio: 1, cuatrimestre: 2, correlativas: [] },
  { nombre: "Economía y Producción Alimentaria", anio: 1, cuatrimestre: 2, correlativas: [] },
  { nombre: "Procesamiento de Datos en Salud", anio: 1, cuatrimestre: 2, correlativas: [] },

  // Segundo año
  { nombre: "Fisiología General", anio: 2, cuatrimestre: 1, correlativas: ["Biología General", "Anatomía e Histología"] },
  { nombre: "Bromatología", anio: 2, cuatrimestre: 1, correlativas: ["Bioquímica de la Nutrición I"] },
  { nombre: "Microbiología de los Alimentos", anio: 2, cuatrimestre: 1, correlativas: ["Biología General"] },
  { nombre: "Bioquímica de la Nutrición II", anio: 2, cuatrimestre: 1, correlativas: ["Bioquímica de la Nutrición I"] },
  { nombre: "Técnica Dietética y Culinaria I", anio: 2, cuatrimestre: 1, correlativas: ["Bioquímica de la Nutrición I"] },
  { nombre: "Nutrición II", anio: 2, cuatrimestre: 2, correlativas: ["Nutrición I"] },
  { nombre: "Fisiología Digestiva y Neuroendócrina", anio: 2, cuatrimestre: 2, correlativas: ["Biología General", "Anatomía e Histología"] },
  { nombre: "Nutrición Infantil", anio: 2, cuatrimestre: 2, correlativas: ["Nutrición I"] },
  { nombre: "Evaluación Nutricional", anio: 2, cuatrimestre: 2, correlativas: ["Nutrición I"] },
  { nombre: "Diseño y Gestión de Políticas Alimentarias", anio: 2, cuatrimestre: 2, correlativas: ["Salud Pública"] },

  // Tercer año
  { nombre: "Fisiopatología General", anio: 3, cuatrimestre: 1, correlativas: ["Fisiología General"] },
  { nombre: "Técnica Dietética y Culinaria II", anio: 3, cuatrimestre: 1, correlativas: ["Técnica Dietética y Culinaria I"] },
  { nombre: "Gestión de Servicios Alimentarios", anio: 3, cuatrimestre: 1, correlativas: [] },
  { nombre: "Marketing en Nutrición", anio: 3, cuatrimestre: 1, correlativas: [] },
  { nombre: "Legislación Alimentaria y del Ejercicio Profesional", anio: 3, cuatrimestre: 1, correlativas: [] },
  { nombre: "Fisiopatología Endócrino-digestiva", anio: 3, cuatrimestre: 2, correlativas: ["Fisiología Digestiva y Neuroendócrina"] },
  { nombre: "Educación Alimentaria", anio: 3, cuatrimestre: 2, correlativas: ["Nutrición II"] },
  { nombre: "Nutrición en el Deporte", anio: 3, cuatrimestre: 2, correlativas: ["Nutrición II", "Evaluación Nutricional"] },
  { nombre: "Metodología de la Investigación en Salud", anio: 3, cuatrimestre: 2, correlativas: ["Procesamiento de Datos en Salud"] },
  { nombre: "Emprendedurismo en Nutrición", anio: 3, cuatrimestre: 2, correlativas: [] },

  // Cuarto año
  { nombre: "Optativa I", anio: 4, cuatrimestre: 1, correlativas: [] },
  { nombre: "Fisiopatología y Terapéutica Nutricional Infantil", anio: 4, cuatrimestre: 1, correlativas: ["Nutrición Infantil"] },
  { nombre: "Técnica Dietoterápica I", anio: 4, cuatrimestre: 1, correlativas: ["Técnica Dietética y Culinaria II"] },
  { nombre: "Terapéutica General", anio: 4, cuatrimestre: 1, correlativas: ["Fisiopatología General"] },
  { nombre: "Inglés", anio: 4, cuatrimestre: 1, correlativas: [] },
  { nombre: "Optativa II", anio: 4, cuatrimestre: 2, correlativas: [] },
  { nombre: "Técnica Dietoterápica II", anio: 4, cuatrimestre: 2, correlativas: ["Técnica Dietoterápica I"] },
  { nombre: "Terapéutica Endócrino-digestiva", anio: 4, cuatrimestre: 2, correlativas: ["Fisiopatología Endócrino-digestiva"] },
  { nombre: "Farmacología y Suplementación en Salud y Deporte", anio: 4, cuatrimestre: 2, correlativas: ["Fisiopatología General", "Fisiopatología Endócrino-digestiva"] },
  { nombre: "Trabajo Final Integrador", anio: 4, cuatrimestre: 2, correlativas: [
    "Fisiopatología General",
    "Fisiopatología Endócrino-digestiva",
    "Nutrición en el Deporte",
    "Técnica Dietética y Culinaria II",
    "Educación Alimentaria"
  ] },

  // Quinto año
  { nombre: "Práctica Profesional Supervisada I (Nutrición Comunitaria)", anio: 5, cuatrimestre: 1, correlativas: ["*39 materias*"] },
  { nombre: "Práctica Profesional Supervisada II (Nutrición Clínica y Administración de Servicios de la Alimentación)", anio: 5, cuatrimestre: 1, correlativas: ["*39 materias*"] }
];

function crearMalla() {
  const contenedor = document.getElementById("contenedor");
  const años = [...new Set(materias.map(m => m.anio))];

  años.forEach(anio => {
    const bloque = document.createElement("div");
    bloque.className = "anio";
    bloque.dataset.anio = anio;

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${anio}`;
    bloque.appendChild(titulo);

    materias.filter(m => m.anio === anio).forEach(materia => {
      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = materia.nombre;
      div.dataset.nombre = materia.nombre;
      div.dataset.correlativas = materia.correlativas.join(",");

      div.addEventListener("click", () => {
        div.classList.toggle("aprobada");
        actualizarEstado();
      });

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  });

  actualizarEstado();
}

function actualizarEstado() {
  const aprobadas = Array.from(document.querySelectorAll(".materia.aprobada"))
    .map(m => m.dataset.nombre);

  document.querySelectorAll(".materia").forEach(m => {
    const correlativas = m.dataset.correlativas.split(",").filter(c => c && c !== "*39 materias*");
    const habilitada = correlativas.every(c => aprobadas.includes(c));

    if (correlativas.length === 0 || habilitada || m.dataset.correlativas === "*39 materias*") {
      m.classList.add("habilitada");
    } else {
      m.classList.remove("habilitada");
    }
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
