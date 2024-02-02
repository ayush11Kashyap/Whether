const submitBtn=document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementsByClassName('city_name');
const temp=document.getElementById('temp');

const temp_status=document.getElementById('temp_status');


const getInfo=(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
   
    if(cityVal === ""){
        city_name.innerText=`Plz write the name of the city`;


    }else{
        try{
            let apikey="b93648679846ae9949b1c56b29560d44"
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apikey}&units=metric`;
            fetch(url)
                .then((res)=>res.json())
                .then((data)=>{
                    const  arrData=[data];
                    temp.innerText=arrData[0].main.temp;
                    temp_status.innerText=arrData[0].weather[0].main;
                   temp_status.span  
                })
            

           
            
        }catch{
            city_name.innerText = `Plz enter the city name properly`;
        }
    }
    console.log(temp.innerText);



}

// submitBtn.addEventListener('click',getInfo); 
