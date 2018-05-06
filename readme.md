This is two pages demo website with a list of films from the [Star Wars API](https://swapi.co).

demo: [https://star-wars-demo.firebaseapp.com](https://star-wars-demo.firebaseapp.com)

---

## page overview
This website have two pages, index page and details page.

### index page
Display the films list in a table with title, director, release date columns.

[index page](https://star-wars-demo.firebaseapp.com)

### details page
Display the episode details: title, director, release date, and, list of characters and planets.
List of characters and planets are rendered after first render. Those Lists are not included in specific Film details(`https://swapi.co/api/films/:id/`). 

[details page(A New Hope)](https://star-wars-demo.firebaseapp.com/1)

---

## task overview
It took around six hours to produce this website at this moment(74924da).
In The Star Wars API, url to get specific Film details and episode id are different. That made me confused.

---

## frameworks
* react
* redux
* react-router
* axios
* node-sass
