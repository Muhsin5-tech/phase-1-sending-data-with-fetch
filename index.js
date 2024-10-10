// Add your code here   
function submitData(name, email) {
            
            return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {
            const idDisplay = document.createElement('p');
            idDisplay.textContent = `New user ID: ${data.id}`;
            document.body.appendChild(idDisplay);
        })
        .catch(error => {
            const errorDisplay = document.createElement('p');
            errorDisplay.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorDisplay);
        });
    }

    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        submitData(event, name, email);
    });
   
    


