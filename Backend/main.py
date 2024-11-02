from flask import Flask, request, jsonify
from settings import Settings 
from RAGCopilot import generator
from RAGCopilot import retrieval
from Crawler import crawlermain

app = Flask(__name__)

@app.route("/api/", methods = ['POST'])
def handle_query():
    # get JSON data from the API request
    data = request.get_json()

    # get user query and type of query from JSON data
    user_query = data.get('user_query')
    query_type = data.get('query_type')

    # perform retrival based on queryType
    context = retrieval.get_context(user_query, query_type)
    llm_response = generator.get_response(user_query, context)

    return jsonify(
        {
            "response":llm_response
        }
    )

def run_crawler():
    crawlermain.create_index()

def set_crawler_schedule():
    # Create a scheduler
    scheduler = BackgroundScheduler()
    scheduler.add_job(run_crawler, 'interval', hours=6)
    # Start the scheduler
    scheduler.start()

if __name__ == "__main__":
    # Run crawler at start up
    #run_crawler()  
    
    # Set crawler schedule to re-run after every interval
    #set_crawler_schedule()
    
    app.run(debug=True)