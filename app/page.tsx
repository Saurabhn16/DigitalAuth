// pages/index.tsx
'use client'

import EditorComponent from "./components/Editor";


const Home: React.FC = () => {
  return (<> 
    <div className="container mx-auto">
      <EditorComponent />
    </div></>
  );
};

export default Home;
