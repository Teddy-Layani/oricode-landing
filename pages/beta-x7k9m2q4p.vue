<template>
  <div class="beta-page">
    <div class="container">
      <!-- Header -->
      <header class="beta-header">
        <div class="logo">
          <span class="logo-icon">⬡</span>
          <span class="logo-text">Oricode AI</span>
          <span class="beta-badge">BETA</span>
        </div>
      </header>

      <!-- Hero -->
      <section class="hero">
        <h1>Welcome to Oricode AI Beta</h1>
        <p class="subtitle">
          AI-powered coding assistant for SAP ABAP developers. 
          Thank you for being an early tester!
        </p>
      </section>

      <!-- Quick Start -->
      <section class="quick-start">
        <h2>🚀 Quick Start</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Create Account</h3>
              <p>Sign up for free with email and password</p>
              <a href="https://app.oricode.ai/signup" class="btn btn-primary" target="_blank">
                Sign Up →
              </a>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Download Plugin</h3>
              <p>Install the Eclipse plugin for ADT</p>
              <a href="https://oricode.ai/downloads/oricode-ai-plugin.zip" class="btn btn-secondary" download>
                Download Plugin
              </a>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Get API Key</h3>
              <p>Copy your API key from the dashboard</p>
              <a href="https://app.oricode.ai/dashboard" class="btn btn-outline" target="_blank">
                Go to Dashboard
              </a>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Start Coding</h3>
              <p>Open Eclipse, configure API key, and use AI assistance!</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Installation Guide -->
      <section class="installation">
        <h2>📦 Plugin Installation</h2>
        <ol>
          <li>Download the plugin ZIP file above</li>
          <li>In Eclipse: <strong>Help</strong> → <strong>Install New Software</strong></li>
          <li>Click <strong>Add</strong> → <strong>Archive</strong> → Select the ZIP</li>
          <li>Check "Oricode AI" and complete installation</li>
          <li>Restart Eclipse</li>
          <li>Go to <strong>Window</strong> → <strong>Preferences</strong> → <strong>Oricode AI</strong></li>
          <li>Enter your API key and save</li>
        </ol>
      </section>

      <!-- Test Payment -->
      <section class="test-payment">
        <h2>💳 Testing Payments (Stripe Test Mode)</h2>
        <p>Use these test card numbers to test subscription:</p>
        <table>
          <thead>
            <tr>
              <th>Card Type</th>
              <th>Number</th>
              <th>CVC</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visa (Success)</td>
              <td><code>4242 4242 4242 4242</code></td>
              <td>Any 3 digits</td>
              <td>Any future date</td>
            </tr>
            <tr>
              <td>Visa (Decline)</td>
              <td><code>4000 0000 0000 0002</code></td>
              <td>Any 3 digits</td>
              <td>Any future date</td>
            </tr>
            <tr>
              <td>Mastercard</td>
              <td><code>5555 5555 5555 4444</code></td>
              <td>Any 3 digits</td>
              <td>Any future date</td>
            </tr>
          </tbody>
        </table>
        <p class="note">Use any name, any ZIP code (5 digits), any future expiry date.</p>
      </section>

      <!-- Features to Test -->
      <section class="features">
        <h2>🧪 What to Test</h2>
        <ul>
          <li>✅ Sign up / Login flow</li>
          <li>✅ 2FA setup with authenticator app</li>
          <li>✅ Plugin installation on Eclipse</li>
          <li>✅ AI code generation in ABAP editor</li>
          <li>✅ Subscription flow with test cards</li>
          <li>✅ API key management</li>
          <li>✅ Account settings & deletion</li>
        </ul>
      </section>

      <!-- Feedback -->
      <section class="feedback">
        <h2>📣 Feedback</h2>
        <p>Found a bug? Have suggestions? Contact us:</p>
        <a href="mailto:beta@oricode.ai" class="btn btn-primary">
          beta@oricode.ai
        </a>
      </section>

      <!-- Footer -->
      <footer>
        <p>© 2025 Oricode AI. Confidential Beta - Do not share this link.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Oricode AI - Beta',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.beta-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.beta-header {
  padding: 1rem 0 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 2rem;
  color: #f97316;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
}

.beta-badge {
  background: #f97316;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

/* Hero */
.hero {
  text-align: center;
  padding: 2rem 0 3rem;
  border-bottom: 1px solid #334155;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 500px;
  margin: 0 auto;
}

/* Sections */
section {
  padding: 2.5rem 0;
  border-bottom: 1px solid #334155;
}

section:last-of-type {
  border-bottom: none;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1.5rem;
}

/* Steps */
.steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #f97316;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.25rem;
}

.step-content p {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-primary {
  background: #f97316;
  color: white;
}

.btn-primary:hover {
  background: #ea580c;
}

.btn-secondary {
  background: #334155;
  color: #f8fafc;
}

.btn-secondary:hover {
  background: #475569;
}

.btn-outline {
  background: transparent;
  color: #f97316;
  border: 1px solid #f97316;
}

.btn-outline:hover {
  background: rgba(249, 115, 22, 0.1);
}

/* Installation */
.installation ol {
  padding-left: 1.5rem;
  color: #cbd5e1;
  line-height: 2;
}

.installation strong {
  color: #f8fafc;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
}

th, td {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid #334155;
}

th {
  color: #94a3b8;
  font-weight: 500;
}

td {
  color: #e2e8f0;
}

code {
  background: #1e293b;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #f97316;
}

.note {
  font-size: 0.85rem;
  color: #64748b;
  font-style: italic;
}

/* Features */
.features ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.features li {
  color: #cbd5e1;
  font-size: 0.95rem;
}

/* Feedback */
.feedback {
  text-align: center;
}

.feedback p {
  color: #94a3b8;
  margin-bottom: 1rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem 0;
  color: #64748b;
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }
  
  .hero h1 {
    font-size: 1.8rem;
  }
  
  table {
    font-size: 0.8rem;
  }
  
  th, td {
    padding: 0.5rem;
  }
}
</style>
