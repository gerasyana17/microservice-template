FROM node:alpine

USER root 

WORKDIR /app

COPY * ./

RUN npm install
RUN npm run build 

COPY dist ./app

ENV PORT=3000
ENV API_PATH=/api/user

EXPOSE ${ENV}
CMD ["npm" , "run", "start"]
