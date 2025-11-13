
const gallery = document.getElementById("gallery");
const hotButton = document.getElementById("hot");
const icedButton = document.getElementById("iced");



const fetchData = async (url) => {

    try {

        gallery.innerHTML = "";

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();

        data.forEach(item => {

            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = item.image;

            const title = document.createElement("h3");
            title.className = "title";
            title.textContent = item.title;

            const description = document.createElement("p");
            description.className = "description";
            description.textContent = item.description;

            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(description);
            gallery.appendChild(card);
        });
        

    } catch (err) {

        console.error(err);

    }

}


hotButton.addEventListener("click", () => {
    fetchData("https://api.sampleapis.com/coffee/hot");
});

icedButton.addEventListener("click", () => {
    fetchData("https://api.sampleapis.com/coffee/iced");
});

fetchData("https://api.sampleapis.com/coffee/hot");