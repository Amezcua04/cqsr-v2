import React, { useState } from "react";
import { Box, Card, CardMedia, Modal, useMediaQuery, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

const Slide = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <>
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
                onClick={() => isMobile && handleOpen(i * 3 + j)}
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

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <Box sx={{ position: "fixed", width: "70%", }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Carousel
            index={currentIndex}
            navButtonsAlwaysVisible
            autoPlay={false}
            onChange={(now) => setCurrentIndex(now)}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.url}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ))}
          </Carousel>
        </Box>
      </Modal>
    </>
  );
};

export default Slide;
