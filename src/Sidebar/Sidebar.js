import React from 'react';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = ({ fileStructure, openFolder, toggleFolder, setSelectedLink }) => {
  const handleFileClick = (file) => {
    setSelectedLink(file.name); // Mengirim link yang dipilih ke App.js
  };

  return (
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
                      onClick={() => handleFileClick(file)} // Panggil handleFileClick
                    >
                      <FaFileAlt style={{ marginRight: '8px' }} />
                      {file.name.replace('/', '')} {/* Hilangkan '/' dari tampilan */}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
