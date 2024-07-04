// ============= CURRENT YEAR ===========
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// ============ COUNTRY DROPDOWN ============

$(document).ready(function () {
  var instance = $("[name=phone_no]").intlTelInput({
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
    initialCountry: "ca", // Set Canada as the default country
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "us";
        success(countryCode);
      });
    },
  });

  $("[name=phone_no]").on("blur", function () {
    var countryData = instance.intlTelInput("getSelectedCountryData");
  });
});

// ============ FROM INPUT ==============

function handleFormSubmit(event, formId, index) {
  event.preventDefault();
  const form = document.getElementById(formId);
  // Clear input fields
  const formData = new FormData(form);
  // Check if all required fields are filled
  let isValid = true;
  formData.forEach((value, key) => {
    if (!value.trim()) {
      isValid = false;
      const label = document.querySelector(`label[for="${key}"]`);
      if (label) {
        label.classList.add("error");
      }
    }
  });
  if (!isValid) {
    return;
  }
  // Print values to console
  // formData.forEach((value, key) => {
  //   console.log(key + ":", value);
  // });
  form.reset();
  const modal = document.querySelector(".modal");
  const modalInstance = bootstrap.Modal.getInstance(modal); // Get the Bootstrap modal instance
  modalInstance.hide(); // Close the modal
}

// ============== BACK TO TOP ===================
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 150) {
      scrollToTopButton.style.display = "flex";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }

  // Add event listener for scroll
  window.addEventListener("scroll", handleScroll);

  // Check initial scroll position
  handleScroll();

  // Add event listener for scroll-to-top button click
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
// TOST SCRIPT
function showTostHandler() {
  Toastify({
    text: "Please Sign-up in order to add a comment.",
    duration: 3000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#4cc973",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// Run the following code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("commentInput");
  const submitButton = document.getElementById("submitButton");
  const form = document.getElementById("commentForm");

  // Function to handle input events on the input field
  function handleInput(event) {
    if (event.target.value.trim() === "") {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  // Function to handle form submission events
  function handleSubmit(event) {
    event.preventDefault();
    if (inputField.value.trim() !== "") {
      showTostHandler();
      inputField.value = "";
      submitButton.disabled = true;
    }
  }

  // Attach the handleInput function to the input event on the input field
  inputField.addEventListener("input", handleInput);
  // Attach the handleSubmit function to the submit event on the form
  form.addEventListener("submit", handleSubmit);
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle mute and change icon
  function toggleMute(videoId, iconId) {
    var video = document.getElementById(videoId);
    var icon = document.getElementById(iconId);
    var iconhero = soundIcon4.querySelector(".hero_sound_icon");
    const soundText = soundIcon4.querySelector(".hero_sound");

    if (video.muted) {
      video.muted = false;
      icon.src = "/assets/images/success-story/sound.svg";
      // document.querySelector(".hero_video_btn").classList.add("opacity_0");
      iconhero.src = "/assets/images/success-story/sound.svg";
      soundText.textContent = "Mute";
    } else {
      video.muted = true;
      icon.src = "/assets/images/success-story/unmute.svg";
      // document.querySelector(".hero_video_btn").classList.remove("opacity_0");
      iconhero.src = "/assets/images/success-story/unmute.svg";
      soundText.textContent = "Unmute";
    }
  }

  // Add event listeners to sound icons
  document.getElementById("soundIcon1").addEventListener("click", function () {
    toggleMute("video1", "soundIcon1");
  });

  document.getElementById("soundIcon2").addEventListener("click", function () {
    toggleMute("video2", "soundIcon2");
  });

  document.getElementById("soundIcon3").addEventListener("click", function () {
    toggleMute("video3", "soundIcon3");
  });
  document.getElementById("soundIcon4").addEventListener("click", function () {
    toggleMute("video4", "soundIcon4");
  });

  // Intersection Observer for autoplay on view
  var observerOptions = {
    threshold: 0.5,
  };

  var observerCallback = function (entries, observer) {
    entries.forEach((entry) => {
      var video = entry.target;
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  };

  var observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all video elements
  document.querySelectorAll(".story_video, #video4").forEach((video) => {
    observer.observe(video);
  });
});

document.querySelectorAll(".accordion-item").forEach((item) => {
  item.addEventListener("click", function () {
    const isActive = item.classList.contains("accordion_shadow");

    // Remove the accordion_shadow and accordion_border classes from all items
    document.querySelectorAll(".accordion-item").forEach((innerItem) => {
      innerItem.classList.remove("accordion_shadow");
      innerItem.classList.add("accordion_border");
    });

    if (!isActive) {
      // Use setTimeout to allow the browser to update the collapsed class before checking it
      setTimeout(() => {
        var button = item.querySelector(".accordion-button");
        if (!button.classList.contains("collapsed")) {
          item.classList.add("accordion_shadow");
          item.classList.remove("accordion_border");
        }
      }, 0);
    }
  });
});
