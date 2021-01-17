var expression;
var newExpression; 
var operation;

console.log(expression);

var api_url = "";

async function getapi() { 
    expression = document.getElementById("formGroupExampleInput").value;
    newExpression= expression.replace("+", "%2B");
    operation = document.getElementById("operations").value;
    api_url = 'https://newton.now.sh/api/v2/'+operation+'/'+newExpression;
    // Storing response 
    const response = await fetch(api_url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    var resultSpace = document.getElementById("results");
    var result = data.result;
    console.log(result);
    resultSpace.innerHTML = result;
}

var button = document.getElementById("submit");
button.onclick = getapi;