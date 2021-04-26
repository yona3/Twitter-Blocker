const result = window.confirm('Twitterみるの？？？？');
const targetUrl = 'https://webclass.cc.u-ryukyu.ac.jp';

if (result) {
  window.alert('ダメです。');
  window.location.href = targetUrl;
} else {
  window.alert('えらいね!');
  window.location.href = targetUrl;
}
