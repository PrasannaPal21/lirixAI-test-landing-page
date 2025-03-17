---
layout: ../../layouts/DocsLayout.astro
title: Getting Started
description: Learn how to get started with LirixAI
---


# Introduction

Welcome to **LirixAI**! This is a Python library designed to simplify the development of agentic and multi-agentic systems by providing ready-to-use integrations with essential backend technologies.

<DocAnimation>
LirixAI is designed with a "batteries-included" philosophy, providing all the tools you need to build sophisticated AI agent systems without the infrastructure headaches.
</DocAnimation>

## What is LirixAI?

LirixAI is an open-source, flexible, and powerful framework that streamlines the creation of agentic AI applications. It enables direct implementation of multi-agent systems by integrating tools such as:
- **Web search APIs** for seamless data retrieval.
- **Database solutions** like Supabase for memory management.
- **Real-time communication protocols** for multi-agent interactions.

<div class="terminal-demo relative my-8 overflow-hidden rounded-lg shadow-md">
  <div class="terminal-header flex items-center px-3 py-1.5 bg-gray-800">
    <div class="flex space-x-1.5">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
    </div>
    <div class="ml-3 text-gray-400 text-xs">multi_agent_example.py</div>
  </div>
  <div class="terminal-body bg-gray-900 p-3 text-xs">
    <pre class="text-gray-300 typing-animation"><span class="text-purple-400">from</span> <span class="text-blue-400">lirixai</span> <span class="text-purple-400">import</span> MultiAgentSystem, Agent, Memory

<span class="text-green-400"># Create a multi-agent system with specialized agents</span>
system = MultiAgentSystem(
    agents=[
        Agent(name=<span class="text-yellow-300">"researcher"</span>, role=<span class="text-yellow-300">"Find relevant information"</span>),
        Agent(name=<span class="text-yellow-300">"analyst"</span>, role=<span class="text-yellow-300">"Analyze and synthesize data"</span>),
        Agent(name=<span class="text-yellow-300">"writer"</span>, role=<span class="text-yellow-300">"Create final report"</span>)
    ],
    memory=Memory(database_url=<span class="text-yellow-300">"supabase://shared_memory"</span>)
)

<span class="text-green-400"># Run the system with a complex task</span>
result = system.run(<span class="text-yellow-300">"Create a report on emerging AI trends"</span>)</pre>
  </div>
</div>

Instead of manually setting up these services, developers can leverage LirixAI to accelerate their workflow with minimal effort.

## Why LirixAI?

Building agentic systems for backend applications is often tedious and repetitive, requiring extensive setup for:
- **Memory management** with databases (e.g., using embeddings in Supabase).
- **Seamless web search integration** for AI agents.
- **Real-time multi-agent collaboration** using tools like WebRTC.

<DocAnimation>
By abstracting away infrastructure complexity, LirixAI lets you focus on agent logic and behavior rather than connection details and database setup.
</DocAnimation>

LirixAI eliminates this complexity by providing pre-built, configurable components, allowing developers to focus on innovation rather than setup.

<div class="doc-navigation">
  <div class="prev-page">
    <a href="/">Home</a>
  </div>
  <div class="next-page">
    <a href="/documentation/how-to-install">How to Install</a>
  </div>
</div>
