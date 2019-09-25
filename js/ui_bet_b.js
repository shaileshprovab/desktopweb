var playerBetStatus = true;
var bankerBetStatus = true;
var bPairBetStatus = true;
var pPairBetStatus = true;
var tieBetStatus = true;
var timeOut = false;
var placeBetSession = true;
var clearBetSession = true;
var betPlaced_value = $('.betPlaced').text();
betPlaced_value = parseInt(betPlaced_value);
var betPlaced_value_tie = $('.betPlacedTie').text();
betPlaced_value_tie = parseInt(betPlaced_value_tie);
var betPlaced_value_bPair = $('.betPlacedB_Pair').text();
betPlaced_value_bPair = parseInt(betPlaced_value_bPair);
var betPlaced_value_pPair = $('.betPlacedP_Pair').text();
betPlaced_value_pPair = parseInt(betPlaced_value_pPair);
var betPlaced_value_bank = $('.betPlacedBanker').text();
betPlaced_value_bank = parseInt(betPlaced_value_bank);
var betPlaced_add_value_pPair = $('.betPlacedP_Pair').text();
betPlaced_add_value_pPair = parseInt(betPlaced_add_value_pPair);

var betPlaced_add_value_bPair = $('.betPlacedB_Pair').text();
betPlaced_add_value_bPair = parseInt(betPlaced_add_value_bPair);

var betPlaced_add_value_tie = $('.betPlacedTie').text();
betPlaced_add_value_tie = parseInt(betPlaced_add_value_tie);

var betPlaced_add_value_bank = $('.betPlacedBanker').text();
betPlaced_add_value_bank = parseInt(betPlaced_add_value_bank);

var betPlaced_add_value = $('.betPlaced').text();
betPlaced_add_value = parseInt(betPlaced_add_value);

var main_max = 4;
var sub_max = 12;
var main_cards = ['c', 'd', 'h', 's'];
var sub_cards = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'k', 'q'];
var excess_cards = ['j', 'k', 'q'];
$('.open_card-poker_back').show();

//$('#cardZone').hide();
$('.open_card-poker').hide();
$('.winner-logo').hide();
$('#playerWin').hide();
$('#bankerWin').hide();

$('#jsHtml').load('desktop.html');

var img = $('<img class="jsEmptyImage" src="images/icon_baccarat.png" />');
$('body').append(img);
$('.jsEmptyImage').remove();

