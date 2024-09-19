const nowPlayingMoviesListDOM = document.querySelector("#screen-movie");
const topRatedMoviesListDOM = document.querySelector("#score-movie");
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const moviesList = {
  nowPlaying: {
    selector: "screen-movie",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
  },

  topRated: {
    selector: "score-movie",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
};

// 50개 영역을 만들어 넣기
// for (let i = 0; i < 50; i++) {
//   nowShowingMoviesListDOM.innerHTML += movieHTML;
//   topRatedMoviesListDOM.innerHTML += movieHTML;
// }

/*
    TMDB API를 사용해서 만들어 보기
- https://developer.themoviedb.org/reference/intro/getting-started
- API KEY: db7b12c3c668b23ce8a6ca21ba193bcb
- Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4

*/

// 혼자 실습한 코드
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
  },
};
const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";

// fetch(nowPlayingUrl, options)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data.results);
//     const movies = data.results;

//     movies.forEach((movie, index) => {
//       console.log(movie);

//       const movieHTML = `
//         <div id="movie-box">
//             <img class="box" src="${IMAGE_BASE_URL}${movie.backdrop_path}"></img>
//             <h3>${movie.title}</h3>
//         </div>
// `;

//       nowShowingMoviesListDOM.innerHTML += movieHTML;
//     });
//   });

const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

// fetch(topRatedUrl, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     const ranks = data.results;

//     ranks.forEach((rank) => {
//       const movieHTML = `
//         <div id="movie-box">
//             <img class="box" src="${IMAGE_BASE_URL}${rank.backdrop_path}"></img>
//             <h3>${rank.title}</h3>
//         </div>
// `;

//       topRatedMoviesListDOM.innerHTML += movieHTML;
//     });
//   });

// 같이한 코드
// 위 코드를 함수로 정의해 사용
function fetchAndRenderMovies(url, dom) {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const ranks = data.results;

      ranks.forEach((rank) => {
        const movieHTML = `
        <div id="movie-box">
            <img class="box" src="${IMAGE_BASE_URL}${rank.backdrop_path}"></img>
            <h3>${rank.title}</h3>
        </div>
`;

        dom.innerHTML += movieHTML;
      });
    });
}

// 위 코드를 받기, 넣기의 2가지 단계로 나누어 제작
async function getMovies(url) {
  const movies = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;

      return movies;
    });

  return movies;
}

function renderMovies(movies, dom) {
  ranks.forEach((rank) => {
    const movieHTML = `
        <div id="movie-box">
            <img class="box" src="${IMAGE_BASE_URL}${rank.backdrop_path}"></img>
            <h3>${rank.title}</h3>
        </div>
      `;

    dom.innerHTML += movieHTML;
  });
}

// 햡쳐서 작업하기
async function main() {
  // const nowPlayingMovies = await getMovies(nowPlayingUrl);
  // renderMovies(nowPlayingMovies, nowPlayingMoviesListDOM);

  // const topRatedMovies = await getMovies(topRatedUrl);
  // renderMovies(topRatedMovies, topRatedMoviesListDOM);

  Object.entries(moviesList).forEach(async ([_, value]) => {
    const { selector, url } = moviesList[key];
    const movies = await getMovies(url);
    const dom = document.querySelector(selector);
    renderMovies(movies, dom);
  });
}

main();

fetchAndRenderMovies(nowPlayingUrl, nowPlayingMoviesListDOM);
fetchAndRenderMovies(topRatedUrl, topRatedMoviesListDOM);

/*

    Promise공부
    구조분해 공부
    같이한 코드 형식 공부

    함수는 가능한 여러번 쓰는게 좋다


    사용하지 않을 변수는 언더스코어(_)로 표현한다
    [_,_,c] 이러한 방식


  비동기 작업 : 시작은 하는데, 완료까진 기다리진 않는 작업
  비동기 작업을 만드는 방법 :
  new Promise((resolve, reject)=>{
      약속으로서 처리해 줄 내용

      약속이 잘 처리되었습니다 -> resolve()
      약속이 잘 처리되지 않았습니다. -> reject()
    })

    약속은 세 가지 상태를 가진다
    -> pending,  fulfilled,   reject
        대기      약속이행     이행실패
               (resolve호출) (reject호출)

  약속에서 결과값 뽑기
  .then, await

  .then((value)={
    
  })

  const value = await.약속
  async 함수로 감싸 출력할 수 있다

  

const promise = new Promise((resolve, reject) => {
  const condition = false;

  if (condition) {
    resolve(100);
  } else {
    reject(500);
  }
});

promise
  .then((data) => {
    console.log(data); // resolve값 반환
  })
  .catch((data) => {
    console.log(data); // reject값 반환
  })
  .finally((data) => {
    console.log("약속이 성공했는지 실패했는지 모르겠지만, 어쨌든 약속 끝남");
  });
// 500

const a = await promise;
// await는 항상 resolve케이스만 다룬다
// reject를 다루게된다면 에러가 발생한다. (에러호출로 바뀐다)
// 이런 경우에는 try, catch구문을 사용한다

try {
  const a = await promise;
  console.log(1);
} catch {
  console.log(2);
}

// resolve라면 1출력
// reject라면 2 출력
*/