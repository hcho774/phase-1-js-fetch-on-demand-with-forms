const init = () => {
    //grab form from DOM
    const inputForm = document.querySelector("form");
    //console.log(form); to check if we grab the form tag and what is inside
    // we add event listener to 
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = e.target.children[1].value;
    fetch(`http://localhost:3000/movies/${value}`)
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p")

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
