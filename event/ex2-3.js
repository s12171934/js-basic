document.body.addEventListener('click',(event) => {
    if(event.target.tagName == "LI"){
        if(event.target.className == "selected"){
            event.target.className = " ";
        }else{
            event.target.className = "selected";
        }
}});