import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { goal } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Business Goal: ${goal}

You are the Lead Growth Strategist at Infinity Growth Tech.

Respond in this format:

1. Business Diagnosis
2. Core Bottlenecks (3)
3. 90-Day Plan (3 Phases)
4. Recommended Services
5. Clear Next Step CTA

Be concise and authoritative.`,
            },
          ],
        },
      ],
      config: { temperature: 0.6 },
    });

    res.status(200).json({ advice: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      advice:
        "AI strategist unavailable. Call +91-8989601701 for assistance.",
    });
  }
}
