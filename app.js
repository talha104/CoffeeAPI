const fetchData = async () => {

    try {

        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();

        const gallery = document.getElementById("gallery");

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

fetchData();