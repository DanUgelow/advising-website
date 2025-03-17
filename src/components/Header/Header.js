import Box from "@mui/material/Box";
import styles from "@/components/Header/Header.module.scss";
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import FinanceSVG from "../SVG/Finance";

export default function Header() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={styles["container"]} id='Home'>
      <Box className={styles.content}>
        <Typography variant='h4' component='h1' className={styles.heading}>
          <Box component='span' sx={{ color: "#854EF2" }}>
            Helping Entrepreneurs Grow
          </Box>{" "}
          Their Business, Knowledge, & Wealth
        </Typography>
        <Typography variant='h6' className={styles.subheading}>
          If you feel stuck or overwhelmed in your business I help you focus on
          the essentials for success.
        </Typography>
        <Button
          variant='contained'
          sx={{
            marginRight: "36px",
            marginBottom: {
              xs: "16px",
              sm: 0,
            },
            width: {
              xs: "100%",
              sm: "inherit",
            },
          }}
          component='a'
          href='https://calendly.com/dan-ugelow/breathwork'
          target='_blank'
        >
          Book now
        </Button>
        <Button
          className={styles["button-secondary"]}
          variant='outlined'
          component='a'
          sx={{
            width: {
              xs: "100%",
              sm: "inherit",
            },
          }}
          href='https://calendly.com/dan-ugelow/free-consultation'
          target='_blank'
        >
          Free Consultation
        </Button>
      </Box>
      <FinanceSVG />
    </Box>
  );
}
