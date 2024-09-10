const subtn = document.querySelector("#subtn");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const editbtn = document.querySelector("#editBtn");

// data from form
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const edu = document.querySelector("#edu");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");

// data to show
const showname = document.querySelector("#showname");
const showemail = document.querySelector("#showemail");
const shownumber = document.querySelector("#shownumber");
const showedu = document.querySelector("#showedu");
const showork = document.querySelector("#showork");
const showskills = document.querySelector("#showskills");

//click event on generate button
subtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("first");
  if (
    name.value !== "" &&
    email.value !== "" &&
    number.value !== "" &&
    edu.value !== "" &&
    work.value !== "" &&
    skills.value !== ""
  ) {
    form.style.display = "none";
    result.style.display = "flex";
    editbtn.style.display = "block";

    showname.innerHTML = `Name: ${name.value}`;
    showemail.innerHTML = `Email: ${email.value}`;
    shownumber.innerHTML = `Number: ${number.value}`;
    showedu.innerHTML = `Education: ${edu.value}`;
    showork.innerHTML = `Work Experience: ${work.value}`;
    skills.value.split(",").forEach((e) => {
      const skillElement = document.createElement("h3");
      skillElement.classList.add("setSkills");
      skillElement.textContent = e.trim();
      showskills.appendChild(skillElement);
    });
  }
});

//edit button event listener to edit the values
editbtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "flex";
  result.style.display = "none";
  editbtn.style.display = "none";

  while (showskills.firstChild) {
    showskills.removeChild(showskills.firstChild);
  }
});
