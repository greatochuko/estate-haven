import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";

export async function sendMail({
  agentName,
  propertyName,
  location,
  propertyId,
  clientName,
  clientEmail,
  clientPhoneNumber,
  clientMessage,
  recipient,
}: {
  agentName: string;
  propertyName: string;
  location: string;
  propertyId: string;
  clientName: string;
  clientEmail: string;
  clientPhoneNumber: string;
  clientMessage: string;
  recipient: string;
}): Promise<{ done: boolean; error: string | null }> {
  try {
    await emailjs.send(
      "service_c7zszyp",
      "template_7fm7d7l",
      {
        agentName,
        propertyName,
        location,
        propertyId,
        clientName,
        clientEmail,
        clientPhoneNumber,
        clientMessage,
        recipient,
        origin: process.env.NEXT_PUBLIC_ORIGIN,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        privateKey: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY!,
      }
    );
    return { done: true, error: null };
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      return { done: false, error: err.text };
    }
    const error = err as Error;
    return { done: false, error: error.message };
  }
}
