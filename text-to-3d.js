import axios from 'axios'

const headers = { Authorization: `Bearer ${PROCESSIGN_API_KEY}` };
const payload = {
mode: 'preview',
prompt: 'a monster mask',
art_style: 'realistic',
negative_prompt: 'low quality, low resolution, low poly, ugly',
};

try {
const response = await axios.post(
'https://api.meshy.ai/v2/text-to-3d',
payload,
{ headers }
);
console.log(response.data);
} catch (error) {
console.error(error);
}
