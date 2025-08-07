(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_html_class, reverse, rpr, tests, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-proxy'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

  //===========================================================================================================
  require_html_class = function() {
    var Html;
    //---------------------------------------------------------------------------------------------------------
    Html = class Html {
      //-------------------------------------------------------------------------------------------------------
      constructor(name, atrs, content) {
        this.name = name;
        this.atrs = atrs != null ? atrs : new Map();
        this.content = content != null ? content : [];
        return void 0;
      }

      //-------------------------------------------------------------------------------------------------------
      toString() {
        var R, e, i, len, ref;
        R = [];
        R.push(`<${this.name}`);
        R.push(" ATRs");
        R.push(">");
        ref = this.content;
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          R.push(e);
        }
        R.push(`</${this.name}>`);
        return R.join('');
      }

    };
    //.........................................................................................................
    return {Html};
  };

  //===========================================================================================================
  tests = {
    //---------------------------------------------------------------------------------------------------------
    test_infiniproxy: function() {
      var H, Html, as_text, create_infiniproxy, escape_html_text, get_proxy, handler, is_tagfun_call, sub_proxy, walk_parts;
      ({Html} = require_html_class());
      ({walk_parts, is_tagfun_call} = SFMODULES.require_tagfun_tools());
      ({create_infiniproxy, get_proxy} = SFMODULES.require_infiniproxy());
      ({escape_html_text} = SFMODULES.require_escape_html_text());
      // { append,                         } = SFMODULES.require_list_tools()
      as_text = function(x) {
        return `${x}`;
      };
      //.......................................................................................................
      handler = function(...P) {
        var atrs, content, name;
        [name, ...atrs] = this.stack;
        // debug 'Ωdsh___1', [ @stack..., ]
        debug('Ωdsh___2', {name, atrs});
        content = [...(walk_parts(...P))];
        // for part from walk_parts P...
        //   debug 'Ωdsh___3', part
        return new Html(name, null, content);
      };
      //.......................................................................................................
      handler.on_click = function(...P) {
        // info 'Ωdsh___4', @
        // info 'Ωdsh___5', H
        return sub_proxy;
      };
      H = create_infiniproxy(handler);
      sub_proxy = H[get_proxy];
      //.......................................................................................................
      urge('Ωdsh___9', new Html('div'));
      urge('Ωdsh__10', new Html('div', null, "content"));
      urge('Ωdsh__11', as_text(new Html('div')));
      urge('Ωdsh__12', as_text(new Html('div', null, "content")));
      // urge 'Ωdsh__13',          H.div._cssclass"<content>"
      // urge 'Ωdsh__14', as_text  H.div._cssclass"<content>"
      // urge 'Ωdsh__15',          H.div.red.outline.on_click'doit()'
      urge('Ωdsh__16', H.div.red`<content>`);
      urge('Ωdsh__17', H.div.red.outline.on_click`doit()`.extra`<content>`);
      echo('——————————————————————————————————————————————————————————————————————————————');
      // urge 'Ωdsh__18',          GUY.trm.truth H.div is H.div.on_click
      urge('Ωdsh__19', H.div.on_click`doit()`);
      // urge 'Ωdsh__20',          GUY.trm.truth H.div is H.div.on_click'doit()'
      // urge 'Ωdsh__21',          H.div.on_click'doit()'._cssclass # "<content>"
      urge('Ωdsh__22', H.div.on_click`doit()`._cssclass`<content>`);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test({tests});
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8taW5maW5pcHJveHktYXMtaHRtbC1wcm9kdWNlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsa0JBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJ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RSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUE5R0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1wcm94eSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxucmVxdWlyZV9odG1sX2NsYXNzID0gLT5cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsYXNzIEh0bWxcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3I6ICggbmFtZSwgYXRycywgY29udGVudCApIC0+XG4gICAgICBAbmFtZSAgICAgPSBuYW1lXG4gICAgICBAYXRycyAgICAgPSBhdHJzICAgID8gbmV3IE1hcCgpXG4gICAgICBAY29udGVudCAgPSBjb250ZW50ID8gW11cbiAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdG9TdHJpbmc6IC0+XG4gICAgICBSID0gW11cbiAgICAgIFIucHVzaCBcIjwje0BuYW1lfVwiXG4gICAgICBSLnB1c2ggXCIgQVRSc1wiXG4gICAgICBSLnB1c2ggXCI+XCJcbiAgICAgIFIucHVzaCBlIGZvciBlIGluIEBjb250ZW50XG4gICAgICBSLnB1c2ggXCI8LyN7QG5hbWV9PlwiXG4gICAgICByZXR1cm4gUi5qb2luICcnXG5cbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4geyBIdG1sLCB9XG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG50ZXN0cyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0ZXN0X2luZmluaXByb3h5OiAtPlxuICAgIHsgSHRtbCwgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZV9odG1sX2NsYXNzKClcbiAgICB7IHdhbGtfcGFydHMsXG4gICAgICBpc190YWdmdW5fY2FsbCwgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV90YWdmdW5fdG9vbHMoKVxuICAgIHsgY3JlYXRlX2luZmluaXByb3h5LFxuICAgICAgZ2V0X3Byb3h5LCAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfaW5maW5pcHJveHkoKVxuICAgIHsgZXNjYXBlX2h0bWxfdGV4dCwgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfZXNjYXBlX2h0bWxfdGV4dCgpXG4gICAgIyB7IGFwcGVuZCwgICAgICAgICAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2xpc3RfdG9vbHMoKVxuICAgIGFzX3RleHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gKCB4ICkgLT4gXCIje3h9XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGhhbmRsZXIgPSAoIFAuLi4gKSAtPlxuICAgICAgWyBuYW1lLCBhdHJzLi4uLCBdID0gQHN0YWNrXG4gICAgICAjIGRlYnVnICfOqWRzaF9fXzEnLCBbIEBzdGFjay4uLiwgXVxuICAgICAgZGVidWcgJ86pZHNoX19fMicsIHsgbmFtZSwgYXRycywgfVxuICAgICAgY29udGVudCA9IFsgKCB3YWxrX3BhcnRzIFAuLi4gKS4uLiwgXVxuICAgICAgIyBmb3IgcGFydCBmcm9tIHdhbGtfcGFydHMgUC4uLlxuICAgICAgIyAgIGRlYnVnICfOqWRzaF9fXzMnLCBwYXJ0XG4gICAgICByZXR1cm4gbmV3IEh0bWwgbmFtZSwgbnVsbCwgY29udGVudFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaGFuZGxlci5vbl9jbGljayA9ICggUC4uLiApIC0+XG4gICAgICAjIGluZm8gJ86pZHNoX19fNCcsIEBcbiAgICAgICMgaW5mbyAnzqlkc2hfX181JywgSFxuICAgICAgcmV0dXJuIHN1Yl9wcm94eVxuICAgIEggICAgICAgICA9IGNyZWF0ZV9pbmZpbmlwcm94eSBoYW5kbGVyXG4gICAgc3ViX3Byb3h5ID0gSFsgZ2V0X3Byb3h5IF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHVyZ2UgJ86pZHNoX19fOScsICAgICAgICAgIG5ldyBIdG1sICdkaXYnXG4gICAgdXJnZSAnzqlkc2hfXzEwJywgICAgICAgICAgbmV3IEh0bWwgJ2RpdicsIG51bGwsIFwiY29udGVudFwiXG4gICAgdXJnZSAnzqlkc2hfXzExJywgYXNfdGV4dCAgbmV3IEh0bWwgJ2RpdidcbiAgICB1cmdlICfOqWRzaF9fMTInLCBhc190ZXh0ICBuZXcgSHRtbCAnZGl2JywgbnVsbCwgXCJjb250ZW50XCJcbiAgICAjIHVyZ2UgJ86pZHNoX18xMycsICAgICAgICAgIEguZGl2Ll9jc3NjbGFzc1wiPGNvbnRlbnQ+XCJcbiAgICAjIHVyZ2UgJ86pZHNoX18xNCcsIGFzX3RleHQgIEguZGl2Ll9jc3NjbGFzc1wiPGNvbnRlbnQ+XCJcbiAgICAjIHVyZ2UgJ86pZHNoX18xNScsICAgICAgICAgIEguZGl2LnJlZC5vdXRsaW5lLm9uX2NsaWNrJ2RvaXQoKSdcbiAgICB1cmdlICfOqWRzaF9fMTYnLCAgICAgICAgICBILmRpdi5yZWRcIjxjb250ZW50PlwiXG4gICAgdXJnZSAnzqlkc2hfXzE3JywgICAgICAgICAgSC5kaXYucmVkLm91dGxpbmUub25fY2xpY2snZG9pdCgpJy5leHRyYVwiPGNvbnRlbnQ+XCJcbiAgICBlY2hvICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgIyB1cmdlICfOqWRzaF9fMTgnLCAgICAgICAgICBHVVkudHJtLnRydXRoIEguZGl2IGlzIEguZGl2Lm9uX2NsaWNrXG4gICAgdXJnZSAnzqlkc2hfXzE5JywgICAgICAgICAgSC5kaXYub25fY2xpY2snZG9pdCgpJ1xuICAgICMgdXJnZSAnzqlkc2hfXzIwJywgICAgICAgICAgR1VZLnRybS50cnV0aCBILmRpdiBpcyBILmRpdi5vbl9jbGljaydkb2l0KCknXG4gICAgIyB1cmdlICfOqWRzaF9fMjEnLCAgICAgICAgICBILmRpdi5vbl9jbGljaydkb2l0KCknLl9jc3NjbGFzcyAjIFwiPGNvbnRlbnQ+XCJcbiAgICB1cmdlICfOqWRzaF9fMjInLCAgICAgICAgICBILmRpdi5vbl9jbGljaydkb2l0KCknLl9jc3NjbGFzc1wiPGNvbnRlbnQ+XCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgIyBkZW1vX2luZmluaXRlX3Byb3h5KClcbiAgIyBkZW1vX2NvbG9yZnVsX3Byb3h5KClcbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0ZXN0cywgfVxuXG5cbiJdfQ==
//# sourceURL=../src/demo-infiniproxy-as-html-producer.coffee