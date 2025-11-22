import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateComponentCode = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const systemInstruction = `
    You are an expert React and Tailwind CSS engineer.
    Your task is to generate a React Functional Component based on the user's description.
    
    Rules:
    1. Return ONLY the code. Do not wrap it in markdown code blocks (e.g., no \`\`\`tsx).
    2. Use TypeScript interfaces for props.
    3. Use Tailwind CSS for styling. Ensure it looks modern, clean, and dark-mode compatible.
    4. Use 'lucide-react' for icons if requested or appropriate.
    5. Do not include import statements for React, just the component definition and exports.
    6. Export the component as 'default'.
    7. Ensure the code is valid and error-free.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2, // Low temperature for consistent code
      }
    });

    let code = response.text || '';
    
    // Cleanup if model accidentally adds markdown
    code = code.replace(/^```tsx\n/, '').replace(/^```javascript\n/, '').replace(/^```\n/, '').replace(/```$/, '');
    
    return code.trim();

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate component code.");
  }
};
