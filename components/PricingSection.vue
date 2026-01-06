<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Simple, transparent<br><span class="gradient-text">pricing</span></h2>
        <p>Start free, upgrade when you need more</p>
      </div>
      
      <!-- Billing Toggle -->
      <div class="billing-toggle">
        <span :class="{ active: !isAnnual }">Monthly</span>
        <button class="toggle-switch" @click="isAnnual = !isAnnual" :class="{ annual: isAnnual }">
          <span class="toggle-thumb"></span>
        </button>
        <span :class="{ active: isAnnual }">
          Annual
          <span class="save-badge">Save 20%</span>
        </span>
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
            <span class="amount">{{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
            <span class="period">/month</span>
          </div>
          
          <div class="plan-billed" v-if="isAnnual && plan.annualPrice > 0">
            Billed annually (${{ plan.annualPrice * 12 }}/year)
          </div>
          
          <a :href="plan.cta.href" :class="['btn', plan.featured ? 'btn-primary' : 'btn-secondary', 'plan-cta']">
            {{ plan.cta.text }}
          </a>
          
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature" :class="{ disabled: feature.startsWith('✗') }">
              <svg v-if="!feature.startsWith('✗')" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              {{ feature.replace('✗ ', '') }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Enterprise CTA -->
      <div class="enterprise-cta">
        <div class="enterprise-content">
          <h3>🏢 Need more?</h3>
          <p>Enterprise plans with unlimited usage, SSO, dedicated support, and on-premise deployment.</p>
        </div>
        <a href="/contact" class="btn btn-secondary">Contact Sales</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isAnnual = ref(false)

const plans = [
  {
    name: 'Free',
    description: 'For trying out Oricode AI',
    monthlyPrice: 0,
    annualPrice: 0,
    badge: null,
    featured: false,
    cta: { text: 'Get Started', href: '/signup' },
    features: [
      '100 messages/month',
      'Claude Haiku model',
      'Basic MCP tools (read-only)',
      'Chat history (7 days)',
      '✗ Priority support',
      '✗ Team features'
    ]
  },
  {
    name: 'Pro',
    description: 'For individual developers',
    monthlyPrice: 19,
    annualPrice: 15,
    badge: 'Most Popular',
    featured: true,
    cta: { text: 'Start Pro Trial', href: '/signup?plan=pro' },
    features: [
      '2,000 messages/month',
      'All Claude models',
      'Full MCP tools (CRUD)',
      'Unlimited chat history',
      'Prompt caching (90% savings)',
      'Priority support'
    ]
  },
  {
    name: 'Team',
    description: 'For small teams',
    monthlyPrice: 39,
    annualPrice: 31,
    badge: null,
    featured: false,
    cta: { text: 'Start Team Trial', href: '/signup?plan=team' },
    features: [
      '5,000 messages/user/month',
      'All Claude models',
      'Full MCP tools (CRUD)',
      'Shared team templates',
      'Admin dashboard',
      'Dedicated support'
    ]
  }
]
</script>

<style scoped>
.pricing {
  background: var(--slate-950);
}

.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  color: var(--slate-500);
  font-size: 0.95rem;
}

.billing-toggle span.active {
  color: var(--slate-100);
}

.toggle-switch {
  position: relative;
  width: 56px;
  height: 28px;
  background: var(--slate-800);
  border: 1px solid var(--slate-700);
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition-base);
}

.toggle-switch.annual {
  background: var(--orange-500);
  border-color: var(--orange-500);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: all var(--transition-base);
}

.toggle-switch.annual .toggle-thumb {
  left: 31px;
}

.save-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: rgba(34, 197, 94, 0.2);
  color: var(--green-500);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
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

.plan-billed {
  font-size: 0.85rem;
  color: var(--slate-500);
  margin-bottom: 1.5rem;
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
