const service = document.querySelectorAll(".services div")
const checkBtn = document.querySelector(".check-btn")
const dateCheckIn = document.querySelector(".check-in-btn")
const dateCheckOut = document.querySelector(".check-out-btn")
const adultNum = document.querySelector(".adult-value")
const childrenNum = document.querySelector(".children-value")

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function getServiceData() {
  const response = await fetch("http://127.0.0.1:8081/services").then((data) => { return data.json() })

  for (let i = 0; i < response.obj.length; i++) {
    service[i].querySelector('.service-image').setAttribute('src', `${response.obj[i].imageUrl}`)
    service[i].querySelector('.service-subtitle').textContent = `${response.obj[i].subTitle}`
    service[i].querySelector('.service-title').textContent = `${response.obj[i].heading}`
    service[i].querySelector('.content').textContent = `${response.obj[i].content}`
  }
}

getServiceData();

async function getBannerData() {
  const bannerData = await fetch("http://127.0.0.1:8081/banner").then((data) => { return data.json() })
  document.querySelector('.banner').style.backgroundImage = `url(${bannerData.bannerObj.imageUrl})`
  document.querySelector('.banner-title').textContent = `${bannerData.bannerObj.bannerHeading}`
  document.querySelector('.banner-subtitle').textContent = `${bannerData.bannerObj.bannerContent}`
}

getBannerData();

async function getCarouselData() {
  const carouselData = await fetch("http://127.0.0.1:8081/carousel").then((data) => { return data.json() })
  // console.log(carouselData);
  // document.querySelector('.banner').style.backgroundImage=`url(${bannerData.bannerObj.imageUrl})`
}

getCarouselData();

async function bookStay() {
  const bookData = await fetch("http://127.0.0.1:8081/bookHotel").then((data) => { return data.json() })
  // console.log(bookData);
  // document.querySelector('.banner').style.backgroundImage=`url(${bannerData.bannerObj.imageUrl})`
}

bookStay();

async function postFormData(data) {
  const response = await fetch("http://127.0.0.1:8081/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

checkBtn.onclick = (e) => {
  e.preventDefault();

  formObj = {
    checkInDate: dateCheckIn.value,
    checkOutDate: dateCheckOut.value,
    adult: adultNum.options[adultNum.selectedIndex].text,
    children: childrenNum.options[childrenNum.selectedIndex].text,
  }

  postFormData(formObj)
    .then((data) => {
      console.log(data);
    });
}




