---
theme: apple-basic
title: Jamstack Pre-Rendering - 事前生成のメリットを生かして、microCMSのリッチエディタを最適化して使う
titleTemplate: '%s'
lineNumbers: false
layout: intro
---

<h1 class="font-serif">Jamstack Pre-Rendering</h1>

<p>事前生成のメリットを生かして、<br>microCMSのリッチエディタを最適化して使う</p>

<img class="visible-light absolute bottom-10 left-10" src="/logo-jamstack.png" width="240" height="69" />
<img class="visible-dark absolute bottom-10 left-10" src="/logo-jamstack-dark.png" width="240" height="69" />

<!--
今回私が発表させていただくのは、「事前生成のメリットを生かして、microCMSのリッチエディタを最適化して使う」になります。
JamstackなWebサイトと通常のヘッドレスでないCMSなどを用いて作られるWebサイトが大きく違う点として、
事前にHTMLをレンダリングできることが挙げられると思います。
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

<!--
簡単に自己紹介をさせてください。
私は現在キューコーポレーション株式会社という名古屋のWeb制作会社でフロントエンドエンジニアとして働いております。
経歴は今年で新卒2年目になりまして、最近はJamstack構成のwebサイト開発や既存のサイトにmicroCMSを導入するといったことを主に担当しています。
-->

---
layout: section
---

# このスライドで達成すること

<!-- では早速本題に入ります。
まずは、このスライドで達成すること、としまして
何をお伝えできるかというのを説明させていただきます。 -->

---
layout: section
---

## HTML形式のコンテンツを最適化した際のパフォーマンス改善の効果がわかる

<!--
それはHTML形式のコンテンツを最適化した際のパフォーマンス改善の効果がわかる、ということです。

HTML形式のコンテンツということで今回はmicroCMSのリッチエディタを使っていきますが、他のCMSでもHTML形式のコンテンツであれば同様の考え方でパフォーマンスの向上が見込めると思います。


-->

---

# どれくらいの効果があるのか

以下の条件で最適化した上で比較を行う

<ol class="mt-10 text-xl list-decimal list-inside">
  <li v-click="1">画像を遅延読み込みかつ、レスポンシブ画像にする</li>
  <li v-click="2">iframeを遅延読み込みにする</li>
  <li v-click="3">シンタックスハイライトを事前に行う</li>
</ol>

<!--
事前に処理をすることでどれくらいのパフォーマンスが向上するのかを、比較のデモでご覧いただこうと思っております。

その条件といたしまして、特に効果の高い3つの処理を、したものとそうでないもので比較をしていきます。

1つ目は画像を遅延読み込みかつ、レスポンシブ画像にすると言うものです。
念のため、レスポンシブ画像について簡単に説明させていただくと、
画面サイズや解像度によって適切なサイズの画像を配信する技術のことですね。
例えば、iPhoneの375pxのデバイスであれば、Reinaディスプレイであることを考慮して、
画像サイズは750pxあれば十分と考えることができると思いますが、
もし、1200pxのサイズしか用意していないと、差し引き450px分の通信コストが無駄ということになります。
こういったものをなくすようなものになっています。

2つ目はiframeを遅延読み込みにする、になります。
こちらもご存知の方も多いかと思いますが、iframeの読み込みは表示速度にとても影響があるので、
こちらも遅延読み込みにすることで、かなりのパフォーマンス改善が図れます。

3つ目はシンタックスハイライトを事前に行う、です。
microCMSさんのブログでも紹介されていましたが、こちらも効果が高かったものになります。

このようにパフォーマンス向上の効果が高い3つの処理をして、比較します。-->

---
layout: two-cols
---

# 最適化前

<div class="mt-10"></div>
<a href="https://jamjam-slide-inspection.vercel.app/before" target="_blank" rel="noreferrer">https://jamjam-slide-inspection.vercel.app/before</a>
<video class="mt-6" src="/movie-before.mp4" controls />

::right::

# 最適化後

<div class="mt-10"></div>
<a href="https://jamjam-slide-inspection.vercel.app/after" target="_blank" rel="noreferrer">https://jamjam-slide-inspection.vercel.app/after</a>
<video class="mt-6" src="/movie-after.mp4" controls />

<!-- 
こちらはWebサイト上での比較になるので、今回は実際に見ながら比較をしていきます。

表示するコンテンツとしてはこのような〜〜になっています。

最適化前は体感3秒ほどかかるのがわかると思います。
それに対し、最適化後はほぼ一瞬で読み込みが完了します。

また、体感速度の面以外でも、シンタックスハイライトが適用される際のちらつきも改善できていますね。 -->

---
layout: two-cols
---

# 最適化前

<img v-click="1" class="mt-20" src="/lighthouse-before.png" alt="">

::right::

# 最適化後

<img v-click="2" class="mt-20" src="/lighthouse-after.png" alt="">

<!-- 次にLighthouseの点数を見ていきます。今回はDesktopでの計測です。

まず、最適化前です。
コンテンツも少ない中で、73点とだいぶ低いのがわかるかと思います。

次に最適化後です。
という感じで、見事100点を出すことができました。
デプロイ先がVercelでNext.jsを最適化してくれていることやPCでの点数評価なことを差し引いても
十分やる価値があるのではないかと思います。
 -->

---

# 便利なライブラリの紹介

<div class="mt-20"></div>

```ts {all|5}
import { processer } from "microcms-richedit-processer"

〜〜〜

processer(content, { code: { enabled: true } })
```

<div class="mt-10"></div>

https://www.npmjs.com/package/microcms-richedit-processer

<!-- 少し宣伝になってしまうのですが、
私が開発しているライブラリで今回のような処理を簡単に実現できるものがありますのでご紹介させてください。

（クリック）
こんな感じで今回比較のために作ったページの処理が1行で完結できてしまうので、
もし良ければ使っていただけると嬉しいです。
 -->

---
layout: end
---

<!-- それではこちらで終わりとなります。ありがとうございました。 -->

