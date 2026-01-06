<template>
  <section id="demo" class="code-demo">
    <div class="container">
      <div class="section-header">
        <h2>See it in<br><span class="gradient-text">action</span></h2>
        <p>Watch how Oricode AI helps you write better ABAP code</p>
      </div>
      
      <div class="demo-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab-btn', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </div>
      
      <div class="demo-content">
        <div class="demo-prompt">
          <span class="prompt-label">Your prompt:</span>
          <p class="prompt-text">{{ currentDemo.prompt }}</p>
        </div>
        
        <div class="demo-response">
          <div class="response-header">
            <span class="response-icon">⬡</span>
            <span class="response-label">Oricode AI</span>
            <span class="response-model">Claude Sonnet 4</span>
          </div>
          <div class="response-body">
            <pre><code v-html="currentDemo.code"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('class')

const tabs = [
  { id: 'class', icon: '📦', label: 'Create Class' },
  { id: 'explain', icon: '💡', label: 'Explain Code' },
  { id: 'debug', icon: '🐛', label: 'Find Bugs' },
  { id: 'test', icon: '🧪', label: 'Unit Tests' }
]

const demos = {
  class: {
    prompt: 'Create an ABAP class for handling REST API calls with error handling and retry logic',
    code: `<span class="keyword">CLASS</span> zcl_rest_client <span class="keyword">DEFINITION</span>
  <span class="keyword">PUBLIC</span>
  <span class="keyword">CREATE PUBLIC</span>.

  <span class="keyword">PUBLIC SECTION</span>.
    <span class="keyword">TYPES</span>: <span class="keyword">BEGIN OF</span> ty_response,
             status_code <span class="keyword">TYPE</span> i,
             body        <span class="keyword">TYPE</span> string,
             success     <span class="keyword">TYPE</span> abap_bool,
           <span class="keyword">END OF</span> ty_response.

    <span class="keyword">METHODS</span>: constructor
      <span class="keyword">IMPORTING</span> i_base_url <span class="keyword">TYPE</span> string
                i_timeout  <span class="keyword">TYPE</span> i <span class="keyword">DEFAULT</span> 30,

    send_request
      <span class="keyword">IMPORTING</span> i_endpoint <span class="keyword">TYPE</span> string
                i_method   <span class="keyword">TYPE</span> string <span class="keyword">DEFAULT</span> <span class="string">'GET'</span>
                i_payload  <span class="keyword">TYPE</span> string <span class="keyword">OPTIONAL</span>
      <span class="keyword">RETURNING VALUE</span>(r_response) <span class="keyword">TYPE</span> ty_response
      <span class="keyword">RAISING</span>   cx_http_client_error.

  <span class="keyword">PRIVATE SECTION</span>.
    <span class="keyword">DATA</span>: mv_base_url   <span class="keyword">TYPE</span> string,
          mv_timeout    <span class="keyword">TYPE</span> i,
          mv_max_retry  <span class="keyword">TYPE</span> i <span class="keyword">VALUE</span> 3.

    <span class="keyword">METHODS</span>: execute_with_retry
      <span class="keyword">IMPORTING</span> i_endpoint <span class="keyword">TYPE</span> string
      <span class="keyword">RETURNING VALUE</span>(r_response) <span class="keyword">TYPE</span> ty_response.
<span class="keyword">ENDCLASS</span>.`
  },
  explain: {
    prompt: 'Explain this CDS view and what each annotation does',
    code: `<span class="comment">This CDS view defines a Fiori Elements List Report:</span>

<span class="keyword">@AbapCatalog.sqlViewName</span>: <span class="string">'ZSALES_V'</span>
<span class="comment">→ Database view name (max 16 chars)</span>

<span class="keyword">@AbapCatalog.compiler.compareFilter</span>: <span class="keyword">true</span>
<span class="comment">→ Enables WHERE clause optimization</span>

<span class="keyword">@AccessControl.authorizationCheck</span>: #CHECK
<span class="comment">→ Enforces DCL (Data Control Language) checks</span>

<span class="keyword">@EndUserText.label</span>: <span class="string">'Sales Orders'</span>
<span class="comment">→ UI label shown in Fiori app</span>

<span class="keyword">@UI.headerInfo</span>: { typeName: <span class="string">'Order'</span> }
<span class="comment">→ Object page header configuration</span>

<span class="keyword">@UI.lineItem</span>: [{ position: 10 }]
<span class="comment">→ Column order in list report table</span>

<span class="keyword">@UI.selectionField</span>: [{ position: 10 }]
<span class="comment">→ Filter bar field configuration</span>`
  },
  debug: {
    prompt: 'Find bugs in this ABAP code',
    code: `<span class="comment">🐛 Found 3 issues:</span>

<span class="error">1. MEMORY LEAK (Line 45)</span>
   <span class="keyword">CREATE OBJECT</span> lo_client.
   <span class="comment">→ Missing FREE lo_client after use</span>
   <span class="success">Fix: Add FREE lo_client in cleanup</span>

<span class="error">2. SQL INJECTION RISK (Line 72)</span>
   <span class="keyword">SELECT</span> * <span class="keyword">FROM</span> (lv_table) <span class="keyword">WHERE</span> (lv_where).
   <span class="comment">→ Dynamic SQL with user input</span>
   <span class="success">Fix: Use CL_ABAP_DYN_PRG for validation</span>

<span class="error">3. MISSING ERROR HANDLING (Line 98)</span>
   lo_client->send( ).
   <span class="comment">→ No TRY/CATCH for HTTP errors</span>
   <span class="success">Fix: Wrap in TRY/CATCH cx_http_client</span>

<span class="comment">✅ No issues found in remaining 234 lines</span>`
  },
  test: {
    prompt: 'Generate unit tests for the REST client class',
    code: `<span class="keyword">CLASS</span> ltc_rest_client <span class="keyword">DEFINITION</span>
  <span class="keyword">FOR TESTING</span>
  <span class="keyword">DURATION SHORT</span>
  <span class="keyword">RISK LEVEL HARMLESS</span>.

  <span class="keyword">PRIVATE SECTION</span>.
    <span class="keyword">DATA</span>: mo_cut <span class="keyword">TYPE REF TO</span> zcl_rest_client.

    <span class="keyword">METHODS</span>:
      setup,
      test_successful_get <span class="keyword">FOR TESTING</span>,
      test_retry_on_timeout <span class="keyword">FOR TESTING</span>,
      test_invalid_url <span class="keyword">FOR TESTING</span>.
<span class="keyword">ENDCLASS</span>.

<span class="keyword">CLASS</span> ltc_rest_client <span class="keyword">IMPLEMENTATION</span>.
  <span class="keyword">METHOD</span> setup.
    mo_cut = <span class="keyword">NEW</span> #( i_base_url = <span class="string">'https://api.test.com'</span> ).
  <span class="keyword">ENDMETHOD</span>.

  <span class="keyword">METHOD</span> test_successful_get.
    <span class="keyword">DATA</span>(ls_response) = mo_cut->send_request( <span class="string">'/users'</span> ).
    cl_abap_unit_assert=>assert_equals(
      act = ls_response-status_code
      exp = 200 ).
  <span class="keyword">ENDMETHOD</span>.
<span class="keyword">ENDCLASS</span>.`
  }
}

