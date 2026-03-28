# 🚀 API - NestJS + GraphQL + Prisma + JWT

API construída com **NestJS**, usando **GraphQL**, **Prisma** e autenticação com **JWT**.

---

## 📦 Tecnologias

* NestJS
* GraphQL
* Prisma ORM
* JWT (autenticação)
* TypeScript
* Docker 🐳

---

# 🐳 🚀 Rodando com Docker (RECOMENDADO)

## ✅ Pré-requisitos

* Docker instalado
* Docker Desktop em execução

---

## ▶️ 1. Subir aplicação

```bash
docker compose up --build
```

---

## 🧠 2. Rodar Prisma (IMPORTANTE)

Abra outro terminal e rode:

```bash
docker exec -it backend_app npx prisma db push
```

> ⚠️ Esse passo é necessário na primeira execução ou quando houver mudanças no schema do Prisma

---

## 🌐 3. Acessar API

```
http://localhost:3001/graphql
```

---

## ⚠️ Sobre as portas

* O backend roda na porta **3000 dentro do container**
* O Docker expõe na porta **3001 no seu computador**

---

# 💻 ⚙️ Rodando local (sem Docker)

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

# build
npm run build

# produção
npm run start:prod
```

---

# ⚠️ Observações importantes

* O banco de dados é iniciado automaticamente via Docker
* Sempre rode o Prisma após subir os containers (na primeira vez)
* Certifique-se de que o Docker Desktop está em execução
* A API ficará disponível em:

```
http://localhost:3001/graphql
```

---

# 🚀 Pronto!

Agora você pode rodar o projeto de duas formas:

## 🐳 Docker (recomendado)

```bash
docker compose up --build
```

## 💻 Local

```bash
npm install
npm run start:dev
```
