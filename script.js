document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelectorAll("[data-dropdown-btn]");

  if (dropdown) {
    dropdown.forEach((element) => {
      console.log(element);

      element.addEventListener("click", (e) => {
        const parent = element.parentElement.parentElement;
        const img = parent.querySelector(".img-arrow");
        if (element.classList.contains("show")) {
          img.classList.add("rotate");
        } else {
          img.classList.remove("rotate");
        }
      });
    });
  }

  const button = document.querySelector("[data-person-logo]");
  const shadow = document.querySelector(".shadow");

  if (innerWidth > 991.98) {
    button.addEventListener("click", (e) => {
      const wrapper = document.querySelector(".account-wrapper-white");

      if (wrapper.classList.contains("d-none")) {
        wrapper.classList.remove("d-none");
        shadow.classList.remove("d-none");
      } else {
        wrapper.classList.add("d-none");
        shadow.classList.add("d-none");
      }

      shadow.addEventListener("click", (e) => {
        wrapper.classList.add("d-none");
        shadow.classList.add("d-none");
      });
    });
  } else {
    const wrapper = document.querySelector(".account-wrapper-white");
    wrapper.remove();
  }

  const wrapperBenefits = document.querySelector("[data-benefits-wrapper]");
  const cloneWrapper = document.querySelector("[data-benefits-clone]");
  const close = document.querySelector("[data-person-logo-close]");
  const searchIcon = document.querySelector("[data-search-bar-icon]");
  const heroSection = document.querySelector("[data-hero-section]");
  const inputHeroSearch = document.querySelector(".search-bar-click");
  const whiteZoom = document.querySelector("[data-search-bar-icon-white]");
  const circleZoom = document.querySelector(".circle-icon-active-zoom");
  const menuModalBtn = document.querySelector("[data-menu-modal-btn]");
  const menuCloseBtn = document.querySelector("[data-menu-modal-close]");
  const menuTrigger = document.querySelector("[data-close-trigger-btn]");

  const greenLogo = document.querySelector("[data-logo-green-about]");
  const whiteLogo = document.querySelector("[data-logo-white-about]");
  const whiteCart = document.querySelector("[data-cart-white]");
  const greenCart = document.querySelector("[data-cart-green]");
  const hamburgerWhite = document.querySelector("[data-hamburger-white]");
  const hamburgerGreen = document.querySelector("[data-hamburger-green]");
  const zoomGreen = document.querySelector("[data-zoom-green]");
  const zoomWhite = document.querySelector("[data-zoom-white]");

  const greenHead = document.querySelector("[data-person-head-green]");
  const whiteHead = document.querySelector("[data-person-head-white]");
  const personBodyGreen = document.querySelector("[data-person-body-green]");
  const overlayAbout = document.querySelector("[data-overlay-circle]");

  const aboutSection = document.querySelector("[data-hero-section-about]");
  const contactSection = document.querySelector("[data-contact-section]");
  const productDetailInput = document.querySelector(
    "[data-input-product-detail]"
  );

  if (innerWidth < 575.98 && wrapperBenefits) {
    cloneWrapper.innerHTML = wrapperBenefits.innerHTML;
  }

  if (innerWidth < 575.98) {
    const sortMenuDropdown = document.querySelector("#dropdownMenuButton4");
    const sectionWrapperProducts = document.querySelector(
      ".products-wrapper-section"
    );

    if (sectionWrapperProducts) {
      sortMenuDropdown.addEventListener("click", function (e) {
        if (sortMenuDropdown.classList.contains("animationed-phone")) {
          sectionWrapperProducts.classList.remove("downSection");
          sortMenuDropdown.classList.remove("animationed-phone");
          sectionWrapperProducts.classList.add("upSection");
        } else {
          sectionWrapperProducts.classList.remove("upSection");
          sectionWrapperProducts.classList.add("downSection");
          sortMenuDropdown.classList.add("animationed-phone");
        }
      });
    }

    button.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.remove("d-none");
        whiteLogo.classList.add("d-none");
        whiteCart.classList.add("d-none");
        greenCart.classList.remove("d-none");
        hamburgerWhite.classList.add("d-none");
        hamburgerGreen.classList.remove("d-none");
        zoomGreen.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
      }

      const loginModal = new bootstrap.Modal("#loginModal");
      loginModal.show();
      close.classList.remove("d-none");
      button.classList.add("d-none");
    });

    close.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.add("d-none");
        whiteLogo.classList.remove("d-none");
        whiteCart.classList.remove("d-none");
        greenCart.classList.add("d-none");
        hamburgerWhite.classList.remove("d-none");
        hamburgerGreen.classList.add("d-none");
        zoomGreen.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
      }

      const closeModal = document.querySelector(".close-btn-modal");
      closeModal.click();
      button.classList.remove("d-none");
      close.classList.add("d-none");
    });

    if (innerWidth < 575.98 && wrapperBenefits) {
      searchIcon.addEventListener("click", function () {
        heroSection.classList.remove("up");
        heroSection.classList.add("down");
        circleZoom.classList.remove("d-none");
        searchIcon.classList.add("d-none");
        whiteZoom.classList.remove("d-none");
        inputHeroSearch.classList.remove("d-none");
      });

      whiteZoom.addEventListener("click", function () {
        heroSection.classList.remove("down");
        heroSection.classList.add("up");
        circleZoom.classList.add("d-none");
        searchIcon.classList.remove("d-none");
        whiteZoom.classList.add("d-none");
        inputHeroSearch.classList.add("d-none");
      });
    } else if (innerWidth < 575.98 && productDetailInput) {
      searchIcon.addEventListener("click", function () {
        circleZoom.classList.remove("d-none");
        searchIcon.classList.add("d-none");
        whiteZoom.classList.remove("d-none");
        inputHeroSearch.classList.remove("d-none");
      });

      whiteZoom.addEventListener("click", function () {
        circleZoom.classList.add("d-none");
        searchIcon.classList.remove("d-none");
        whiteZoom.classList.add("d-none");
        inputHeroSearch.classList.add("d-none");
      });
    }

    if (aboutSection) {
      zoomWhite.addEventListener("click", function () {
        const searchBar = document.querySelector("[data-search-bar-about]");
        if (zoomWhite.classList.contains("active-circle")) {
          overlayAbout.classList.add("d-none");
          zoomWhite.classList.remove("z-index10");
          zoomWhite.classList.remove("active-circle");
          searchBar.classList.add("d-none");
        } else {
          overlayAbout.classList.remove("d-none");
          zoomWhite.classList.add("active-circle");
          zoomWhite.classList.add("z-index10");
          searchBar.classList.remove("d-none");
        }
      });
    }

    if (contactSection) {
      const searchBar = document.querySelector("[data-search-bar-about]");
      zoomWhite.addEventListener("click", function () {
        overlayAbout.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
        zoomGreen.classList.remove("d-none");
        zoomGreen.classList.add("z-index10");
        zoomGreen.classList.add("active-circle");
        searchBar.classList.remove("d-none");
      });

      zoomGreen.addEventListener("click", function () {
        overlayAbout.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
        zoomGreen.classList.add("d-none");
        zoomGreen.classList.remove("z-index10");
        zoomGreen.classList.remove("active-circle");
        searchBar.classList.add("d-none");
      });
    }

    menuModalBtn.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.remove("d-none");
        whiteLogo.classList.add("d-none");
        whiteCart.classList.add("d-none");
        greenCart.classList.remove("d-none");
        zoomGreen.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
        whiteHead.classList.add("d-none");
        greenHead.classList.remove("d-none");
        personBodyGreen.classList.add("green-body-person");
      }

      const menunModal = new bootstrap.Modal("#menuModal");
      menunModal.show();
      menuModalBtn.classList.add("d-none");
      menuCloseBtn.classList.remove("d-none");
    });

    menuCloseBtn.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.add("d-none");
        whiteLogo.classList.remove("d-none");
        whiteCart.classList.remove("d-none");
        greenCart.classList.add("d-none");
        zoomGreen.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
        whiteHead.classList.remove("d-none");
        greenHead.classList.add("d-none");
        personBodyGreen.classList.remove("green-body-person");
      }

      menuTrigger.click();
      menuModalBtn.classList.remove("d-none");
      menuCloseBtn.classList.add("d-none");
    });
  }

  // Tablet View
  if (innerWidth > 767 && innerWidth < 991.98) {
    let benefitOne = document.querySelector("[data-benefit-one]");
    let benefitTwo = document.querySelector("[data-benefit-two]");
    let benefitThree = document.querySelector("[data-benefit-three]");
    let benefitFour = document.querySelector("[data-benefit-four]");

    let cloneOne = document.querySelector("[data-benefits-tablet-clone-one]");
    let cloneTwo = document.querySelector("[data-benefits-tablet-clone-two]");
    let cloneThree = document.querySelector(
      "[data-benefits-tablet-clone-three]"
    );
    let cloneFour = document.querySelector("[data-benefits-tablet-clone-four]");

    const cloneWrapperTablet = document.querySelector(
      "[data-benefits-tablet-clone-wrapper]"
    );

    if (benefitOne) {
      cloneOne.classList.add("single-wrapper");
      cloneTwo.classList.add("single-wrapper");
      cloneThree.classList.add("single-wrapper");
      cloneFour.classList.add("single-wrapper");

      cloneOne.append(benefitOne);
      cloneTwo.append(benefitTwo);
      cloneThree.append(benefitThree);
      cloneFour.append(benefitFour);
      wrapperBenefits.remove();
    }

    button.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.remove("d-none");
        whiteLogo.classList.add("d-none");
        whiteCart.classList.add("d-none");
        greenCart.classList.remove("d-none");
        hamburgerWhite.classList.add("d-none");
        hamburgerGreen.classList.remove("d-none");
        zoomGreen.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
      }

      if (contactSection || aboutSection) {
        const inputModalTablet = document.querySelector(".search-toolbar");
        inputModalTablet.classList.add("green-input");
      }

      const loginModal = new bootstrap.Modal("#loginModal");
      loginModal.show();
      close.classList.remove("d-none");
      button.classList.add("d-none");
    });

    close.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.add("d-none");
        whiteLogo.classList.remove("d-none");
        whiteCart.classList.remove("d-none");
        greenCart.classList.add("d-none");
        hamburgerWhite.classList.remove("d-none");
        hamburgerGreen.classList.add("d-none");
        zoomGreen.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
      }

      if (contactSection || aboutSection) {
        const inputModalTablet = document.querySelector(".search-toolbar");
        inputModalTablet.classList.remove("green-input");
      }

      const closeModal = document.querySelector(".close-btn-modal");
      closeModal.click();
      button.classList.remove("d-none");
      close.classList.add("d-none");
    });

    if (innerWidth > 767 && innerWidth < 991.98 && wrapperBenefits) {
      searchIcon.addEventListener("click", function () {
        heroSection.classList.remove("up");
        heroSection.classList.add("down");
        circleZoom.classList.remove("d-none");
        searchIcon.classList.add("d-none");
        whiteZoom.classList.remove("d-none");
        inputHeroSearch.classList.remove("d-none");
      });

      whiteZoom.addEventListener("click", function () {
        heroSection.classList.remove("down");
        heroSection.classList.add("up");
        circleZoom.classList.add("d-none");
        searchIcon.classList.remove("d-none");
        whiteZoom.classList.add("d-none");
        inputHeroSearch.classList.add("d-none");
      });
    } else if (innerWidth > 767 && innerWidth < 991.98 && productDetailInput) {
      searchIcon.addEventListener("click", function () {
        circleZoom.classList.remove("d-none");
        searchIcon.classList.add("d-none");
        whiteZoom.classList.remove("d-none");
        inputHeroSearch.classList.remove("d-none");
      });

      whiteZoom.addEventListener("click", function () {
        circleZoom.classList.add("d-none");
        searchIcon.classList.remove("d-none");
        whiteZoom.classList.add("d-none");
        inputHeroSearch.classList.add("d-none");
      });
    }

    if (aboutSection) {
      zoomWhite.addEventListener("click", function () {
        const searchBar = document.querySelector("[data-search-bar-about]");
        if (zoomWhite.classList.contains("active-circle")) {
          overlayAbout.classList.add("d-none");
          zoomWhite.classList.remove("z-index10");
          zoomWhite.classList.remove("active-circle");
          searchBar.classList.add("d-none");
        } else {
          overlayAbout.classList.remove("d-none");
          zoomWhite.classList.add("active-circle");
          zoomWhite.classList.add("z-index10");
          searchBar.classList.remove("d-none");
        }
      });
    }

    if (contactSection) {
      const searchBar = document.querySelector("[data-search-bar-about]");
      zoomWhite.addEventListener("click", function () {
        overlayAbout.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
        zoomGreen.classList.remove("d-none");
        zoomGreen.classList.add("z-index10");
        zoomGreen.classList.add("active-circle");
        searchBar.classList.remove("d-none");
      });

      zoomGreen.addEventListener("click", function () {
        overlayAbout.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
        zoomGreen.classList.add("d-none");
        zoomGreen.classList.remove("z-index10");
        zoomGreen.classList.remove("active-circle");
        searchBar.classList.add("d-none");
      });

      const inputModalTablet = document.querySelector(".search-toolbar");
    }

    menuModalBtn.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.remove("d-none");
        whiteLogo.classList.add("d-none");
        whiteCart.classList.add("d-none");
        greenCart.classList.remove("d-none");
        zoomGreen.classList.remove("d-none");
        zoomWhite.classList.add("d-none");
        whiteHead.classList.add("d-none");
        greenHead.classList.remove("d-none");
        personBodyGreen.classList.add("green-body-person");
      }
      if (contactSection || aboutSection) {
        const inputModalTablet = document.querySelector(".search-toolbar");
        inputModalTablet.classList.add("green-input");
      }

      const menunModal = new bootstrap.Modal("#menuModal");
      menunModal.show();
      menuModalBtn.classList.add("d-none");
      menuCloseBtn.classList.remove("d-none");
    });

    menuCloseBtn.addEventListener("click", function () {
      if (greenLogo) {
        greenLogo.classList.add("d-none");
        whiteLogo.classList.remove("d-none");
        whiteCart.classList.remove("d-none");
        greenCart.classList.add("d-none");
        zoomGreen.classList.add("d-none");
        zoomWhite.classList.remove("d-none");
        whiteHead.classList.remove("d-none");
        greenHead.classList.add("d-none");
        personBodyGreen.classList.remove("green-body-person");
      }
      if (contactSection || aboutSection) {
        const inputModalTablet = document.querySelector(".search-toolbar");
        inputModalTablet.classList.remove("green-input");
      }

      menuTrigger.click();
      menuModalBtn.classList.remove("d-none");
      menuCloseBtn.classList.add("d-none");
    });
  }
});

const detailSection = document.querySelector("[data-section-product-detail]");

if (detailSection) {
  const allSVG = document.querySelectorAll("[data-svg-icon-prod]");
  const allSVGTick = document.querySelectorAll("[data-icon-tick]");

  allSVG.forEach(function (e) {
    e.addEventListener("click", function (e) {
      allSVG.forEach(function (e) {
        if (e.classList.contains("d-none")) {
          e.classList.remove("d-none");
        }
      });

      allSVGTick.forEach(function (e) {
        e.classList.add("d-none");
      });

      const wrapperIconSVG = e.currentTarget.parentElement;
      const tickIconSingle = wrapperIconSVG.querySelector("[data-icon-tick]");

      e.currentTarget.classList.add("d-none");
      tickIconSingle.classList.remove("d-none");

      tickIconSingle.addEventListener("click", function (e) {
        allSVG.forEach(function (e) {
          if (e.classList.contains("d-none")) {
            e.classList.remove("d-none");
          }
        });

        allSVGTick.forEach(function (e) {
          e.classList.add("d-none");
        });
      });
    });
  });

  const colorBtn = document.querySelector("[data-product-detail-color]");
  const colorWrapper = document.querySelector(
    "[data-product-detail-color-wrapper]"
  );

  colorBtn.addEventListener("click", function (e) {
    const arrowBtnDetail = e.currentTarget.querySelector(
      "[data-product-detail-arrow]"
    );

    if (colorWrapper.classList.contains("d-none")) {
      colorWrapper.classList.remove("d-none");
    } else {
      colorWrapper.classList.add("d-none");
    }

    if (arrowBtnDetail.classList.contains("rotate")) {
      arrowBtnDetail.classList.remove("rotate");
    } else {
      arrowBtnDetail.classList.add("rotate");
    }
  });

  const sizingBtn = document.querySelector("[data-product-detail-sizing]");
  const sizingWrapper = document.querySelector(
    "[data-product-detail-sizing-wrapper]"
  );

  sizingBtn.addEventListener("click", function (e) {
    const arrowBtnDetail = e.currentTarget.querySelector(
      "[data-product-detail-arrow]"
    );

    if (sizingWrapper.classList.contains("d-none")) {
      sizingWrapper.classList.remove("d-none");
    } else {
      sizingWrapper.classList.add("d-none");
    }

    if (arrowBtnDetail.classList.contains("rotate")) {
      arrowBtnDetail.classList.remove("rotate");
    } else {
      arrowBtnDetail.classList.add("rotate");
    }
  });

  const infoBtn = document.querySelector("[data-product-detail-information]");
  const infoWrapper = document.querySelector(
    "[data-product-detail-information-wrapper]"
  );

  infoBtn.addEventListener("click", function (e) {
    const arrowBtnDetail = e.currentTarget.querySelector(
      "[data-product-detail-arrow]"
    );

    if (infoWrapper.classList.contains("d-none")) {
      infoWrapper.classList.remove("d-none");
    } else {
      infoWrapper.classList.add("d-none");
    }

    if (arrowBtnDetail.classList.contains("rotate")) {
      arrowBtnDetail.classList.remove("rotate");
    } else {
      arrowBtnDetail.classList.add("rotate");
    }
  });

  const shipBtn = document.querySelector("[data-product-detail-shipping]");
  const shipWrapper = document.querySelector(
    "[data-product-detail-shipping-wrapper]"
  );

  shipBtn.addEventListener("click", function (e) {
    const arrowBtnDetail = e.currentTarget.querySelector(
      "[data-product-detail-arrow]"
    );

    if (shipWrapper.classList.contains("d-none")) {
      shipWrapper.classList.remove("d-none");
    } else {
      shipWrapper.classList.add("d-none");
    }

    if (arrowBtnDetail.classList.contains("rotate")) {
      arrowBtnDetail.classList.remove("rotate");
    } else {
      arrowBtnDetail.classList.add("rotate");
    }
  });
}

///Changing imgage on product --> homepage

const img1 = document.querySelector("[data-img-desktop-product-1]");
const img2 = document.querySelector("[data-img-desktop-product-2]");
const img3 = document.querySelector("[data-img-desktop-product-3]");
const img4 = document.querySelector("[data-img-desktop-product-4]");
const img5 = document.querySelector("[data-img-desktop-product-5]");
const img6 = document.querySelector("[data-img-desktop-product-6]");
const img7 = document.querySelector("[data-img-desktop-product-7]");
const img8 = document.querySelector("[data-img-desktop-product-8]");
const imgBig = document.querySelector("[data-big-img-product-desktop]");

if (img1) {
  img1.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img1.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img2.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img2.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img3.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img3.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img4.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img4.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img5.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img5.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img6.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img6.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img7.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img7.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  img8.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  img8.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  imgBig.addEventListener("mouseenter", function (event) {
    event.target.src = "img/prod2.png";
  });

  imgBig.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });
}

///Changing imgage on product ---> product section

const prod1 = document.querySelector("[data-img-product-wrapper-desktop-1]");
const prod2 = document.querySelector("[data-img-product-wrapper-desktop-2]");
const prod3 = document.querySelector("[data-img-product-wrapper-desktop-3]");
const prod4 = document.querySelector("[data-img-product-wrapper-desktop-4]");
const prod5 = document.querySelector("[data-img-product-wrapper-desktop-5]");
const prod6 = document.querySelector("[data-img-product-wrapper-desktop-6]");
const prod7 = document.querySelector("[data-img-product-wrapper-desktop-7]");
const prod8 = document.querySelector("[data-img-product-wrapper-desktop-8]");

if (prod1) {
  prod1.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod1.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod2.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod2.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod3.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod3.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod4.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod4.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod5.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod5.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod6.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod6.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod7.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod7.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });

  prod8.addEventListener("mouseenter", function (event) {
    event.target.src = "img/product-childern-hover.png";
  });

  prod8.addEventListener("mouseleave", function (event) {
    event.target.src = "img/prod2.png";
  });
}

const similar1 = document.querySelector("[data-img-product-similar-1]");
const similar2 = document.querySelector("[data-img-product-similar-2]");
const similar3 = document.querySelector("[data-img-product-similar-3]");
const similar4 = document.querySelector("[data-img-product-similar-4]");
const similar5 = document.querySelector("[data-img-product-similar-5]");
const similar6 = document.querySelector("[data-img-product-similar-6]");
const similar7 = document.querySelector("[data-img-product-similar-7]");
const similar8 = document.querySelector("[data-img-product-similar-8]");


if(similar1){

  similar1.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar1.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar2.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar2.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar3.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar3.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar4.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar4.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar5.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar5.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar6.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar6.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar7.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar7.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });

  similar8.addEventListener("mouseenter", function (event) {
    event.target.src = "img/Rectangle 11.png";
  });

  similar8.addEventListener("mouseleave", function (event) {
    event.target.src = "img/product-solo.png";
  });
}