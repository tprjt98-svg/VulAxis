import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const getGeminiInsights = async (scanResults: any) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Analyze the following security scan results for a VAPT assessment and provide tactical insights, threat predictions, and remediation strategies in a concise format: ${JSON.stringify(scanResults)}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Tactical intelligence stream interrupted. Neural link failed.";
  }
};
