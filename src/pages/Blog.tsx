import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Internet Speed Tests',
    excerpt: 'Learn how internet speed tests work and what the results mean for your connection.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10'
  },
  {
    id: 2,
    title: 'Improving Your Internet Speed',
    excerpt: 'Tips and tricks to optimize your internet connection for better performance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08'
  },
  {
    id: 3,
    title: 'The Future of Internet Connectivity',
    excerpt: 'Exploring upcoming technologies that will revolutionize internet speeds.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-05'
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-1">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;