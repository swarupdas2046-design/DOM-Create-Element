let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let arr = ["Miss you", "Fullstackdev", "Swarup Das", "software devloper", "Computer science", "Frontend", "Backend", "India", "West-Bengal", "Sheryians Coding School", "2026"];
    let rdm = Math.floor(Math.random() * arr.length);
    let x = Math.random() * 80
    let y = Math.random() * 80
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    let rot = Math.floor(Math.random() * 180)
    let sc = Math.random() * 3;

   

    let h1 = document.createElement("h1");

    h1.innerHTML = arr[rdm]
    h1.style.position = "absolute"
    h1.style.top = y + "%"
    h1.style.left = x + "%"
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.rotate = rot + "deg"
    h1.style.scale = sc


    main.appendChild(h1)

})