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

        {/* Slide 2: Hero */}
        <FlowSection id="hero" aria-label="Hero" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">02 — Hero</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 my-auto w-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[0.8] uppercase tracking-tighter text-white font-heading">
                KNOW
                <br />
                WHEN
                <br />
                IT
                <br />
                FAILS.
              </h2>
              <p className="max-w-[45ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/90">
                Monitor your scheduled jobs and critical application events in real time. Get instant alerts when something goes wrong.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <ModernButton href="/sign-up" variant="primary" size="md">
                  START FREE <ArrowRight className="size-4 ml-1" />
                </ModernButton>
                <ModernButton href="#how-it-works" variant="secondary" size="md">
                  SEE HOW IT WORKS
                </ModernButton>
              </div>
            </div>
            
            {/* Product Visualization */}
            <div className="w-full lg:w-[50%] flex flex-col gap-4 self-center lg:mt-0 mt-8">
              <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden font-sans min-h-[300px]">
                <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-mono tracking-wider text-white/60 uppercase">Live Monitors</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">3 Active</span>
                </div>

                {/* Monitors List */}
                <div className="space-y-3 pb-16">
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white font-heading">database-backup</p>
                        <p className="text-[10px] text-white/50 font-mono">daily @ 00:00 &bull; 2h ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase tracking-wider font-bold">
                      Healthy
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white font-heading">stripe-webhook</p>
                        <p className="text-[10px] text-white/50 font-mono">real-time &bull; 3m ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase tracking-wider font-bold">
                      Healthy
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-red-500/20 bg-red-500/5 hover:border-red-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                        <Zap className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white font-heading">welcome-emails</p>
                        <p className="text-[10px] text-white/50 font-mono">hourly &bull; 10m ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[9px] uppercase tracking-wider font-bold animate-pulse">
                      Failing
                    </span>
                  </div>
                </div>

                {/* Overlapping Discord Notification */}
                <div className="absolute bottom-4 right-4 left-4 md:right-4 md:w-[320px] bg-[#313338] border border-black/30 rounded-xl p-4 shadow-2xl border-l-[4px] border-l-red-500">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                      <Bell className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">CronGuard</span>
                        <span className="bg-[#5865F2] text-white text-[8px] font-bold px-1 py-0.2 rounded uppercase">BOT</span>
                        <span className="text-[9px] text-white/40">Today at 12:35 PM</span>
                      </div>
                      <p className="text-xs font-bold text-red-400 font-heading">🔴 Alert: welcome-emails failed</p>
                      <p className="text-[9px] text-white/70 font-mono leading-tight">
                        Job did not ping within its scheduled window of 1 hour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 3: Problem / Value */}
        <FlowSection id="problem" aria-label="Problem" style={{ backgroundColor: '#000000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">03 — Problem</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto space-y-8 w-full">
            <div className="space-y-6">
              <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-extrabold leading-[0.8] uppercase tracking-tighter text-white font-heading">
                STOP
                <br />
                GUESSING.
                <br />
                START
                <br />
                MONITORING.
              </h2>
              <p className="max-w-[45ch] text-[clamp(1.1rem,2.2vw,1.6rem)] font-normal leading-relaxed text-white/80 mx-auto">
                Developers shouldn&apos;t have to discover failed jobs after users report them. CronGuard alerts you the second a job misses its window.
              </p>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 4: Product Showcase */}
        <FlowSection id="showcase" aria-label="Showcase" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">04 — Showcase</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto my-auto space-y-8 w-full">
            <div className="space-y-4">
              <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold tracking-tight uppercase leading-none font-heading text-white">
                RELIABLE MONITORING INTERFACE
              </h2>
              <p className="max-w-[55ch] text-[clamp(0.95rem,1.8vw,1.25rem)] text-white/80 mx-auto font-heading">
                A clean visual timeline of your background executions. Spot success states and failure events instantly.
              </p>
            </div>

            {/* Dashboard Mockup */}
            <div className="w-full bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl p-4 md:p-6 overflow-hidden max-w-4xl text-left font-sans">
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-xs text-white/50 font-mono">dashboard.cronguard.sh</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono">Uptime: 99.98%</div>
              </div>

              {/* Event Timeline Grid */}
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="bg-white/5 p-4 rounded-lg flex flex-col md:flex-row justify-between md:items-center gap-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Category: Backups</span>
                    <h4 className="text-sm font-bold text-white">s3-asset-backup</h4>
                  </div>
                  {/* Visual dots timeline */}
                  <div className="flex gap-1 items-center">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className={`w-2.5 h-6 rounded-sm ${i === 8 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500/80'}`} />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-red-400">1 Failure today</p>
                    <p className="text-[9px] text-white/30 font-mono">Last check: 12m ago</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white/5 p-4 rounded-lg flex flex-col md:flex-row justify-between md:items-center gap-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Category: Payments</span>
                    <h4 className="text-sm font-bold text-white">stripe-webhook-listener</h4>
                  </div>
                  {/* Visual dots timeline */}
                  <div className="flex gap-1 items-center">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className="w-2.5 h-6 rounded-sm bg-emerald-500/80" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-emerald-400">100% Success</p>
                    <p className="text-[9px] text-white/30 font-mono">Last check: 2m ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 5: How It Works */}
        <FlowSection id="how-it-works" aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 text-center">05 — How it works</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 my-auto w-full">
            <div className="flex-1">
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-extrabold leading-[0.85] uppercase tracking-tighter text-black font-heading">
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
                <div className="flex items-center gap-1.5 px-3 py-2 bg-black/10 border-b border-black/15 select-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#DC143C]" />
                    <div className="w-2 h-2 rounded-full bg-black/35" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                  </div>
                  <span className="text-[10px] text-black/60 ml-1 font-mono">cronguard.js</span>
                </div>
                <div className="overflow-x-auto text-[9px] sm:text-xs font-mono p-4 bg-white/70">
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    customStyle={{ background: "transparent", padding: 0 }}
                  >
                    {codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-black/10 w-full mt-auto">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-black">01 — CONNECT</p>
              <p className="text-xs text-black/77 mt-1 font-medium">Connect your application or scheduled job.</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-black">02 — MONITOR</p>
              <p className="text-xs text-black/77 mt-1 font-medium">CronGuard receives and tracks events.</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-black">03 — ALERT</p>
              <p className="text-xs text-black/77 mt-1 font-medium">Get notified immediately when something fails.</p>
            </div>
          </div>
        </FlowSection>

        {/* Slide 6: Features */}
        <FlowSection id="features" aria-label="Features" style={{ backgroundColor: '#000000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">06 — Features</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="my-auto w-full">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold uppercase tracking-tighter text-white font-heading text-center mb-10">
              BUILT FOR MODERN TEAMS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">01 &bull; Real-time Monitoring</p>
                <h4 className="text-lg font-bold text-white font-heading">Event tracking</h4>
                <p className="text-xs text-white/60 font-medium">Instant tracking of background executions, cron jobs, and webhooks.</p>
              </div>

              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">02 &bull; Discord Alerts</p>
                <h4 className="text-lg font-bold text-white font-heading">Instant Notifications</h4>
                <p className="text-xs text-white/60 font-medium">Immediate notifications sent to your Discord channels the second a job fails.</p>
              </div>

              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">03 &bull; Categorization</p>
                <h4 className="text-lg font-bold text-white font-heading">Group Events</h4>
                <p className="text-xs text-white/60 font-medium">Organize alerts and monitors into clear categories (e.g. database, auth, billing).</p>
              </div>

              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">04 &bull; Usage Tracking</p>
                <h4 className="text-lg font-bold text-white font-heading">Volume Statistics</h4>
                <p className="text-xs text-white/60 font-medium">Keep tabs on performance metrics, runs count, and monthly event limits.</p>
              </div>

              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">05 &bull; Event History</p>
                <h4 className="text-lg font-bold text-white font-heading">Audit Trails</h4>
                <p className="text-xs text-white/60 font-medium">Persistent historical logs of your jobs execution for compliance and debugging.</p>
              </div>

              <div className="space-y-2 p-6 border border-white/10 bg-white/5 rounded-xl">
                <p className="text-primary font-mono text-sm font-bold uppercase tracking-wider">06 &bull; Analytics</p>
                <h4 className="text-lg font-bold text-white font-heading">Performance Reports</h4>
                <p className="text-xs text-white/60 font-medium">Uptime charts and latency summaries detailing how healthy your services remain.</p>
              </div>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 7: Vision / About */}
        <FlowSection id="vision" aria-label="Vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">07 — Vision</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto space-y-8 w-full">
            <div className="space-y-6">
              <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-extrabold leading-[0.8] uppercase tracking-tighter text-white font-heading">
                BUILD
                <br />
                WITH
                <br />
                CONFIDENCE.
              </h2>
              <p className="max-w-[45ch] text-[clamp(1.1rem,2.2vw,1.6rem)] font-normal leading-relaxed text-white/80 mx-auto">
                CronGuard gives developers visibility into background jobs and application events without constantly checking logs.
              </p>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
        </FlowSection>

        {/* Slide 8: Testimonials */}
        <FlowSection id="testimonials" aria-label="Testimonials" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 text-center">08 — Testimonials</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="my-auto overflow-y-auto max-h-[80vh] w-full">
            <ClientFeedback />
          </div>
          <hr className="mt-auto mb-[2vw] border-none border-t border-black/20" />
        </FlowSection>

        {/* Slide 9: Pricing */}
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

        {/* Slide 10: Final CTA */}
        <FlowSection id="final-cta" aria-label="Join us" style={{ backgroundColor: '#000000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 text-center">10 — Join us</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto space-y-8 w-full">
            <div className="space-y-6">
              <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-extrabold leading-[0.8] uppercase tracking-tighter text-white font-heading">
                READY
                <br />
                TO KNOW
                <br />
                WHEN IT
                <br />
                FAILS?
              </h2>
              <p className="max-w-[45ch] text-[clamp(1.1rem,2.2vw,1.6rem)] font-normal leading-relaxed text-white/80 mx-auto">
                Take control of your background jobs and application events. Get started in under 5 minutes.
              </p>
              <div className="pt-4">
                <ModernButton href="/sign-up" variant="primary" size="lg" className="bg-white text-black hover:bg-white/90">
                  START FREE
                </ModernButton>
              </div>
            </div>
          </div>
          
          <hr className="mt-auto mb-[2vw] border-none border-t border-white/20" />
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
