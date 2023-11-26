// 2. (3p) Skapa ett inputfält och en knapp på html-sidan.
// När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför
//input-fältet i en div.

const diveEl = document.getElementById("my-element");
const divA = document.getElementById("A");
const divC = document.getElementById("C");

const inputEl = document.createElement("input");
inputEl.setAttribute("type", "text");
diveEl.appendChild(inputEl);

const btnEl = document.createElement("button");
btnEl.textContent = "click";
btnEl.style.width = "50px";
btnEl.style.height = "20px";
diveEl.appendChild(btnEl);

const outputDivEl = document.createElement("div");
diveEl.appendChild(outputDivEl);

btnEl.addEventListener("click", function () {
  outputDivEl.textContent = inputEl.value;
});

// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.

const divBEl = document.createElement("B");
divBEl.textContent = "B";
diveEl.insertBefore(divBEl, divC);

// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

for (let i = 1; i < 11; i++) {
  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("class", "primary");
  buttonEl.textContent = "Button" + i;
  diveEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", (e) => {
    const el = e.target;
    if (el.className == "primary") {
      el.className = "seconday";
    } else {
      el.className = "primary";
    }
  });
}

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"
