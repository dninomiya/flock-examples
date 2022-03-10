1.Microsoftアカウントを作成して [Azure Active Directory 設定画面](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)に移動します。

2.追加 > アプリの登録 でアプリを作成します。

![](/images/docs/2022-03-11-02-04-12.png)

| 項目                               | 設定内容                                                                                                                                                                          |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| サポートされているアカウントの種類 | 任意の組織ディレクトリ内のアカウント (任意の Azure AD ディレクトリ - マルチテナント) と個人の Microsoft アカウント (Skype、Xbox など)                                             |
| リダイレクト URI                   | Web、[Firebaseダッシュボードの認証](https://console.firebase.google.com/u/0/project/_/authentication/providers?hl=ja) > Microsoftログインを有効にした際、画面に表示されています。 |

3.アプリ管理画面のアプリケーション（クライアントID）をコピーし、Firebase Microsfort認証設定のアプリケーションIDにセットします。

![](/images/docs/2022-03-11-01-54-30.png)


4.[証明書とシークレット]を選択し、クライアントシークレットを作成したら**値**を Firebase Microsfort認証設定のシークレットキーにセットします。有効期限を無期限にすることはできないので24か月等にしましょう。

![](/images/docs/2022-03-11-02-00-50.png)

5.APIのアクセスを許可>Microsoft Graphを選択し email と profile を許可します。

![](/images/docs/2022-03-11-02-01-22.png)