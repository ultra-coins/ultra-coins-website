# Ultra Coins の Website

このレポジトリは、Ultra Coinsのウェブサイト及び、ブログとして機能します。

ウェブサイト及びブログは、zolaというSSG(静的サイトジェネレータ)を使用しています。

## 使用した SSG

zola 0.19.2

## レスポンシブ対応

対応済み

## templates の構造

以下、疑似 html で表現している

### メインページ

```
<base.html>
  <index.html></index.html>
</base.html>
```

### 記事ページ

```
<base.html>
    <blog-template.html></blog-template.html>
</base.html>
```

### 404 ページ

```
<base.html>
    <404.html></404.html>
</base.html>
```

## shortcodesを置く場所

`/templates/shortcodes/`配下に置いてください

## 環境の Setup

### 非 Nix ユーザーの場合

以下を参考に zola をインストールしてください。

https://www.getzola.org/documentation/getting-started/installation/

### Nix ユーザーの場合 (flake を利用できる場合)

```shell
nix develop -c $SHELL
```

## 記事を書くときのルール

1. 適当に作成するディレクトリ名でbranchを切ってから、作業に取りかかってください。
2. 記事の追加方法は、以下の「記事の追加方法」を参照してください。

## 記事の追加方法

適当なディレクトリを`content`配下に作成し、その中に`index.md`を作成する。

> [!WARNING]
> すでに存在するディレクトリ名は使用できません。

> [!NOTE]
> ディレクトリ名が記事のURIを識別する際の名前になります。

> [!NOTE]
> 画像などは作成したディレクトリに配置する。

## Ultra Coins の Blog 特有の記法

### Code Block の各言語一覧

https://www.getzola.org/documentation/content/syntax-highlighting/

#### 例

````
```rs
fn main() {
    println!("Hello, world!");
}
```
````

![codeblock](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/codeblock.png)

### katex

```
$$
#この中に数式を書く
$$
```

#### 例

```
$$
\frac{dy}{dx} + p(x) y^2 + q(x) y + r(x) = 0
$$
```

![katex](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/katex.png)

### mermaid

```
{% mermaid() %}
#この中に mermaid のコードを書く
{% end %}
```

#### 例

```
{% mermaid() %}
flowchart LR
rdb["PostgreSQL (RDB)"] <--> server["server (main)"]
graphdb["Neo4j (GraphDB)"] <--> server["server (main)"]
meilisearch["Meilisearch (検索エンジン)"] <--> server["server (main)"]
cloudflare["Cloudflare R2 (画像保存)"] <--> image-server["image-server (画像専用)"]
server["server (main)"] <--> client["client"]
image-server["image-server (画像専用)"] <--> client["client"]
{% end %}
```

![marmaid](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/marmaid.png)

### note

```
{% note() %}
# ここに note の内容を書く
{% end %}
```

#### 例

```
{% note() %}
これは note です。
{% end %}
```

![note](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/note.png)

### tip

```
{% tip() %}
# ここに tip の内容を書く
{% end %}
```

#### 例

```
{% tip() %}
これは tip です。
{% end %}
```

![tip](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/tip.png)

### important

```
{% important() %}
# ここに important の内容を書く
{% end %}
```

#### 例

```
{% important() %}
これは important です。
{% end %}
```

![important](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/important.png)

### warning

```
{% warning() %}
# ここに warning の内容を書く
{% end %}
```

#### 例

```
{% warning() %}
これは warning です。
{% end %}
```

![warning](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/warning.png)

### caution

```
{% caution() %}
# ここに caution の内容を書く
{% end %}
```

#### 例

```
{% caution() %}
これは caution です。
{% end %}
```

![caution](https://github.com/ultra-coins/uc-room-website-new/blob/main/assets/caution.png)

## References

https://www.getzola.org/documentation/getting-started/overview/#content

https://swaits.com/adding-mermaid-js-to-zola/

https://sippo.work/blog/20231105-deploy-zola-with-cloudflare-pages/

https://zenn.dev/com4dc/scraps/c6c0f5fb87a1f9
