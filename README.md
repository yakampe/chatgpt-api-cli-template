# Setup

## Prerequistes 

1. To set this up you will need `npm`. 
2. You will need to provide API key from openai. [Follow this link to create a key.](https://platform.openai.com/account/api-keys)
3. Rename the `.env_example` to `.env` at the root of the project. And provide the `API_KEY`value from step (2).
4. Run `npm link`
5. Use `assistdd "Your question"` in terminal to interace with ChatGPT.

# Description

There is a system message that will enable the ChatGPT to act in a certain way. Currently in the example it is set to 
```
SYSTEM_MESSAGE="You are an expert in TDD and Java. I will be givin you unit tests and you will write me the implementation! Your answers should be extremely brief!"
```

This tells ChatGPT what is it's purpose. 

![Image](https://cdn.discordapp.com/attachments/1077304012329721856/1084469923037843587/IOmSlaOQ_400x400.png)


# Example

![Image](https://cdn.discordapp.com/attachments/1077304012329721856/1084469101738590288/image.png)