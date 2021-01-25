import { videoOOPContainer } from '@/canvas';
import React, { useEffect, useRef, useState } from 'react';

const IndexPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      // const instance = new CanvasInstance(canvasRef.current);
      console.log('videoOOPContainer:', videoOOPContainer)
    }
  }, []);

  return (
    <>
      <h1>首页</h1>
      <canvas
        style={{ width: 600, height: 200, border: '1px solid' }}
        ref={canvasRef}
      />
    </>
  );
};

export default IndexPage;
