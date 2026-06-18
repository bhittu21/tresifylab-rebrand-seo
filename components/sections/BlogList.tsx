'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './BlogList.module.css';

const filters = [
  'All',
  'SEO Growth',
  'Funnel & CRO',
  'Content SEO',
  'Local SEO',
  'Case Studies'
];

const blogPosts = [
  {
    title: 'Show Proof, Not Promises',
    category: 'Case Studies',
    author: 'Sheikh',
    date: 'May 24, 2026',
    hasImage: true,
  },
  {
    title: 'Get Found by Nearby Customers',
    category: 'Local SEO',
    author: 'Sheikh',
    date: 'May 24, 2026',
    hasImage: false,
  },
  {
    title: 'Write Content That Ranks and Converts',
    category: 'Content SEO',
    author: 'Sheikh',
    date: 'May 24, 2026',
    hasImage: false,
  }
];

export default function BlogList() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className={styles.section} id="blog-list" aria-label="Blog Library">
      <div className="container">
        
        {/* Header & Filters */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
              </svg>
            </span>
            Blog Library
          </div>
          
          <h2 className={styles.heading}>All SEO & funnel blogs.</h2>
          <p className={styles.subtext}>
            Filter by topic. Keep the page simple, scannable, and focused on lead-generation problems.
          </p>

          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {blogPosts
            .filter((post) => activeFilter === 'All' || post.category === activeFilter)
            .map((post, index) => (
            <Link href={`/blog/${index}`} key={index} className={styles.card}>
              
              {/* Top Graphic / Image Area */}
              <div className={`${styles.imageArea} ${!post.hasImage ? styles.noImage : ''}`}>
                {post.hasImage ? (
                  <img 
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&q=80" 
                    alt={post.title} 
                    className={styles.coverImage} 
                  />
                ) : null}
                
                {/* Floating Category Badge */}
                <div className={styles.cardCategory}>
                  {post.category}
                </div>
              </div>

              {/* Title */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>

              {/* Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.authorBadge}>{post.author}</div>
                <div className={styles.date}>&bull; {post.date}</div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
