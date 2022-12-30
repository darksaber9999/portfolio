const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
let portfolioItems = document.querySelectorAll(portfolioData);

/* Modal */
let openModal = document.querySelectorAll(modalOpen);
let closeModal = document.querySelectorAll(modalClose);


const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

// Theme Switcher
const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener('click', function () {
    const toggle = this.dataset.toggle;
    // set active state
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
}

// Programmatically construct the Portfolio cards
const portfolioCards = {
  dataItemValues: ["html css js api", "react", "api react", "react", "api react"],
  dataOpenValues: ["web-1", "web-2", "web-3", "web-4", "web-5"],
  portfolioLinkDescriptions: ["HTML CSS JavaScript API", "React", "API React", "React", "API React"],
  portfolioLinkTitles: ["Recipe Selector", "Code Corner", "5 Day Weather Widget", "The Great Emoji Search", "Shopper"],
  portfolioModalDescriptions: [
    "The Recipe Selector is a Devslopes-based project that had these general requirements: 'You are going to create your own website that fetches and displays real data from an API. A user can add and remove these items from a 'favorites' list and has the ability to sort the data.' The API choice was up to us as students and I chose to create a project based on recipes. I chose this because I figured that not only would this satisfy the requirements but also because I could make a straightforward, simple UI while basing the project in a more useful subject to me. This was the first big Devslopes project that I took on that wasn't some form of landing page. Looking back, I think maybe I made a mistake in my mindset about the simple UI in that it bled into me thinking that the coding would be simple. I had many frustration points with this one but I was able to get the idea in my mind to translate to the digital page well enough. There is definitely some refactoring and improvements that could happen with this project.",
    "The Code Corner is a Devslopes-based project that was presented with these general requirements: 'You are going to build an e-commerce store for code. A super-smart person decided it was time for developers to actually make money with code instead of posting it for free online. Introducing Code Commerce -- a store where developers can sell pre-built code projects and snippets.' The main learning points were based in forms relating to React, stateful components, and passing data through props. This was my second React-based project and this project took me a while to wrap my head around. I was able to get a good idea on paper but there was a pretty big learning curve as things went with React. Initially I struggled with State and Props and how to use them properly to store conditional data and how to display it when applicable. Over time, I feel like I started to get used to things and get the project to work properly. This project would probably benefit from refactoring as I could make things much cleaner than they currently are. However, since this project currently isn't attached to any back-end it may end up standing as is.",
    "The 5 Day Weather Forecast is a Devslopes-based code-along that was used to help teach the basics of adding an API back-end to a React project. While this project doesn't show a lot of my own problem-solving, I believe that it still shows some of what I am capable of in addition to showing my learning path as it relates to projects that came after it.",
    "The Great Emoji Search is a Devslopes-based challenge that tried to reinforce React components, State, Props, and connecting with JSON to parse data. Students were given instructions on what components to include, operation requirements, and the JSON data file and were given creative freedom to achieve the goal. I really liked this challenge because it cemented ideas and processes in my mind about how search should operate and how best to filter and retrieve data. It was fun to solve problems such as how to include the most applicable search perimeters and how to accomplish all the details like changing color on hover and click to copy. I would probably say my biggest difficultly building this came in getting the emoji rows to display correctly when entering a search term while maintaining the requirement of only 20 visible rows.",
    "Shopper is the latest Devslopes-based project I've completed. It's general requirements were as follows: 'You are going to build a full-stack project. ... 'Shopper' is a full-stack application that is similar to Amazon.com.' For the backend, we were to use the open-source Node API CommerceJS. (https://commercejs.com) We were also given the option to reuse our code from the Code Commerce App (See: The Code Corner) in building this project, however, I wanted to build a new UI from scratch using techniques that I had learned since. This project was complex and I had many instances where I was unable to achieve what I wanted to through my initial attempts and either learned to work-around the issues or had to reconfigure the idea to adapt to the issue that I was unable to solve. Bugs can be so very, very frustrating! In the end, I think it turned out really amazing and you can definitely see the influence that past projects had on it."
  ],
  portfolioGitHubLinks: [
    "https://github.com/darksaber9999/recipe-selector",
    "https://github.com/darksaber9999/code-commerce",
    "https://github.com/darksaber9999/weather-widget",
    "https://github.com/darksaber9999/emoji-search",
    "https://github.com/darksaber9999/shopper"
  ],
  portfolioWebsiteLinks: [
    "https://recipe-selector.netlify.app",
    "https://the-code-corner.netlify.app",
    "https://5day-weather-widget.netlify.app",
    "https://the-great-emoji-search.netlify.app",
    "https://shopper-api-app.netlify.app"
  ],
};

const createPortfolioCard = (dataItem, dataOpen, imageNum, title, description) => {
  const portfolioCard = document.createElement("div");
  const cardBody = document.createElement("div");
  const portfolioIcon = document.createElement("img");
  const portfolioLink = document.createElement("div");
  const portfolioLinkDescription = document.createElement("div");
  const portfolioLinkTitle = document.createElement("h3");

  portfolioCard.setAttribute("class", "portfolio-card");
  portfolioCard.setAttribute("data-item", dataItem);
  portfolioCard.setAttribute("data-open", dataOpen);
  cardBody.setAttribute("class", "card-body");
  portfolioIcon.setAttribute("src", `./assets/images/portfolio-${imageNum}.png`);
  portfolioIcon.setAttribute("alt", "portfolio icon");
  portfolioLink.setAttribute("class", "card-popup-box");
  portfolioLinkDescription.innerHTML = title;
  portfolioLinkTitle.innerHTML = description;

  portfolioLink.appendChild(portfolioLinkDescription);
  portfolioLink.appendChild(portfolioLinkTitle);
  cardBody.appendChild(portfolioIcon);
  cardBody.appendChild(portfolioLink);
  portfolioCard.appendChild(cardBody);

  document.querySelector(".portfolio-grid").appendChild(portfolioCard);
}

for (let i = 0; i < portfolioCards.dataItemValues.length; i++) {
  createPortfolioCard(portfolioCards.dataItemValues[i], portfolioCards.dataOpenValues[i], i + 1, portfolioCards.portfolioLinkDescriptions[i], portfolioCards.portfolioLinkTitles[i]);
  openModal = document.querySelectorAll(modalOpen);
  portfolioItems = document.querySelectorAll(portfolioData);

}

const createPopupModal = (modalId, modalTitle, imageNum, techDescription, modalDescription, githubLink, websiteLink) => {
  const modal = document.createElement("div");
  const modalDialog = document.createElement("div");
  const modalHeader = document.createElement("header");
  const modalHeaderTitle = document.createElement("h3");
  const modalHeaderClose = document.createElement("i");
  const modalBody = document.createElement("div");
  const modalBodyImageWrapper = document.createElement("div");
  const modalBodyImage = document.createElement("img");
  const modalBodyTextWrapper = document.createElement("div");
  const modalBodyTextWrapperP1 = document.createElement("p");
  const modalBodyTextWrapperStrong = document.createElement("strong");
  const modalBodyTextWrapperP2 = document.createElement("p");
  const modalBodyButtonWrapper = document.createElement("div");
  const modalBodyButtonLink1 = document.createElement('a');
  const modalBodyButton1 = document.createElement("div");
  const modalBodyButtonLink2 = document.createElement('a');
  const modalBodyButton2 = document.createElement("div");


  modal.setAttribute("id", modalId);
  modal.setAttribute("class", "modal");
  modal.setAttribute("data-animation", "slideInOutTop");
  modalDialog.setAttribute("class", "modal-dialog");
  modalHeader.setAttribute("class", "modal-header");
  modalHeaderTitle.innerHTML = modalTitle;
  modalHeaderClose.setAttribute("class", "fas fa-times");
  modalHeaderClose.setAttribute("data-close", "");
  modalBody.setAttribute("class", "modal-body");
  modalBodyImageWrapper.setAttribute("class", "img-wrapper");
  modalBodyImage.setAttribute("src", `./assets/images/portfolio-${imageNum}.png`);
  modalBodyImage.setAttribute("alt", "portfolio image");
  modalBodyTextWrapper.setAttribute("class", "text-wrapper");
  modalBodyTextWrapperStrong.innerHTML = `Tech Stack used: ${techDescription}`;
  modalBodyTextWrapperP2.innerHTML = modalDescription;
  modalBodyButtonWrapper.setAttribute("class", "modal-button-wrapper");
  modalBodyButtonLink1.setAttribute("href", githubLink);
  modalBodyButtonLink1.setAttribute("target", "_blank");
  modalBodyButton1.setAttribute("class", "btn btn-primary round-pill");
  modalBodyButton1.innerHTML = "See on GitHub";
  modalBodyButtonLink2.setAttribute("href", websiteLink);
  modalBodyButtonLink2.setAttribute("target", "_blank");
  modalBodyButton2.setAttribute("class", "btn btn-primary round-pill");
  modalBodyButton2.innerHTML = "Live Website";


  modalBodyButtonLink1.appendChild(modalBodyButton1);
  modalBodyButtonLink2.appendChild(modalBodyButton2);
  modalBodyButtonWrapper.appendChild(modalBodyButtonLink1);
  modalBodyButtonWrapper.appendChild(modalBodyButtonLink2);
  modalBodyTextWrapperP1.appendChild(modalBodyTextWrapperStrong);
  modalBodyTextWrapper.appendChild(modalBodyTextWrapperP1);
  modalBodyTextWrapper.appendChild(modalBodyTextWrapperP2);
  modalBodyImageWrapper.appendChild(modalBodyImage);
  modalBody.appendChild(modalBodyImageWrapper);
  modalBody.appendChild(modalBodyTextWrapper);
  modalBody.appendChild(modalBodyButtonWrapper);
  modalHeader.appendChild(modalHeaderTitle);
  modalHeader.appendChild(modalHeaderClose);
  modalDialog.appendChild(modalHeader);
  modalDialog.appendChild(modalBody);
  modal.appendChild(modalDialog);

  document.querySelector(".site-wrapper").appendChild(modal);
}

// Modal open/close buttons
for (const elm of openModal) {
  elm.addEventListener('click', function () {
    const modalId = this.dataset.open;
    const arrayNum = portfolioCards.dataOpenValues.indexOf(modalId);
    if (arrayNum >= 0) {
      createPopupModal(modalId, portfolioCards.portfolioLinkTitles[arrayNum], arrayNum + 1, portfolioCards.portfolioLinkDescriptions[arrayNum], portfolioCards.portfolioModalDescriptions[arrayNum], portfolioCards.portfolioGitHubLinks[arrayNum], portfolioCards.portfolioWebsiteLinks[arrayNum]);
      closeModal = document.querySelectorAll(modalClose);
      assignCloseListeners();
    }
    document.getElementById(modalId).classList.add(isVisible);
  })
}

function assignCloseListeners() {
  for (const elm of closeModal) {
    elm.addEventListener('click', function () {
      if (this.parentElement.parentElement.parentElement.id === "about" || this.parentElement.parentElement.parentElement.id === "contact") {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      } else {
        this.parentElement.parentElement.parentElement.remove();
      }
    })
  }
}

assignCloseListeners();

// Modal close options
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').remove();
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').remove();
  }
})

// Portfolio Filter
for (const link of filterLink) {
  link.addEventListener('click', function () {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    })
  })
}