$('.container').show();
$('#setChips').show();
$(document).ready(function () {
    $('.resultWindow').hide();
    setTimeout(function () { $('.loader').fadeOut();
        myCountDown();
        $('.container').show();
        $('#setChips').hide();
        fixHeights();
     }, 3000);
    $('.take-coin-value').click(function () {
        $('.take-coin-value').removeClass('active now');
        $(this).addClass('active now');
    });
    $(document).on('click', '#chipSettingImage', function() {
        $('#setChips').show();
    });
    $(document).on('click', '#chipsSubmitBtn', function() {
        $('#setChips').hide();
    });
    $(document).on('click', '#chipsCancelBtn', function() {
        $('#setChips').hide();
    });
    $('.bet-box-bottom1').click(function () {
        if (playerBetStatus == true && timeOut == false) {
            $('.ok-notok-right-left a i.fa-check').addClass('active');
            $('.betPlaced').fadeIn();
            var value = $('.take-coin-value.active').attr('data-value');
            value = parseInt(value);
            console.info("1", value);
            betPlaced_value = betPlaced_value + value;
            if ($(this).find('.betSataus').attr('data-status') != 'placed') {
                $('.betPlaced label.add-datavalue').hide();
                $('.betPlaced label.mainvalue').text(betPlaced_value);
            } else {
                $('.betPlaced label.add-datavalue').show();
                betPlaced_add_value += value;
                $('.betPlaced label.add-datavalue').text('+' + betPlaced_add_value);
            }
            //loadModal();
            bankerBetStatus = false;
        } else if (playerBetStatus == false) {
            console.log('warning player')
            $('.warningPopup').fadeIn().delay(3000).fadeOut();
        }
    });
    $('.bet-box-bottom3.banker').click(function () {
        if (bankerBetStatus == true && timeOut == false) {
            $('.ok-notok-right-left a i.fa-check').addClass('active');
            $('.betPlacedBanker').fadeIn();
            var value = $('.take-coin-value.active').attr('data-value');
            value = parseInt(value);
            console.info("2", value);
            betPlaced_value_bank = betPlaced_value_bank + value;
            if ($(this).find('.betSataus').attr('data-status') != 'placed') {
                $('.betPlacedBanker label.add-datavalue').hide();
                $('.betPlacedBanker label.mainvalue').text(betPlaced_value_bank);
            } else {
                $('.betPlacedBanker label.add-datavalue').show();
                betPlaced_add_value_bank += value;
                $('.betPlacedBanker label.add-datavalue').text('+' + betPlaced_add_value_bank);
            }
            $('.betPlaced label').text("");
            playerBetStatus = false;
        } else if (bankerBetStatus == false) {
            console.log('warning banker')
            $('.warningPopup').fadeIn().delay(3000).fadeOut();
        }
    });
    $('.bet-box-bottom2.tie').click(function () {
        if (tieBetStatus == true && timeOut == false) {
            $('.ok-notok-right-left a i.fa-check').addClass('active');
            $('.betPlacedTie').fadeIn();
            var value = $('.take-coin-value.active').attr('data-value');
            value = parseInt(value);
            console.info("3", value);
            betPlaced_value_tie = betPlaced_value_tie + value;
            if ($(this).find('.betSataus').attr('data-status') != 'placed') {
                $('.betPlacedTie label.add-datavalue').hide();
                $('.betPlacedTie label.mainvalue').text(betPlaced_value_tie);
            } else {
                $('.betPlacedTie label.add-datavalue').show();
                betPlaced_add_value_tie += value;
                $('.betPlacedTie label.add-datavalue').text('+' + betPlaced_add_value_tie);
            }
            //loadModal();		
        }

    });
    $('.bet-box-bottom2.p_Pair').click(function () {
        if (pPairBetStatus == true && timeOut == false) {
            $('.ok-notok-right-left a i.fa-check').addClass('active');
            $('.betPlacedP_Pair').fadeIn();
            var value = $('.take-coin-value.active').attr('data-value');
            value = parseInt(value);
            console.info("pp", value, betPlaced_value_pPair);
            betPlaced_value_pPair = betPlaced_value_pPair + value;
            if ($(this).find('.betSataus').attr('data-status') != 'placed') {
                $('.betPlacedP_Pair label.add-datavalue').hide();
                $('.betPlacedP_Pair label.mainvalue').text(betPlaced_value_pPair);
            } else {
                $('.betPlacedP_Pair label.add-datavalue').show();
                betPlaced_add_value_pPair += value;
                $('.betPlacedP_Pair label.add-datavalue').text('+' + betPlaced_add_value_pPair);
            }
            //loadModal();
        }

    });
    $('.bet-box-bottom2.b_Pair').click(function () {
        if (bPairBetStatus == true && timeOut == false) {
            $('.ok-notok-right-left a i.fa-check').addClass('active');
            $('.betPlacedB_Pair').fadeIn();
            var value = $('.take-coin-value.active').attr('data-value');
            value = parseInt(value);
            console.info("BP", value);
            betPlaced_value_bPair = betPlaced_value_bPair + value;

            if ($(this).find('.betSataus').attr('data-status') != 'placed') {
                $('.betPlacedB_Pair label.add-datavalue').hide();
                $('.betPlacedB_Pair label.mainvalue').text(betPlaced_value_bPair);
            } else {
                $('.betPlacedB_Pair label.add-datavalue').show();
                betPlaced_add_value_bPair += value;
                $('.betPlacedB_Pair label.add-datavalue').text('+' + betPlaced_add_value_bPair);
            }
            //loadModal();
        }

    });
    //Clear all the bets before placed
    $('.ok-notok-right-right').click(function () {
        if (clearBetSession) {
            console.log("clear all betSataus",clearBetSession)
            playerBetStatus = true;
            bankerBetStatus = true;

            betPlaced_add_value_pPair = 0;
            betPlaced_add_value_bPair = 0;
            betPlaced_add_value_tie = 0;
            betPlaced_add_value_bank = 0;
            betPlaced_add_value = 0;
        
            // add-datavalue mainvalue
            $('.betPlaced .add-datavalue').text(betPlaced_value).hide();
            //$('.betPlaced .mainvalue').text(betPlaced_value);
            if(!$('.betPlaced label.mainvalue').hasClass('done')) {
                betPlaced_value = 0;
                $('.betPlaced').hide();
            }
            $('.betPlacedTie .add-datavalue').text(betPlaced_value_tie).hide();
            //$('.betPlacedTie .mainvalue').text(betPlaced_value_tie);
            if(!$('.betPlacedTie label.mainvalue').hasClass('done')) {
                betPlaced_value_tie = 0;
                $('.betPlacedTie').hide();
            }

            $('.betPlacedB_Pair .add-datavalue').text(betPlaced_value_bPair).hide();
            //$('.betPlacedB_Pair .mainvalue').text(betPlaced_value_bPair);
            if(!$('.betPlacedB_Pair label.mainvalue').hasClass('done')) {
                betPlaced_value_bPair = 0;
                $('.betPlacedB_Pair').hide();
            }
            
            $('.betPlacedP_Pair .add-datavalue').text(betPlaced_value_pPair).hide();
            //$('.betPlacedP_Pair .mainvalue').text(betPlaced_value_pPair);
            if(!$('.betPlacedP_Pair label.mainvalue').hasClass('done')) {
                betPlaced_value_pPair = 0;
                $('.betPlacedP_Pair').hide();
            }

            $('.betPlacedBanker .add-datavalue').text(betPlaced_value_bank).hide();
            //$('.betPlacedBanker .mainvalue').text(betPlaced_value_bank);
            if(!$('.betPlacedBanker label.mainvalue').hasClass('done')) {
                betPlaced_value_bank = 0;
                $('.betPlacedBanker').hide();
            }
        }
    });
    //hiding setting popup
    $('.setting-popup .close').click(function () {
        $('.setting-popup').fadeOut();
    });

    //showing setting popup
    $('#openSettings').click(function () {
        $('.setting-popup').fadeIn();
    });


    $('#bgChange').click(function () {
        if ($(this).is(':checked')) {
            $('#myBar').attr('style', 'width:20%');
            $('#myProgress + span').html("20%");
        } else {
            $('#myBar').attr('style', 'width:0%');
            $('#myProgress + span').html("0%");
        }
    });

    fixHeights();


});

