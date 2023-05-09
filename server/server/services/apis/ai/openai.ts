import { Configuration, OpenAIApi } from "openai";
import { OPENAI_KEY } from "../../../config";

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export async function askChatGPT(question: string): Promise<string | false> {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant called Theia. You are created and designed by Theia AI Labs. You are created to make users life easier. You are created to make the world better a better place.",
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

//askChatGPT(
//"Hola theia que tal estas? cuentame la relatividad de manera simplificada"
//);
