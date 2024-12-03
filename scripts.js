// Work Section Data
const works = [
  {
    title: "MedNews",
    description: "Для новостной компании",
    price: "55 000 ₽",
    imgSrc: "./work.jpg",
    text: "От лица компании «MedNews» выражаем искреннюю благодарность команде IT-Agency за профессионализм и отличное качество работы по созданию нашего нового сайта.Мы с уверенностью можем рекомендовать IT-Agency всем, кто ищет надежного партнера в области цифровых решений. Большое спасибо за вашу работу! Мы рады продолжать сотрудничество и с нетерпением ждем новых проектов вместе!",
    src: "/mednews.html",
  },
  {
    title: "Башавтоком",
    description: "Для автосервиса",
    price: "120 000 ₽",
    imgSrc: "./work2.jpg",
    text: "От лица компании «Башавтоком» выражаем искреннюю благодарность команде IT-Agency за профессионализм и отличное качество работы по созданию нашего нового сайта. Мы с уверенностью можем рекомендовать IT-Agency всем, кто ищет надежного партнера в области цифровых решений. Большое спасибо за вашу работу! Мы рады продолжать сотрудничество и с нетерпением ждем новых проектов вместе!",
    src: "/bashauto.html",
  },
  {
    title: "ОкнаСтрой",
    description: "Для компании окон",
    price: "33 000 ₽",
    imgSrc: "./work3.jpg",
    text: "От лица компании «ОкнаСтрой» выражаем искреннюю благодарность команде IT-Agency за профессионализм и отличное качество работы по созданию нашего нового сайта.Мы с уверенностью можем рекомендовать IT-Agency всем, кто ищет надежного партнера в области цифровых решений. Большое спасибо за вашу работу! Мы рады продолжать сотрудничество и с нетерпением ждем новых проектов вместе!",
    src: "/oknastroy.html",
  },
];

// Render Work Cards
const workWrapper = document.getElementById("workWrapper");
works.forEach((work, index) => {
  const workInfo = document.createElement("div");
  workInfo.classList.add("work-info");
  workInfo.innerHTML = `
    <img src="${work.imgSrc}" style="object-fit: contain; max-width: 600px;" />
    <div class="work-info-wrapper">
      <h2>${work.title}</h2>
      <p>${work.description}</p>
      <p>Стоимость: ${work.price}</p>
      <a href=${work.src}>Подробнее</a>
    </div>
  `;
  workInfo.onclick = () => openWorkModal(work);
  workWrapper.appendChild(workInfo);
});

// Tariff Section Data
const tariffs = [
  {
    name: "Базовый",
    price: "5 000 ₽",
    details: [
      "Одностраничный сайт",
      "Техподдержка 1 месяц",
      "SEO базовая настройка",
      "Адаптивный дизайн для мобильных устройств",
      "Внедрение базовых аналитических инструментов",
    ],
    src: "/base.html",
    className: "card-basic",
  },

  {
    name: "Продвинутый",
    price: "20 000 ₽",
    details: [
      "Сайт из 5 страниц",
      "Техподдержка 6 месяцев",
      "Интеграция с CRM",
      "Дополнительные страницы для блога или новостей",
      "Настройка форм обратной связи и запросов",
    ],
    src: "/pro.html",
    className: "card-pro",
  },

  {
    name: "Корпоративный",
    price: "50 000 ₽",
    details: [
      "Корпоративный портал",
      "Техподдержка 1 год",
      "Интеграция с сервисами",
      "Кастомизация функционала под нужды бизнеса",
      "Разработка пользовательских отчетов и аналитики",
    ],
    src: "/corp.html",
    className: "card-enterprise",
  },
];

// Render Tariff Cards
const pricingCardsContainer = document.getElementById("pricing-cards");
tariffs.forEach((tariff, index) => {
  const card = document.createElement("div");
  card.classList.add("card", tariff.className);
  card.innerHTML = `
    <h2>${tariff.name}</h2>
    <p class="price">${tariff.price}</p>
    <div class="details">${tariff.details
      .slice(0, 2)
      .map((detail) => `<p>${detail}</p>`)
      .join("")}</div>
  `;
  card.onclick = () => openTariffModal(tariff);
  pricingCardsContainer.appendChild(card);
});

// Modal Elements
const workModal = document.getElementById("workModal");

const tariffModal = document.getElementById("tariffModal");
const closeButtons = document.querySelectorAll(".close");

// Functions to Open Modals
function openWorkModal(work) {
  document.getElementById("workModalImg").src = work.imgSrc;
  document.getElementById("workModalImg").style.objectFit = "contain";
  document.getElementById("workModalImg").style.maxWidth = "800px";
  document.getElementById("workModalDesc").innerHTML = `
  <div style="display:flex; flex-direction:column; gap:15px; align-items:flex-start; margin-top:15px">
  <p style="font-size:24px"><strong>Описание: </strong> ${work.title}.</p>
  <p style="font-size:24px"><strong>Стоимость: </strong> ${work.price}</p>
  <p style="font-size:24px"><strong>Отзыв: </strong> ${work.text}.</p>
  <a class="link" href="./consumer.html">Оставить заявку</a>
  </div>`;
  workModal.style.display = "flex";
  workModal.style.overflow = "auto";
}

function openTariffModal(tariff) {
  // Устанавливаем название тарифа в заголовок модального окна
  document.getElementById("tariffModalTitle").textContent = tariff.name;
  document.getElementById("tariffModalTitle").style.fontSize = "30px";

  // Устанавливаем цену тарифа в соответствующий элемент
  document.getElementById("tariffModalPrice").textContent = tariff.price;
  document.getElementById("tariffModalPrice").style.fontSize = "60px";
  document.getElementById("tariffModalPrice").style.color = "orange";

  // Формируем и устанавливаем список деталей тарифа
  document.getElementById("tariffModalDetails").innerHTML = `
  <strong style="margin-bottom:10px; font-size:24px">Подробности:</strong>
  <div style="display:flex; flex-direction:column; gap:15px">
    <a style="margin-top:20px; background-color:black; color: white" class="link" href="./consumer.html">Оставить заявку</a>
      ${tariff.details.map((detail) => `<p style="font-size:32px; background-color:greenyellow; border-radius:15px">${detail}</p>`).join("")}
      <a href=${tariff.src} style="margin-top:30px; font-size:24px; padding:25px">
      Подробнее
      </a>
      </div>
    `;

  // Показываем модальное окно
  tariffModal.style.display = "flex";
}

// Close Modal Events
closeButtons.forEach(
  (button) =>
    (button.onclick = () => {
      workModal.style.display = "none";
      tariffModal.style.display = "none";
    })
);
window.onclick = (e) => {
  if (e.target === workModal) workModal.style.display = "none";
  if (e.target === tariffModal) tariffModal.style.display = "none";
};
