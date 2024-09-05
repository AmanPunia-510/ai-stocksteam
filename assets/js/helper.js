// ================ REVIEW SLIDER CARD DATA
const reviews = [
  {
    title: "Michael Chen",

    invested: 350,
    stars: "./assets/images/success-story/slide-stars.png",
    profit: 4891,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/michael-chen-profile.webp",
  },
  {
    title: "David Clark",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 2000,
    profit: 1368.23,
    description:
      "The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.",
    imageUrl: "./assets/images/arbitrage-winner/david-clark.png",
  },
  {
    title: "Robert Thompson ",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 30000,
    profit: 8126,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/robert.webp",
  },
  {
    title: "Michelle Wright",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 350,
    profit: 5236.73,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/michaelle.png",
  },
  {
    title: "Michael Chen",

    invested: 350,
    stars: "./assets/images/success-story/slide-stars.png",
    profit: 4891,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/michael-chen-profile.webp",
  },
  {
    title: "David Clark",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 2000,
    profit: 1368.23,
    description:
      "The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.",
    imageUrl: "./assets/images/arbitrage-winner/david-clark.png",
  },
  {
    title: "Robert Thompson ",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 30000,
    profit: 8126,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/robert.webp",
  },
  {
    title: "Michelle Wright",
    stars: "./assets/images/success-story/slide-stars.png",
    invested: 350,
    profit: 5236.73,
    description:
      "“The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly.”",
    imageUrl: "./assets/images/arbitrage-winner/michaelle.png",
  },
];
// Function to generate a review card
function generateReviewCard(review) {
  return `
    <div class="swiper-slide">
    <div class="slider_box">
    <div class="d-flex flex-column  justify-start  gap_24">
      <div class="d-flex flex-column justify-start gap_24">
  <div class="d-flex w-100 align-items-center">
    <img class="slider_profile_img rounded-pill object-fit-cover" sizes="100vw"
         src="${review.imageUrl}" alt="${review.title}">
    <div class="d-flex flex-column ms-2 ps-1">
      <p class="fw-semibold ff_roboto text_rich_black mb-0">${review.title}</p>
      <img class="slider_stars" src="${review.stars}" alt="Stars"/>
    </div>
  </div>

          <div>
              <div class="d-flex flex-column justify-content-between mt-md-0">
                  <div>
                   <p  class="leading_150 fs_base text-black fw-semibold opacity_07 mb-0">Review</p>
                    </div>
                  </div>
                  <p class="leading_150 fs_base text-black opacity_07 mt-3 mb-0"> ${review.description}</p>
                </div>
              </div>
              <div><p class="text_light_green ff_roboto mb-0 fw-black opacity_07">Invested <span class=
              "text_rich_black ">350 CAD</span></p>
              <p class="text_light_green ff_roboto fw-black opacity_07"> Profit:<span class="text_rich_black "> 3,784 CAD </span></p></div>

              
    </div>
  </div>
  </div>
`;
}
// Function to render the review cards
function renderReviewCards() {
  const reviewSlider = document.getElementById("review-slider");
  reviewSlider.innerHTML = reviews.map(generateReviewCard).join("");
}
// Call the function to render the review cards
renderReviewCards();
