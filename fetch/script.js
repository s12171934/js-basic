let url = 'http://localhost:8080/board/create';

fetch(url,{
    method : 'post',
    headers : {
        'Content-Type' : 'application/json;charset=utf-8'
    },
    body : JSON.stringify({
        title : 'json'
    }) 
});