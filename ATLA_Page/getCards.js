// fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
//     .then((response) => {
//         return response.json();
//     })
//     .then((myJson) => {
//         console.log(myJson);
//     });


async function getCharacters() {
    let obj;  
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=20')
      
    obj = await res.json();
    
    console.log(obj)

    



    obj.forEach(element => {
        foto = element.photoUrl
        nombre = element.name
        enemigos = element.enemies
        aliados = element.allies
        afiliacion = element.affiliation
        // console.log(photo, nombre, afiliacion)

        html = `
        <div class="carousel-item">
              <div class="items">       
                <h1>
                  ${nombre}
                </h1>
                <div class="parent">
              
                <div class="child">
                  <img src="${foto}" alt="">     
                </div>
                <div class="child">
                  <div class="info">
                    <h2>Allies</h2>
                    <h3>${aliados}</h3>
                  </div>
                  <div class="info">
                    <h2>Enemies</h2>
                    <h3>${enemigos}</h3>
                  </div>
                  <div class="info">
                    <h2>Affiliation</h2>
                    <h3>${afiliacion}</h3>
                  </div>
                </div>
              </div>
                
              </div>
            </div>
        `;

        document.getElementById('insert').innerHTML += html

    });


    



    }

getCharacters();