const body = document.querySelector("body");
// 시간
const clock = document.querySelector("#clock");
const clock_day = clock.querySelector("#clock p:first-child");
const clock_time = clock.querySelector("#clock p:last-child");
// 배경
const images = [
    'bg_1.jpg',
    'bg_2.jpg',
    'bg_3.jpg',
    'bg_4.jpg',
    'bg_5.jpg',
    'bg_6.jpg',
    'bg_7.jpg',
    'bg_8.jpg',
    'bg_9.jpg',
    'bg_10.jpg',
    'bg_11.jpg'
];
// bg random img
function randowBg(){
    const img = document.querySelector("#main_bg");
    const bgImg = Math.floor(Math.random() * images.length);
    img.src = `./img/${images[bgImg]}`;
    console.log(img.src);
}
randowBg();

// id, pw
const id = 'dust';
const pw = '1234';

const userId = document.querySelector("#user_id");
const userPw = document.querySelector("#user_pw");
const form = document.getElementById("user_start");
const hello = document.getElementById("hello_user");

// id, pw localStorage
if(localStorage.getItem("userId") === "" || localStorage.getItem("userId") === null){
    console.log("localStorage 값 없음");
}else{
    console.log("localStorage 값 있음");
    form.classList.add("hide");
    hello.innerText = `** HELLO ${id} **`;
    hello.classList.remove("hide");
}

// id, pw
function inputInfo(event){
    const value = event.target.value;
    console.log(value);
}
userId.addEventListener("input", inputInfo);
userPw.addEventListener("input", inputInfo);

// submit
function submit(event){
    event.preventDefault();
    const userid = userId.value;
    const userpw = userPw.value;
    if(userid === 'dust'){
        if(userpw === '1234'){
            alert('로그인 되었습니다!');
            form.classList.add("hide");
            hello.innerText = `HELLO ${id}`;
            hello.classList.remove("hide");
            localStorage.setItem("userId", userid);
            localStorage.setItem("userPw", userpw);
        }else{
            alert('아이디, 비밀번호를 다시 확인하세요!');
        }
    }else if(userid !== id){
        alert('아이디, 비밀번호 다시 확인!');
    }
}
form.addEventListener("submit", submit);

// 시간
function today(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const data = date.getDate();
    let day = date.getDay();
    if(day == 0){
        day = "일";
    }else if(day == 1){
        day = "월";
    }else if(day == 2){
        day = "화";
    }else if(day == 3){
        day = "수";
    }else if(day == 4){
        day = "목";
    }else if(day == 5){
        day = "금";
    }else if(day == 6){
        day = "토";
    }
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const scd = date.getSeconds();
    clock_day.innerText = `${year}년 ${month}월 ${data}일 ${day}요일`;
    clock_time.innerText = `${hours}시 ${minutes}분 ${scd}초`;
}
today();
setInterval(today, 1000);