function showCard(num, player_type) {
    var obj = {
        1: { class: '1st', extra: '' },
        2: { class: '2nd', extra: '' },
        3: { class: '3rd', extra: 'poker-extra ' }
    }
    console.log(num, player_type)
    var main_id = getRandomInt(main_max);
    var sub_id = getRandomInt(sub_max);
    $('#' + player_type + obj[num].class + 'CardAnime').addClass('flippedFront');
    $('#' + player_type + obj[num].class + 'CardAnime #' + player_type + obj[num].class + 'Card').fadeIn();
    $('#' + player_type + obj[num].class + 'CardAnime #' + player_type + obj[num].class + 'Card span').text(sub_cards[sub_id].toUpperCase());
    // $('#' + player_type + obj[num].class + 'CardAnime .open_card-poker_back').hide();
    $('#' + player_type + obj[num].class + 'CardAnime #' + player_type + obj[num].class + 'Card').show().attr('class', obj[num].extra + ' open_card-poker ' + main_cards[main_id] + ' num-' + sub_cards[sub_id]);


    var card_value = sub_cards[sub_id];
    if (excess_cards.indexOf(card_value) > -1) {
        card_value = 10;
    } else if (card_value == 'a') {
        card_value = 1;
    }
    return card_value;
} // end showCard function 

