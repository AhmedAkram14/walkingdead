let next = document.querySelector("table #next")
let pre = document.querySelector("table #pre")
let tableBody = document.querySelector("table .tbody")
let s = "&nbsp;"
let select = document.querySelector("select")
let tableRow = document.createElement("tr")
let start = 0;
let end = 10;
let charactersNumber = 10;



async function getInfo() {
    const response = await fetch('https://thewalkingdead-api.onrender.com/api/characters')
    const data = await response.json()
    let characters = data.slice(0, select.value)
    console.log(select.value)
    select.addEventListener("change" , function(){
      tableBody.innerHTML = ""
      charactersNumber = +select.value;
      end = start + charactersNumber;
      characters = data.slice(start, end)
        allCharacters(characters)
     })

    cursor()
    allCharacters(characters)
     next.addEventListener("click" , function(){  
      start = end;
      end = end + charactersNumber;
       tableBody.innerHTML = ""
       characters = data.slice(start , end);
      console.log(characters)
       allCharacters(characters)
       cursor()
     })

     pre.addEventListener("click" , function(){
      end = start;
      start = end - charactersNumber;
      tableBody.innerHTML = "";
      characters = data.slice(start , end);
      console.log(characters)
      allCharacters(characters)
      cursor()
      })


      function cursor(){
        if (characters[0].id == 0){
          pre.style.color = "#ffff004d"
          pre.style.pointerEvents = "none"
          next.onclick = function(){
            pre.style.color = "yellow"
          pre.style.pointerEvents = ""
          }
        } else {
          pre.style.color = "yellow"
          pre.style.cursor = "pointer"
        }
      }
    }

function allCharacters(characters){
  for(i = 0 ; i < characters.length ; i++){
    let name = document.createElement("h3")
    name.innerHTML = characters[i].Name
    let img = document.createElement("img")
    let tableRow = document.createElement("tr")
    tableRow.id = `${i}`
    let tableD0 = document.createElement("td")
    let tableD1 = document.createElement("td")
    let tableD2 = document.createElement("td")
    tableD0.appendChild(document.createTextNode(+characters[i].id + 1))
    tableD1.appendChild(document.createTextNode(characters[i].Name))
    tableD2.appendChild(img)
    tableD2.appendChild(img).className = "imgaya"
    tableBody.appendChild(tableRow)
    tableRow.appendChild(tableD0)
    tableRow.appendChild(tableD1)
    tableRow.appendChild(tableD2)
    img.src = characters[i].Image
    img.style.width = "50px"

    let info =  document.querySelector(".info")
    info.style.display = "flex"
      info.innerHTML = `
      <h2>${characters[0].Name}</h2>
      <img src="${characters[0].Image}" alt="">
      <p>Gender ${s.repeat(19)}:  ${characters[0].Gender} </p>
      <p>Hair  ${s.repeat(24)}:  ${characters[0].Hair} </p>
      <p>Ethni city ${s.repeat(15)}:  ${characters[0].Ethnicity} </p>
      <p>Status ${s.repeat(21)}:  ${characters[0].Status} </p>
      <p>First Appearance ${s.repeat(3)}:  ${characters[0].FirstAppearance} </p>
      <p>Last Appearance ${s.repeat(3)}:  ${characters[0].LastAppearance} </p>
      <p>Death Episode ${s.repeat(6)}:  ${characters[0].DeathEpisode} </p>
      <p>Cause Of Death ${s.repeat(4)}:                   ${characters[0].CauseOfDeath} </p>`
    
    tableRow.addEventListener("click", function(){
      let backgroundInfo = document.querySelector(".back-ground")
      let all = document.querySelector(".All")
      let body = document.querySelector("body")
      console.log(all)

      let close = document.querySelector(".back-ground i")
      let cover = document.querySelector(".cover")
      function myFunction(x) {
        if (x.matches) { // If media query matches
          cover.style.display = "block"
          backgroundInfo.style.opacity = "1";
          backgroundInfo.style.width = "120%"
          backgroundInfo.style.height = "auto"
          backgroundInfo.style.transition = "0.3s"
          backgroundInfo.style.zIndex = "1"
          info.style.display = "flex"
          info.style.opacity = "1"
          close.style.display = "block"

          close.addEventListener("click" , function(){
            cover.style.display = "none"
            backgroundInfo.style.opacity = "0";
          backgroundInfo.style.width = "0%"
          backgroundInfo.style.height = "0%"
          backgroundInfo.style.zIndex = "-2"
          info.style.display = "none"
          })
          cover.addEventListener("click" , function(){
            cover.style.display = "none"
            backgroundInfo.style.opacity = "0";
          backgroundInfo.style.width = "0%"
          backgroundInfo.style.height = "0%"
          backgroundInfo.style.zIndex = "-2"
          info.style.display = "none"
          })
          
          
          
        } 
      }



      let x = window.matchMedia("(max-width: 992px)" || "(max-width: 786px)")

      myFunction(x)
      info.innerHTML = `
      <h2>${characters[tableRow.id].Name}</h2>
      <img src="${characters[tableRow.id].Image}" alt="">
      <p>Id  ${s.repeat(27)} :  ${tableD0.innerHTML}</p>
      <p>Gender ${s.repeat(19)}:  ${characters[tableRow.id].Gender} </p>
      <p>Hair  ${s.repeat(24)}:  ${characters[tableRow.id].Hair} </p>
      <p>Ethni city ${s.repeat(15)}:  ${characters[tableRow.id].Ethnicity} </p>
      <p>Status ${s.repeat(21)}:  ${characters[tableRow.id].Status} </p>
      <p>First Appearance ${s.repeat(3)}:  ${characters[tableRow.id].FirstAppearance} </p>
      <p>Last Appearance ${s.repeat(3)}:  ${characters[tableRow.id].LastAppearance} </p>
      <p>Death Episode ${s.repeat(6)}:  ${characters[tableRow.id].DeathEpisode} </p>
      <p>Cause Of Death ${s.repeat(4)}:                   ${characters[tableRow.id].CauseOfDeath} </p>`
      

       })
       }
      }
      getInfo()








