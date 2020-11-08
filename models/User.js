const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        // trim 은 공백 없애줌 ex) songsu gss1919@naver.com 이면 songsu과 gss1919 사이 공백 지워짐
        // unique 는 중복 못하게하는것
        type: String,
        trim: true,
        unique: 1 
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // role는 관리자 ,사용자 구분하기위해 1이면 관리자 0이면 사용자 이런식
    role: { 
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    // 토큰유효기간
    tokenExp: {
        type: Numeber
    }
})

// 마지막으로 위 스키마를 모델로 감싸줌
const User = mongoose.model('User', userSchema)
//  이모델을 다른곳에서 쓸수있께 해주는것
module.exports = { User }