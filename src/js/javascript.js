import '../css/reset.css';
import '../css/style.css';
import '../css/fonts.css';

// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// ---------- show search ----------
const btnModalShow = document.querySelectorAll('.modal-test-show');
btnModalShow.forEach(elem => {
  // console.log('modal-test-show 1');
  elem.addEventListener('click', () => {
    // console.log('modal-test-show 2');
    document.getElementById('modal__show').classList.toggle('modal-show');
    document.getElementById('mask-overlay-show').classList.toggle('mask-overlay');
    document.querySelector('body').classList.toggle('overflow-hidden');
  });
});

window.addEventListener('DOMContentLoaded', function() {
  [].forEach.call(document.querySelectorAll('#inputTel'), function(input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      const pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      const matrix = '+375 (__) ___-__-__';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      const val = this.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function(a) {
        // eslint-disable-next-line no-plusplus
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function(a) {
          return `\\d{1,${a.length}}`;
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp(`^${reg}$`);
      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58))
        this.value = newValue;
      if (event.type === 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});
