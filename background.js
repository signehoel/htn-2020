chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#E8DAEF'}, function() {
      console.log('The color is green.');
    });
});
/*
//import newton from '/newtonmath-1.js';
import axios from "axios";
const api = "https://newton.now.sh/api/v2/";

const getResponse = async (operation, expression) => {
    loading.style.display = "block";
    try {
        const response = await axios.get(`${api}/${operation}/${expression}`);
    }
    catch (error) {

    }
}

const handleSubmit = async e => {
    e.preventDefault();
    getResponse("derive", "x^2");
    console.log("done");
}
*/