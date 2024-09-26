import { useState, useEffect } from 'react';

export const useFetchFileStructure = () => {
  const [fileStructure, setFileStructure] = useState({});
  const [openFolder, setOpenFolder] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/sidebar') // Ambil struktur sidebar
      .then(response => response.json())
      .then(data => {
        const formattedData = data.reduce((acc, item) => {
          acc[item.name] = [
            {
              name: item.link, // Simpan link dengan "/"
              content: `// Kode file ${item.link}.java akan berada di sini`,
            },
          ];
          return acc;
        }, {});
        setFileStructure(formattedData);
      })
      .catch(error => {
        console.error('Error fetching sidebar data:', error);
      });
  }, []);

  const toggleFolder = (folder) => {
    setOpenFolder((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return { fileStructure, openFolder, toggleFolder };
};
