



special.addEventListener('click', function toggleSpecial(){
    let image = document.getElementById('image');
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    title.textContent = "Special Events";
    text.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you    We’ll be sure to mark your special date with an unforgettable meal.";
    image.setAttribute('src', './assets/images/homepage/special-events-desktop.jpg');

});
let social = document.getElementById('social')

social.addEventListener('click', function toggleSocial(){
    let image = document.getElementById('image');
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    title.textContent = "Social Events";
    text.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
    image.setAttribute('src', './assets/images/homepage/social-events-desktop.jpg');
});

let gathering = document.getElementById('gathering')

gathering.addEventListener('click', function toggleGathering(){
    let image = document.getElementById('image');
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    title.textContent = "Family Gathering";
    text.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all";
    image.setAttribute('src', './assets/images/homepage/family-gathering-desktop.jpg');
});