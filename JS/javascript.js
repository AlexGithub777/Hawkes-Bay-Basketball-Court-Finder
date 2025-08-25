// Create courts array
let courts = [
    {
        name: "Marine Parade",
        place: "Napier",
        thumbs_up: 21,
        thumbs_down: 6,
        image_URL: "Images/marine_parade.webp",
        link_URL: "Courts/marine_parade.html",
    },
    {
        name: "Fitzgerald Place Reserve",
        place: "Napier",
        thumbs_up: 18,
        thumbs_down: 6,
        image_URL: "Images/fitzgerald_place_reserve.webp",
        link_URL: "Courts/fitzgerald_place_reserve.html",
    },
    {
        name: "Flaxmere Park",
        place: "Hastings",
        thumbs_up: 16,
        thumbs_down: 3,
        image_URL: "Images/flaxmere_park.webp",
        link_URL: "Courts/flaxmere_park.html",
    },
    {
        name: "St Joseph's School",
        place: "Central Hawkes Bay",
        thumbs_up: 22,
        thumbs_down: 5,
        image_URL: "Images/st_joseph's_school.webp",
        link_URL: "Courts/st_joseph's_school.html",
    },
    {
        name: "Wairoa Community Centre",
        place: "Wairoa",
        thumbs_up: 9,
        thumbs_down: 1,
        image_URL: "Images/wairoa_community_centre.webp",
        link_URL: "Courts/wairoa_community_centre.html",
    },
    {
        name: "Kirkpatrick Park",
        place: "Hastings",
        thumbs_up: 14,
        thumbs_down: 3,
        image_URL: "Images/kirkpatrick_park.webp",
        link_URL: "Courts/kirkpatrick_park.html",
    },
    {
        name: "Mitre 10 Park",
        place: "Hastings",
        thumbs_up: 28,
        thumbs_down: 7,
        image_URL: "Images/mitre_10_park.webp",
        link_URL: "Courts/mitre_10_park.html",
    },
    {
        name: "Russell Park",
        place: "Central Hawkes Bay",
        thumbs_up: 5,
        thumbs_down: 5,
        image_URL: "Images/russell_park.webp",
        link_URL: "Courts/russell_park.html",
    },
    {
        name: "Anderson Park",
        place: "Napier",
        thumbs_up: 15,
        thumbs_down: 2,
        image_URL: "Images/anderson_park.webp",
        link_URL: "Courts/anderson_park.html",
    },
    {
        name: "William Nelson Park",
        place: "Hastings",
        thumbs_up: 17,
        thumbs_down: 0,
        image_URL: "Images/william_nelson_park.webp",
        link_URL: "Courts/william_nelson_park.html",
    },
    {
        name: "Roberts Terrace Park",
        place: "Napier",
        thumbs_up: 11,
        thumbs_down: 4,
        image_URL: "Images/roberts_terrace_reserve.webp",
        link_URL: "Courts/roberts_terrace_reserve.html",
    },
    {
        name: "Len Harlen Park",
        place: "Hastings",
        thumbs_up: 7,
        thumbs_down: 0,
        image_URL: "Images/len_harlen_park.webp",
        link_URL: "Courts/len_harlen_park.html",
    },
];

// Helper function to detect if we're on the home page
function isHomePage() {
    const pathname = window.location.pathname;
    const filename = pathname.split("/").pop();

    // Debug logging - remove this after fixing
    console.log("Debug - pathname:", pathname);
    console.log("Debug - filename:", filename);
    console.log("Debug - href:", window.location.href);
    console.log("Debug - hostname:", window.location.hostname);

    // For custom domains, check simple patterns
    const isHome =
        pathname === "/" || // Root path (most common for custom domains)
        pathname === "/index.html" || // Direct index.html
        filename === "index.html" || // Just index.html filename
        filename === "" || // Empty filename (root or trailing slash)
        // Fallback: if we have the required DOM elements, assume it's home
        (document.getElementById("courts_box") &&
            document.getElementById("top_3_courts"));

    console.log("Debug - isHome result:", isHome);
    return isHome;
}

