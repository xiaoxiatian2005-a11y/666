const content = SITE_CONTENT;

const bgMusic = document.querySelector("#bgMusic");
const musicButton = document.querySelector("#musicButton");
const aboutButton = document.querySelector("#aboutButton");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

const renderers = {
  letter: renderLetter,
  album: renderAlbum,
  garden: renderGarden
};

initPage();

function initPage() {
  document.title = content.title;
  document.querySelector("#siteTitle").textContent = content.title;
  document.querySelector("#siteSubtitle").textContent = content.subtitle;
  document.querySelector("#siteSlogan").textContent = content.slogan;

  bgMusic.src = content.music.src;
  musicButton.textContent = content.music.playText;

  renderCharacters();
  renderSectionCards();

  musicButton.addEventListener("click", toggleMusic);
  aboutButton.addEventListener("click", () => openModal(renderAbout()));

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function renderCharacters() {
  const characterRow = document.querySelector("#characterRow");
  characterRow.innerHTML = content.characters.map((character) => `
    <figure class="farm-character">
      <img src="${escapeAttribute(character.image)}" alt="${escapeAttribute(character.name)}" data-fallback="${escapeAttribute(character.name)}">
      <figcaption><span>${escapeHtml(character.name)}</span></figcaption>
    </figure>
  `).join("");

  attachImageFallbacks(characterRow);
}

function renderSectionCards() {
  const sectionCards = document.querySelector("#sectionCards");
  sectionCards.innerHTML = content.sections.map((section) => `
    <article class="story-card" data-section="${escapeAttribute(section.id)}">
      <div class="card-heading">
        <span class="card-number">${escapeHtml(section.number)}</span>
        <h2>${escapeHtml(section.title)}</h2>
      </div>
      <p class="chapter-ribbon">${escapeHtml(section.subtitle)}</p>
      <p>${escapeHtml(section.description)}</p>
      <button class="story-button" type="button">${escapeHtml(section.button)}</button>
    </article>
  `).join("");

  sectionCards.querySelectorAll(".story-card").forEach((card) => {
    card.addEventListener("click", () => {
      const render = renderers[card.dataset.section];
      if (render) openModal(render());
    });
  });
}

async function toggleMusic() {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicButton.textContent = content.music.pauseText;
    } catch (error) {
      musicButton.textContent = content.music.missingText;
      window.setTimeout(() => {
        musicButton.textContent = content.music.playText;
      }, 1800);
    }
  } else {
    bgMusic.pause();
    musicButton.textContent = content.music.playText;
  }
}

function openModal(markup) {
  modalBody.innerHTML = markup;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  attachImageFallbacks(modalBody);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderAbout() {
  return `
    <h2 class="modal-title" id="modalTitle">${escapeHtml(content.about.title)}</h2>
    <div class="about-copy">
      ${content.about.text.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    </div>
    <div class="character-message-list">
      ${content.characters.slice(0, 3).map((character) => `
        <div class="character-message">
          <strong>${escapeHtml(character.name)}</strong>
          <p>${escapeHtml(character.message)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderLetter() {
  return `
    <p class="modal-subtitle">${escapeHtml(content.letter.chapter)}</p>
    <h2 class="modal-title" id="modalTitle">${escapeHtml(content.letter.title)}</h2>
    <div class="notebook">
      ${content.letter.pages.map((page, index) => `
        <article class="letter-page">
          ${index === 0 ? `<strong>${escapeHtml(content.letter.intro)}</strong>` : ""}
          <p>${escapeHtml(page)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAlbum() {
  return `
    <p class="modal-subtitle">我们的回忆相册</p>
    <h2 class="modal-title" id="modalTitle">那些一起走过的日子</h2>
    <div class="album-grid">
      ${content.album.map((photo) => `
        <article class="polaroid">
          <img src="${escapeAttribute(photo.image)}" alt="${escapeAttribute(photo.title)}" data-fallback="照片">
          <h3>${escapeHtml(photo.title)}</h3>
          <span class="date">${escapeHtml(photo.date)}</span>
          <p>${escapeHtml(photo.description)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderGarden() {
  return `
    <p class="modal-subtitle">他们教会我的</p>
    <h2 class="modal-title" id="modalTitle">小花园里的光</h2>
    <div class="garden-grid">
      ${content.garden.map((person) => `
        <article class="garden-person">
          <img src="${escapeAttribute(person.image)}" alt="${escapeAttribute(person.name)}" data-fallback="${escapeAttribute(person.name)}">
          <h3>${escapeHtml(person.name)}</h3>
          <span class="quality">${escapeHtml(person.quality)}</span>
          <p>${escapeHtml(person.description)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function attachImageFallbacks(container) {
  container.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      const label = image.dataset.fallback || "图片";
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder-box";
      placeholder.textContent = `${label}图片可以放在这里`;
      image.replaceWith(placeholder);
    }, { once: true });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
