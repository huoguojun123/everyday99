// script.js

function updateTime(year, month, day, hours, minutes, seconds) {
    const now = new Date();
    const targetDate = new Date(year, month - 1, day, hours, minutes, seconds);
    const difference = now - targetDate;

    const days = Math.floor(difference / (24 * 3600 * 1000));
    const hoursDiff = Math.floor((difference / (3600 * 1000)) % 24);
    const minutesDiff = Math.floor((difference / (60 * 1000)) % 60);
    const secondsDiff = Math.floor(difference / 1000 % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hoursDiff;
    document.getElementById("minutes").textContent = minutesDiff;
    document.getElementById("seconds").textContent = secondsDiff;
}


// 自动打字效果
function autoType() {
    const text = "Hi,Qiu!";
    let index = 0;
    const output = () => {
        if (index < text.length) {
            document.getElementById("autotype").textContent = text.substring(0, index + 1);
            index++;
            setTimeout(output, 200);
        }
    };
    setTimeout(output, 0);
}
function autoType2() {
    const text = "这是一封迟来的信";
    let index = 0;
    const output = () => {
        if (index < text.length) {
            document.getElementById("autotype2").textContent = text.substring(0, index + 1);
            index++;
            setTimeout(output, 200);
        }
    };
    setTimeout(output, 0);
}
function handleClick() {
    //转到letter.html
    window.location.href = "letter.html";
}

// 启动倒计时和打字效果
setInterval(() => updateTime(2024, 7, 17, 1, 20,0), 1000);
autoType();
autoType2();
