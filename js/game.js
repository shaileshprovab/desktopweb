var SITE_URL = SITE_URL;
$(document).ready(function() {
//$('.open_card-show').hide();
$('.open_card-poker').hide();
var countTounTime = 5;
var full_stroke = 175.84;
var initial_stroke = full_stroke / countTounTime;
var stroke_width = full_stroke / countTounTime;

var myVar = null;
var main_max = 4;
var sub_max = 12;
var main_cards = [ 'c', 'd', 'h', 's' ];
var sub_cards = [ 'a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'k', 'q' ];
var excess_cards = [ 'j', 'k', 'q' ];

var table_columns = {
  bead: { columns: [], class: 'bead_road', name: 'beadRoadAllRoadGrid' },
  big: { columns: [], class: 'big_road', name: 'bigRoadAllRoadGrid'  },
  eye: { columns: [], class: 'bigeye_road', name: 'bigEyeRoadAllRoadGrid'  },
  small: { columns: [], class: 'small_road', name: 'smallRoadAllRoadGrid'  },
  cockroach: { columns: [], class: 'cockroch_road', name: 'cockrochRoadAllRoadGrid'  }
};

var bank_player = [ 'P', 'B' ];
var BATCH = null;
var GAME_ID = null;

$('#jsBigAllRoad').hide();
  var cardFunctions = {
    myVar: null,
    setTimer: function(win) {
      cardFunctions.restartGame(win);
      /*$('#jsPlayAgain').hide();
      $('#countdownTime').text(5);
      $('#circle-progress circle').css('stroke-dashoffset', '0px');
      initial_stroke = full_stroke / countTounTime;
      stroke_width = full_stroke / countTounTime;
      myVar = setInterval(this.myTimer, 1000);
      $('#countdown').show();*/
    },
    myTimer: function() {
      if(countTounTime > 0) {
        $('#circle-progress circle').css('stroke-dashoffset', stroke_width + 'px');
        stroke_width += initial_stroke;
      }
      countTounTime -= 1;
      if(countTounTime == 5) {
        $('#countdown').addClass('finish');
      }
      $('#countdownTime').text(countTounTime);
      if(countTounTime < 0) {
        countTounTime = 5;
        cardFunctions.restartGame();
        $('#countdown').hide();
        clearInterval(myVar);
      }
    },
    restartGame: function(win) {
      console.log("Restart Game ");
      $('.open_card-poker').show();
      var main_max_clone = main_max;
      var sub_max_clone = sub_max;
      var b_result = '';
      var p_result = '';
      var main_id = this.getRandomInt(main_max_clone);
      var sub_id = this.getRandomInt(sub_max_clone);


      var sub_cards_clone = sub_cards.slice();
      sub_cards_clone.splice(sub_id, 1);
      
      $('#player1stCardAnime #player1stCard span').text(sub_cards[sub_id].toUpperCase());
      $('#player1stCardAnime #player1stCard').attr('class', 'open_card-poker ' + main_cards[main_id] + ' num-' + sub_cards[sub_id]);
      console.log("Player First Card Number ",sub_cards[sub_id]);
      p_result +=  sub_cards[sub_id];
      var player1_card_no = sub_cards[sub_id];
      if(excess_cards.indexOf(player1_card_no) > -1) {
        player1_card_no = 10;
      } else if(player1_card_no == 'a') {
        player1_card_no = 1;
      }

      main_max_clone -= 1;
      sub_max_clone -= 1;
      var main_id = this.getRandomInt(main_max_clone);
      var sub_id = this.getRandomInt(sub_max_clone);
      $('#player2ndCardAnime #player2ndCard span').text(sub_cards_clone[sub_id].toUpperCase());
      $('#player2ndCardAnime #player2ndCard').attr('class', 'open_card-poker ' + main_cards[main_id] + ' num-' + sub_cards_clone[sub_id]);
      console.log("Player Second Card Number ",sub_cards_clone[sub_id]);
      p_result += '+'+sub_cards_clone[sub_id];
      var player2_card_no = sub_cards_clone[sub_id];
      if(excess_cards.indexOf(player2_card_no) > -1) {
        player2_card_no = 10;
      } else if(player2_card_no == 'a') {
        player2_card_no = 1;
      }

      console.log("Player Consolidate Result = ", p_result);

      main_max_clone = main_max;
      sub_max_clone = sub_max;
      var opp_main_id = this.getRandomInt(main_max_clone);
      var opp_sub_id = this.getRandomInt(sub_max_clone);
      $('#banker1stCardAnime #banker1stCard span').html(sub_cards[opp_sub_id].toUpperCase());
      $('#banker1stCardAnime #banker1stCard').attr('class', 'open_card-poker ' + main_cards[opp_main_id] + ' num-' + sub_cards[opp_sub_id]);
      console.log("Banker First Card Number ",sub_cards[opp_sub_id]);
      b_result += sub_cards[opp_sub_id];
      var banker1_card_no = sub_cards[opp_sub_id];
      if(excess_cards.indexOf(banker1_card_no) > -1) {
        banker1_card_no = 10;
      } else if(banker1_card_no == 'a') {
        banker1_card_no = 1;
      }

      sub_cards_clone = sub_cards.slice();
      sub_cards_clone.splice(opp_sub_id, 1);

      main_max_clone -= 1;
      sub_max_clone -= 1;
      var opp_main_id = this.getRandomInt(main_max_clone);
      var opp_sub_id = this.getRandomInt(sub_max_clone);
      $('#banker2ndCardAnime #banker2ndCard span').html(sub_cards_clone[opp_sub_id].toUpperCase());
      $('#banker2ndCardAnime #banker2ndCard').attr('class', 'open_card-poker ' + main_cards[opp_main_id] + ' num-' + sub_cards_clone[opp_sub_id]);
      console.log("Banker Second Card Number ",sub_cards_clone[opp_sub_id]);
      b_result += "+"+sub_cards_clone[opp_sub_id];
      var banker2_card_no = sub_cards_clone[opp_sub_id];
      if(excess_cards.indexOf(banker2_card_no) > -1) {
        banker2_card_no = 10;
      } else if(banker2_card_no == 'a') {
        banker2_card_no = 1;
      }

      console.log("Consolidate Result = ", b_result);

      console.log("Player1 Card Number =", player1_card_no, "Player2 Card Number =", player2_card_no);
      console.log("Banker1 Card Number =", banker1_card_no, "Banker2 Card Number =", banker2_card_no);
      var player_sum = parseInt(player1_card_no) + parseInt(player2_card_no);
      var banker_sum = parseInt(banker1_card_no) + parseInt(banker2_card_no);

      console.log("Player Sum ", player_sum);
      console.log("Banker Sum ", banker_sum);

      var str = '';
      var color = 'banker';
      var default_color = 'banker';
      var formData = { winner: null, natural_win: null, batch: BATCH, game_id: GAME_ID, p_result: p_result, b_result: b_result, p_result_total: player_sum, b_result_total: banker_sum, p_pair: ($('#jsPlayerPair').is(':checked') ? 1 : 0), b_pair: ($('#jsBankerPair').is(':checked') ? 1 : 0) };

      var player_value = player_sum % 10;
      var banker_value = banker_sum % 10;

      if(player_value > banker_value) {

        if(player_value == 8 || player_value == 9){
            formData.winner = 'P';
            formData.natural_win = 'P';
          }
        else{
            formData.winner = 'P';
        }
      
      } else if(player_value < banker_value) {
        if(banker_value == 8 || banker_value == 9){
            formData.winner = 'B';
            formData.natural_win = 'B';
          }
        else{
            formData.winner = 'B';
        }
      } else {
        if(player_value == 8 || player_value == 9 || banker_value == 8 || banker_value == 9 && (player_value ==  banker_value)){
            formData.natural_win = 'T';
            formData.winner = 'T';
        }
        else{
            formData.winner = 'T';
        }
        
      }

      //beadRoadAllRoadGrid
      //For static win check.
      if(win != 'all') {
        switch(win) {
          case 'B':
            formData.winner = 'B';
            break;

          case 'P':
            formData.winner = 'P';
            break;

          case 'T':
            formData.winner = 'T';
            break;
        }
      }
      // console.log("Form Data ", formData);
      cardFunctions.insertResult(formData);

      $('.jsPlayAgain').show();
    },
    updateBeadRoadTable: function(data) {
      // console.log("Update Bead Road Table-> ", data);
      // console.log("BEAD-X length - "+ data.MapX+' BEAD-Y length - '+ data.MapY);
      var road_class_up = '';
      var road_class_down = '';
      if(data.BPair) {
        road_class_up += ' pair_banker';
      }
      if(data.PPair) {
        road_class_down += ' pair_player';
      }
      /*var html = '<div data-column="' + data.MapY + '" id="beadRoadAllRoadGrid_4_0" name="beadRoadAllRoadGrid_4" style="grid-area: ' + data.MapX + '/' + data.MapY + '" class="road-dot dot-' + data.color + ' ' + road_class + '">\
          <p>'+ data.Result +'</p>\
        </div>';*/
      var html = '<div class="'+road_class_up+' beadlength"></div>\
                                <div class="'+road_class_down+'">\
                                </div>\
                                <div class="'+data.color+'" style="">'+ data.Result +'</div>';
      $('#beed_'+data.MapX+'_'+data.MapY).append(html);

      var beadXLength = $(".x_1 > td .beadlength").length;
      if(beadXLength > 4){
        var extraLength = beadXLength - 4;
        var leftWidth = (extraLength+1) * 31;

        $("#beadRoad").css({ 'marginLeft':'-'+leftWidth+'px' });
      }
      this.updateBoardPosition('bead');
    },
    updateBigRoadTable: function(data, id) {
      var row_no = data.MapX;
      var col_no = data.MapY;
      //Check if the row valid.
      //each row check if valid
      
      var attr = id + '_' + row_no + '_' + col_no;
      if(data.Result == 'T') {
        if(data.TieCount && data.TieCount > 0) {
          var pair_banker = '';
          var pair_player = '';
          if(data.BPair) {
            pair_banker = ' pair_banker';
          }
          if(data.PPair) {
            pair_player = ' pair_player';
          }
          if(data.TieCount > 1) {
            if(!$('#' + attr).length) {
              var color = data.color;
              if(data.color == 'tie'){
                color = "";
              }
              console.log("Die Count First -- ", data.TieCount+" Color "+data.color);
              var html = '<div class="tie_up" id="bigroadtieup_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_banker+'"></div>\
                    <div class="'+color+'" id="bigroadtie_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_player+'"></div>\
                    <div class="tie_down" id="bigroadtiedown_'+data.MapX+'_'+data.MapY+'"></div>';
              /*var html = '<div data-column="' + col_no + '" id="' + attr +'" name="' + attr +'" style="grid-area: ' + row_no + '/' + col_no + '">\
                  <div class="road-dot line-tie-up line-tie-down '+ data.color +' ' + road_class + '">\
                    <p>' + data.TieCount + '</p>\
                  </div>\
                </div>'; */
              $('#bigroad_'+data.MapX+'_'+data.MapY+' div').removeClass('tie');
              $('#bigroad_'+data.MapX+'_'+data.MapY).append(html);
            } else {
              console.log("Die Count Second -- ", data.TieCount);
              $('#bigroad_'+data.MapX+'_'+data.MapY+' div').removeClass('tie');
              $('#bigroadtieup_'+data.MapX+'_'+data.MapY).addClass('tie_up');
              $('#bigroadtiedown_'+data.MapX+'_'+data.MapY).addClass('tie_down');
              // // $('#' + attr +' p').text(data.tie_count);
              $('#' + attr +' p').html('<span style="font-size:38px; color:#f7b908 !important;">&#8226;</span><span style="font-size:10px;position:absolute;z-index: 100;">' + data.TieCount + '</span>');
            }
          } else {
            //If the first bet is tie.
            if(!$('#' + attr).length) {
              var html = '<div class="" id="bigroadtieup_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_banker+'"></div>\
                    <div class="'+data.color+'" id="bigroadtie_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_player+'"></div>\
                    <div class="" id="bigroadtiedown_'+data.MapX+'_'+data.MapY+'"></div>';
              /* var html = '<div data-column="' + col_no + '" id="' + attr +'" name="' + attr +'" style="grid-area: ' + row_no + '/' + col_no + '">\
                  <div class="road-dot line-tie '+ data.color +' ' + road_class + '">\
                    <p></p>\
                  </div>\
                </div>';*/
              $('#bigroad_'+data.MapX+'_'+data.MapY).append(html);
            } else {    
              console.log("Die Count SINGLE");          
              $('#bigroadtie_'+data.MapX+'_'+data.MapY).addClass('tie '+ tie);
            }
          }
        }
      } else {
        //If the first bet die then remove that element.
        if($('#' + attr).length) {
          $('#' + attr).remove();
        }
        var tie_up = '';
        var tie_down = '';
        var tie = '';
        if(data.TieCount && data.TieCount > 0) {
          if(data.TieCount > 1) {
            tie_up = 'tie_up';
            tie_down = 'tie_down';
          } else {
            tie = 'tie';
          }
        }
        var pair_banker = '';
        var pair_player = '';
        if(data.BPair) {
          pair_banker = 'pair_banker';
        }
        if(data.PPair) {
          pair_player = 'pair_player';
        }
        console.log("Pair Banker - ",pair_banker);
        // console.log("Die Count Third -- ", data.TieCount);
        var natural = '';
        if(data.NaturalWin){
          natural = '<span style="font-size:38px; color:#f7b908 !important;">&#8226;</span>';

          if(data.TieCount && data.TieCount > 1){
            natural += '<span style="font-size:10px;position:absolute;z-index: 100;">' + data.TieCount + '</span>';
          }
          else{
            natural += '<span></span>';
          }
        }
        else{
          natural = '<span style="">' + (data.TieCount && data.TieCount > 1 ? data.TieCount : '') + '</span>';
        }
        // var html = '<div data-column="' + col_no + '" id="' + attr +'" name="' + attr +'" style="grid-area: ' + row_no + '/' + col_no + '">\
        //     <div class="road-dot dot-'+ data.color +' ' + road_class + '">\
        //       <p>'+ natural +'</p>\
        //     </div>\
        //   </div>';
        var html = '<div class="'+tie_up+'" id="bigroadtieup_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_banker+'"></div>\
                    <div class="'+tie+'"></div>\
                    <div class="'+data.color+'" id="bigroadtie_'+data.MapX+'_'+data.MapY+'"></div>\
                    <div class="'+pair_player+'"></div>\
                    <div class="'+tie_down+'" id="bigroadtiedown_'+data.MapX+'_'+data.MapY+'"></div>';
        $('#bigroad_'+data.MapX+'_'+data.MapY).append(html);
      }
      
      this.updateBoardPosition('big');
    },
    updateBigEyeTable: function(data) {
      var html = '<div data-column="' + data.MapY + '" id="bigEyeRoadAllRoadGrid_0_0" name="bigEyeRoadAllRoadGrid_0" style="grid-area: '+ data.MapX +'/' + data.MapY + '" class="road-dot dot-' + data.color + '">\
            <p></p>\
          </div>';
      $('#bigEyeRoadAllRoadGrid').append(html);
      this.updateBoardPosition('eye'); 
    },
    updateSmallRoadTable: function(data) {
      var html = '<div data-column="' + data.MapY + '" id="smallRoadAllRoadGrid_0_0" name="smallRoadAllRoadGrid_0" style="grid-area: '+ data.MapX +'/' + data.MapY + '" class="road-dot dot-' + data.color + '">\
            <p></p>\
          </div>';
      $('#smallRoadAllRoadGrid').append(html);
      this.updateBoardPosition('small'); 
    },
    updateCockroachRoadTable: function(data) {
      var html = '<div data-column="' + data.MapY + '" id="cockrochRoadAllRoadGrid_0_0" name="cockrochRoadAllRoadGrid_0" style="grid-area: '+ data.MapX +'/' + data.MapY + '" class="road-dot dot-' + data.color + '">\
            <p></p>\
          </div>';
      $('#cockrochRoadAllRoadGrid').append(html);
      this.updateBoardPosition('cockroach');
    },
    updateBoardPosition: function(board_type) {
      var table = table_columns[board_type];
      var div_width = $('.' + table.class).width();
      var width = $('#' + table.name + ' div[name^=' + table.name + ']:last').outerWidth() + 1;
      var last_column = Math.max(...table.columns);
      var total_grid = Math.floor(div_width / width);
      if(total_grid < last_column) {
        var first_column = Math.min(...table.columns);
        var first_visible_grid = $('#' + table.name + ' div[data-column=' + first_column + ']');
        if(first_visible_grid.length) {
          $('#' + table.name).css('left',  '-' + first_visible_grid.position().left + 'px');
        }
        var total_columns = last_column - first_column;
        if(total_columns > total_grid) {
          var first_column = last_column - total_grid + 2;
          var first_visible_grid = $('#' + table.name + ' div[data-column=' + first_column + ']');
          if(first_visible_grid.length) {
            $('#' + table.name).css('left',  '-' + first_visible_grid.position().left + 'px');
          }
        }
      } else {
        $('#' + table.name).css('left',  '0px');
      }
    },
    updateBoard: function(data, road_type) {
      var color = 'tie';
      if(data.Result == 'B') {
        color = 'banker';
      }
      if(data.Result == 'P') {
        color = 'player';
      }
      data['color'] = color;
      switch(road_type) {
        case 'bead':
          table_columns.bead.columns.push(data.MapY);
          cardFunctions.updateBeadRoadTable(data);
          break;

        case 'big':
          table_columns.big.columns.push(data.MapY);
          cardFunctions.updateBigRoadTable(data, 'bigRoadAllRoadGrid');
          break;

        case 'eye':
          table_columns.eye.columns.push(data.MapY);
          cardFunctions.updateBigEyeTable(data);
          break;

        case 'small':
          table_columns.small.columns.push(data.MapY);
          cardFunctions.updateSmallRoadTable(data);
          break;

        case 'cockroach':
          table_columns.cockroach.columns.push(data.MapY);
          cardFunctions.updateCockroachRoadTable(data);
          break;
      }
    },
    updateNextDerivedRoad: function(data) {
      var color = { R: 'banker', B: 'player' };
      var derived_roads = {
          BBigEye: { id: 'askBigEyeBanker', class: 'hollow_circle' },
          BSmallRoad: { id: 'askSmallBanker', class: 'circle' },
          BCockroach: { id: 'askCockrochBanker', class: 'slash' },
          PBigEye: { id: 'askBigEyePlayer', class: 'hollow_circle' },
          PSmallRoad: { id: 'askSmallPlayer', class: 'circle' },
          PCockroach: { id: 'askCockrochPlayer', class: 'slash' }
        };
      for(var derived of Object.keys(derived_roads)) {
        //console.log(derived, color[data[derived]])
        if(data[derived] && color[data[derived]]) {
          $('#' + derived_roads[derived].id).attr('class', derived_roads[derived].class + ' ' + color[data[derived]]);
        } else {
          $('#' + derived_roads[derived].id).attr('class', 'none');
        }
      }
    },
    updateWinDetails: function(data) {
      var banker_win = data.Banker;
      var player_win = data.Player;
      var tie_win = data.Tie;
      $('#bankerPortCount').text(banker_win.Win);
      $('#bankerPairPortCount').text(banker_win.TotalBPair);
      $('#playerPortCount').text(player_win.Win);
      $('#playerPairPortCount').text(player_win.TotalPPair);
      $('#tiePortCount').text(tie_win.Win);
      $('#totalPortCount').text(data.TotalGame);
    },
    getRandomInt: function (max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    insertResult: function(data) {
      console.log("Form Data - ",data);
      $.ajax({
        url: SITE_URL + "/models/insert_bigroad.php",
        type: 'post',
        data: data,
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          console.log("After Response - ", data.msg);
          if(data.status) {
            console.log("AFTER INSERT DATA IN DATABASE - ", data);
            //Bead road
            var bead_road = data.bead_road;
            if(bead_road) {
              cardFunctions.updateBoard(bead_road, 'bead');
            }

            var big_road = data.big_road;
            if(big_road) {
              cardFunctions.updateBoard(big_road, 'big');
            }

            //Big eye road
            var big_eye = data.big_eye;
            if(Object.keys(big_eye).length > 0) {
              cardFunctions.updateBoard(big_eye, 'eye');
            }
            
            //Small road
            var small_road = data.small_road;
            if(Object.keys(small_road).length > 0) {
              cardFunctions.updateBoard(small_road, 'small');
            }

            //Cockroach road
            var cockroach_road = data.cockroach_road;
            if(Object.keys(cockroach_road).length > 0) {
              cardFunctions.updateBoard(cockroach_road, 'cockroach');
            }

            //next game road
            var next_derived_road = data.next_derived_road;
            cardFunctions.updateNextDerivedRoad(next_derived_road);

            //Win deatils
            var win_details = data.win_details;
            cardFunctions.updateWinDetails(win_details);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          
        },
        complete: function(jqXHR, textStatus) {

        }
      });
    },
    getResut: function() {
      $.ajax({
        url: SITE_URL + "/models/get_bigroad.php",
        type: 'get',
        dataType: 'json',
        // headers: {  'Access-Control-Allow-Origin': '*' },
        success: function(data, textStatus, jqXHR) {
          console.log("Get Result For All Data---",data);
          if(data.status) {
            cardFunctions.updateResult(data);
          } else {
            console.log('some error');
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          
        },
        complete: function(jqXHR, textStatus) {

        }
      });
    },
    showFullBigBoard: function() {
      if(!$('#gameRoad').hasClass('hight_up')) {
        $('#cardZone').hide();
        $('#gameRoad').addClass('hight_up');
      } else {
        $('#cardZone').show();
        $('#gameRoad').removeClass('hight_up');
      }
      this.updateBoardPosition('bead');
      this.updateBoardPosition('big');
    },
    updateResult: function(data) {
      console.log("Inside Update Data ", data);
      var big_road = data.big_road;
      
      BATCH = data.batch;
      GAME_ID = data.game_id;

      //Bead road
      var bead_road = data.bead_road;
      for (var i = 0; i < bead_road.length; i++) {
        cardFunctions.updateBoard(bead_road[i], 'bead');
      }

      //Big road
      for (var i = 0; i < big_road.length; i++) {
        //Update the tie count        
        cardFunctions.updateBoard(big_road[i], 'big');
      }

      //Big eye table
      var big_eye = data.big_eye;
      for (var i = 0; i < big_eye.length; i++) {
        cardFunctions.updateBoard(big_eye[i], 'eye');
      }

      //Small road table
      var small_road = data.small_road;
      for (var i = 0; i < small_road.length; i++) {
        cardFunctions.updateBoard(small_road[i], 'small');
      }

      //Cockroach table
      var cockroach_road = data.cockroach_road;
      for (var i = 0; i < cockroach_road.length; i++) {
        cardFunctions.updateBoard(cockroach_road[i], 'cockroach');
      }

      //next game road
      var next_derived_road = data.next_derived_road;
      cardFunctions.updateNextDerivedRoad(next_derived_road[0]);

      //Win deatils
      var win_details = data.win_details;
      cardFunctions.updateWinDetails(win_details);
    }
  };

  // console.log("Card Function Calculation");
  // console.log(cardFunctions);
  // console.log("Card Function Calculation End");

  $(document).on('click', '.jsPlayAgain', function() {
    cardFunctions.setTimer($(this).data('win'));  
    console.log($(this).data('win'));
  });
  $(document).on('click', '#jsBigRoad, #jsBeadRoad', function() {
    cardFunctions.showFullBigBoard();
  });
  $(document).on('click', '#jsNewBatch', function() {
    parent.master.createBatch();
  });
  $(document).on('click', '.jsPair', function() {
    if($(this).find('input:checkbox').is(':checked')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  cardFunctions.getResut();
});