function drawThirdCards(data) {
    var $q = $.Deferred();
    var is_win = false;
    var _8or9 = [8, 9];
    if (_8or9.indexOf(data.pp) > -1) {
        is_win = true;
        console.log('player win');

        $q.resolve(data);
    }
    if (_8or9.indexOf(data.bp) > -1) {
        is_win = true;
        console.log('banker win')
        $q.resolve(data);
    }
    if (!is_win) {
        var is_bank_third = false;
        var is_player_third = false,
            pp_value, bp_value, player_sum, banker_sum;
        if (data.pp >= 0 && data.pp <= 5) {
            $('#player3rdCardAnime').fadeIn();
            setTimeout(function () {
                is_player_third = true;
                var player3_card_no = showCard(3, 'player');
                console.log('sum')
                player_sum = data.player_sum + parseInt(player3_card_no);
                pp_value = player_sum % 10;
                console.info("player card open");
                console.log(player3_card_no);
            }, 1000);
        }
        if (data.bp >= 0 && data.bp <= 2) {
            $('#banker3rdCardAnime').fadeIn();
            setTimeout(function () {
                is_bank_third = true;
                var banker3_card_no = showCard(3, 'banker');
                banker_sum = data.banker_sum + parseInt(banker3_card_no);
                bp_value = banker_sum % 10;
                console.info("banker card open");
                console.log(banker3_card_no);
            }, 1000);
        }
        setTimeout(function () {
            if (is_player_third || is_bank_third) {
                var winner = data.winner;
                if (is_player_third && is_bank_third) {
                    if (bp_value > pp_value) {
                        winner = 'B';
                    } else if (bp_value < pp_value) {
                        winner = 'P';
                    } else {
                        winner = 'T';
                    }
                } else {
                    if (is_player_third) {
                        if (pp_value > data.bp) {
                            winner = 'P';
                        }
                    } else if (is_bank_third) {
                        if (bp_value > data.pp) {
                            winner = 'B';
                        }
                    } else winner = 'T';
                }
                setTimeout(function () {
                    if (is_player_third) {
                        $('#player3rdCardAnime').show();
                        $('#playerHandValue').text(player_sum % 10);
                    }
                    if (is_bank_third) {
                        $('#banker3rdCardAnime').show();
                        $('#bankerHandValue').text(banker_sum % 10);
                    }
                    data.pp = pp_value || data.pp;
                    data.bp = bp_value || data.bp;
                    $q.resolve({ pp: data.pp, bp: data.bp, winner: winner });
                }, 1000);
            } else {
                $q.resolve(data);
            }
        }, 1000)
    }
    return $q.promise();
} // end of drawThirdCards function

function playCards() {
    var $q = $.Deferred();
    var k = 0,
        player1_card_no, player2_card_no, banker1_card_no, banker2_card_no;
    var main_id = getRandomInt(main_max);
    var sub_id = getRandomInt(sub_max);
    setTimeout(function () {
        setTimeout(function () {
            player1_card_no = showCard(1, 'player');
            banker1_card_no = showCard(1, 'banker');
        }, 500);
        setTimeout(function () {
            player2_card_no = showCard(2, 'player');
            banker2_card_no = showCard(2, 'banker');
        }, 1500);

        setTimeout(function () {
            var player_sum = parseInt(player1_card_no) + parseInt(player2_card_no);
            var banker_sum = parseInt(banker1_card_no) + parseInt(banker2_card_no);

            var pp = player_sum % 10;
            var bp = banker_sum % 10;
            $('#playerHandValue').text(pp);
            $('#bankerHandValue').text(bp);
            var winner = 'T';
            if (pp > bp) {
                winner = 'P';
            } else if (pp < bp) {
                winner = 'B';
            }
            $q.resolve({ pp: pp, bp: bp, player_sum: player_sum, banker_sum: banker_sum, winner: winner });
            console.log(player1_card_no, player2_card_no, banker1_card_no, banker2_card_no);
        }, 1500);
    }, 2000);
    return $q.promise();
} // end of playCards function

