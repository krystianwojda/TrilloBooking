<template>
  <the-header/>
  <div class="container">
    <div class="row">
      <div class="box">
        <div class="login-box">
          <div class="content">
            <h2 class="content__title">Login</h2>
            <div class="content__box-input">
              <label class="content__box-input__label" for="e-mail">E-mail</label>
              <input class="content__box-input__input" id="e-mail" type="text" v-model="email"/>
            </div>
            <div class="content__box-input">
              <label class="content__box-input__label" for="password">Password</label>
              <input class="content__box-input__input" id="password" type="password" v-model="password"/>
            </div>
            <div class="content__box-input">
              <button class="btn" @click="login">Login</button>
            </div>
            <div class="content__box-authenticated">
              <span class="content__box-authenticated__title">Or Sing Up Using</span>
              <div class="content__box-authenticated__alternative">
                <button @click="loginGoogle" class="content__box-authenticated__alternative__btn">
                  <img class="img" src="@/src/google-icon.png" alt="Google icon"/>Google
                </button>
                <button class="content__box-authenticated__alternative__btn">
                  <img class="img" src="@/src/facebook-icon.png" alt="Facebook icon"/>Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref('');
const password = ref('');

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) {
    console.log(error)
  }
};
const loginGoogle = async () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: 'google'
  });

  if (error) {
    console.log(error);
  }

  navigateTo('/')
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";
.box {
  padding: 10rem 0 3rem 0;

  @media screen and (max-width: 576px) {
    padding-top: 7rem;
  }

  .login-box {
    display: flex;
    justify-content: center;
    margin: 3rem;

    .content{
      width: 600px;
      border-radius: 15px;
      box-shadow: $color-shadow-dark;
      background-color: white;
      padding: 6rem 3rem;

      @media screen and (max-width: 576px) {
        padding: 2rem 1rem;
      }

      &__title {
        font-size: 3rem;
        text-align: center;

        @media screen and (max-width: 576px) {
          font-size: 2.25rem;
        }
      }

      &__box-input {
        display: flex;
        flex-direction: column;
        padding: 2rem 4rem 0 4rem;

        &__label {
          padding-bottom: 1rem;
          font-size: 1.25rem;
        }

        &__input {
          border: none;
          outline: none;
          border-bottom: $border-line;
          font-size: 2rem;
        }
      }

      &__box-authenticated {
        display: flex;
        flex-direction: column;
        padding: 2rem 4rem 0 4rem;

        &__title {
          font-size: 1.5rem;
          color: $color-grey-dark-1;
          text-align: center;
          padding: 8rem 0 2rem 0;

          @media screen and (max-width: 576px) {
            padding: 4rem 0 1rem 0;
          }
        }

        &__alternative {
          display: flex;
          justify-content: space-between;

          @media screen and (max-width: 576px) {
            flex-direction: column;
          }

          &__btn {
            border: $border-line;
            outline: none;
            border-radius: 15px;
            font-size: 1.5rem;
            padding: 1.25rem 2rem;
            transition: all .7s;

            @media screen and (max-width: 576px) {
              margin-bottom: 1.5rem;
            }

            .img {
              width: 2rem;
              height: 2rem;
              margin-right: 1rem;
            }
          }

          &__btn:hover {
            background-color: $color-grey-light-4;
            transform: scale(1.05);
          }
        }
      }
    }
  }
}

.btn {
  padding: 1.5rem 4.5rem;
  margin-top: 3rem;
  font-size: 1.8rem;
  color: #fff;
  border: none;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 100px;
  background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
  position: relative;
  overflow: hidden;
  transition: all .7s;

  @media screen and (max-width: 767px) {
    padding: 1.5rem 3.5rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 569px) {
    padding: 1.5rem 3.5rem;
    font-size: 1.4rem;
  }
}

.btn:hover {
  background-image: linear-gradient(to right, #ff094f, #850237);
  transform: scale(1.05);
}
</style>