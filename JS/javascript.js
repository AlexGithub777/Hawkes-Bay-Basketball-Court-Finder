// Create courts array 
let courts = [{name: "Marine Parade", place: "Napier", thumbs_up: 21, thumbs_down: 6, image_URL: "Images/marine_parade.jpeg", link_URL: "Courts/marine_parade.html"},
              {name: "Fitzgerald Place Reserve", place: "Napier", thumbs_up: 18, thumbs_down: 6, image_URL: "Images/fitzgerald_place_reserve.jpg", link_URL: "Courts/fitzgerald_place_reserve.html"},
              {name: "Flaxmere Park", place: "Hastings", thumbs_up: 16, thumbs_down: 3, image_URL: "Images/flaxmere_park.jpg", link_URL: "Courts/flaxmere_park.html"}, 
              {name: "St Joseph's School", place: "Central Hawkes Bay", thumbs_up: 22, thumbs_down: 5, image_URL: "Images/st_joseph's_school.png", link_URL: "Courts/st_joseph's_school.html"},
              {name: "Wairoa Community Centre", place: "Wairoa", thumbs_up: 9, thumbs_down: 1, image_URL: "Images/wairoa_community_centre.jpg", link_URL: "Courts/wairoa_community_centre.html"},
              {name: "Kirkpatrick Park", place: "Hastings", thumbs_up: 14, thumbs_down: 3, image_URL: "Images/kirkpatrick_park.jpg", link_URL: "Courts/kirkpatrick_park.html"},
              {name: "Mitre 10 Park", place: "Hastings", thumbs_up: 28, thumbs_down: 7, image_URL: "Images/mitre_10_park.jpg", link_URL: "Courts/mitre_10_park.html"},
              {name: "Russell Park", place: "Central Hawkes Bay", thumbs_up: 5, thumbs_down: 5, image_URL: "Images/russell_park.jpeg", link_URL: "Courts/russell_park.html"},
              {name: "Anderson Park", place: "Napier", thumbs_up: 15, thumbs_down: 2, image_URL: "Images/anderson_park.jpg", link_URL: "Courts/anderson_park.html"},
              {name: "William Nelson Park", place: "Hastings", thumbs_up: 17, thumbs_down: 0, image_URL: "Images/william_nelson_park.png", link_URL: "Courts/william_nelson_park.html"},
              {name: "Roberts Terrace Park", place: "Napier", thumbs_up: 11, thumbs_down: 4, image_URL: "Images/roberts_terrace_reserve.jpg", link_URL: "Courts/roberts_terrace_reserve.html"},
              {name: "Len Harlen Park", place: "Hastings", thumbs_up: 7, thumbs_down: 0, image_URL: "Images/len_harlen_park.png", link_URL: "Courts/len_harlen_park.html"}]

// Display courts function 
function displayCourts() {
    // sorts courts by largest number of thumbs up 
    courts.sort((a, b) => b.thumbs_up - a.thumbs_up);
    // Initalize variable 
    let htmlContent = "";
    // Loop through each court in courts array and add html content with parsed values to courtContent
    for(let i = 0 ; i < courts.length ; i++) {
        let courtContent = `<!--Court box-->
                            <div class="court_box">
                                <!--Court img-->
                                <img src=${courts[i].image_URL} alt='Court image'>
                                <br>
                                <!--Court body-->
                                <div class="court_body">
                                    <!--Court name-->
                                    <h3>${courts[i].name}</h3>
                                    <br>
                                    <!--Court place-->
                                    <p>${courts[i].place}</p>
                                    <br>
                                </div>
                                <!--Court votes-->
                                <p>👍&nbsp;&nbsp;${courts[i].thumbs_up}&nbsp;&nbsp;&nbsp;&nbsp;👎&nbsp;&nbsp;${courts[i].thumbs_down}</p>
                                <br>
                                <!--Court button-->
                                <div class="button_wrapper"><a class="button_1" href=${courts[i].link_URL}>View Court</a></div>
                            </div>`;
                            // Add courtContent too htmlContent 
                            htmlContent += courtContent;
    }
    // Apply htmlContent to courts_box innerHTML
    document.getElementById("courts_box").innerHTML = htmlContent;
}

// top rated courts function
function topRated() {
    // Takes top 3 rated courts from courts array
    let Top3RatedCourts = courts.slice(0, 3);
    // Initalize variable 
    let htmlContent = "";
    // Loop through each court in Top3RatedCourts array and add html content with parsed values to courtContent
    for(let i = 0 ; i < Top3RatedCourts.length ; i++) {
        let courtContent = `<!--Court box-->
                            <div class="top_3_courts">
                                <!--Court img-->
                                <img src=${courts[i].image_URL} alt='Court image'>
                                <br>
                                <!--Court body-->
                                <div class="court_body">
                                    <!--Court name-->
                                    <h3>${courts[i].name}</h3>
                                    <br>
                                    <!--Court place-->
                                    <p>${courts[i].place}</p>
                                    <br>
                                </div>
                                <!--Court votes-->
                                <p>👍&nbsp;&nbsp;${courts[i].thumbs_up}&nbsp;&nbsp;&nbsp;&nbsp;👎&nbsp;&nbsp;${courts[i].thumbs_down}</p>
                                <br>
                                <!--Court button-->
                                <div class="button_wrapper"><a class="button_1" href=${courts[i].link_URL}>View Court</a></div>
                            </div>`;
                        // Add courtContent too htmlContent 
                        htmlContent += courtContent;
    }
    // Apply htmlContent to courts_box innerHTML
    document.getElementById("top_3_courts").innerHTML = htmlContent;
}

