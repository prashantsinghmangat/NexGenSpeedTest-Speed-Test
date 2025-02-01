import React from 'react';

interface SpeedometerProps {
  value: number;
  maxValue: number;
  label: string;
  unit: string;
  size?: 'large' | 'small';
  theme?: 'dark' | 'light';
}

const Speedometer = ({ 
  value, 
  maxValue, 
  label, 
  unit, 
  size = 'large',
  theme = 'light'
}: SpeedometerProps) => {
  const rotation = Math.min((value / maxValue) * 180, 180);
  const isLarge = size === 'large';
  const isDark = theme === 'dark';
  const radius = isLarge ? 140 : 70;
  const centerX = isLarge ? 180 : 90;
  const centerY = isLarge ? 180 : 90;
  
  // Calculate the path for a semicircle starting from -90 degrees
  const getArcPath = () => {
    const startAngle = -180;
    const endAngle = 0;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const startX = centerX + radius * Math.cos(startRad);
    const startY = centerY + radius * Math.sin(startRad);
    const endX = centerX + radius * Math.cos(endRad);
    const endY = centerY + radius * Math.sin(endRad);
    
    const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? 0 : 1;
    
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  const arcPath = getArcPath();
  const arcLength = Math.PI * radius;
  
  return (
    <div className={`relative ${isLarge ? 'w-[360px] h-[360px]' : 'w-[180px] h-[180px]'}`}>
      <svg className="w-full h-full" viewBox={`0 0 ${centerX * 2} ${centerY * 2}`}>
        <defs>
          {/* Gradient for the track */}
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y1="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          
          {/* Gradient for the needle */}
          <linearGradient id="needleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        
        {/* Background Track */}
        <path
          d={arcPath}
          fill="none"
          stroke={isDark ? 'rgba(30, 41, 59, 0.1)' : 'rgba(241, 245, 249, 0.8)'}
          strokeWidth={isLarge ? 24 : 16}
          strokeLinecap="round"
        />
        
        {/* Progress Arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="url(#speedGradient)"
          strokeWidth={isLarge ? 24 : 16}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${arcLength}`}
          strokeDashoffset={arcLength * (1 - rotation / 180)}
          className="transition-all duration-1000"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        />
        
        {/* Tick Marks */}
        {[...Array(9)].map((_, i) => {
          const angle = (-180 + i * 22.5) * (Math.PI / 180);
          const tickLength = isLarge ? 12 : 8;
          const textRadius = radius + (isLarge ? 32 : 20);
          const x1 = centerX + (radius - tickLength) * Math.cos(angle);
          const y1 = centerY + (radius - tickLength) * Math.sin(angle);
          const x2 = centerX + radius * Math.cos(angle);
          const y2 = centerY + radius * Math.sin(angle);
          const textX = centerX + textRadius * Math.cos(angle);
          const textY = centerY + textRadius * Math.sin(angle);
          
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.2)'}
                strokeWidth={isLarge ? 2 : 1}
              />
              <text
                x={textX}
                y={textY}
                fill={isDark ? 'rgba(148, 163, 184, 0.7)' : 'rgba(71, 85, 105, 0.7)'}
                fontSize={isLarge ? 14 : 10}
                fontWeight="500"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {Math.round((maxValue / 8) * i)}
              </text>
            </g>
          );
        })}
        
        {/* Needle */}
        <g transform={`rotate(${rotation - 180} ${centerX} ${centerY})`}>
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX + radius - 10}
            y2={centerY}
            stroke="url(#needleGradient)"
            strokeWidth={isLarge ? 4 : 3}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={isLarge ? 12 : 8}
            fill="#3b82f6"
            className="filter drop-shadow-lg"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={isLarge ? 4 : 3}
            fill="white"
          />
        </g>
      </svg>
      
      {/* Value Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
        <div className={`${isLarge ? 'text-6xl' : 'text-3xl'} font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {Math.round(value)}
        </div>
        <div className={`${isDark ? 'text-slate-400' : 'text-gray-600'} flex flex-col items-center`}>
          <span className={`${isLarge ? 'text-2xl' : 'text-base'} font-medium`}>{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;