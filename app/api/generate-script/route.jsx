import { GENERATE_SCRIPT_PROMPT } from '@/services/Prompt';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req) {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const {topic} = req.json();
  
  const prompt = GENERATE_SCRIPT_PROMPT.replace('{topic}', topic);


  const completion = await openai.chat.completions.create({
    model: "google/learnlm-1.5-pro-experimental:free", // microsoft/phi-4-reasoning-plus:free
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    
  });

  console.log(completion.choices[0].message);
  return NextResponse.json(completion.choices[0].message)
  // return NextResponse.json({})
}
