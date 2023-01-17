document.onscroll = () => {
    scrollTop = window.pageYOffset

    allContainer = document.getElementsByClassName("container")
    for (let i = 0; i <= allContainer.length - 1; i++) {
        currContainer = allContainer[i]
        console.log(currContainer.offsetTop)
        currHeight = 0
        if (i > 0) {
            currHeight = allContainer[i - 1].offsetHeight / 3
        }
        if (scrollTop > currContainer.offsetTop - currHeight) {
            console.log(currContainer.offsetTop - currHeight)
            color = currContainer.getAttribute('data-color')
            document.body.style.background = color;
        }
    }
}