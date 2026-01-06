<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon">⬡</span>
            <span class="logo-text">ORICODE<span class="logo-ai">AI</span></span>
          </NuxtLink>
          <p>AI-powered coding assistant for SAP ABAP developers. Built with ❤️ for the SAP community.</p>
        </div>
        
        <!-- Product Column -->
        <div class="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="/downloads/oricode-ai-plugin.zip">Download Plugin</a></li>
          </ul>
        </div>
        
        <!-- Resources Column -->
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://app.oricode.ai/signup">Get Started</a></li>
            <li><a href="https://app.oricode.ai/login">Sign In</a></li>
            <li><a href="mailto:support@oricode.ai">Support</a></li>
          </ul>
        </div>
        
        <!-- Company Column -->
        <div class="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms">Terms of Service</NuxtLink></li>
            <li><a href="mailto:support@oricode.ai">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© {{ currentYear }} Oricode AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--slate-900);
  border-top: 1px solid var(--slate-800);
  padding: 4rem 2rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 1.75rem;
  color: var(--orange-500);
}

.logo-ai {
  color: var(--orange-500);
}

.footer-brand > p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 300px;
}

.footer-column h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--slate-100);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-column a,
.footer-column :deep(a) {
  font-size: 0.95rem;
  color: var(--slate-400);
  transition: color var(--transition-fast);
}

.footer-column a:hover,
.footer-column :deep(a):hover {
  color: var(--slate-100);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--slate-800);
}

.footer-bottom p {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    grid-column: span 2;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-brand {
    grid-column: span 1;
  }
}
</style>
