import ScormViewer from './components/ScormViewer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let scormUrl=`https://saraslmsdev.blob.core.windows.net/scorm/topic-2-history-and-evolution-of-cloud-computing-scorm12-34eiha8M.zip`

  return (
    <html lang="en">
      <body>
        <ScormViewer
          scormUrl={scormUrl}
        />
      </body>
    </html>
  );
}
