import Vue from 'vue'
import Vuex from 'vuex'
import logger from './logger'

Vue.use(Vuex)

const NEXT_ITEMNUM = 'NEXT_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
/*const REMBER_NAME = 'REMBER_NAME'*/
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default new Vuex.Store({
  plugins: [logger],
  state: {
    level: '第一周',
    itemNumber: 1,
    itemName: '请在下列四个选项中选出一个正确选项',
    itemDetail: [
      {
        itemID: 1,
        answer: ['mvvm为后端框架', 'npm是一个包管理器', '行内元素包含块级元素', 'vuex不适用于大型网站'],
        correctAnswer: 'npm是一个包管理器'
      }, {
        itemID: 2,
        answer: ['3*8=24', '5+7=11', 'lg10=10', 'tan90°=1'],
        correctAnswer: '3*8=24'
      }, {
        itemID: 3,
        answer: ['宁波属于江苏省', '天津属于河北省', '湖州属于浙江省', '襄阳属于福建省'],
        correctAnswer: '湖州属于浙江省'
      }, {
        itemID: 4,
        answer: ['three.js作者：尤雨溪', 'react.js作者：尤雨溪', 'egg.js作者：尤雨溪', 'Vue.js作者：尤雨溪'],
        correctAnswer: 'Vue.js作者：尤雨溪'
      }, {
        itemID: 5,
        answer: ['黑盒测试也称为结构测试', '二叉树为非线性结构', 'JavaScript是静态语言', '===是严格相等运算符'],
        correctAnswer: '二叉树为非线性结构'
      }
    ],
    answer: []
  },
  mutations: {
    [NEXT_ITEMNUM]: function(state, payload) {
      state.itemNumber+=1;
    },
    [REMBER_ANSWER]: function(state, answer) {
      state.answer.push(answer);
    },
    /*[REMBER_NAME]: function(state, itemName) {
      state.itemName.push(itemID);
    },*/
    [INITIALIZE_DATA]: function(state, payload) {
      state.itemNumber = 1;
      state.answer = [];
    }
  },
  actions: {
    nextItem: function({ commit, state }, answer) {
      commit(REMBER_ANSWER, answer);
      if(state.itemNumber < state.itemDetail.length) {
        commit(NEXT_ITEMNUM, 1);
      }
    },
    initializeData: function({ commit }) {
      commit(INITIALIZE_DATA);
    }
  }
})
