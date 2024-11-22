import React, { useEffect, useState } from 'react';
import { API } from './scormfunctions'
const ScormViewer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <div>
      {/* {loading ? <div>Loading SCORM API...</div> : (
        <iframe  
          id="scormIframe"
          src='https://api.nailsbyru.com/scrom/topic-5/scormdriver/indexAPI.html'
          title="SCORM Package"
          width="100%"
          height="600px"
          onLoad={handleIframeLoad}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      )} */}
      <button onClick={() => {
if (!window.parent.API) {
  window.parent.API = API; // Attach the local API for testing
  console.log("Simulated API attached to parent window.");
}

if (!window.opener || !window.opener.API) {
  console.log("No valid opener window or API found.");
}
        const ChildWindow = window.open(
          'https://nailsbyru.com/scrom/topic-5/scormdriver/indexAPI.html',
          'ChildWindow',
          'width=600,height=400'
        );
       
      }}>press me</button>
      {/* {error && <div>Error: {error}</div>} */}
    </div>
  );
};

export default ScormViewer;
