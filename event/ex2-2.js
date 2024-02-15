document.querySelectorAll("li").forEach((elem) => {
    let titleNode = elem.firstChild;
    let span = document.createElement('span');
    span.innerHTML = String(titleNode.textContent);
    titleNode.replaceWith(span);
})

document.body.addEventListener('click',(event) => {
    if(event.target.tagName == "SPAN"){
        let nextElem = event.target.nextElementSibling;
        nextElem.hidden = !nextElem.hidden;
}});