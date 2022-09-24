//data for holding which page we're on
let pageNumber = 0;

// content for the pages. [] is an array
const pages = [
 { copy: "a Singapore-based designer", background: "#edc7a9", circle: "#3e78ed" },
 { copy: "Beyonce's biggest fan", background: "#a1fffe", circle: " #e34a47" },
 { copy: "Looking for a job in October ", background: " #d3c7f3", circle: "#f7fe00" },
 { copy: `letting you <a href="pdf.pdf">download her pdf.</a>`, background: "#faffb8", circle: "#b472e6"}
]

//pick relevant tags
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

//make a next function to increase the page number
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};


// make prev section decrease page number
const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

//pick random slide
const random = function(){
  pageNumber = Math.floor (Math.random() * pages.length);

  updateSection();
}

//this will update section's content and style

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

//on click will run
nextTag.addEventListener("click", function () {
  next();
});

//on click of random tag, run this 
randomTag.addEventListener("click", function() {
  random();
})

previousTag.addEventListener("click", function () {
  previous();
});

// when a user presses a key, check for arrow left or right
// and do next or prev correctly 
document.addEventListener("keyup", function (event){
  console.log(event)

  //if key pressed is ArrowRight
  if (event.key == "ArrowRight") {
    next()
  }

    //if key pressed is ArrowLeft
    if (event.key == "ArrowLeft") {
      previous()
    }
})
