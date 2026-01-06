<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-content">
      <!-- Logo -->
      <a href="#" class="logo">
        <span class="logo-icon">⬡</span>
        <span class="logo-text">ORICODE<span class="logo-ai">AI</span></span>
      </a>
      
      <!-- Desktop Nav -->
      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#features" @click="menuOpen = false">Features</a>
        <a href="#how-it-works" @click="menuOpen = false">How It Works</a>
        <a href="#pricing" @click="menuOpen = false">Pricing</a>
        <a href="/downloads/oricode-ai-plugin.zip">Download</a>
      </div>
      
      <!-- CTA Buttons -->
      <div class="nav-actions">
        <a href="https://app.oricode.ai/login" class="btn-login">Sign In</a>
        <a href="https://app.oricode.ai/signup" class="btn btn-primary btn-small">Get Started Free</a>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(10, 15, 26, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--slate-800);
  padding: 0.75rem 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
}

.logo-icon {
  font-size: 1.75rem;
  color: var(--orange-500);
  animation: pulse 2s ease-in-out infinite;
}

.logo-text {
  letter-spacing: 0.1em;
}

.logo-ai {
  color: var(--orange-500);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--slate-400);
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--slate-100);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-login {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--slate-400);
  transition: color var(--transition-fast);
}

.btn-login:hover {
  color: var(--slate-100);
}

.btn-small {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--slate-100);
  position: absolute;
  transition: all var(--transition-base);
}

.menu-toggle span {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-toggle span::before {
  content: '';
  top: -8px;
}

.menu-toggle span::after {
  content: '';
  top: 8px;
}

.menu-toggle span.open {
  background: transparent;
}

.menu-toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle span.open::after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--slate-900);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }
  
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  
  .nav-actions {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
}
</style>
