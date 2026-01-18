# -------- Build Stage --------
FROM node:25-alpine3.22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# -------- Runtime Stage --------
FROM node:25-alpine3.22
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["node", "index.js"]


