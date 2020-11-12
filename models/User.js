const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
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
        type: Number
    }
})

userSchema.pre('save', function( next ){
    var user = this;

    if(user.isModified('password')) {

    //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})
 
userSchema.methods.comparePassword = 

// 마지막으로 위 스키마를 모델로 감싸줌
const User = mongoose.model('User', userSchema)
//  이모델을 다른곳에서 쓸수있께 해주는것
module.exports = { User }