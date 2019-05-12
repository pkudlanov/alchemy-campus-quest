const questApi = {
    createQuestLink(quest){
        const link = document.createElement('a');
        link.classList.add('quest');
        
        const image = document.createElement('img');
        
        const imageLocation = './assets/' + quest.image;
        image.setAttribute('src', imageLocation);
        image.setAttribute('alt', quest.imageAlt);
        image.setAttribute('width', '300px');
        link.appendChild(image);
        
        const searchParams = new URLSearchParams();
        searchParams.set('id', quest.id);
        link.href = 'quest.html?' + searchParams.toString();
        
        return link;
    }
    createCompletedTest(){

    }
};

export default questApi;
