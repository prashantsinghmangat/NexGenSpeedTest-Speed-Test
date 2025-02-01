import React, { useState, useEffect } from 'react';
import { Download, Upload, Wifi, Globe2, Sun, Moon } from 'lucide-react';
import Speedometer from '../components/Speedometer';

const Home = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [testing, setTesting] = useState(false);
  const [isp, setIsp] = useState('Loading...');
  const [location, setLocation] = useState('Loading...');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP:', error));
    
    setIsp('Elyzium');
    setLocation('Noida');
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const startSpeedTest = () => {
    setTesting(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setPing(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.02;
      
      if (progress >= 1) {
        clearInterval(interval);
        setTesting(false);
      }

      const targetDownload = 108;
      const targetUpload = 65;
      const targetPing = 5;

      setDownloadSpeed(Math.min(targetDownload * progress, targetDownload));
      setUploadSpeed(Math.min(targetUpload * progress, targetUpload));
      setPing(Math.min(targetPing * progress + 1, targetPing));
    }, 50);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0F172A] text-white' : 'bg-[#f8faff] text-gray-900'}`}>
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wifi className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-900">Sppedmeter</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">App</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Analysis</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Network</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Speed test with
            <br />
            Sppedmeter
          </h1>
        </section>

        <div className="max-w-5xl mx-auto">
          {/* Main Speedometer */}
          <div className="flex justify-center mb-16">
            <Speedometer
              value={downloadSpeed}
              maxValue={160}
              label="Download"
              unit="mbps"
              size="large"
              theme={theme}
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Download className="text-blue-600" size={20} />
                </div>
                <span className="text-gray-600">Download</span>
              </div>
              <p className="text-xl font-semibold">{Math.round(downloadSpeed)}/mbps</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Upload className="text-purple-600" size={20} />
                </div>
                <span className="text-gray-600">Upload</span>
              </div>
              <p className="text-xl font-semibold">{Math.round(uploadSpeed)}/mbps</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Wifi className="text-rose-600" size={20} />
                </div>
                <span className="text-gray-600">Ping</span>
              </div>
              <p className="text-xl font-semibold">{Math.round(ping)}/ms</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Globe2 className="text-sky-600" size={20} />
                </div>
                <span className="text-gray-600">IP address</span>
              </div>
              <p className="text-xl font-semibold">{ipAddress || '...'}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Globe2 className="text-emerald-600" size={20} />
                </div>
                <span className="text-gray-600">Location</span>
              </div>
              <p className="text-xl font-semibold">{location}</p>
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={startSpeedTest}
              disabled={testing}
              className={`
                px-8 py-4 rounded-xl text-lg font-semibold
                transition-all duration-300 transform hover:scale-105
                ${testing
                  ? 'bg-gray-200 text-gray-500'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                }`}
            >
              {testing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Testing Speed...
                </span>
              ) : (
                'Start Speed Test'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;