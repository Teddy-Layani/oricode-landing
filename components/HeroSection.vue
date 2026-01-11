<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="bg-gradient bg-gradient-orange" style="top: -200px; right: -200px;"></div>
    <div class="bg-gradient bg-gradient-blue" style="bottom: -200px; left: -200px;"></div>
    
    <div class="container hero-content">
      <!-- Badge -->
      <div class="badge fade-in-up">
        <span class="badge-dot"></span>
        Now with Claude 4 Opus & Sonnet
      </div>
      
      <!-- Headline -->
      <h1 class="hero-title fade-in-up" style="animation-delay: 0.1s">
        SAP Development,<br>
        <span class="gradient-text">Supercharged</span>
      </h1>
      
      <!-- Subheadline -->
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s">
        AI-powered coding assistant for ABAP developers.<br>
        Write better code, faster — right inside Eclipse ADT.
      </p>
      
      <!-- CTA Buttons -->
      <div class="hero-buttons fade-in-up" style="animation-delay: 0.3s">
        <a href="https://app.oricode.ai/signup" class="btn btn-primary">
          <span>Get Started Free</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <div class="download-dropdown">
          <button class="btn btn-secondary dropdown-trigger" @click="showDownloads = !showDownloads">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Download</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" :class="{ 'rotate': showDownloads }">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div v-show="showDownloads" class="download-menu">
            <a href="/downloads/oricode-ai-1.0.0.vsix" class="download-item">
              <div class="download-icon">💻</div>
              <div class="download-info">
                <strong>VS Code Extension</strong>
                <small>Recommended for web/frontend projects</small>
              </div>
            </a>
            <a href="/downloads/oricode-ai-plugin.zip" class="download-item">
              <div class="download-icon">☕</div>
              <div class="download-info">
                <strong>Eclipse Plugin</strong>
                <small>For ABAP development in Eclipse ADT</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="hero-stats fade-in-up" style="animation-delay: 0.4s">
        <div class="stat">
          <span class="stat-value">90%</span>
          <span class="stat-label">Cost Savings</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">10x</span>
          <span class="stat-label">Faster Coding</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">24/7</span>
          <span class="stat-label">AI Available</span>
        </div>
      </div>
      
      <!-- Hero Image / Screenshot -->
      <div class="hero-image fade-in-up" style="animation-delay: 0.5s">
        <div class="browser-frame">
          <div class="browser-header">
            <div class="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="browser-title">Eclipse ADT — Oricode AI</div>
          </div>
          <div class="browser-content">
            <div class="ide-layout">
              <div class="ide-sidebar">
                <div class="ide-icon">📁</div>
                <div class="ide-icon active">💬</div>
                <div class="ide-icon">🔧</div>
                <div class="ide-icon">📜</div>
              </div>
              <div class="ide-main">
                <div class="chat-message user">
                  <span class="msg-role">You</span>
                  <span class="msg-content">Create an ABAP class for handling REST API calls with error handling</span>
                </div>
                <div class="chat-message assistant">
                  <span class="msg-role">Oricode AI</span>
                  <span class="msg-content">
                    <span class="code-line"><span class="keyword">CLASS</span> zcl_rest_client <span class="keyword">DEFINITION</span></span>
                    <span class="code-line">  <span class="keyword">PUBLIC</span></span>
                    <span class="code-line">  <span class="keyword">CREATE PUBLIC</span>.</span>
                    <span class="code-line"></span>
                    <span class="code-line">  <span class="keyword">PUBLIC SECTION</span>.</span>
                    <span class="code-line">    <span class="keyword">METHODS</span>: send_request</span>
                    <span class="code-line">      <span class="keyword">IMPORTING</span> i_url <span class="keyword">TYPE</span> string</span>
                    <span class="code-line">      <span class="keyword">RETURNING VALUE</span>(r_response)...</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showDownloads = ref(false)
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--orange-500);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--slate-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--slate-800);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--green-500);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* Browser Frame */
.hero-image {
  max-width: 900px;
  margin: 0 auto;
}

.browser-frame {
  background: var(--slate-900);
  border: 1px solid var(--slate-700);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
}

.browser-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--slate-800);
  border-bottom: 1px solid var(--slate-700);
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--slate-600);
}

.browser-dots span:first-child { background: #ff5f56; }
.browser-dots span:nth-child(2) { background: #ffbd2e; }
.browser-dots span:last-child { background: #27ca40; }

.browser-title {
  font-size: 0.875rem;
  color: var(--slate-400);
}

.browser-content {
  padding: 0;
}

/* IDE Layout */
.ide-layout {
  display: flex;
  min-height: 300px;
}

.ide-sidebar {
  width: 50px;
  background: var(--slate-950);
  border-right: 1px solid var(--slate-800);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.ide-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.ide-icon:hover {
  background: var(--slate-800);
}

.ide-icon.active {
  background: var(--slate-800);
  border-left: 2px solid var(--orange-500);
}

.ide-main {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-message {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}

.chat-message.user {
  background: var(--slate-800);
  align-self: flex-end;
  max-width: 80%;
}

.chat-message.assistant {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.2);
  align-self: flex-start;
  max-width: 90%;
}

.msg-role {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--slate-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.msg-content {
  font-size: 0.9rem;
  color: var(--slate-300);
  line-height: 1.6;
}

.assistant .msg-content {
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.code-line {
  display: block;
}

.keyword {
  color: var(--purple-500);
}

/* Download Dropdown */
.download-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-trigger svg.rotate {
  transform: rotate(180deg);
}

.download-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background: var(--slate-800);
  border: 1px solid var(--slate-700);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 280px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.download-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 150ms ease;
}

.download-item:hover {
  background: var(--slate-700);
}

.download-icon {
  font-size: 1.5rem;
}

.download-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.download-info strong {
  color: var(--slate-100);
  font-size: 0.9rem;
}

.download-info small {
  color: var(--slate-400);
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
  }

  .hero-stats {
    flex-wrap: wrap;
  }

  .stat-divider {
    display: none;
  }

  .ide-sidebar {
    display: none;
  }

  .download-menu {
    min-width: 240px;
  }
}
</style>
