---
title: "Equidock-Diff"
summary: "A protein-ligand docking system built with PyTorch and geometric learning, achieving 1.20 A mean aligned RMSD on a 20-complex evaluation panel."
tech: ["Python", "PyTorch", "Torch Geometric", "RDKit"]
date: 2026-01-01
featured: true
---

## Problem

Protein-ligand docking pipelines are sensitive to reproducibility and evaluation consistency, which makes model comparison difficult across runs.

## Approach

I built a docking workflow around geometric deep learning with reproducible training, sampling, and evaluation pipelines. The system supports checkpoint reuse and run tracking to enable controlled iteration.

## Outcome

- Achieved 1.20 A mean aligned RMSD across a 20-complex evaluation panel.
- Established repeatable experiment workflows to compare modeling choices with less variance.
- Improved confidence in model performance reporting through standardized evaluation runs.
