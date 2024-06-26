import { Box, useMediaQuery } from "@mui/material";

const Banner = ({ desktopImgSrc, mobileImgSrc, children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const imageSrc = isMobile ? mobileImgSrc : desktopImgSrc;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "40vh", md: "65vh", lg: "85vh", xl: "80vh"},
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Banner"
        loading="lazy"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Banner;
