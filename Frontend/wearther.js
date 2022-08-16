let btn=document.getElementById("btn")
let res=document.getElementById("res")
let respn=document.getElementById("response")
let temp=document.getElementById("temp")
let arr=new Array()
btn.addEventListener('click',()=>{
let txt=document.getElementById("input")
const para = document.createElement("li");
if(txt.value!==''){
arr.push(txt.value)
para.innerText =txt.value;
res.appendChild(para);
}
txt.value=''
})

let sub=document.getElementById("sub")
sub.addEventListener('click',async()=>{
  while(respn.lastElementChild.tagName!="H2")
  {
    respn.removeChild(respn.lastElementChild);
  }

    const response = await fetch("http://localhost:8000/apiweather", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({city:arr})
        });
  const ans=await response.json()    
  if(response.status===400){
  alert('City Name is Incorrect')
  }
  else{
  ans.ans.forEach(element=>{
const para = document.createElement("li");
para.innerText =element;
respn.appendChild(para);
  })
  }
})