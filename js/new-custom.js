$(() => {
	// Problem slick touch
	var xCoordStart,
		yCoordStart,
		xSlideTrigger = 10,
		slickElement = $(".slick-slider");

	slickElement.bind("touchstart", function (e) {
		xCoordStart = e.originalEvent.touches[0].clientX;
		yCoordStart = e.originalEvent.touches[0].clientY;
	});

	slickElement.bind("touchend", function (e) {
		var xCoordEnd = e.originalEvent.changedTouches[0].clientX;
		var yCoordEnd = e.originalEvent.changedTouches[0].clientY;

		var deltaX = Math.abs(xCoordEnd - xCoordStart);
		var deltaY = Math.abs(yCoordEnd - yCoordStart);

		if (deltaX > deltaY) {
			// prevent slide while scrolling vertically
			if (xCoordStart > xCoordEnd + xSlideTrigger) {
				slickElement.slick("slickNext");
			} else if (xCoordStart < xCoordEnd + xSlideTrigger) {
				slickElement.slick("slickPrev");
			}
		}
	});
	// New Modification
	$(() => {
		const codeVerification = $("#codeVerification");
		if (codeVerification.length > 0) {
			const body = $("body");

			function goToNextInput(e) {
				let key = e.which,
					t = $(e.target),
					sib = t.next("input");

				if (key != 9 && (key < 48 || key > 57)) {
					e.preventDefault();
					return false;
				}

				if (key === 9) {
					return true;
				}

				if (!sib || !sib.length) {
					sib = body.find(".cus__btn").removeClass("disabled");
				}
				sib.select().focus();
			}

			function onKeyDown(e) {
				let key = e.which;

				if (key === 9 || (key >= 48 && key <= 57)) {
					return true;
				}

				e.preventDefault();
				return false;
			}

			function onFocus(e) {
				$(e.target).select();
			}
			function buttonState() {
				$("input").each(function () {
					$(".cus__btn").addClass("disabled");
					if ($(this).val() == "") return false;
					$(".cus__btn").removeClass("disabled");
				});
			}

			$(function () {
				$(".cus__btn").addClass("disabled");
				$("input").change(buttonState);
			});
			body.on("keyup", "input", goToNextInput);
			body.on("keydown", "input", onKeyDown);
			body.on("click", "input", onFocus);
		}
	});

	// Cards Slider
	const cardsSlider = $(".cards__slider");
	if (cardsSlider.length > 0) {
		cardsSlider.slick({
			arrows: false,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	// Location Slider
	const LocationSlider = $(".location__slider");
	if (LocationSlider.length > 0) {
		LocationSlider.slick({
			arrows: false,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	// Header Slider
	const headerSlider = $(".header__slider");
	if (headerSlider.length > 0) {
		headerSlider.slick({
			arrows: false,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	// Section Slider
	const sectionHomeSlider = $(".section__home__slider");
	if (sectionHomeSlider.length > 0) {
		sectionHomeSlider.slick({
			arrows: false,
			dots: false,
			infinite: true,
			// fade: false,
			// autoplay: true,
			// autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}

	// Check form if fill
	const formNamePageFirst = $(".name__page .form form .form-group input").eq([
		0,
	]);
	const formNamePageLast = $(".name__page .form form .form-group input").eq([1]);
	const formNamePageEmail = $(".name__page .form form .form-group input").eq([
		2,
	]);
	formNamePageFirst.on("change", () => {
		formNamePageFirst.parent().find(".check__input").fadeIn();
	});
	formNamePageLast.on("change", () => {
		formNamePageLast.parent().find(".check__input").fadeIn();
	});
	formNamePageEmail.on("change", () => {
		formNamePageEmail.parent().find(".check__input").fadeIn();
	});

	// Open Close Address Modal
	const openAddressModal = $("#openAddressModal");
	const addressModal = $(".address__modal");
	const overlayAddress = $(".overlay__address");
	const closeAddressModal = $("#closeAddressModal");
	if (openAddressModal.length > 0) {
		openAddressModal.on("click", () => {
			addressModal.addClass("active");
			overlayAddress.addClass("active");
			closeAddressModal.addClass("active");
		});
	}
	closeAddressModal.on("click", () => {
		addressModal.removeClass("active");
		overlayAddress.removeClass("active");
		closeAddressModal.removeClass("active");
	});

	// Open Close Map Modal
	const openMapModal = $("#openMapModal");
	const mapModal = $(".map__modal");
	const overlayMap = $(".overlay__map");
	const closeMapModal = $("#closeMapModal");
	if (openMapModal.length > 0) {
		openMapModal.on("click", () => {
			mapModal.addClass("active");
			overlayMap.addClass("active");
			closeMapModal.addClass("active");
		});
	}
	closeMapModal.on("click", () => {
		mapModal.removeClass("active");
		overlayMap.removeClass("active");
		closeMapModal.removeClass("active");
	});
});
