/* Function likhe felbo, () etar kuno parameter nai */
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) );
}

/* Countries data gulo ekhane thakbe,  ar ekta function likhbo*/
const displayCountries = countries =>{
      console.log(countries);
      /*variable declare line, */
      const allCountriesHTML =
}
/* function call korlam */
loadCountries();