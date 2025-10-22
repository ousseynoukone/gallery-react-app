import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {categories, gallery} from './model/gallery.js'
import Sidebar from './components/Sidebar.jsx'
import Layout from './components/layout/Layout.jsx'
import Hero from './components/hero.jsx'

import ImageCard from './components/ImageCard.jsx'

function App() {
  const [galleryData, setGalleryData] = useState(gallery)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  // Filtrer par category et trier par likes (du plus liké au moins liké)
  const filteredGallery = (selectedCategory === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory)
  ).sort((a, b) => b.likes - a.likes)

  //Si on choisit la categorie
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleLike = (id) => {
    setGalleryData(prev => prev.map(img => 
      img.id === id ? { ...img, likes: img.likes + 1 } : img
    ))
  }

  const handleDislike = (id) => {
    setGalleryData(prev => prev.map(img => 
      img.id === id ? { ...img, dislikes: img.dislikes + 1 } : img
    ))
  }

  const handleDelete = (id) => {
    setGalleryData(prev => prev.filter(img => img.id !== id))
    setSelectedImage(null) 
  }

  const handleImageOpen = (img) => {
    setSelectedImage(img)
  }

  const handleImageClose = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <Layout>
        <div className="flex gap-6">
          <div className="flex-1">
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
              {filteredGallery.map((img) => (
                <ImageCard 
                  key={img.id} 
                  img={img} 
                  onOpen={handleImageOpen}
                  onLike={handleLike}
                  onDislike={handleDislike}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
          
          <Sidebar 
            categories={categories} 
            current={selectedCategory} 
            onChange={handleCategoryChange}
          />
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleImageClose}>
            <div className="max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-600 mt-2">{selectedImage.description}</p>
                <div className="flex gap-4 mt-4">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    onClick={() => handleLike(selectedImage.id)}
                  >
                    ❤️ {selectedImage.likes}
                  </button>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                    onClick={() => handleDislike(selectedImage.id)}
                  >
                    👎 {selectedImage.dislikes}
                  </button>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    onClick={() => handleDelete(selectedImage.id)}
                  >
                    🗑️ Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}




export default App
