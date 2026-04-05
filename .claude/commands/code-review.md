---
description: コードレビューを行う
argument-hint: "<ファイルパス | diff | 空白で全変更>"
allowed-tools: Bash(git *) Read Grep Glob
---

以下の対象をコードレビューしてください。

**対象：** $ARGUMENTS

対象が指定されていない場合は `git diff HEAD` の差分をレビューしてください。

コードレビュー用のサブエージェントが利用可能な場合は優先して使用し、客観的なレビュー結果を返してください。
