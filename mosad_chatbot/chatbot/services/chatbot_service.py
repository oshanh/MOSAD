from langchain.chat_models import ChatOpenAI
from chatbot.config import OPENAI_API_KEY, OPENAI_MODEL_NAME
from chatbot.utils.faq_loader import load_faq_context
from chatbot.agents.assistant_agent import get_assistant_agent

llm = ChatOpenAI(openai_api_key=OPENAI_API_KEY, model_name=OPENAI_MODEL_NAME)
faq_context = load_faq_context("faq/mosad_faq.txt")
agent = get_assistant_agent(llm, faq_context)

def handle_chat(message: str):
    return agent.chat(message)