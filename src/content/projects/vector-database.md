---
title: "Vector Database"
summary: "An HNSW-based in-memory vector database in Rust with configurable distance metrics, quantization, segmented indexing, and concurrent search."
tech: ["Rust", "HNSW", "Rayon", "Memory Mapping"]
date: 2025-11-01
featured: true
---

## Problem

Similarity search systems need low-latency nearest-neighbor retrieval while balancing memory efficiency, persistence, and concurrent access.

## Approach

I implemented an HNSW-powered vector engine with L2 and cosine metrics, scalar quantization, and memory-mapped fixed-capacity storage. The index model combines immutable and mutable segments with flush support, while search is parallelized with Rayon.

## Outcome

- Delivered thread-safe concurrent search with persistent JSON-backed state.
- Added segmented index architecture to support mutable ingestion and stable query behavior.
- Built a configurable vector search foundation suitable for retrieval-heavy workloads.