// countdown function
function myCountDown() {
    var countDownTime = parseInt($("#timerSeconds").val());
    $('#countdownTime').text(countDownTime);
    var full_stroke = 175.84;
    var initial_stroke = full_stroke / countDownTime;
    var stroke_width = full_stroke / countDownTime;
    var _33_Perc_countDownTime = Math.ceil(countDownTime * 0.33);

    function myTimer() {
        if (countDownTime > 0) {
            if (countDownTime == _33_Perc_countDownTime) {
                $('#circle-progress circle').css('stroke', 'red');
                $('#countdownTime').css('color', 'red');
            }
            $('#circle-progress circle').css('stroke-dashoffset', stroke_width + 'px');
            stroke_width += initial_stroke;
        }
        countDownTime -= 1;
        $('#countdownTime').text(countDownTime);
        if (countDownTime <= 0) {
            $('#circle-progress circle').css('stroke', '#FFF1C6');
            $('#countdownTime').css('color', '#FFF1C6');
            clearInterval(myVar);
            $('#countdown-svg').fadeOut(1000);
            var foo = stateTimeOut();
            if (foo) {
                $('.add-datavalue').hide();
                $('#stop-bet').fadeIn().delay(1500).fadeOut(function () {
                    $('.resultWindow').slideDown();
                    $('#cardZone').show();
                    betPlaced_add_value_pPair = 0;
                    betPlaced_add_value_bPair = 0;
                    betPlaced_add_value_tie = 0;
                    betPlaced_add_value_bank = 0;
                    betPlaced_add_value = 0;
                    setTimeout(function () {
                        playCards().then(function (data) {
                            console.log(data);
                            drawThirdCards(data).then(function (result) {
                                console.log(result)
                                /*$('#tieWin').show();*/
                                switch (result.winner) {
                                    case 'B':
                                        console.log('Banker win')
                                        $('#bankerWin').show();
                                        $('#banker-dl').addClass('banker-result-win');
                                        $('#bankerHandValueTitle, #bankerHandValue').css('color', '#ffffff');

                                        break;
                                    case 'P':
                                        console.log('Player win')
                                        $('#playerWin').show();
                                        $('#player-dl').addClass('player-result-win');
                                        $('#playerHandValueTitle, #playerHandValue').css('color', '#ffffff');
                                        break;
                                    case 'T':
                                        $('#tieWin').show();

                                        break;
                                }
                                setTimeout(function () {
                                    console.log('restart calling...')
                                    restart();
                                }, 4000);
                            });
                        });
                    }, 500);
                });

            }
        }
    }
    $('.betSataus').attr('data-status', 'notPlaced');
    $('.betSataus .mainvalue').removeClass('done');
    var myVar = setInterval(myTimer, 1000);
};



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function restart() {
    setTimeout(function () {
        $('.open_card-poker').hide();
        $('#playerHandValue').text(0);
        $('#bankerHandValue').text(0);
        $('#player3rdCardAnime').hide();
        $('#banker3rdCardAnime').hide();
        $('.winner-logo').hide();
        $('#playerWin').hide();
        $('#bankerWin').hide();
        $('.open_card-poker_back').show();
        $('#cardZone').fadeOut(1000);
        $('.open_card-show').removeClass('banker-result-win player-result-win');
        $('#tieWin').hide();
        $('#bankerHandValueTitle, #bankerHandValue').css('color', '#F10C0C');
        $('#playerHandValueTitle, #playerHandValue').css('color', '#4694DE');
        $('.poker-flip').addClass('flippedBack').removeClass('flippedFront');
        $('#total_bet_chip').text(0);
        countdown_start();
        myCountDown();

        betPlaced_add_value_pPair = 0;
        betPlaced_add_value_bPair = 0;
        betPlaced_add_value_tie = 0;
        betPlaced_add_value_bank = 0;
        betPlaced_add_value = 0;

        betPlaced_value = 0;
        betPlaced_value_tie = 0;
        betPlaced_value_bPair = 0;
        betPlaced_value_pPair = 0;
        betPlaced_value_bank = 0;

    }, 1500);
}
$('#menu_content').hide();
$(document).on('click', '.menu_link', function() {
   $('#menu_content').hide();
});
$('#menu_content #menu_btn').remove();
$(document).on('click', '#menu_btn', function() {
    if(!$('#menu_content').is(':visible')) {
        $('#menu_content').show();
    } else {
        $('#menu_content').hide();
    }
});
$(document).on('click', 'ul.game_list li', function() {
    var id = $(this).attr('id');
    console.log(id)
    $('.game-tabs').hide();
    $('ul.game_list li').removeClass('now');
    $(this).addClass('now');
    if(id) {
        $('.' + id).show();
    }
});
$(window).resize(function () {
    fixHeights()
   /* changePage();*/
});

/*function changePage() {
var windowWidth = screen.width;
    var path = window.location.pathname;
    var page = path.split("/").pop();
if(windowWidth > 767) {
    if(page != 'desktop.html') {
    location.replace('desktop.html');
    }
} else {
    if(page != 'game.html') {
    location.replace('game.html');
    }
}
}

changePage();*/

