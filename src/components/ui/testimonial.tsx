"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <main className="w-full bg-white">
      <section className="relative h-full container text-black mx-auto rounded-lg py-14 bg-white" ref={testimonialRef}>
        <article className="max-w-screen-md mx-auto text-center space-y-2">
          <TimelineContent as="h1" className="xl:text-4xl text-3xl font-heading font-black tracking-tight uppercase" animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef}>
            EARLY FEEDBACK
          </TimelineContent>
          <TimelineContent as="p" className="mx-auto text-gray-500 max-w-[50ch] text-sm font-heading font-medium" animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef}>
            Real feedback from people who tested CronGuard.
          </TimelineContent>
        </article>
        
        <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2">
            {/* Card 1: Vishal */}
            <TimelineContent animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 p-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto">
                <p className="text-white">
                  &ldquo;Before CronGuard, I had to keep checking whether my scheduled jobs were actually running. Having the events and alerts in one place makes it much easier to know when something needs attention.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-sm text-white">
                      Vishal
                    </h2>
                    <p className="text-white/80 text-xs sm:text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>

            {/* Card 2: Rishav Raj */}
            <TimelineContent animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 p-5">
              <article className="mt-auto">
                <p>
                  &ldquo;I liked how simple the monitoring flow is. You can set up a job, send an event, and immediately see what happened without going through a lot of logs.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold text-xl text-white">Rishav Raj</h2>
                    <p className="text-white/80 text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            {/* Card 3: Aman Kumar */}
            <TimelineContent animationNum={2} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5">
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  &ldquo;The Discord alerts are probably the most useful part for me. If something fails, I can know about it without constantly checking the application.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-lg text-white">
                      Aman Kumar
                    </h2>
                    <p className="text-white/60 text-xs sm:text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/15 flex items-center justify-center border border-white/5">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>

            {/* Card 4: Manish Thakur */}
            <TimelineContent animationNum={3} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5">
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  &ldquo;Seeing the event history makes debugging much easier. Instead of trying to figure out what happened later, I can look at the previous events and understand where things went wrong.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold lg:text-xl text-lg text-white">Manish Thakur</h2>
                    <p className="text-white/60 text-xs sm:text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/15 flex items-center justify-center border border-white/5">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            {/* Card 5: Sagar Patidar */}
            <TimelineContent animationNum={4} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 p-5">
              <article className="mt-auto">
                <p>
                  &ldquo;CronGuard gives a much clearer picture of what is happening with background jobs. The interface is simple enough that I could understand the important information quickly.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold text-xl text-white">Sagar Patidar</h2>
                    <p className="text-white/80 text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>

            {/* Card 6: Chandan Mukati */}
            <TimelineContent animationNum={5} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 p-5">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto">
                <p>
                  &ldquo;I think the idea is really useful for developers who have jobs running in the background. Getting notified when something fails is much better than finding out about it after the fact.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5 z-10">
                  <div>
                    <h2 className="font-semibold text-xl text-white">Chandan Mukati</h2>
                    <p className="text-white/80 text-sm">Student &amp; Developer</p>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>

        <div className="absolute border-b-2 border-[#e6e6e6] bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:shadow-sm before:border border-gray-200 before:border-gray-300 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white after:shadow-sm after:border after:border-gray-300 "></div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
