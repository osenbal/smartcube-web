import { ParallaxBanner } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import Reveal, { Slide, Fade } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import './App.css';

const customAnimationTopToBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationLeftToRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationRightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function App() {
  return (
    <>
      <main>
        <div className="flex w-[100vw] h-screen">
          <ParallaxBanner
            layers={[
              {
                image: '/images/thumbs/thumb_jumbotron.jpg',
                speed: 20,
              },
              {
                speed: -15,
                children: (
                  // overlay background
                  <div className="absolute w-full h-full bg-black opacity-50" />
                ),
              },
              {
                speed: -15,
                children: (
                  <div className="absolute flex flex-col text-white gap-y-2 justify-center items-center w-full h-full">
                    <img
                      src="/Logo.png"
                      alt="logo smartcube"
                      className="w-20 h-20"
                    />
                    <h1 className="text-[2.5em] font-bold">Smartcube</h1>
                    <span className="text-2xl">Protect your life</span>
                  </div>
                ),
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <div className="w-screen md:max-w-[980px] mx-auto">
          <div className="flex relative justify-center h-screen">
            <ParallaxBanner
              layers={[
                {
                  image: '/images/thumbs/thumb_jumbotron.jpg',
                  speed: 0.1,
                  className:
                    'ms-auto align-end h-screen md:w-[500px] object-cover',
                },
                {
                  speed: -15,
                  children: (
                    // overlay background
                    <div className="absolute w-full h-full bg-black opacity-50 md:hidden block" />
                  ),
                },
                {
                  speed: -15,
                  style: {
                    inset: '0px',
                  },
                  children: (
                    <div className="flex flex-col md:flex-row gap-16 h-screen justify-center md:justify-between items-center">
                      <div className="max-w-[450px] px-4 align-start flex flex-col gap-y-4 order-2 md:order-1 text-center md:text-start text-white md:text-dark">
                        <p className="font-semibold text-4xl">
                          What is Smartcube ?
                        </p>
                        <p>
                          Smartcube is a security product that can identify
                          fires early. It is powered by Artificial Intelligence
                          to detect fires from cameras and sensors.
                        </p>
                      </div>

                      {/* <div className="order-1 md:order-2 w-1/2 flex justify-center">
                        <img
                          src="/Logo.png"
                          className="w-24 h-24 md:w-60 md:h-60"
                          alt="logo smartcube"
                        />
                      </div> */}
                    </div>
                  ),
                },
              ]}
              className="aspect-[2/1] flex flex-col relative items-center"
            />
          </div>
        </div>

        <div className="w-screen md:max-w-[980px] mx-auto h-screen flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between items-center md:gap-16 ">
            <Slide direction="left">
              <div className="order-2 md:order-1 flex flex-col justify-center gap-y-4  px-4">
                <h3 className="text-4xl font-semibold">Problem</h3>
                <p>
                  Global warming is a serious problem that we have to face. The
                  temperature is getting higher and higher every year. It is
                  caused by wildfires. Wildfires are caused by the increasing of
                  human activities.
                </p>
              </div>
            </Slide>
            <div className="order-1 md:order-2 flex flex-row items-center justify-end">
              <Reveal
                keyframes={customAnimationTopToBottom}
                className="w-1/3 h-[12vh] md:h-[25vh] object-cover md:me-[-4rem]"
              >
                <img
                  src="/images/thumbs/thumb_problem1.jpg"
                  alt="problem1"
                  className="w-full h-full  object-cover md:me-[-4rem]"
                />
              </Reveal>

              <Reveal
                keyframes={customAnimationTopToBottom}
                delay={500}
                className="w-1/3 h-[24vh] md:h-[50vh] object-cover md:me-[-2rem]"
              >
                <img
                  src="/images/thumbs/thumb_problem2.jpg"
                  alt="problem1"
                  className="w-full h-full   object-cover md:me-[-2rem]"
                />
              </Reveal>

              <Reveal
                keyframes={customAnimationTopToBottom}
                delay={1000}
                className="w-1/3 h-[36vh] md:h-[75vh]"
              >
                <img
                  src="/images/thumbs/thumb_problem3.jpg"
                  alt="problem1"
                  className="w-full h-full   object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-auto md:max-w-[980px] h-screen justify-center md:justify-between items-center gap-4 md:gap-16">
          <Reveal
            keyframes={customAnimationLeftToRight}
            className="w-full md:w-1/2 justify-center md:justify-start "
          >
            <div className="flex relative w-full h-fit px-4 md:px-0">
              <img
                src="/images/thumbs/thumb_solutionSensor.png"
                alt="solution"
                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-md"
              />

              <img
                src="/images/thumbs/thumb_solutionCamera.png"
                alt="solution"
                className="w-48 h-48 md:w-72 md:h-72 object-cover mt-[8rem] ms-[-8rem] rounded-md"
              />
            </div>
          </Reveal>
          <Reveal
            keyframes={customAnimationRightToLeft}
            className="w-full md:w-1/2"
          >
            <div className=" flex flex-col gap-y-4 px-4 md:px-0">
              <h3 className="text-4xl font-semibold">Our Prototype Solution</h3>
              <p>
                To detect fire and smoke earlier, We decided to create a
                detection system so we could take mitigation to prevent fire
                from spreading more.
              </p>
            </div>
          </Reveal>
        </div>

        {/* our team  */}
        <div className="md:max-w-[980px] mx-auto h-screen gap-5 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold text-center mb-5">Our Team</h3>
          <Fade cascade>
            <Swiper
              pagination={{
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard, Navigation]}
              navigation={{
                enabled: true,
              }}
              spaceBetween={50}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_septian.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full"
                  />
                  <h4 className="text-lg md:text-2xl font-semibold line-clamp-1	">
                    Septian Putra Pratama
                  </h4>
                  <span className="text-md md:text-xl">Team Leader</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_joko.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl  font-semibold line-clamp-1	">
                    Joko Prasetyo
                  </h4>
                  <span className="text-md md:text-xl">Cloud Engineer</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_iqbal.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl font-semibold line-clamp-1	">
                    Iqbal Maulana
                  </h4>
                  <span className="text-md md:text-xl">Mobile Development</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_rotua.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48  rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl font-semibold line-clamp-1">
                    Rotua Eka Wati Br. Sitorus
                  </h4>
                  <span className="text-md md:text-xl">Mobile Development</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_nia.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48  rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl font-semibold line-clamp-1	">
                    Rahmadhania
                  </h4>
                  <span className="text-md md:text-xl">Machine Learning</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_ilham.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl font-semibold overflow-ellipsis line-clamp-1	">
                    Muhammad Ilham
                  </h4>
                  <span className="text-md md:text-xl">Machine Learning</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-4">
                  <img
                    src="/images/thumbs/avatar/avatar_nata.jpeg"
                    alt="team1"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover "
                  />
                  <h4 className="text-lg md:text-2xl font-semibold line-clamp-1	">
                    Natalia Reta Budiarti
                  </h4>
                  <span className="text-md md:text-xl">Machine Learning</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </Fade>
        </div>
      </main>

      <footer>
        <div className="flex flex-col sm:flex-row justify-between gap-6 items-center max-w-[1280px] mx-auto py-8 px-4">
          <div className="flex flex-row items-center gap-2">
            <img src="/Logo.png" alt="smartcube logo" className="w-12 h-12" />
            <p className="text-lg font-semibold">Smartcube</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-5">
              <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
            </div>

            {/* contact */}
            <div className="flex flex-row gap-5 self-center md:self-end">
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/087788856277"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
