// когато се извика changeImage(this), в select параметъра ще имаме element object за съответния select елемент
function changeImage(select) {
	// "взимаме" value стойността на избрания option:
	let imagePath = select.value;

	// трябва да вземем съответния img element object. Можем да изпозлваме DOM пропъртита за навигиране в DOM дървото
	// https://www.w3schools.com/jsref/prop_node_parentelement.asp
	// https://www.w3schools.com/jsref/prop_node_previoussibling.asp
	const img = select.parentElement.previousElementSibling.children[0];
	// console.log(img);

	// сега можем лесно да променим стойността на src атрибута с imagePath:
	img.src = imagePath;
}
