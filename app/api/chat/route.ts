import { NextResponse } from "next/server";

const responses: { [key: string]: string } = {
  "how do i sell my license":
    "To sell your license, simply fill out our valuation form with your license details. We'll provide you with a fair market value and handle the entire process securely.",
  "what types of licenses do you accept":
    "We accept licenses from major software vendors including Adobe, Microsoft, Autodesk, VMware, and Oracle. If you have a different vendor, please contact us directly.",
  "how long does the process take":
    "The entire process typically takes 24-48 hours from submission to payment. We aim to provide valuations within 2 hours of submission.",
  "what payment methods do you accept":
    "We accept all major payment methods including bank transfers, PayPal, and credit cards. Payment is processed securely and typically completed within 24 hours.",
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const lowerMessage = message.toLowerCase();
    let response =
      "I'm sorry, I don't have information about that. Please contact our support team for more specific assistance.";

    // Check for matching responses
    for (const [key, value] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
