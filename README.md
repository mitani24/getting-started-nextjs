# getting-started-nextjs

Next.js アプリケーションを AWS のサーバーレス環境にデプロイするテスト

## Installation

```sh
# install dependencies
npm install
```

## Deployment

### Install Serverless Framework

```sh
npm install -g serverless
```

### Setup credentials

`serverless config credentials` コマンドで `~/.aws/credentials` に認証情報を保存する

```sh
serverless config credentials --provider aws --key <ACCESS_KEY> --secret <SECRET_ACCESS_KEY>
```

または環境変数を定義する

```sh
export AWS_ACCESS_KEY_ID=<ACCESS_KEY>
export AWS_SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY>
```

### Serverless!!

```sh
# deploy (serverless deploy ではない)
serverless
```

### Remove resources

```sh
serverless remove
```
