import {
  GoogleGenerativeAI,
  // eslint-disable-next-line no-unused-vars
  HarmCategory,
  // eslint-disable-next-line no-unused-vars
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAH6OeBBORkaGjOndUxoqxpgYooUV67ESQ"; // Be sure to replace this with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

async function run(prompt) {
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

// Example usage
// run("Your prompt here").catch(console.error); // Pass a prompt here and handle any potential errors

export default run;
