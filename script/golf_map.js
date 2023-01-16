var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.249557926196346, 126.40598717973066),
    level: 4
};

var map = new kakao.maps.Map(container, options);

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(33.249557926196346, 126.40598717973066);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);