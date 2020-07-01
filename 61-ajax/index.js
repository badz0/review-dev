// let test = {
//   marks: [1, 2, 5],
//   msg: "hello"
// };

// console.log( JSON.parse(JSON.stringify(test)) );
// let testCopy = JSON.parse(JSON.stringify(test));


// const xhr = new XMLHttpRequest();
// console.log('xhr: ', xhr);

// xhr.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=4adb59ec9a677a24e9098f3069908adb');

// xhr.send();

// xhr.onload = function() {
//   console.log('response ', JSON.parse(xhr.response));
// }

let key = '?api_key=4adb59ec9a677a24e9098f3069908adb';

function getMovies() {
  return axios.get('https://api.themoviedb.org/3/discover/movie' + key)
}

function getCast(id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits${key}`);
}

function getActor(actorId) {
  return axios.get(`https://api.themoviedb.org/3/person/${actorId}${key}`);
}


getMovies()
  .then(res => {
    return getCast(res.data.results[0].id);
  })
  .then(res => {
    let actorPromise1 = getActor(res.data.cast[0].id);

    let actorPromise2 = getActor(res.data.cast[1].id);

    return Promise.race([actorPromise1, actorPromise2])
  }).then(res => {
    // console.log(res.data.name);
    // console.log(arr[0].data.name + ' ' + arr[1].data.name);
  }).catch(err => {
    // console.log('err: ', err);
  })







function getPromise() {
  console.log('getpromise');
  return axios.get('https://api.themoviedb.org/3/discover/movie' + key);
}


// getPromise().then(() => {
//   console.log('yeah promise 1 resolved');
//   getPromise().then(() => {
//     console.log('yeah promise 2 resolved');
//     getPromise().then(() => {
//       console.log('yeah promise 3 resolved');
//     });
//   });
// });

// getPromise().then(getPromise).then(getPromise)
//   .then(() => {
//     console.log('yeah promise 3 resolved');
//   });

// ?api_key=4adb59ec9a677a24e9098f3069908adb
// https://image.tmdb.org/t/p/original/

// /movie/{movie_id}
// /movie/{movie_id}/credits
// /person/{person_id}
// /person/{person_id}/movie_credits


function lateLog(msg, ivan) {
  const promise = new Promise((resolve, reject) => {
    console.log('promise func');
    if (ivan === 'ivan') {
      setTimeout(() => {
        console.log(msg);
        resolve('im done');
      }, 3000);
    } else {
      reject('only for ivan')
    }
  });

  return promise;
}



// lateLog('hey', 'vlad').then(res => {
//   console.log('res: ', res);
// }).catch((err) => {
//   console.log('err: ', err);
// });



async function getMoviesNew() {
  try {
    let res = await axios.get('https://api.themoviedb.org/3/discover/movie' + key);
    console.log('res: ', res);
    let credits = await getCast(res.data.results[0].id);
    console.log('credits: ', credits);

    let [actor1, actor2] = await Promise.all([
      getActor(credits.data.cast[0].id),
      getActor(credits.data.cast[1].id)
    ]);

    console.log('actor1: ', actor1, actor2);

  } catch (err) {
    console.log('err: ', err);
  }
}

getMoviesNew();

// let unknownString = '{}{}aasdf';

// console.log(1);

// try {
//   console.log('result: ', result);
// } catch (err) {
//   console.log('hey user type normal json ', err);
// } finally {
//   console.log('yes');
// }

// console.log(2);
