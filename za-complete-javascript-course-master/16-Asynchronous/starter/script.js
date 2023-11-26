'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Old school

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
        </article>  
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = function (country) {
//   // AJAX call (country 1)
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render (country 1)
//     renderCountry(data);

//     // Get neighbouring country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // AJAX call (country 2)
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryDataAndNeighbour('nigeria');
// getCountryDataAndNeighbour('argentina');
// getCountryData('rwanda');
// getCountryData('kenya');
// getCountryData('usa');
// getCountryData('france');
// getCountryData('germany');

// Callback hell. Not encouraged
// setTimeout(function () {
//   console.log('1 second passed');
//   setTimeout(function () {
//     console.log('2 seconds passed');
//     setTimeout(function () {
//       console.log('3 seconds passed');
//       setTimeout(function () {
//         console.log('4 seconds passed');
//         setTimeout(function () {
//           console.log('5 seconds passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/nigeria`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('nigeria');

// const getCountryData = function (country) {
//   // Fetch country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       // Render country 1
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // Fetch country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// btn.addEventListener('click', function () {
//   getCountryData('nigeria');
// });

////////////////////////////////////////////
// Handling Promise rejection

// Get json
// const getJSON = function (url, errorMsg = `Country not found.`) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} {${response.status}}`);
//     }

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Fetch country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found.`)
//     .then(data => {
//       // Render country 1
//       console.log(data);
//       renderCountry(data[0]);

//       // For India
//       // renderCountry(data[1]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error(`No neighbour found`);

//       // Fetch country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found.'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderErr(`Something went wrong. 💥💥 ${err.message}. TRY AGAIN!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

///////////////////////////////////////////////
// Coding challenge 1
// const getNewJSON = function (url, errorMsg = `Problem with geocoding`) {
//   return fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(`${errorMsg} {${response.status}}`);
//     }

//     return response.json();
//   });
// };

// const whereAmI = function (lat, lng) {
//   // Fetch country name
//   getNewJSON(
//     `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`,
//     `Problem with geocoding`
//   )
//     .then(data => {
//       // Log location
//       console.log(data);

//       const { city } = data.address;

//       if (!city) {
//         throw new Error(`No city found`);
//       }

//       const { country } = data.address;

//       if (!country) {
//         throw new Error(`No country found`);
//       }

//       console.log(`You are in ${city}, ${country}.`);

//       // getCountryData(country);
//       // btn.addEventListener('click', function () {});
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })

//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found! Error {${response.status}}`);
//       }
//       return response.json();
//     })

//     .then(data => {
//       renderCountry(data[0]);
//     })

//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//       renderErr(`Something went wrong! 💥💥 ${err.message}. TRY AGAIN!`);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 1').then(res => {
//   for (let i = 0; i < 500; i++) {
//     console.log(res);
//   }
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening. 🔮');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 🎊');
//     } else {
//       reject(new Error('You LOST your money ☹'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(err => console.log(err));

// const getNewJSON = function (url, errorMsg = `Problem with geocoding`) {
//   return fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(`${errorMsg} {${response.status}}`);
//     }

//     return response.json();
//   });
// };

// getNewJSON(
//   `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`,
//   `Problem with geocoding`
// );

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// console.log('Getting position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       // Fetch country name
//       return fetch(
//         `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
//       ).then(response => {
//         console.log(response);

//         if (!response.ok) {
//           throw new Error(`Problem with gecocodign {${response.status}}`);
//         }

//         return response.json();
//       });
//     })
//     .then(data => {
//       // Log location
//       console.log(data);

//       const { state } = data.address;

//       if (!state) {
//         throw new Error(`No city found`);
//       }

//       const { country } = data.address;

//       if (!country) {
//         throw new Error(`No country found`);
//       }

//       console.log(`You are in ${state}, ${country}.`);

//       // getCountryData(country);
//       // btn.addEventListener('click', function () {});
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found! Error {${response.status}}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//       renderErr(`Something went wrong! 💥💥 ${err.message}. TRY AGAIN!`);
//     });
// };

