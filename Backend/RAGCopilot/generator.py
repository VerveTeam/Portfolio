from settings import Settings 
from clarifai.client.model import Model

def get_response(query, context):
    
    # get_prompt will return the final prompt with context and query details in it
    prompt = get_prompt(query,context)

    # get_llm_response will return the final answer for the query. 
    # This will be returned as a copilot resposne
    llm_response = get_llm_response(prompt)
    
    return llm_response


def get_prompt(query, context):
    prompt = """ You are an polite AI assitant, your goal is to answer to `QUERY` based on `CONTEXT` provided to you to the best of your abilities. If you cant answer the QUERY you can simply ask for more context or a different question. Here is the QUERY: {} \n\n Here is the Context: {}"""
    prompt = prompt.format(query,context)
    return prompt

def get_llm_response(prompt):
    # initiating settings class to fetch env variables
    settings = Settings() 

    # You can set the model using model URL or model ID.
    model_url = settings.GENERATION_ENDPOINT
    pat_key = settings.GENERATION_KEY
    
    # Generate response using LLM
    model_output = Model(url = model_url,pat = pat_key).predict_by_bytes(prompt.encode(), input_type="text")

    return(model_output.outputs[0].data.text.raw)