const currentDemo = computed(() => demos[activeTab.value])
</script>

<style scoped>
.code-demo {
  background: var(--slate-900);
}

.demo-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid var(--slate-700);
  border-radius: 8px;
  color: var(--slate-400);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  border-color: var(--slate-600);
  color: var(--slate-200);
}

.tab-btn.active {
  background: var(--orange-500);
  border-color: var(--orange-500);
  color: white;
}

.tab-icon {
  font-size: 1.1rem;
}

.demo-content {
  max-width: 800px;
  margin: 0 auto;
}

.demo-prompt {
  background: var(--slate-800);
  border: 1px solid var(--slate-700);
  border-radius: 12px 12px 0 0;
  padding: 1.5rem;
}

.prompt-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--slate-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.prompt-text {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: var(--slate-200);
}

.demo-response {
  background: var(--slate-950);
  border: 1px solid var(--slate-700);
  border-top: none;
  border-radius: 0 0 12px 12px;
}

.response-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--slate-800);
}

.response-icon {
  color: var(--orange-500);
  font-size: 1.25rem;
}

.response-label {
  font-weight: 600;
  color: var(--slate-200);
}

.response-model {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--slate-600);
  background: var(--slate-800);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
}

.response-body {
  padding: 1.5rem;
  overflow-x: auto;
}

.response-body pre {
  margin: 0;
}

.response-body code {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--slate-300);
}

.response-body :deep(.keyword) {
  color: var(--purple-500);
}

.response-body :deep(.string) {
  color: var(--green-500);
}

.response-body :deep(.comment) {
  color: var(--slate-500);
}

.response-body :deep(.error) {
  color: #ef4444;
}

.response-body :deep(.success) {
  color: var(--green-500);
}
</style>
