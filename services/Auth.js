const Auth = {
    isAuthenticated: function () {
        let retorno = false;
        let cookie = localStorage.getItem("@token");
        if(cookie){
            retorno = true;
        }
        return retorno;
    },
    clearSession: function () {
        localStorage.clear();
    },
    chargeSession: function (token, usuario){
        localStorage.setItem("@token", token);
        localStorage.setItem("usuario", usuario);
    },
    getToken: function (){
        return localStorage.getItem("@token");
    },
    getLogin: function (){
        return localStorage.getItem("usuario");
    }
}


export default Auth;