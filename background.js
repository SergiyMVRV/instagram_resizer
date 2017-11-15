window.onload = resize;
window.onpopstate = resize;
window.addEventListener("resize", function(){setTimeout(resize, 100)});

document.addEventListener("click", function(){setTimeout(resize, 500)});

function resize() {
	const windowSize = {
		windowWidth : window.innerWidth,
		windowHeight : window.innerHeight,
	}
	windowSize.defaultStatus = (windowSize.windowWidth < 1200 || windowSize.windowHeight < 700);
	windowSize.defaultStyleWidth = '935px';

	const screenStyles = {
		newsFeedScreen : document.querySelector('._owark'),
		singlePostScreen : document.querySelector('._4xng7'),
		galleryPopup : document.querySelector('._784q7')
	}

	if (screenStyles.newsFeedScreen) {
		screenStyles.newsFeedScreen.style.maxWidth = (windowSize.windowHeight - 250) + 'px';
		return;
	}

	if (screenStyles.singlePostScreen) {
		adjustSinglePagePhoto(windowSize, screenStyles);
		return;
	}

	if (screenStyles.galleryPopup) {
		adjustPopupGallery(windowSize, screenStyles);
	} return

	setTimeout(resize, 1000);

}

function adjustSinglePagePhoto(windowSize, screenStyles) {
	if (windowSize.defaultStatus) {
		screenStyles.singlePostScreen.style.maxWidth = windowSize.defaultStyleWidth;
	} else {
			screenStyles.singlePostScreen.style.maxWidth = '80%';
			for (var i = 70, heightLimit = windowSize.windowHeight - 40; screenStyles.singlePostScreen.offsetHeight > heightLimit; i -= 10) {
					screenStyles.singlePostScreen.style.maxWidth = i + '%';
		}
	}
}

function adjustPopupGallery(windowSize, screenStyles) {
	console.log('popup runs');
		if (windowSize.defaultStatus) {
			screenStyles.galleryPopup.style.maxWidth = windowSize.defaultStyleWidth;
		}

		else {
			screenStyles.galleryPopup.style.maxWidth = '80%';
			document.querySelector('._1se52').style.maxWidth = '90%';
			for (var i = 70; screenStyles.galleryPopup.offsetHeight > windowSize.windowHeight - 60; i-= 10) {
				screenStyles.galleryPopup.style.maxWidth = i + '%';
			}
		}
	}
