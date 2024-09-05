# 🍒 ¿qué uso podríamos darle a estos datos que llegan desde la API de wordpress para conectarlos con una Inteligencia Artificial especializada en la creación de volúmenes 3D?

import requests
import os

# Ensure the environment variable is set
processing_api_key = os.environ.get('PROCESSIGN_API_KEY')
if not processing_api_key:
    raise EnvironmentError("PROCESSIGN_API_KEY environment variable not set")

payload = {
    "mode": "preview",
    "prompt": "create a mixed character that use the props máquina para tatuar, Antena VHF UHF, Bombillo de filamento",
    "art_style": "realistic",
    "negative_prompt": "low quality, low resolution, low poly, ugly"
}

headers = {
    "Authorization": f"Bearer {processing_api_key}"
}

try:
    response = requests.post(
        "https://api.meshy.ai/v2/text-to-3d",
        headers=headers,
        json=payload,
    )
    response.raise_for_status()
    print(response.json())
except requests.exceptions.RequestException as e:
    print(f"Error fetching 3D model: {e}")