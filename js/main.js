document.addEventListener('DOMContentLoaded', function () {
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    let gravity = 0.9
    let isJumping = false
    let isGamerOver = false
    const alert = document.getElementById('alert')




    function control(e) {
        if (e.code=== "Space"){
            if (!isJumping){
                jump()
                console.log('jump')
            }
        }
    }
    document.addEventListener('keydown', control)

    let position = 0

    function jump (){
        isJumping = true
        let count = 0
        let timerId = setInterval(function () {

            position += 30
            count ++
            position = position * gravity
            dino.style.bottom = position + 'px'


            if (count === 15){
                clearInterval(timerId)
                let downTimerId = setInterval(function () {
                    if (count === 0) {
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    position -=5
                    count --
                    position = position * gravity
                    dino.style.bottom = position + 'px'
                }, 20)
            }


        }, 20)
    }






























})