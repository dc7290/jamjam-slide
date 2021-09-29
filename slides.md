---
theme: geist
title: Jamstack Pre-Rendering - 事前生成のメリットを生かして、microCMSのリッチエディタを最適化して使う
titleTemplate: '%s'
lineNumbers: false
---

<h1 class="mt-0 font-serif">Jamstack Pre-Rendering</h1>

<p>事前生成のメリットを生かして、<br>microCMSのリッチエディタを最適化して使う</p>

<img class="absolute bottom-10 left-10" src="/logo-jamstack.png" width="240" height="69" />

<!--
今回私が発表させていただくのは、「事前生成のメリットを生かして、microCMSのリッチエディタを最適化して使う」になりまして、
JamstackなWebサイトと通常のヘッドレスでないCMSなどを用いて作られるWebサイトが大きく違う点として、
事前にHTMLをレンダリングできることが挙げらると思います。
この特徴を活かす上で見過ごされがちな、リッチエディタ形式のコンテンツの最適化、こちらをテーマとさせていただきました。
-->

---
layout: center
---

<div class="flex justify-center items-center space-x-8">
  <img class="rounded-full overflow-hidden" src="/profile.jpg" width="200" height="200" alt="プロフィール画像">
  <div>
    <p class="mt-0 mb-2 text-3xl">
      でぃーすけ
    </p>
    <p class="mt-0 text-lg">キューコーポレーション株式会社</p>
    <a class="block mt-8 text-sm" href="https://twitter.com/d_suke_09" target="_blank" rel="noreferrer">@d_suke_09</a>
  </div>
</div>

<!-- 簡単に自己紹介をいたします。
私は現在キューコーポレーション株式会社という名古屋のWeb制作会社でフロントエンドエンジニアとして働いております。
経歴は今年で新卒2年目になりまして、最近はJamstack構成のwebサイト開発や既存のサイトにmicroCMSを導入するといったことを主に担当しています。 -->

---

# このスライドで何が達成されるのか

<h4 v-click="1" class="mt-10">HTML形式のコンテンツを最適化して、配信する技術</h4>

<ul class="mt-10 text-xl list-disc list-inside">
  <li v-click="2">画像</li>
  <li v-click="3" class="font-serif">iframe</li>
  <li v-click="4">シンタックスハイライト</li>
</ul>

<!--
早速本題に入ろうかと思うのですが、まずは、このスライドによって何が達成されるのかを説明させていただきます。

一言で言うとHTML形式のコンテンツ
-->

---

# そもそもどれくらいの効果があるのか

<p m="t-10">以下の条件で最適化した上で比較を行う</p>

<ol class="mt-10 text-xl list-decimal list-inside">
  <li v-click="1">画像を遅延読み込みかつ、レスポンシブ画像にする</li>
  <li v-click="2">iframeを遅延読み込みにする</li>
  <li v-click="3">シンタックスハイライトを事前に行う</li>
</ol>

<!--
今回の処理をすることによって、どのくらいパフォーマンスに影響が出るのか

念のため、レスポンシブ画像について簡単に説明させていただくと、
画面サイズや解像度によって適切なサイズの画像を配信する技術のことですね。
-->

---
layout: two-cols
---

# 最適化前

::right::

# 最適化後

---
layout: two-cols
---

# 最適化前

::right::

# 最適化後

---

# 画像の最適化


```ts {all|2|1-6|9|all}
```

---

# iframe の最適化

---

# シンタックスハイライト

---
