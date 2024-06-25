// Home
import Maternidad from "../assets/icons/Maternidad.webp";
import Medicos from "../assets/icons/Medicos.webp";
import Servicios from "../assets/icons/Servicios.webp";
import Membresia from "../assets/icons/Membresia.webp";
import imagen1 from "../assets/Home/imagen1.webp";
import imagen2 from "../assets/Home/imagen2.webp";
import imagen3 from "../assets/Home/imagen3.webp";
import imagen4 from "../assets/Home/imagen4.webp";
import imagen5 from "../assets/Home/imagen5.webp";
import imagen6 from "../assets/Home/imagen6.webp";
import recurso9 from "../assets/Home/Recurso 9.png";
import recurso10 from "../assets/Home/Recurso 10.png";
import recurso11 from "../assets/Home/Recurso 11.png";
import recurso12 from "../assets/Home/Recurso 12.png";
import recurso13 from "../assets/Home/Recurso 13.png";
import recurso14 from "../assets/Home/Recurso 14.png";

// Servicios
import Imagenologia from "../assets/Servicios/Recurso 1.webp"
import Urgencias from "../assets/Servicios/Recurso 2.webp";
import Laboratorio from "../assets/Servicios/Recurso 3.webp";
import Hospitalizacion from "../assets/Servicios/Recurso 4.webp";
import Intermedia from "../assets/Servicios/Recurso 5.webp";
import Traslados from "../assets/Servicios/Recurso 6.webp";
import Cirugia from "../assets/Servicios/Recurso 7.webp";
import Qx from "../assets/Servicios/Recurso 8.webp";
import Maternidad2 from "../assets/Servicios/Recurso 9.webp";
import Tamiz from "../assets/Servicios/Recurso 10.webp";
import Cuidados from "../assets/Servicios/Recurso 11.webp";
import ConsultaExterna from "../assets/Servicios/Recurso 12.webp";
import Esterilizacion from "../assets/Servicios/Recurso 13.webp";
import Farmacia from "../assets/Servicios/Recurso 14.webp";
import Endoscopia from "../assets/Servicios/Recurso 15.webp";
import Oftamica from "../assets/Servicios/Recurso 16.webp";
import Marcapasos from "../assets/Servicios/Recurso 17.webp";
import Mapeo from "../assets/Servicios/Recurso 18.webp";
import Holter from "../assets/Servicios/Recurso 19.webp";
import Shock from "../assets/Servicios/Recurso 20.webp";
// URLS
import TamizImagen from "../assets/Servicios/Tamiz.webp";
import MaternindadImagen from "../assets/Servicios/Paquetes-de-maternidad.webp";
import EsterilizacionImagen from "../assets/Servicios/Servicio-de-esterilización.webp";

// Especialidades
import example from "../assets/icons/Medicos.webp";

// Data Home
export const dataHome = [
  {
    titulo: "Maternidad",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención las 24 horas.",
    url: "#",
    image: Maternidad,
  },
  {
    titulo: "Servicios Médicos",
    subtitulo:
      "Más de 20 servicios médicos con tecnología de punta a su disposición.",
    url: "/servicios",
    image: Servicios,
  },
  {
    titulo: "Directorio médico",
    subtitulo:
      "Amplio staff de médicos especialistas dedicados al cuidado de su salud.",
    url: "/medicos",
    image: Medicos,
  },
  {
    titulo: "Membresía Salud365",
    subtitulo:
      "Nuestra primera membresía de salud con grandes beneficios para toda la familia.",
    url: "/salud365",
    image: Membresia,
  },
];

export const dataDetalles = [
  {
    icono: recurso9,
    cantidad: "+32",
    texto: "años de experiencia",
  },
  {
    icono: recurso10,
    cantidad: "+25",
    texto: "especialidades médicas",
  },
  {
    icono: recurso11,
    cantidad: "+20",
    texto: "servicios médicos",
  },
  {
    icono: recurso12,
    cantidad: "+100",
    texto: "médicos especialistas",
  },
  {
    icono: recurso13,
    cantidad: "+25",
    texto: "habitaciones confortables",
  },
  {
    icono: recurso14,
    cantidad: "+200",
    texto: "colaboradores capacitados",
  },
]

