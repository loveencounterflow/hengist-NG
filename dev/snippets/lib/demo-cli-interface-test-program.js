(async function() {
  'use strict';
  var CLK, GUY, alert, debug, echo, help, info, inspect, log, plain, praise, reverse, rpr, select, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  //...........................................................................................................
  CLK = require('@clack/prompts');

  //===========================================================================================================
  select = async function() {
    await (async() => {
      var cfg, project_type;
      cfg = {
        message: "Pick a project type.",
        options: [
          {
            value: 'ts',
            label: 'TypeScript'
          },
          {
            value: 'js',
            label: 'JavaScript'
          },
          {
            value: 'coffee',
            label: 'CoffeeScript',
            hint: 'yes!'
          }
        ]
      };
      project_type = (await CLK.select(cfg));
      info(`Ω___1 project type: ${rpr(project_type)}`);
      return null;
    })();
    await (async() => {
      var cfg, spinner, tools;
      spinner = CLK.spinner();
      spinner.start("asking questions");
      cfg = {
        message: "Select additional tools.",
        options: [
          {
            value: 'eslint',
            label: 'ESLint',
            hint: 'recommended'
          },
          {
            value: 'prettier',
            label: 'Prettier'
          },
          {
            value: 'gh-action',
            label: 'GitHub Action'
          }
        ],
        required: false
      };
      tools = (await CLK.multiselect(cfg));
      info(`Ω___2 tools: ${rpr(tools)}`);
      spinner.stop("thanks!");
      return null;
    })();
    return null;
  };

  //===========================================================================================================
  console.log('Ω___3', "start");

  console.log('Ω___4', (await CLK.confirm({
    message: "Do you want pizza?"
  })));

  // console.log 'Ω___5', await CLK.confirm { message: "Do you want coffee?", }
  // console.log 'Ω___6', await CLK.text { message: "Do you want pizza?", placeholder: 'placeholder', initialValue: 'init', }
  // console.log 'Ω___7', await select()
  console.log('Ω___8', "stop");

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tY2xpLWludGVyZmFjZS10ZXN0LXByb2dyYW0uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLFlBQXBCLENBUjVCOztFQVNBLENBQUEsQ0FBRSxHQUFGLEVBQ0UsT0FERixFQUVFLElBRkYsRUFHRSxPQUhGLEVBSUUsR0FKRixDQUFBLEdBSTRCLEdBQUcsQ0FBQyxHQUpoQyxFQWJBOzs7RUFtQkEsR0FBQSxHQUE0QixPQUFBLENBQVEsZ0JBQVIsRUFuQjVCOzs7RUFzQkEsTUFBQSxHQUFTLE1BQUEsUUFBQSxDQUFBLENBQUE7SUFDUCxNQUFTLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQTtBQUNYLFVBQUEsR0FBQSxFQUFBO01BQUksR0FBQSxHQUNFO1FBQUEsT0FBQSxFQUFZLHNCQUFaO1FBQ0EsT0FBQSxFQUFTO1VBQ1A7WUFBRSxLQUFBLEVBQU8sSUFBVDtZQUFvQixLQUFBLEVBQU87VUFBM0IsQ0FETztVQUVQO1lBQUUsS0FBQSxFQUFPLElBQVQ7WUFBb0IsS0FBQSxFQUFPO1VBQTNCLENBRk87VUFHUDtZQUFFLEtBQUEsRUFBTyxRQUFUO1lBQW9CLEtBQUEsRUFBTyxjQUEzQjtZQUEyQyxJQUFBLEVBQU07VUFBakQsQ0FITzs7TUFEVDtNQUtGLFlBQUEsR0FBZSxDQUFBLE1BQU0sR0FBRyxDQUFDLE1BQUosQ0FBVyxHQUFYLENBQU47TUFDZixJQUFBLENBQUssQ0FBQSxvQkFBQSxDQUFBLENBQXVCLEdBQUEsQ0FBSSxZQUFKLENBQXZCLENBQUEsQ0FBTDtBQUNBLGFBQU87SUFUQSxDQUFBO0lBVVQsTUFBUyxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUE7QUFDWCxVQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUE7TUFBSSxPQUFBLEdBQVUsR0FBRyxDQUFDLE9BQUosQ0FBQTtNQUNWLE9BQU8sQ0FBQyxLQUFSLENBQWMsa0JBQWQ7TUFDQSxHQUFBLEdBQ0U7UUFBQSxPQUFBLEVBQVksMEJBQVo7UUFDQSxPQUFBLEVBQVM7VUFDUDtZQUFFLEtBQUEsRUFBTyxRQUFUO1lBQW1CLEtBQUEsRUFBTyxRQUExQjtZQUFvQyxJQUFBLEVBQU07VUFBMUMsQ0FETztVQUVQO1lBQUUsS0FBQSxFQUFPLFVBQVQ7WUFBcUIsS0FBQSxFQUFPO1VBQTVCLENBRk87VUFHUDtZQUFFLEtBQUEsRUFBTyxXQUFUO1lBQXNCLEtBQUEsRUFBTztVQUE3QixDQUhPO1NBRFQ7UUFLQSxRQUFBLEVBQVU7TUFMVjtNQU1GLEtBQUEsR0FBUSxDQUFBLE1BQU0sR0FBRyxDQUFDLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBTjtNQUNSLElBQUEsQ0FBSyxDQUFBLGFBQUEsQ0FBQSxDQUFnQixHQUFBLENBQUksS0FBSixDQUFoQixDQUFBLENBQUw7TUFDQSxPQUFPLENBQUMsSUFBUixDQUFhLFNBQWI7QUFDQSxhQUFPO0lBYkEsQ0FBQTtBQWNULFdBQU87RUF6QkEsRUF0QlQ7OztFQWtEQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVosRUFBcUIsT0FBckI7O0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLENBQUEsTUFBTSxHQUFHLENBQUMsT0FBSixDQUFZO0lBQUUsT0FBQSxFQUFTO0VBQVgsQ0FBWixDQUFOLENBQXJCLEVBbkRBOzs7OztFQXVEQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVosRUFBcUIsTUFBckI7QUF2REEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2RlbW8tZXhlY2EnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuQ0xLICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ0BjbGFjay9wcm9tcHRzJ1xuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnNlbGVjdCA9IC0+XG4gIGF3YWl0IGRvID0+XG4gICAgY2ZnID1cbiAgICAgIG1lc3NhZ2U6ICAgIFwiUGljayBhIHByb2plY3QgdHlwZS5cIlxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiAndHMnLCAgICAgIGxhYmVsOiAnVHlwZVNjcmlwdCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2pzJywgICAgICBsYWJlbDogJ0phdmFTY3JpcHQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdjb2ZmZWUnLCAgbGFiZWw6ICdDb2ZmZWVTY3JpcHQnLCBoaW50OiAneWVzIScgfSwgXVxuICAgIHByb2plY3RfdHlwZSA9IGF3YWl0IENMSy5zZWxlY3QgY2ZnXG4gICAgaW5mbyBcIs6pX19fMSBwcm9qZWN0IHR5cGU6ICN7cnByIHByb2plY3RfdHlwZX1cIlxuICAgIHJldHVybiBudWxsXG4gIGF3YWl0IGRvID0+XG4gICAgc3Bpbm5lciA9IENMSy5zcGlubmVyKClcbiAgICBzcGlubmVyLnN0YXJ0IFwiYXNraW5nIHF1ZXN0aW9uc1wiXG4gICAgY2ZnID1cbiAgICAgIG1lc3NhZ2U6ICAgIFwiU2VsZWN0IGFkZGl0aW9uYWwgdG9vbHMuXCJcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogJ2VzbGludCcsIGxhYmVsOiAnRVNMaW50JywgaGludDogJ3JlY29tbWVuZGVkJyB9LFxuICAgICAgICB7IHZhbHVlOiAncHJldHRpZXInLCBsYWJlbDogJ1ByZXR0aWVyJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZ2gtYWN0aW9uJywgbGFiZWw6ICdHaXRIdWIgQWN0aW9uJyB9LCBdXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB0b29scyA9IGF3YWl0IENMSy5tdWx0aXNlbGVjdCBjZmdcbiAgICBpbmZvIFwizqlfX18yIHRvb2xzOiAje3JwciB0b29sc31cIlxuICAgIHNwaW5uZXIuc3RvcCBcInRoYW5rcyFcIlxuICAgIHJldHVybiBudWxsXG4gIHJldHVybiBudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc29sZS5sb2cgJ86pX19fMycsIFwic3RhcnRcIlxuY29uc29sZS5sb2cgJ86pX19fNCcsIGF3YWl0IENMSy5jb25maXJtIHsgbWVzc2FnZTogXCJEbyB5b3Ugd2FudCBwaXp6YT9cIiwgfVxuIyBjb25zb2xlLmxvZyAnzqlfX181JywgYXdhaXQgQ0xLLmNvbmZpcm0geyBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IGNvZmZlZT9cIiwgfVxuIyBjb25zb2xlLmxvZyAnzqlfX182JywgYXdhaXQgQ0xLLnRleHQgeyBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IHBpenphP1wiLCBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyJywgaW5pdGlhbFZhbHVlOiAnaW5pdCcsIH1cbiMgY29uc29sZS5sb2cgJ86pX19fNycsIGF3YWl0IHNlbGVjdCgpXG5jb25zb2xlLmxvZyAnzqlfX184JywgXCJzdG9wXCJcbiJdfQ==
//# sourceURL=../src/demo-cli-interface-test-program.coffee