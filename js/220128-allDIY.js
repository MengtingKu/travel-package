let data = [
    // {
    //     "id": 0,
    //     "name": "肥宅心碎賞櫻3日",
    //     "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    //     "area": "高雄",
    //     "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    //     "group": 87,
    //     "price": 1400,
    //     "rate": 10
    // },
    // {
    //     "id": 1,
    //     "name": "貓空纜車雙程票",
    //     "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    //     "area": "台北",
    //     "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，玻璃為地板的「貓纜之眼」水晶車廂，玻璃為地板的「貓纜之眼」水晶車廂，玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    //     "group": 99,
    //     "price": 240,
    //     "rate": 2
    // },
    // {
    //     "id": 2,
    //     "name": "台中谷關溫泉會1日",
    //     "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    //     "area": "台中",
    //     "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    //     "group": 20,
    //     "price": 1765,
    //     "rate": 7
    // }
];

/* LV1 JSON API */ 
// axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
// .then(function(response){
//    data=response.data;
//    render(data)
// });


/* LV2 JSON API */ 
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
.then(function(response){
    data=response.data.data;
    render(data);
})


/* forEach+innerHTML運用使用到的宣告 */
const ticketList = document.querySelector('.ticketCard-area');
/* 監聽事件可以用到的宣告 */
const searchNum = document.querySelector('#searchResult-text');
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');

/* LV1： forEach+innerHTML運用 */
function render(data) {
    
    if(data.length!==0)
    {
        let str = '';
        data.forEach(item => {
            let content = `<li class="card mb-3 ticketCard active1">
            <div class="ticketCard-img">
                <a href="#" class="">
                    <img src="${item.imgUrl}"
                        class="card-img-top" alt="picture">
                </a>
                <p class="ticketCard-region">${item.area}</p>
                <p class="ticketCard-rank">${item.rate}</p>
            </div>
        
            <div class="card-body">
                <h2><a href="#" class="card-title pt-3 mb-3 ticketCard-name">${item.name}</a></h2>
                <p class="card-text ticketCard-description">
                    ${item.description}
                </p>
            </div>
            <div
                class="card-footer mb-2 text-center bg-white border-0 mt-5 d-flex justify-content-between align-item-center ticketCard-info">
                <p class="pt-3 ticketCard-num">
                    <i class="fa-solid fa-circle-exclamation"></i> 剩下最後
                    <span id="ticketCard-num">${item.group}</span> 組
                </p>
                <p class="d-flex align-item-center ticketCard-price"><span class="pt-3 me-1">TWD</span><span
                        id="ticketCard-price">$${item.price}</span>
                </p>
            </div>
        </li>`;
            str += content;
            ticketList.innerHTML = str;
            searchNum.textContent = `本次搜尋共 ${data.length}筆資料`;
        });
    }
    else{
        ticketList.innerHTML = "";
        searchNum.textContent = `本次搜尋共 0 筆資料`;
    }
    
}
render(data);


/* LV3-1： 監聽事件(新增項目) */
const el = document.querySelector('.addTicket-btn');
el.addEventListener('click', addCardList)
function addCardList() {
    /* 番外篇：驗證機制 
    參考資料： https://codepen.io/gretema/pen/QXoOpr?editors=1010
    */
    if(ticketName.value==''||ticketImgUrl.value==''||Number(ticketNum.value)==''||Number(ticketPrice.value)==''||Number(ticketRate.value)==''){
        alert('ooxx...填好所有內容才能送件喔!!')
    }else{

    let addNewList = {
        id: Number(Date.now()),
        name: ticketName.value,
        imgUrl: ticketImgUrl.value,
        area: ticketRegion.value,
        description: ticketDescription.value,
        group: Number(ticketNum.value),
        price: Number(ticketPrice.value),
        rate: Number(ticketRate.value),
    };
    data.push(addNewList);
    render(data);
    console.log(data);
    document.querySelector('.addTicket-form').reset()
}
}
//檢查是否有沒填到的欄位
function checkContent(e){
    var str =  e.target.value;  //取得事件標的的值
    //如果標的是空白內容,就跳出警告視窗
    if(ticketName.value==''||ticketImgUrl.value==''||Number(ticketNum.value)==''||Number(ticketPrice.value)==''||Number(ticketRate.value)==''){
        alert('此欄位不可為空')
    }
}





/* LV3-2： 監聽事件(篩選) */
const search = document.querySelector('.regionSearch');
search.addEventListener('change', function () {
    let area = search.value;
    if (area === '') {
        document.querySelector('.cantFind-area').style.display = "none";
        render(data);
    } else if (area === search.value) {
        let searchArea = [];
        data.forEach(element => {
            if (element.area === area) {
                searchArea.push(element);                
            }
        }); 
        if(searchArea.length === 0)
        {
            // searchArea = undefined;
            document.querySelector('.cantFind-area').style.display = "block";
            render(searchArea);
        }
        else  
        {
            document.querySelector('.cantFind-area').style.display = "none";
            render(searchArea);
        }
    }   
    
})



// if (area !== undefined) {
    //     document.querySelector('.cantFind-area').classList.toggle('active');
    //     document.querySelector('.ticketCard').classList.toggle('active1');
    //     // let nodata = [];
    //     // data.forEach(element => {
    //     //     if (element.area === undefined) {
    //     //         nodata.push(element);
    //     //     }
    //     // }); 
    //     // console.log(nodata);
    //     // render(nodata)

    //     // document.querySelector('.cantFind-area').classList.toggle('active');
    // }

    // document.querySelector('.ticketCard').style.display='none';