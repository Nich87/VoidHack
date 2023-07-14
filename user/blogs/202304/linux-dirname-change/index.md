---
title: 【Linux】ユーザーディレクトリを英語化する
description: HOME配下にあるディレクトリ名を日本語から英語に変更する方法
summary: ✨ 日本語のユーザーディレクトリを英語に変更しよう！
published: '2023-04-17T13:00:00.000+09:00'
updated: '2023-04-17T13:00:00.000+09:00'
cover: ./assets/cover.jpg
coverStyle: TOP
tags:
  - [Linux,Setting,豆知識]
---

<script lang="ts">
import Folder from '$lib/components/folder.svelte'
const oldDir = [
  {name:'デスクトップ'},
  {name:'ドキュメント'},
  {name:'ダウンロード'},
  {name:'ミュージック'},
  {name:'テンプレート'},
  {name:'ビデオ'}
];
const newDir = [
  {name:'Desktop'},
  {name:'Documents'},
  {name:'Downloads'},
  {name:'Music'},
  {name:'Templates'},
  {name:'Videos'}
];
</script>

# ✨はじめに
Linuxを日本語インストールしてあるあるなのが、ホームディレクトリだけが`ダウンロード`だったり`デスクトップ`だったりするアレです。

個人的に下記のやらかしをするのでセットアップ時は気をつけようと思います。

```bash
cd Desktop
cd: そのようなファイルやディレクトリはありません: Desktop
```
今回のイメージ図
<div style="display:flex;justify-content:space-around;">
<Folder name="設定前" files={oldDir} expanded />
<Folder name="設定後" files={newDir} expanded />
</div>

# 💻環境
端末:Apple Inc. MacBookAir7,2

OS:Pop!_OS 22.04 LTS x64

X Window System:X11

GNOME:42.5

shell:zsh 5.8.1(gnome-terminal)


# ⚡インストール
:::info
GNOME等は最初から導入されているのでこの手順はスキップして構いません。
:::
```bash
sudo apt install xdg-user-dirs
```

# 🔨ディレクトリの作成
```bash
LC_ALL=C xdg-user-dirs-update --force
```
:::info
ローカライズされたディレクトリを作成するには下記で作成出来ます。
```bash
xdg-user-dirs-update
```
:::

問題なく作成されているか確認するには`ls`コマンド等を使用して確認しましょう。

:::tip
カスタムディレクトリを作成することも可能です。
下記は公開フォルダを`Shared`というフォルダにバインドする例です。
```bash
xdg-user-dirs-update --set PUBLICSHARE ~/Shared
```
:::

# 📕まとめ
案外簡単に変更出来て拍子抜けしました。

カスタムフォルダは個人的に重宝しています。

ちなみに`LC_ALL=C`というのはロケール環境変数`LC_ALL`に代入をし、

一時的にアメリカ英語ロケールに切り替えるために使用しています。