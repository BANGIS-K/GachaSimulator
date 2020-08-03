document.querySelector("#btn-drop").addEventListener("click",()=>{
    fetch("https://prd.api.neecbox.net/v1/gacha/drop")
    .then((res)=>{
        return(res.json());
    })
    .then((json)=>{
        if(json["status"]){
            const image = document.querySelector("#image");
            const name = document.querySelector("#name");
            image.innerHTML=`<img src="${json['result']['img']}"width="240">`;
            name.innerHTML=`<strong>${json['result']['name']}</strong>`;
        }
        else{
            alert("APIでエラーが発生しました。");
        }
    })
    .catch((error)=>{
        alert("通信中にエラーが発生しました。");
    });
});