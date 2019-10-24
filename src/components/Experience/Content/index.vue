<template>
  <section class="experience-content">
    <div class="experience-line">
      <div class="exp-item">
        <i class="fas fa-circle inline"></i>
        <div class="item-box">
          <div class="logo-box">
            <a href="https://bdmedia.eu/" target="_blank">
              <img src="@/assets/img/bdmedia.svg" alt />
            </a>
          </div>
          <div class="responsibilities">
            <p>
              <i class="fas fa-circle"></i>Tworzenie licznych Landing Pages na podstawie projektu
            </p>
            <p>
              <i class="fas fa-circle"></i>Wsparcie w projektowaniu UX
            </p>
            <p>
              <i class="fas fa-circle"></i>Inicjatywa przy wyborze odpowiedniej technologii pasującej do danego projektu
            </p>
            <p>
              <i class="fas fa-circle"></i>Negocjacje z potencjalnymi klientami
            </p>
            <p>
              <i class="fas fa-circle"></i>Kontrola jakości kodu i metodyki pracy
            </p>
            <p>
              <i class="fas fa-circle"></i>Praca w pełni zdalna
            </p>
          </div>
          <p class="working-time">
            <span>12.2017</span>
            <span>06.2018</span>
          </p>
        </div>
      </div>
      <div class="exp-item-reverse">
        <i class="fas fa-circle inline"></i>
        <div class="item-box">
          <div class="logo-box">
            <a href="https://efirst.asia/" target="_blank">
              <img src="@/assets/img/efirst.png" alt />
            </a>
          </div>
          <div class="responsibilities">
            <p>
              <i class="fas fa-circle"></i>Tworzenie licznych Landing Pages na podstawie projektu
            </p>
            <p>
              <i class="fas fa-circle"></i>Wsparcie w projektowaniu UX
            </p>
            <p>
              <i class="fas fa-circle"></i>Dostosowywanie projektu pod PWA
            </p>
            <p>
              <i class="fas fa-circle"></i>Wsparcie i pomoc współpracownikom z zakresu Frontend
            </p>
            <p>
              <i class="fas fa-circle"></i>Kontrola nad zadaniami w Jira dla całego zespołu
            </p>
          </div>
          <p class="working-time">
            <span>06.2018</span>
            <span>10.2018</span>
          </p>
        </div>
      </div>
      <div class="exp-item-second">
        <i class="fas fa-circle inline"></i>
        <div class="item-box">
          <div class="logo-box">
            <a href="http://lekseek.com/" target="_blank">
              <img src="@/assets/img/lekseek.png" alt />
            </a>
          </div>
          <div class="responsibilities">
            <p>
              <i class="fas fa-circle"></i>Współtworzenie flagowego produktu Dr. Widget
            </p>
            <p>
              <i class="fas fa-circle"></i>Przeniesienie aplikacji wraz z panelem klienta na VueJS
            </p>
            <p>
              <i class="fas fa-circle"></i>Wsparcie techniczne młodszym stażem frontend developerów
            </p>
            <p>
              <i class="fas fa-circle"></i>Wsparcie w obszarze projektowania UI i UX
            </p>
            <p>
              <i class="fas fa-circle"></i>Tworzenie Landing Pages dla produktów firmy
            </p>
          </div>
          <p class="working-time">
            <span>01.2019</span>
            <span>07.2019</span>
          </p>
        </div>
      </div>
      <div class="exp-item-reverse-second">
        <i class="fas fa-circle inline"></i>
        <div class="item-box">
          <div class="logo-box">
            <a href="https://docs.neckermann.pl/" target="_blank">
              <img src="@/assets/img/neckermann.png" alt />
            </a>
          </div>
          <div class="responsibilities">
            <p>
              <i class="fas fa-circle"></i>Współtworzenie głównego portalu Neckermann.pl
            </p>
            <p>
              <i class="fas fa-circle"></i>Stworzenie całkowicie funkcjonalnej wyszukiwarki na głównym portalu
            </p>
            <p>
              <i class="fas fa-circle"></i>Edycja i optymalizacja istniejącego już kodu
            </p>
            <p>
              <i class="fas fa-circle"></i>Automatyzacja procesów poprzez wykorzystanie najnowszych technologii
            </p>
            <p>
              <i class="fas fa-circle"></i>Bycie częścią najlepszego zespołu
            </p>
          </div>
          <p class="working-time">
            <span>07.2019</span>
            <span>10.2019</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
section.experience-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .experience-line {
    width: 80%;
    height: 3px;
    background: $second;
    margin: 0 auto;
    position: relative;
    .exp-item,
    .exp-item-second,
    .exp-item-reverse,
    .exp-item-reverse-second {
      position: absolute;
      left: 150px;
      bottom: -9px;
      .fa-circle.inline {
        transform: rotate(180deg);
        color: $second;
        font-size: 20px;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          border-right: 2px solid $second;
          height: 50px;
          right: 50%;
          top: 30px;
          transform: translateX(50%);
        }
      }
      .item-box {
        position: absolute;
        bottom: 95px;
        left: -215px;
        background: $darkbg;
        border: 1px solid $second;
        border-radius: 5px;
        padding: 10px 10px 5px 10px;
        box-sizing: border-box;
        color: $main;
        width: 450px;
        height: 250px;
        .logo-box {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-bottom: 10px;
          a {
            img {
              display: block;
              width: 200px;
              margin: 0 auto;
            }
          }
        }
        p.working-time {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 13px;
          color: $grey;
          span {
            margin: 0 20px;
          }
        }
        .responsibilities {
          p {
            font-size: 14px;
            display: flex;
            align-items: end;
            margin: 5px 0;
            .fa-circle {
              font-size: 6px;
              margin-right: 10px;
              margin-top: 8px;
            }
          }
        }
      }
    }
    .exp-item-reverse,
    .exp-item-reverse-second {
      left: 550px;
      .fa-circle.inline {
        &:after {
          top: inherit;
          bottom: 30px;
        }
      }
      .item-box {
        bottom: inherit;
        top: 95px;
        .logo-box {
          a {
            img {
              width: 110px;
            }
          }
        }
        p.working-time {
          bottom: inherit;
          top: -42px;
        }
      }
    }
    .exp-item-second {
      left: 950px;
    }
    .exp-item-reverse-second {
      left: 1350px;
    }
  }
}
</style>