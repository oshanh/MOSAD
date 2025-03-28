from fastapi import APIRouter, WebSocket, Depends
from chatbot.api.auth import get_user_role
from chatbot.services.chatbot_service import handle_chat

router = APIRouter()

@router.websocket("/chat")
async def chat_endpoint(websocket: WebSocket, token: str):
    await websocket.accept()
    role = get_user_role(token)
    while True:
        data = await websocket.receive_text()
        response = handle_chat(data, role)
        await websocket.send_text(response)