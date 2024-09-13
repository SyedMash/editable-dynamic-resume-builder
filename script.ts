const subtn = document.querySelector("#subtn") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const result = document.querySelector("#result") as HTMLDivElement;
const editbtn = document.querySelector("#editBtn") as HTMLButtonElement;

// data from form
const namme = document.querySelector("#name") as HTMLFormElement;
const email = document.querySelector("#email") as HTMLFormElement;
const number = document.querySelector("#number") as HTMLFormElement;
const edu = document.querySelector("#edu") as HTMLFormElement;
const work = document.querySelector("#work") as HTMLFormElement;
const skills = document.querySelector("#skills") as HTMLFormElement;

// data to show
const showname = document.querySelector("#showname") as HTMLHeadingElement;
const showemail = document.querySelector("#showemail") as HTMLHeadingElement;
const shownumber = document.querySelector("#shownumber") as HTMLHeadingElement;
const showedu = document.querySelector("#showedu") as HTMLHeadingElement;
const showork = document.querySelector("#showork") as HTMLHeadingElement;
const showskills = document.querySelector("#showskills") as HTMLDivElement;

//click event on generate button
subtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("first");
  if (
    namme.value !== "" &&
    email.value !== "" &&
    number.value !== "" &&
    edu.value !== "" &&
    work.value !== "" &&
    skills.value !== ""
  ) {
    form.style.display = "none";
    result.style.display = "flex";
    editbtn.style.display = "block";

    showname.innerHTML = `Name: ${namme.value}`;
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
