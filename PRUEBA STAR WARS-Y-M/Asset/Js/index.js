function createCardElement(data, containerId) {
  for (let i = 0; i < data.length; i++) {
    const person = data[i];  // los datos del arreglo = persona


// Creo los elementos del DOM
    let card = document.createElement('div');
    card.className = 'card ms-2 my-3';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex align-items-center';

    let circleDiv = document.createElement('div');
    circleDiv.className = 'col-1 ';

    let image = document.createElement('img');
    image.src = 'https://3.bp.blogspot.com/-JmLcUwhEefg/WG69P9yKmyI/AAAAAAAAKcY/SrvuFPgaiY8s3yca6wv8FOMGnsheE95JQCLcB/s1600/LEGO_Star_Wars_Episode_1_logo.png';
    image.alt = 'Logo de LEGO Star Wars Episode 1';
    image.style.width = '30px'; // Establece el ancho de la imagen en 30 píxeles

    let textDiv = document.createElement('div');
    textDiv.className = 'ms-3';

    let nameElement = document.createElement('h5');
    nameElement.className = 'card-title fw-bold';
    nameElement.innerText = person.name;

    let subtitleElement = document.createElement('h8');
    subtitleElement.className = 'card-subtitle p mb-2 text-muted';
    subtitleElement.innerHTML = `<span><b>Estatura:</b> ${person.height} <b>Peso:</b> ${person.mass}</span>`;

    circleDiv.appendChild(image);
    textDiv.appendChild(nameElement);
    textDiv.appendChild(subtitleElement);
    cardBody.appendChild(circleDiv);
    cardBody.appendChild(textDiv);
    card.appendChild(cardBody);

    document.getElementById(containerId).appendChild(card);  // Envio las card!!
  }
}

function fetchPeopleDataOne() { // CONSUMO DE API 
  const promises = []; 

  //Recorrido hasta la posicion 5
  for (let i = 1; i <= 5; i++) {
    const promise = fetch(`https://swapi.dev/api/people/${i}/`)
      .then(response => response.json())
      .then(data => {
        console.log("Data obtenida:", data);

        document.getElementById('informacionCantidad').innerText = ` 1 - ${Object.keys(data).length-11}`;
        document.getElementById('informacionCantidad').style.color = 'white';

        return data;
      })
      .catch(error => console.error('Error:', error));

    promises.push(promise);
  }

  return Promise.all(promises);
}

function fetchPeopleDataTwo() {
  const promises = [];

  for (let i = 6; i <= 10; i++) {
    const promise = fetch(`https://swapi.dev/api/people/${i}/`)
      .then(response => response.json())
      .then(data => {
        console.log("Data obtenida:", data);
        document.getElementById('informacionCantidadDos').innerText = `6 - ${Object.keys(data).length-5}`;
        document.getElementById('informacionCantidadDos').style.color = 'white';

        return data;
      })
      .catch(error => console.error('Error:', error));

    promises.push(promise);
  }

  return Promise.all(promises);
}




function fetchPeopleDataThree() {
  const promises = [];

  for (let i = 12; i <= 16; i++) {
    const promise = fetch(`https://swapi.dev/api/people/${i}/`)
      .then(response => response.json())
      .then(data => {
        console.log("Data obtenida TRESSS:", data);
        document.getElementById('informacionCantidadTres').innerText = `12 - ${Object.keys(data).length+1}`;
        document.getElementById('informacionCantidadTres').style.color = 'white';
        return data;
      })
      .catch(error => console.error('Error:', error));

    promises.push(promise);
  }

  return Promise.all(promises);
}

fetchPeopleDataOne()
fetchPeopleDataTwo()
fetchPeopleDataThree()

$(function(){
  $("#informacionCantidad").one("mouseenter", function(){ 

    console.log("Entramos en el evento uno");
    fetchPeopleDataOne()
      .then(data => createCardElement(data, 'informacionCards'))
      .catch(error => console.error('Error:', error));
  });

  $("#informacionCantidadDos").one("mouseenter", function(){ 


    
    console.log("Entramos en el evento dos");
    fetchPeopleDataTwo()
      .then(data => createCardElement(data, 'informacionCardsDos'))
      .catch(error => console.error('Error:', error));
  });


  $("#informacionCantidadTres").one("mouseenter", function(){ 
    console.log("Entramos en el evento tres");
    fetchPeopleDataThree()
      .then(data => createCardElement(data, 'informacionCardsTres'))
      .catch(error => console.error('Error:', error));
  });
});