// Items Home
export const itemsHome = [
  {
    url: imagen1,
  },
  {
    url: imagen2,
  },
  {
    url: imagen3,
  },
  {
    url: imagen4,
  },
  {
    url: imagen5,
  },
  {
    url: imagen6,
  },
];


// Data Servicios
export const dataServicios = [
  {
    titulo: "Centro de Imagenología",
    subtitulo: "Servicio de Tomografía y Rayos X las 24 horas.",
    url: null,
    image: Imagenologia,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Urgencias las 24 horas",
    subtitulo: "Atención médica oportuna, profesional y ética.",
    url: null,
    image: Urgencias,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Laboratorio las 24 horas",
    subtitulo:
      "Estudios de rutina y especiales con entrega de resultados hasta en 1 hora.",
    url: null,
    image: Laboratorio,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Hospitalización",
    subtitulo:
      "Espacios seguros y cómodos, con una atención de calidad y calidez.",
    url: null,
    image: Hospitalizacion,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Terapia Intermedia",
    subtitulo: "Cuidado especializado para los pacientes en condiciones críticas.",
    url: null,
    image: Intermedia,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Traslados programados",
    subtitulo:
      "Modernas unidades equipadas para el traslados seguros dentro y fuera de la ciudad.",
    url: null,
    image: Traslados,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Cirugía HoLEP",
    subtitulo:
      "Equipo de vanguardia para el tratamiento de padecimientos de la próstata.",
    url: null,
    image: Cirugia,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Quirófanos",
    subtitulo:
      "Salas de quirófano con tecnología de punta para la realización de cirugías.",
    url: null,
    image: Qx,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Paquetes de maternidad",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención.",
    url: MaternindadImagen,
    image: Maternidad2,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Tamiz Neonatal",
    subtitulo:
      "Estudios con detección de hasta 140 enfermedades en los recién nacidos.",
    url: TamizImagen,
    image: Tamiz,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Cuidados Intensivos Neonatales",
    subtitulo: "Cuidado especializado para los recién nacidos.",
    url: null,
    image: Cuidados,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Consulta externa",
    subtitulo:
      "Salas de quirófano con tecnología de punta para la realización de cirugías.",
    url: null,
    image: ConsultaExterna,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Esterilización de material médico",
    subtitulo: "Esterilización por plasma, vapor y gas.",
    url: EsterilizacionImagen,
    image: Esterilizacion,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Farmacia",
    subtitulo:
      "Amplia variedad de medicamentos, con servicio las 24 horas.",
    url: null,
    image: Farmacia,
    etiqueta: "311 211 9470 EXT. 124",
  },
  {
    titulo: "Sala de endoscopia",
    subtitulo:
      "Servicio de endoscopia y colonoscopia por médicos especialistas",
    url: null,
    image: Endoscopia,
    etiqueta: "Conoce más",
  },
  {
    titulo: "Oftálmica",
    subtitulo:
      "Detección y tratamiento de padecimientos oculares por médicos especialista.",
    url: null,
    image: Oftamica,
    etiqueta: "311 211 9470 EXT. 195",
  },
  {
    titulo: "Marcapasos temporal",
    subtitulo:
      "Tratamiento urgente y temporal para pacientes con problemas cardíacos.",
    url: null,
    image: Marcapasos,
    etiqueta: "311 211 9470 EXT. 0",
  },
  {
    titulo: "Mapeo de la presión arterial",
    subtitulo:
      "Detección y tratamiento de padecimientos oculares por médicos especialista.",
    url: null,
    image: Mapeo,
    etiqueta: "311 211 9470 EXT. 0",
  },
  {
    titulo: "Holter",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención las 24 horas.",
    url: null,
    image: Holter,
    etiqueta: "311 211 9470 EXT. 0",
  },
  {
    titulo: "Área de shock",
    subtitulo:
      "Equipo de vanguardia para el tratamiento de padecimientos de la próstata.",
    url: null,
    image: Shock,
    etiqueta: "311 211 9470 EXT. 0",
  },
];

