const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// var i = 0;
// var txt =
//   'Thank you again for your interest in my portfolio site. I look forward to hearing from you!"';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typer").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   } else {
//     document.getElementById("typer").innerHTML = "";
//     i = 0;
//   }
// }

// typeWriter();

function openModel(x) {
  $("#model_image").attr("src", "./images/project-" + x + ".png");
  $("#model").modal("show");
  $("#model").click(function () {
    $("#model").modal("hide");
    $("#model_image").attr("src", "");
  });
}

function setwarning() {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "This area is still under development",
    showConfirmButton: false,
  });
}
