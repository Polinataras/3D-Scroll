//3D Scroll

//расстояние до оси Z
let zSpacing = -1000,
    lastPos = zSpacing / 5, //начальная позиция элементов
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function() {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}

window.scrollTo(0, 1)

//Audio

let soundbutton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundbutton.addEventListener('click', e => {
    soundbutton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
    soundbutton.classList.contains('paused') ? audio.pause() : audio.play()
}
window.onblur = function() {
    audio.pause()
}