
# IonicとVueを利用したアプリ作成

## はじめ方
1. vueのプロジェクトを作る

1. `vue add vue-cli-plugin-ionic`

1. router/index.jsとHelloWorld.vueを書き換え

1. ~~`sudo gem install cocoapods`~~<br>
  `brew install cocoapods`(上のやつと重複していたら、`brew link --overwrite cocoapods`で上書きしろと出てくる)<br>
   参考:[Catalina cocoa pods インストールできない-teratail](https://teratail.com/questions/245100)

1. `npx ionic init`

1. `npx ionic capacitor copy`

1. `npx cap add ios` or `npx cap add android`

1. `npx cap open ios` or `npx open android`

## 以後の開発

npm run dev でWeb版の画面を見て開発、
npm run build と npx cap copyでビルド

## scriptsについて

```
"build:app": "npx cap copy",
"dev:ios": "npx cap open ios",
"dev:android": "npx open android",
"ios": "npx cap add ios",
"android": "npx cap add android"
```

`はじめ方` のコマンドを `npm run ~` で省略できるようにした。

## 注意
yarn は使ってはいけないらしい。
