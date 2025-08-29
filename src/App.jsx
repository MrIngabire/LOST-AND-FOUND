import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LostItems from './pages/LostItems';
import FoundItems from './pages/FoundItems';
import PostItem from './pages/PostItem';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ItemProvider } from './context/ItemContext';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ItemProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lost-items" element={<LostItems />} />
                <Route path="/found-items" element={<FoundItems />} />
                <Route
                  path="/post-item"
                  element={
                    <ProtectedRoute>
                      <PostItem />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ItemProvider>
  );
}

export default App;
