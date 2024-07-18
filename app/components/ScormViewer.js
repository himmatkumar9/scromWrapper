"use client";

import React, { useEffect, useState } from 'react';
import  './scormfunctions';

const ScormViewer = ({  }) => {
  const [scormUrl, setScormUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [apiReady, setApiReady] = useState(false);

  useEffect(()=>{

  setTimeout(() => {
    setLoading(false)
  }, 3000);
  },[])


  // useEffect(() => {
  //   const fetchScormUrl = async () => {
  //     try {
  //       const response = await fetch(`https://ltibackend.onrender.com/scrom/`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch SCORM content');
  //       }
  //       const blob = await response.blob();
  //       const url = URL.createObjectURL(blob);
  //       console.log(url)
  //       setScormUrl(url);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message || 'An error occurred');
  //       setLoading(false);
  //     }
  //   };

  //   fetchScormUrl();
  // }, []);

  // if (!apiReady) {
  //   return <div>Loading SCORM API...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <iframe  
      crossOrigin = 'true'
      src={'https://lti-backend.vercel.app/scrom/indexAPI.html'} title="SCORM Package" width="100%" height="600px"></iframe>
    </div>
  );
};

export default ScormViewer;
