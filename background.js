import { GoogleGenerativeAI } from "./cdn/ai-bard-cdn.js";

const API_KEY = "AIzaSyDAEgCwzZXUpK-zIkAVIG9TcZcyskupwqs";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro"});
// the above is the setup to use the bard appi

/*
 const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const responseBard = await result.response;
    const text = responseBard.text();
    console.log(text);
*/

async function TextToTextPrompt(prompt) {

    const result = await model.generateContent(prompt);
    const responseBard = await result.response;
    const text = responseBard.text();
    console.log(text);
    return text;

    // Use the model here
}



chrome.runtime.onMessage.addListener((msg,sender,sendResponse) => {

    if(msg.message == "textToTextPrompt") {
        TextToTextPrompt(msg.prompt).then(sendResponse);
        return true;
    }
});