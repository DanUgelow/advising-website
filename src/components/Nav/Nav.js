import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Link } from "@mui/material";

const navItems = ["Services", "About", "Packages", "Contact"];

export default function Nav() {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar
        elevation={scrollTrigger ? 4 : 0}
        color='transparent'
        sx={{
          backgroundColor: scrollTrigger ? "white" : "transparent",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            padding: {
              xs: "0 8px",
              sm: "0 16px",
            },
            maxWidth: "1300px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                paddingLeft: "12px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                INSPIRA{" "}
                <Box
                  component='span'
                  sx={{ color: "#854EF2", fontWeight: 400 }}
                >
                  ADVISING
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {navItems.map((item) => (
              <Button
                component={Link}
                href={`#${item}`}
                key={item}
                sx={{
                  textTransform: "uppercase",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: { xs: "12px", sm: "14px" },
                  padding: {
                    xs: "10px 28px",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <a href='https://www.linkedin.com/in/danugelow/' target='_blank'>
              <Image
                src='/icons8-linkedin-50.png'
                width={29}
                height={29}
                alt='LinkedIn'
              />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
