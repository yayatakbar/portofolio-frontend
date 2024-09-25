import React, { useState } from 'react';
import CodeEditor from './DataDiri/CodeEditor';
import './App.css';

// Import ikon folder dari react-icons
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai'; // Ikon untuk folder terbuka/tertutup
import { FaFileAlt } from 'react-icons/fa'; // Ikon untuk file

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [openFolder, setOpenFolder] = useState({}); // State untuk melacak folder terbuka/tutup

  // Simulasi data struktur folder dan file
  const fileStructure = {
    "Personal Info": [
      {
        name: 'personalInfo.java',
        content: `
          public class PersonalInfo {
              public static void main(String[] args) {
                  String name = "Muhammad Sayuti Akbar";
                  String birthPlace = "Bogor";
                  String birthDate = "01 December 1996";
                  String gender = "Laki-Laki";
                  String address = "Gunung Putri Bogor";
                  String github = "https://github.com/yayatakbar";
                  String facebook = "https://www.facebook.com/muhammad.s.akbar.90/";
              }
          }
        `
      }
    ]
  };

  // Toggle untuk buka/tutup folder
  const toggleFolder = (folder) => {
    setOpenFolder((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          {Object.keys(fileStructure).map((folder, index) => (
            <li key={index}>
              <div className="folder-name" onClick={() => toggleFolder(folder)} style={{ cursor: 'pointer' }}>
                {openFolder[folder] ? <AiFillFolderOpen style={{ marginRight: '8px' }} /> : <AiFillFolder style={{ marginRight: '8px' }} />}
                {folder}
              </div>
              {openFolder[folder] && (
                <ul>
                  {fileStructure[folder].map((file, fileIndex) => (
                    <li key={fileIndex}>
                      <a
                        href="#!"
                        className={selectedFile === file.name ? 'active' : ''}
                        onClick={() => setSelectedFile(file)}
                      >
                        <FaFileAlt style={{ marginRight: '8px' }} /> {/* Ikon File */}
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedFile ? (
          <CodeEditor code={selectedFile.content} />
        ) : (
          <p>Select a file to view its content.</p>
        )}
      </div>
    </div>
  );
}

export default App;
