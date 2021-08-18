gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('._mediashark-an')) {
	let mediashark = gsap.timeline({
		scrollTrigger: {
			trigger: "._mediashark-an",
			scrub: true,
			pin: true,
			start: "top top",
			end: "+=100%"
		}
	});

	mediashark.from(".letter-1", { translateX: -500, translateY: -500, rotate: 180, ease: "none" }, 0)
		.from(".letter-2", { translateX: -300, translateY: -700, rotate: 260, ease: "none" }, 0)
		.from(".letter-3", { translateX: 100, translateY: -300, rotate: 160, ease: "none" }, 0)
		.from(".letter-4", { translateX: 500, translateY: -200, rotate: 360, ease: "none" }, 0)
		.from(".letter-5", { translateX: 1000, translateY: 200, rotate: 260, ease: "none" }, 0)
		.from(".letter-6", { translateX: 300, translateY: 500, rotate: 260, ease: "none" }, 0)
		.from(".letter-7", { translateX: 300, translateY: 700, rotate: 260, ease: "none" }, 0)
		.from(".letter-8", { translateX: 600, translateY: 1000, rotate: 260, ease: "none" }, 0)
		.from(".letter-9", { translateX: 1000, translateY: 500, rotate: 260, ease: "none" }, 0)
		.from(".letter-10", { translateX: 400, translateY: 300, rotate: 260, ease: "none" }, 0)
}

// Work
if (document.querySelector('.work-row')) {
	let workRowItem = gsap.utils.toArray(".work-row__item");

	gsap.to(workRowItem, {
		xPercent: -100 * (workRowItem.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".work-row",
			pin: true,
			scrub: 1,
			snap: directionalSnap(1 / (workRowItem.length - 1)),
			// base vertical scrolling on how wide the container is so it feels more natural.
			end: "+=3500"
		}
	});
}

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
function directionalSnap(increment) {
	let snapFunc = gsap.utils.snap(increment);
	return (raw, self) => {
		let n = snapFunc(raw);
		return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
	};
}

const partners = gsap.utils.toArray('.partners-col');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
	loader.textContent = `${Math.round(instance.progressedCount * 100 / partners.length)}%`;

const showDemo = () => {
	document.body.style.overflow = 'auto';
	document.scrollingElement.scrollTo(0, 0);
	gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

	gsap.utils.toArray('.partners-box').forEach((section, index) => {
		const w = section.querySelector('.partners-slider');
		const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
		gsap.fromTo(w, { x }, {
			x: xEnd,
			scrollTrigger: {
				trigger: section,
				scrub: 1,
			}
		});
	});
}

imagesLoaded(partners).on('progress', updateProgress).on('always', showDemo);

