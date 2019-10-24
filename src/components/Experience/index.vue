<template>
  <section class="experience">
    <div class="experience-title">
      <span>Doświadczenie</span>
    </div>
    <div class="experience-box">
      <Content />
    </div>
  </section>
</template>

<script>
import Content from "./Content";
export default {
  components: {
    Content
  }
};
</script>

<style lang="scss">
section.experience {
  height: 100vh;
  width: 100%;
  background: $lightbg;
  .experience-title {
    display: flex;
    justify-content: center;
    padding-top: 133px;
    span {
      color: $second;
      text-transform: uppercase;
      font-size: 12px;
      position: relative;
      &:after {
        content: "";
        border-right: 2px solid $second;
        position: absolute;
        bottom: 50px;
        right: 50%;
        width: 100px;
        height: 100px;
      }
    }
  }
  .experience-box {
    height: calc(100% - 150px);
  }
}
</style>>
