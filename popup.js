var operation = "derive";
var expression = "(x^2 + 2x)";
var newExpression = expression.replace("+", "%2B");
var index;

const api_url = 'https://newton.now.sh/api/v2/'+operation+'/'+newExpression;

async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    var resultSpace = document.getElementById("results");
    var result = data.result;
    console.log(result);
    resultSpace.innerHTML = result;
} 
async function printData() { 
    
    data = getapi(api_url);
    console.log(data);
} 

getapi(api_url); 