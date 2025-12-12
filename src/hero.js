(function () {
  setTimeout(() => {
    const renderItems = ({ containerSelector, items }) => {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      items.forEach((item) => {
        const div = document.createElement("div");
        if ("text" in item && "icon" in item) {
          div.classList.add("flex", "flex-center", "hf");
          const icon = document.createElement("span");
          icon.classList.add("icon", "flex", "flex-center");
          icon.textContent = item.icon;
          const text = document.createElement("div");
          text.textContent = item.text;
          div.appendChild(icon);
          div.appendChild(text);
        } else if ("title" in item && "slogan" in item && "icon" in item) {
          div.classList.add("hs-item", "flex", "flex-center");
          div.style.animationDelay = item.delay;
          const hsIco = document.createElement("div");
          hsIco.classList.add("hs-ico", "flex", "flex-center");
          hsIco.textContent = item.icon;
          const hsContent = document.createElement("div");
          const hsTitle = document.createElement("strong");
          hsTitle.textContent = item.title;
          const hsSlogan = document.createElement("div");
          hsSlogan.classList.add("slogan");
          hsSlogan.textContent = item.slogan;
          hsContent.appendChild(hsTitle);
          hsContent.appendChild(hsSlogan);
          div.appendChild(hsIco);
          div.appendChild(hsContent);
        }
        container.appendChild(div);
      });
    };

    const elements = [
      {
        containerSelector: ".hero-features",
        items: [
          { icon: "✔", text: "Гарантія на всі роботи" },
          { icon: "✔", text: "Дотримуємося термінів" },
          { icon: "✔", text: "Прямі майстри, без посередників" },
        ],
      },
      {
        containerSelector: ".hero-services",
        items: [
          {
            icon: "D",
            title: "Демонтаж",
            slogan: "Чиста підготовка під ремонт",
            delay: "0ms",
          },
          {
            icon: "E",
            title: "Електрика",
            slogan: "Щитки, точки, проводка",
            delay: "150ms",
          },
          {
            icon: "S",
            title: "Сантехніка",
            slogan: "Монтаж труб і сантехприладів",
            delay: "300ms",
          },
          {
            icon: "T",
            title: "Штукатурка",
            slogan: "Ідеальні рівні стіни",
            delay: "450ms",
          },
        ],
      },
    ];

    elements.forEach(renderItems);
  }, 100);
})();
