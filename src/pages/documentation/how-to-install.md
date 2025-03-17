---
layout: ../../layouts/DocsLayout.astro
title: How to Install
description: Learn how to install LirixAI in your project
---

# Installation Guide

Installing **LirixAI** is quick and easy. Follow the steps below to get started.

<DocAnimation>
LirixAI works with both pip and uv package managers, and is compatible with Python 3.8 and above. All dependencies are automatically managed during installation.
</DocAnimation>

## Installing LirixAI

To install LirixAI, run the following command in your terminal:

```bash
% pip install lirixai
% uv add lirixai
```

This will automatically download and install all necessary dependencies.
<div class="terminal-demo relative my-10 overflow-hidden rounded-lg shadow-lg">
  <div class="terminal-header flex items-center px-4 py-2 bg-gray-800">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div class="ml-4 text-gray-400 text-sm">terminal</div>
  </div>
  <div class="terminal-body bg-black p-4 text-sm">
    <div class="command-line flex">
      <span class="text-green-400 mr-2">$</span>
      <span class="typing-text text-gray-200">pip install lirixai</span>
    </div>
    <div class="output text-gray-400 mt-2 typing-output">
      <div>Collecting lirixai</div>
      <div>  Downloading lirixai-0.5.2-py3-none-any.whl (120 kB)</div>
      <div>Collecting langchain>=0.0.267</div>
      <div>  Downloading langchain-0.0.267-py3-none-any.whl (1.5 MB)</div>
      <div>Collecting supabase>=1.0.3</div>
      <div>  Downloading supabase-1.0.3-py3-none-any.whl (79 kB)</div>
      <div>Installing collected packages: supabase, langchain, lirixai</div>
      <div class="text-green-400">Successfully installed lirixai-0.5.2 langchain-0.0.267 supabase-1.0.3</div>
    </div>
    <div class="command-line flex mt-4 delayed-1">
      <span class="text-green-400 mr-2">$</span>
      <span class="typing-text-2 text-gray-200">python -c "import lirixai; print('LirixAI installed successfully!')"</span>
    </div>
    <div class="output text-green-500 mt-2 delayed-2">
      LirixAI installed successfully!
    </div>
  </div>
</div>

<style>
  .terminal-demo {
    transform: translateZ(0);
    transition: all 0.3s ease;
  }
  
  .terminal-demo:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .typing-text {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 1.5s steps(20, end), blink 1s step-end infinite;
    width: fit-content;
  }
  
  .typing-text-2 {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 2s steps(60, end) 4s, blink 1s step-end infinite;
    width: 0;
    animation-fill-mode: forwards;
  }
  
  .typing-output {
    opacity: 0;
    animation: fadeIn 2s ease 1.5s forwards;
  }
  
  .delayed-1 {
    opacity: 0;
    animation: fadeIn 0.5s ease 3.5s forwards;
  }
  
  .delayed-2 {
    opacity: 0;
    animation: fadeIn 0.5s ease 6s forwards;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink {
    50% { border-color: transparent }
  }
  
  @keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
  }
</style>

## Verifying the Installation

After installation, verify that LirixAI is correctly installed by running:

```bash
% python -c "import lirixai; print('LirixAI installed successfully!')"
```

If you see the following output:

```bash
LirixAI installed successfully!
```

Then the installation was successful!
<div class="terminal-demo relative my-10 overflow-hidden rounded-lg shadow-lg">
  <div class="terminal-header flex items-center px-4 py-2 bg-gray-800">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div class="ml-4 text-gray-400 text-sm">verification</div>
  </div>
  <div class="terminal-body bg-black p-4 text-sm">
    <div class="command-line flex">
      <span class="text-green-400 mr-2">$</span>
      <span class="typing-text-verify text-gray-200">python -m venv lirixai_env</span>
    </div>
    <div class="command-line flex mt-2 delayed-verify-1">
      <span class="text-green-400 mr-2">$</span>
      <span class="typing-text-verify-2 text-gray-200">source lirixai_env/bin/activate</span>
    </div>
    <div class="command-line flex mt-2 delayed-verify-2">
      <span class="text-green-400 mr-2">(lirixai_env) $</span>
      <span class="typing-text-verify-3 text-gray-200">pip install lirixai</span>
    </div>
    <div class="output text-gray-400 mt-2 delayed-verify-3">
      <div class="text-green-400">Successfully installed lirixai-0.5.2 and dependencies</div>
    </div>
    <div class="command-line flex mt-4 delayed-verify-4">
      <span class="text-green-400 mr-2">(lirixai_env) $</span>
      <span class="typing-text-verify-4 text-gray-200">python -c "import lirixai; print(lirixai.__version__)"</span>
    </div>
    <div class="output text-green-500 mt-2 delayed-verify-5">
      0.5.2
    </div>
  </div>
</div>

<style>
  .typing-text-verify {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 1.5s steps(25, end), blink 1s step-end infinite;
    width: fit-content;
  }
  
  .typing-text-verify-2 {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 1.5s steps(30, end) 1.5s, blink 1s step-end infinite;
    width: 0;
    animation-fill-mode: forwards;
  }
  
  .typing-text-verify-3 {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 1.2s steps(20, end) 3s, blink 1s step-end infinite;
    width: 0;
    animation-fill-mode: forwards;
  }
  
  .typing-text-verify-4 {
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typing 2s steps(50, end) 5.5s, blink 1s step-end infinite;
    width: 0;
    animation-fill-mode: forwards;
  }
  
  .delayed-verify-1 {
    opacity: 0;
    animation: fadeIn 0.3s ease 1.5s forwards;
  }
  
  .delayed-verify-2 {
    opacity: 0;
    animation: fadeIn 0.3s ease 3s forwards;
  }
  
  .delayed-verify-3 {
    opacity: 0;
    animation: fadeIn 0.5s ease 4.2s forwards;
  }
  
  .delayed-verify-4 {
    opacity: 0;
    animation: fadeIn 0.3s ease 5.5s forwards;
  }
  
  .delayed-verify-5 {
    opacity: 0;
    animation: fadeIn 0.5s ease 7.5s forwards;
  }
</style>

<DocAnimation>
For production environments, we recommend using virtual environments to isolate dependencies and ensure consistent behavior across different deployments.
</DocAnimation>

## Next Steps

Now that you have installed LirixAI, explore the following resources:
- **[Getting Started](/documentation/getting-started)** – Learn how to use LirixAI in your projects.
- **[Examples](/documentation/examples)** – Check out practical use cases and implementations.
- **[Getting Help](/documentation/getting-help)** – Find support and documentation.

Happy coding with LirixAI!

<div class="doc-navigation">
  <div class="prev-page">
    <a href="/documentation/getting-started">Getting Started</a>
  </div>
  <div class="next-page">
    <a href="/documentation/getting-help">Getting Help</a>
  </div>
</div>
