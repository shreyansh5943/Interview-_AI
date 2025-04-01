import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { cn, getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null; // Placeholder for feedback data

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96 p-6 shadow-md rounded-lg bg-gradient-to-b from-green-500 to-black text-white">
      <div className="relative">
        {/* Type Badge */}
        <div
          className={cn(
            "absolute top-0 right-0 px-4 py-2 rounded-bl-lg text-white font-medium text-sm",
            badgeColor
          )}
        >
          {normalizedType}
        </div>

        {/* Cover Image */}
        <Image
          src={getRandomInterviewCover()}
          alt="cover-image"
          width={90}
          height={90}
          className="rounded-full object-cover mx-auto"
        />

        {/* Interview Role */}
        <h3 className="mt-5 text-lg font-semibold text-center capitalize">
          {role} Interview
        </h3>

        {/* Date & Score */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p className="text-sm">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p className="text-sm">{feedback?.totalScore || "---"}/100</p>
          </div>
        </div>

        {/* Feedback or Placeholder */}
        <p className="line-clamp-2 mt-4 text-sm text-gray-300 text-center">
          {feedback?.finalAssessment ||
            "You haven't taken this interview yet. Take it now to improve your skills."}
        </p>

        {/* Tech Stack and Button */}
        <div className="flex flex-row justify-between items-center mt-6">
          <DisplayTechIcons techStack={techstack} />
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "Take Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
