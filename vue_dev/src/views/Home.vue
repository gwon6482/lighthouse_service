<template>
  <div class="inner">
    <div class="description">
      <h3>당신의 진로 파트너</h3>
      <img src="~assets/logo.png" alt="Logo" class="logo">
      <h5>사전체험용</h5>
      <img src="~assets/logo-text.png" alt="" class="logo-text">
    </div>

    <div class="auth">
      <input type="text" placeholder="인증번호" class="input-auth">
      <router-link to="/Page1">
        <BtnLarge />
      </router-link>
      <p>
        <span>사전체험을 하고 싶으신가요?</span> 
        <router-link to="/Page2" class="auth-req">
          인증번호 요청하기
        </router-link>
      </p>
    </div>

  </div>
</template>

<script>
import BtnLarge from '~/components/BtnLarge'

export default {
  components: {
    BtnLarge
  }
}
</script>


<style lang="scss">
@import "~/scss/main";

body {
  width: 430px;
  margin: 0 auto;
  background-color: #FDFAEA;
  .inner {
    width: 382px;
    margin: 0 auto;
    text-align: center;
    .description {
      width: 330px;
      margin: 15vh auto 0;
      h3 {
        font-size: 30px;
      }
      .logo {
        width: 191px;
        // height: 227px;
        margin: 30px auto 0;
      }
      h5 {
        font-size: 14px;
        text-align: left;
      }
      .logo-text {
        width: 328px;
      }
    }

    .auth {
      .input-auth {
        width: 382px;
        height: 40px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        color: #91929F;
        outline: none;
        padding-left: 26px;
        margin-top: 24px;
      }
      p {
        margin-top: 16px;
        span {
          font-size: 14px;
          color: #91929F;
          display: inline-block;
          margin-right: 4px;
        }
        .auth-req {
          font-size: 14px;
          color: #4C4C57;
          text-decoration: none;
        }
        .auth-req:hover {
          color: lighten(#4C4C57, 20%);
        }
      }
    }
  }
}
</style>