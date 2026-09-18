export const projectDetails = {
  snapcart: {
    title: "SnapCart",
    subtitle: "Full-Stack Grocery Delivery Platform",
    image: "/assets/snapcart.png",
    liveLink: "https://snapcart-nu.vercel.app/",
    githubLink: "https://github.com/vikashrao5464/grocery-delivery",
    overview:
      "SnapCart is a real-time grocery delivery platform that supports customer, administrator, and delivery-partner workflows from product discovery to delivery confirmation.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "Leaflet",
      "Gemini API",
    ],
    highlights: [
      "Built role-based dashboards for customers, administrators, and delivery partners.",
      "Implemented real-time order notifications, order chat, and live GPS tracking with Socket.IO.",
      "Added geospatial delivery-partner discovery within a 10 km radius using MongoDB queries.",
      "Integrated Stripe Checkout, cash on delivery, OTP confirmation, and AI-powered chat replies.",
    ],
    sections: [
      {
        title: "Real-Time Delivery Flow",
        text: "Administrators can assign nearby delivery partners, customers can track orders live, and delivery partners can update their location during active deliveries.",
      },
      {
        title: "Payments and Confirmation",
        text: "The platform supports online Stripe payments, signed webhook verification, cash on delivery, and four-digit OTP-based delivery completion.",
      },
    ],
  },
  intervai: {
    title: "IntervAI",
    subtitle: "AI-Powered Interview Practice Platform",
    image: "/assets/intervai.png",
    liveLink: "https://intervai-client-9zgu.onrender.com/",
    githubLink: "https://github.com/vikashrao5464/IntervAI",
    overview:
      "IntervAI is a mock interview platform that analyzes resumes, generates personalized interview questions, evaluates responses, and creates performance reports.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenRouter API",
      "Razorpay",
      "Multer",
      "Recharts",
    ],
    highlights: [
      "Built a complete interview workflow covering setup, resume analysis, question generation, timed answers, scoring, and reports.",
      "Integrated OpenRouter API for resume analysis, question generation, and AI-based answer evaluation.",
      "Implemented PDF resume upload and text extraction using Multer and PDF.js.",
      "Added Google authentication, JWT-protected APIs, Razorpay credits, interview history, and downloadable reports.",
    ],
    sections: [
      {
        title: "AI Interview Workflow",
        text: "The system creates five role-specific questions, runs a timed interview experience, evaluates answers, and stores question-wise scores.",
      },
      {
        title: "Reports and Payments",
        text: "Users can view visual performance reports, download PDF summaries, review interview history, and purchase credits through Razorpay.",
      },
    ],
  },
};
