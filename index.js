function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const data = {
      name: name,
      email: email
    };
    const body = JSON.stringify(data);
  
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
      .then(response => response.json())
      .then(data => {
        appendToDOM(data.id);
      })
      .catch(error => {
        appendToDOM(error.message);
      });
  }
  
  function appendToDOM(value) {
    const idDiv = document.createElement('div');
    idDiv.textContent = value;
    document.body.appendChild(idDiv);
  }
  
  
  
  
  
  
  
  
 
  