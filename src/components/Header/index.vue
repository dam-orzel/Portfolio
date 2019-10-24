<template>
  <header>
    <div class="header-box">
      <div class="header-content">
        <h1>
          Damian
          <span>Orzeł</span>
        </h1>
        <h2>Frontend Developer</h2>
      </div>
      <div class="header-subtitles">
        <span>Towarzyski</span>
        <span>Ambitny</span>
        <span>Minimalista</span>
      </div>
    </div>
    <div class="container">
      <div class="header-nav">
        <div class="social">
          <a href="https://github.com/dam-orzel?tab=repositories" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/damian-orze%C5%82/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div class="call-action">
          <span>
            Napisz do mnie
            <i class="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>
    </div>

    <i class="fas fa-chevron-down"></i>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(35, 35, 35, 0.9)),
    url("../../assets/img/background.jpg");
  position: relative;
  .header-box {
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .header-content {
      border: 1px solid $grey;
      padding: 50px 100px;
    }
    h1,
    h2 {
      margin: 0;
      font-weight: normal;
      color: $main;
    }
    h1 {
      font-size: 56px;
      margin-bottom: 10px;
      span {
        color: $second;
        font-family: "Merriweather", serif;
      }
    }
    h2 {
      font-size: 30px;
      text-align: center;
    }
    .header-subtitles {
      margin-top: 20px;
      span {
        color: $main;
        opacity: 0.5;
        font-size: 12px;
        margin: 0 10px;
        text-transform: uppercase;
        &:nth-child(2) {
          position: relative;
          margin: 0 10px;
          &:after,
          &:before {
            content: "";
            border-right: 2px solid $second;
            position: absolute;
            top: 2px;
            left: -20px;
            width: 10px;
            height: 13px;
          }
          &:after {
            left: 50px;
            right: 0;
          }
        }
        &:last-child {
          margin: 0 15px;
        }
      }
    }
  }
  .header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .social {
      .fab {
        margin: 0 15px;
        font-size: 28px;
        color: $second;
      }
    }
    .call-action {
      text-transform: uppercase;
      font-size: 12px;
      color: $main;

      .fas {
        margin-left: 7px;
        color: $second;
      }
    }
  }
  .fa-chevron-down {
    position: absolute;
    bottom: 170px;
    left: 50%;
    transform: translateX(-50%);
    color: $second;
    cursor: pointer;
  }
}
</style>