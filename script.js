const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const updateClock = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  // console.log(hour, minute, second);

  const hourDeg = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minute / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (second / 60) * 360;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
};

setInterval(updateClock, 1000);
