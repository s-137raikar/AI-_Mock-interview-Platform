import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
         <p className="text-lg">
           Practice on Real interview questions & get instant feedback.
         </p>
         <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview"> start an interview </Link>
         </Button>
        </div>
        <Image src="/robot.png" alt="robot-dude" width={400}
               height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h3>Your Interviews</h3>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (

            <InterviewCard {...interview} key={interview.id}/>
          ))}
          <p>You haven&apos;t taken any of the Interviews yet.
          </p>
        </div>

      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (

            <InterviewCard {...interview} key={interview.id}/>
          ))}
          {/*<p> You Haven&apos;t Taken any Interviews Yet</p>*/}
        </div>
      </section>
    </>
  );
};
export default Page;
