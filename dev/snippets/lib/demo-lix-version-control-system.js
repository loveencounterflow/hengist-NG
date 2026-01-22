(async function() {
  'use strict';
  var GUY, InMemoryEnvironment, InMemorySQLite, SDK, TextEncoder, alert, blue, bold, debug, demo, echo, gold, green, grey, help, i, info, inspect, j, json, k, len, len1, log, openLix, plain, praise, red, ref, ref1, reverse, rpr, selectWorkingDiff, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  SDK = require('@lix-js/sdk');

  ({
    plugin: json
  } = require("@lix-js/plugin-json"));

  ({openLix, InMemorySQLite, TextEncoder, selectWorkingDiff, InMemoryEnvironment} = SDK);

  debug('Ωlixvcs___1', openLix);

  ref = (Object.keys(require('@lix-js/sdk'))).sort();
  for (i = 0, len = ref.length; i < len; i++) {
    k = ref[i];
    debug('Ωlixvcs___2', k);
  }

  ref1 = (Object.keys(require('@lix-js/plugin-json'))).sort();
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    k = ref1[j];
    urge('Ωlixvcs___3', k);
  }

  debug('Ωlixvcs___4', InMemorySQLite);

  debug('Ωlixvcs___5', openLix.InMemorySQLite);

  demo = async function() {
    var cfg, diff, lix;
    cfg = {
      // environment: new openLix.InMemorySQLite()
      environment: new InMemoryEnvironment()
    };
    // providePlugins: [ json, ]
    lix = (await openLix(cfg));
    // data  = new TextEncoder().encode JSON.stringify { theme: "light" }
    // await lix.db.insertInto("file").values({ path: "/hello.txt", data, }).execute();
    diff = selectWorkingDiff({lix});
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await demo();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tbGl4LXZlcnNpb24tY29udHJvbC1zeXN0ZW0uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxtQkFBQSxFQUFBLGNBQUEsRUFBQSxHQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLGlCQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBSUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFhQSxHQUFBLEdBQTJCLE9BQUEsQ0FBUSxhQUFSOztFQUMzQixDQUFBO0lBQUUsTUFBQSxFQUFRO0VBQVYsQ0FBQSxHQUEyQixPQUFBLENBQVEscUJBQVIsQ0FBM0I7O0VBQ0EsQ0FBQSxDQUFFLE9BQUYsRUFDRSxjQURGLEVBRUUsV0FGRixFQUdFLGlCQUhGLEVBSUUsbUJBSkYsQ0FBQSxHQUkyQixHQUozQjs7RUFNQSxLQUFBLENBQU0sYUFBTixFQUFxQixPQUFyQjs7QUFDQTtFQUFBLEtBQUEscUNBQUE7O0lBQUEsS0FBQSxDQUFNLGFBQU4sRUFBcUIsQ0FBckI7RUFBQTs7QUFDQTtFQUFBLEtBQUEsd0NBQUE7O0lBQUEsSUFBQSxDQUFLLGFBQUwsRUFBb0IsQ0FBcEI7RUFBQTs7RUFDQSxLQUFBLENBQU0sYUFBTixFQUFxQixjQUFyQjs7RUFDQSxLQUFBLENBQU0sYUFBTixFQUFxQixPQUFPLENBQUMsY0FBN0I7O0VBRUEsSUFBQSxHQUFPLE1BQUEsUUFBQSxDQUFBLENBQUE7QUFDUCxRQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7SUFBRSxHQUFBLEdBRUUsQ0FBQTs7TUFBQSxXQUFBLEVBQWdCLElBQUksbUJBQUosQ0FBQTtJQUFoQixFQUZKOztJQUlFLEdBQUEsR0FBUSxDQUFBLE1BQU0sT0FBQSxDQUFRLEdBQVIsQ0FBTixFQUpWOzs7SUFPRSxJQUFBLEdBQVEsaUJBQUEsQ0FBa0IsQ0FBRSxHQUFGLENBQWxCO1dBQ1A7RUFUSSxFQXpDUDs7O0VBdURBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQTtNQUN0QyxNQUFNLElBQUEsQ0FBQTthQUNMO0lBRnFDLENBQUEsSUFBeEM7O0FBdkRBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2Ugc3RyaWN0J1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdicmljYWJyYWMtZGJyaWMnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgd2hpdGVcbiAgZ3JlZW5cbiAgYmx1ZVxuICBnb2xkXG4gIGdyZXlcbiAgcmVkXG4gIGJvbGRcbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cblxuU0RLICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnQGxpeC1qcy9zZGsnXG57IHBsdWdpbjoganNvbiwgICAgICAgIH0gPSByZXF1aXJlIFwiQGxpeC1qcy9wbHVnaW4tanNvblwiO1xueyBvcGVuTGl4LFxuICBJbk1lbW9yeVNRTGl0ZSxcbiAgVGV4dEVuY29kZXIsXG4gIHNlbGVjdFdvcmtpbmdEaWZmLFxuICBJbk1lbW9yeUVudmlyb25tZW50LCB9ID0gU0RLXG5cbmRlYnVnICfOqWxpeHZjc19fXzEnLCBvcGVuTGl4XG5kZWJ1ZyAnzqlsaXh2Y3NfX18yJywgayBmb3IgayBpbiAoIE9iamVjdC5rZXlzIHJlcXVpcmUgJ0BsaXgtanMvc2RrJyApLnNvcnQoKVxudXJnZSAnzqlsaXh2Y3NfX18zJywgayBmb3IgayBpbiAoIE9iamVjdC5rZXlzIHJlcXVpcmUgJ0BsaXgtanMvcGx1Z2luLWpzb24nICkuc29ydCgpXG5kZWJ1ZyAnzqlsaXh2Y3NfX180JywgSW5NZW1vcnlTUUxpdGVcbmRlYnVnICfOqWxpeHZjc19fXzUnLCBvcGVuTGl4LkluTWVtb3J5U1FMaXRlXG5cbmRlbW8gPSAtPlxuICBjZmcgPVxuICAgICMgZW52aXJvbm1lbnQ6IG5ldyBvcGVuTGl4LkluTWVtb3J5U1FMaXRlKClcbiAgICBlbnZpcm9ubWVudDogICAgbmV3IEluTWVtb3J5RW52aXJvbm1lbnQoKVxuICAgICMgcHJvdmlkZVBsdWdpbnM6IFsganNvbiwgXVxuICBsaXggICA9IGF3YWl0IG9wZW5MaXggY2ZnXG4gICMgZGF0YSAgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUgSlNPTi5zdHJpbmdpZnkgeyB0aGVtZTogXCJsaWdodFwiIH1cbiAgIyBhd2FpdCBsaXguZGIuaW5zZXJ0SW50byhcImZpbGVcIikudmFsdWVzKHsgcGF0aDogXCIvaGVsbG8udHh0XCIsIGRhdGEsIH0pLmV4ZWN1dGUoKTtcbiAgZGlmZiAgPSBzZWxlY3RXb3JraW5nRGlmZiB7IGxpeCB9XG4gIDtudWxsXG5cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBhd2FpdCBkZW1vKClcbiAgO251bGxcbiJdfQ==
