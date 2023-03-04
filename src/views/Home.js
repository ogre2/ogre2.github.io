import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import A1 from '../assets/logoipsum-214.svg';
import A2 from '../assets/logoipsum-242.svg';
import A3 from '../assets/logoipsum-284.svg';
import A4 from '../assets/logoipsum-286.svg';
import A5 from '../assets/logoipsum-233.svg';
import A6 from '../assets/logoipsum-228.svg';
import A7 from '../assets/logoipsum-262.svg';
import A8 from '../assets/logoipsum-229.svg';

function Home() {
    SwiperCore.use([Autoplay]);

    return(
        <main id="main" className="content">
            <section className="header">
                <div className="container vh-75 d-flex align-items-center">
                    <div className="jumbotron text-center" data-aos="fade-up">
                        <div className="col-md-7 col-sm-12 col-xs-12 m-auto text-center d-block">
                            <h1 className="heading-2 fw-300 text-primary mb-3">Designing and building modern web applications.</h1>

                            <p className="text-2 fw-300 text-secondary col-md-9 col-sm-12 col-xs-12 m-auto mb-4">
                                Hi, I'm Steve, a software engineer and web designer from New Jersey. Welcome to my portfolio, and I hope we get to work together soon.
                            </p>

                            <a href="mailto:donebysteve@gmail.com" className="link d-flex justify-content-center">
                                <button className="btn btn-padded btn-primary">Contact Me<i className="bi bi-arrow-up-right"></i></button>    
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clients bg-dark border" data-aos="flip-up">
                <div className="container-fluid">
                    <Swiper modules={[Autoplay]} 
                        loop={true} 
                        autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                        breakpoints={{
                            // when window width is >= 320px
                            0: {
                              slidesPerView: 1
                            },
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                            1400: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            }
                        }}
                        slidesPerView={6} 
                        spaceBetween={30} 
                        className="swiper-container"
                    >
                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A1} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A2} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A3} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A4} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A5} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A6} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A7} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>

                        <SwiperSlide className="d-flex align-items-center justify-content-center text-primary">
                            <img src={A8} alt="Logo" className="p-5 logo" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="services" data-aos="fade-right">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                        <h2 className="heading-4 text-gradient">Offering services to all that transform and add value to businesses</h2>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3 col-sm-12 col-xs-12 mb-4 mb-md-0">
                            <div className="card service-card">
                                <div className="card-body p-4">
                                    <i className="bi bi-layout-wtf fs-22 text-primary"></i>

                                    <h5 className="text-2 text-gradient mt-2 mb-2">Web Design</h5>

                                    <p className="text-3 text-secondary fw-300">
                                        Designing interfaces that are attractive, intuitive, and modern interfaces with Figma.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12 mb-4 mb-md-0">
                            <div className="card service-card">
                                <div className="card-body p-4">
                                    <i className="bi bi-bootstrap fs-22 text-primary"></i>

                                    <h5 className="text-2 text-gradient mt-2 mb-2">Bootstrap</h5>

                                    <p className="text-3 text-secondary fw-300">
                                        Developing clean, responsive and modern frontend web projects through Bootstrap.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12 mb-4 mb-md-0">
                            <div className="card service-card">
                                <div className="card-body p-4">
                                    <i className="bi bi-pc-display-horizontal fs-22 text-primary"></i>

                                    <h5 className="text-2 text-gradient mt-2 mb-2">React.js</h5>

                                    <p className="text-3 text-secondary fw-300">
                                        Designing interfaces that are intuitive, efficient, and enjoyable to use.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12 mb-4 mb-md-0">
                            <div className="card service-card">
                                <div className="card-body p-4">
                                    <i className="bi bi-hdd-rack fs-22 text-primary"></i>

                                    <h5 className="text-2 text-gradient mt-2 mb-2">Fullstack</h5>

                                    <p className="text-3 text-secondary fw-300">
                                        Frontend and backend web development incorporating Node.js and MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact bg-dark border" data-aos="flip-up">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 col-sm-12 col-xs-12 text-center">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <i className="bi bi-dot fs-22 text-green blink"></i><span className="text-secondary fs-600">Currently available</span>
                            </div>

                            <h2 className="heading-3 text-gradient mt-2 mb-5">Have a project in mind? Let's talk about it</h2>

                            <a href="mailto:donebysteve@gmail.com" className="link d-flex justify-content-center">
                                <button className="btn btn-padded btn-primary">Contact Me<i className="bi bi-arrow-up-right"></i></button>    
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;