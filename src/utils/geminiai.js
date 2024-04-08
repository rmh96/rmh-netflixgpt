import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINIAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAI_KEY);

export const aiModel = GEMINIAI.getGenerativeModel({ model: "gemini-pro" });
