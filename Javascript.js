var UserId = [
    {
        username: "rew",
        password: "codify"
    } ,{
        username: "asss",
        password: "asss"
    }
]

function CheckUsername() {
    var username = document.getElementById("Username").nodevalue
    var password = document.getElementById("Password").nodevalue
    for (i = 0; i < UserId.length; i++ ){
        if(UserId[i].username == username && password == UserId[i].password){
            console.log(username + "login!!")
            return 
        } else {
            console.log("failedkkk")
            return
        }
    }
}