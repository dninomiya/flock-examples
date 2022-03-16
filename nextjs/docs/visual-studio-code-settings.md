## お勧めの設定

以下の設定を行なってください。

| 設定項目                 | 値              |
| ------------------------ | --------------- |
| Editor: Format On Save   | ✔️               |
| Emmet: Include Languages | javascriptreact |


## Visual Studio Code拡張機能

エディターインストール後、以下の拡張機能をエディターに加えてください。必須マークがないものも、特に理由がなければ導入を強くお勧めします。

| 拡張機能                                                                                                                               | 必須 | 概要                              |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---- | --------------------------------- |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                                | ✅    | コードの整形に必要                |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)                             | ✅    | Tailwind CSSの開発に必要          |
| [Firebase](https://marketplace.visualstudio.com/items?itemName=toba.vsfire)                                                            | ✅    | Firebaseの開発を効率化            |
| [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)               |      | エディターからGitHub操作が可能    |
| [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                      |      | エディターから高度なGit操作が可能 |
| [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja) |      | エディターの日本語化に必要        |
| [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)                       |      | JavaScriptの記述を効率化          |
| [Next.js snippets](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets)                                  |      | Next.jsの開発を効率化             |
| [S7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)    |      | Reactの開発を効率化               |
| [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)                                                         |      | 環境ファイルを見やすくする        |
| [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                              |      | 整形ルールなどを管理              |
| [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                              |      | 整形ルールなどを管理              |
| [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)                                           |      | コマンドでファイル操作が可能      |

## プレーンな状態をできるだけ保つ

公式ドキュメントやFlockは基本的にターミナルやエディターがプレーン（初期状態）であることを前提に設計されています。したがって

- ターミナルを**よく分からないけど**拡張している
- Visual Studio Codeに**よく分からない**拡張機能を入れている

人はただちにプレーン（初期状態）な状態に戻してください。昨今はターミナルやエディターに多くの改造を加えなくても十分な効率で開発ができるようになっています。むやみやたらに拡張機能やカスタマイズを加えるのはやめましょう。