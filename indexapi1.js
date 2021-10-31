

document.body.innerHTML = `<section><div class = "heading">ISRO SATELLITES</div>
<div class="container"></div>
</section>`


async function getAllData(){
    const data = await fetch(
        "https://isro.vercel.app/api/customer_satellites",
        {method: "GET"}
    );
    // console.log(data);
    
    const satellites = await data.json();
    
    const isroContainer = document.querySelector(".container");

    satellites.customer_satellites.forEach((satellite)=>{
        isroContainer.innerHTML += `<div class= "grid-container">
        <div class = "isro-container">
        <div class = "details">
        <p class = "sat">Satellite</p>
        <hr>
        <p class = "id">Id:  ${satellite.id}</p>
        <p class = "date">Country:  ${satellite.country}</p>
        <p class = "date">Launch Date:  ${satellite.launch_date}</p>
        <p class = "type">Mass:  ${satellite.mass}</p>
        <p class = "type">Launcher:  ${satellite.launcher}</p>
        </div>
        </div> 
        </div>  
        `;
    });
}
getAllData();
