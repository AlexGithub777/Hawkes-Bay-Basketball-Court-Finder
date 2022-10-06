let courts = [{id: 0, name: "Marine Parade", place: "Napier", thumbs_up: 21, thumbs_down: 6, image_URL: "Images/marine_parade.jpeg", link_URL: "Courts/marine_parade.html"},
              {id: 1, name: "Fitzgerald Place Reserve", place: "Napier", thumbs_up: 18, thumbs_down: 6, image_URL: "Images/fitzgerald_place_reserve.jpg", link_URL: "Courts/fitzgerald_place_reserve.html"},
              {id: 2, name: "Flaxmere Park", place: "Hastings", thumbs_up: 16, thumbs_down: 3, image_URL: "Images/flaxmere_park.jpg", link_URL: "Courts/flaxmere_park.html"},
              {id: 3, name: "Wairoa Park", place: "Wairoa", thumbs_up: 16, thumbs_down: 3, image_URL: "Images/flaxmere_park.jpg", link_URL: "Courts/flaxmere_park.html"}]
            
function display_courts() {
    let htmlContent = "";

    for(let i = 0 ; i < courts.length ; i++) {
        let courtContent = `<div class="courtBox">
                                <img src=${courts[i].image_URL}>
                                <br>
                                    <div class="courtBody">
                                        <h3>${courts[i].name}</h3>
                                        <br>
                                        <p>${courts[i].place}</p>
                                        <br>
                                        <p>👍 ${courts[i].thumbs_up} 👎 ${courts[i].thumbs_down}</p>
                                        <br>
                                    </div>
                            <div class="button-wrapper"><a class="button-1" href=${courts[i].link_URL}>View Court</a>
                            </div></div>`;

                            htmlContent += courtContent;
    }
    document.getElementById("courtsBox").innerHTML = htmlContent;
}



function contact() {
    alert('Your message has been sent.')
}


function openMenu() {
  var x = document.getElementById("topNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

var searchFilter = () => {
    const input = document.querySelector(".form-control");
    const courts = document.getElementsByClassName("courtBox");
    let searchResult = 0
    let filter = input.value
    if (filter.length > 0) {
        document.getElementById("searchText").style.display = "block"; 
    } else {
        document.getElementById("searchText").style.display = "none";
    }
    
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block";
        
        searchResult ++
    } else {
        courts[i].style.display = "none";   
    }
    }

    if (searchResult == 0 && filter.length > 0) {
        document.getElementById("no_results").style.display = "block";
        document.getElementById("searchText").style.display = "none";

    } else {
        document.getElementById("no_results").style.display = "none";
    }
    
    
}




var Napier = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Napier"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var Hastings = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Hastings"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var Wairoa = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Wairoa"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

var CHB = () => {
    const courts = document.getElementsByClassName("courtBox");
    let filter = "Central Hawkes Bay"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".courtBody")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}


var TopRated= () => {
    
    courts.sort((a, b) => b.thumbs_up - a.thumbs_up);
    let Top3RatedCourts = courts.slice(0, 3);
    let htmlContent = "";

    for(let i = 0 ; i < Top3RatedCourts.length ; i++) {
        let courtContent = `<div class="Top3RatedCourts">
                                <img src=${courts[i].image_URL}>
                                <br>
                                <div class="courtBody">
                                    <h3>${courts[i].name}</h3>
                                    <br>
                                    <p>${courts[i].place}</p>
                                    <br>
                                    <p>👍 ${courts[i].thumbs_up} 👎 ${courts[i].thumbs_down}</p>
                                    <br>
                                </div>
                        <div class="button-wrapper"><a class="button-1" href=${courts[i].link_URL}>View Court</a>
                        </div></div>`;

                        htmlContent += courtContent;
}

document.getElementById("Top3RatedCourts").innerHTML = htmlContent;
}
    


window.onload = function() {
    if (window.location.href.indexOf('napier.html') > -1) {
        display_courts();
        Napier();
    }
    if (window.location.href.indexOf('hastings.html') > -1) {
        display_courts();
        Hastings();
    }
    if (window.location.href.indexOf('home.html') > -1) {
        display_courts();
        TopRated();
    }
    if (window.location.href.indexOf('wairoa.html') > -1) {
        display_courts();
        Wairoa();
    }
    if (window.location.href.indexOf('central_hawkes_bay.html') > -1) {
        display_courts();
        CHB();
    }
  }
