import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";

const Whatsapp = () => {
    const location = useLocation();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom={0}
      right={0}
      width={60}
      height={60}
      m="0 15px 15px 0"
      borderRadius="50%"
      zIndex={2}
      bgcolor="#6DDB56"
      component="a"
      href={
        location.pathname === "/salud365"
        ? "https://wa.me/3111006075"
        : "https://wa.me/3111095882"
      }
    >
      <WhatsAppIcon sx={{ height: "2.2em", width: "auto", color: "white", cursor: "pointer"}} />
    </Box>
  );
};

export default Whatsapp;
