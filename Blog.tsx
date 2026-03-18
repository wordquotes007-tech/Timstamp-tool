import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    slug: 'how-to-add-timestamps-youtube',
    title: 'How to Add Timestamps to YouTube Videos',
    excerpt: 'Learn the complete guide to adding professional timestamps and chapters to your YouTube videos for better engagement and SEO.',
    date: 'March 15, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'youtube-chapters-seo-benefits',
    title: 'YouTube Chapters: SEO Benefits and Best Practices',
    excerpt: 'Discover how YouTube chapters can boost your video SEO, increase watch time, and improve viewer retention.',
    date: 'March 10, 2026',
    readTime: '7 min read'
  },
  {
    slug: 'timestamp-format-guide',
    title: 'YouTube Timestamp Format: Complete Guide',
    excerpt: 'Everything you need to know about proper timestamp formatting, including common mistakes and how to avoid them.',
    date: 'March 5, 2026',
    readTime: '4 min read'
  }
];

function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="page-header">
          <h1 className="gradient-text">Blog</h1>
          <p>Tips, guides, and best practices for YouTube timestamps</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
