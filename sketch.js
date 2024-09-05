let positions = [];
let postCount = 1; // Valor por defecto

function setup() {
    createCanvas(300, 300); 
    background(0); 
    frameRate(30);

    getPostCount().then(count => {
        postCount = count;
        for (let i = 0; i < postCount; i++) {
            positions.push([random(0, 280), random(0, 280)]);
        }
    });
}
  
function draw() {
    background(0); 
    if (positions.length === postCount) { // Verificar si positions está lleno
        for (let i = 0; i < postCount; i++) {
            let [x, y] = positions[i];
            circle(x, y, 20);
        }
    }
}

async function getPostCount() {
    const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/misterarroyososa.wordpress.com/posts?tag=objeto';
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.found; 
    } catch (error) {
        console.error('Error fetching post count:', error);
        return 0;
    }
}