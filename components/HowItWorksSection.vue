<template>
  <section id="how-it-works" class="how-it-works">
    <div class="container">
      <div class="section-header">
        <h2>Get started in<br><span class="gradient-text">3 simple steps</span></h2>
        <p>From installation to coding smarter in under 5 minutes</p>
      </div>
      
      <div class="steps">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <div class="step-code" v-if="step.code">
              <code>{{ step.code }}</code>
            </div>
          </div>
          <div class="step-connector" v-if="index < steps.length - 1">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: '📥',
    title: 'Install the Plugin',
    description: 'Download from Eclipse Marketplace or install directly in Eclipse ADT.',
    code: 'Help → Eclipse Marketplace → Search "Oricode AI"'
  },
  {
    icon: '🔑',
    title: 'Enter Your API Key',
    description: 'Sign up for free and get your API key. Configure in preferences.',
    code: 'Window → Preferences → Oricode AI → API Key'
  },
  {
    icon: '🚀',
    title: 'Start Coding!',
    description: 'Open the Oricode AI view and start chatting. Context from your code is automatic.',
    code: 'Window → Show View → Oricode AI'
  }
]
</script>

<style scoped>
.how-it-works {
  background: linear-gradient(180deg, var(--slate-950), var(--slate-900));
}

.steps {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

.step-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.step h3 {
  color: var(--slate-100);
}

.step p {
  font-size: 1rem;
}

.step-code {
  background: var(--slate-950);
  border: 1px solid var(--slate-800);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
}

.step-code code {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--orange-400);
}

.step-connector {
  position: absolute;
  right: -60px;
  top: 24px;
  color: var(--slate-700);
}

@media (max-width: 1024px) {
  .step-connector {
    display: none;
  }
  
  .steps {
    flex-direction: column;
    align-items: center;
  }
}
</style>
