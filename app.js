window.addEventListener('load', function (){
    console.log('page is loaded');

    let button_poke = document.getElementById("poke-me");
    let button = document.getElementById('bird-input');
    
     

    button_poke.addEventListener('click', () => {
        console.log("This is clicked.");

        let birdImage = document.getElementById("flying-birds");
        console.log(birdImage);
   
        if (birdImage.style.display=="none"){
    
            birdImage.style.display="inline"
         } else {
            birdImage.style.display = "none"; }
    

    button.addEventListener(('onchange'), function() {
        let inputText = document.getElementById('bird-input').value;
        console.log("This is clicked.");

        fetch('birdtry.json')
            .then(response => response.json())
            .then(data => {
                let headingElement = document.getElementById('b-name');
                
                console.log("input text is ", inputText);
                // console.log("This is my ", data);
                // console.log("This is the size of my json: ", data.length);
                
                for(let i = 0; i < data.length; i++){
                    // console.log(data[i].name);
                    if (data[i].name === inputText){
                        console.log("It's a match!");

                        //What happens if it's a match
                        let imageElement = document.getElementById('b-img');
                        imageElement.src = data[i].url;

                    } else {
                        // console.log("It is not a match.");
                        //What happen if it's not!
                    }
                }
                //headingElement.innerHTML = birdArray[inputText].name;
            })
        
        let frame = 0
        let gonextButton = document.getElementById('go_next');
        gonextButton.addEventListener('click', function () {
            console.log('Great Flamingo');
            fetch('birdtry.json')
                .then(Response => Response.json())
                .then(data => {
                    console.log(data);
                    let birdArray = data.results;
                    let imageElement = document.getElementById('imgp2');
                    imageElement.src = birdArray[frame].url;
                })
            frame = (frame + 1) % 5;
        })

    })
    const cursor = document.querySelector('.cursor');

})})