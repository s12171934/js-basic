let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
};

let container = document.getElementById('container');

let createTree = (container,data) => {
    for(list in data){
        let ul = document.createElement("ul");
        ul.id = list;
        container.append(ul);
    
        let li = document.createElement("li");
        li.textContent = list

        let newContainer = document.getElementById(list);
        let newData = data[list];

        newContainer.append(li);
        createTree(newContainer,newData);  
    }
}

createTree(container,data);