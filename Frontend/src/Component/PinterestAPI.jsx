import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, Bookmark } from 'lucide-react';
import './PinterestAPI.css';


function PinterestAPI({ search }) {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pixabayAPIKey = '48656670-3136fdbaccdd21d1e52a24eb0';

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: pixabayAPIKey,
          image_type: 'photo',
          per_page: 30,
          orientation: 'horizontal',
        },
      });

      if (response.data.hits.length > 0) {
        const transformedData = response.data.hits.map(item => ({
          id: item.id,
          url: item.largeImageURL,
          title: item.tags,
         
        }));
        setImages(transformedData);
        setFilteredImages(transformedData);
      } else {
        setError('No images found');
        setImages([]);
      }
    } catch (err) {
      setError('Error fetching images: ' + err.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const filtered = images.filter(image =>
      image.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [search, images]);
  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
  
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
  
      // Create a temporary <a> element to trigger download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "image.png"; // Set the filename
      document.body.appendChild(link);
      link.click();
  
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="image-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.url} alt={image.title} />
              <div className="image-overlay">
                <div className="button-container">
                  {/* Updated download button to use handleDownload function */}
                  <button onClick={() => handleDownload(image.downloadUrl)} className="action-button download" title="Download Image">
                    <Download size={20} color="#374151" />
                  </button>
                  <button onClick={() => setSavedImages([...savedImages, image.id])} className="action-button save" title="Save Image">
                    <Bookmark size={20} color={savedImages.includes(image.id) ? '#ffffff' : '#374151'} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  
  );
}

export default PinterestAPI;
