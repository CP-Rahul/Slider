"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full mt-10 bg-gray-500 p-10">
        <h1 className="text-center text-2xl font-bold text-green-400 my-10">
          Testinomials
        </h1>
        <Slider {...settings}>
          <div className="rounded-3xl p-10 bg-white">
            <p>
              Happymindz has been one of the best finds when it comes to peace
              of mind. I would like to thank everyone at happymindz home care
              for their excellent work, professionalism and understanding,
              especially on those occasions when my parents needed the most. At
              a time when things were very stressful and anxious, I always felt
              that however busy everyone was, I was always lent a sympathetic
              ear which was very much appreciated. I would highly recommend them
              . Thank you again for everything and I wish the service remains to
              be the best.
            </p>
          </div>
          <div className="rounded-3xl p-10 bg-white">
            <p>
              Happymindz has been an invaluable resource for our family. The
              caregivers are professional, compassionate, and genuinely invested
              in the well-being of their clients. They took the time to
              understand my grandfather's unique needs and created a
              personalized care plan that has greatly improved her quality of
              life. The caregiver assigned to us is not only highly skilled but
              also incredibly kind and patient, making my grandfather feel safe
              and comfortable. The office staff is also very supportive and
              responsive, always willing to assist with any concerns we have. We
              are extremely satisfied with Happymindz and highly recommend their
              services.
            </p>
          </div>
          <div className="rounded-3xl p-10 bg-white">
            <p>
              Happymindz has exceeded our expectations in every way. From the
              initial consultation to the ongoing care, their team has been
              professional, compassionate, and incredibly attentive to my
              grandfather's needs. The caregiver assigned to us is not only
              skilled but also very kind and understanding, making my
              grandfather feel comfortable and well-cared-for. The office staff
              is also very responsive and accommodating, always ready to address
              any concerns we may have. Happymindz has truly made a positive
              impact on our family's life, and we are deeply grateful for their
              exceptional service. We highly recommend Happymindz to anyone in
              need of elder care.
            </p>
          </div>
          <div className="rounded-3xl p-10 bg-white ">
            <p>
              I am so grateful for the exceptional care provided by Happymindz.
              Their caregivers are not only highly professional but also
              incredibly compassionate and dedicated. They took the time to
              understand my father's specific needs and preferences, creating a
              tailored care plan that has made a significant difference in his
              daily life. The caregiver assigned to us is always punctual, kind,
              and has formed a wonderful bond with my father. The office staff
              is also very supportive and responsive, ensuring that everything
              runs smoothly. Happymindz has truly been a blessing for our
              family, and we highly recommend their services to anyone in need
              of elder care.
            </p>
          </div>

          <div className="rounded-3xl p-10 bg-white ">
            <p>
              One of the best aspects of Happymindz is their commitment to
              building strong relationships with their clients. My grandfather
              feels truly cared for and valued, thanks to the genuine
              connections made by his caregivers.
            </p>
          </div>

          <div className="rounded-3xl p-10 bg-white ">
            <p>
              The team at Happymindz is wonderful. They provided excellent care
              for my mother, and their attention to detail and compassion were
              evident from day one. Thank you for your exceptional service.
            </p>
          </div>

          <div className="rounded-3xl p-10 bg-white ">
            <p>
              Happymindz has been a true blessing for our family. The caregivers
              are attentive, compassionate, and always focused on my
              father-in-law's needs. They created a customized care plan that
              has greatly improved her quality of life. Our caregiver is always
              on time, caring, and genuinely concerned about her well-being.
              Happymindz has provided us with peace of mind knowing that my
              father-in-law is in capable hands.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}
