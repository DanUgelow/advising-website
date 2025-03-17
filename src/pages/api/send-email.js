export const runtime = "edge";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_PRIVATE_KEY);

const sendEmailAPI = async (req) => {
  const body = await req.json();
  const { from, message, recaptchaToken } = body;

  try {
    // const siteVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    // const verifyRes = await fetch(siteVerifyURL, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   method: "POST",
    // });

    // const verifyData = await verifyRes.json();

    // if (verifyData?.success && verifyData?.score > 0.5) {

    const { data, error } = await resend.emails.send({
      from: "advising@email.inspiradvising.com",
      to: process.env.PERSONAL_EMAIL_PRIVATE,
      subject: `Inspira Advising: ${from}`,
      text: message,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("insideError12", error);
    return Response.json({ error }, { status: 500 });
  }
};

export default sendEmailAPI;
