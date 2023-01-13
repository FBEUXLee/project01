fetch('https://dapi.kakao.com/v2/local/search/address.json')
    .then((response) => response.json())
    .then((data) => console.log(data));