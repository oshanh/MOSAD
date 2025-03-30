from crewai import Agent

def get_assistant_agent(llm, faq_context):
    return Agent(
        name="HelperBot",
        llm=llm,
        description="Answers user questions using knowledge of the webapp database and FAQs.",
        goal="Help users understand how to use the system or query data."
    )
