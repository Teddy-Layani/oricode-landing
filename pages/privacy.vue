<template>
  <div class="legal-page">
    <NavBar />
    
    <div class="container">
      <div class="legal-content">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last updated: January 6, 2026</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            Oricode AI ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our AI-powered coding assistant for SAP ABAP development.
          </p>
        </section>
        
        <section>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>Name</li>
            <li>Password (encrypted)</li>
            <li>Payment information (processed by Stripe)</li>
          </ul>
          
          <h3>2.2 Usage Data</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>Chat conversations with our AI assistant</li>
            <li>API usage statistics</li>
            <li>Feature usage patterns</li>
            <li>Error logs and performance data</li>
          </ul>
          
          <h3>2.3 Code and SAP Data</h3>
          <p>
            When you use our MCP (Model Context Protocol) features, code snippets and 
            SAP object metadata may be transmitted to our servers for AI processing. 
            This data is used solely to provide the service and is not stored permanently.
          </p>
        </section>
        
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Process your transactions</li>
            <li>Send service-related communications</li>
            <li>Improve our AI models and service quality</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Data Sharing</h2>
          <p>We share your information only with:</p>
          <ul>
            <li><strong>Anthropic</strong> - AI processing (Claude API)</li>
            <li><strong>Stripe</strong> - Payment processing</li>
            <li><strong>Supabase</strong> - Database hosting</li>
            <li><strong>Railway/Vercel</strong> - Application hosting</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>
        
        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures including:
          </p>
          <ul>
            <li>Encryption in transit (TLS/HTTPS)</li>
            <li>Encrypted password storage (bcrypt)</li>
            <li>API key hashing</li>
            <li>Regular security audits</li>
          </ul>
        </section>
        
        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. Chat history 
            is retained according to your subscription plan (7 days for Free, unlimited 
            for Pro/Team). You can request deletion of your data at any time.
          </p>
        </section>
        
        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>
        
        <section>
          <h2>8. Cookies</h2>
          <p>
            We use essential cookies for authentication and session management. 
            We do not use tracking or advertising cookies.
          </p>
        </section>
        
        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our service is not intended for users under 18 years of age. 
            We do not knowingly collect information from children.
          </p>
        </section>
        
        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Your data may be processed in the United States where our servers are located. 
            By using our service, you consent to this transfer.
          </p>
        </section>
        
        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you 
            of any changes by posting the new policy on this page and updating the 
            "Last updated" date.
          </p>
        </section>
        
        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:support@oricode.ai">support@oricode.ai</a>
          </p>
        </section>
      </div>
    </div>
    
    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - Oricode AI'
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--slate-950);
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--slate-100);
  margin-bottom: 0.5rem;
}

.last-updated {
  color: var(--slate-500);
  font-size: 0.9rem;
  margin-bottom: 3rem;
}

section {
  margin-bottom: 2.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--slate-100);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--slate-800);
}

h3 {
  font-size: 1.1rem;
  color: var(--slate-200);
  margin: 1.5rem 0 0.75rem;
}

p {
  color: var(--slate-400);
  line-height: 1.8;
  margin-bottom: 1rem;
}

ul {
  color: var(--slate-400);
  line-height: 1.8;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: var(--orange-500);
}

a:hover {
  text-decoration: underline;
}

strong {
  color: var(--slate-300);
}
</style>
