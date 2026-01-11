<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Simple, transparent<br><span class="gradient-text">pricing</span></h2>
        <p>Start free, upgrade when you need more</p>
      </div>

      <div class="pricing-grid">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="['pricing-card', { featured: plan.featured }]"
        >
          <div class="plan-badge" v-if="plan.badge">{{ plan.badge }}</div>

          <h3 class="plan-name">{{ plan.name }}</h3>
          <p class="plan-description">{{ plan.description }}</p>

          <div class="plan-price">
            <span class="currency">$</span>
            <span class="amount">{{ plan.price }}</span>
            <span class="period">/month</span>
          </div>

          <a :href="plan.cta.href" :class="['btn', plan.featured ? 'btn-primary' : 'btn-secondary', 'plan-cta']">
            {{ plan.cta.text }}
          </a>

          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature" :class="{ disabled: feature.startsWith('✗'), upcoming: feature.startsWith('⏳') }">
              <svg v-if="!feature.startsWith('✗') && !feature.startsWith('⏳')" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <svg v-else-if="feature.startsWith('⏳')" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              {{ feature.replace('✗ ', '').replace('⏳ ', '') }}
              <span v-if="feature.startsWith('⏳')" class="coming-soon-badge">Coming Soon</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Custom Enterprise CTA -->
      <div class="enterprise-cta">
        <div class="enterprise-content">
          <h3>🏢 Need a custom plan?</h3>
          <p>Contact us for custom enterprise solutions with unlimited usage, SSO, and on-premise deployment.</p>
        </div>
        <a href="mailto:support@oricode.ai?subject=Enterprise%20Inquiry" class="btn btn-secondary">Contact Sales</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Free',
    description: 'For trying out Oricode AI',
    price: 0,
    badge: null,
    featured: false,
    cta: { text: 'Get Started', href: 'https://app.oricode.ai/signup' },
    features: [
      '100 credits/month',
      'Claude Haiku model',
      'Basic MCP tools (read-only)',
      'Chat history',
      '✗ All Claude models',
      '✗ Full MCP tools'
    ]
  },
  {
    name: 'Pro',
    description: 'For individual developers',
    price: 29,
    badge: 'Most Popular',
    featured: true,
    cta: { text: 'Start Pro Trial', href: 'https://app.oricode.ai/signup?plan=pro' },
    features: [
      '2,000 credits/month',
      'All Claude models',
      'Full MCP tools (CRUD)',
      'Unlimited chat history',
      'Prompt caching (90% savings)'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For teams & companies',
    price: 99,
    badge: null,
    featured: false,
    cta: { text: 'Start Enterprise Trial', href: 'https://app.oricode.ai/signup?plan=enterprise' },
    features: [
      '5,000 credits/month',
      'All Claude models',
      'Full MCP tools (CRUD)',
      'Unlimited chat history',
      'Prompt caching (90% savings)'
    ]
  }
]
</script>

<style scoped>
.pricing {
  background: var(--slate-950);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  background: var(--slate-900);
  border: 1px solid var(--slate-800);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
}

.pricing-card:hover {
  border-color: var(--slate-700);
}

.pricing-card.featured {
  background: linear-gradient(135deg, var(--slate-900), var(--slate-800));
  border-color: var(--orange-500);
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375rem 1rem;
  background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 100px;
  white-space: nowrap;
}

.plan-name {
  font-size: 1.5rem;
  color: var(--slate-100);
  margin-bottom: 0.5rem;
}

.plan-description {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
}

.currency {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--slate-400);
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--slate-100);
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: var(--slate-500);
}

.plan-cta {
  width: 100%;
  margin: 1.5rem 0;
}

.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--slate-300);
}

.plan-features li svg {
  color: var(--green-500);
  flex-shrink: 0;
}

.plan-features li.disabled {
  color: var(--slate-600);
}

.plan-features li.disabled svg {
  color: var(--slate-700);
}

.plan-features li.upcoming {
  color: var(--orange-400);
}

.plan-features li.upcoming svg {
  color: var(--orange-500);
}

.coming-soon-badge {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  background: rgba(255, 107, 53, 0.2);
  color: var(--orange-500);
  border-radius: 4px;
  margin-left: 0.5rem;
}

.enterprise-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--slate-900), var(--slate-800));
  border: 1px solid var(--slate-800);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 3rem;
  gap: 2rem;
}

.enterprise-content h3 {
  color: var(--slate-100);
  margin-bottom: 0.5rem;
}

.enterprise-content p {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .enterprise-cta {
    flex-direction: column;
    text-align: center;
  }
  
  .pricing-card.featured {
    transform: none;
  }
}
</style>
