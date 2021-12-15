const inpSearch = document.getElementById('search');
const list = document.querySelector(".list");
const items = Array.from(list.children);

function search(){
    const result = items.filter(item => {
        return item.textContent.toLowerCase().includes(inpSearch.value.toLowerCase())
    })
    list.innerHTML = "";
    result.map(elem =>{
        const li = document.createElement('li');
        const textLi = document.createTextNode(elem.textContent);

        li.appendChild(textLi);
        list.appendChild(li);
    })
    
}



function search2(){
    var i;
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var ul = document.querySelector(".list");
    var li = ul.getElementsByTagName('li');

    for(i = 0; i < li.length; i++){
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }



    }

}
inpSearch.addEventListener('input', search2)




function searchClick() {
    var x = document.getElementById("listsearch");
        if(inpSearch.value != ""){
            x.className += " searchon";
        
        }
        else{
            x.className = "list"
        }

       
}
inpSearch.addEventListener('input', searchClick)

function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
    if(x.className== "topnav"){
        x.className += " responsive";
    
    }
    else {
        x.className = "topnav";
    }
}

