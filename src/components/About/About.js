import Box from "@mui/material/Box";
import styles from "@/components/About/About.module.scss";
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();

  const isSMUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, rgba(215, 213, 248, 1), rgba(133, 78, 242, 1) 60%);",
          position: "relative",
          color: "white",
          overflow: "hidden",
        }}
        id='About'
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Image
            className={`${styles.circle} ${styles["circle-one"]}`}
            src='/circles.png'
            width={148}
            height={148}
          />
          <Image
            className={`${styles.circle} ${styles["circle-two"]}`}
            src='/circles.png'
            width={148}
            height={148}
          />
          <Image
            className={`${styles.circle} ${styles["circle-three"]}`}
            src='/circles.png'
            width={148}
            height={148}
          />
          <Image src='/profile-pic.png' width={364} height={485} />
          <Box sx={{ maxWidth: "791px", padding: "60px 12px" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant='h3' component='p' className={styles.heading}>
                <strong>Hello, I’m Dan Ugelow</strong>
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={{ marginBottom: "40px" }}
              >
                <strong>Software Developer, UX Designer, & Entrepreneur</strong>
              </Typography>
            </Box>

            <Typography className={styles.body}>
              I work with entrepreneurs to provide technical expertise alongside
              practical holistic guidance to alleviate their pain points and
              elevate their business.
            </Typography>
            <Typography className={styles.body}>
              My experience ranges from working at fortune 500 companies as a
              Software Developer to advising entrepreneurs on social media,
              marketing, and technology to{" "}
              <strong>
                <u>increase their business success</u>
              </strong>
              .
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "60px 24px" }}>
        <Box className={styles.cards}>
          <Box className={styles["card-left"]}>
            <Box className={styles.triangle}></Box>
            <Typography>
              <strong>Experienced Software Developer</strong>
            </Typography>
            <Typography>
              As a seasoned software developer and technologist I provide unique
              technical perspectives and strategies tailored to your business.
            </Typography>
            <svg
              width='78'
              height='299'
              viewBox='0 0 78 299'
              fill='none'
              className={styles.triangle}
            >
              <path
                d='M0 149.5L77.25 0.976624L77.25 298.023L0 149.5Z'
                fill='#CFD2FF'
              />
            </svg>
          </Box>
          <Box className={styles["card-right"]}>
            <Typography>
              <strong>Conscious Entrepreneur</strong>
            </Typography>
            <Typography>
              A thoughtful, empathetic approach. Hands on advising, ongoing
              support, and long term vision strategy centered around an
              authentic expression of your values and goals.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
