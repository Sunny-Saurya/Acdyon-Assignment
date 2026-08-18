"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, ArrowRight, Zap, Bell, Code2, BarChart3, Shield, Users } from "lucide-react"
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70"></p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 my-auto">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-1.5 border border-white/20 bg-white/10 text-white px-3 py-1 font-heading text-xs uppercase tracking-wider">
                <Zap className="size-3 text-white" />
                <span>System Status: Online</span>
              </div>
              <h1 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter text-white">
                Monitor
                <br />
                SaaS
                <br />
                Events
              </h1>
              <p className="max-w-[45ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/90">
                We believe SaaS founders deserve clear, instant visibility into their business. No complex dashboards, no delayed emails — just pure live events sent straight to your Discord channel.
              </p>
            </div>
            
            <div className="w-full lg:w-[45%] max-w-xl self-center lg:mt-0 mt-6">
              <GlassCard variant="neo" className="p-1 sm:p-2 bg-black/40 border-white/10">
                <MockDiscordUI>
                  <AnimatedList>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="CronGuard Avatar"
                      username="CronGuard"
                      timestamp="Today at 12:35PM"
                      badgeText="SignUp"
                      badgeColor="#DC143C"
                      title="👤 New user signed up"
                      content={{
                        name: "Mateo Ortiz",
                        email: "m.ortiz19@gmail.com",
                      }}
                    />
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="CronGuard Avatar"
                      username="CronGuard"
                      timestamp="Today at 12:35PM"
                      badgeText="Revenue"
                      badgeColor="#DC143C"
                      title="💰 Payment received"
                      content={{
                        amount: "$49.00",
                        email: "zoe.martinez2001@email.com",
                        plan: "PRO",
                      }}
                    />
                  </AnimatedList>
                </MockDiscordUI>
              </GlassCard>
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
        <FlowSection id="pricing" aria-label="Pricing" style={{ backgroundColor: '#6D28D9', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">07 — Pricing</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 my-auto w-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter text-white">
                Simple
                <br />
                Fair
                <br />
                Plans
              </h2>
              <p className="max-w-[45ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/90">
                Choose the plan that fits your stage. From side projects to fast-growing startups, we've got you covered.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="size-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Sub-second delivery to Discord</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="size-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Developer-first integration API</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="size-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">No credit card required for Free plan</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[50%] flex flex-col sm:flex-row gap-4 self-center lg:mt-0 mt-6">
              {/* Free Plan Card */}
              <GlassCard variant="neo" className="flex-1 p-6 bg-black/40 border-white/10 flex flex-col justify-between min-h-[350px]">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Hobby</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">$0</span>
                    <span className="text-xs text-white/60 font-semibold">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-white/80 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white/60" />
                      <span>1,000 events / month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white/60" />
                      <span>3 webhooks limit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white/60" />
                      <span>3-day event history</span>
                    </li>
                  </ul>
                </div>
                <ModernButton href="/sign-up" variant="secondary" className="w-full text-xs py-2">
                  Get Started
                </ModernButton>
              </GlassCard>

              {/* Pro Plan Card */}
              <GlassCard variant="neo" className="flex-1 p-6 bg-white/10 border-white/20 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-white text-[#6D28D9] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Popular
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Growth Pro</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-white">$29</span>
                    <span className="text-xs text-white/80 font-semibold">/ month</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-white/95 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white" />
                      <span>Unlimited events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white" />
                      <span>Unlimited webhooks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white" />
                      <span>30-day event history</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-white" />
                      <span>Team collaboration</span>
                    </li>
                  </ul>
                </div>
                <ModernButton href="/sign-up" variant="primary" className="w-full text-xs py-2 bg-white text-[#6D28D9] hover:bg-white/90">
                  Upgrade Now
                </ModernButton>
              </GlassCard>
            </div>
          </div>
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>
      </FlowArt>

      {/* Footer */}
      <footer className="relative border-t border-foreground/10 bg-card py-10 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/3">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-heading text-foreground uppercase tracking-wider font-bold">CronGuard</span>
              </Link>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 font-medium">
                Real-Time SaaS Insights, Delivered to Your Discord
              </p>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-bold mb-3">Product</h3>
                <ul className="space-y-1.5 font-semibold">
                  <li>
                    <Link href="#features" className="text-xs text-foreground/70 hover:text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="text-xs text-foreground/70 hover:text-primary transition-colors">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-xs text-foreground/70 hover:text-primary transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-bold mb-3">Legal</h3>
                <ul className="space-y-1.5 font-semibold">
                  <li>
                    <Link href="/" className="text-xs text-foreground/70 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-xs text-foreground/70 hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-foreground/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-foreground/50 font-mono">
                &copy; {new Date().getFullYear()} CronGuard. All rights reserved.
              </p>
              <div className="flex gap-2.5">
                <Link
                  href="https://x.com/xenoz4L"
                  className="w-8 h-8 flex items-center justify-center text-foreground/60 border border-foreground/10 hover:border-primary hover:text-primary transition-colors bg-background"
                >
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rishavkumar18/"
                  className="w-8 h-8 flex items-center justify-center text-foreground/60 border border-foreground/10 hover:border-primary hover:text-primary transition-colors bg-background"
                >
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Rishav07-05"
                  className="w-8 h-8 flex items-center justify-center text-foreground/60 border border-foreground/10 hover:border-primary hover:text-primary transition-colors bg-background"
                >
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </GSAPProvider>
  )
}
