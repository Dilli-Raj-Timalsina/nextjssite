"use client";
import { useEffect, useState } from "react";
import ContentBox from "@/components/courseConsumeComponents/ContentBox";
import RequirementsSection from "@/components/courseConsumeComponents/RequirementsSection";
import DescriptionBox from "@/components/courseConsumeComponents/DescriptionBox";
import VideoBox from "@/components/courseConsumeComponents/VideoBox";
import CourseMetaData from "@/components/courseConsumeComponents/CourseMetaData";
interface Course {
    id: string;
    userIds: [];
    createdAt: string;
    description: string;
    requirements: string;
    updatedAt: string;
    category: string;
    title: string;
    subTitle: string;
    duration: string;
    reviewScore: number;
    price: number;
    tutorName: string;
    totalStudent: number;
    thumbNail: string;
}
export default function Home({ params }: { params: { courseId: string } }) {
    const [data, setData] = useState<Course>();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `http://localhost:3001/api/v1/course/getCourseMetaData/${params.courseId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const course = (await res.json()).course;
            setData(course);
        }
        fetchData();
    }, []);
    return (
        data && (
            <div>
                <div className="flex justify-between flex-col md:flex-row">
                    <CourseMetaData
                        createdAt={data.createdAt}
                        updatedAt={data.updatedAt}
                        title={data.title}
                        subTitle={data.subTitle}
                        reviewScore={data.reviewScore}
                        tutorName={data.tutorName}
                        totalStudent={data.userIds.length}
                    ></CourseMetaData>
                    <VideoBox price={data.price}></VideoBox>
                </div>
                <ContentBox></ContentBox>
                <RequirementsSection
                    requirements={data.requirements}
                ></RequirementsSection>
                <DescriptionBox description={data.description}></DescriptionBox>
            </div>
        )
    );
}
