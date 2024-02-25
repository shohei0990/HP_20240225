// 20240105_HP/next-website/src/pages/_app.tsx
// フローの概要
// 1. ユーザーがブラウザで特定のURLにアクセスします。
// 2. Next.jsはpagesディレクトリ内の対応するファイルを探し、ページコンポーネントを特定します。
// 3. _app.tsxが呼び出され、Componentとして特定されたページコンポーネントが渡されます。
// 4. _app.tsxはRootLayoutを使用してページコンポーネントをラップし、共通のレイアウトを適用します。
// 5. RootLayoutはNavbarとFooterを含む共通のレイアウトを提供し、
//    childrenとして受け取ったページコンポーネント （この場合はHome） を表示します。
// 6. Homeコンポーネント（または他のページコンポーネント）は、そのページ特有のコンテンツをレンダリングします。
//    Homeは、現在アクティブになっている index.tsx となっている。(謎 )

import '../app/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../app/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}