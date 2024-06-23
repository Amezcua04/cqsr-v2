import React from "react";
import { Modal, Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalServicio = ({ open, handleClose, content }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 400 : 500,
          bgcolor: "transparent",
          boxShadow: 25,
          p: isMobile ? 4 : 0,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: isMobile ? -10 : 0,
            right: isMobile ? 30 : -50,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            '&:hover': {
              backgroundColor: "rgba(0,0,0,0.7)",
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={content.url}
          alt="modal promocional"
          loading="lazy"
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ModalServicio;
