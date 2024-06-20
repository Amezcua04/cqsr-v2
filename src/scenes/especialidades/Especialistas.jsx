import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { categorias, dataEspecialistas } from "../../data/data";
import Cards from "./CardMedico";

const ITEM_HEIGHT = 50;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 210,
    },
  },
};

const Especialistas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const especialistasFiltrados = categoriaSeleccionada
    ? dataEspecialistas.filter(
        (especialista) => especialista.especialidad === categoriaSeleccionada
      )
    : dataEspecialistas;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 4 },
        pb: { xs: 4 },
        pl: { xs: 0 },
        pr: { xs: 0 },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: "1rem" }}
          onClick={() => setCategoriaSeleccionada("")}
        >
          Mostrar todos
        </Button>
        <FormControl variant="outlined" sx={{ m: 1, width: 210 }}>
          <InputLabel id="demo-multiple-name-label">
            Seleccione una especialidad
          </InputLabel>
          <Select
            label="Seleccione una especialidad"
            id="select"
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>Mostrar todos</em>
            </MenuItem>
            {categorias.map((categoria) => (
              <MenuItem key={categoria} value={categoria}>
                {categoria}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4 },
          pb: { xs: 2 },
          pl: { xs: 0 },
        }}
      >
        <Grid container spacing={2} justifyContent="center" ml="0">
          {especialistasFiltrados.length === 0 ? (
            <Grid item xs={6}>
              <div>No hay especialistas disponibles.</div>
            </Grid>
          ) : (
            especialistasFiltrados.map((especialista, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Cards
                  especialista={especialista}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default Especialistas;
