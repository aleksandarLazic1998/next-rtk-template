'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Sidebar.scss';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      data-testid="sidebar"
      className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}
    >
      <button onClick={() => setIsSidebarOpen((state) => !state)}>X</button>

      {isSidebarOpen && (
        <div className="sidebar__nav-links">
          <Link href="/" onClick={(e) => e.stopPropagation()}>
            Home
          </Link>
          <Link href="/posts" onClick={(e) => e.stopPropagation()}>
            Posts
          </Link>
          <Link href="/dashboard" onClick={(e) => e.stopPropagation()}>
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};
