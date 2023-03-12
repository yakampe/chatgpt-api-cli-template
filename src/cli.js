import * as dotenv from 'dotenv'
dotenv.config()

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function cli(arg) {
    const completion = await openai.createChatCompletion({
        model: process.env.model,
        messages: [
            {"role": "system", "content": process.env.SYSTEM_MESSAGE},
            {"role": "user", "content": arg[2]}
        ]
    });

    console.log('\n');
    console.log(completion.data.choices[0].message.content);
    console.log('\n');
    console.info(`Total tokens used: ${completion.data.usage.total_tokens}`);
      
}
