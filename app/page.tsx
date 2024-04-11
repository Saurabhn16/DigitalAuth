// pages/index.tsx
'use client'

import EditorComponent from "@/components/Editor";


const Home: React.FC = () => {
  return (<> <h1>Home Page</h1>
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Editor.js Integration</h1>
      <EditorComponent />
    </div></>
  );
};

export default Home;
