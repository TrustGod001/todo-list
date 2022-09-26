let ar=[]
let descriptions;
let getTodo;



function push(){
descriptions = input.value
if (descriptions) {
    ar.push({description:descriptions,done:false})
    
}
else{
    alert('text can not be empty')
}


disp()


}



function disp(){
    display.innerHTML=''
    display.innerHTML+=`<table border="5px" width="60%" id="display" style="align-items: center;">
    <tr id="line">
        <td>S/N</td>
        <td>DESCRIPTION</td>
        <td>STATUS</td>
        <td>ACTION</td>
        <td>ACTION</td>
    </tr>
</table> `
for (let index = 0; index < ar.length; index++) {
    display.innerHTML+=`<tr ${ar[index].done? 'style="background-color: white;"' : 'style="background-color: red;"'}>
    <td>${index + 1}</td>
    <td>${ar[index].description}</td>
    <td>${ar[index].done? `<i id="font" class="fa fa-check-square" style="color:green">`:`<i id="font" class="fa fa-times" style="color:white"></i>`}</td>
    <td><button id="but" onclick="done(${index})">${ar[index].done? 'UNDO':'DONE'}</button></td>
    <td><button onclick="del(${index})">DELETE</button>
</tr>`
    
}
localStorage.setItem('todo',JSON.stringify(ar))
input.value=''
}


function done(index){

    
        
 ar[index].done? ar[index].done=false: ar[index].done=true 
 
 
 disp()
 
       
    
    
        
        
     }
     getTodo=localStorage.getItem('todo')

     function lstore(){
        if(getTodo){
            ar=JSON.parse(getTodo)
            
        }
        
         disp()
        
       
    }
function del(del){
    ar.splice(del,1)
    disp()
}
