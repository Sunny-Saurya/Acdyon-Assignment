"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, ArrowRight, Zap, Bell, Code2, BarChart3, Shield, Users, Pencil, Sparkles } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

import FlowArt, { FlowSection } from "@/components/ui/story-scroll"
import {
  GSAPProvider,
  GlassCard,
  ModernButton,
  ScrollProgress,
} from "@/components/landing"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import ClientFeedback from "@/components/ui/testimonial"

const codeSnippet = `await fetch("https://cronguard.sh/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

export function LandingPageContent() {
  return (
    <GSAPProvider>
      <ScrollProgress />
      
      <FlowArt aria-label="CronGuard Product Presentation">
        
        {/* Slide 1: Who We Are / Hero */}
        <FlowSection aria-label="Who we are" style={{ backgroundColor: '#FD5200', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">01 — Who we are</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto space-y-8 w-full">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 border border-white/20 bg-white/10 text-white px-3 py-1 font-heading text-xs uppercase tracking-wider mx-auto">
                <Zap className="size-3 text-white" />
                <span>System Status: Online</span>
              </div>
              <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-extrabold leading-[0.8] uppercase tracking-tighter text-white">
                Monitor
                <br />
                SaaS
                <br />
                Events
              </h1>
              <p className="max-w-[55ch] text-[clamp(1.1rem,2.2vw,1.6rem)] font-normal leading-relaxed text-white/90 mx-auto">
                We believe SaaS founders deserve clear, instant visibility into their business. No complex dashboards, no delayed emails — just pure live events sent straight to your Discord channel.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                <ModernButton href="/sign-up" variant="primary" size="md" className="bg-white text-black hover:bg-white/90">
                  Start for Free <ArrowRight className="size-4 ml-1" />
                </ModernButton>
                <ModernButton href="#features" variant="secondary" size="md">
                  Explore Features
                </ModernButton>
              </div>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 2: The Mission / Capabilities */}
        <FlowSection id="features" aria-label="The mission" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">02 — The mission</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div>
            <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter">
              Discord
              <br />
              First
              <br />
              Alerts
            </h2>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/90">
            A developer-first monitoring system. We are rewriting the rules of SaaS tracking — making it instant, collaborative, and beautiful.
          </p>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Real-time Alerts</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Instant Discord notifications the moment events happen. No delay, no lost events.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Easy Integration</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Simple API that works with any language or framework. Integrate in under 5 minutes.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Live Analytics</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Track and visualize your SaaS metrics in real-time. Spot trends as they happen.
              </p>
            </div>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Secure</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Enterprise-grade security and authentication. Your event data remains private.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Lightning Fast</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Sub-second delivery to your Discord channels. Average latency is less than 50ms.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Team Ready</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Invite your co-founders and developers to keep the entire team in the loop.
              </p>
            </div>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/50">
            Every alert is designed to celebrate progress and keep your team aligned.
          </p>
        </FlowSection>

        {/* Slide 3: How It Works */}
        <FlowSection id="how-it-works" aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">03 — How it works</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter text-black">
                Code.
                <br />
                Send.
                <br />
                Notify.
              </h2>
              <p className="mt-[2vw] max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-black/80">
                Three steps. Zero complexity. Your product events start flowing the moment you sign up.
              </p>
            </div>
            
            <div className="w-full lg:w-[45%] max-w-xl self-center">
              <div className="border border-black/15 bg-black/5 overflow-hidden shadow-sm">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-black/10 border-b border-black/15">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#DC143C]" />
                    <div className="w-2 h-2 rounded-full bg-black/35" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                  </div>
                  <span className="text-[10px] text-black/60 ml-1 font-mono">cronguard.js</span>
                </div>
                <div className="overflow-x-auto text-[9px] sm:text-xs font-mono p-4 bg-white/70">
                  <SyntaxHighlighter
                    language="typescript"
                    style={oneLight}
                    customStyle={{
                      background: "transparent",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-black/20" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[3vw]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">01 — Hook</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Connect your Discord webhook in seconds.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">02 — Key</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Generate your secure API authorization token.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">03 — POST</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Call our endpoint with a simple JSON payload.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">04 — Customize</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Attach metadata like plan tiers and email addresses.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">05 — Celebrate</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Watch conversions and milestones roll in.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">06 — Scale</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 text-black/80">
                Distribute alerts across dedicated channels.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Slide 4: The Vision / Stats */}
        <FlowSection id="vision" aria-label="The vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">04 — The vision</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          
          <div>
            <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter">
              Future
              <br />
              Of
              <br />
              Metrics
            </h2>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/90">
            Traditional SaaS analytics are stale, expensive, and hidden behind complex dashboards. We&apos;re here to change that — bringing action and celebration to where your team already hangs out.
          </p>
          
          <hr className="my-[2vw] border-none border-t border-white/30" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[clamp(2rem,6vw,8rem)] font-bold leading-none">10K+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Events tracked by early founders this month.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[clamp(2rem,6vw,8rem)] font-bold leading-none">50ms</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Average latency for event processing and dispatch.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[clamp(2rem,6vw,8rem)] font-bold leading-none">99.9%</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                API availability and uptime guaranteed.
              </p>
            </div>
          </div>
          
          <hr className="my-[2vw] border-none border-t border-white/30" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Open Access</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Start for free, upgrade as your event volumes grow.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Global Edge</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Low latency endpoints distributed worldwide.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white">Security First</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Encrypted payloads and strict token authorization.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Slide 5: Testimonials */}
        <FlowSection id="testimonials" aria-label="Testimonials" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">05 — Testimonials</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="my-auto overflow-y-auto max-h-[80vh] w-full">
            <ClientFeedback />
          </div>
          <hr className="mt-auto mb-[2vw] border-none border-t border-black/20" />
        </FlowSection>

        {/* Slide 6: Join Us */}
        <FlowSection aria-label="Join us" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">06 — Join us</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter">
                Ready
                <br />
                To
                <br />
                Begin?
              </h2>
              <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/80">
                Take control of your SaaS events. Join now and let&apos;s celebrate your growth together.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <ModernButton href="/sign-up" variant="primary" size="md">
                  Start for Free <ArrowRight className="size-4 ml-1" />
                </ModernButton>
                <ModernButton href="#pricing" variant="secondary" size="md">
                  View Pricing
                </ModernButton>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] flex flex-col gap-4 self-center lg:mt-0 mt-6">
              <div className="border border-white/10 bg-white/5 p-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 mb-3 italic">
                  &ldquo;CronGuard has been a game-changer for me. Seeing sales pop up in real-time in our Discord is incredibly motivating.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/user-2.png"
                    alt="Freya Larsson"
                    width={30}
                    height={30}
                    className="border border-white/10 w-7 h-7 shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-white text-xs">
                      Freya Larsson
                    </p>
                    <p className="text-[9px] text-white/50 font-mono">@itsfreya</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white/5 p-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 mb-3 italic">
                  &ldquo;CronGuard just works. Incredibly fast integration and the alerts are instant. Easily makes it our favorite new tool.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/user-1.png"
                    alt="Kai Durant"
                    width={30}
                    height={30}
                    className="border border-white/10 w-7 h-7 shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-white text-xs">
                      Kai Durant
                    </p>
                    <p className="text-[9px] text-white/50 font-mono">@kdurant_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Slide 7: Pricing */}
        <FlowSection id="pricing" aria-label="Pricing" style={{ backgroundColor: '#ffffff', color: '#000000' }} className="bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] flex flex-col justify-between">
          <div className="w-full text-center mt-2">
            <p className="text-blue-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm font-mono">Simple Pricing</p>
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-black text-black leading-none tracking-tight mt-2 uppercase font-heading">
              Simple Fair Plans
            </h2>
            <p className="text-gray-500 font-medium max-w-[55ch] text-center mx-auto mt-2 text-sm sm:text-base font-heading">
              Choose the plan that fits your stage. From side projects to fast-growing startups, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto w-full px-4 my-auto">
            {/* Developer Card */}
            <div className="relative bg-white text-black border-[3px] border-black rounded-2xl p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:-rotate-[1deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 min-h-[440px]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl tracking-tight text-black">Developer</h3>
                    <p className="text-gray-500 text-xs mt-0.5 font-medium">Perfect for side projects</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-orange-100 text-orange-600">
                    <Pencil className="size-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1 my-6">
                  <span className="text-5xl font-black text-black tracking-tight">$0</span>
                  <span className="text-gray-400 text-sm font-bold lowercase">/ month</span>
                </div>
                <ul className="space-y-3.5 mb-6">
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>1,000 events / month</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>3 active webhooks</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>Discord integrations</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>1-day log retention</span>
                  </li>
                </ul>
              </div>
              <Link href="/sign-up" className="w-full py-3 bg-white hover:bg-gray-50 text-black border-[2px] border-black rounded-xl font-extrabold text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer">
                Get Started
              </Link>
            </div>

            {/* Pro Card (Popular) */}
            <div className="relative bg-white text-black border-[3px] border-black rounded-2xl p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:-rotate-[1.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 min-h-[440px]">
              <div className="absolute -top-3.5 -right-2.5 bg-[#FFB01F] text-black font-black text-[10px] px-3 py-1.5 rounded-full border-2 border-black uppercase tracking-wider rotate-[6deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                Popular!
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl tracking-tight text-black">Pro</h3>
                    <p className="text-gray-500 text-xs mt-0.5 font-medium">For serious creators</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-blue-100 text-blue-600">
                    <Star className="size-5 fill-blue-600/10" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1 my-6">
                  <span className="text-5xl font-black text-black tracking-tight">$9</span>
                  <span className="text-gray-400 text-sm font-bold lowercase">/ month</span>
                </div>
                <ul className="space-y-3.5 mb-6">
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>50,000 events / month</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>Unlimited webhooks</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>Discord & Slack alerts</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>7-day log retention</span>
                  </li>
                </ul>
              </div>
              <Link href="/sign-up" className="w-full py-3 bg-[#FFB01F] hover:bg-[#FFA500] text-black border-[2px] border-black rounded-xl font-extrabold text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer">
                Get Started
              </Link>
            </div>

            {/* Team Card */}
            <div className="relative bg-white text-black border-[3px] border-black rounded-2xl p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:rotate-[1.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 min-h-[440px]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl tracking-tight text-black">Team</h3>
                    <p className="text-gray-500 text-xs mt-0.5 font-medium">For scaling startups</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-gray-100 text-gray-800">
                    <Sparkles className="size-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1 my-6">
                  <span className="text-5xl font-black text-black tracking-tight">$29</span>
                  <span className="text-gray-400 text-sm font-bold lowercase">/ month</span>
                </div>
                <ul className="space-y-3.5 mb-6">
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>500,000 events / month</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>Advanced event filters</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>Unlimited team seats</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gray-800">
                    <div className="size-5 rounded-full border-[1.5px] border-black flex items-center justify-center shrink-0 bg-white">
                      <Check className="size-3 text-black stroke-[3]" />
                    </div>
                    <span>30-day log retention</span>
                  </li>
                </ul>
              </div>
              <Link href="/sign-up" className="w-full py-3 bg-white hover:bg-gray-50 text-black border-[2px] border-black rounded-xl font-extrabold text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer">
                Get Started
              </Link>
            </div>
          </div>
          <div className="mb-2 w-full text-center text-xs font-mono uppercase tracking-wider text-black/35 select-none">
            ✦ NO CREDIT CARD REQUIRED TO TRY
          </div>
        </FlowSection>
      </FlowArt>

      {/* Footer */}
      <footer className="relative bg-[#080808] text-[#F5F0E8] pt-20 pb-8 px-[4vw] overflow-hidden w-full border-t border-white/5 transition-colors">
        {/* Brand Badge */}
        <div className="absolute top-8 right-8 lg:right-[4vw]">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white">
            <span className="font-bold text-sm tracking-tighter">C✦</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col">
          {/* Giant Logo Text */}
          <div className="w-full flex flex-col items-start lg:items-center justify-center my-8 lg:my-12 select-none">
            <span className="text-[clamp(3.5rem,14vw,15rem)] font-extrabold leading-[0.7] tracking-[-0.08em] uppercase text-[#F5F0E8] block select-none">
              CRON
            </span>
            <span className="text-[clamp(3.7rem,15vw,16rem)] font-extrabold leading-[0.7] tracking-[-0.08em] lowercase text-[#F5F0E8] block select-none -mt-[3vw] lg:-mt-[4vw] pl-[4vw] lg:pl-[12vw]">
              guard
            </span>
          </div>

          {/* Footer Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 pt-10 pb-16 w-full">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 font-bold mb-4">CRON</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#features" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 font-bold mb-4">GUARD</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 font-bold mb-4">Socials</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="https://discord.gg" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/xenoz4L" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Rishav07-05" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/rishavkumar18/" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 font-bold mb-4">Support</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:support@cronguard.sh" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors break-all">
                    support@cronguard.sh
                  </a>
                </li>
                <li>
                  <Link href="/docs" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Line */}
          <div className="mt-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/40">
              COPYRIGHT &copy; {new Date().getFullYear()} CRONGUARD. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5 select-none">
              ✦ WE ARE CRON GUARD
            </p>
          </div>
        </div>
      </footer>
    </GSAPProvider>
  )
}
