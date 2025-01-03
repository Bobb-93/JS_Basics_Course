// get all section object and attach click events to them:
const sections = document.querySelectorAll('section');
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    section.addEventListener('click', function (e) {
        // get article object in current section:
        const article = section.querySelector('article');

        // toglle class="visible":
        article.classList.toggle('visible');
    })

}