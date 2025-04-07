# from crewai_tools.tools.base_tool import BaseTool
# import psycopg2
# import os

# class RebuildTyreCheckerTool(BaseTool):
#     name = "RebuildTyreCheckerTool"
#     description = "Check the rebuild tyre stock status from the MOSAD system database."

#     def _run(self, query: str) -> str:
#         # Connect to PostgreSQL database (adjust these as needed)
#         conn = psycopg2.connect(
#             host=os.getenv("DB_HOST", "localhost"),
#             database=os.getenv("DB_NAME", "mosad"),
#             user=os.getenv("DB_USER", "postgres"),
#             password=os.getenv("DB_PASSWORD", "tdilmith"),
#             port=os.getenv("DB_PORT", "5432")
#         )
#         cur = conn.cursor()

#         # Query rebuild tyre stock table (adjust table/column names as needed)
#         cur.execute("SELECT customer_name FROM rebuild_tyre")
#         rows = cur.fetchall()

#         if not rows:
#             return "No rebuild tyre stock data available."

#         # Format the result neatly
#         result = "Rebuild Tyre Stock:\n"
#         for size, quantity in rows:
#             result += f"- Size {size}: {quantity} units\n"

#         cur.close()
#         conn.close()
#         return result
