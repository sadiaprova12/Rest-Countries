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

// Jokhon kuno ekta object k parameter hisebe pash korbo, sei object k 1 ta , 2 ta property k niye kisu ekta korte chai tahole Option 1 ase , setar moto kore destructuring variable declare korte pari . Niche Total 3 ta step ase j keno ekta setp diye korle kaj korbe . //

/* Option 1
const getCountryHTML = country =>{
    // destructuring use option1 variable declare //
    const {name, flags} = country;
    return `
    <div class="country" >
      <h2>${name.common}</h2>
      <img src="${flags.png}">
    </div>
    `
}*/

/* Original 
const getCountryHTML = country =>{
    return `
    <div class="country" >
      <h2>${country.name.common}</h2>
      <img src="${country.flags.png}">
    </div>
    `
}*/

/* Original ta ar ek vabe chinta kora jay
 const getCountryHTML = country =>{
    const {name, flags} = country;
    return `
    <div class="country" >
      <h2>${name.common}</h2>
      <img src="${flags.png}">
    </div>
    `
}
*/

/* 2nd Original k ghuray pechay ar ek vabe kora jay For Example
   // Parameter e majhe destructuring kore fela bola hoy//
   const getCountryHTML = ({name, flags}) =>{
    return `
    <div class="country" >
      <h2>${name.common}</h2>
      <img src="${flags.png}">
    </div>
    `
}
*/
const getCountryHTML = ({name, flags, area}) =>{
    return `
    <div class="country" >
      <h2>${name.common}</h2>
      <p>Area: ${area}</p>
      <img src="${flags.png}">
    </div>
    `
}
/* function call korlam */
loadCountries();