import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getDirections(building: string, from: string, to: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a helpful indoor navigation assistant. Provide clear, concise, step-by-step directions."
      }, {
        role: "user",
        content: `I am at ${from} in ${building} and want to go to ${to}. Please provide numbered step-by-step directions.`
      }],
      temperature: 0.7,
      max_tokens: 200
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error getting directions:', error);
    throw new Error('Failed to get directions. Please try again.');
  }
}