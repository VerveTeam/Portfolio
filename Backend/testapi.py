import requests

url = "http://127.0.0.1:5000/api/"
data = {
    "user_query": "What is the name of the girl who discovered glade",
    "query_type": "info"
}

response = requests.post(url, json=data)

# Print the raw response text
print("Response Text:", response.text)

# Attempt to print JSON response
try:
    print(response.json())
except requests.exceptions.JSONDecodeError:
    print("Response is not valid JSON.")
