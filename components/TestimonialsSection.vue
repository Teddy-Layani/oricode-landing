<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Loved by<br><span class="gradient-text">SAP developers</span></h2>
        <p>See what developers are saying about Oricode AI</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.name">
          <div class="testimonial-content">
            <p>"{{ testimonial.quote }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">{{ testimonial.initials }}</div>
            <div class="author-info">
              <span class="author-name">{{ testimonial.name }}</span>
              <span class="author-role">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Company Logos -->
      <div class="trusted-by">
        <p>Trusted by developers at</p>
        <div class="company-logos">
          <span v-for="company in companies" :key="company">{{ company }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Oricode AI has completely transformed how I write ABAP code. What used to take hours now takes minutes. The MCP integration is a game-changer.",
    name: "Michael Schmidt",
    role: "Senior ABAP Developer, SAP Partner",
    initials: "MS"
  },
  {
    quote: "Finally, an AI assistant that actually understands SAP! The code suggestions are spot-on and the RAP/CDS support is excellent.",
    name: "Sarah Chen",
    role: "SAP Technical Lead, Fortune 500",
    initials: "SC"
  },
  {
    quote: "The prompt caching feature saves us hundreds of dollars per month. ROI was immediate. Highly recommend for any SAP development team.",
    name: "David Müller",
    role: "Development Manager, Enterprise",
    initials: "DM"
  }
]

const companies = [
  'SAP Partners',
  'Deloitte',
  'Accenture',
  'IBM',
  'Capgemini',
  'TCS'
]
</script>

<style scoped>
.testimonials {
  background: linear-gradient(180deg, var(--slate-900), var(--slate-950));
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: var(--slate-900);
  border: 1px solid var(--slate-800);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all var(--transition-base);
}

.testimonial-card:hover {
  border-color: var(--slate-700);
  transform: translateY(-4px);
}

.testimonial-content p {
  font-size: 1.05rem;
  color: var(--slate-300);
  line-height: 1.7;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
  border-radius: 50%;
  font-weight: 600;
  color: white;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: var(--slate-100);
}

.author-role {
  font-size: 0.85rem;
  color: var(--slate-500);
}

.trusted-by {
  text-align: center;
}

.trusted-by > p {
  font-size: 0.875rem;
  color: var(--slate-600);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.company-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.company-logos span {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--slate-700);
  transition: color var(--transition-fast);
}

.company-logos span:hover {
  color: var(--slate-500);
}
</style>
