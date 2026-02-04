export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, age, phone, message } = req.body;

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Shringa Inquiry <onboarding@resend.dev>",
        to: "vibhashayana@gmail.com",
        subject: "New Inquiry Received",
        html: `
          <h2>New Student Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false });
  }
}
