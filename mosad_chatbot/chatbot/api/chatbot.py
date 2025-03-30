from fastapi import APIRouter, WebSocket
from chatbot.services.chatbot_service import handle_chat

router = APIRouter()

@router.websocket("/chat")
async def chat_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        response = handle_chat(data)
        await websocket.send_text(response)
