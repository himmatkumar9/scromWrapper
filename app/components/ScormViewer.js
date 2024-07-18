"use client";

import React, { useEffect, useState } from 'react';
import { ScormProcessInitialize, ScormProcessFinish, ScormProcessGetValue, ScormProcessSetValue } from './scormfunctions';

const ScormViewer = ({  }) => {
  const [scormUrl, setScormUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{

  setTimeout(() => {
    setLoading(false)
  }, 3000);
  },[])
  useEffect(() => {
    // Initialize SCORM
    try {
      ScormProcessInitialize();
      
      // Example of getting and setting a SCORM value
      const lessonStatus = ScormProcessGetValue("cmi.core.lesson_status");
      console.log("Lesson status:", lessonStatus);
      
      ScormProcessSetValue("cmi.core.lesson_status", "incomplete");

      setLoading(false);
    } catch (err) {
      console.error("Error initializing SCORM:", err);
      setError("Failed to initialize SCORM");
      setLoading(false);
    }

    // Cleanup function
    return () => {
      try {
        ScormProcessFinish();
      } catch (err) {
        console.error("Error finishing SCORM:", err);
      }
    };
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

  if (loading) {
    return <div>Loading...</div>;
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
