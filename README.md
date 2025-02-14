# Ultra-Coins の Blog

このレポジトリは、Ultra-Coins のウェブサイトとして機能します。

ウェブサイトは、Astro という SSG(静的サイトジェネレータ)を使用しています。

## 使用した SSG

Astro

## 環境の Setup

### 非 Nix ユーザーの場合

Node.js と pnpm をインストールしてください。

その後、以下のコマンドをレポジトリのルートを実行してください。

```shell
pnpm i
```

### Nix ユーザーの場合 (flake を利用できる場合)

```shell
nix develop -c $SHELL
pnpm i
```
