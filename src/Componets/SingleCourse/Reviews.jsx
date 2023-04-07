import React from 'react'

export const  Reviews = () => {
  // let rateBox = Array.from(document.querySelectorAll(".rate-box"));
  // let globalValue = document.querySelector(".global-value");
  // let two = document.querySelector(".two");
  // let totalReviews = document.querySelector(".total-reviews");
  // let reviews = {
  //   5: 0,
  //   4: 2,
  //   3: 1,
  //   2: 0,
  //   1: 2,
  // };
  // updateValues();
  
  // function updateValues() {
  //   rateBox.forEach((box) => {
  //     let valueBox = rateBox[rateBox.indexOf(box)].querySelector(".value");
  //     let countBox = rateBox[rateBox.indexOf(box)].querySelector(".count");
  //     let progress = rateBox[rateBox.indexOf(box)].querySelector(".progress");
  //     console.log(typeof reviews[valueBox.innerHTML]);
  //     countBox.innerHTML = nFormat(reviews[valueBox.innerHTML]);
  
  //     let progressValue = Math.round(
  //       (reviews[valueBox.innerHTML] / getTotal(reviews)) * 100
  //     );
  //     progress.style.width = `${progressValue}%`;
  //   });
  //   totalReviews.innerHTML = getTotal(reviews);
  //   finalRating();
  // }
  // function getTotal(reviews) {
  //   return Object.values(reviews).reduce((a, b) => a + b);
  // }
  
  // document.querySelectorAll(".value").forEach((element) => {
  //   element.addEventListener("click", () => {
  //     let target = element.innerHTML;
  //     reviews[target] += 1;
  //     updateValues();
  //   });
  // });
  
  // function finalRating() {
  //   let final = Object.entries(reviews)
  //     .map((val) => val[0] * val[1])
  //     .reduce((a, b) => a + b);
  //     // console.log(typeof parseFloat(final / getTotal(reviews)).toFixed(1));
  //   let ratingValue = nFormat(parseFloat(final / getTotal(reviews)).toFixed(1));
  //   globalValue.innerHTML = ratingValue;
  //   two.style.background = `linear-gradient(to right, #66bb6a ${
  //     (ratingValue / 5) * 100
  //   }%, transparent 0%)`;
  // }
  
  // function nFormat(number) {
  //   if (number >= 1000 && number < 1000000) {
  //     return `${number.toString().slice(0, -3)}k`;
  //   } else if (number >= 1000000 && number < 1000000000) {
  //     return `${number.toString().slice(0, -6)}m`;
  //   } else if (number >= 1000000000) {
  //     return `${number.toString().slice(0, -9)}md`;
  //   } else if (number === "NaN") {
  //     return `0.0`;
  //   } else {
  //     return number;
  //   }
  // }
  

  return (
    <>
         <div class="container course_review_box">
         
         <div class="global">
        <span class="global-value">0.0</span>
        <div class="rating-icons">
          <span class="one"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
          <span class="two"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
        </div>
        <span class="total-reviews">0</span>
      </div>
      <div class="chart">
        <div class="rate-box">
          <span class="value">5</span>
          <div class="progress-bar">
            <span class="progress"></span>
          </div>
          <span class="count">0</span>
        </div>
        <div class="rate-box">
          <span class="value">4</span>
          <div class="progress-bar"><span class="progress"></span></div>
          <span class="count">0</span>
        </div>
        <div class="rate-box">
          <span class="value">3</span>
          <div class="progress-bar"><span class="progress"></span></div>
          <span class="count">0</span>
        </div>
        <div class="rate-box">
          <span class="value">2</span>
          <div class="progress-bar"><span class="progress"></span></div>
          <span class="count">0</span>
        </div>
        <div class="rate-box">
          <span class="value">1</span>
          <div class="progress-bar"><span class="progress"></span></div>
          <span class="count">0</span>
        </div>
      </div>
      
    </div>
    </>
  )
}
