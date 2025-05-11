import emailjs from "emailjs-com";

const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAIL_FORM_TEMPLATE_ID as string;
const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID as string;

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = (formData: EmailFormData): Promise<void> => {
  return emailjs
    .send(
      serviceId,
      templateId,
      {
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
        message: formData.message,
      },
      userId
    )
    .then(
      (response: { status: any; text: any }) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err: any) => {
        console.error("FAILED...", err);
        throw err;
      }
    );
};
