import React from 'react';
import './App.css';
import '../src/components/css/Global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarProvider } from '../src/components/context/SidebarContext';
import { AuthProvider } from '../src/components/context/AuthContext'; // Ensure this import is correct
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrapping the entire app with AuthProvider */}
        <SidebarProvider>
          <div className="App">
            <AppRouter />
          </div>
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
