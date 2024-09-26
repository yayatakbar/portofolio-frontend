import React, { useState, useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css'; // Tema Prism.js
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Plugin nomor baris
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers'; // Plugin nomor baris
import 'prismjs/components/prism-java'; // Penyorotan sintaks Java

const Content = ({ link }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Fungsi untuk mengambil data dari API berdasarkan link
  const fetchPersonalInfo = (link) => {
    fetch(`http://localhost:8080${link}`) // Mengambil data dari link yang dipilih
      .then((response) => response.json())
      .then((data) => {
        const javaCode = `
public class PersonalInfo {
    public static void main(String[] args) {
        String name = "${data.name}";
        String birthPlace = "${data.birth_place}";
        String birthDate = "${data.birth_date}";
        String gender = "${data.gender}";
        String address = "${data.address}";
        String github = "${data.github}";
        String facebook = "${data.facebook}";
    }
}
        `;
        setSelectedFile({ name: `${link.replace('/', '')}.java`, content: javaCode });
      })
      .catch((error) => {
        console.error('Error fetching personal info:', error);
      });
  };

  // Fetch data saat link berubah
  useEffect(() => {
    if (link) {
      fetchPersonalInfo(link); // Panggil fetchPersonalInfo dengan link yang dipilih
    }
  }, [link]);

  useEffect(() => {
    Prism.highlightAll(); // Highlight syntax setiap kali file terpilih diubah
  }, [selectedFile]);

  return (
    <div className="content">
      {selectedFile ? (
        <div className="code-editor">
          <pre className="line-numbers">
            <code className="language-java">{selectedFile.content}</code>
          </pre>
        </div>
      ) : (
        <p>Pilih file untuk melihat isinya.</p>
      )}
    </div>
  );
};

export default Content;
