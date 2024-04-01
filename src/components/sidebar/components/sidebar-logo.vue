<template>
    <div class="logo">
      <img class="animate-pulse" src="@/assets/images/logo/logo.png" />
    </div>
</template>

<style scoped>
.logo {
  @apply flex justify-center items-center;
  height: clamp(100px, 100%, 100px);
}
.logo img {
  mix-blend-mode: difference !important;
  height: 100px;
}
</style>
