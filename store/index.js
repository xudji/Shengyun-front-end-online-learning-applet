import Vuex from 'vuex'
//wx头部
import bar from './modules/bar.js'
//用户个人信息
import user from './modules/user.js'
import Vue from 'vue'

//班级信息
import classes from './modules/classes.js'
//协议信息
import sign from './modules/sign.js'
//公告信息
import notice from './modules/notice.js'


export default new Vuex.Store({
    modules: {
        bar,
        user,
        classes,
        sign,
        notice
    }
})
