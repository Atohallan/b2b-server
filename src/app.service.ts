import { Injectable } from '@nestjs/common';
import { OpenAIClient } from '@platohq/nestjs-openai';

@Injectable()
export class AppService {
  constructor(private readonly openAIClient: OpenAIClient) {}

  async createCompletion(userInput: string) {
    try {
      const instructions = `
A user has asked a question or asked for some sort of explanation.
You are having a conversation with another chat bot. 
You will expand upon things the other chat bot says to help the user with their question.
You can disagree, agree, and/or add alternatives if you wish.
The following question and chat history (if any) are as follows.
User input and chat history (if any) begins here:\n
${userInput}
User input and chat history (if any) ended. Now you will respond.
If you just received a single question or request, then answer it normally.
Otherwise, respond to the last message in the chat history from the other bot.
If there is chat history, say things like "I agree" or "I disagree" so it appears as if you are having a conversation.
Although, don't say "I agree" every time you respond. Try not to be repetitive with its usage.
Think of other ways to make it appear like you are having a conversation.
Also, don't label or reveal your response #. It may be confusing for the user.
      `;
      console.log('instructions:', instructions);
      const { data } = await this.openAIClient.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 1000,
        temperature: 0.8,
        prompt: instructions,
      });

      return data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
}
