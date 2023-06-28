// function getAndUpdate(){
    //     console.log("Updating List...");
    //     tit = document.getElementById('title').value;
    //     desc = document.getElementById('description').value;
    //     if (localStorage.getItem('itemsJson')==null){
        //         itemJsonArray = [];
        //         itemJsonArray.push([gotmark]);
        //         localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        //     }
        //     else{
            //         itemJsonArrayStr = localStorage.getItem('itemsJson')
            //         itemJsonArray = JSON.parse(itemJsonArrayStr);
            //         itemJsonArray.push([gotmark]);
            //         localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            //     }
            //     update();
// }
// add = document.getElementById("add");
//             add.addEventListener("click", getAndUpdate);

function getAndUpdate() {
    
    console.log("upadate local storage")
    marks = document.getElementById('marksin').value;
    document.getElementById('score').innerText=marks;
    total = document.getElementById('totalmark').value;
    document.getElementById('total').innerText= "out of"+total;
    react = document.getElementById('react').value;
    document.getElementById('react-temp').innerText= react+"/"+total;
    memory = document.getElementById('memory').value;
    document.getElementById('memory-temp').innerText= memory+"/"+total;
    verbal = document.getElementById('verbal').value;
    document.getElementById('verbal-temp').innerText= verbal+"/"+total;
    visual = document.getElementById('visual').value;
    document.getElementById('visual-temp').innerText= visual+"/"+total;
    if (marks>80){
        document.getElementById('compi').innerText="Wonders!!"
    }
    else if(marks>60){
        document.getElementById('compi').innerText='Great!'
    }
    else{
        document.getElementById('compi').innerText='Nice..'
    }
}




function update(){

}
add = document.getElementById("add");
            add.addEventListener("click", getAndUpdate);
