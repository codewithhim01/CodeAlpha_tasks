
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener('click',()=>{

        lightbox.style.display='flex';
        lightboxImg.src = img.src;
        currentIndex = index;

    });

});

/* Close Lightbox */

document.querySelector('.close').addEventListener('click',()=>{

    lightbox.style.display='none';

});

/* Next Button */

document.getElementById('next').addEventListener('click',()=>{

    currentIndex = (currentIndex + 1) % galleryImages.length;

    lightboxImg.src = galleryImages[currentIndex].src;

});

/* Prev Button */

document.getElementById('prev').addEventListener('click',()=>{

    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    lightboxImg.src = galleryImages[currentIndex].src;

});



function filterSelection(category){

    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item=>{

        if(category === 'all'){
            item.style.display='block';
        }

        else if(item.classList.contains(category)){
            item.style.display='block';
        }

        else{
            item.style.display='none';
        }

    });

}