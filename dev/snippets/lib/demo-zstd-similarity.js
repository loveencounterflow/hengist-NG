(async function() {
  'use strict';
  var GUY, alert, debug, demo, echo, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-zstd-similarity'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //===========================================================================================================
  demo = function() {
    var Z, ZC, buffer/* <Buffer> Optional dictionary used to improve compression efficiency when compressing or decompressing data that shares common patterns with the dictionary. */, cfg, dictionary, engine, zstdCompressSync;
    Z = require('node:zlib');
    ({
      constants: ZC,
      zstdCompressSync
    } = Z);
    cfg = {
      flush: void 0/* <integer> Default: zlib.constants.ZSTD_e_continue */,
      finishFlush: void 0/* <integer> Default: zlib.constants.ZSTD_e_end */,
      chunkSize: void 0/* <integer> Default: 16 * 1024 */,
      params: void 0/* <Object> Key-value object containing indexed Zstd parameters. */,
      maxOutputLength: void 0/* <integer> Limits output size when using convenience methods. Default: buffer.kMaxLength */,
      info: void 0/* <boolean> If true, returns an object with buffer and engine. Default: false */,
      dictionary: void 0
    };
    ({buffer, engine} = zstdCompressSync('demo', {
      info: true
    }));
    dictionary = buffer;
    // debug 'Ωzstd___1', Object.keys engine
    debug('Ωzstd___2', buffer.toString('hex'));
    ({buffer, engine} = zstdCompressSync('demo', {
      info: true,
      dictionary
    }));
    debug('Ωzstd___2', buffer.toString('hex'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tenN0ZC1zaW1pbGFyaXR5LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFBO0FBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLHNCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFiQTs7O0VBcUJBLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtBQUNQLFFBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxNQVVnQyxpS0FWaEMsRUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtJQUFFLENBQUEsR0FBd0IsT0FBQSxDQUFRLFdBQVI7SUFDeEIsQ0FBQTtNQUFFLFNBQUEsRUFBVyxFQUFiO01BQ0U7SUFERixDQUFBLEdBQ3dCLENBRHhCO0lBRUEsR0FBQSxHQUNFO01BQUEsS0FBQSxFQUFrQixNQUFVLHVEQUE1QjtNQUNBLFdBQUEsRUFBa0IsTUFBVSxrREFENUI7TUFFQSxTQUFBLEVBQWtCLE1BQVUsa0NBRjVCO01BR0EsTUFBQSxFQUFrQixNQUFVLG1FQUg1QjtNQUlBLGVBQUEsRUFBa0IsTUFBVSw2RkFKNUI7TUFLQSxJQUFBLEVBQWtCLE1BQVUsaUZBTDVCO01BTUEsVUFBQSxFQUFrQjtJQU5sQjtJQVFGLENBQUEsQ0FBRSxNQUFGLEVBQVUsTUFBVixDQUFBLEdBQXNCLGdCQUFBLENBQWlCLE1BQWpCLEVBQXlCO01BQUUsSUFBQSxFQUFNO0lBQVIsQ0FBekIsQ0FBdEI7SUFDQSxVQUFBLEdBQWEsT0FiZjs7SUFlRSxLQUFBLENBQU0sV0FBTixFQUFtQixNQUFNLENBQUMsUUFBUCxDQUFnQixLQUFoQixDQUFuQjtJQUNBLENBQUEsQ0FBRSxNQUFGLEVBQVUsTUFBVixDQUFBLEdBQXNCLGdCQUFBLENBQWlCLE1BQWpCLEVBQXlCO01BQUUsSUFBQSxFQUFNLElBQVI7TUFBYztJQUFkLENBQXpCLENBQXRCO0lBQ0EsS0FBQSxDQUFNLFdBQU4sRUFBbUIsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsS0FBaEIsQ0FBbkI7V0FDQztFQW5CSSxFQXJCUDs7O0VBMkNBLElBQUcsTUFBQSxLQUFVLE9BQU8sQ0FBQyxJQUFyQjtJQUErQixNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQTtNQUN0QyxNQUFNLElBQUEsQ0FBQTthQUNMO0lBRnFDLENBQUEsSUFBeEM7O0FBM0NBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuJ3VzZSBzdHJpY3QnXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdkZW1vLXpzdGQtc2ltaWxhcml0eSdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZGVtbyA9IC0+XG4gIFogICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ25vZGU6emxpYidcbiAgeyBjb25zdGFudHM6IFpDLFxuICAgIHpzdGRDb21wcmVzc1N5bmMsIH0gPSBaXG4gIGNmZyA9XG4gICAgZmx1c2g6ICAgICAgICAgICAgdW5kZWZpbmVkICMjIyA8aW50ZWdlcj4gRGVmYXVsdDogemxpYi5jb25zdGFudHMuWlNURF9lX2NvbnRpbnVlICMjI1xuICAgIGZpbmlzaEZsdXNoOiAgICAgIHVuZGVmaW5lZCAjIyMgPGludGVnZXI+IERlZmF1bHQ6IHpsaWIuY29uc3RhbnRzLlpTVERfZV9lbmQgIyMjXG4gICAgY2h1bmtTaXplOiAgICAgICAgdW5kZWZpbmVkICMjIyA8aW50ZWdlcj4gRGVmYXVsdDogMTYgKiAxMDI0ICMjI1xuICAgIHBhcmFtczogICAgICAgICAgIHVuZGVmaW5lZCAjIyMgPE9iamVjdD4gS2V5LXZhbHVlIG9iamVjdCBjb250YWluaW5nIGluZGV4ZWQgWnN0ZCBwYXJhbWV0ZXJzLiAjIyNcbiAgICBtYXhPdXRwdXRMZW5ndGg6ICB1bmRlZmluZWQgIyMjIDxpbnRlZ2VyPiBMaW1pdHMgb3V0cHV0IHNpemUgd2hlbiB1c2luZyBjb252ZW5pZW5jZSBtZXRob2RzLiBEZWZhdWx0OiBidWZmZXIua01heExlbmd0aCAjIyNcbiAgICBpbmZvOiAgICAgICAgICAgICB1bmRlZmluZWQgIyMjIDxib29sZWFuPiBJZiB0cnVlLCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGJ1ZmZlciBhbmQgZW5naW5lLiBEZWZhdWx0OiBmYWxzZSAjIyNcbiAgICBkaWN0aW9uYXJ5OiAgICAgICB1bmRlZmluZWQgIyMjIDxCdWZmZXI+IE9wdGlvbmFsIGRpY3Rpb25hcnkgdXNlZCB0byBpbXByb3ZlIGNvbXByZXNzaW9uIGVmZmljaWVuY3kgd2hlbiBjb21wcmVzc2luZyBvciBkZWNvbXByZXNzaW5nIGRhdGEgdGhhdCBzaGFyZXMgY29tbW9uIHBhdHRlcm5zIHdpdGggdGhlIGRpY3Rpb25hcnkuICMjI1xuXG4gIHsgYnVmZmVyLCBlbmdpbmUsIH0gPSB6c3RkQ29tcHJlc3NTeW5jICdkZW1vJywgeyBpbmZvOiB0cnVlLCB9XG4gIGRpY3Rpb25hcnkgPSBidWZmZXJcbiAgIyBkZWJ1ZyAnzql6c3RkX19fMScsIE9iamVjdC5rZXlzIGVuZ2luZVxuICBkZWJ1ZyAnzql6c3RkX19fMicsIGJ1ZmZlci50b1N0cmluZyAnaGV4J1xuICB7IGJ1ZmZlciwgZW5naW5lLCB9ID0genN0ZENvbXByZXNzU3luYyAnZGVtbycsIHsgaW5mbzogdHJ1ZSwgZGljdGlvbmFyeSwgfVxuICBkZWJ1ZyAnzql6c3RkX19fMicsIGJ1ZmZlci50b1N0cmluZyAnaGV4J1xuICA7bnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBhd2FpdCBkZW1vKClcbiAgO251bGwiXX0=
