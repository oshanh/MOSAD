import asyncio
import websockets

async def test_websocket():
    uri = "ws://localhost:8001/chat"  # Your WebSocket endpoint
    async with websockets.connect(uri) as websocket:
        await websocket.send("Check stock of Michelin")
        response = await websocket.recv()
        print(f"Response: {response}")

asyncio.run(test_websocket())
