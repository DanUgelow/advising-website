import styles from "@/components/PackageCard/PackageCard.module.scss";
import { Box, Button, Typography } from "@mui/material";

const check = (
  <svg width='20' height='21' viewBox='0 0 20 21' fill='none'>
    <path
      d='M17.942 6.34732L7.94205 16.3473C7.884 16.4054 7.81507 16.4515 7.7392 16.483C7.66332 16.5144 7.58199 16.5306 7.49986 16.5306C7.41772 16.5306 7.3364 16.5144 7.26052 16.483C7.18465 16.4515 7.11572 16.4054 7.05767 16.3473L2.68267 11.9723C2.5654 11.855 2.49951 11.696 2.49951 11.5301C2.49951 11.3643 2.5654 11.2052 2.68267 11.0879C2.79995 10.9707 2.95901 10.9048 3.12486 10.9048C3.29071 10.9048 3.44977 10.9707 3.56705 11.0879L7.49986 15.0215L17.0577 5.46294C17.1749 5.34567 17.334 5.27979 17.4999 5.27979C17.6657 5.27979 17.8248 5.34567 17.942 5.46294C18.0593 5.58022 18.1252 5.73928 18.1252 5.90513C18.1252 6.07099 18.0593 6.23005 17.942 6.34732Z'
      fill='#10B981'
    ></path>
  </svg>
);

const PackageCard = ({ title, subheading, benefits, free }) => {
  return (
    <Box className={styles.card}>
      <Typography className={styles["card-title"]} variant='h6' component='p'>
        {title}
      </Typography>
      <Box className={styles["card-content"]}>
        <Typography>{subheading}</Typography>

        {benefits.map((item) => (
          <Box className={styles.benefit}>
            {check}
            <Typography>{item}</Typography>
          </Box>
        ))}
        <Button
          variant={free ? "outlined" : "contained"}
          sx={{
            marginTop: "24px",
            width: "100%",
            color: free && "#854ef2",
          }}
          component='a'
          href='https://calendly.com/dan-ugelow/breathwork'
          target='_blank'
        >
          {free ? "Free consultation" : "Book now"}
        </Button>
      </Box>
    </Box>
  );
};
export default PackageCard;
