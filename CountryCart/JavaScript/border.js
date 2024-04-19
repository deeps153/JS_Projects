var countryImgContainer = document.querySelector('.country_img');
var countryBoxs = document.querySelector('.country_boxs');
var searchInput = document.querySelector(".search_input");
var searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search_box');
const cValue = searchInput.value;
const errorMessage = document.querySelector('.error_message');
var result = [];

var countryBody;

// ....................... Pagination .......................

    


    function displayPage(page) {
        countryBoxs.innerHTML = '';

        // for(int i=0 ; i<)
            // const ele = result[i];

        const countryBody = ` <div class="box flex-center flex-c">
        <div class="country_img">
            <a href="#">
                <img src="${ele.flags.png}" alt="India">
            </a>
        </div>
        <div class="country_description">
            <div class="country_name flex-center">
                <h2>${ele.name.common}</h2>
            </div>
            <div class="country_capital flex-space-between">
                <h3>Capital : </h3>
                <h3>${ele.capital[0]}</h3>
            </div>
            <div class="country_lang flex-space-between">
                <h3>Language : </h3>
                <h3>${Object.values(ele.languages)[0]}</h3>
            </div>
            <div class="country_population flex-space-between">
                <h3>Population : </h3>
                <h3>${ele?.population}</h3>
            </div>
            <div class="country_population flex-space-between">
                <h3>Currencies : </h3>
                <h3>${Object.values(ele?.currencies)[0].symbol}</h3>
            </div>
            <div class="country_continent flex-space-between">
                <h3>Continent :</h3>
                <h3>${ele.continents[0]}</h3>
            </div>
        </div>
    </div>`;

        countryBoxs.insertAdjacentHTML('beforeend', countryBody);

    }

  

// ************** fun ends ***************

const url = `https://restcountries.com/v3.1/all`;

fetch(url)
    .then((data) => {
        data.json().then((fetchedResult) => {
        
            result = fetchedResult;
        
            result.forEach((ele) => {
                console.log({ele});
                if (ele != undefined && ele.capital != undefined && ele.capital.length > 0) {

                    displayPage(1);

                }
            })

        })

    })

var countryName = document.querySelector('.country_name');
var box = document.querySelector('.box');

// ................search bar...................

searchIcon.addEventListener('click', () => {
    pagination.style.display = "block";
    errorMessage.style.display = "none";
    searchInput.style.width = `${40}%`;
    searchInput.style.backgroundColor = '#fff';

    fetch(url).then((data) => {
        data.json().then((result) => {
            console.log({ result });

            const filteredCountries = result.filter((ele) => {
                const countryName = ele.name.common.toLowerCase();
                const countryContinent = ele.continents[0].toLowerCase();

                return countryName.includes(searchInput.value.toLowerCase()) ||
                    countryContinent.includes(searchInput.value.toLowerCase());
            });

            console.log(filteredCountries.length);

            countryBoxs.innerHTML = '';

            if (filteredCountries.length > 0) {
                filteredCountries.forEach((ele) => {
                    const countryBody = ` <div class="box flex-center flex-c">
                    <div class="country_img">
                        <a href="#">
                            <img src="${ele.flags.png}" alt="India">
                        </a>
                    </div>
                    <div class="country_description">
                        <div class="country_name flex-center">
                            <h2>${ele.name.common}</h2>
                        </div>
                        <div class="country_capital flex-space-between">
                            <h3>Capital : </h3>
                            <h3>${ele.capital[0]}</h3>
                        </div>
                        <div class="country_lang flex-space-between">
                            <h3>Language : </h3>
                            <h3>${Object.values(ele.languages)[0]}</h3>
                        </div>
                        <div class="country_population flex-space-between">
                            <h3>Population : </h3>
                            <h3>${ele?.population}</h3>
                        </div>
                        <div class="country_population flex-space-between">
                            <h3>Currencies : </h3>
                            <h3>${Object.values(ele?.currencies)[0].symbol}</h3>
                        </div>
                        <div class="country_continent flex-space-between">
                            <h3>Continent :</h3>
                            <h3>${ele?.continents[0]}</h3>
                        </div>
                    </div>
                </div>`;

                    countryBoxs.insertAdjacentHTML('beforeend', countryBody);

                });
            } else {
                errorMessage.style.display = "block";
                pagination.style.display = "none";
            }

        });
    });
});



countryBoxs.addEventListener('click', () => {
    console.log("serachInput ", searchInput.value.length);
    if (searchInput.value.length != 0) {
        searchInput.style.width = `${40}%`;
        searchInput.style.backgroundColor = '#fff';
    } else {
        searchInput.style.width = `${0}%`;
        searchInput.style.backgroundColor = '#000';
        searchIcon.style.justifyContent = 'flex-start';
    }
})









