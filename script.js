document.addEventListener('DOMContentLoaded', function () 
{
    const searchInput = document.querySelector('.search-bar');   
    const typeBoxes = document.querySelectorAll('.type-box');   

    searchInput.addEventListener('keydown', function (event) 
    {
        if (event.key === 'Enter') 
        {   
            event.preventDefault();   
            const query = searchInput.value.toLowerCase();   

            let matchFound = false;
            typeBoxes.forEach(function (box) 
            {
                const title = box.querySelector('.option') || box.querySelector('.list-header');   
                const content = box.querySelector('.description') || box.querySelector('.list-description');   

                const textContent = (title.textContent + " " + (content ? content.textContent : "")).toLowerCase();

                if (textContent.includes(query)) 
                {
                    if (!matchFound) 
                    {
                        box.scrollIntoView({
                            behavior: 'smooth',  
                            block: 'start',      
                        });
                        matchFound = true;  
                    }
                }
            });
        }
    });
});
