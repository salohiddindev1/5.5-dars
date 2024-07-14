let mevalar = ["anor", "anjir", "ananas", "behi", "olma"];

for (meva of mevalar) {
  console.log(meva);
}

const clickMe = () => {
  let random = prompt("ismingizni kiriting");

  let title = document.querySelector(".title");
  title.textContent = random;
};
