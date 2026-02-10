
import emailjs from "@emailjs/browser";

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID!,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
};


export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};


export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Bimbola", 
        to_email: "bimbolaokunade@gmail.com",
        reply_to: formData.email,
        date: new Date().toLocaleDateString(),
      },
    );

    return { success: true, data: response };
  } catch (error) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
