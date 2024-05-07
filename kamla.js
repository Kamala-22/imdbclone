// async function getData() {
//     const url = 'https://frontend-bootcamp-co.slack.com/archives/C06FZFBP77A/p1715053230961629?thread_ts=1714704801.115229&cid=C06FZFBP77A';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '1883110a00msh3220c7c04cddc25p1c2be4jsn5e9e91f5fea8',
//             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//     };



//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse response as JSON
//         localStorage.setItem("data", JSON.stringify(result)); // Store JSON object as string
//     } catch (error) {
//         console.error(error);
//     }
// }

// window.addEventListener("DOMContentLoaded", getData());


// showData = () => {
//     console.log('showData');
//     let movies = JSON.parse(localStorage.getItem("movies"));

//     console.log(movies);

//     for (let i = 0; i < movies.length; i++) {
//         let div = document.createElement("div");

//         div.className = "image_1";
//         div.setAttribute("id", i)

//         div.addEventListener("click", () => {

//             window.location.href = "films.html";
//             localStorage.setItem("movie", JSON.stringify(movies[i]))
//         })

//         let html = `<img src="${movies[i].image}" alt="movie image" class="image">
//                     <h4>${movies[i].rating}</h4>
//                     <h4>${movies[i].title}</h4>
//                     <button id="watch">watch</button>
//                     <button id="trailer">trailer</button>`;

//         div.innerHTML += html;
//         document.getElementsByClassName("main")[0].appendChild(div);


//         // document.getElementsByClassName("main")[0].appendChild("div");

//         console.log(movies[i]);
//     }
// }
// window.addEventListener("DOMContentLoaded", showData());


showData = () => {
    console.log('showData');
    let movies = JSON.parse(localStorage.getItem("movies"));
    let searchTerm = document.getElementById("text").value.trim().toLowerCase(); // Get the value entered in the search bar and convert it to lowercase for case-insensitive comparison

    console.log(movies);

    // Clear previous search results
    document.getElementsByClassName("main")[0].innerHTML = '';

    let found = false; // Flag to track if any movie is found matching the search term

    for (let i = 0; i < movies.length; i++) {
        // Check if the movie title contains the search term
        if (movies[i].title.toLowerCase().includes(searchTerm)) {
            let div = document.createElement("div");
            div.className = "image_1";
            div.setAttribute("id", i);

            div.addEventListener("click", () => {
                window.location.href = "films.html";
                localStorage.setItem("movie", JSON.stringify(movies[i]));
            });

            let html = `<img src="${movies[i].image}" alt="movie image" class="image">
                        <h4>${movies[i].rating}</h4>
                        <h4>${movies[i].title}</h4>
                        <button id="watch">watch</button>
                        <button id="trailer">trailer</button>`;

            div.innerHTML += html;
            document.getElementsByClassName("main")[0].appendChild(div);

            found = true; // Set flag to true as at least one movie is found
        }
    }

    if (!found) {
        // If no movie is found, display "Movie not found"
        let div = document.createElement("div");
        div.className = "image_1";

        let html = `<h4>Movie not found</h4>`;
        div.innerHTML += html;
        document.getElementsByClassName("main")[0].appendChild(div);
    }
}

// Add event listener to the search bar to call showData() whenever the input changes
document.getElementById("text").addEventListener("input", showData);

window.addEventListener("DOMContentLoaded", showData);


 