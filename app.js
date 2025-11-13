const fetchData = async () => {

    try {

        const response = await fetch("https://api.sampleapis.com/coffee/hot")
        const data = await response.json()
        console.log(data)

    } catch (err) {

        console.error(err)

    }

}

fetchData()