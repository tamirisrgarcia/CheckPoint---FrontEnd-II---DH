window.onload = () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inpName = document.querySelector('#name');
        const inpGender = document.querySelector('#gender');
        const inpRating = document.querySelector('#rating');
        const inpDescription = document.querySelector('#description');
        const inpImage = document.querySelector('#poster');

        const name = document.createElement('h2');
        const gender = document.createElement('p');
        const rating = document.createElement('p');
        const description = document.createElement('p');
        const img = document.createElement('img');
        img.classList.add('film_poster');
        
        name.appendChild(document.createTextNode('Nome do filme: ' + inpName.value));
        gender.appendChild(document.createTextNode('Gênero: ' + inpGender.value));
        rating.appendChild(document.createTextNode('Nota: ' + inpRating.value));
        description.appendChild(document.createTextNode('Descrição: ' + inpDescription.value));

        img.setAttribute('src', inpImage.value);

        const content = document.createElement('div');

        content.appendChild(name);
        content.appendChild(gender);
        content.appendChild(rating);
        content.appendChild(description);        

        const item = document.createElement('div');
        item.classList.add('film_item');
        item.appendChild(img);
        item.appendChild(content);

        const list = document.querySelector('.output');
        list.style.display = 'block';
        list.appendChild(item);

        form.reset(); 
    })
}
