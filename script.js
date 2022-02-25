

// const tl = new TimelineMax()






// tl.fromTo('.slider', 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut} )


// const tl = gsap.timeline({defaults: { ease: "power1.out" } })








tl.to(".text", {y:"0%", duration: 1, stagger: 0.25 })
tl.to('.slider', {y: '-100%', duration: 1.5, delay: .3 })
tl.to('.intro', {y: '-100%', duration: 1}, '-=2')
tl.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 1 }, '-=1')

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1 }, '-=.4')

tl.fromTo('.lastFade', {opacity: 0}, {opacity: 1, duration: 2 }, '-=.3')













// tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1 }, '-=.3')
// tl.fromTo('.gridContainer', {y:'-100%', duration: 1, stagger: 0.25})


// ONLY TILL HERE.........
// tl.fromTo('.gridItem1', {opacity: 0}, {opacity: 1, duration: 2 }, '-=1')
// tl.fromTo('.gridItem2', {opacity: 0}, {opacity: 1, duration: 2 }, '-=1.5')
// tl.fromTo('.gridItem3', {opacity: 0}, {opacity: 1, duration: 2 }, '-=1.5')
// tl.fromTo('.gridItem4', {opacity: 0}, {opacity: 1, duration: 2 }, '-=1.5')
// tl.fromTo('.gridItem5', {opacity: 0}, {opacity: 1, duration: 2 }, '-=.7')
// tl.fromTo('.gridItem6', {opacity: 0}, {opacity: 1, duration: 2 }, '-=.7')

 



// tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1 })
// tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1 }, '-=1')
// tl.fromTo('.gridContainer', {opacity: 0}, {opacity: 1, duration: 1 }, '-=1')





 const lightDark = document.querySelector('#lightDark')
 const lightDarkPara = document.querySelector('#lightDark p')



 lightDark.onclick = function(){
	 document.body.classList.toggle('lightTheme')
	 if(document.body.classList.contains('lightTheme')){
		lightDarkPara.innerText = 'Dark'
	 }
	 else {
		lightDarkPara.innerText = 'Light'
	 }
	}
 





	// let tlOne = new TimelineMax({onUpdate:updatePercentage})
	// // let tlTwo = new TimelineMax()

	// const controller = new ScrollMagic.Controller()

	// // tlOne.from("h2", .5, {opacity: .1} )
	// tlOne.from("#yourPhoto", .5, {opacity: .1}, '=-1')
	// tlOne.from("#paragraph", .5, {opacity: .1}, '=-7')


	// // tlTwo.to('h2', 1, {opacity: .1})


	// const scene = new ScrollMagic.Scene({
	// 	triggerElement:'.about',
	// 	triggerHook: 'onLeave',
	// 	duration: '100%'
	// })

	// .setPin('.about')
	// .setTween(tlOne)
	// .addTo(controller)

	// // const sceneTwo = new ScrollMagic.Scene({
	// // 	triggerElement:'.about'

	// // })

	// // .setTween(tlTwo)
	// // .addTo(controller)


	// function updatePercentage() {
	// 	tlOne.progress()
	// 	console.log(tlOne.progress())
	// }




	const mainMenu = document.querySelector('.mainMenu')
	const closeMenu = document.querySelector('.closeMenu')
	const openMenu = document.querySelector('.openMenu')
	const homeLinks = document.querySelector('#homeLinks')
	const projectsLinks = document.querySelector('#projectsLinks')
	const aboutLinks = document.querySelector('#aboutLinks')
	const skillsLinks = document.querySelector('#skillsLinks')
	const contactLinks = document.querySelector('#contactLinks')

	function show(){
		mainMenu.style.display = 'flex'
		mainMenu.style.top = '0'

	}

	function close(){
		mainMenu.style.top = '-100%'
	}

	function toSection(){
		mainMenu.style.top = '-100%'
	}

	openMenu.addEventListener('click', show)
	closeMenu.addEventListener('click', close)
	homeLinks.addEventListener('click', close)
	projectsLinks.addEventListener('click', toSection)
	aboutLinks.addEventListener('click', toSection)
	skillsLinks.addEventListener('click', toSection)
	contactLinks.addEventListener('click', toSection)



