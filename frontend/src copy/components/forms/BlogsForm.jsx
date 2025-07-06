import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogsForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast, onPreview }) => {
  const [blogs, setBlogs] = useState(data.blogs || []);
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    link: '',
    image: ''
  });

  const addBlog = () => {
    if (newBlog.title.trim() && newBlog.description.trim() && newBlog.link.trim()) {
      const updatedBlogs = [...blogs, { ...newBlog, id: Date.now() }];
      setBlogs(updatedBlogs);
      updateData('blogs', updatedBlogs);
      setNewBlog({
        title: '',
        description: '',
        link: '',
        image: ''
      });
    }
  };

  const removeBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    updateData('blogs', updatedBlogs);
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewBlog({ ...newBlog, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="form-section"
    >
      <h2 className="form-title">Blogs</h2>
      <p className="form-subtitle">Share your blog posts and articles (Optional - leave empty if you don't want to include blogs)</p>

      <div className="blogs-container">
        <div className="add-blog-form">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Add New Blog</h3>
          
          <div className="form-group">
            <label className="form-label">Blog Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Building Modern Web Applications"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input form-textarea"
              placeholder="Brief description of your blog post..."
              value={newBlog.description}
              onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Blog Link</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://your-blog.com/post"
              value={newBlog.link}
              onChange={(e) => setNewBlog({ ...newBlog, link: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Blog Image</label>
            <input
              type="file"
              className="form-input"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
            {newBlog.image && (
              <div className="image-preview">
                <img src={newBlog.image} alt="Blog preview" />
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={addBlog}
            disabled={!newBlog.title.trim() || !newBlog.description.trim() || !newBlog.link.trim()}
          >
            Add Blog
          </button>
        </div>

        <div className="blogs-list">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Added Blogs</h3>
          {blogs.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>No blogs added yet</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-header">
                  <h4>{blog.title}</h4>
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => removeBlog(blog.id)}
                  >
                    ×
                  </button>
                </div>
                
                {blog.image && (
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                )}
                
                <p className="blog-description">{blog.description}</p>
                
                <div className="blog-links">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                    Read Blog
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={onPreview}
        >
          Preview
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Next Step
        </button>
      </div>

      <style jsx>{`
        .blogs-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .add-blog-form {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .blogs-list {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          max-height: 600px;
          overflow-y: auto;
        }

        .blog-card {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          position: relative;
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .blog-header h4 {
          color: white;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .blog-image {
          margin: 0.5rem 0;
          border-radius: 8px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }

        .blog-description {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          margin: 0.5rem 0;
          line-height: 1.4;
        }

        .blog-links {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .blog-link {
          color: #87CEEB;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          border: 1px solid #87CEEB;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .blog-link:hover {
          background: #87CEEB;
          color: #000;
        }

        .image-preview {
          margin-top: 0.5rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .image-preview img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }

        .btn-remove {
          background: rgba(255,0,0,0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }

        .btn-remove:hover {
          background: rgba(255,0,0,0.9);
        }

        @media (max-width: 768px) {
          .blogs-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.form>
  );
};

export default BlogsForm;