document.querySelector('#generate-names').addEventListener('submit', loadNames);


// Execute the fn to query the API
function loadNames(e) {
    
    
    // Read the values from the form and create the variables
    const origin = document.querySelector('#country').value;
    const genre = document.querySelector('#genre').value;
    const amount = document.querySelector('#quantity').value;
    
    // Build the URL
    let url = 'http://uinames.com/api/?';
    
    // Read the origin and append the URL
    
    
    // Read the genre and append the URL
    
    
    // Read the amount and append the URL
    
    
    // AJAX call
    
    
    // Open the connection
    
    
    // Execute the fn
    xhr.onload = function() {
        
    }
    
    // Send the request
    
}