// Contact function
function contact() {
    alert('Your message has been sent.')
}

// open menu function
function openMenu() {
  var x = document.getElementById("top_nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// Search filter function
function searchFilter() {
    // Initialize variables
    const input = document.querySelector(".search");
    const courts = document.getElementsByClassName("court_box");
    let searchResult = 0
    let filter = input.value
    // If input length is greater then 0 display search text, else hide search text
    if (filter.length > 0) {
        document.getElementById("search_text").style.display = "block"; 
    } else {
        document.getElementById("search_text").style.display = "none";
    }
    
    // Loop through courts array, and display courts that match the search filter 
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block";
        searchResult ++
    } else {
        courts[i].style.display = "none";   
    }
    }

    // If no results are found and filter length is greater than 0, display no results text and hide search text, else hide no results text
    if (searchResult == 0 && filter.length > 0) {
        document.getElementById("no_results").style.display = "block";
        document.getElementById("search_text").style.display = "none";

    } else {
        document.getElementById("no_results").style.display = "none";
    }
}

// Napier function - displays napier courts
function napier() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Napier"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

// Hastings function - displays hastings courts
function hastings() {
    
    const courts = document.getElementsByClassName("court_box");
    let filter = "Hastings"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

// Wairoa function - displays wairoa courts
function wairoa() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Wairoa"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

// Chb function - displays chb courts
function chb() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Central Hawkes Bay"
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body")
    if (filter.toLowerCase() && title.textContent.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1) {
        courts[i].style.display = "block"

    } else {
        courts[i].style.display = "none"
    }
    }
}

// Voting function taskes court, takes court_like_num and court_dislike_num as parameters
function voting(court_like_num, court_dislike_num) {


    // Initialize variables 
    let currentVotes = {like: court_like_num, dislike: court_dislike_num}
    
    //Variables to track the clicking status
    //RULE: Allow to vote only one: UP or DOWN
    let voteStatus = {like: false, dislike: false};

    this.like = function () {
        //Check current status of "like" button (has been clicked or not)
        if (voteStatus.like == false) {
            //Increase a "Like": Increase the like number by 1
            document.getElementById("like_number").innerHTML = currentVotes.like + 1;
            //Change the background color of Like button to GREEN
            document.getElementById("like_button").style.backgroundColor = "green";
            //Change the current status of "like" button: has been clicked
            voteStatus.like = true;//
            
            //Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.dislike == true) {
                document.getElementById("dislike_number").innerHTML = currentVotes.dislike;
                voteStatus.dislike = false;//
                document.getElementById("dislike_button").style.backgroundColor = "white";
            }		
        } else {
            //Keep the current number of like
            document.getElementById("like_number").innerHTML = currentVotes.like;
            //Change the background color of Like button to WHITE
            document.getElementById("like_button").style.backgroundColor = "white";
            //Change the current status of "like" button
            voteStatus.like = false;//has been clicked	
        }	
    }
    //Click Like button
    //Click Dislike button
    this.dislike = function () {
    //Check current status of "dislike" button (has been clicked or not)
        if (voteStatus.dislike == false) {
            //Increase a "disLike"  by 1
            document.getElementById("dislike_number").innerHTML = currentVotes.dislike + 1;
            //Change the background color of Like button to GREEN
            document.getElementById("dislike_button").style.backgroundColor = "red";
            //Change the current status of "dislike" button
            voteStatus.dislike = true;//has been clicked
            
            //Check "like" status - if like has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.like == true) {
                document.getElementById("like_number").innerHTML = currentVotes.like;
                voteStatus.like = false;//
                document.getElementById("like_button").style.backgroundColor = "white";
            }
            
        } else {
            //Keep the current number of of "dislike"
            document.getElementById("dislike_number").innerHTML = currentVotes.dislike;
            //Change the background color of disLike button to WHITE
            document.getElementById("dislike_button").style.backgroundColor = "white";
            //Change the current status of "dislike" button
            voteStatus.dislike = false;//has been clicked	
        }	
    }	
}

// Load functions when for webpages
window.onload = function() {
    if (window.location.href.indexOf('napier.html') > -1) {
        displayCourts();
        napier();
    }

    if (window.location.href.indexOf('hastings.html') > -1) {
        displayCourts();
        hastings();
    }

    if (window.location.pathname === 'Website/') {
        displayCourts();
        topRated();
    }

    if (window.location.pathname === '/index.html') {
        displayCourts();
        topRated();
    }

    if (window.location.href.indexOf('wairoa.html') > -1) {
        displayCourts();
        wairoa();
    }

    if (window.location.href.indexOf('central_hawkes_bay.html') > -1) {
        displayCourts();
        chb();
    }

    if (window.location.href.indexOf('marine_parade.html') > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[0].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[0].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf('flaxmere_park.html') > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[2].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[2].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf('fitzgerald_place_reserve.html') > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[1].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[1].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("st_joseph's_school.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[3].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[3].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("wairoa_community_centre.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[4].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[4].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("kirkpatrick_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[5].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[5].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("mitre_10_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[6].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[6].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("russell_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[7].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[7].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("roberts_terrace_reserve.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[10].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[10].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("william_nelson_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[9].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[9].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
    
    if (window.location.href.indexOf("anderson_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[8].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[8].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (window.location.href.indexOf("len_harlen_park.html") > -1) {
        court_like_num = document.getElementById("like_number").innerHTML = courts[11].thumbs_up;
        court_dislike_num = document.getElementById("dislike_number").innerHTML = courts[11].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
  }