// btn.addEventListener('click', whereAmI);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Coding challenge 2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const images = document.querySelector('.images');
// let image;

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     image = document.createElement('img');
//     image.src = imgPath;

//     image.addEventListener('load', () => {
//       images.append(image);
//       resolve(image);
//     });

//     image.addEventListener('error', () => {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// createImage('img/img-1.jpg')
//   .then(() => {
//     console.log(`Image 1 loaded.`);
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => {
//     createImage('img/img-2.jpg');
//     console.log(`Image 2 loaded.`);
//     return wait(2);
//   })
//   .then(() => (image.style.display = 'none'))
//   .catch(err => console.error(err));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// ASYNC | AWAIT
// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(
//       `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
//     );
//     if (!resGeo.ok) throw new Error(`Problem getting location data`);

//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.address.country}`
//     );

//     if (!res.ok) throw new Error(`Problem getting country`);
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You're in ${dataGeo.address.state} state, ${dataGeo.address.country}.`;
//   } catch (err) {
//     console.log(`${err} 💥`);
//     renderErr(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location.');
// console.log(whereAmI());

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

// try {
//   let y = 1;
//   const x = 3;
//   y = 4;
//   console.log(x);
// } catch (err) {
//   alert(err.message);
// }

// Get json
const getJSON = function (url, errorMsg = `Country not found.`) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} {${response.status}}`);
    }

    return response.json();
  });
};

// Promise.race - Gets only the fastest settled promise
// doesn't matter if it's resolved or rejected

// VS

// Promise.any
// Returns the first resolved promise and
// ignores the rejected promises

// Promise.allSettled - Returns all the promises (Resolved and rejected)

// VS

// Promise.all - Returns all resolved promises except there's an
// unfulfilled one where it short-circuits to show the error

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('nigeria', 'rwanda', 'argentina');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/kenya`),
//   ]);
//   console.log(res[0]);
// })();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

// Promise.race([getJSON(`https://restcountries.com/v2/name/ghana`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// const test = async function () {
//   try {
//     const info = await Promise.race([
//       getJSON(`https://restcountries.com/v2/name/ghana`),
//       timeout(0.13),
//     ]);

//     const res = await info[0];
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// };

// test();

// Promise.allSettled - Returns all the promises (Resolved and rejected)
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Success'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// VS

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any
// Returns the first resolved promise and
// ignores the rejected promises
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Challenge 3
// Part 1
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const images = document.querySelector('.images');
// let image;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', () => {
      images.append(image);
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded.`);
    await wait(2);

    img.style.display = 'none';
    await wait(2);

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log(`Image 2 loaded.`);
    await wait(2);

    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

// Part 2 - Jonas
const loadAll = async function (imgsArr) {
  try {
    const imgs = imgsArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);

    // const images = await Promise.all(imgsArr.map(createImage));
    // console.log(images);

    imgsEl.forEach(img => {
      img.classList.add('parallel');
      console.log(img);
    });
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// createImage('img/img-1.jpg')
//   .then(() => {
//     console.log(`Image 1 loaded.`);
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => {
//     createImage('img/img-2.jpg');
//     console.log(`Image 2 loaded.`);
//     return wait(2);
//   })
//   .then(() => (image.style.display = 'none'))
//   .catch(err => console.error(err));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       if (Math.random() > 0) {
//         resolve('You WIN 🎊');
//       }
//     }, seconds * 1000);
//   });
// };

// wait(1)
//   .then(res => {
//     console.log(`1 second passed ${res}`);
//     return wait(1);
//   })
//   .then(res => {
//     console.log(`2 second passe ${res}`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// const getCountryData = function (country) {
//   // Fetch country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found! Error {${response.status}}`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       // Render country 1
//       renderCountry(data[0]);

//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'sjdvsv';
//       if (!neighbour) return;

//       // Fetch country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found! Error {${response.status}}`);
//       }

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderErr(`Something went wrong! 💥💥 ${err.message}. TRY AGAIN!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('sdduud');
