---
title: "Firewall Configurator"
summary: "A C-based client-server firewall configuration tool with automated test scripting and Makefile-driven builds."
tech: ["C", "Shell", "Makefile", "Client-Server"]
date: 2025-12-01
featured: false
github: "https://github.com/src6/firewall-configurator"
---

## Problem

Managing firewall rule changes manually is error-prone and hard to validate consistently, especially when multiple updates are applied in sequence.

## Approach

I implemented a networked firewall configurator in C with separate client and server programs, then added scriptable validation through `test.sh` and reproducible builds with a Makefile.

## Outcome

- Built a low-level configuration workflow with explicit client-server request handling.
- Added automation hooks for repeatable testing and verification.
- Improved maintainability with a straightforward build and execution pipeline.
