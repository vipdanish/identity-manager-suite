
FROM node:16-alpine

# Create app directory as non-root user
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

# Copy package files as non-root user
COPY --chown=node:node package*.json ./

# Switch to non-root user
USER node

# Install dependencies
RUN npm ci --only=production

# Copy app source as non-root user
COPY --chown=node:node . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

# Use healthcheck to verify the service is running correctly
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/ || exit 1

CMD ["npm", "start"]
