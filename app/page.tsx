"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Card({ link, reviewer, feedback, img }) {
  return (
    <div className="bg-white rounded-3xl p-10">
      <Link href={link}>
        <div className="flex flex-col items-stretch">
          <div>{feedback}</div>
          <div className="flex gap-5 py-4">
            <img src={img} />
            <div className="mt-2">{reviewer}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const reviews = [
    // {
    //   link: "https://www.google.com/maps/reviews/@10.016054,76.3122949,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURlNWJ5RWlRRRAB!2m1!1s0x0:0xda951599e991aea4?hl=en-US&entry=ttu",
    //   reviewer: "Krishnakumar B.",
    //   feedback:
    //     "We had a very good experience  with Happymindz who are dedicated for caring senior citizens. I came to know about Happymindz from Malayala Manora daily and was eager to know about their services. My mother in law who is 83 years old and requires constant attention and care. My wife cannot carry out all homely needs and taken care of her. One lady who was   hired  exclusively for her care. Unfortunately the lady could not rejoin after a short visit to her home,due to some health problems. Happymindz really came to our help in providing a suitable home care personal immediately upon our request for a week. The professional approach of the entire team and personal care of the deputed person was excellent. I can  strongly recommend Happymindz to anyone who is in need of such sincere service to look after our loved ones. I should give all credit, especially to Mr Nithin PRO for the correct and true appraisal of Happymindz activities. I am happy to rate Happymindz with 4.9 out of 5.",
    //   img: "https://lh3.googleusercontent.com/a-/ALV-UjWoNGrYt61HZsrLS_P9Yqd_41Xw_nYL-RPw9DkGf9-jOrp9AcVu=w36-h36-p-rp-mo-ba2-br100",
    // },
    {
      link: "https://www.google.com/maps/reviews/@10.016054,76.3122949,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURXaS1EeEtnEAE!2m1!1s0x0:0xda951599e991aea4?hl=en-US&entry=ttu",
      reviewer: "Ananthan Neeleeswaram",
      feedback:
        "Happymindz has been an invaluable resource for our family. The caregivers are professional, compassionate, and genuinely invested in the well-being of their clients. They took the time to understand my grandfather's unique needs and created a personalized care plan that has greatly improved her quality of life. The caregiver assigned to us is not only highly skilled but also incredibly kind and patient, making my grandfather feel safe and comfortable.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWA5hC3_S5_GfmX0bevfnY0f0cMsCyrwWjuyX5uFPQFqxhVutjb=w36-h36-p-rp-mo-br100",
    },
    {
      link: "https://www.google.com/maps/reviews/@10.016054,76.3122949,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUN1eG9UbXJBRRAB!2m1!1s0x0:0xda951599e991aea4?hl=en-US&entry=ttu",
      reviewer: "Sunny Thomas",
      feedback:
        "Had an awesome experience with Happymindz. The team is 100% committed in providing one of the best elderly care facilities in Kerala and India. My parents had a great time with Happymindz. The best part is that they have taken up new initiatives like, reading, music, yoga, gardening and writing. This has brought a new purpose to their life and more happiness. A big thanks to Jolly, Alphonse, and Ankita. Wish you the best!",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWU0w7RRqg-zrsdrlmdNrR3ahUJanwmWb8ZVrmEbhIAwkNFqL_V=w36-h36-p-rp-mo-br100",
    },
    {
      link: "https://www.google.com/maps/reviews/@10.016054,76.3122949,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUMycWRTakNnEAE!2m1!1s0x0:0xda951599e991aea4?hl=en-US&entry=ttu",
      reviewer: "Haritha Venugopal",
      feedback:
        "Thank you so much for what you've done. You have provided us with excellent and fast caretaker service. I've used other agencies' services and, by far, Happymindz Care is the best. If you need proper service and prompt response, I strongly advise you to use this agency. We are extremely grateful for the opportunity to use your services. God's blessings on you.☺️☺️",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVUb47uiWkxopa1FVDmjWtB_Pn4ZknjCs7IoIWgfnzp0Co2d-OM1g=w36-h36-p-rp-mo-br100",
    },
    {
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURXZy0yN1dBEAE!2m1!1s0x0:0xda951599e991aea4!3m1!1s2@1:CIHM0ogKEICAgIDWg-27WA%7CCgsI5ZugkgYQ8MSAQw%7C?hl=en-US&g_ep=CAESCjExLjEzNy4xMDMYACDQ5AEqbCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D&shorturl=1",
      reviewer: "Harypriya",
      feedback:
        "From my personal experience, I happily suggest happymindz home care to anyone who need an excellent home care service from a professional health care. I approached happymindz a month ago for a nursing care service . The service was quick and was beyond my expectations. I am really impressed with their professionalism and quality of service provided",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVJWzE1p2SI76oYJ5XVOAjtu0V9T6PRqmHu3L47-PfLiEe956cg=w36-h36-p-rp-mo-br100",
    },
    {
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURyME9IcExnEAE!2m1!1s0x0:0xda951599e991aea4!3m1!1s2@1:CIHM0ogKEICAgIDr0OHpLg%7CCgwIn9XItAYQwMGllwI%7C?hl=en-US&g_ep=CAESCjExLjEzNy4xMDMYACDQ5AEqbCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D&shorturl=1",
      reviewer: "Suresh",
      feedback:
        "Happymindz is a service that I endorse. Our caregiver, Ms. Suma Parvathy, is empathetic, competent, and goes above and above to make sure the patient is comfortable.  Even when the patient scolds or exhibits any unpleasant signs, the caregiver never gets upset and gives the patient their undivided attention.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUEXdQOc-6CjbJhNtuweLis3bzpcvLxZx2CAIe6CsLkNFpcrHJr=w36-h36-p-rp-mo-br100",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2500,
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
        <Slider {...settings} className="">
          {reviews.map((review) => (
            <Card
              key={review.link}
              link={review.link}
              reviewer={review.reviewer}
              feedback={review.feedback}
              img={review.img}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
