const box = document.querySelector('#container');
const title = document.querySelector('h1.title');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
let play = null; // 초기값 null로 설정

function getRandomColor() {
    let hex = "#" + Math.random().toString(16).slice(2, 8).padEnd(6, '0');
    return hex;
}

function bgChange() {
    let randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    title.textContent = randomColor.toUpperCase();
}

// 초기 실행 (필요 시 주석 해제)
// play = setInterval(bgChange, 2000);

playBtn.addEventListener('click', function () {
    if (!play) { // play가 실행 중이 아니면 시작
        play = setInterval(bgChange, 2000);
    }
});

stopBtn.addEventListener('click', function () {
    if (play) { // play가 실행 중이면 중지
        clearInterval(play);
        play = null; // play를 null로 초기화
    }
});