// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display= "none";
})

/*navbar buttons */

let menuToggle = document.querySelector('.menuToggle'); /*assigin value */
let header = document.querySelector('header');
menuToggle.onclick = function() {
    header.classList.toggle("active");
}

// activating buttons

// Function to smoothly scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }
  }
  
  // Event listener for navbar links
  document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const sectionId = this.getAttribute('href');
      scrollToSection(sectionId);
    });
  });
  

/*Typewriter in welcome page */

function startTypewriter() {
    const text = "Software Engineer";
    let index = 0;
    let speed = 300; // Adjust the speed of typing (in milliseconds)
    const typewriter = document.getElementById("typewriter");

    function typeWriterForward() {
        typewriter.textContent += text.charAt(index);
        index++;
        if (index === text.length) {
            setTimeout(typeWriterReverse, 500); // Wait for 1 second before reversing
        } else {
            setTimeout(typeWriterForward, speed);
        }
    }

    function typeWriterReverse() {
        typewriter.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            setTimeout(typeWriterForward, 500); // Wait for 1 second before typing again
        } else {
            setTimeout(typeWriterReverse, speed);
        }
    }

    // Start with forward typing
    typeWriterForward();
}

// Start the typewriter initially
startTypewriter();

//resume download
document.getElementById('reaume-button').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/drive/folders/1kpw8wlXA9kjqxvTfiAuV7-JZE4_XPOiP?usp=sharing';
});

//project-button
document.getElementById('project-button').addEventListener('click', function() {
    window.location.href = 'https://github.com/Madhusudan1712/driver-drowsiness-and-yawn-detection-system';
});

//internship-button
document.getElementById('internship-button').addEventListener('click', function() {
    window.location.href = 'https://github.com/Madhusudan1712/Market-segmentation-for-online-healthcare-provider-using-Indian-census/tree/main';
});




// certifications
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}


//message box
function Send() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Contact").value;
    var sub = document.getElementById("subject").value;
    var mess = document.getElementById("message").value;
  
    // Validation for Name - only text allowed with at least 3 characters
    var nameRegex = /^[A-Za-z ]{3,}$/;
    if (!nameRegex.test(name)) {
        swal("Invalid Name", "Please enter a valid name with at least 3 characters", "error");
        return;
    }
  
    // Validation for Email - valid email format
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        swal("Invalid Email", "Please enter a valid email address", "error");
        return;
    }
  
    // Validation for Contact - 10 digits only
    var contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) {
        swal("Invalid Contact", "Please enter a 10-digit contact number", "error");
        return;
    }
  
    // Validation for Subject - only text allowed
    var subjectRegex = /^[A-Za-z ]+$/;
    if (!subjectRegex.test(sub)) {
        swal("Invalid Subject", "Please enter a valid subject", "error");
        return;
    }
  
    // Validation for Message - at least 20 characters
    if (mess.length < 20) {
        swal("Invalid Message", "Please enter at least 20 characters for the message", "error");
        return;
    }
  
    // Proceed with sending email if all validations pass
    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact No: " + contact + "<br/> Message: " + mess;
    console.log(body);
  
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "madhusudan.ks1712@gmail.com",
        Password: "3974C432C90B4628D05ABF9C75233A94AF8D",
        To: 'madhusudan.ks1712@gmail.com',
        From: "madhusudan.ks1712@gmail.com",
        Subject: "Portfolio Viewer message",
        Body: body + "<br/> @ From portfolio"
    }).then(
        message => {
            if (message === 'OK') {
                swal("Successful", "Your Data Successfully Received", "success");
            } else {
                swal("Something Wrong", "Your Data is not Received and Please enter valid information", "error");
            }
        }
    );
  }


// animation
// Function to handle animations
function handleAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add the animation class here
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }
  
  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.3 // Percentage of intersection at which to trigger animation
  };
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleAnimation, options);
  
  // Select the elements you want to animate
  const elementsToAnimate = document.querySelectorAll('.introduction-div, .introduction-div2, .skill-div, .timeline, .project-internship-section, .mini-projects, .slider, .container-aa');
  
  // Observe each selected element
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
  


  // scroll button

document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.querySelector('.scroll-btn');
  
    // Show scroll button initially
    scrollBtn.classList.add('active');
  
    // Hide scroll button after 5 seconds if not used
    let timeout;
    const hideScrollBtn = () => {
      timeout = setTimeout(() => {
        scrollBtn.classList.remove('active');
      }, 5000);
    };
  
    hideScrollBtn();
  
    // Scroll to top when the button is clicked
    scrollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      clearTimeout(timeout);
      scrollBtn.classList.remove('active');
      hideScrollBtn();
    });
  
    // Show scroll button again when scrolling
    window.addEventListener('scroll', () => {
      clearTimeout(timeout);
      scrollBtn.classList.add('active');
      hideScrollBtn();
    });
  });
  