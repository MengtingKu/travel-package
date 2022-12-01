let data;
const list = document.querySelector('.list');
// console.log((list));
axios.get('https://data.kcg.gov.tw/dataset/86fce2a6-960f-485a-b7c3-20e30dbf0ac6/resource/32a7d6d1-a59e-44b5-9ff7-f2d1c2e63b29/download/-.json')
    .then(function (respones) {
        data = respones.data.orgs.frg.org;
        // console.log(data);
        render()
    });

function render() {
    let str = '';
    data.forEach(item => {
        let content = `<li>${item.text}</li>`;
        str += content
    });
    list.innerHTML = str
}