<template>
  <section class="cta">
    <div class="container">
      <div class="cta-card">
        <!-- Background decoration -->
        <div class="cta-bg"></div>
        
        <div class="cta-content">
          <h2>Ready to code<br><span class="gradient-text">smarter?</span></h2>
          <p>Join thousands of SAP developers already using Oricode AI.<br>Start for free, no credit card required.</p>
          
          <div class="cta-buttons">
            <a href="https://app.oricode.ai/signup" class="btn btn-primary btn-large">
              Get Started Free
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/downloads/oricode-ai-plugin.zip" class="btn btn-secondary btn-large">
              Download Plugin
            </a>
          </div>
          
          <div class="cta-features">
            <span>✓ 100 free messages</span>
            <span>✓ No credit card</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta {
  background: var(--slate-950);
  padding: 4rem 2rem;
}

.cta-card {
  position: relative;
  background: linear-gradient(135deg, var(--slate-900), var(--slate-800));
  border: 1px solid var(--slate-700);
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.15), transparent 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  margin-bottom: 1rem;
}

.cta-content > p {
  font-size: 1.25rem;
  max-width: 500px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-features span {
  font-size: 0.9rem;
  color: var(--slate-400);
}

@media (max-width: 768px) {
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-features {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
