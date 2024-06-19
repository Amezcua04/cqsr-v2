import { Box, Container, Grid, Typography, useMediaQuery, Button } from "@mui/material";
import { useState } from "react";
import Cards from "../../components/Card";
import Imagenologia from "../../assets/Servicios/Recurso 1.png";
import Urgencias from "../../assets/Servicios/Recurso 2.png";
import Laboratorio from "../../assets/Servicios/Recurso 3.png";
import Hospitalizacion from "../../assets/Servicios/Recurso 4.png";
import Intermedia from "../../assets/Servicios/Recurso 5.png";
import Traslados from "../../assets/Servicios/Recurso 6.png";
import Cirugia from "../../assets/Servicios/Recurso 7.png";
import Qx from "../../assets/Servicios/Recurso 8.png";
import Maternidad from "../../assets/Servicios/Recurso 9.png";
import Tamiz from "../../assets/Servicios/Recurso 10.png";
import Cuidados from "../../assets/Servicios/Recurso 11.png";
import ConsultaExterna from "../../assets/Servicios/Recurso 12.png";
import Esterilizacion from "../../assets/Servicios/Recurso 13.png";
import Farmacia from "../../assets/Servicios/Recurso 14.png";
import Endoscopia from "../../assets/Servicios/Recurso 15.png";
import Oftamica from "../../assets/Servicios/Recurso 16.png";
import Marcapasos from "../../assets/Servicios/Recurso 17.png";
import Mapeo from "../../assets/Servicios/Recurso 18.png";
import Holter from "../../assets/Servicios/Recurso 19.png";
import Shock from "../../assets/Servicios/Recurso 20.png";

const data = [
  {
    titulo: "Centro de Imagenología",
    subtitulo: "Servicio de Tomografía y Rayos X las 24 horas.",
    url: "#",
    image: Imagenologia,
  },
  {
    titulo: "Urgencias las 24 horas",
    subtitulo: "Atención médica oportuna, profesional y ética.",
    url: "#",
    image: Urgencias,
  },
  {
    titulo: "Laboratorio las 24 horas",
    subtitulo:
      "Estudios de rutina y especiales con entrega de resultados hasta en 1 hora.",
    url: "#",
    image: Laboratorio,
  },
  {
    titulo: "Hospitalización",
    subtitulo:
      "Espacios seguros y cómodos, con una atención de calidad y calidez.",
    url: "#",
    image: Hospitalizacion,
  },
  {
    titulo: "Terapia Intermedia",
    subtitulo: "Cuidado especializado para los pacientes en condiciones críticas.",
    url: "#",
    image: Intermedia,
  },
  {
    titulo: "Traslados programados",
    subtitulo:
      "Modernas unidades equipadas para el traslados seguros dentro y fuera de la ciudad.",
    url: "#",
    image: Traslados,
  },
  {
    titulo: "Cirugía HoLEP",
    subtitulo:
      "Equipo de vanguardia para el tratamiento de padecimientos de la próstata.",
    url: "#",
    image: Cirugia,
  },
  {
    titulo: "Quirófanos",
    subtitulo:
      "Salas de quirófano con tecnología de punta para la realización de cirugías.",
    url: "#",
    image: Qx,
  },
  {
    titulo: "Paquetes de maternidad",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención.",
    url: "#",
    image: Maternidad,
  },
  {
    titulo: "Tamiz Neonatal",
    subtitulo:
      "Estudios con detección de hasta 140 enfermedades en los recién nacidos.",
    url: "#",
    image: Tamiz,
  },
  {
    titulo: "Cuidados Intensivos Neonatales",
    subtitulo: "Cuidado especializado para los recién nacidos.",
    url: "#",
    image: Cuidados,
  },
  {
    titulo: "Consulta externa",
    subtitulo:
      "Salas de quirófano con tecnología de punta para la realización de cirugías.",
    url: "#",
    image: ConsultaExterna,
  },
  {
    titulo: "Esterilización de material médico",
    subtitulo: "Esterilización por plasma, vapor y gas.",
    url: "#",
    image: Esterilizacion,
  },
  {
    titulo: "Farmacia",
    subtitulo:
      "Amplia variedad de medicamentos, con servicio las 24 horas.",
    url: "#",
    image: Farmacia,
  },
  {
    titulo: "Sala de endoscopia",
    subtitulo:
      "Servicio de endoscopia y colonoscopia por médicos especialistas",
    url: "#",
    image: Endoscopia,
  },
  {
    titulo: "Oftálmica",
    subtitulo:
      "Detección y tratamiento de padecimientos oculares por médicos especialista.",
    url: "#",
    image: Oftamica,
  },
  {
    titulo: "Marcapasos temporal",
    subtitulo:
      "Tratamiento urgente y temporal para pacientes con problemas cardíacos.",
    url: "#",
    image: Marcapasos,
  },
  {
    titulo: "Mapeo de la presión arterial",
    subtitulo:
      "Detección y tratamiento de padecimientos oculares por médicos especialista.",
    url: "#",
    image: Mapeo,
  },
  {
    titulo: "Holter",
    subtitulo:
      "Reciba a su bebé en un espacio totalmente seguro, con la mejor atención las 24 horas.",
    url: "#",
    image: Holter,
  },
  {
    titulo: "Área de shock",
    subtitulo:
      "Equipo de vanguardia para el tratamiento de padecimientos de la próstata.",
    url: "#",
    image: Shock,
  },
];

const Servicios = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [visibleCount, setVisibleCount] = useState(data.length / 2);

  const handleShowMore = () => {
    setVisibleCount(data.length);  // Mostrar todos los cards
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        backgroundImage: "linear-gradient(180deg, #9BE7FA, #FBFBFB)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        mb: { xs: "5px", sm: "10px" },
        overflow: "auto",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 15 },
          maxWidth: "100% !important",
          pl: "0 !important",
          pr: "0 !important",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            width: "100%",
            color: "white",
          }}
        >
          Nuestros servicios
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 2 },
            pb: { xs: 2 },
          }}
        >
          <Grid container spacing={2} justifyContent="center" ml="0">
            {data.slice(0, visibleCount).map((item, index) => (
              <Cards
                key={index}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                url={item.url}
                width={isMobile ? "160px" : "225px"}
                image={item.image}
              />
            ))}
          </Grid>

          {visibleCount < data.length && (
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleShowMore}
              sx={{
                borderRadius: '50%',
                width: 60,
                height: 60,
                minWidth: 'unset',
                padding: 0,
                animation: 'pulse 1.5s infinite',
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                  },
                },
              }}
            >
              Ver más
            </Button>
          </Box>
          )}
        </Container>
      </Container>
    </Box>
  );
};

export default Servicios;
