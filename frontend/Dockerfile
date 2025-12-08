# Stage 1: Build the Next.js application
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files first for caching layers
COPY package.json package-lock.json ./
RUN npm install

# --- NEW: Accept the API URL from docker-compose ---
ARG NEXT_PUBLIC_API_URL
# --- NEW: Set it as an environment variable for the build ---
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Production runtime image
FROM node:20-slim AS runner

WORKDIR /app
# Set environment variables for Next.js to run in production mode
ENV NODE_ENV production
ENV PORT 3000

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]