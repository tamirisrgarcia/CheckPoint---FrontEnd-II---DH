window.onload = () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inpName = document.querySelector('#name');
        const inpGener = document.querySelector('#gener');
        const inpRating = document.querySelector('#rating');
        const inpDescription = document.querySelector('#description');
        const inpImage = document.querySelector('#poster');

        const name = document.createElement('h2');
        const gener = document. createElement('p');
        const rating = document.createElement('p');
        const description = document.createElement('p');
        const img = document.createElement('img');
        img.classList.add('film_poster');
        

        
        name.appendChild(document.createTextNode(inpName.value));
        gener.appendChild(document.createTextNode(inpGener.value));
        rating.appendChild(document.createTextNode(inpRating.value));
        description.appendChild(document.createTextNode(inpDescription.value));  
        img.setAttribute('src', inpImage.value);

        const content = document.createElement('div');
        content.classList.add('content-output');

        content.appendChild(name);
        content.appendChild(gener);
        content.appendChild(rating);
        content.appendChild(description);        

        const item = document.createElement('div');
        item.classList.add('film_item');
        item.appendChild(img);
        item.appendChild(content);

        const list = document.querySelector('.output');
        list.appendChild(item);

        form.reset(); 
    })
}
