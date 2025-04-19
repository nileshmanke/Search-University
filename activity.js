
let ul=document.querySelector("ul");

let inp=document.querySelector("input");

let btn=document.querySelector("button");
let h1=document.querySelector("h1");

let loading=true;
let div=document.createElement("div");
let body=document.querySelector("body");
let img=document.createElement("img");

btn.addEventListener("click", async ()=>{
    loading=true;
  h1.innerText="Search For Given state"

    if(loading){

      

        div.innerText="Loading Your Data.........";
        img.setAttribute("src" , "loading.gif")
        div.appendChild(img);

       
        body.prepend(div);
    }
    ul.innerText="";

    let state=inp.value;

  let data=  await   getData();
  

  newdata=data.filter(item=> item["state-province"]  ==state);

  if(newdata.length ==0){
   
    h1.innerText="No University Found For Given state"
    div.remove();
  }
  else{

    for(item of newdata){

        let li= document.createElement("li");
        let li2= document.createElement("li");
        loading=false;
        div.remove();
        li.innerText=item.name;
        li2.innerText=item["state-province"];
    
        ul.appendChild(li);
        ul.appendChild(li2);
    
      }

  }




 


})



async function getData(){

try{
    let url="http://universities.hipolabs.com/search?&country=india";

let res= await axios.get(url);

let data= await res.data

return data;

}

catch(err){
    console.log(err);
}



}