// especialidades

export const categorias = [
  "Alergología",
  "Cardiólogía",
  "Cirugía general",
  "Coloproctología",
  "Endocrinología",
  "Gastroenterología",
  "Geriatría Internista",
  "Ginecología y obstetricia",
  "Histopatología",
  "Medicina interna",
  "Nefrología",
  "Neurología",
  "Oftalmología",
  "Otorrinolaringología",
  "Pediatría",
  "Radiología",
  "Traumatología y ortopedia",
  "Urología",
];

  
export const dataEspecialistas = [
  {
      "imagen": example,
      "especialidad":"Alergología",
      "subespecialidad": null,
      "nombre":"Dr. Jaime Díaz Valdivia",
      "DGPE":10508493,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cardiólogía",
      "subespecialidad": null,
      "nombre":"Dr. Ricardo Sahagún Sánchez",
      "DGPE":3393890,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cardiólogía",
      "subespecialidad": null,
      "nombre":"Dr. Kristian Javier Navarrete Becerra",
      "DGPE":11650272,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cardiólogía",
      "subespecialidad": "Medicina Interna",
      "nombre":"Dr. Enrique Ignacio Soltero Martínez",
      "DGPE":"3166505 | 3270201",
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cirugía general",
      "subespecialidad": null,
      "nombre":"Dr. Miguel Calleros Mariscal",
      "DGPE":4860278,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cirugía general",
      "subespecialidad": "Laparoscopia Avanzada",
      "nombre":"Dr. Edwin Omar Fragoza Aguillares",
      "DGPE":9290716,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Cirugía general",
      "subespecialidad": "Motilidad Digestiva",
      "nombre":"Dr. Francisco Javier Muniz Coronado",
      "DGPE":7046221,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Coloproctología",
      "subespecialidad": null,
      "nombre":"Dra. Alma Rosa Medina Fong",
      "DGPE":"5848289 | 5212348 ",
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Endocrinología",
      "subespecialidad": null,
      "nombre":"Dra. Janet Lizeth Vargas Cortés",
      "DGPE":11028016,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Gastroenterología",
      "subespecialidad": null,
      "nombre":"Dr. Efraín Magaña Salas",
      "DGPE":5052284,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Gastroenterología",
      "subespecialidad": "Hepatología",
      "nombre":"Dr. Gilberto de Jesús Parra Torres",
      "DGPE":10031185,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Geriatría Internista",
      "subespecialidad": null,
      "nombre":"Dr. Gilberto Medina Fong",
      "DGPE":"6745642 | 7352969",
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Geriatría Internista",
      "subespecialidad": null,
      "nombre":"Dr. Luis Antonio Flores Ruvalcaba",
      "DGPE":9739415,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Ginecología y obstetricia",
      "subespecialidad": null,
      "nombre":"Dr. Héctor Leonardo Torres Soltero",
      "DGPE":3277271,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Ginecología y obstetricia",
      "subespecialidad": null,
      "nombre":"Dr. Ramón González Bobadilla",
      "DGPE":6323357,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Histopatología",
      "subespecialidad": null,
      "nombre":"Dra. Hilda Rocio Andrade Madrid",
      "DGPE":6525369,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Medicina interna",
      "subespecialidad": null,
      "nombre":"Dr. José Antonio Carrillo Segura",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Nefrología",
      "subespecialidad": null,
      "nombre":"Dra. Elia Judith Corona Galván",
      "DGPE":6673326,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Neurología",
      "subespecialidad": null,
      "nombre":"Dr. Antonio Durán Ortega",
      "DGPE":3270331,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Neurología",
      "subespecialidad": null,
      "nombre":"Dr. Mario Gabriel Guevara Barraza",
      "DGPE":4700291,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Neurología",
      "subespecialidad": null,
      "nombre":"Dr. José Alberto Cruz Cruz",
      "DGPE":11055456,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Neurología",
      "subespecialidad": "Neurología clínica",
      "nombre":"Dr. Ricardo Sahagun Topete",
      "DGPE":6591998,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Oftalmología",
      "subespecialidad": null,
      "nombre":"Dr. Roberto Diaz Cavazos",
      "DGPE":4862438,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Oftalmología",
      "subespecialidad": null,
      "nombre":"Dra. Eloísa Platt Soberanes",
      "DGPE":4559102,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Otorrinolaringología",
      "subespecialidad": null,
      "nombre":"Dra. María del Rocío Zambrano Carrillo",
      "DGPE":30070,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Otorrinolaringología",
      "subespecialidad": null,
      "nombre":"Dra. Rocío Yáñez Zambrano",
      "DGPE":10727583,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Otorrinolaringología",
      "subespecialidad": null,
      "nombre":"Dr. José Miguel Plascencia Ramírez",
      "DGPE":8931464,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatría General",
      "nombre":"Dra. Silvia Rodríguez Jiménez",
      "DGPE":11460626,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": null,
      "nombre":"Dra. Pricila Muro",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatra Cirujano",
      "nombre":"Dra. Ana Lilia Rodríguez de la Peña",
      "DGPE":"AECEN-25061",
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Neonatología",
      "nombre":"Dra. Elizabeth López Chávez",
      "DGPE":1815649,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Neonatología",
      "nombre":"Dr. Miguel Licea Pérez Peña",
      "DGPE":26600,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Neonatología",
      "nombre":"Dra. Evelyn Selene Cortés Salvio",
      "DGPE":11540617,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatra Endocrinologo",
      "nombre":"Dr. Alejandro Solano",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatría General",
      "nombre":"Dr. Miguel Hernández García",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatría General",
      "nombre":"Dra. Roxana López Loza",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatría General",
      "nombre":"Dr. Joctan Esparza Alvarado",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Pediatría",
      "subespecialidad": "Pediatra Intensivista",
      "nombre":"Dr. Jesús Romero Rodríguez",
      "DGPE":null,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Radiología",
      "subespecialidad": "Radiología e Imagen",
      "nombre":"Dr. José Alberto Gutiérrez Mata",
      "DGPE":"AECEM-17241",
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": null,
      "nombre":"Dr. Alejandro Ávalos Flores",
      "DGPE":6167498,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": null,
      "nombre":"Dr. Jorge García Valencia",
      "DGPE":6745838,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": null,
      "nombre":"Dr. Luis Ernesto Hernández Rico",
      "DGPE":5687069,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": "Cirugía Articular",
      "nombre":"Dr. José Carlos del Real Martínez",
      "DGPE":11280294,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": "Cirugía Articular",
      "nombre":"Dr. José Benito del Real Martínez",
      "DGPE":12187078,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Traumatología y ortopedia",
      "subespecialidad": "Cirugía de Columna",
      "nombre":"Dr. Sealtiel Alfonso Villeda Gómez",
      "DGPE":11783462,
      "telefono": "(311)2119470 ext. 128",
  },
  {
      "imagen": example,
      "especialidad":"Urología",
      "subespecialidad": "Urología General y Oncológica",
      "nombre":"Dr. Christopher Peña George",
      "DGPE":6525364,
      "telefono": "(311)2119470 ext. 128",
  }
];

// CONTACTOS

export const contactos = [
  { area: "Recepción", extension: "0 / 127 / 181" },
  { area: "Caja", extension: "162" },
  { area: "Farmacia", extension: "124" },
  { area: "Laboratorio", extension: "116" },
  { area: "Rayos X", extension: "190" },
  { area: "Tomografía", extension: "119" },
  { area: "Seguros ambulatorios", extension: "174" },
  { area: "Seguros y Convenios", extension: "126" },
];
