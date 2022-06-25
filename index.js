var rec_movies = [
    {"name" : "그린북" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "가버나움" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""}
]

var on_movie = [
    {"name" : "마녀" , "director" : "박훈정", "actor" : "신시아 박은빈", "comment": "통제 불가능한 존재가 세상 밖으로 나왔다!", "imgsrc" : "https://movie-phinf.pstatic.net/20220615_63/1655270906406BGdFF_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "범죄도시2" , "director" : "이상용", "actor" : "마동석 손석구", "comment": '“느낌 오지? 이 놈 잡아야 하는 거”', "imgsrc" : "https://movie-phinf.pstatic.net/20220516_144/1652665409592Chvey_JPEG/movie_image.jpg?type=m77_110_2"},
    {"name" : "브로커" , "director" : "고레에다 히로카즈", "actor" : "송강호 강동원", "comment": '"소영아, 너도 태어나줘서 고마워"', "imgsrc" : "https://movie-phinf.pstatic.net/20220511_189/1652251073330PXNoG_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "쥬라기 월드:도미니언" , "director" : "콜린 트레보로우", "actor" : "크리스 프랫", "comment": "지상 최대 블록버스터의 압도적 피날레!", "imgsrc" : "https://movie-phinf.pstatic.net/20220516_144/1652687286550mcE4G_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "탑건:매버릭" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "씽2게더" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "그대가 조국" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "실종" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""}
]


function login_dropdown(){
    var login_form = document.getElementById("login-div");
    if (login_form.style.display == 'none'){
        login_form.style.display='flex';
    }else{
        login_form.style.display='none';
    }
}
