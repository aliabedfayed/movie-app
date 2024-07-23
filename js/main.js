function scrollToTop() {
    $(window).scrollTop(0);
}

// navbar start 
function openSideNav() {
    $(".side-nav").animate({
        left: 0
    }, 500)

    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");

    for (let i = 0; i < 6; i++) {
        $(".list li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

function closeSideNav() {
    let navWidth = $(".side-nav .nav-tab").outerWidth()
    $(".side-nav").animate({
        left: -navWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");

    $(".list li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".side-nav i.open-close-icon").click(() => {
    if ($(".side-nav").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})
// navbar end 


let data = [];
getPlayingNow();

async function getPlayingNow() {
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b5e5169c30a5109215286fccd78ee9fb')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        displayPlayingNow();
        scrollToTop();
    }
    else if (response.status == 404) { alert('not found') }
}
function displayPlayingNow() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('demo').innerHTML = cartoona
}

async function getPopular() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5e5169c30a5109215286fccd78ee9fb')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        displayPopular();
        scrollToTop();
    }
    else if (response.status == 404) { alert('not found') }
}
function displayPopular() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('demo').innerHTML = cartoona
}

async function getTopRated() {
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b5e5169c30a5109215286fccd78ee9fb')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        displayTopRated();
        scrollToTop();
    }
    else if (response.status == 404) { alert('not found') }
}
function displayTopRated() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('demo').innerHTML = cartoona
}

async function getTrending() {
    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b5e5169c30a5109215286fccd78ee9fb')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        displayTrending();
        scrollToTop();
    }
    else if (response.status == 404) { alert('not found') }
}
function displayTrending() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('demo').innerHTML = cartoona
}

async function getUpcoming() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b5e5169c30a5109215286fccd78ee9fb')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        displayUpcoming();
        scrollToTop();
    }
    else if (response.status == 404) { alert('not found') }
}
function displayUpcoming() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('demo').innerHTML = cartoona
}

// search start
function search(inputValue) {
    let cartoona = ''
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().includes(inputValue.toLowerCase())) {
            cartoona += `
             <div class="col-md-4">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                        <div class="movie-layer">
                            <div class="layer-text  text-white p-3">
                                <h1 class="text-center">${data[i].title}</h1>
                                <p>${data[i].overview}</p>
                                <p class="my-3">Release date:${data[i].release_date}</p>
                                <h3><i class="fa-solid fa-star text-warning fs-6"></i></h3>
                                <h3 id="rating">${data[i].vote_average.toFixed(1)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
    document.getElementById('demo').innerHTML = cartoona

}
// search end


// contact  start
let contactContainer = document.getElementById('#contactUs')
function displayContacts() {
    contactContainer = ` <div class="row g-4">
    <div class="col-md-6">
        <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
        <div id="nameAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Invalid Name ,Only characters allowed
        </div>
    </div>
    <div class="col-md-6">
        <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
        <div id="emailAlert" class="alert alert-black  w-100 mt-2 d-none text-danger fw-bold">
            Invalid Email , try example@domain.com
        </div>
    </div>
    <div class="col-md-6">
        <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
        <div id="phoneAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
            Invalid Phone Number
        </div>
    </div>
    <div class="col-md-6">
        <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
        <div id="ageAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Your Age must be over 16+
        </div>
    </div>
    <div class="col-md-6">
        <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
        <div id="passwordAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Password must contain numbers & letters at least 8 character                             
        </div>
    </div>
    <div class="col-md-6">
        <input  id="rePasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="ReEnter Password">
        <div id="rePasswordAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Password not match password 
        </div>
    </div>

<div/>
<button id="submitBtn" disabled class="btn btn-danger text-white">Submit</button>
 `
    document.getElementById('contactData').innerHTML = contactContainer
    submitBtn = document.getElementById("submitBtn")

    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputEntered = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputEntered = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputEntered = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputEntered = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputEntered = true
    })

    document.getElementById("rePasswordInput").addEventListener("focus", () => {
        rePasswordInputEntered = true
    })

}


let nameInputEntered = false;
let emailInputEntered = false;
let phoneInputEntered = false;
let ageInputEntered = false;
let passwordInputEntered = false;
let rePasswordInputEntered = false;

function inputsValidation() {
    if (nameInputEntered) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputEntered) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputEntered) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputEntered) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputEntered) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (rePasswordInputEntered) {
        if (rePasswordValidation()) {
            document.getElementById("rePasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("rePasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        rePasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/(01[0125]\d{8})$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(1[6-9]|[2-9][0-9]|1[01][0-9]|120)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function rePasswordValidation() {
    return document.getElementById("rePasswordInput").value == document.getElementById("passwordInput").value
}

displayContacts();

// end of contact