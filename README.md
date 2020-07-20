
# 短连接生成系统

Powered by NestJS + React

# 后端 short-url-server

## 技术栈
NestJs + TypeScript + TypeORM + Sqlite

## Run it
```
npm i
npm start
```

## Test
```
npm run test
npm run test:cov
```

# 测试覆盖率
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |   96.25 |    78.57 |     100 |   95.52 |                   
 common             |     100 |      100 |     100 |     100 |                   
  config.ts         |     100 |      100 |     100 |     100 |                   
  errorCode.ts      |     100 |      100 |     100 |     100 |                   
  stringUtil.ts     |     100 |      100 |     100 |     100 |                   
 controllers        |      96 |    83.33 |     100 |   94.74 |                   
  app.controller.ts |      96 |    83.33 |     100 |   94.74 | 16                
 entities           |     100 |      100 |     100 |     100 |                   
  url.ts            |     100 |      100 |     100 |     100 |                   
 services           |    93.1 |    66.67 |     100 |   91.67 |                   
  app.service.ts    |    93.1 |    66.67 |     100 |   91.67 | 14,32             
--------------------|---------|----------|---------|---------|-------------------

# 短连接生成机制
采用数据库sum自增的方式， 将sum总数转变为62进制的字符串

对于不超过8位的短链接，最多可以存放 62^8 ≈ 218,340,105,584,896 个链接

# 数据库
```
export class Url {
	@PrimaryColumn('varchar', { nullable: false })
    public shortUrl: string;

	@Column("text", { nullable: false})
	public longUrl: string;
}
```


# 结构框架
```
── src
│   ├── app.module.ts
│   ├── common 通用模块
│   │   ├── __tests__
│   │   │   └── stringUtil.spec.ts
│   │   ├── config.ts
│   │   ├── errorCode.ts
│   │   └── stringUtil.ts
│   ├── controllers 路由
│   │   ├── __tests__
│   │   │   └── app.controller.spec.ts
│   │   └── app.controller.ts
│   ├── entities ORM实例
│   │   └── url.ts
│   ├── index.ts
│   ├── main.ts
│   ├── middlewares
│   ├── migration
│   └── services 服务层，负责entity和controller的通信
│       ├── __tests__
│       │   └── app.service.spec.ts
│       └── app.service.ts
```


# TODO
* 在10进制到62进制的转换中， 对于32位的系统， js会出现溢出，需用BigNumber来操作
* 增加输入合法性的验证


# 前端 short-url-web

## 技术栈
React + TypeScript + Axios + AntD


# TODO
* 本来想配置less的，报错了， 先发一版再说，回头改


