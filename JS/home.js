var imgList = Array.from( document.querySelectorAll('.item img'));
var lightboxcontainer = document.getElementById('lightboxcontainer');
var closebtn = document.getElementById('closebtn');
var currentSlideIndex = 0;
for(var i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click', function(eventInfo){
      lightboxcontainer.style.display = "flex";
      var currentSlideIndex = imgList.indexOf(eventInfo.target);
      var imgSource = eventInfo.target.getAttribute('src');
      lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSource})`;
    })
}
function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex==imgList.length){
        currentSlideIndex=0;
    }
    var imgSource = imgList[currentSlideIndex].getAttribute('src');
    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSource})`;
}
function previousSlide(){
    currentSlideIndex--;
    if(currentSlideIndex < 0){
        currentSlideIndex= imgList.length-1;
    }
    var imgSource = imgList[currentSlideIndex].getAttribute('src');
    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSource})`;
}
closebtn.nextElementSibling.addEventListener('click', nextSlide);
closebtn.previousElementSibling.addEventListener('click', previousSlide);
