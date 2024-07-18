"use client";

// ScormViewer.js

import React, { useState, useEffect } from 'react';

const ScormViewer = ({ scormUrl }) => {
  const [loading, setLoading] = useState(true);
  const [scormContent, setScormContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchScormContent = async () => {
      try {
        const response = await fetch(scormUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch SCORM content');
        }
        const data = await response.text();
        if (isMounted) {
          setScormContent(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message || 'An error occurred');
          setLoading(false);
        }
      }
    };

    fetchScormContent();

    return () => {
      isMounted = false;
    };
  }, [scormUrl]);

  if (loading) {
    return <div>Loading SCORM content...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>SCORM Content</h2>
      <div dangerouslySetInnerHTML={{ __html: scormContent }} />
    </div>
  );
};

export default ScormViewer;
