"use server";

import { sendEmail } from "../lib/email";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(1, "City is required"),
  type: z.enum(["Residential", "Business"]),
  issue: z.string().min(10, "Please describe your issue"),
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
    name: formData.get("full-name"),
    phone: formData.get("phone-number"),
    email: formData.get("email"),
    city: formData.get("city"),
    type: formData.get("residential-business"),
    issue: formData.get("issue-description"),
  };

  const result = ContactSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });

    return {
      errors: fieldErrors,
      message: "Validation failed",
    };
  }

  const validatedData = result.data;

  try {
    const emailResult = await sendEmail({
      // We pass the user's email here so email.ts can set it as replyTo
      fromUserEmail: validatedData.email,
      subject: `New Wi-Fi Service Request from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Phone: ${validatedData.phone}
        Email: ${validatedData.email}
        City: ${validatedData.city}
        Type: ${validatedData.type}
        Issue: ${validatedData.issue}
      `,
      html: `
        <body style="margin:0; padding:0; background-color:#f3f4f6; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
              <td align="center">
                <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px;">
                  <tr>
                    <td style="padding-bottom:20px;">
                      <h2 style="margin:0; color:#111827;">🔔 New Wi-Fi Service Request</h2>
                      <p style="margin:5px 0 0; font-size:13px; color:#6b7280;">Submitted via vektait.com</p>
                    </td>
                  </tr>
                  <tr><td><hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;"></td></tr>
                  <tr>
                    <td style="font-size:14px; color:#374151; line-height:22px;">
                      <h3 style="margin:0 0 10px; color:#1f2937;">Client Details</h3>
                      <strong>Full Name:</strong> ${validatedData.name}<br>
                      <strong>Phone Number:</strong> ${validatedData.phone}<br>
                      <strong>Email Address:</strong> ${validatedData.email}<br>
                      <strong>City:</strong> ${validatedData.city}<br>
                      <strong>Service Type:</strong> ${validatedData.type}
                    </td>
                  </tr>
                  <tr><td><hr style="border:none; border-top:1px solid #e5e7eb; margin:25px 0;"></td></tr>
                  <tr>
                    <td style="font-size:14px; color:#374151; line-height:22px;">
                      <h3 style="margin:0 0 10px; color:#1f2937;">Issue Description</h3>
                      <div style="background:#f9fafb; padding:15px; border-radius:8px; border:1px solid #e5e7eb;">
                        ${validatedData.issue}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      `,
    });

    return {
      success: emailResult.success,
      message: emailResult.success 
        ? "Form submitted successfully" 
        : `SMTP Error: ${emailResult.error}`,
    };
  } catch (error) {
    console.error("Action Crash:", error);
    return {
      success: false,
      message: "An unexpected server error occurred during submission.",
    };
  }
}