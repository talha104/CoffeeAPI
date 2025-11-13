const fetchData = async () => {

    try {

        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();

        const gallery = document.getElementById("gallery");

        const img = document.createElement("img");
        img.src = data[0].image;

        gallery.appendChild(img);
        

    } catch (err) {

        console.error(err);

    }

}

fetchData();