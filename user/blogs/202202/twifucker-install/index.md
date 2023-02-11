---
title: 【TwiFucker】Twitterを快適にするXposedモジュール
description:
summary: ✨ Twitterを快適にするTwiFuckerの紹介記事です。
published: '2023-02-09T00:00:00.000+08:00'
updated: '2023-02-09T21:00:00.000+08:00'
cover: ./assets/cover.jpg
coverStyle: TOP
tags:
  - [Android,Xposed,]
---




## ✨ はじめに

:::caution

TwiFucker並びにLSPatchを導入したことによる故障、アカウントBANについては責任を負いかねます。

:::

1. バッテリーを30%以上充電しましょう。
1. バックアップを必ず行いましょう。

### 🎉 今回のテスト環境

- Pixal7 Pro(Android13)
- Twitter 9.64.0-release.0
- [LSPatch 0.5.1](https://github.com/LSPosed/LSPatch/releases)
- [TwiFucker v1.9](https://github.com/Dr-TSNG/TwiFucker/releases)

## ⚡️ TwiFuckerを試す

1. #### 各種ダウンロード

 - [LSPatch](https://github.com/LSPosed/LSPatch/releases)
 - [TwiFucker](https://github.com/Dr-TSNG/TwiFucker/releases/tag/1.9)

   ダウンロードしたらインストールを行いましょう。

1. #### パッチを当てる
   LSPatchを起動し、左から2番目の管理画面を開き、右下の`+`ボタンをタッチしてください。

   :::tip

   パッチを適用する際はapkもしくはインストール済みのどちらかからで選択可能です。

   :::

1. #### パッチモードを選択する
   そうすると下記のような画面が出てきますのでモード**のみ**選択しましょう。

   ![scrreenshot](/user/blogs/202202/twifucker-install/assets/patchmode.png)

   :::tip

      - ローカルモード


        モジュールを内臓せずにLSPatchをバックグラウンドで動作させる。


        メリットとしてはモジュールのバージョンアップに再インストール無しで対応可能。


   - ポータブルモード


        apk自体にモジュールを埋め込む。


        動的にバージョン管理が出来なくなるが、apk単体で動作するため他端末でも動作が可能になるメリットがあります。

   :::

   選択したら右下の`パッチを開始`ボタンをタップするとビルドが開始されます。

1. #### インストールする
   ビルド完了後に起動時に設定したディレクトリにビルド済みのapkがデプロイされます。
   ![scrennshot](/user/blogs/202202/twifucker-install/assets/build-apk.png)
   インストールしたら再度LSPatchを起動し管理画面に行くと下記のように表示されているはずです。

   Twitterをタッチ→モジュールのスコープをタッチ
   ![screenshot](/user/blogs/202202/twifucker-install/assets/kanri.png)

   そうすると下記のようにTwiFuckerが出てくるので☑にします。

   完了したら、右下のボタンを押下し適用させてください。
   ![screenshot](/user/blogs/202202/twifucker-install/assets/scope.png)

## 🚀 快適なTwitterライフを
起動した際にTwiFuckerのトーストが表示されていれば無事導入されています。

`設定とプライバシー`=>`その他のリソース`=>`バージョンx.xx.x-xxx.x`の順に辿ると下記のようなモーダルが表示されるはずです。

   ![screenshot](/user/blogs/202202/twifucker-install/assets/twifucker.png)

   様々な項目がありますが大きな項目としては下記のようなドロワーアイテムの削除であったり、
   動画や画像のダウンロード機能などでしょうか。広告消去が一番大きなものではあると思います。
      ![screenshot](/user/blogs/202202/twifucker-install/assets/twifk_menu.png)


## 📚 機能一覧

ここに主な機能とプレビュー画像が乗っています: [https://github.com/Dr-TSNG/TwiFucker/blob/master/FEATURES.md](https://github.com/Dr-TSNG/TwiFucker/blob/master/FEATURES.md).

## 🔚 最後に
root化を必要とせずにここまで出来るのはなかなかすごいと思います。
昔root化して似たようなモジュールを導入していましたが、
広告が表示されたら消すみたいな動作を行っていたせいかカクカクしていた記憶があります。
よきTwitterライフが送れて大満足です。
皆様もよきTwitterライフを...。