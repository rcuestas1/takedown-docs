import{_ as s,o as e,c as n,a4 as o}from"./chunks/framework.CDpUjPX_.js";const h=JSON.parse('{"title":"Exemplos de Sessoes — KAAS","description":"","frontmatter":{},"headers":[],"relativePath":"agentes/exemplos.md","filePath":"agentes/exemplos.md"}'),p={name:"agentes/exemplos.md"};function t(i,a,r,l,c,d){return e(),n("div",null,[...a[0]||(a[0]=[o(`<h1 id="exemplos-de-sessoes-—-kaas" tabindex="-1">Exemplos de Sessoes — KAAS <a class="header-anchor" href="#exemplos-de-sessoes-—-kaas" aria-label="Permalink to &quot;Exemplos de Sessoes — KAAS&quot;">​</a></h1><p>Exemplos de como cada agente opera, com input e output esperado.</p><blockquote><p>Para prompts prontos de todos os agentes, veja <a href="./quick-start">quick-start.md</a>.</p></blockquote><hr><h2 id="_1-sre-agent-—-health-check" tabindex="-1">1. SRE Agent — Health Check <a class="header-anchor" href="#_1-sre-agent-—-health-check" aria-label="Permalink to &quot;1. SRE Agent — Health Check&quot;">​</a></h2><h3 id="input-colar-no-claude-code" tabindex="-1">Input (colar no Claude Code) <a class="header-anchor" href="#input-colar-no-claude-code" aria-label="Permalink to &quot;Input (colar no Claude Code)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Leia e assuma a persona em .aiox-core/personas/kubex/sre-agent.md</span></span>
<span class="line"><span>Siga as regras em .aiox-core/rules/kubex-operations.md e .claude/rules/agent-operations.md</span></span>
<span class="line"><span>Execute o workflow em .aiox-core/workflows/kubex/continuous-monitoring.md</span></span>
<span class="line"><span>Gere o relatorio no formato especificado no workflow.</span></span></code></pre></div><h3 id="o-que-o-agente-faz" tabindex="-1">O que o agente faz <a class="header-anchor" href="#o-que-o-agente-faz" aria-label="Permalink to &quot;O que o agente faz&quot;">​</a></h3><ol><li>Le persona e regras</li><li>Roda health checks nos 27 motores via <code>run_all_checks()</code></li><li>Verifica circuit breakers no Redis</li><li>Consulta Sentinel stats</li><li>Gera relatorio estruturado</li></ol><h3 id="output-esperado-resumo" tabindex="-1">Output esperado (resumo) <a class="header-anchor" href="#output-esperado-resumo" aria-label="Permalink to &quot;Output esperado (resumo)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>=== RELATORIO DE SAUDE — Kubex ===</span></span>
<span class="line"><span>Motores: 24/27 healthy, 2 degraded, 1 error</span></span>
<span class="line"><span>Circuit Breakers: 0 abertos, 3 half-open</span></span>
<span class="line"><span>Sentinel: OK (ultimo ciclo 2h atras)</span></span>
<span class="line"><span>Redis: 1.2MB / 256MB | Celery: 4 workers, 0 pendentes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Alertas:</span></span>
<span class="line"><span>- [MEDIO] Motor 16 (DarkWeb): Tor proxy lento (3200ms)</span></span>
<span class="line"><span>- [BAIXO] Motor 25 (ShieldAI): rate limit ativo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Recomendacoes:</span></span>
<span class="line"><span>1. Verificar Tor proxy</span></span>
<span class="line"><span>2. Ajustar rate limit ShieldAI para 2req/min</span></span></code></pre></div><hr><h2 id="_2-backend-agent-—-correcao" tabindex="-1">2. Backend Agent — Correcao <a class="header-anchor" href="#_2-backend-agent-—-correcao" aria-label="Permalink to &quot;2. Backend Agent — Correcao&quot;">​</a></h2><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Leia e assuma a persona em .aiox-core/personas/kubex/backend-agent.md</span></span>
<span class="line"><span>Siga as regras em .aiox-core/rules/kubex-operations.md</span></span>
<span class="line"><span>Corrija o problema: Motor 16 (DarkWeb) com timeout alto.</span></span>
<span class="line"><span>Crie branch kaas/backend-agent/fix-darkweb-timeout</span></span></code></pre></div><h3 id="o-que-o-agente-faz-1" tabindex="-1">O que o agente faz <a class="header-anchor" href="#o-que-o-agente-faz-1" aria-label="Permalink to &quot;O que o agente faz&quot;">​</a></h3><ol><li>Analisa <code>app/engines/darkweb_monitor.py</code> e <code>app/core/circuit_breaker.py</code></li><li>Identifica timeout hardcoded insuficiente</li><li>Cria branch, aplica fix, roda testes</li><li>Cria PR com label <code>kaas-bot</code></li></ol><h3 id="output-esperado-resumo-1" tabindex="-1">Output esperado (resumo) <a class="header-anchor" href="#output-esperado-resumo-1" aria-label="Permalink to &quot;Output esperado (resumo)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Problema: Motor 16 (DarkWeb) com latencia &gt;3000ms</span></span>
<span class="line"><span>Causa raiz: Timeout Tor hardcoded em 5000ms</span></span>
<span class="line"><span>Fix: Aumentado para 10000ms com retry gradual (5s → 7s → 10s)</span></span>
<span class="line"><span>Branch: kaas/backend-agent/fix-darkweb-timeout</span></span>
<span class="line"><span>PR: #142 (label: kaas-bot) | Testes: 12/12 passando</span></span>
<span class="line"><span>Aguardando review do CEO para merge.</span></span></code></pre></div><hr><h2 id="_3-director-agent-—-relatorio-consolidado" tabindex="-1">3. Director Agent — Relatorio Consolidado <a class="header-anchor" href="#_3-director-agent-—-relatorio-consolidado" aria-label="Permalink to &quot;3. Director Agent — Relatorio Consolidado&quot;">​</a></h2><h3 id="input-1" tabindex="-1">Input <a class="header-anchor" href="#input-1" aria-label="Permalink to &quot;Input&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Leia e assuma a persona em .aiox-core/personas/kubex/director-agent.md</span></span>
<span class="line"><span>Execute o workflow em .aiox-core/workflows/kubex/continuous-improvement.md</span></span>
<span class="line"><span>Gere o relatorio diario consolidado.</span></span></code></pre></div><h3 id="output-esperado-resumo-2" tabindex="-1">Output esperado (resumo) <a class="header-anchor" href="#output-esperado-resumo-2" aria-label="Permalink to &quot;Output esperado (resumo)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>=== RELATORIO DIARIO — Director Agent ===</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Resumo: Sistema OPERACIONAL (24/27 healthy) | Testes: 724/731 (98.9%) | 0 criticos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Acoes dos Agentes:</span></span>
<span class="line"><span>- SRE: Health check #47 ✅</span></span>
<span class="line"><span>- QA: Suite completa ✅</span></span>
<span class="line"><span>- Security: Auditoria OWASP ✅</span></span>
<span class="line"><span>- Backend: Fix DarkWeb timeout ⏳ PR #142</span></span>
<span class="line"><span>- Docs: Sync docs + Swagger ✅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Backlog (Top 3):</span></span>
<span class="line"><span>1. [P2] Criar testes para Orchestrator, Watermark, AutoDiscovery</span></span>
<span class="line"><span>2. [P3] Rate limit no agents_admin.py</span></span>
<span class="line"><span>3. [P3] Endpoint de exportacao LGPD completo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Para o CEO:</span></span>
<span class="line"><span>- Revisar PR #142 (fix darkweb timeout)</span></span>
<span class="line"><span>- Aprovar criacao de testes para 3 motores sem cobertura</span></span></code></pre></div><hr><h2 id="_4-security-agent-—-auditoria" tabindex="-1">4. Security Agent — Auditoria <a class="header-anchor" href="#_4-security-agent-—-auditoria" aria-label="Permalink to &quot;4. Security Agent — Auditoria&quot;">​</a></h2><h3 id="input-2" tabindex="-1">Input <a class="header-anchor" href="#input-2" aria-label="Permalink to &quot;Input&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Leia e assuma a persona em .aiox-core/personas/kubex/security-agent.md</span></span>
<span class="line"><span>Faca uma auditoria de seguranca focada em OWASP Top 10.</span></span></code></pre></div><h3 id="output-esperado-resumo-3" tabindex="-1">Output esperado (resumo) <a class="header-anchor" href="#output-esperado-resumo-3" aria-label="Permalink to &quot;Output esperado (resumo)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>=== AUDITORIA DE SEGURANCA — Kubex ===</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Resumo: 0 CRITICO | 1 ALTO | 3 MEDIO | 5 BAIXO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ALTO] Missing Rate Limit em /admin/agents (agents_admin.py:45)</span></span>
<span class="line"><span>[MEDIO] SSRF em novo endpoint sem _is_safe_url() (search.py:112)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Scan de Dependencias: pip-audit 0 criticas | pnpm 2 moderate</span></span>
<span class="line"><span>LGPD: del img_bytes OK | Opt-out OK | Exportacao parcial (falta embeddings)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Top 3 Prioridades:</span></span>
<span class="line"><span>1. Rate limit no agents_admin.py</span></span>
<span class="line"><span>2. SSRF guard no novo endpoint</span></span>
<span class="line"><span>3. Completar endpoint de exportacao LGPD</span></span></code></pre></div><hr><h2 id="dicas-para-melhores-resultados" tabindex="-1">Dicas para Melhores Resultados <a class="header-anchor" href="#dicas-para-melhores-resultados" aria-label="Permalink to &quot;Dicas para Melhores Resultados&quot;">​</a></h2><ul><li><strong>Seja especifico:</strong> &quot;Roda health checks nos 27 motores e reporta qualquer um com latencia &gt;2000ms&quot;</li><li><strong>Forneca contexto:</strong> &quot;O SRE Agent reportou Motor 16 degraded com 3200ms. Investiga e corrige.&quot;</li><li><strong>Rode em sessoes separadas:</strong> cada agente em sua propria sessao do Claude Code para contexto isolado</li></ul>`,34)])])}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
