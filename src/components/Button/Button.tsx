import React from 'react';

interface ButtonProps {
  color?: string;
  rounded?: boolean;
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({ color = 'blue', rounded = false, children }) => {
  const buttonClasses = `text-black px-4 py-2 focus:outline-none ${rounded ? 'rounded-full' : 'rounded'}`;

  return (
    <button className={buttonClasses} style={{background: color, borderRadius:'0px', paddingRight:'50px', paddingLeft:'50px', paddingTop:'20px', paddingBottom:'20px', fontSize:'20px'}}>
      {children}
    </button>
  );
};
