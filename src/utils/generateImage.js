import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// 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
const openai = new OpenAIApi(configuration);

async function generateRandomImage({ prompt, size }) {
  const completion = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: size,
  });
  console.log(completion.data);
}

export { generateRandomImage };