//Custom functions
//Load success nsg
function loadModal() {
    var modal = $("#myModal");
    var btn = $(".ok-notok-right-left a i.fa-check.active");
    $(document).on('click', ".ok-notok-right-left a i.fa-check.active", function () {
        modal.css('display', 'flex').delay(1000).fadeOut();
        var total_bet_chip = 0;
        $('.betSataus').each(function () {
            /*clearBetSession = false;*/
            console.log("check button clicked", clearBetSession);
            var styleStatus = $(this).attr('style');
            if (styleStatus == 'display: block;') {
                $(this).attr("data-status", "placed");
                $(this).find('label.mainvalue').addClass('done')
            }
            var mainValue = !isNaN(parseInt($(this).find('label.mainvalue').text())) ? parseInt($(this).find('label.mainvalue').text()) : 0;
            var addvalue = !isNaN(parseInt($(this).find('label.add-datavalue').text())) ? parseInt($(this).find('label.add-datavalue').text()) : 0;
            var final_value = parseInt(mainValue) + parseInt(addvalue);
            console.log(mainValue, addvalue, final_value)
            total_bet_chip += final_value;
            $(this).find('label.mainvalue').text(final_value);
            console.log($(this).find('label.add-datavalue').length, $(this).attr('class'))
            $(this).find('label.add-datavalue').text(0).hide();
        });
        $('#total_bet_chip').text(total_bet_chip);
        betPlaced_add_value_pPair = 0;
        betPlaced_add_value_bPair = 0;
        betPlaced_add_value_tie = 0;
        betPlaced_add_value_bank = 0;
        betPlaced_add_value = 0;

        betPlaced_value = 0;
        betPlaced_value_tie = 0;
        betPlaced_value_bPair = 0;
        betPlaced_value_pPair = 0;
        betPlaced_value_bank = 0;

        placeBetSession = false;
        //}

        $(this).removeClass('active');
    });
}

loadModal();
// things to done after time out,s
function stateTimeOut() {
    $('.bet-box-bottom2, .bet-box-bottom1, .bet-box-bottom3').addClass('thisDisabled');
    $('.thisDisabled').each(function () {
        var classThis = $(this).find('div').attr('class');
        console.log("class name : " + classThis + "\n");
        var classThisCon = classThis.replace(/ /g, ".");
        var getSatus = $('.' + classThisCon).attr('data-status');
        if (getSatus != "placed") {
            $("." + classThisCon).fadeOut();
            $("." + classThis).find('label').text("");
        } else {
            $("." + classThis).find('label').addClass("done");
        }
        if (placeBetSession == false) {
            $('.ok-notok-right-left a i.fa-check').removeClass('active');
        }
    });
    return true;
}

//sound ctrl
function plusMinusVol(bool) {
    var getStyle = $('#myBar').attr('style');
    var matches = getStyle.match(/(\d+)/);
    var num = parseInt(matches[0]);
    console.log("Number : " + num);
    if (!bool && num > 0) {
        $('#myBar').attr('style', 'width : ' + (num - 10) + "%");
        $('#myProgress + span').html((num - 10) + "%");
    } else if (bool && num < 100) {
        $('#myBar').attr('style', 'width : ' + (num + 10) + "%");
        $('#myProgress + span').html((num + 10) + "%");
    }
}

//fix heights to screens
function fixHeights(){
    //set heights
    var getTopHeight = $('.top-height').outerHeight();
    var topHeader = $('.top-header').outerHeight();
    var topHeaderRow1 = $('.top-header-row1').outerHeight();
    var getBetSectionAreaHeight = $('.bet-section-area').outerHeight();
    console.log("get top height" + getTopHeight + "\n get bet height" + getBetSectionAreaHeight);
    $('.video-section-row').outerHeight((getTopHeight - topHeader - topHeaderRow1) - getBetSectionAreaHeight);
}

function countdown_start() {
    playerBetStatus = true;
    bankerBetStatus = true;
    bPairBetStatus = true;
    pPairBetStatus = true;
    tieBetStatus = true;
    timeOut = false;
    placeBetSession = true;
    clearBetSession = true;
    $('#countdown-svg').fadeIn();
    $('.thisDisabled').removeClass('thisDisabled');
    $('#imagedivPlayer, #imagedivBanker').empty();
    $('.resultWindow').fadeOut();
    $('.betSataus').fadeOut();
    $('.betSataus  label').text(" ");
    $('.win').removeClass('win');
}
