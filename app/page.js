
import dynamic from 'next/dynamic';
import ScormViewer from './components/ScormViewerComponent';

export default function Page() {
  
  return (
    <main className="flex min-h-screen flex-col p-6">
          <ScormViewer/>
    </main>
  );
}
