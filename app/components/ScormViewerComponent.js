"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ScormViewer = dynamic(() => import('./ScormViewer'), {
  ssr: false,
});

export default ScormViewer;