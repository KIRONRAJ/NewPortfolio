import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, EXPERIENCE, PROJECTS, SKILLS, CERTIFICATIONS, EDUCATION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a context string for the AI to "know" Kiron
const systemContext = `
You are an AI assistant living on Kironraj O P's portfolio website. Your goal is to represent Kiron professionally and answer questions about his skills, experience, education, and projects.

Here is Kiron's Data:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Bio: ${RESUME_DATA.about}
Location: ${RESUME_DATA.location}
Contact: ${RESUME_DATA.email}, ${RESUME_DATA.phone}
Website: www.kironraj.com

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.year})`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.name} (${c.issuer}, ${c.year})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Work Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Instructions:
1. Keep answers concise (under 3 sentences unless asked for detail).
2. Be polite, professional, and confident.
3. If asked about contact info, provide email and phone.
4. Highlight his dual expertise in Full Stack Development and Cyber Security.
5. Emphasize his current Master's studies in Cyber Security at Whitecliffe College.
6. If asked about a resume, mention there is a download button on the site.
7. Do not hallucinate false experience.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode (API Key missing). Please contact Kiron directly!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemContext,
        temperature: 0.7,
      }
    });

    return response.text || "I'm thinking...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};