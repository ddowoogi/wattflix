var rec_movies = [
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""}
]

var on_movie = [
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""},
    {"name" : "" , "director" : "", "actor" : "", "comment": "", "imgsrc" : ""}
]


function login_dropdown(){
    var login_form = document.getElementById("login-div");
    if (login_form.style.display == 'none'){
        login_form.style.display='block';
    }else{
        login_form.style.display='none';
    }
}
