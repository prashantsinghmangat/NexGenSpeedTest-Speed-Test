import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  1: {
    title: 'Understanding Internet Speed Tests',
    content: `
      Internet speed tests are essential tools for measuring your connection's performance. They work by downloading and uploading sample files and measuring the time taken to complete these transfers.

      Key metrics in speed tests:
      - Download Speed: How quickly you can receive data
      - Upload Speed: How quickly you can send data
      - Ping: The time it takes for data to travel to a server and back
      
      Understanding these metrics helps you determine if you're getting the service you're paying for from your ISP.
    `,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    author: 'John Doe'
  },
  2: {
    title: 'Improving Your Internet Speed',
    content: `
      There are several ways to optimize your internet connection:

      1. Update your router's firmware
      2. Position your router correctly
      3. Use a wired connection when possible
      4. Clear your browser cache regularly
      5. Consider upgrading your equipment

      These simple steps can significantly improve your internet performance.
    `,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    author: 'Jane Smith'
  },
  3: {
    title: 'The Future of Internet Connectivity',
    content: `
      The future of internet connectivity looks promising with several emerging technologies:

      - 5G Networks
      - Satellite Internet
      - Fiber Optic Expansion
      - Edge Computing

      These technologies will revolutionize how we connect to the internet and experience online content.
    `,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-05',
    author: 'Mike Johnson'
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span className="mr-4">By {post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;