// Helper function to check if URL contains a specific page name
function pageContains(pageName) {
    return (
        window.location.href.toLowerCase().indexOf(pageName.toLowerCase()) > -1
    );
}

// Display courts function
function displayCourts() {
    // sorts courts by largest number of thumbs up
    courts.sort((a, b) => b.thumbs_up - a.thumbs_up);
    // Initialize variable
    let htmlContent = "";
    // Loop through each court in courts array and add html content with parsed values to courtContent
    for (let i = 0; i < courts.length; i++) {
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
        // Add courtContent to htmlContent
        htmlContent += courtContent;
    }
    // Apply htmlContent to courts_box innerHTML
    const courtsBox = document.getElementById("courts_box");
    if (courtsBox) {
        courtsBox.innerHTML = htmlContent;
    }
}

// top rated courts function
function topRated() {
    // Make sure courts are sorted before slicing
    let Top3RatedCourts = [...courts]
        .sort((a, b) => b.thumbs_up - a.thumbs_up)
        .slice(0, 3);

    let htmlContent = "";
    for (let i = 0; i < Top3RatedCourts.length; i++) {
        let courtContent = `
            <div class="top_3_courts">
                <img src=${Top3RatedCourts[i].image_URL} alt='Court image'>
                <br>
                <div class="court_body">
                    <h3>${Top3RatedCourts[i].name}</h3>
                    <br>
                    <p>${Top3RatedCourts[i].place}</p>
                    <br>
                </div>
                <p>👍 ${Top3RatedCourts[i].thumbs_up} 👎 ${Top3RatedCourts[i].thumbs_down}</p>
                <br>
                <div class="button_wrapper"><a class="button_1" href=${Top3RatedCourts[i].link_URL}>View Court</a></div>
            </div>`;
        htmlContent += courtContent;
    }

    const top3Courts = document.getElementById("top_3_courts");
    if (top3Courts) {
        top3Courts.innerHTML = htmlContent;
    }
}

// Contact function
function contact() {
    alert("Your message has been sent.");
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
    let searchResult = 0;
    let filter = input.value;
    // If input length is greater than 0 display search text, else hide search text
    if (filter.length > 0) {
        document.getElementById("search_text").style.display = "block";
    } else {
        document.getElementById("search_text").style.display = "none";
    }

    // Loop through courts array, and display courts that match the search filter
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body");
        if (
            filter.toLowerCase() &&
            title.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
            courts[i].style.display = "block";
            searchResult++;
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
    let filter = "Napier";
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body");
        if (
            filter.toLowerCase() &&
            title.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
            courts[i].style.display = "block";
        } else {
            courts[i].style.display = "none";
        }
    }
}

// Hastings function - displays hastings courts
function hastings() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Hastings";
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body");
        if (
            filter.toLowerCase() &&
            title.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
            courts[i].style.display = "block";
        } else {
            courts[i].style.display = "none";
        }
    }
}

// Wairoa function - displays wairoa courts
function wairoa() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Wairoa";
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body");
        if (
            filter.toLowerCase() &&
            title.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
            courts[i].style.display = "block";
        } else {
            courts[i].style.display = "none";
        }
    }
}

// Chb function - displays chb courts
function chb() {
    const courts = document.getElementsByClassName("court_box");
    let filter = "Central Hawkes Bay";
    for (let i = 0; i < courts.length; i++) {
        let title = courts[i].querySelector(".court_body");
        if (
            filter.toLowerCase() &&
            title.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
            courts[i].style.display = "block";
        } else {
            courts[i].style.display = "none";
        }
    }
}

