---
layout: ../../layouts/DocsLayout.astro
title: Getting Help
description: Find support and resources for LirixAI
---

# Getting Help

If you need assistance with LirixAI, check out these resources:

<DocAnimation>
Our community is active and growing! Get help through our Discord or GitHub.
</DocAnimation>

## GitHub Issues

<div class="terminal-demo relative my-2 overflow-hidden rounded-lg shadow-sm">
  <div class="terminal-header flex items-center px-1 py-0.5 bg-gray-800">
    <div class="flex space-x-0.5">
      <div class="w-1 h-1 rounded-full bg-red-500"></div>
      <div class="w-1 h-1 rounded-full bg-yellow-500"></div>
      <div class="w-1 h-1 rounded-full bg-green-500"></div>
    </div>
    <div class="ml-1 text-gray-400 text-xs">github_issue.md</div>
  </div>
  <div class="terminal-body bg-gray-900 p-1 text-xs">
    <pre class="text-gray-300 text-xs typing-animation"><span class="text-blue-400"># Bug Report</span>

<span class="text-purple-400">## Description</span>
Memory connection fails with custom credentials.

<span class="text-purple-400">## Steps</span>
1. Configure memory with custom URL
2. Initialize agent
3. Run agent.remember()

<span class="text-purple-400">## Error</span>
ConnectionError: "Invalid credentials"</pre>
  </div>
</div>

Visit the **[LirixAI GitHub Issues](#)** page to report bugs or request features.

## Discord Community

<div class="discord-card relative my-2 p-1.5 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg overflow-hidden text-white shadow-sm">
  <div class="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-indigo-400 rounded-full opacity-20"></div>
  
  <div class="flex items-start space-x-1.5 relative z-10">
    <div class="discord-icon-container p-1 bg-white/20 rounded-lg">
      <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h3 class="text-xs font-bold text-white mb-0.5">Join #lirix-ai channel</h3>
      <p class="text-white/80 mb-1 text-xs">Connect with our community for support and discussions.</p>
      <a href="#" class="inline-flex items-center px-1.5 py-0.5 bg-white text-indigo-700 font-medium text-xs rounded hover:bg-indigo-50 transition-colors">
        <span>Join Discord</span>
        <svg class="ml-1 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  .discord-card {
    box-shadow: 0 2px 4px rgba(67, 56, 202, 0.15);
    transition: all 0.2s ease;
  }
  
  .discord-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(67, 56, 202, 0.2);
  }
  
  .discord-icon-container {
    transition: all 0.2s ease;
  }
  
  .discord-card:hover .discord-icon-container {
    transform: rotate(5deg);
  }
  
  .typing-animation {
    overflow: hidden;
    border-right: 1px solid #3b82f6;
    white-space: nowrap;
    animation: typing 2s steps(30) 0.5s 1 normal both, blink 1s step-end infinite;
    width: 100%;
    font-size: 0.65rem;
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }
  
  .terminal-demo {
    transform: translateZ(0);
  }
  
  .terminal-demo:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="doc-navigation">
  <div class="prev-page">
    <a href="/documentation/how-to-install">How to Install</a>
  </div>
  <div class="next-page">
    <a href="/documentation/examples">Examples</a>
  </div>
</div>



