import '@/services/Api'

export default{
    register(credentials){
        return Api().post('register' , credentials)
    }
}

register.post