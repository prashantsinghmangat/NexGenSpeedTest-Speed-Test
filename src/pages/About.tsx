import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About NexGenSpeed</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're dedicated to providing accurate and reliable internet speed testing services to users worldwide.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6">
          <Shield className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Reliable Testing</h3>
          <p className="text-gray-600">
            Our speed tests provide accurate results you can trust.
          </p>
        </div>
        <div className="text-center p-6">
          <Zap className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
          <p className="text-gray-600">
            Get your speed test results in seconds.
          </p>
        </div>
        <div className="text-center p-6">
          <Globe className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
          <p className="text-gray-600">
            Test servers located worldwide for optimal accuracy.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          At NexGenSpeed, we believe in providing transparent and accurate internet speed testing tools to help users understand their connection quality. Our mission is to empower users with reliable data about their internet performance.
        </p>
      </div>
    </div>
  );
};

export default About;