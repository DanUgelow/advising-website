import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Services/Services.module.scss";

const servicesArr = [
  {
    title: "Technology Support",
    icon: "/tech-support.png",
    body: "Dedicated support for websites, social media, email, and more. Get help with questions, development, and best practices",
  },
  {
    title: "Website Development & Design",
    icon: "/web-dev.png",
    body: "Assistance in creating or improving your website. From design feedback, ideation, to troubleshooting",
  },
  {
    title: "Clarity & Strategic Planning",
    icon: "/bus-strategy.png",
    body: "Focus on your vision and business potential. Plan and execute on your goals. Streamline your process",
  },
  {
    title: "Social Media",
    icon: "/social-media.png",
    body: "Guidance, tips, and resources for harnessing a successful social media",
  },
];

export default function Services() {
  return (
    <Box
      sx={{ textAlign: "center", padding: "60px 12px", position: "relative" }}
      id='Services'
    >
      <Typography
        component='h2'
        sx={{
          fontSize: "30px",
          fontWeight: 400,
          margin: "0 auto 24px",
          maxWidth: "447px",
        }}
      >
        Technical Excellence Meets Strategic Vision
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          margin: "0 auto 60px",
          maxWidth: "350px",
        }}
      >
        Solutions for the most difficult aspects of your business
      </Typography>
      <Box className={styles.servicesContainer}>
        {servicesArr.map((item) => (
          <Box className={styles.service}>
            <Typography>{item.title}</Typography>
            <Image width={100} height={100} src={item.icon} />
            <Typography>{item.body}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
