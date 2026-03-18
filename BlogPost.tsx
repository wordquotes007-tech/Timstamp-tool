import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BlogPost.css';

const blogContent: Record<string, any> = {
  'how-to-add-timestamps-youtube': {
    title: 'How to Add Timestamps to YouTube Videos',
    date: 'March 15, 2026',
    readTime: '5 min read',
    content: `
      <p>Adding timestamps to your YouTube videos is one of the most effective ways to improve viewer experience and boost your video's SEO performance.</p>

      <h2>What Are YouTube Timestamps?</h2>
      <p>YouTube timestamps, also known as chapters, allow viewers to navigate directly to specific sections of your video. They appear as clickable links in your video description and show up on the progress bar.</p>

      <h2>How to Add Timestamps</h2>
      <ol>
        <li><strong>Open your video description:</strong> Go to YouTube Studio and select the video you want to edit.</li>
        <li><strong>Add timestamps in the description:</strong> Format each timestamp as MM:SS or HH:MM:SS followed by a space and the chapter title.</li>
        <li><strong>Start with 0:00:</strong> Your first timestamp must be 0:00 for chapters to work.</li>
        <li><strong>Include at least 3 timestamps:</strong> YouTube requires a minimum of 3 timestamps, each at least 10 seconds long.</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use descriptive chapter titles that help viewers understand the content</li>
        <li>Keep timestamps organized chronologically</li>
        <li>Don't overdo it - too many chapters can be overwhelming</li>
        <li>Update timestamps if you edit your video</li>
      </ul>

      <h2>Why Use Our Timestamp Generator?</h2>
      <p>Our tool automatically formats your timestamps correctly, validates the format, and helps you avoid common mistakes. Simply enter your video URL and timestamps, and we'll generate perfectly formatted chapters ready to paste into your description.</p>
    `
  },
  'youtube-chapters-seo-benefits': {
    title: 'YouTube Chapters: SEO Benefits and Best Practices',
    date: 'March 10, 2026',
    readTime: '7 min read',
    content: `
      <p>YouTube chapters are more than just a convenience feature - they're a powerful SEO tool that can significantly impact your video's performance.</p>

      <h2>SEO Benefits of YouTube Chapters</h2>
      <h3>1. Improved Search Visibility</h3>
      <p>YouTube chapters help search engines understand your content better. Each chapter acts as additional metadata that can be indexed.</p>

      <h3>2. Increased Watch Time</h3>
      <p>Viewers can jump to the sections they're most interested in, which often leads to longer overall watch times.</p>

      <h3>3. Better User Experience</h3>
      <p>Chapters make your content more accessible and user-friendly, which signals quality to YouTube's algorithm.</p>

      <h2>Best Practices for Chapter SEO</h2>
      <ul>
        <li><strong>Use keyword-rich chapter titles:</strong> Include relevant keywords naturally in your chapter names.</li>
        <li><strong>Be specific and descriptive:</strong> Clear titles help both viewers and search engines understand your content.</li>
        <li><strong>Match your video content:</strong> Ensure chapters accurately reflect what's in each section.</li>
        <li><strong>Optimize chapter length:</strong> Aim for 1-3 minute sections for most content types.</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Don't use vague chapter titles like "Part 1" or "Section 2". Instead, use descriptive titles that tell viewers what they'll learn.</p>
    `
  },
  'timestamp-format-guide': {
    title: 'YouTube Timestamp Format: Complete Guide',
    date: 'March 5, 2026',
    readTime: '4 min read',
    content: `
      <p>Getting the timestamp format right is crucial for YouTube chapters to work properly. This guide covers everything you need to know.</p>

      <h2>Correct Format</h2>
      <p>YouTube accepts two timestamp formats:</p>
      <ul>
        <li><strong>MM:SS</strong> - For videos under 1 hour (e.g., 05:30)</li>
        <li><strong>HH:MM:SS</strong> - For videos over 1 hour (e.g., 1:05:30)</li>
      </ul>

      <h2>Formatting Rules</h2>
      <ol>
        <li>Always use leading zeros for consistency (05:30, not 5:30)</li>
        <li>Separate timestamp from title with a space</li>
        <li>Place each timestamp on a new line</li>
        <li>Start with 0:00 as your first timestamp</li>
      </ol>

      <h2>Common Formatting Errors</h2>
      <h3>Missing 0:00</h3>
      <p>Your first timestamp MUST be 0:00, or chapters won't work at all.</p>

      <h3>Incorrect Time Format</h3>
      <p>Using formats like "5m 30s" or "5.30" won't work. Stick to the MM:SS format.</p>

      <h3>Too Few Chapters</h3>
      <p>You need at least 3 timestamps, and each section must be at least 10 seconds long.</p>

      <h2>Use Our Generator</h2>
      <p>Skip the formatting headaches! Our YouTube Timestamp Generator automatically handles all formatting rules and validates your timestamps.</p>
    `
  }
};

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <p>Post not found</p>
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <article className="blog-post">
          <header className="post-header">
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
