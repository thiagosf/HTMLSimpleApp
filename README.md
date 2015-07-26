# HTML Simple App

Estrutura básica para sites estáticos. 

## Ferramentas/módulos pré-instalados

* Grunt
* Sass
* Compass
* Bower
* Foundation
* FastClick

## Instalação

### Clonar o respositório

```sh
git clone https://github.com/thiagosf/HTMLSimpleApp.git site
```

### Instalar módulos do grunt e componentes do bower

```sh
npm install
bower install
```

### Configurar nginx

Edite o arquivo `conf/nginx.conf`, alterando o _server_name_ (caso utilize apache, ignore essa etapa)

```
server {
  listen 80;
  server_name www.html-simple-app.dev html-simple-app.dev;
  root /var/www/html-simple-app;
  location / {
    autoindex on;
    try_files $uri /index.html;
  }
}
```

### Codar

Pronto, agora é só se divertir codando :stuck_out_tongue_winking_eye:
