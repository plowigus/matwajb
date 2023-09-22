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
		const inputModalTablet = document.querySelector('.search-toolbar')
		inputModalTablet.classList.add('green-input')
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
		const inputModalTablet = document.querySelector('.search-toolbar')
		inputModalTablet.classList.remove('green-input')
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

	  const inputModalTablet = document.querySelector('.search-toolbar')

	  
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
		const inputModalTablet = document.querySelector('.search-toolbar')
		inputModalTablet.classList.add('green-input')
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
		const inputModalTablet = document.querySelector('.search-toolbar')
		inputModalTablet.classList.remove('green-input')
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
	  const tickIconSingle = wrapperIconSVG.querySelector('[data-icon-tick]')

	  e.currentTarget.classList.add('d-none')
	  tickIconSingle.classList.remove('d-none')

	  tickIconSingle.addEventListener('click', function(e){


		allSVG.forEach(function (e) {
			if (e.classList.contains("d-none")) {
			  e.classList.remove("d-none");
			}
		  });
	
		  allSVGTick.forEach(function (e) {
			e.classList.add("d-none");
		  });
		

	  })

    });
  });

  const colorBtn = document.querySelector("[data-product-detail-color]");
  const colorWrapper = document.querySelector("[data-product-detail-color-wrapper]");


  colorBtn.addEventListener('click', function (e) {
	const arrowBtnDetail = e.currentTarget.querySelector('[data-product-detail-arrow]')
	
	if(colorWrapper.classList.contains('d-none')){
		colorWrapper.classList.remove('d-none')
	}else{
		colorWrapper.classList.add('d-none')
	}

	if(arrowBtnDetail.classList.contains('rotate')){
		arrowBtnDetail.classList.remove('rotate')
	}else{
		arrowBtnDetail.classList.add('rotate')
	}
  })



  const sizingBtn = document.querySelector("[data-product-detail-sizing]");
  const sizingWrapper = document.querySelector("[data-product-detail-sizing-wrapper]");


  sizingBtn.addEventListener('click', function (e) {
	const arrowBtnDetail = e.currentTarget.querySelector('[data-product-detail-arrow]')
	
	if(sizingWrapper.classList.contains('d-none')){
		sizingWrapper.classList.remove('d-none')
	}else{
		sizingWrapper.classList.add('d-none')
	}

	if(arrowBtnDetail.classList.contains('rotate')){
		arrowBtnDetail.classList.remove('rotate')
	}else{
		arrowBtnDetail.classList.add('rotate')
	}
  })


  const infoBtn = document.querySelector("[data-product-detail-information]");
  const infoWrapper = document.querySelector("[data-product-detail-information-wrapper]");


  infoBtn.addEventListener('click', function (e) {
	const arrowBtnDetail = e.currentTarget.querySelector('[data-product-detail-arrow]')
	
	if(infoWrapper.classList.contains('d-none')){
		infoWrapper.classList.remove('d-none')
	}else{
		infoWrapper.classList.add('d-none')
	}

	if(arrowBtnDetail.classList.contains('rotate')){
		arrowBtnDetail.classList.remove('rotate')
	}else{
		arrowBtnDetail.classList.add('rotate')
	}
  })


  const shipBtn = document.querySelector("[data-product-detail-shipping]");
  const shipWrapper = document.querySelector("[data-product-detail-shipping-wrapper]");


  shipBtn.addEventListener('click', function (e) {
	const arrowBtnDetail = e.currentTarget.querySelector('[data-product-detail-arrow]')
	
	if(shipWrapper.classList.contains('d-none')){
		shipWrapper.classList.remove('d-none')
	}else{
		shipWrapper.classList.add('d-none')
	}

	if(arrowBtnDetail.classList.contains('rotate')){
		arrowBtnDetail.classList.remove('rotate')
	}else{
		arrowBtnDetail.classList.add('rotate')
	}
  })



}
