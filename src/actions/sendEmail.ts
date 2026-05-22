'use server';

import { sendEmail } from "../lib/email";
import { z } from "zod";

const ContactSchema = z.object({
  name:         z.string().min(2, "Name must be at least 2 characters"),
  email:        z.email("Invalid email address"),
  companyName:  z.string().min(2, "Company name is required"),
  subject:      z.string().min(3, "Subject must be at least 3 characters"),
  message:      z.string().min(5, "Please write a detailed message"),
});

export type FormState = {
  success?: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const data = {
    name:        formData.get("name") as string,
    email:       formData.get("email") as string,
    companyName: formData.get("companyName") as string,
    subject:     formData.get("subject") as string,
    message:     formData.get("message") as string,
  };

  // Validation
  const result = ContactSchema.safeParse(data);
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });

    return {
      errors: fieldErrors,
      message: "Please check the highlighted fields",
    };
  }

  const validatedData = result.data;

  try {
    const emailResult = await sendEmail({
      fromUserEmail: validatedData.email,
      subject: `New Contact: ${validatedData.subject} - ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Company: ${validatedData.companyName}
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; background: #f9fafb;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.companyName}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
      `,
    });

    return {
      success: emailResult.success,
      message: emailResult.success 
        ? "Thank you! Your message has been sent successfully." 
        : "Failed to send message",
    };
  } catch (error) {
    console.error("Contact Form Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}