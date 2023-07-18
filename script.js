let addHomeEl = document.getElementById("homeScore")
let addGuestEl = document.getElementById("guestScore")
let addHome = 0
let addGuest = 0

function addHomeOne(){
   addHome += 1
   addHomeEl.innerText = addHome
}

function addHomeTwo(){
    addHome += 2
    addHomeEl.innerText = addHome
}

function addHomeThree(){
    addHome += 3
    addHomeEl.innerText = addHome
}

function addGuestOne(){
   addGuest += 1
   addGuestEl.innerText = addGuest
}

function addGuestTwo(){
    addGuest += 2
    addGuestEl.innerText = addGuest
}

function addGuestThree(){
    addGuest += 3
    addGuestEl.innerText = addGuest
}