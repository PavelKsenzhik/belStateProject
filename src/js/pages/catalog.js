function accordionInit (event) {
    const target = event.target;

    
    
    // Find parent
    let docBody = target.parentElement;

    while(!docBody.classList.contains('accordion__item')) {
        if(docBody.classList.contains('accordion__content')) {
            return
        }
        docBody = docBody.parentNode;
    }

    
    // Toggle class and chang styles for content
    docBody.classList.toggle('_active');
    docBody.querySelector('.accordion__img').classList.toggle('_active')
    const content = docBody.querySelector('.accordion__content');
    content.classList.toggle('_active');
    if(content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

window.onload = function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', accordionInit)
    })
}