// Voting function takes court, takes court_like_num and court_dislike_num as parameters
function voting(court_like_num, court_dislike_num) {
    // Initialize variables
    let currentVotes = { like: court_like_num, dislike: court_dislike_num };

    //Variables to track the clicking status
    //RULE: Allow to vote only one: UP or DOWN
    let voteStatus = { like: false, dislike: false };

    this.like = function () {
        //Check current status of "like" button (has been clicked or not)
        if (voteStatus.like == false) {
            //Increase a "Like": Increase the like number by 1
            document.getElementById("like_number").innerHTML =
                currentVotes.like + 1;
            //Change the background color of Like button to GREEN
            document.getElementById("like_button").style.backgroundColor =
                "green";
            //Change the current status of "like" button: has been clicked
            voteStatus.like = true;

            //Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.dislike == true) {
                document.getElementById("dislike_number").innerHTML =
                    currentVotes.dislike;
                voteStatus.dislike = false;
                document.getElementById(
                    "dislike_button"
                ).style.backgroundColor = "white";
            }
        } else {
            //Keep the current number of like
            document.getElementById("like_number").innerHTML =
                currentVotes.like;
            //Change the background color of Like button to WHITE
            document.getElementById("like_button").style.backgroundColor =
                "white";
            //Change the current status of "like" button
            voteStatus.like = false;
        }
    };

    this.dislike = function () {
        //Check current status of "dislike" button (has been clicked or not)
        if (voteStatus.dislike == false) {
            //Increase a "disLike" by 1
            document.getElementById("dislike_number").innerHTML =
                currentVotes.dislike + 1;
            //Change the background color of Like button to RED
            document.getElementById("dislike_button").style.backgroundColor =
                "red";
            //Change the current status of "dislike" button
            voteStatus.dislike = true;

            //Check "like" status - if like has been voted, down it by one & change status to False & change background color to white
            if (voteStatus.like == true) {
                document.getElementById("like_number").innerHTML =
                    currentVotes.like;
                voteStatus.like = false;
                document.getElementById("like_button").style.backgroundColor =
                    "white";
            }
        } else {
            //Keep the current number of "dislike"
            document.getElementById("dislike_number").innerHTML =
                currentVotes.dislike;
            //Change the background color of disLike button to WHITE
            document.getElementById("dislike_button").style.backgroundColor =
                "white";
            //Change the current status of "dislike" button
            voteStatus.dislike = false;
        }
    };
}

// Load functions when for webpages
window.onload = function () {
    // For custom domain, simple check first
    const pathname = window.location.pathname;
    console.log("Loading page:", pathname);

    // Home page: root or index.html
    if (
        pathname === "/" ||
        pathname === "/index.html" ||
        pathname.endsWith("index.html")
    ) {
        console.log(
            "Home page detected - running displayCourts() and topRated()"
        );
        displayCourts();
        topRated();
        return;
    }

    // Fallback: Check if we have home page elements and run functions
    const hasHomeElements =
        document.getElementById("courts_box") &&
        document.getElementById("top_3_courts");
    if (hasHomeElements && !pageContains(".html")) {
        console.log("Home page detected via DOM elements");
        displayCourts();
        topRated();
        return;
    }

    // City-specific pages
    if (pageContains("napier.html")) {
        displayCourts();
        napier();
    }

    if (pageContains("hastings.html")) {
        displayCourts();
        hastings();
    }

    if (pageContains("wairoa.html")) {
        displayCourts();
        wairoa();
    }

    if (pageContains("central_hawkes_bay.html")) {
        displayCourts();
        chb();
    }

    // Individual court pages
    if (pageContains("marine_parade.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[0].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[0].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("flaxmere_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[2].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[2].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("fitzgerald_place_reserve.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[1].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[1].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("st_joseph's_school.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[3].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[3].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("wairoa_community_centre.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[4].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[4].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("kirkpatrick_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[5].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[5].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("mitre_10_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[6].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[6].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("russell_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[7].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[7].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("roberts_terrace_reserve.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[10].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[10].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("william_nelson_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[9].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[9].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("anderson_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[8].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[8].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }

    if (pageContains("len_harlen_park.html")) {
        court_like_num = document.getElementById("like_number").innerHTML =
            courts[11].thumbs_up;
        court_dislike_num = document.getElementById(
            "dislike_number"
        ).innerHTML = courts[11].thumbs_down;
        voting(court_like_num, court_dislike_num);
    }
};
