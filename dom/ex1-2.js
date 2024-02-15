document.querySelectorAll("li").forEach((node) => {
    let name = node.firstChild.textContent.trim();
    let count = node.querySelectorAll("li").length;
    console.log(`${name} : ${count}`)
})