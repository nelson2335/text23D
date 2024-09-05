let positions = [];
let postCount = 1;
const padding = 10;
const circleDiameter = 20;

function setup() {
    createCanvas(300, 300); 
    background(0); 
    frameRate(30);

    getPostCount().then(count => {
        postCount = count;
        const maxX = width - padding - circleDiameter;
        const maxY = height - padding - circleDiameter;
        
        positions = [];
        for (let i = 0; i < postCount; i++) {
            positions.push([random(padding, maxX), random(padding, maxY)]);
        }
    });
}

function draw() {
    background(0); 
    if (positions.length === postCount) {
        for (let i = 0; i < postCount; i++) {
            let [x, y] = positions[i];
            circle(x, y, circleDiameter);
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
