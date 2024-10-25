# Node.js 공식 이미지를 기반으로 합니다
FROM node:lts

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# package.json과 package-lock.json을 모두 복사합니다
COPY package*.json ./

RUN npm install

# 앱 소스 복사
COPY . .

# .env 파일이 없으면 .env.example을 .env로 복사합니다
COPY .env.example .env

# 앱이 3000번 포트를 사용한다고 가정합니다
EXPOSE 3000

# 앱 실행
CMD [ "npm", "start" ]