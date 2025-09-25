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

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8taW5maW5pcHJveHktYXMtaHRtbC1wcm9kdWNlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsa0JBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxLQUhGLEVBSUUsS0FKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLEdBUkYsRUFTRSxJQVRGLEVBVUUsT0FWRixFQVdFLEdBWEYsQ0FBQSxHQVc0QixHQUFHLENBQUMsR0FYaEM7O0VBWUEsQ0FBQSxDQUFFLENBQUYsQ0FBQSxHQUE0QixPQUFBLENBQVEseUJBQVIsQ0FBNUIsRUF6QkE7OztFQTJCQSxDQUFBLENBQUUsR0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSw0Q0FBUixDQUE1Qjs7RUFDQSxJ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RSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUI7SUFMc0MsQ0FBQSxJQUF4Qzs7QUE5R0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1wcm94eSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5yZXF1aXJlX2h0bWxfY2xhc3MgPSAtPlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xhc3MgSHRtbFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3RvcjogKCBuYW1lLCBhdHJzLCBjb250ZW50ICkgLT5cbiAgICAgIEBuYW1lICAgICA9IG5hbWVcbiAgICAgIEBhdHJzICAgICA9IGF0cnMgICAgPyBuZXcgTWFwKClcbiAgICAgIEBjb250ZW50ICA9IGNvbnRlbnQgPyBbXVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0b1N0cmluZzogLT5cbiAgICAgIFIgPSBbXVxuICAgICAgUi5wdXNoIFwiPCN7QG5hbWV9XCJcbiAgICAgIFIucHVzaCBcIiBBVFJzXCJcbiAgICAgIFIucHVzaCBcIj5cIlxuICAgICAgUi5wdXNoIGUgZm9yIGUgaW4gQGNvbnRlbnRcbiAgICAgIFIucHVzaCBcIjwvI3tAbmFtZX0+XCJcbiAgICAgIHJldHVybiBSLmpvaW4gJydcblxuICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gIHJldHVybiB7IEh0bWwsIH1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHRlc3RfaW5maW5pcHJveHk6IC0+XG4gICAgeyBIdG1sLCAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlX2h0bWxfY2xhc3MoKVxuICAgIHsgd2Fsa19wYXJ0cyxcbiAgICAgIGlzX3RhZ2Z1bl9jYWxsLCAgICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX3RhZ2Z1bl90b29scygpXG4gICAgeyBjcmVhdGVfaW5maW5pcHJveHksXG4gICAgICBnZXRfcHJveHksICAgICAgICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9pbmZpbmlwcm94eSgpXG4gICAgeyBlc2NhcGVfaHRtbF90ZXh0LCAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMucmVxdWlyZV9lc2NhcGVfaHRtbF90ZXh0KClcbiAgICAjIHsgYXBwZW5kLCAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnJlcXVpcmVfbGlzdF90b29scygpXG4gICAgYXNfdGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAoIHggKSAtPiBcIiN7eH1cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgaGFuZGxlciA9ICggUC4uLiApIC0+XG4gICAgICBbIG5hbWUsIGF0cnMuLi4sIF0gPSBAc3RhY2tcbiAgICAgICMgZGVidWcgJ86pZHNoX19fMScsIFsgQHN0YWNrLi4uLCBdXG4gICAgICBkZWJ1ZyAnzqlkc2hfX18yJywgeyBuYW1lLCBhdHJzLCB9XG4gICAgICBjb250ZW50ID0gWyAoIHdhbGtfcGFydHMgUC4uLiApLi4uLCBdXG4gICAgICAjIGZvciBwYXJ0IGZyb20gd2Fsa19wYXJ0cyBQLi4uXG4gICAgICAjICAgZGVidWcgJ86pZHNoX19fMycsIHBhcnRcbiAgICAgIHJldHVybiBuZXcgSHRtbCBuYW1lLCBudWxsLCBjb250ZW50XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBoYW5kbGVyLm9uX2NsaWNrID0gKCBQLi4uICkgLT5cbiAgICAgICMgaW5mbyAnzqlkc2hfX180JywgQFxuICAgICAgIyBpbmZvICfOqWRzaF9fXzUnLCBIXG4gICAgICByZXR1cm4gc3ViX3Byb3h5XG4gICAgSCAgICAgICAgID0gY3JlYXRlX2luZmluaXByb3h5IGhhbmRsZXJcbiAgICBzdWJfcHJveHkgPSBIWyBnZXRfcHJveHkgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdXJnZSAnzqlkc2hfX185JywgICAgICAgICAgbmV3IEh0bWwgJ2RpdidcbiAgICB1cmdlICfOqWRzaF9fMTAnLCAgICAgICAgICBuZXcgSHRtbCAnZGl2JywgbnVsbCwgXCJjb250ZW50XCJcbiAgICB1cmdlICfOqWRzaF9fMTEnLCBhc190ZXh0ICBuZXcgSHRtbCAnZGl2J1xuICAgIHVyZ2UgJ86pZHNoX18xMicsIGFzX3RleHQgIG5ldyBIdG1sICdkaXYnLCBudWxsLCBcImNvbnRlbnRcIlxuICAgICMgdXJnZSAnzqlkc2hfXzEzJywgICAgICAgICAgSC5kaXYuX2Nzc2NsYXNzXCI8Y29udGVudD5cIlxuICAgICMgdXJnZSAnzqlkc2hfXzE0JywgYXNfdGV4dCAgSC5kaXYuX2Nzc2NsYXNzXCI8Y29udGVudD5cIlxuICAgICMgdXJnZSAnzqlkc2hfXzE1JywgICAgICAgICAgSC5kaXYucmVkLm91dGxpbmUub25fY2xpY2snZG9pdCgpJ1xuICAgIHVyZ2UgJ86pZHNoX18xNicsICAgICAgICAgIEguZGl2LnJlZFwiPGNvbnRlbnQ+XCJcbiAgICB1cmdlICfOqWRzaF9fMTcnLCAgICAgICAgICBILmRpdi5yZWQub3V0bGluZS5vbl9jbGljaydkb2l0KCknLmV4dHJhXCI8Y29udGVudD5cIlxuICAgIGVjaG8gJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAjIHVyZ2UgJ86pZHNoX18xOCcsICAgICAgICAgIEdVWS50cm0udHJ1dGggSC5kaXYgaXMgSC5kaXYub25fY2xpY2tcbiAgICB1cmdlICfOqWRzaF9fMTknLCAgICAgICAgICBILmRpdi5vbl9jbGljaydkb2l0KCknXG4gICAgIyB1cmdlICfOqWRzaF9fMjAnLCAgICAgICAgICBHVVkudHJtLnRydXRoIEguZGl2IGlzIEguZGl2Lm9uX2NsaWNrJ2RvaXQoKSdcbiAgICAjIHVyZ2UgJ86pZHNoX18yMScsICAgICAgICAgIEguZGl2Lm9uX2NsaWNrJ2RvaXQoKScuX2Nzc2NsYXNzICMgXCI8Y29udGVudD5cIlxuICAgIHVyZ2UgJ86pZHNoX18yMicsICAgICAgICAgIEguZGl2Lm9uX2NsaWNrJ2RvaXQoKScuX2Nzc2NsYXNzXCI8Y29udGVudD5cIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICAjIGRlbW9faW5maW5pdGVfcHJveHkoKVxuICAjIGRlbW9fY29sb3JmdWxfcHJveHkoKVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG5cblxuIl19
