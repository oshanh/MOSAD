import openai
from config import OPENAI_API_KEY, OPENAI_MODEL

# Create an OpenAI client with your API key
client = openai.OpenAI(api_key=OPENAI_API_KEY)

try:
    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[{"role": "system", "content": "Say hello"}]
    )
    print(response.choices[0].message.content)
except Exception as e:
    print("Error:", e)
