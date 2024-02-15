let createCalender = (elem,year,month) => {
    elems = document.createElement(elem);
    firstday = (new Date(`${year}-${month}-01`).getDay() + 6) & 7;
    nextMonth = new Date(`${year}-${month + 1}-01`);
    date = lastday = new Date(nextMonth.setDate(nextMonth.getDate() -1)).getDate();

    let html = `<table>
                    <tr>
                        <th scope = "col">MO</th>
                        <th scope = "col">TU</th>
                        <th scope = "col">WE</th>
                        <th scope = "col">TH</th>
                        <th scope = "col">FR</th>
                        <th scope = "col">SA</th>
                        <th scope = "col">SU</th>
                    </tr>`;

    let firstCol = - firstday;
    for(let i = 0; i < Math.ceil((date + firstday)/7); i++){
        let col = "<tr>"
        for(let j = 0; j < 7; j++){
            if(firstCol > 0 && firstCol <= date){   
                col += `<td>${firstCol}</td>`;
            } else{
                col += "<td></td>";
            }
            firstCol++;
        }
        col += "</tr>";
        html +=  col;
    }               
    elems.innerHTML = html;
    document.body.append(elems);
}

createCalender("cal",2012,9);