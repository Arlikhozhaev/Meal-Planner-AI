'use client'
import React, { useState } from 'react';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

// DashboardPage component
export default function DashboardPage() {
  const [message, setMessage] = useState('');

  const showMessage = (msg) => {
    setMessage(msg);

  };

  return (
    <ClerkProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#f9fafb' }}>
            <LeafIcon style={{ width: '24px', height: '24px' }} />
            Meal Planner
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <SignedOut>
              <button onClick={() => showMessage('Redirecting to sign-in page...')} style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#f9fafb', background: 'none', border: 'none', cursor: 'pointer' }}>
                Login
              </button>
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
                  <button onClick={() => showMessage('Meal planner coming soon!')} style={{ display: 'block', padding: '0.5rem 1rem', color: '#f9fafb', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Meal Planner
                  </button>
                </li>
                <li>
                  <button onClick={() => showMessage('Saved meals coming soon!')} style={{ display: 'block', padding: '0.5rem 1rem', color: '#f9fafb', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Saved Meals
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          <main style={{ flex: '1', padding: '1.5rem' }}>
            {message && <div style={{ padding: '1rem', backgroundColor: '#d1d5db', color: '#1f2937', borderRadius: '0.375rem', marginBottom: '1rem' }}>{message}</div>}
            {/* Main content goes here */}
          </main>
        </div>
        <footer className="bg-black text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm">Copyright &copy; 2024 Meal Planner</p>
            <Link
             href="#" className="text-sm hover:underline" prefetch={false}>
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

// LeafIcon component
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
