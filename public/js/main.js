const menuBtn = document.querySelector(".menu-btn");
const hamburgerBtn = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelector(".nav-link");

let showMenu = false;

const toggleHamburger = () => {
	if (!showMenu) {
		hamburgerBtn.classList.add("open");
		nav.classList.add("open");
		navMenu.classList.add("open");
		navItem.forEach((item) => item.classList.add("open"));
		showMenu = true;
	} else {
		hamburgerBtn.classList.remove("open");
		nav.classList.remove("open");
		navMenu.classList.remove("open");
		navItem.forEach((item) => item.classList.remove("open"));
		showMenu = false;
	}
};

menuBtn.addEventListener("click", toggleHamburger);

const activePage = window.location.pathname;
const menuItems = document.querySelectorAll(".nav-item a").forEach((link) => {
	if (link.href.includes(`${activePage}`)) {
		link.classList.add("active");
	}
});

const headerEl = document.querySelectorAll(".programs");
const headerText = () => {
	if (window.scrollY > 561) {
		headerEl.forEach((item) => item.classList.add("open"));
	} else {
		headerEl.forEach((item) => item.classList.remove("open"));
	}
};

window.addEventListener("scroll", headerText);
