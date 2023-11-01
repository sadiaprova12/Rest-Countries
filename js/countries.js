/* Function likhe felbo, () etar kuno parameter nai */
const loadCountries = () =>{
    /* fetch r moddhe j link deya ase seta "All API theke link neya hoyeche" */
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

/* Countries data gulo ekhane thakbe,  ar ekta function likhbo*/
const displayCountries = countries =>{
      console.log(countries);
      /*variable declare line, */
      const countriesHTML = countries.map(country => getCountryHTML(country));
      /* [0] deyar karon ekta kore div dekhar jonno . chaile sob gula dekhate pari */
     // console.log(countriesHTML[0]); //
     const container = document.getElementById('countries');
     /* .join(' ') reason coma na thakar jonno serial akare line thakbe*/
     container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country =>{
    return `
    <div>
      <h2>${country.name.common}</h2>
      <img src="${country.flags.png}">
    </div>
    `
}
/* function call korlam */
loadCountries();