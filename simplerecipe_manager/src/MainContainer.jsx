import React, { useState, useEffect } from "react";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer component for SimpleRecipeManager.
 * Provides a modern layout with sidebar for categories and main area for recipes,
 * supports seamless light/dark theming with a toggle button. Brand colors intelligently adapt to each theme.
 * Ready to be extended with routing and integration for recipe browsing, management, and user authentication.
 */
const MainContainer = () => {
  // Detect system preference on mount and store theme in localStorage
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sr-theme") || getSystemTheme();
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("sr-theme", theme);
  }, [theme]);

  // Helper for accessibility label/icon
  const themeButton = (
    <button
      className="sr-theme-toggle"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <span aria-hidden="true" style={{ fontSize: "1.25em" }}>🌞</span>
      ) : (
        <span aria-hidden="true" style={{ fontSize: "1.18em" }}>🌙</span>
      )}
    </button>
  );

  return (
    <div className={`sr-app-root${theme === "dark" ? " sr-theme-dark" : ""}`}>
      <aside className="sr-sidebar">
        <div className="sr-sidebar-header">
          <span className="sr-logo">🥗</span>
          <span className="sr-brand">SimpleRecipeManager</span>
        </div>
        <nav className="sr-category-nav">
          {/* Placeholder: Will be dynamically populated with categories */}
          <a className="sr-category-link active" href="#">All Recipes</a>
          <a className="sr-category-link" href="#">Appetizers</a>
          <a className="sr-category-link" href="#">Main Dishes</a>
          <a className="sr-category-link" href="#">Desserts</a>
        </nav>
        <div className="sr-auth-section">
          {/* Theme toggle sits above or at the end of auth section */}
          {themeButton}
          {/* Placeholder: User authentication (login/register/profile/logout) */}
          <button className="sr-btn sr-btn-accent">Login</button>
          <button className="sr-btn sr-btn-primary sr-btn-signup">Sign Up</button>
        </div>
      </aside>
      <main className="sr-main-area">
        <header className="sr-main-header">
          <h1 className="sr-main-title">Browse Recipes</h1>
          {/* Placeholder: Search and add button */}
          <div className="sr-main-actions">
            <input
              className="sr-search"
              type="search"
              placeholder="Search recipes..."
              aria-label="Search recipes"
            />
            <button className="sr-btn sr-btn-secondary">+ Add Recipe</button>
          </div>
        </header>
        <section className="sr-recipe-list">
          {/* Placeholder: Recipe cards go here */}
          <div className="sr-recipe-empty">
            <p>No recipes loaded. Start by adding a recipe!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContainer;
