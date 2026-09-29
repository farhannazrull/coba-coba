const initStackingCard = () => {
        const cardList = document.querySelectorAll('.js-stacking-card');

        cardList.forEach((list) => {
          const cardItem = [...list.querySelectorAll('.js-stacking-card-item')];
          const queue = cardItem.map((item, i) => i);

          const setDataset = (updatedQueue) => {
            cardItem.forEach((item, i) => {
              item.dataset.slide = updatedQueue[i];
            });
          };

          list.addEventListener('click', () => {
            queue.unshift(queue.pop());
            setDataset(queue);
          });

          setDataset(queue);
        });
      };

      const initTabNav = () => {
        const tabBtn = document.querySelectorAll('.js-tab-nav-btn');

        tabBtn.forEach((btn) => {
          const target = btn.dataset.target;
          const targetContent = document.getElementById(target);
          const targetContentSlider = targetContent.querySelector('.js-slider');

          btn.addEventListener('click', (e) => {
            e.preventDefault();

            const navParent = e.target.closest('.js-tab-nav');
            const activeTabBtn = navParent.querySelector('.js-tab-nav-btn.is-active');
            const activeTabContent = navParent.querySelector('.js-tab-nav-content.is-active');

            activeTabBtn?.classList.remove('is-active');
            activeTabContent?.classList.remove('is-active');

            e.currentTarget?.classList.add('is-active');
            targetContent?.classList.add('is-active');

            if (targetContentSlider) $(targetContentSlider).slick('refresh');
          });
        });
      };

      const initBackTopBtn = () => {
        const btn = document.querySelector('.js-back-top-btn');
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      };

      const initModal = () => {
        const bodyEl = document.querySelector('body');
        const btnTriggers = document.querySelectorAll('.js-modal-btn-trigger');
        const modals = document.querySelectorAll('.js-modal');

        btnTriggers.forEach((btn) => {
          btn.addEventListener('click', (event) => {
            const target = btn.dataset.target;
            const targetModal = document.getElementById(target);

            targetModal.classList.add('is-active');
            bodyEl.style.overflow = 'hidden';
          });
        });

        modals.forEach((modal) => {
          modal.addEventListener('click', (event) => {
            const isOutside = !event.target.closest('.js-modal-content');
            if (isOutside) {
              modal.classList.remove('is-active');
              bodyEl.style.overflow = 'auto';
            }
          });
        });
      };

      const initSlider = () => {
        $('.js-slider').each(function (index, element) {
          const dataSlideShow = $(this).data('slide-to-show') || null;
          const dataSlideScroll = $(this).data('slide-to-scroll') || null;
          const dataResponsive = $(this).data('responsive');
          console.log(dataSlideShow);
          console.log(dataSlideScroll);
          console.log(dataResponsive);

          $(this).slick({
            infinite: false,
            slidesToShow: dataSlideShow ? dataSlideShow : 5,
            slidesToScroll: dataSlideScroll ? dataSlideScroll : 5,

            responsive: dataResponsive
              ? [
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              : [],
            prevArrow:
              '<button type="button" class="slick-prev"><img src="https://rmkcdn.successfactors.com/feaf7fda/9f752b59-f580-48db-be0a-9.svg" /></button>',
            nextArrow:
              '<button type="button" class="slick-next"><img src="https://rmkcdn.successfactors.com/feaf7fda/27695184-a2c8-4d81-a0a6-8.svg" /></button>'
          });
        });
      };

      document.addEventListener('DOMContentLoaded', () => {
        initStackingCard();
        initTabNav();
        initBackTopBtn();
        initSlider();
        initModal();
      });
