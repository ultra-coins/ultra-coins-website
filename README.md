# Setup

## Setup nix environment

1. create `flake.nix`

#### `flake.nix`

```nix
{
  description = "zola environment";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    inputs:
    inputs.flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = inputs.nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            zola
          ];
        };
      }
    );
}
```

2. execute `nix develop -c $SHELL`

```sh
nix develop -c $SHELL
```

## Setup zola environmant

3. Create zola project

```sh
zola init -f
```

4. Create those files

#### `templates/base.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Blog</title>
  </head>
  <body>
    <section class="section">
      <div class="container">{% block content %} {% endblock %}</div>
    </section>
  </body>
</html>
```

#### `templates/index.html`

This is a Webcome Page.

```html
{% extends "se.html" %} {% block content %}
<h1 class="title">This is my blog made with Zola.</h1>
<p><a href="{{ get_url(path='@/blog/_index.md') }}">Posts</a>.</p>
{% endblock content %}
```

#### `templates/blog.html`

This is a Blog List Page.

```html
{% extends "base.html" %} {% block content %}
<h1 class="title">{{ section.title }}</h1>
<ul>
  {%for page in section.pages %}
  <li>
    <a href="{{ page.permalink | safe}}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>
<p><a href="/">Back</a></p>
{% endblock content %}
```

#### `templates/blog-page.html`

This is a Blog Page Template

```html
{% extends "base.html" %} {% block content %}
<h1 class="title">{{ page.title }}</h1>
<p class="subtitle"><strong>{{ page.date }}</strong></p>
{{ page.content | safe }}
<p><a href="/blog/">Back</a></p>
{% endblock content %}
```

#### `content/blog/_index.md`

This is a setting file (format: TOML)

You have to enclose settings in `+++`.

```markdown
+++
title = "List of blog posts"
sort_by = "date"
template = "blog.html"
page_template = "blog-page.html"
+++
```

#### `content/blog/first.md`

```markdown
+++
title = "My first blog post"
date = 2020-01-01
+++

This is my first blog post.
```

## Publish using Cloudflare Pages

5. Select `zola` template and build

The build maybe failed.

- build configuration
  - Build command: zola build
  - Build output:public
  - Root directory:
  - Build comments:Enabled

6. Change under settings

- Set `Variables and Secrets`
  - Type: Plaintext
  - Name: ZOLA_VERSION
  - Value: 0.19.2
- Change `Production System Version` and `Preview System Version`
  - Production System Version: Version 1
  - Preview System Version: Version 1

7. Rebuild

**Finish**

# References

https://www.getzola.org/documentation/getting-started/overview/#content

https://swaits.com/adding-mermaid-js-to-zola/

https://sippo.work/blog/20231105-deploy-zola-with-cloudflare-pages/

https://zenn.dev/com4dc/scraps/c6c0f5fb87a1f9
