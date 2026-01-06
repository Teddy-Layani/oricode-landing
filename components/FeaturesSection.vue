<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Everything you need to<br><span class="gradient-text">code smarter</span></h2>
        <p>Powerful features designed specifically for SAP ABAP developers</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon" :style="{ background: feature.gradient }">
            {{ feature.icon }}
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <ul class="feature-list">
            <li v-for="item in feature.items" :key="item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🤖',
    title: 'AI Chat Assistant',
    description: 'Claude AI integrated directly into Eclipse. Ask questions, get code, debug issues.',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
    items: [
      'Context-aware responses',
      'Code explanations',
      'Bug detection',
      'Refactoring suggestions'
    ]
  },
  {
    icon: '🔧',
    title: 'MCP Tools Integration',
    description: 'Direct SAP system access through Model Context Protocol for real-time operations.',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
    items: [
      'Search ABAP objects',
      'Read class/program source',
      'Create & modify code',
      'Activate objects'
    ]
  },
  {
    icon: '📜',
    title: 'Chat History',
    description: 'Never lose a conversation. All chats are saved and searchable in the cloud.',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
    items: [
      'Persistent conversations',
      'Resume anytime',
      'Search across chats',
      'Sync across devices'
    ]
  },
  {
    icon: '💾',
    title: 'Prompt Caching',
    description: 'Save up to 90% on API costs with intelligent caching of system prompts.',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.1))',
    items: [
      '90% cost reduction',
      'Faster responses',
      'Smart invalidation',
      'Transparent billing'
    ]
  },
  {
    icon: '📦',
    title: 'Code Templates',
    description: 'Kickstart projects with pre-built templates for common SAP patterns.',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1))',
    items: [
      'RAP Business Objects',
      'Fiori Elements apps',
      'ALV Reports',
      'Custom templates'
    ]
  },
  {
    icon: '🛡️',
    title: 'Enterprise Ready',
    description: 'Built for enterprise security requirements with local processing options.',
    gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
    items: [
      'API key authentication',
      'Usage analytics',
      'Team management',
      'On-premise option'
    ]
  }
]
</script>

<style scoped>
.features {
  background: var(--slate-950);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.75rem;
}

.feature-card h3 {
  color: var(--slate-100);
}

.feature-card p {
  font-size: 1rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--slate-400);
}

.feature-list svg {
  color: var(--green-500);
  flex-shrink: 0;
}
</style>
