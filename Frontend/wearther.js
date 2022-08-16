let btn=document.getElementById("btn")
let res=document.getElementById("res")
let respn=document.getElementById("response")
let temp=document.getElementById("temp")
let arr=new Array()
btn.addEventListener('click',()=>{
let txt=document.getElementById("input")
const abc=document.createElement("tr");
const para = document.createElement("td");
if(txt.value!=='')
arr.push(txt.value)
para.innerText =txt.value;
abc.appendChild(para)
res.appendChild(abc);
txt.value=''
})

let sub=document.getElementById("sub")
sub.addEventListener('click',async()=>{
   
    const response = await fetch("http://localhost:8000/apiweather", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({city:arr})
        });
  const ans=await response.json()    
  if(response.status===400){
    console.log("proo")
  alert('City Name is Incorrect')
  }
  else{
  ans.ans.forEach(element=>{
    const abc=document.createElement("tr");
const para = document.createElement("td");
para.innerText =element;
abc.appendChild(para)
respn.appendChild(abc);
  })
console.log(typeof(ans.ans))
  }
})