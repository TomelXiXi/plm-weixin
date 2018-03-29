import Vue from 'vue'
import Vuex from 'vuex'
import {setCookie, getCookie, removeCookie} from '../config/cookie'

Vue.use(Vuex)

const state = {
    alertText:null, // 警告框文字
    showAlert:false, // 控制警告框显示隐藏
    showLoading:false, // 加载动画
    showLoadingText:null, // 加载动画文字
    scContent:null, // 成功提示框文字
    showSuccess:false, // 成功提示框显示隐藏
    modal:null, // 模态框
}

export default new Vuex.Store({
    state,
    mutations:{
        // 警告框
        tips(state,text) {
            state.alertText=text;
            state.showAlert=true;
        },

        // 加载动画
        showLoading(state,text) {
            state.showLoadingText= text;
            state.showLoading=true;
        },

        // 隐藏加载动画
        hideLoading(state)  {
            state.showLoadingText= '';
            state.showLoading=false;
        },

        //显示成功提示
        showToast(state,text) {
            state.scContent=text;
            state.showSuccess=true;
        },

        // 模态框
        showModal(state,info) {
            state.modal=info;
        }

    }
})
