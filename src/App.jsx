
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./App.css";

function App() {
  let scrollList = [];
  for (let i = 1; i <= 15; i++) scrollList = [...scrollList, i];

  return (
    <Swiper
      slidesPerView="auto"
      loop={true}   // 무한 루프 설정
      spaceBetween={5}  // 요소 간 간격
      speed={5000}  // 요소 스크롤 속도
      simulateTouch={false} // 인터랙션 비활성화
      modules={[Autoplay]}
      autoplay={{
        delay: 0,   // 한 요소에서 다른 요소로 넘어갈 때 잠깐 멈추는 딜레이 없앰
        disableOnInteraction: false,  // 인터랙션 시 스크롤 멈추는 것 비활성화
      }}
    >
      {scrollList.map((scroll, index) =>
        <SwiperSlide
          key={index}
          className="bg-red-300 w-40 h-40 flex justify-center items-center text-white text-3xl">
          {scroll}
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default App