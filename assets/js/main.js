// CLOCK
const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  /* 시간 만큼의 기울기를 구하여 HTML값을 변경 해줍니다. */
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};

/* clock 함수를 실행합니다. */
setInterval(clock, 1000);

const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmPm = document.getElementById("text-ampm");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let ampm;
  let mm = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (hh == 0) {
    hh = 12;
  }

  /* 시간을 보여줄 때 0부터 보여줍니다. */
  if (hh < 10) {
    hh = `0${hh}`;
  }

  /* 시간을 텍스트로 보여줍니다. */
  textHour.innerHTML = `${hh}:`;

  /* 분을 보여줄 때 0부터 보여줍니다. */
  if (mm < 10) {
    mm = `0${mm}`;
  }

  /* 분을 텍스트로 보여줍니다. */
  textMinutes.innerHTML = `${mm}`;

  /* AM PM 판단 */
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "오후";
  } else {
    ampm = "오전";
  }

  /* AM PM 을 표시합니다. */
  textAmPm.innerHTML = ampm;

  let months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  // let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  dateYear.innerHTML = `${year}년`;
  dateMonth.innerHTML = `${months[month]}`;
  dateDay.innerHTML = `${day}일`;
};

setInterval(clockText, 1000);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
