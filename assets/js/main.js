/**
 * Minimal script for static portfolio page.
 * - Remove is-preload after load (enables transition)
 * - Set current year in footer
 * - Add is-mobile class for CSS background tweaks on small screens
 */
(function () {
	'use strict';

	// Remove preload class after load so CSS transitions can run
	window.addEventListener('load', function () {
		setTimeout(function () {
			document.body.classList.remove('is-preload');
		}, 100);
	});

	// Current year in copyright
	var yearEl = document.getElementById('current-year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	// Mobile: add/remove class so CSS can use scroll instead of fixed background (updates on resize)
	var mobileQuery = window.matchMedia('(max-width: 1152px)');
	function setMobileClass() {
		document.body.classList.toggle('is-mobile', mobileQuery.matches);
	}
	setMobileClass();
	mobileQuery.addEventListener('change', setMobileClass);
})();
