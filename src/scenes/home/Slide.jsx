import { Box, Card, CardMedia, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Slide = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <Carousel
      navButtonsAlwaysVisible={!isMobile}
      sx={{ marginTop: isMobile ? "10px" : "30px", width: "100%" }}
    >
      {groupedItems.map((group, i) => (
        <Box key={i} display="flex" justifyContent="space-evenly">
          {group.map((item, j) => (
            <Card
              key={j}
              sx={{
                height: isMobile ? "100px" : "300px",
              }}
            >
              <CardMedia
                component="img"
                src={item.url}
                alt={`Slide ${i * 3 + j + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            </Card>
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default Slide;
