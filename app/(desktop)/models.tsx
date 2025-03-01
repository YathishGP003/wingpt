export const MODELS = [
  { name: "Groq llama3-70b", id: "llama3-70b-8192", provider: "groq" },
  { name: "OpenAI gpt-4o", id: "gpt-4o", provider: "openai" },
];

// export const MODELS = [
//   // Prioritize Groq since it offers free tier access
//   { 
//     name: "Groq llama3-70b", 
//     id: "llama3-70b-8192", 
//     provider: "groq",
//     costEffective: true
//   },
  
//   // Fallback to GPT-3.5 instead of GPT-4o if facing quota issues
//   { 
//     name: "OpenAI GPT-3.5 Turbo", 
//     id: "gpt-3.5-turbo", 
//     provider: "openai",
//     costEffective: true
//   },

//   // Keep GPT-4o as optional for users with proper access
//   { 
//     name: "OpenAI GPT-4o (Requires API Access)", 
//     id: "gpt-4o", 
//     provider: "openai",
//     requiresAuth: true
//   },
// ];

// // Helper function to get first available model
// export const getDefaultModel = () => {
//   const available = MODELS.filter(m => {
//     if (m.provider === "openai" && !process.env.OPENAI_API_KEY) return false;
//     if (m.provider === "groq" && !process.env.GROQ_API_KEY) return false;
//     return true;
//   });
  
//   return available[0] || MODELS[0];
// };