document.querySelector('#generate-names').addEventListener('submit', loadNames);


// Execute the fn to query the API
function loadNames(e) {
    e.preventDefault();
    
    
    // Read the values from the form and create the variables
    const origin = document.querySelector('#country').value;
    const genre = document.querySelector('#genre').value;
    const amount = document.querySelector('#quantity').value;
    
    // Build the URL
    let url = 'http://uinames.com/api/?';
    
    // Read the origin and append the URL
    if (origin !== '') {
        url += `region=${origin}&`;
    }
    
    // Read the genre and append the URL
    if (genre !== '') {
        url += `gender=${genre}&`;
    }
    
    // Read the amount and append the URL
    if (amount !== '') {
        url += `amount=${amount}&`;
    }
    
    // AJAX call
    const xhr = new XMLHttpRequest();
    
    // Open the connection
    xhr.open('GET', url, true);
    
    // Execute the fn
    xhr.onload = function() {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);
            
            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            names.forEach(function(name) {
                html += `
                    <li>${name.name} Duquain</li>  
                `;
                    
            });
            
            html += '</ul>';
            
            document.querySelector('#result').innerHTML = html;
            
        }
    }
    
    // Send the request
    xhr.send();
    
}
