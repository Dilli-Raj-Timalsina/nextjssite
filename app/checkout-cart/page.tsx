import OneCourseCheckOut from "@/components/cartAndCheckoutComponents/checkoutComponents/OneCourseCheckOut";
import CheckOutButton from "@/components/cartAndCheckoutComponents/checkoutComponents/CheckOutButton";

export default function Home() {
    const content = dummyData.map((item) => (
        <div className="w-fit">
            <OneCourseCheckOut {...item}></OneCourseCheckOut>
            <hr className="text-gray-900" />
        </div>
    ));
    return (
        <div className="mt-36 ml-10">
            <h1 className="font-bold text-gray-900 text-4xl mb-10">
                Shopping Cart
            </h1>
            <div className="flex justify-between">
                <div>{content}</div>
                <CheckOutButton></CheckOutButton>
            </div>
        </div>
    );
}

const dummyData = [
    {
        category: "web development",
        title: "Develop modern, complex, responsive Design",
        tutorName: "Angela Yu",
        subTitle:
            "Master the art of developing modern, complex, responsive and scalable web applications with Angular.",
        rating: 2.7,
        price: 12.99,
        totalLength: 53.2,
        totalStudent: 1209838,
    },
    {
        category: "data science",
        title: "Introduction to Machine Learning",
        tutorName: "John Smith",
        subTitle:
            "Dive into the world of machine learning and gain a solid understanding of its concepts and applications.",
        rating: 4.5,
        price: 19.99,
        totalLength: 36.5,
        totalStudent: 752489,
    },
    {
        category: "graphic design",
        title: "Digital Illustration: From Sketch to Masterpiece",
        tutorName: "Emily Johnson",
        subTitle:
            "Learn the art of digital illustration, from sketching initial ideas to creating stunning masterpieces.",
        rating: 4.8,
        price: 24.99,
        totalLength: 45.7,
        totalStudent: 523671,
    },
    {
        category: "language learning",
        title: "Conversational French for Beginners",
        tutorName: "Pierre Dubois",
        subTitle:
            "Embark on your journey to learn French through engaging conversations and practical exercises.",
        rating: 4.6,
        price: 9.99,
        totalLength: 28.9,
        totalStudent: 289347,
    },
];
