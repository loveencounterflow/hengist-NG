(function() {
  'use strict';
  var GUY, alert, debug, echo, f, f152f, f15s, fmt, format, help, info, injectFormatToString, inspect, log, new_formatter, plain, praise, require_myfstring, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //###########################################################################################################
  //###########################################################################################################
  //###########################################################################################################
  require_myfstring = function() {
    
  "use strict";
  // Object.defineProperty(exports, "__esModule", { value: true });
  // exports.injectFormatToString = exports.format = exports.formatByParam = void 0;

  function toNonExponential(num) {
      var m = parseFloat(num).toExponential().toString().match(/\d(?:\.(\d*))?e([+-]\d+)/);
      var fractionDigits = 0;
      if (m !== null) {
          if (m[1] === undefined) {
              m[1] = '';
          }
          var tmp = m[1].length - parseInt(m[2]);
          if (tmp > 0) {
              fractionDigits = tmp;
          }
      }
      return parseFloat(num).toFixed(fractionDigits);
  }
  function divideBySign(num, sign) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g;
      var tmpArr = num.split('.');
      var after = '';
      if (tmpArr.length > 1) {
          after = '.' + tmpArr[1];
      }
      return tmpArr[0].replace(reg, '$&' + sign) + after;
  }
  function formatByParam(raw, formatString) {
      var result = '';
      var formatStringBackup = '';
      if ((!/[s]{1}$/.test(formatString) && parseInt(raw) === NaN) || formatString.search(/^:/) === -1 || formatString === ':') {
          result = raw;
          return result;
      }
      formatStringBackup = formatString;
      formatString = formatString.split(':')[1];
      var textAlign = '';
      var fillChar = '';
      var tmp = /[\^<>]{1}/.exec(formatString);
      if (tmp !== null) {
          var tmp_str_arr = formatString.split(/[\^<>]{1}/);
          fillChar = tmp_str_arr[0];
          formatString = tmp_str_arr[1];
          if (fillChar.length != 1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) - 1) + "^";
              throw new SyntaxError('Bad format input:fillChar must one char of string.\n' + erroInfo);
          }
          switch (tmp[0]) {
              case '^':
                  textAlign = 'center';
                  break;
              case '<':
                  textAlign = 'left';
                  break;
              case '>':
                  textAlign = 'right';
                  break;
              default:
                  textAlign = '';
          }
      }
      var sign = '';
      tmp = /^[\+\- ]{1}/.exec(formatString);
      if (tmp !== null) {
          switch (tmp[0]) {
              case '+':
                  sign = '+';
                  break;
              case '-':
                  sign = '';
                  break;
              case ' ':
                  sign = ' ';
                  break;
              default:
                  sign = '';
          }
          formatString = formatString.slice(1);
          if (formatString.search(/[\+\- ]{1}/) !== -1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
              throw new SyntaxError('Bad format input:Multiple sign.\n' + erroInfo);
          }
      }
      var isHash = false;
      if (/^#{1}/.test(formatString)) {
          isHash = true;
          formatString = formatString.slice(1);
          if (formatString.search('#') !== -1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
              throw new SyntaxError('Bad format input:Multiple hash.\n' + erroInfo);
          }
      }
      var isFillZero = false;
      if (/^0{1}/.test(formatString)) {
          isFillZero = true;
          formatString = formatString.slice(1);
          if (formatString.search(/^0+/) !== -1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
              throw new SyntaxError('Bad format input:Multiple before fill zero.\n' + erroInfo);
          }
      }
      var width = 0;
      tmp = /^(\d*)/.exec(formatString);
      if (tmp !== null) {
          width = parseInt(tmp[0]);
      }
      formatString = formatString.replace(/^(\d*)/, '');
      var separation = '';
      tmp = /^[,_]{1}/.exec(formatString);
      if (tmp !== null) {
          switch (tmp[0]) {
              case ',':
                  separation = ',';
                  break;
              case '_':
                  separation = '_';
          }
          formatString = formatString.slice(1);
          if (formatString.search(/[,_]{1}/) !== -1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
              throw new SyntaxError('Bad format input:Multiple separation sign.\n' + erroInfo);
          }
      }
      var decimalWidth = 6;
      tmp = /(?<=^\.)(\d+)/.exec(formatString);
      if (tmp !== null) {
          decimalWidth = parseInt(tmp[0]);
          formatString = formatString.replace(/^\.+\d+/, '');
          if (formatString.search(/^\.{1}/) !== -1) {
              var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
              throw new SyntaxError('Bad format input:Multiple decimal point.\n' + erroInfo);
          }
      }
      var format = 's';
      if (/^[bdoxfegs%]{1}$/i.exec(formatString) !== null) {
          format = formatString;
      }
      else {
          var erroInfo = "Error point at:\n[" + formatStringBackup + "]\n" + ' '.repeat(formatStringBackup.search(formatString) + 1) + "^";
          throw new SyntaxError('Bad format input:Formatting flag is not in [[bdoxfgs%]].\n' + erroInfo);
      }
      if (textAlign === '') {
          if (/[sS]/.test(format)) {
              textAlign = 'left';
          }
          else if (/[bdoxfg%]/i.test(format))
              (textAlign = 'right');
      }
      var offset = 0;
      var fillset = 0;
      decimalWidth = decimalWidth > width ? width : decimalWidth;
      if (/[sS]/.test(format)) {
          raw = raw.slice(0, decimalWidth);
      }
      else if (/[fg%]/i.test(format)) {
          raw = raw.replace(/[^\+\-\.0-9eEoObBdDxXn]/g, '');
          if (/e{1}/i.test(raw)) {
              raw = toNonExponential(raw);
          }
          if (format === 'g' || format === 'G') {
              raw = parseFloat(raw).toPrecision(decimalWidth).toString();
          }
          else if (format === 'f' || format === 'F') {
              raw = parseFloat(raw).toFixed(decimalWidth).toString();
          }
          else if (format === '%') {
              raw = (parseFloat(raw) * 100).toFixed(decimalWidth).toString() + '%';
          }
          if (format !== '%') {
              raw = divideBySign(raw, separation);
          }
          if (!/^[-]{1}/.test(raw)) {
              raw = sign + raw;
          }
          if (isFillZero && fillChar === "") {
              raw = raw.replace(/^[\-\+ ]?/, '$&' + '0'.repeat(width - raw.length));
          }
      }
      else if (/[eE]/i.test(format)) {
          raw = parseFloat(raw).toExponential(decimalWidth).toString();
          raw = sign + raw;
          if (isFillZero && fillChar === "") {
              raw = raw.replace(/^[\-\+ ]?/, '$&' + '0'.repeat(width - raw.length));
          }
      }
      else if (/[bdox]/i.test(format)) {
          var radix = 10;
          var symbol = '';
          switch (format.toLowerCase()) {
              case 'b':
                  radix = 2;
                  symbol = '0b';
                  break;
              case 'o':
                  radix = 8;
                  symbol = '0o';
                  break;
              case 'x':
                  radix = 16;
                  symbol = '0x';
                  break;
              case 'd':
                  radix = 10;
                  break;
              default:
                  radix = 10;
          }
          decimalWidth = 0;
          raw = parseInt(raw).toString(radix);
          if (isHash) {
              if (/[OXB]{1}/.test(format)) {
                  symbol = symbol.toUpperCase();
              }
              raw = raw.replace(/^[\-\+]?/, '$&' + symbol);
          }
          if (!/^[-]{1}/.test(raw)) {
              raw = sign + raw;
          }
          if (isFillZero && fillChar === "") {
              raw = raw.replace(/^[\-\+]?(?:0[oxb]{1})?/i, '$&' + '0'.repeat(width - raw.length));
          }
      }
      if (width > raw.length) {
          switch (textAlign) {
              case 'left':
                  offset = 0;
                  fillset = width - raw.length;
                  break;
              case 'right':
                  offset = width - raw.length;
                  fillset = 0;
                  break;
              case 'center':
                  offset = Math.trunc((width - raw.length) / 2);
                  fillset = width - raw.length - offset;
          }
      }
      if (fillChar === '') {
          fillChar = ' ';
      }
      result = fillChar.repeat(offset) + raw + fillChar.repeat(fillset);
      return result;
  }
  exports.formatByParam = formatByParam;
  function format(param) {
      var paramsIsFormat = false;
      var formatString = '';
      var raw = "";
      if (/^:.*[bdoxfgse%]{1}$/i.test(param)) {
          paramsIsFormat = true;
      }
      if (!paramsIsFormat && !/^:.*[bdoxfgse%]{1}$/i.test(this)) {
          throw new SyntaxError('Bad format input:least one of this string and parameter is a format style string.');
      }
      if (paramsIsFormat) {
          formatString = param;
          raw = this;
      }
      else {
          formatString = this;
          raw = param;
      }
      return formatByParam(raw, formatString);
  }
  // exports.format = format;
  // function injectFormatToString() {
  //     String.prototype.format = format;
  // }
  // exports.injectFormatToString = injectFormatToString;
  //# sourceMappingURL=FStringFormat.js.map
  ;
    return (() => {      //=========================================================================================================
      var format, new_formatter;
      //-------------------------------------------------------------------------------------------------------
      format = function(fmt, x) {
        if ((typeof x) !== 'string') {
          x = rpr(x);
        }
        return formatByParam(x, fmt);
      };
      //-------------------------------------------------------------------------------------------------------
      new_formatter = function(fmt) {
        return function(x) {
          return format(fmt, x);
        };
      };
      //-------------------------------------------------------------------------------------------------------
      return {format, new_formatter};
    })();
  };

  //###########################################################################################################
  //###########################################################################################################
  //###########################################################################################################

    //-----------------------------------------------------------------------------------------------------------
  ({f, injectFormatToString} = require('fstring'));

  // debug 'Ω___1', ( require 'fstring' ).formatByParam
  debug('Ω___2', f);

  debug('Ω___3', injectFormatToString);

  debug('Ω___4', injectFormatToString());

  // import { injectFormatToString,f} from 'fstring'
  // injectFormatToString()
  // 格式化字符串 风格一:

  // fmt = ':_>+20,.5g'
  fmt = ': > 15,.2f';

  help('Ω___5', fmt.format('1'));

  help('Ω___6', fmt.format('12'));

  help('Ω___7', fmt.format('123'));

  help('Ω___8', fmt.format('1234'));

  help('Ω___9', fmt.format('-11456.15454'));

  help('Ω__10', fmt.format('53443.32455'));

  help('Ω__11', fmt.format('885673.367553'));

  fmt = ': > 15s';

  help('Ω__12', fmt.format('helo'));

  info('Ω__13', '11456.15454'.format(':*<+20,.5g'));

  info('Ω__14', ':*<+20,.5g'.format('11456.15454'));

  ({format, new_formatter} = require_myfstring());

  urge('Ω__15', format(':*<+20,.5g', '11456.15454'));

  urge('Ω__16', format(':*<+20,.5g', 11456.15454));

  // urge 'Ω__17', format ':*=+20,.5g', 11456.15454
  f152f = new_formatter(': > 15,.2f');

  help('Ω__18', f152f(1));

  help('Ω__19', f152f(12));

  help('Ω__20', f152f(123));

  help('Ω__21', f152f(1234));

  help('Ω__22', f152f(-11456.15454));

  help('Ω__23', f152f(53443.32455));

  help('Ω__24', f152f(885673.367553));

  f15s = new_formatter(': > 15s');

  help('Ω__25', f15s('helo'));

}).call(this);

//# sourceMappingURL=demo-fstrings-ported.js.map