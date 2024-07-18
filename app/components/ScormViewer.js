"use client";

import React, { useEffect, useState } from 'react';
import { ScormProcessInitialize, ScormProcessFinish, ScormProcessGetValue, ScormProcessSetValue } from './scormfunctions';

const ScormViewer = ({  }) => {
  const [scormUrl, setScormUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [apiReady, setApiReady] = useState(false);

  // useEffect(()=>{

  // setTimeout(() => {
  //   setLoading(false)
  // }, 3000);
  // },[])
  useEffect(() => {
    // Define the SCORM API
    const API = {
      LMSInitialize: (param) => {
        console.log("LMSInitialize", param);
        return "true";
      },
      LMSFinish: (param) => {
        console.log("LMSFinish", param);
        return "true";
      },
      LMSGetValue: (element) => {
        console.log("LMSGetValue", element);
        return localStorage.getItem(element) || "";
      },
      LMSSetValue: (element, value) => {
        console.log("LMSSetValue", element, value);
        localStorage.setItem(element, value);
        return "true";
      },
      // ... other API methods ...
    };

    // Listen for messages from the iframe
    window.addEventListener('message', (event) => {
      if (event.origin !== "https://ltibackend.onrender.com") return;

      const { method, params } = event.data;
      if (API[method]) {
        const result = API[method](...params);
        event.source.postMessage({ method, result }, event.origin);
      }
    });
  }, []);

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

  if (!apiReady) {
    return <div>Loading SCORM API...</div>;
  }
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <iframe src={'https://ltibackend.onrender.com/scrom/indexAPI.html'} title="SCORM Package" width="100%" height="600px"></iframe>
    </div>
  );
};

export default ScormViewer;
