<template>
  <div class="landing-page">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- How It Works -->
    <HowItWorksSection />
    
    <!-- Code Demo -->
    <CodeDemoSection />
    
    <!-- Pricing Section -->
    <PricingSection />
    
    <!-- Testimonials - TODO: Add when we have real users -->
    <!-- <TestimonialsSection /> -->
    
    <!-- CTA Section -->
    <CtaSection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Oricode AI - SAP Development, Supercharged',
  meta: [
    { name: 'description', content: 'AI-powered coding assistant for SAP ABAP developers. Write better code faster with Claude AI integration for Eclipse ADT.' }
  ]
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}
</style>
