let nations = {
    "korea" : {
        name : "한국",
        capital : "서울",
        population : "5000만",
        language : "한국어",
        flag : "data:image/png;base64,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"
    },
    "japan" : {
        name : "일본",
        capital : "도쿄",
        population : "1억",
        language : "일본어",
        flag : "https://i.namu.wiki/i/uPDCkQv1zGpaEdmeqmEDRIM3nMyRD2BslQUouPpxpI5M-PkGdmxPwxFJvu9RCUUVYg2XOH4rfedfkxhnDqfumw.svg"
    },
    "usa" : {
        name : "미국",
        capital : "워싱턴D.C",
        population : "3억3200만",
        language : "영어",
        flag : "https://i.namu.wiki/i/Dj_I51HG6tAfOvWyq7GV0RsxqKuRIB59GKetL-FebRS0ydGqU6K_XSoszMrVnY4L54PxXdkzF36O7gKjU7FSNA.svg"
    },
    "uk" : {
        name : "영국",
        capital : "런던",
        population : "6733만",
        language : "영어",
        flag : "https://i.namu.wiki/i/WNw8JiSr4x94S6McVTaDj70J_VmBtOPAV6NzP5FBOyRXD7E7nalYplrZeyGtsKq8KyAezsTqtS3Uec3jchRRUw.svg"
    },
    "germany" : {
        name : "독일",
        capital : "베를린",
        population : "8320만",
        language : "독일어",
        flag : "https://i.namu.wiki/i/KiykE29mubKM3qGGIT5i3xubJFilCDaC-6R0j4WUCbTVYIeHYqw8zAhidpwGhlBI7T2zHpdS4tjqSgvrcITPEw.svg"
    },
}

let keys = Object.keys(nations).map((key) => {return {"englishName" : key, "name" : nations[key].name, "show" : false}});

let mkDiv = (elem) => {
    let div = document.createElement('div');
    div.className = "nation";
    let key;
    for(key of keys){
        if(key.show) continue;
        key.show = true;
        key = key.englishName;
        break;
    }
    let data = nations[key];
    let html = `<img src="${data.flag}" alt="">
    <div class="content">
        <button class="remove-button">[x]</button>
        <h2>${data.name}</h2>
        <ul>
            <li>수도 : ${data.capital}</li>
            <li>인구 : ${data.population}</li>
            <li>언어 : ${data.language}</li>
        </ul>
    </div>`;
    div.innerHTML = html;
    elem.before(div);
};

mkDiv(document.querySelector(".more"));
mkDiv(document.querySelector(".more"));

document.querySelector(".container").addEventListener('click',(event) => {
    if(event.target.className == "remove-button"){
        event.target.parentElement.parentElement.remove();
        keys.find((x) => x.name == event.target.nextElementSibling.textContent).show = false;
    }
    if(event.target.className == "more"){
        mkDiv(event.target);
    }
});
