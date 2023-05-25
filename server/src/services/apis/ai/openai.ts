import { Configuration, OpenAIApi } from "openai";
import { OPENAI_KEY } from "../../../config";

export async function askChatGPT(
  question: string,
  context?: string
): Promise<string | false> {
  try {
    const configuration = new Configuration({
      apiKey: OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: context ? context : "Be whatever you want to be.",
        },
        { role: "user", content: question },
      ],
      max_tokens: 1024,
    });
    const ans = completion.data.choices[0].message?.content as string;
    return ans;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return false;
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
