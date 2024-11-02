import os
from dotenv import load_dotenv

# Load all env variables from .env file
load_dotenv()

class Settings:
    RETRIEVAL_KEY = os.getenv('RETRIEVAL_KEY')
    RETRIEVAL_ENDPOINT = os.getenv('RETRIEVAL_ENDPOINT')
    GENERATION_KEY = os.getenv('GENERATION_KEY')
    GENERATION_ENDPOINT = os.getenv('GENERATION_ENDPOINT')
    INDEX_PATH = os.getenv('INDEX_FILE_PATH')
