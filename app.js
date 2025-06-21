
function search(){
let searchCountry=document.getElementById("SearchCountry").value;

console.log(searchCountry);

fetch( "https://restcountries.com/v3.1/name/"+searchCountry).then(res=>res.json()).then(data=>{
  let root=document.getElementById("root");
  
    data.forEach(element => {
        root.innerHTML+=`
             <h1>element.name.official</h1>
            <h2>element.capital[0]</h2>
            <img src="element.flag.png">
        `
        
           
        

        console.log(element.name.official);
        console.log(element.flag.png);
         console.log(element.capital[0]);
    });


  
    
})

}
/*
  localStorage.setItem("name","Lakshan");
  let custName=localStorage.getItem("name");
  console.log(custName);*/
  //----------------------------
  localStorage.setItem