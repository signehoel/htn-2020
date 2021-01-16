const api_url = 'https://newton.now.sh/api/v2/derive/x^2';

async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    //show(data); 
} 

getapi(api_url); 