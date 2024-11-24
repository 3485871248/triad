const text = document.querySelector('#hitokoto');

fetch('https://v1.hitokoto.cn/?c=i&max_length=15')
.then(response => response.json())
.then(data => {
    text.innerHTML = "-- " + data.hitokoto + " --";
})
.catch(error => {
    console.error(error);
    text.innerHTML = "666主播一言也获取不上"
});
