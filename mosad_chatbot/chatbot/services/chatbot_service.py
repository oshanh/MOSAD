from langchain_openai import ChatOpenAI
from chatbot.config import OPENAI_API_KEY, OPENAI_MODEL_NAME
from chatbot.utils.faq_loader import load_faq_dataframe
from chatbot.agents.assistant_agent import get_assistant_agent
from crewai import Task
from rapidfuzz import fuzz

llm = ChatOpenAI(openai_api_key=OPENAI_API_KEY, model_name=OPENAI_MODEL_NAME)
faq_df = load_faq_dataframe("faq/mosad_faq.csv")
agent = get_assistant_agent(llm, None)  # Context is now injected dynamically

def get_top_faq_matches(user_question: str, top_n: int = 3) -> str:
    scored = [
        (fuzz.token_sort_ratio(user_question, q), q, a)
        for q, a in zip(faq_df["Question"], faq_df["Answer"])
    ]
    top_matches = sorted(scored, reverse=True)[:top_n]
    return "\n".join([f"Q: {q}\nA: {a}" for _, q, a in top_matches])

def handle_chat(message: str):
    relevant_faq = get_top_faq_matches(message)
    task_description = (
        f"You are a helpful assistant. Use the following FAQs to answer the user question as accurately as possible.\n\n"
        f"Relevant FAQ examples:\n{relevant_faq}\n\n"
        f"User question: {message}"
    )
    task = Task(
        description=task_description,
        agent=agent,
        expected_output="A clear and concise answer based on the most relevant FAQ(s)."
    )
    return agent.execute_task(task)
