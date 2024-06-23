import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useState } from "react";
import Cards from "../../components/Card";
import { dataServicios } from "../../data/data";
import ModalServicio from "../../components/Modal";

const Servicios = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [visibleCount, setVisibleCount] = useState(dataServicios.length / 2);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShowMore = () => {
    setVisibleCount(dataServicios.length); // Mostrar todos los cards
  };

  const handleOpenModal = (item) => {
    setModalContent(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        // backgroundImage: "linear-gradient(180deg, #9BE7FA, #FBFBFB)",
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
            backgroundColor: "#06C7F9",
          }}
        >
          Nuestros servicios
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 4 },
            pb: { xs: 2 },
          }}
        >
          <Grid container spacing={2} justifyContent="center" ml="0">
            {dataServicios.slice(0, visibleCount).map((item, index) => (
              <Cards
                key={index}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                url={item.url}
                width={isMobile ? "160px" : "225px"}
                image={item.image}
                etiqueta={item.etiqueta}
                onClick={() => handleOpenModal(item)}
              />
            ))}
          </Grid>

          {visibleCount < dataServicios.length && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleShowMore}
                sx={{
                  borderRadius: "50%",
                  width: 60,
                  height: 60,
                  minWidth: "unset",
                  padding: 0,
                  animation: "pulse 1.5s infinite",
                  "@keyframes pulse": {
                    "0%": {
                      transform: "scale(1)",
                    },
                    "50%": {
                      transform: "scale(1.1)",
                    },
                    "100%": {
                      transform: "scale(1)",
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

      <ModalServicio
        open={openModal}
        handleClose={handleCloseModal}
        content={modalContent}
      />
    </Box>
  );
};

export default Servicios;
