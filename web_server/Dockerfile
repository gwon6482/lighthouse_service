# Node.js 이미지를 기반으로 합니다
FROM node:lts

# 작업 디렉토리를 설정합니다
WORKDIR /usr/src/app

# package.json과 package-lock.json을 복사합니다
COPY package*.json ./

# 의존성을 설치합니다
RUN npm install

# 소스 코드를 복사합니다
COPY . .

# 애플리케이션이 3000번 포트를 사용한다고 알립니다
EXPOSE 3000

# 애플리케이션을 실행합니다
CMD [ "npm", "start" ]
