const listItem = document.querySelectorAll("li");
const answer = document.querySelectorAll("span");

listItem.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("active-span");
    e.target.classList.toggle("active");
  });
});
