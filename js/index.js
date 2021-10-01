import colors from './colors.js'

const refs = {
    startBtn : document.querySelector("button[data-action='start']"),
    stopBtn : document.querySelector("button[data-action='stop']"),
    bodyStyle : document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const interval = {
    timerID : null,
    onChangeColor (){
        this.timerID = setInterval(()=>{
            refs.bodyStyle.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length)] },
            1000)
    },
    onStopChangeColor (){
        clearInterval(this.timerID)

    }
}

refs.startBtn.addEventListener('click' , () => {
    refs.startBtn.disabled = true;
    interval.onChangeColor()
})
refs.stopBtn.addEventListener('click' , () =>{
    interval.onStopChangeColor()
    refs.startBtn.disabled = false;
})