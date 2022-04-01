let player = document.querySelector("#player");
let GAME = document.querySelector("#GAME");
let play = document.querySelector("#play");
let raju = document.querySelector("#raju");
let zomy = document.querySelector(".zoms");
let zombs = document.querySelector(".zombs");
let body = document.querySelector("body")

//music
let websound = new Audio("music/websound.m4a");
let gameover = new Audio("music/gameover.m4a");
let tune = new Audio("music/_Into_the_Spider-Verse).m4a");
let die = new Audio("music/die.m4a");
let horrortheme = new Audio("music/horror_sound_effect(128k).m4a");

////=======BASIC SHOOT ANIMATIONS AND FUNCTIONS =========
///////////----- PLAY FUNCTIONS ------------------------------------------
if (player.classList != "hove") {
    player.classList.add("hove");
}

function music() {
    tune.play();
}

function dis() {
    play.classList.add("hide");
    player.classList.remove("hove");
    tune.pause();
    horrortheme.play();
    zomy.classList.remove("hide");
    zombs.classList.remove("hide");
    window.requestAnimationFrame(collide);
}

//TARGET ------ 1 ---------------------------------
function target1() {

    websound.play();
    let web = document.createElement("div");
    GAME.appendChild(web);
    web.classList.add("webs");
    web.style.animation = "webfortarget1 1s linear infinite";

    player.classList.add("yoo1");

    setTimeout(() => {
        player.classList.remove("yoo1");
    }, 500);


    setTimeout(() => {
        web.classList.remove("webs");
    }, 1000);
}
//TARGET ------ 2 -----------------------------------------
function target2() {

    websound.play();
    let web = document.createElement("div");
    GAME.appendChild(web);
    web.classList.add("webs");
    web.style.animation = "webfortarget2 1s linear infinite";

    player.classList.add("yoo2");

    setTimeout(() => {
        player.classList.remove("yoo2");
    }, 500);

    setTimeout(() => {
        web.classList.remove("webs");
    }, 1000);
}


/////////-------------- COLLISON B/W OBSTICLE AND KID --------------------------------------------------
function collide() {
    setInterval(() => {

        zx = parseInt(window.getComputedStyle(zomy, null).getPropertyValue('left'));
        zy = parseInt(window.getComputedStyle(zomy, null).getPropertyValue('top'));

        zbx = parseInt(window.getComputedStyle(zombs, null).getPropertyValue('left'));
        zby = parseInt(window.getComputedStyle(zombs, null).getPropertyValue('top'));

        rx = parseInt(window.getComputedStyle(raju, null).getPropertyValue("left"));
        ry = parseInt(window.getComputedStyle(raju, null).getPropertyValue("top"));

        offsetX1 = Math.abs(zx - rx);
        offsetY1 = Math.abs(zy - ry);

        offsetX2 = Math.abs(zbx - rx);
        offsetY2 = Math.abs(zby - ry);

        ///////------ZOMBIE & KID COLLIDE -----------
        if (offsetX1 < 50 && offsetY1 < 50) {
            raju.style.animation = "killed 0.5s linear 1"

            setInterval(() => {
                raju.classList.add("hide");
            }, 500);

            zomy.classList.remove("walk");

            gameover.play();
            die.play();

            setInterval(() => {
                window.location.reload();
            }, 1200);
        }

        ///////------CARZOMBIE & KID COLLIDE -----------
        else if (offsetX2 < 50 && offsetY2 < 50) {
            raju.style.animation = "killed 0.5s linear 1"

            setInterval(() => {
                raju.classList.add("hide");
            }, 500);

            zombs.classList.remove("walk");

            gameover.play();
            die.play();

            setInterval(() => {
                window.location.reload();
            }, 1200);
        }else{
            window.requestAnimationFrame(shoot)
        }
    }, 10);
}


///////// ======================= SHOOT COLLISON===============================
function shoot(){
setInterval(() => {
    let web = document.querySelector(".webs")

    wx = parseInt(window.getComputedStyle(web, null).getPropertyValue('left'));
    wy = parseInt(window.getComputedStyle(web, null).getPropertyValue('top'));

    offsetX = Math.abs(zx - wx);
    offsetY = Math.abs(zy - wy);

    offsetXX = Math.abs(zbx - wx);
    offsetYY = Math.abs(zby - wy);
    
///////------ZOMBIE &   WEB COLLIDE -----------
    if (offsetX < 50 && offsetY < 50) {
        web.classList.add("hide");
        zomy.classList.add("hide");
        body.classList.add("impact")
        die.play();

        setInterval(() => {
            zomy.classList.remove("hide");
            body.classList.remove("impact")
        }, 500);
    }
///////------CARZOMBIE &   WEB COLLIDE -----------
    else if (offsetXX < 50 && offsetYY < 50) {
        web.classList.add("hide");
        zombs.classList.add("hide");
        body.classList.add("impact")

        setInterval(() => {
            zombs.classList.remove("hide");
            body.classList.remove("impact")
        }, 500);
    }
}, 10);
}