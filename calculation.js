 let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

 let dropdown=document.getElementsByClassName("dropdown");
 let button= document.getElementById("button");
 let from=document.getElementById("from");
 let to=document.getElementById("to");
 let amount=document.getElementById("input_box");
 let result=document.getElementById("result");
 
for(i=0;i<2;i++){
for(let code in countryList){
 let newOpt=document.createElement("option");
 newOpt.value=code;
 newOpt.innerText=code;
 dropdown[i].append(newOpt);
 if(i==0 && code=="USD"){
    newOpt.selected="selected";
 }
 else if(i==1 && code=="INR"){
    newOpt.selected="selected";
 }
}
dropdown[i].addEventListener("change",(evt) =>{
    updateFlag(evt.target);
    });
}
   const updateFlag=(element) =>{
      let countryCode= countryList[element.value];
     let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
     let img=element.parentElement.parentElement.querySelector("img");
     img.src=newSrc;
     };
    
    const get_final_result =async ()=>{
        let newURL=`${url}/${from.value.toLowerCase()}.json`;
        let intermediate_data = await fetch(newURL);
        let final_data = await intermediate_data.json();
        let exchange_rate=final_data[from.value.toLowerCase()][to.value.toLowerCase()];
        console.log(amount.value);
        console.log(exchange_rate);
      let input_val=amount.value;
      let output_val=(input_val * exchange_rate);
       result.innerText=output_val;
    };
 

    let arr=[];
for(code in countryList){
    arr.push(code);
}
for(let i=0;i<arr.length;i++){
    finalRATES[arr[i]]=0;
}
const main_rate=()=>{
    let fetchRes = fetch(
   `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value.toLowerCase()}.json`);
   fetchRes.then(res =>
       res.json()).then(d => {
         let x=d[from.value.toLowerCase()][to.value.toLowerCase()];
         frate.RATE=x;
       });
   }

const get_rate =(i)=>{
     let fetchRes = fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${i.toLowerCase()}.json`);
    fetchRes.then(res =>
        res.json()).then(d => {
           let x=d[i.toLowerCase()][from.value.toLowerCase()];          
           let y=d[i.toLowerCase()][to.value.toLowerCase()];
            let z=y/x;
           
           finalRATES[i]=z;
        });
    }
   
    for(let i=0;i<arr.length; i+=1){
        get_rate(arr[i]);
    }
    const f=()=>{
      setTimeout(()=>{ 
         for(let i=0;i<arr.length; i+=1){
       finalRATES[arr[i]]=(rates[arr[i]]-frate.RATE);
      }},3000);
     }
    
     button.addEventListener("click",(evt)=>{
        
     evt.preventDefault();
       get_final_result();
       main_rate();
       f();
    });
    setTimeout(()=>{
    for(let i=0;i<arr.length; i+=1){
      console.log(finalRATES[arr[i]]);
    }},7000);
   

 

    

   