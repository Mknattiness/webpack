const querySelector = require('./foo')

querySelector('btn_add').onclick = function () {
  querySelector('result').innerText = querySelector('txt1').value + querySelector('txt2').value
}
