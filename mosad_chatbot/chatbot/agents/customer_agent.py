from crewai import Agent

def get_admin_agent(llm):
    return Agent(name="AdminBot", llm=llm, description="Handles full stock management.")