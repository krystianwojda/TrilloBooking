<template>
  <nav class="header__user-nav">
    <ClientOnly>
      <div class="header__user-nav__item" v-if="!user">
        <NuxtLink class="header__user-nav__item__link" to="/login">
          <span class="header__user-nav__item__link-title">Login</span>
          <img class="header__user-nav__item__link-icon" src="@/src/login.png" alt="Login">
        </NuxtLink>
      </div>
    </ClientOnly>
    <ClientOnly>
      <div class="header__user-nav__item" v-if="!user">
        <NuxtLink class="header__user-nav__item__link" to="/register">
          <span class="header__user-nav__item__link-title">Registration</span>
          <img class="header__user-nav__item__link-icon" src="@/src/new-user.png" alt="Register">
        </NuxtLink>
      </div>
    </ClientOnly>
    <ClientOnly>
      <div class="header__user-nav__item" v-if="user" @click="logout">
        <NuxtLink class="header__user-nav__item__link" to="/">
          <span class="header__user-nav__item__link-title">Logout</span>
          <img class="header__user-nav__item__link-icon" src="@/src/logout.png" alt="Logout">
        </NuxtLink>
      </div>
    </ClientOnly>
  </nav>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }

  navigateTo('/');
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.header {
  &__user-nav {
    display: flex;
    align-items: center;
    align-self: stretch;
    height: 7rem;
    color: #777;

    @media screen and (max-width: 576px) {
      height: 5rem;
    }

    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (max-width: 576px) {
        height: 5rem;
        padding: 0 0.5rem;
      }
    }

    & > *:hover {
      background-color: $color-grey-light-2;
    }

    &__item {
      &__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $color-grey-dark-2;

        &-title {
          font-size: 2rem;
          margin-right: 1rem;

          @media screen and (max-width: 576px) {
            font-size: 1.5rem;
            margin-right: .25rem;
          }
        }

        &-icon {
          width: 3rem;
          height: 3rem;

          @media screen and (max-width: 576px) {
            width: 2.25rem;
            height: 2.25rem;
          }
        }
      }
    }
  }
}
</style>