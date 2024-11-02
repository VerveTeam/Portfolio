from settings import Settings 
from flask import jsonify
from llama_index.core import Document
from llama_index.vector_stores.chroma import ChromaVectorStore

def create_index():
    # Initiating settings class to fetch env variables
    settings = Settings() 

    # Sample data for testing purposes
    data = [
        {
            "id": 1,
            "text": "In a small village, a girl named Lila discovers a hidden glade filled with glowing flowers."
        },
        {
            "id": 2,
            "text": "A Lumina guardian tells her the flowers are fading due to lost belief in magic."
        },
        {
            "id": 3,
            "text": "Lila spreads wonder among the village children, rekindling their imagination."
        },
        {
            "id": 4,
            "text": "Ultimately, she wishes for the village to always cherish its sense of adventure."
        },
        {
            "id": 5,
            "text": "This ensures the Lumina continues to dance among the flowers as a symbol of magic."
        }
    ]

    # Create a list of Document objects from the data
    documents = [Document(id=item['id'], text=item['text']) for item in data]

    # Create a Chroma vector store
    vector_store = ChromaVectorStore()

    # Assuming you can add documents directly to the vector store
    for document in documents:
        vector_store.add_document(document)

    try:
        # Save the vector store to the file specified in settings (if supported)
        vector_store.save_to_file(settings.INDEX_PATH)
        print(jsonify({"message": "Index created and saved."}))
    
    except Exception as e:
        # Handle the exception and return an error message
        print(jsonify({"error": str(e)}), 500)

