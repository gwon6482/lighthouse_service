var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Vue.js 빌드 폴더의 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 모든 요청을 Vue.js 앱의 index.html로 리다이렉트
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 에러 처리는 여기에 둡니다
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  // 로컬 변수 설정, 개발 환경에서만 에러 제공
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 에러 페이지 렌더링
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
