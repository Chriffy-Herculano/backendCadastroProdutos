# 🚀 API - NestJS + GraphQL + Prisma + JWT

API construída com **NestJS**, usando **GraphQL**, **Prisma** e autenticação com **JWT**.

---

## 📦 Tecnologias

* NestJS
* GraphQL
* Prisma ORM
* JWT (autenticação)
* TypeScript

---

## ⚙️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Rodar o projeto em desenvolvimento

```bash
npm run start:dev
```

A API vai iniciar normalmente em:

```
http://localhost:3001
```

---

## 🧪 GraphQL Playground

Depois de rodar o projeto, acesse:

```
http://localhost:3001/graphql
```

Lá você pode testar queries e mutations.

---

## 🗄️ Banco de dados (Prisma)

### Rodar migrations

```bash
npx prisma migrate dev
```

### Gerar o client do Prisma

```bash
npx prisma generate
```

---

## 🔐 Autenticação

A API usa JWT.

Fluxo básico:

1. Criar usuário
2. Fazer login
3. Receber token JWT
4. Enviar token no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📜 Scripts disponíveis

```bash
# desenvolvimento
npm run start:dev
