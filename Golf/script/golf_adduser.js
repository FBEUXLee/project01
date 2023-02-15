// window.alert("로그인이 필요합니다.")
// function check(form){
//     if(form.userid.value=="giicha2" && form.userpassword.value=="1234"){
//         window.open('golf_reservation_info.html')
//     }
//     else{
//         alert("Error ID or Password");
//     }
// }

//카카오로 로그인
window.Kakao.init("aac9cb0d232cdfca27ec383f3e64fedc");

function kakaoLogin(){
    window.Kakao.Auth.authorize({
        scope:'profile_nickname, account_email',
        success:function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : res => {
                    const kakao_account = res.kakao_account
                    console.log(kakao_account);
                }
        });
        }
    });
}
