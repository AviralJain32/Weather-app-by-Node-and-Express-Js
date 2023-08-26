const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const middle_layer=document.getElementById('middle_layer');
console.log(middle_layer.classList);
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="Please Write The City Before Search";
        middle_layer.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=10&appid=0587d53743d6c7b3a0b95e9efed45e9c` ;
            const response = await fetch(url);
            const data= await response.json();            
            const lat = await data[0].lat;
            const lon = await data[0].lon;
            let url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0587d53743d6c7b3a0b95e9efed45e9c`;
            const responseAgain= await fetch(url1);
            const dataAgain=await responseAgain.json();
            const arrdata=[dataAgain];
            console.log(arrdata);
            temp.innerText=((arrdata[0].main.temp)-273.15);
            temp_status.innerText=arrdata[0].weather[0].main;
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            middle_layer.classList.remove('data_hide');
        }
        catch{
            city_name.innerText="please Enter The Valid City Name";
            middle_layer.classList.add('data_hide');
        }
        

    }
}
submitBtn.addEventListener('click',getInfo);
