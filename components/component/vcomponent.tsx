'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JSX, SVGProps } from "react";

export function Vcomponent() {
  
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard'); // Replace '/dashboard' with your desired route
    }
  }, [isLoaded, isSignedIn, router]);

  return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-2xl font-bold" prefetch={false}>
            <LeafIcon className="w-6 h-6" />
            Meal Planner
          </Link>
          <div className="flex items-center gap-4">
            <SignedOut>
              <Link href="/sign-in" className="text-sm font-medium" prefetch={false}>
                Login
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className="flex-1 bg-background">
        <section className="flex items-center justify-center h-[80vh] bg-[#f5f5f5]">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-4xl font-bold">Personalized Meal Plans</h1>
            <p className="mb-4 text-muted-foreground">
              Let our AI-powered system create delicious and nutritious meals tailored to your preferences.
            </p>
            <Link href="/sign-in" className="text-sm font-medium" prefetch={false}>
              <Button className="px-8 py-3 text-lg font-medium">              
                Get Started
              </Button>
            </Link>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How it Works</h2>
              <p className="text-muted-foreground">
                Our AI-powered meal planning system makes it easy to eat healthy and delicious meals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <UserIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Create Profile</h3>
                <p className="text-muted-foreground">
                  Start by creating your user profile, where you can input your dietary preferences, allergies, and
                  health goals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <CpuIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI system analyzes your profile and generates personalized meal plans tailored to your
                  needs.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <ClipboardIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Meal Plans</h3>
                <p className="text-muted-foreground">
                  Receive your personalized meal plans, complete with calorie information and easy-to-follow recipes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Why Choose Us?</h2>
              <p className="text-muted-foreground">
                Our AI-powered meal planning system offers a range of benefits to help you achieve your health goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <FlameIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Calorie-Optimized</h3>
                <p className="text-muted-foreground">
                  Our meal plans are carefully calculated to provide the right balance of calories and nutrients to help
                  you reach your goals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <LeafIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Dietary Preferences</h3>
                <p className="text-muted-foreground">
                  Whether you&apos;re vegan, gluten-free, or have other dietary needs, our system can accommodate your
                  preferences.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <BoltIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-muted-foreground">
                  Forget the hassle of meal planning. Our system does the work for you, providing you with ready-to-go
                  meal plans.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <SmileIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Delicious Recipes</h3>
                <p className="text-muted-foreground">
                  Our meal plans feature a variety of delicious and nutritious recipes that are sure to satisfy your
                  taste buds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Subscription Tiers</h2>
              <p className="text-muted-foreground">Choose the plan that best fits your needs and goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-4xl font-bold">$9.99</p>
                </div>
                <p className="text-muted-foreground">Get started with our AI-powered meal planning system.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Personalized meal plans
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Calorie-optimized recipes
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Dietary preference support
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$19.99</p>
                </div>
                <p className="text-muted-foreground">Unlock advanced features for a more personalized experience.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Everything in Basic, plus:
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Grocery list generation
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Meal prep guides
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Nutrition tracking
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <p className="text-4xl font-bold">$29.99</p>
                </div>
                <p className="text-muted-foreground">Get the ultimate meal planning experience.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Everything in Pro, plus:
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Personalized macro-nutrient ratios
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Grocery delivery integration
                  </li>
                  <li>
                    <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                    Dedicated nutrition coaching
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Customer Feedback</h2>
              <p className="text-muted-foreground">Explore the Success Stories Behind Our Impactful Solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <blockquote className="text-lg font-semibold leading-snug">
                &quot;The Meal Planner has been a game-changer for me. The personalized meal plans have helped me reach my
                  health goals without sacrificing taste.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-muted-foreground text-sm">Fitness Enthusiast</div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <blockquote className="text-lg font-semibold leading-snug">
                &quot;I was hesitant to try a meal planning service, but the Meal Planner&apos;s AI-powered system has made it
                  so easy to eat healthy and delicious meals. Highly recommended!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Michael Lee</div>
                    <div className="text-muted-foreground text-sm">Busy Professional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p>Get answers to the most common questions about our meal planning service.</p>
            </div>
            <Accordion type="multiple">
              <AccordionItem value="question1">
                <AccordionTrigger>How does the meal planning service work?</AccordionTrigger>
                <AccordionContent>
                  Our AI-powered meal planning system analyzes your dietary preferences, health goals, and other factors
                  to create personalized meal plans tailored to your needs. You simply sign up, fill out your profile,
                  and we&apos;ll handle the rest.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question2">
                <AccordionTrigger>Can I customize my meal plans?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our system allows you to customize your meal plans by adjusting your dietary preferences,
                  allergies, and other settings. You can also provide feedback on the meals you receive, and we&apos;ll
                  adjust your future plans accordingly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question3">
                <AccordionTrigger>How much does the service cost?</AccordionTrigger>
                <AccordionContent>
                  We offer a range of subscription plans to fit your budget and needs. Our basic plan starts at $9.99
                  per month, with discounts available for annual subscriptions. You can view all of our pricing options
                  on our website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question4">
                <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. We don&apos;t believe in locking you into long-term
                  contracts, so you&apos;re free to pause or cancel your plan as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        </main>
        <footer className="bg-black text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm">Copyright &copy; 2024 Meal Planner</p>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="https://www.instagram.com/meal_planner.ai/" className="text-sm hover:underline" prefetch={false}>
              Instagram
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Email
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm">Contact: 555-555-5555</p>
          </div>
        </footer>
      </div>

  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClipboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
