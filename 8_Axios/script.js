// Axios
console.log(axios);

// primeiro request
const getData = async() => {
    try {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",{
            // definindo headers
            Headers:{
                "Content-type": "aplicattion/json",
                custom: "header",
            },
        });
        
        console.log(response)  

        return response.data;
    } catch (error) {
        console.log(error)
    }
}
getData()

// imprimindo dados na tela
const container = document.querySelector("#user-container");
const printData = async() => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailELement = document.createElement("p")
        emailELement.textContent = user.email
        div.appendChild(emailELement);

        container.appendChild(div);
    });

};

printData();