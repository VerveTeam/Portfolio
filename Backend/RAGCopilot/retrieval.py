from settings import Settings 
from flask import jsonify
import os

def load_index():
    # Load the index from the file specified in settings
    if os.path.exists(Settings.INDEX_PATH):
        return GPTSimpleVectorIndex.load_from_file(Settings.INDEX_PATH)
    else:
        return None

def get_context(user_query, query_type):
    # Load the index
    index = load_index()
    
    if index is None:
        return jsonify({"error": "Index file not found."}), 404

    # Context array to store all relevant records
    records_array = []
    try:
        # Query the index
        results = index.query(user_query, top_k=5)

        # Collect the results
        for result in results:
            records_array.append(result)

        context = jsonify(records_array)
        return context
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return an error message if querying fails