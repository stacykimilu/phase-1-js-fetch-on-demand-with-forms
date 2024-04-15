const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const movieId = event.target.elements['searchByID'].value;
  
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch movie");
          }
          return response.json();
        })
        .then((data) => {
          const titleElement = document.querySelector("#movieDetails h4");
          const summaryElement = document.querySelector("#movieDetails p");
  
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch((error) => {
          console.error("An error fetching movie :", error);
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  