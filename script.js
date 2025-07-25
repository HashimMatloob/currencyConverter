let url="https://v6.exchangerate-api.com/v6/551f3a6f6a1e1ed3f0adfea2/pair/FROM/TO/AMOUNT";
let dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".btn");
let From=document.getElementById("From");
let TO=document.getElementById("TO");
let exchange=document.querySelector(".exchange-rate");
for(let select of dropdown){
    for(let code in currencyCodes){

        let newOption=document.createElement("option");
newOption.innerText=code;
        newOption.value=code;
        
        if(select.name ==="From" && code==="USD"){
newOption.selected="selected";
        }
        else if(select.name ==="TO" && code==="PKR"){
newOption.selected="selected";
        }
select.appendChild(newOption);
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
}
let currcode;
const updateFlag=(element)=>{
     currcode=element.value;

    let countryCode=currencyCodes[currcode];

    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
let img= element.parentElement.querySelector('img');
img.src=newSrc;
}
btn.addEventListener("click",async(evt)=>{
evt.preventDefault();
let amount=document.querySelector(".amount input");
let amountval=amount.value;
if(amountval==="" || amountval<1){
    amount.value='1';
    amountval=1;
}
let fromVal=From.value;
let toVal=TO.value;
console.log(From.value,TO.value);
const URL=`https://v6.exchangerate-api.com/v6/551f3a6f6a1e1ed3f0adfea2/pair/${fromVal}/${toVal}/${amountval}`;
let response= await fetch(URL);
let data=await response.json();
console.log(toVal.currcode);
exchange.innerText=`${amountval} ${(fromVal)} = ${data.conversion_result} ${toVal}`;
});