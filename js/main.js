
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


   async function getData(){
    const response = await fetch("http://127.0.0.1:8081/" ).then((data)=> {return data.json()})
    console.log(response);

    for(let i=0; i<response.obj.length;i++){
      console.log(response.obj[i]);
    }

  }

getData();

  