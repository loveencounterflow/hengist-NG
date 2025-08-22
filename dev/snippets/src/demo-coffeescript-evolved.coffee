

'use strict'

GUY                       = require 'guy'
{ alert
  debug
  help
  info
  plain
  praise
  urge
  warn
  whisper }               = GUY.trm.get_loggers 'intertype/test-basics'
{ rpr
  inspect
  echo
  white
  red
  gold
  blue
  bold
  reverse
  log     }               = GUY.trm
{ f }                     = require '../../../apps/effstring'
CS                        = require '../../../apps/coffeescript'


#===========================================================================================================
demo_parse = ->
  debug 'Ωcs___1', ( k for k of CS.helpers )
  help 'Ωcs___2', 'VERSION                          ',  CS.VERSION
  help 'Ωcs___3', 'FILE_EXTENSIONS                  ',  CS.FILE_EXTENSIONS
  help 'Ωcs___4', 'helpers                          ',  'helpers:'
  info 'Ωcs___5', '   starts                          ', CS.helpers.starts
  info 'Ωcs___6', '   ends                            ', CS.helpers.ends
  info 'Ωcs___7', '   repeat                          ', CS.helpers.repeat
  info 'Ωcs___8', '   compact                         ', CS.helpers.compact
  info 'Ωcs___9', '   count                           ', CS.helpers.count
  info 'Ωcs__10', '   merge                           ', CS.helpers.merge
  info 'Ωcs__11', '   extend                          ', CS.helpers.extend
  info 'Ωcs__12', '   flatten                         ', CS.helpers.flatten
  info 'Ωcs__13', '   del                             ', CS.helpers.del
  info 'Ωcs__14', '   some                            ', CS.helpers.some
  info 'Ωcs__15', '   invertLiterate                  ', CS.helpers.invertLiterate
  info 'Ωcs__16', '   extractAllCommentTokens         ', CS.helpers.extractAllCommentTokens
  info 'Ωcs__17', '   buildTokenDataDictionary        ', CS.helpers.buildTokenDataDictionary
  info 'Ωcs__18', '   addDataToNode                   ', CS.helpers.addDataToNode
  info 'Ωcs__19', '   attachCommentsToNode            ', CS.helpers.attachCommentsToNode
  info 'Ωcs__20', '   locationDataToString            ', CS.helpers.locationDataToString
  info 'Ωcs__21', '   anonymousFileName               ', CS.helpers.anonymousFileName
  info 'Ωcs__22', '   baseFileName                    ', CS.helpers.baseFileName
  info 'Ωcs__23', '   isCoffee                        ', CS.helpers.isCoffee
  info 'Ωcs__24', '   isLiterate                      ', CS.helpers.isLiterate
  info 'Ωcs__25', '   throwSyntaxError                ', CS.helpers.throwSyntaxError
  info 'Ωcs__26', '   updateSyntaxError               ', CS.helpers.updateSyntaxError
  info 'Ωcs__27', '   nameWhitespaceCharacter         ', CS.helpers.nameWhitespaceCharacter
  info 'Ωcs__28', '   parseNumber                     ', CS.helpers.parseNumber
  info 'Ωcs__29', '   isFunction                      ', CS.helpers.isFunction
  info 'Ωcs__30', '   isNumber                        ', CS.helpers.isNumber
  info 'Ωcs__31', '   isString                        ', CS.helpers.isString
  info 'Ωcs__32', '   isBoolean                       ', CS.helpers.isBoolean
  info 'Ωcs__33', '   isPlainObject                   ', CS.helpers.isPlainObject
  info 'Ωcs__34', '   replaceUnicodeCodePointEscapes  ', CS.helpers.replaceUnicodeCodePointEscapes
  help 'Ωcs__35', 'registerCompiled                 ',  CS.registerCompiled
  help 'Ωcs__36', 'compile                          ',  CS.compile
  help 'Ωcs__37', 'tokens                           ',  CS.tokens
  help 'Ωcs__38', 'nodes                            ',  CS.nodes
  help 'Ωcs__39', 'register                         ',  CS.register
  help 'Ωcs__40', 'eval                             ',  CS.eval
  help 'Ωcs__41', 'run                              ',  CS.run
  help 'Ωcs__42', 'patchStackTrace                  ',  CS.patchStackTrace
  help 'Ωcs__43', 'transpile                        ',  CS.transpile
  help 'Ωcs__44', '_compileRawFileContent           ',  CS._compileRawFileContent
  help 'Ωcs__45', '_compileFile                     ',  CS._compileFile
  #.........................................................................................................
  source = "d = t + 1 ==§equals§== 9 ** 5"
  # source = "d = t + 1 ~equals 9 ** 5"
  urge 'Ωcs__46', CS.compile source, { bare: true, }, ({ tokens, nodes, }={}) ->
    # if tokens?
    #   for token in tokens
    #     info 'Ωcs__47', token
    if nodes?
      console.log 'Ωcs__48', ( require 'util' ).inspect nodes, false, Infinity, true
    return null
  #.........................................................................................................
  f = ->
    #
    # * run regex on coffee-evolved source, recognize /\b~$JSID\b/,
    #
    # * replace with `==§$JSID§==`
    #
    # * write .coffee, transpile
    #
    # * in JS, this results in parenthesized expression with `=== §$JSID§ && §$JSID§ ===`
    #
    # * find leading paren, substitute $JSID in front of left paren, replace
    #   `=== §$JSID§ && §$JSID§ ===` with comma `,`
    #
    # * OBS: some characters like U+0084 Acute Accent `´`, U+00a7 Section Sign `§` are accepted as parts of
    #   identifiers *by the CoffeeScript compiler*, but **not** by JS, so can safely assume no overlap with
    #   intentional use of such characters is possible
    #
    # * a clean solution will still have to tokenize to recognize comments, string literals, regex literals
    #
    ###
    debug 'Ωcs__49', ( f 1, 2 ) ~equals c
    debug 'Ωcs__50',   f 1, 2   ==§equals§== c    # f(1, (2 === §equals§ && §equals§ === c));
    debug 'Ωcs__51', f 1, ( 2   ==§equals§== c )  # f(1, (2 === §equals§ && §equals§ === c));
    debug 'Ωcs__52', f 1, ( ( c * ( 3 + d - ( g %% 4 ) ) ) ==§equals§== c )  # f(1, ((c * (3 + d - (modulo(g, 4)))) === §equals§ && §equals§ === c));
    debug 'Ωcs__53', ( f 1, 2 ) ==§equals§== c    # ((f(1, 2)) === §equals§ && §equals§ === c);
    debug 'Ωcs__54',  "A#{2   ==§equals§== c}Z"
    a ==§equals§== b                    # Ωcs__55
    if a ==§equals§== b then chucks     # Ωcs__56
    ```if ((a === §equals§ && §equals§ === b)) { chucks; }``` # Ωcs__57
    if equals(a , b) then chucks      # Ωcs__58
    ###
    return null
  return null



#===========================================================================================================
if module is require.main then await do =>
  # await demo_execa()
  demo_parse()





