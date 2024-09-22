const BASE_URL="https://cdn.jsdelivr.net/gh/@fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
for (let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
            if(select.name==="from" && currCode==="USD"){
                newOption.selected="selected";
            }
            else if( select.name==="to"&&currCode==="PKR"){
                newOption.selected="selected";
            }
            select.append(newOption);
        }
    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
   img.src=newSrc;
};
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    
    let amount = document.querySelector(".Amount input");
    let amtVal = amount.value; // Convert the input value to a number
    console.log(amtVal);
    if (isNaN(amtVal) || amtVal < 1) { 
        amtVal = 1; // Set to 1 if it's invalid or less than 1
        amount.value = amtVal; // Update the input field with the new value
    }
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/@fawazahmed0/currency-api@1/latest/currencies/usd/pkr.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data); // Handle the data as needed
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
let data=await response.json();
let rate=data[toCurr.value.toLowerCase()];
let finalAmount=amount*rate;
msg.innerText=`${amtVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;
 
});
