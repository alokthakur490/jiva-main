import images from "./images";
const data = {
  services: [
    {
      id: 1,
      picture: images.searchDoctor,
      title: "Skin Disease Detector",
      description:
        "A groundbreaking AI-driven tool for swiftly identifying and diagnosing various skin conditions, enhancing healthcare accessibility and efficiency.",
      url: "/",
    },
    {
      id: 2,
      picture: images.onlinePharamacy,
      title: "ChatBot Prescription Test",
      description:
        "A revolutionary ChatBot Prescription Test personalized medical recommendations through interactive dialogue, streamlining patient care.",
      url: "https://google.com",
    },
    {
      id: 3,
      picture: images.consultation,
      title: "Heart Disease Predictor",
      description:
        "An advanced machine learning-based system that predicts heart disease risk, preventive healthcare with data-driven insights.",
      url: "/heart_disease",
    },
    {
      id: 4,
      picture: images.detailsInfo,
      title: "Diabetes Prediction Model",
      description:
        "A predictive model leveraging machine learning to forecast diabetes risk, empowering proactive health management through early detection.",
      url: "/dib_form",
    },
    {
      id: 5,
      picture: images.emergancyCare,
      title: "Emergancy Care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
      url: "https://google.com",
    },
    {
      id: 6,
      picture: images.tracking,
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      url: "https://google.com",
    },
  ],
  articles: [
    {
      id: 1,
      picture: images.article1,
      title: "Disease detection, check  up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      id: 2,
      picture: images.article2,
      title: "Herbal medicines that are safe for consumption",
      description:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      id: 3,
      picture: images.article3,
      title: "Natural care for healthy facial skin",
      description:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
    },
  ],
  testimonial: {
    id: 1,
    userImage: images.testinomialAvatar,
    userName: "Edward Newgate",
    userSubHeading: "Founder Circle",
    reviewText:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
};
export default data;
