import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import { useFetchFileStructure } from './Webhook'; // Mengimpor custom hook

function App() {
  const [selectedLink, setSelectedLink] = useState(null); // Menyimpan link yang dipilih dari sidebar
  const { fileStructure, openFolder, toggleFolder } = useFetchFileStructure(); // Gunakan custom hook untuk fetching file structure

  return (
    <div className="app">
      <Sidebar
        fileStructure={fileStructure}
        openFolder={openFolder}
        toggleFolder={toggleFolder}
        setSelectedLink={setSelectedLink} // Kirim setter link ke Sidebar
      />
      <Content link={selectedLink} /> {/* Mengirim link ke komponen Content */}
    </div>
  );
}

export default App;
