# Ultra Coins の Website 案

## 記事の追加方法

適当なディレクトリを`content`配下に作成し、その中に`index.md`を作成する。

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
````

```

### mermaid

```

{% mermaid() %} #この中に mermaid のコードを書く
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

## References

https://www.getzola.org/documentation/getting-started/overview/#content

https://swaits.com/adding-mermaid-js-to-zola/

https://sippo.work/blog/20231105-deploy-zola-with-cloudflare-pages/

https://zenn.dev/com4dc/scraps/c6c0f5fb87a1f9

```

```

```

```

```

```

```

```

```
