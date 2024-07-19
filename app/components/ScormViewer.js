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
          src='https://www.nailsbyru.com/scrom/topic-5/scormcontent/index.html'
          title="SCORM Package"
          width="100%"
          height="600px"
          onLoad={handleIframeLoad}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      )} */}
      <button onClick={() => {
        window.API=API
        const ChildWindow = window.open(
          'https://www.nailsbyru.com/scrom/topic-5/scormdriver/indexAPI.html',
          'ChildWindow',
          'width=600,height=400'
        );

      }}>press me</button>
      {/* {error && <div>Error: {error}</div>} */}
    </div>
  );
};

export default ScormViewer;
