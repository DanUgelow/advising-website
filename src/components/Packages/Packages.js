import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Packages/Packages.module.scss";
import PackageCard from "../PackageCard";

const advising = [
  "Work through technical problems",
  "Social media support",
  "Marketing support",
  "Clarity on business decisions and vision",
  "Insight in to how to execute web & mobile apps",
];

const completePackage = [
  "4 sessions",
  "Personalized plan to refocus and revitalize your business",
  "Website, app, & social media technical guidance",
  "Customized guides you can always reference, from social media to marketing",
  "Tailored social media templates you can use forever",
  "Additional communication and support outside sessions",
  "Learn how to generate more leads",
  "FREE social media guide",
];

const custom = [
  "Learn more about the process",
  "Clarify goals and pain points",
  "Create a plan to align with your vision",
  "Guidance on next steps",
];

export default function Packages() {
  return (
    <Box sx={{ padding: "60px 12px", position: "relative" }} id='Packages'>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component='h2'
          sx={{
            fontSize: "30px",
            fontWeight: 400,
            margin: "0 auto 24px",
            maxWidth: "447px",
          }}
        >
          Let’s Work Together
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            margin: "0 auto 60px",
            maxWidth: "350px",
          }}
        >
          100% money back guarantee
        </Typography>
      </Box>
      <Box className={styles.packages}>
        <PackageCard
          title='ADVISING'
          benefits={advising}
          subheading='Advising as you go. Book sessions as you need them.'
        />
        <PackageCard
          title='COMPLETE PACKAGE'
          benefits={completePackage}
          subheading='If you’re feeling stuck or uncertain. Advising and business aid that completely supports your knowledge and vision.'
        />
        <PackageCard
          title='CUSTOM PLAN'
          benefits={custom}
          subheading='Customized plan to fit your needs and budget.'
          free
        />
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {benefitsArr.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#EEF7FF",
              padding: "16px",
              borderRadius: "24px",
              margin: "10px",
              textAlign: "left",
              minHeight: "290px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                {item.heading}
              </Typography>
              {item?.cost && (
                <Typography>
                  <strong>Cost:</strong> {item.cost}
                </Typography>
              )}
              {item?.duration && (
                <Typography sx={{ marginBottom: "12px" }}>
                  <strong>Duration:</strong> {item.duration}
                </Typography>
              )}
              <Typography>{item.copy}</Typography>
            </Box>
            {item?.button && (
              <Button
                variant='contained'
                component='a'
                href={item.href}
                target='_blank'
              >
                {item.button}
              </Button>
            )}
          </Box>
        ))}
      </Box> */}
    </Box>
  );
}
