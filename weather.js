let weather = {
  apiKey: "536e3bac8daa33afdb7dea49c25c275f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Moscow");

function generateAutocompleteOptions(searchTerm) {
  // Вместо жестко закодированных данных вы можете отправить AJAX-запрос на сервер, чтобы получить список вариантов для автодополнения
  const options = [
    // Africa
    "Cairo",
    "Johannesburg",
    "Lagos",
    "Nairobi",
    "Tunis",

    // Asia
    "Bangkok",
    "Beijing",
    "Dubai",
    "Hong Kong",
    "Istanbul",
    "Jakarta",
    "Jerusalem",
    "Karachi",
    "Kolkata",
    "Mumbai",
    "New Delhi",
    "Osaka",
    "Seoul",
    "Shanghai",
    "Singapore",
    "Taipei",
    "Tokyo",

    // Europe
    "Amsterdam",
    "Athens",
    "Barcelona",
    "Berlin",
    "Brussels",
    "Budapest",
    "Copenhagen",
    "Dublin",
    "Edinburgh",
    "Geneva",
    "Helsinki",
    "Istanbul",
    "Lisbon",
    "London",
    "Madrid",
    "Milan",
    "Moscow",
    "Munich",
    "Oslo",
    "Paris",
    "Prague",
    "Rome",
    "Stockholm",
    "Vienna",
    "Warsaw",
    "Zurich",

    // North America
    "Atlanta",
    "Boston",
    "Chicago",
    "Dallas",
    "Houston",
    "Las Vegas",
    "Los Angeles",
    "Miami",
    "Montreal",
    "New Orleans",
    "New York",
    "San Francisco",
    "Toronto",
    "Vancouver",

    // South America
    "Buenos Aires",
    "Lima",
    "Rio de Janeiro",
    "Santiago",
    "São Paulo",

    //Russia
    "Moscow",
    "Saint Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Nizhny Novgorod",
    "Kazan",
    "Chelyabinsk",
    "Omsk",
    "Samara",
    "Rostov-on-Don",
    "Ufa",
    "Krasnoyarsk",
    "Voronezh",
    "Perm",
    "Volgograd",
    "Krasnodar",
    "Saratov",
    "Tyumen",
    "Izhevsk",
    "Ulyanovsk",
    "Barnaul",
    "Vladivostok",
    "Yaroslavl",
    "Tolyatti",
    "Irkutsk",
    "Khabarovsk",
    "Makhachkala",
    "Kemerovo",
    "Orenburg",
    "Novokuznetsk",
    "Ryazan",
    "Tomsk",
    "Astrakhan",
    "Penza",
    "Naberezhnye Chelny",
    "Kirov",
    "Lipetsk",
    "Cheboksary",
    "Balashikha",
    "Kurgan",
    "Kaliningrad",
    "Stavropol",
    "Sochi",
    "Belgorod",
    "Kursk",
    "Arkhangelsk",
    "Volzhsky",
    "Vladikavkaz",
    "Nizhnevartovsk",
    "Bratsk",
    "Magnitogorsk",
    "Kostroma",
    "Kolomna",
    "Komsomolsk-on-Amur",
    "Kovrov",
    "Novorossiysk",
    "Taganrog",
    "Engels",
    "Korolyov",
    "Lyubertsy",
    "Podolsk",
    "Nizhnekamsk",
    "Dzerzhinsk",
    "Derbent",
    "Orekhovo-Zuevo",
    "Kaspiysk",
    "Novomoskovsk",
    "Cherkessk",
    "Neftekamsk",
    "Novocheboksarsk",
    "Nevinnomyssk",
    "Zheleznogorsk",
    "Electrostal",
    "Prokopyevsk",
    "Pyatigorsk",
    "Miass",
    "Zlatoust",
    "Novokuybyshevsk",
    "Serpukhov",
    "Rubtsovsk",
    "Oktyabrsky",
    "Berezniki",
    "Pervouralsk",
    "Kopeysk",
    "Nazarovo",
    "Tikhvin",
    "Kuznetsk",
    "Kasimov",
    "Kislovodsk",
    "Kovdor",
    "Mezhdurechensk",
    "Sarapul",
    "Gukovo",
    "Anzhero-Sudzhensk",
    "Roshal",
    "Azov",
    "Vyksa",
    "Solnechnogorsk",
    "Usolye-Sibirskoye",
    "Shatura",
    "Slavyansk-na-Kubani",
    "Zima",
    "Gus-Khrustalny",
    "Buzuluk",
    "Krymsk",
  ];

  const filteredOptions = options.filter(option => option.toLowerCase().startsWith(searchTerm.toLowerCase()));

  // Возвращаем HTML-код для списка вариантов
  return filteredOptions.map(option => `<div class="option">${option}</div>`).join("");
}

// Получаем ссылки на необходимые элементы
const searchBar = document.querySelector(".search-bar");
const autocompleteList = document.createElement("div");

// Добавляем список вариантов в DOM
searchBar.after(autocompleteList);

// Обработчик события для автодополнения при вводе текста в поле поиска
searchBar.addEventListener("input", event => {
  // Получаем текущее значение текстового поля
  const searchTerm = event.target.value.trim();

  // Очищаем список вариантов от старых значений
  autocompleteList.innerHTML = "";

  // Если поисковый запрос не пустой, то генерируем новый список вариантов и добавляем его в DOM
  if (searchTerm !== "") {
    const optionsHtml = generateAutocompleteOptions(searchTerm);
    autocompleteList.innerHTML = optionsHtml;
    autocompleteList.style.display = "block";
  } else {
    autocompleteList.style.display = "none";
  }
});

// Обработчик события для выбора варианта автодополнения из списка
autocompleteList.addEventListener("click", event => {
  // Если клик произошел на элементе списка, то заменяем значение текстового поля на выбранный вариант
  if (event.target.classList.contains("option")) {
    searchBar.value = event.target.textContent;
    autocompleteList.style.display = "none";
  }
});

// Обработчик события для скрытия списка вариантов при клике вне элементов поиска и списка
document.addEventListener("click", event => {
  if (!searchBar.contains(event.target) && !autocompleteList.contains(event.target)) {
    autocompleteList.style.display = "none";
  }
});

// Располагаем список вариантов над полем ввода
autocompleteList.style.position = "fixed";
autocompleteList.style.top = "39%";
autocompleteList.style.left = '40.5%';
autocompleteList.style.background = "white";
autocompleteList.style.color = "black";
autocompleteList.style.width = "280px";
autocompleteList.style.borderRadius = "5px";