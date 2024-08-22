function handleContact(event){
    event.preventDefault();
    console.log("contact");
    const email = event.target.email.value;
    console.log(email);

}
const imageArray = [
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
    {
        url :"./images/pizza-png-12 1 (2).png"
        
    },
   

];




function handleShow(){
    const cardContainer = document.getElementById("cards");
    console.log("click");

    for(const item of imageArray){
        const createDiv = document.createElement("div");
        createDiv.innerHTML =`<img src="${item.url}">`;
        console.log(createDiv);
        cardContainer.appendChild(createDiv);
        createDiv.classList.add(" popular-collection ss-c");

    }

}
