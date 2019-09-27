<template>
  <div>
    <section>

      <div class="top-tip">
        <span v-if="itemType === 'home'" class="num-tip">{{ level }}</span>
        <span v-else class="num-tip">{{ itemNumber }}</span>

      </div>

      <template v-if="itemType === 'home'">
        <div class="home-logo home-logo-wrap"></div>
        <span class="itemTitle">{{itemName}}</span>
        <router-link to="item" class="start button-style"></router-link>
      </template>
      <div>请在下列四个选项中选出一个正确选项~</div>
      <div v-if="itemType === 'item'">
        <div class="home-back home-logo-wrap">
          <div class="item-list-wrap">
            <span class="itemTitle">题目{{ itemNumber }}:</span>


            <ol>

              <li v-for="(answer, index) in itemDetail[itemNumber-1].answer"
                  :class="{ 'option-style': true, 'choose-option-style': answer === choosedAnswer }"
                  @click="onChooseAnswer(answer)" :key="answer">
                {{ index+1 }}: {{ answer }}
              </li>
            </ol>
          </div>
        </div>
        <span class="next_item button-style" @click="answerItem" v-if="itemNumber < itemDetail.length"></span>
        <span class="submit_item button-style" v-else @click="submitAnswer"></span>

      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'itemwrap',
  props: {
    itemType: String
  },
  computed: {
    ...mapState([
      'itemNumber',
      'level',
      'itemDetail'
    ])
  },
  methods: {
    ...mapActions([
      'nextItem',
      'initializeData'
    ]),
    onChooseAnswer (answer) {
      this.choosedAnswer = answer
    },
    answerItem () {
      if (!this.choosedAnswer) {
        alert('you dont choose answer yet!')
        return
      }
      this.nextItem(this.choosedAnswer)
      this.choosedAnswer = undefined
    },
    submitAnswer () {
      if (!this.choosedAnswer) {
        alert('you dont choose answer yet!')
        return
      }
      this.nextItem(this.choosedAnswer)
      this.choosedAnswer = undefined
      this.$router.push('score') // 跳转score页面
    }
  },

  created () {
    console.log(this.itemType)
    console.log(this.level)
  },

  data: function () {
    return {
      choosedAnswer: undefined
    }
  }

}
</script>

<style scoped>

.top-tip {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
}

.top-tip .num-tip{
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
}

.home-logo-wrap {
  height: 11.625rem;
  width: 13.15rem;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}

.home-logo {
  background: url(../assets/images/1-2.png);
  background-size: 13.142rem 100%;
	background-position: right center;
}

.button-style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.start {
  background-image: url(../assets/images/1-4.png) ;
  background-size: 100% 100%;
}

.home-back {
  background-image: url(../assets/images/2-1.png);
  background-size: 100% 100%;
}

.option-style {
  height: 1rem;
  margin-top: 0.3rem;
  text-align: left;
  margin-left: 1.5rem;
  font-size: 0.8rem;
  font-family: 'Arial';
  color: seashell;
}
.choose-option-style {
  color: blue;
}

.next_item{
  background-image: url(../assets/images/2-2.png);
}

.itemTitle {
  color: aliceblue;
}

.submit_item{
  background-image: url(../assets/images/3-1.png);
  background-size: 100% 100%;
}

</style>
