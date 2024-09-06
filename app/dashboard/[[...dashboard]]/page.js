// app/dashboard/page.jsx or wherever your DashboardPage component is located
'use client';

import React, { useState } from 'react';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import MealPlanGenerator from '../../meal-planner/page'; // Ensure correct path

export default function DashboardPage() {
  const [selectedContent, setSelectedContent] = useState('meal-planner');

  const renderContent = () => {
    switch (selectedContent) {
      case 'meal-planner':
        return <MealPlanGenerator />;
      case 'saved-meals':
        return <div>Saved Meals Content</div>; // Adjust as needed
      case 'settings':
        return <div>Settings Content</div>; // Adjust as needed
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <ClerkProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#f9fafb' }} prefetch={false}>
            <LeafIcon style={{ width: '24px', height: '24px' }} />
            Meal Planner
          </Link>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <SignedOut>
              <Link href="/sign-in" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#f9fafb' }} prefetch={false}>
                Login
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <div style={{ display: 'flex', flex: '1' }}>
          <aside style={{ backgroundColor: '#374151', color: '#f9fafb', width: '16rem', padding: '1rem' }}>
            <nav>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                  <button
                    onClick={() => setSelectedContent('meal-planner')}
                    style={{ display: 'block', padding: '0.5rem 1rem', color: '#f9fafb', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
                  >
                    Meal Planner
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedContent('saved-meals')}
                    style={{ display: 'block', padding: '0.5rem 1rem', color: '#f9fafb', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
                  >
                    Saved Meals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedContent('settings')}
                    style={{ display: 'block', padding: '0.5rem 1rem', color: '#f9fafb', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
                  >
                    Settings
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          <main style={{ flex: '1', padding: '1.5rem' }}>
            {renderContent()}
          </main>
        </div>
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
    </ClerkProvider>
  );
}

function LeafIcon(props) {
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
  );
}
