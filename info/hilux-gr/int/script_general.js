(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"borderSize":0,"gap":10,"backgroundOpacity":1,"definitions": [{"buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","class":"PhotoAlbumPlayer","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer"},{"thumbnailUrl":"media/photo_C570484C_CEFB_AD42_41D2_F35F0E3F0896_t.jpg","label":trans('photo_C570484C_CEFB_AD42_41D2_F35F0E3F0896.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-07 copy"},"image":{"levels":[{"url":"media/photo_C570484C_CEFB_AD42_41D2_F35F0E3F0896.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C570484C_CEFB_AD42_41D2_F35F0E3F0896"},{"thumbnailUrl":"media/photo_C58B37DA_CEFB_A346_41E2_42736729F8CB_t.jpg","label":trans('photo_C58B37DA_CEFB_A346_41E2_42736729F8CB.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs_2"},"image":{"levels":[{"url":"media/photo_C58B37DA_CEFB_A346_41E2_42736729F8CB.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C58B37DA_CEFB_A346_41E2_42736729F8CB"},{"class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5"}],"id":"playList_FA3E9DBC_F7B0_D784_41C3_1FC25B987E6E"},{"thumbnailUrl":"media/photo_C5706483_CEFB_A5C6_41E1_348D0B098CC7_t.jpg","label":trans('photo_C5706483_CEFB_A5C6_41E1_348D0B098CC7.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-04 copy"},"image":{"levels":[{"url":"media/photo_C5706483_CEFB_A5C6_41E1_348D0B098CC7.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5706483_CEFB_A5C6_41E1_348D0B098CC7"},{"thumbnailUrl":"media/photo_C5706C24_CEFB_A4C2_41E8_8999C5FF9671_t.jpg","label":trans('photo_C5706C24_CEFB_A4C2_41E8_8999C5FF9671.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-10 copy"},"image":{"levels":[{"url":"media/photo_C5706C24_CEFB_A4C2_41E8_8999C5FF9671.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5706C24_CEFB_A4C2_41E8_8999C5FF9671"},{"right":10,"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","cursor":"hand","data":{"name":"IconButton >"},"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","horizontalAlign":"center","width":"14.22%","paddingLeft":0,"paddingTop":0,"borderRadius":0,"paddingBottom":0,"paddingRight":0,"top":"20%","bottom":"20%","verticalAlign":"middle","transparencyActive":false,"propagateClick":true,"maxHeight":40,"maxWidth":40,"mode":"push","class":"IconButton","toolTipHorizontalAlign":"center","minHeight":40,"minWidth":40,"shadow":false,"borderSize":0},{"thumbnailUrl":"media/photo_C5706E80_CEFB_A5C2_41D2_8F918551B03C_t.jpg","label":trans('photo_C5706E80_CEFB_A5C2_41D2_8F918551B03C.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-12 copy"},"image":{"levels":[{"url":"media/photo_C5706E80_CEFB_A5C2_41D2_8F918551B03C.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5706E80_CEFB_A5C2_41D2_8F918551B03C"},{"thumbnailUrl":"media/photo_C57055BE_CEFB_A73E_41E5_E640B7565941_t.jpg","label":trans('photo_C57055BE_CEFB_A73E_41E5_E640B7565941.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-05 copy"},"image":{"levels":[{"url":"media/photo_C57055BE_CEFB_A73E_41E5_E640B7565941.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C57055BE_CEFB_A73E_41E5_E640B7565941"},{"fontSize":"14px","fontWeight":"bold","gap":5,"backgroundOpacity":0.5,"rollOverShadow":false,"textDecoration":"none","shadowSpread":1,"width":110,"layout":"horizontal","backgroundColorRatios":[0],"shadowColor":"#000000","data":{"name":"Button house info"},"id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","cursor":"hand","paddingLeft":0,"paddingTop":0,"borderRadius":0,"fontColor":"#FFFFFF","pressedBackgroundColor":["#333333"],"paddingBottom":0,"shadowBlurRadius":15,"paddingRight":0,"iconWidth":0,"top":"1%","pressedBackgroundColorRatios":[0],"horizontalAlign":"center","pressedRollOverBackgroundColorRatios":[0],"backgroundColorDirection":"vertical","rollOverBackgroundColorRatios":[0],"fontFamily":"Avenir Black","height":40,"verticalAlign":"middle","backgroundColor":["#666666"],"rollOverBackgroundColor":["#333333"],"pressedBackgroundOpacity":1,"click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","pressedRollOverBackgroundColor":["#333333"],"propagateClick":false,"mode":"push","iconBeforeLabel":true,"class":"Button","left":"1%","borderColor":"#000000","fontStyle":"normal","toolTipHorizontalAlign":"center","minHeight":1,"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"iconHeight":0,"minWidth":1,"shadow":false,"rollOverBackgroundOpacity":0.8,"borderSize":0},{"thumbnailUrl":"media/photo_C5959B43_CEFB_A346_41D4_87D6DDAAF2F1_t.jpg","label":trans('photo_C5959B43_CEFB_A346_41D4_87D6DDAAF2F1.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs-05"},"image":{"levels":[{"url":"media/photo_C5959B43_CEFB_A346_41D4_87D6DDAAF2F1.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5959B43_CEFB_A346_41D4_87D6DDAAF2F1"},{"gap":10,"backgroundOpacity":0,"data":{"name":"Container photo"},"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","horizontalAlign":"left","width":"100%","paddingLeft":0,"paddingTop":0,"contentOpaque":false,"borderRadius":0,"scrollBarVisible":"rollOver","children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"paddingBottom":0,"paddingRight":0,"overflow":"visible","verticalAlign":"top","height":"100%","scrollBarColor":"#000000","propagateClick":false,"class":"Container","layout":"absolute","scrollBarWidth":10,"toolTipHorizontalAlign":"center","minHeight":1,"scrollBarMargin":2,"minWidth":1,"shadow":false,"scrollBarOpacity":0,"borderSize":0},{"shadow":false,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesPaddingBottom":5,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"subtitlesTextShadowVerticalLength":1,"toolTipFontWeight":"normal","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"displayTooltipInSurfaceSelection":true,"playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"MainViewer","playbackBarHeadShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"playbackBarHeadHeight":15,"subtitlesTextDecoration":"none","paddingBottom":0,"progressBackgroundColorDirection":"vertical","paddingRight":0,"toolTipShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","translationTransitionDuration":1000,"playbackBarHeadShadowColor":"#000000","toolTipFontSize":"1.11vmin","progressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"progressBorderRadius":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"height":"100%","playbackBarHeadShadowOpacity":0.7,"toolTipShadowHorizontalLength":0,"subtitlesPaddingTop":5,"progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowOpacity":0,"playbackBarHeadOpacity":1,"propagateClick":false,"toolTipPaddingRight":6,"subtitlesShadow":false,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowSpread":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":0,"playbackBarOpacity":1,"class":"ViewerArea","transitionDuration":500,"displayTooltipInTouchScreens":true,"playbackBarBorderRadius":0,"subtitlesOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipHorizontalAlign":"center","minHeight":50,"subtitlesGap":0,"progressBackgroundColor":["#FFFFFF"],"minWidth":100,"subtitlesBackgroundColor":"#000000","progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"subtitlesHorizontalAlign":"center","borderSize":0,"surfaceReticleColor":"#FFFFFF","progressBottom":0,"toolTipDisplayTime":600,"playbackBarBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"borderRadius":0,"playbackBarHeadBorderColor":"#000000","progressHeight":10,"surfaceReticleOpacity":0.6,"playbackBarProgressOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"playbackBarHeight":10,"toolTipOpacity":1,"playbackBarBorderSize":0,"subtitlesEnabled":true,"vrPointerSelectionTime":2000,"toolTipBorderColor":"#767676","subtitlesFontColor":"#FFFFFF","progressBorderSize":0,"toolTipShadowColor":"#333333","subtitlesTop":0,"progressBackgroundOpacity":1,"surfaceReticleSelectionOpacity":1,"subtitlesFontWeight":"normal","subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","toolTipPaddingBottom":4,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipTextShadowBlurRadius":3,"toolTipBorderSize":1,"toolTipFontStyle":"normal","toolTipShadowVerticalLength":0,"toolTipPaddingTop":4,"progressRight":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"progressOpacity":1,"subtitlesPaddingLeft":5,"playbackBarProgressBorderSize":0,"subtitlesBottom":50,"transitionMode":"blending","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBarBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","playbackBarBackgroundOpacity":1},{"thumbnailUrl":"media/photo_C5700212_CEFB_BCC7_41D2_04AD9D19751D_t.jpg","label":trans('photo_C5700212_CEFB_BCC7_41D2_04AD9D19751D.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-02 copy"},"image":{"levels":[{"url":"media/photo_C5700212_CEFB_BCC7_41D2_04AD9D19751D.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5700212_CEFB_BCC7_41D2_04AD9D19751D"},{"thumbnailUrl":"media/photo_C265E6C0_CEFB_A543_41E2_1DE4BFCEFD13_t.jpg","label":trans('photo_C265E6C0_CEFB_A543_41E2_1DE4BFCEFD13.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs_1"},"image":{"levels":[{"url":"media/photo_C265E6C0_CEFB_A543_41E2_1DE4BFCEFD13.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C265E6C0_CEFB_A543_41E2_1DE4BFCEFD13"},{"thumbnailUrl":"media/photo_C59588D7_CEFB_AD4D_41D0_B27177E3CA3E_t.jpg","label":trans('photo_C59588D7_CEFB_AD4D_41D0_B27177E3CA3E.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs_3"},"image":{"levels":[{"url":"media/photo_C59588D7_CEFB_AD4D_41D0_B27177E3CA3E.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C59588D7_CEFB_AD4D_41D0_B27177E3CA3E"},{"thumbnailUrl":"media/photo_C57016F9_CEFB_A542_41E0_DCBA8AF9DAF1_t.jpg","label":trans('photo_C57016F9_CEFB_A542_41E0_DCBA8AF9DAF1.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-06 copy"},"image":{"levels":[{"url":"media/photo_C57016F9_CEFB_A542_41E0_DCBA8AF9DAF1.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C57016F9_CEFB_A542_41E0_DCBA8AF9DAF1"},{"thumbnailUrl":"media/photo_C57069AD_CEFB_AFDD_41C3_F20C746BD12A_t.jpg","label":trans('photo_C57069AD_CEFB_AFDD_41C3_F20C746BD12A.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-08 copy"},"image":{"levels":[{"url":"media/photo_C57069AD_CEFB_AFDD_41C3_F20C746BD12A.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C57069AD_CEFB_AFDD_41C3_F20C746BD12A"},{"thumbnailUrl":"media/photo_C595AD64_CEFB_A743_41C3_ADD763EE7D06_t.jpg","label":trans('photo_C595AD64_CEFB_A743_41C3_ADD763EE7D06.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs-07"},"image":{"levels":[{"url":"media/photo_C595AD64_CEFB_A743_41C3_ADD763EE7D06.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C595AD64_CEFB_A743_41C3_ADD763EE7D06"},{"shadow":false,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesPaddingBottom":5,"toolTipBackgroundColor":"#F6F6F6","doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"subtitlesTextShadowVerticalLength":1,"toolTipFontWeight":"normal","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Viewer photoalbum 1"},"displayTooltipInSurfaceSelection":true,"playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","playbackBarHeadShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"playbackBarHeadHeight":15,"subtitlesTextDecoration":"none","paddingBottom":0,"progressBackgroundColorDirection":"vertical","paddingRight":0,"toolTipShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","translationTransitionDuration":1000,"playbackBarHeadShadowColor":"#000000","toolTipFontSize":12,"progressBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBorderRadius":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"height":"100%","playbackBarHeadShadowOpacity":0.7,"toolTipShadowHorizontalLength":0,"subtitlesPaddingTop":5,"progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowOpacity":0,"playbackBarHeadOpacity":1,"propagateClick":false,"transitionDuration":500,"subtitlesShadow":false,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowSpread":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":0,"playbackBarOpacity":1,"class":"ViewerArea","toolTipPaddingRight":6,"displayTooltipInTouchScreens":true,"playbackBarBorderRadius":0,"subtitlesOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipHorizontalAlign":"center","minHeight":1,"subtitlesGap":0,"progressBackgroundColor":["#FFFFFF"],"minWidth":1,"subtitlesBackgroundColor":"#000000","progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"subtitlesHorizontalAlign":"center","borderSize":0,"surfaceReticleColor":"#FFFFFF","progressBottom":2,"toolTipDisplayTime":600,"playbackBarBottom":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"borderRadius":0,"playbackBarHeadBorderColor":"#000000","progressHeight":10,"surfaceReticleOpacity":0.6,"playbackBarProgressOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"playbackBarHeight":10,"toolTipOpacity":1,"playbackBarBorderSize":0,"subtitlesEnabled":true,"vrPointerSelectionTime":2000,"toolTipBorderColor":"#767676","subtitlesFontColor":"#FFFFFF","progressBorderSize":0,"top":"0%","toolTipShadowColor":"#333333","subtitlesTop":0,"progressBackgroundOpacity":1,"surfaceReticleSelectionOpacity":1,"subtitlesFontWeight":"normal","subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"progressBackgroundColorRatios":[0.01],"vrPointerColor":"#FFFFFF","show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_FA3E9DBC_F7B0_D784_41C3_1FC25B987E6E.set('selectedIndex', -1); }, this); this.playList_FA3E9DBC_F7B0_D784_41C3_1FC25B987E6E.set('selectedIndex', 0)","toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","toolTipPaddingBottom":4,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipTextShadowBlurRadius":3,"toolTipBorderSize":1,"toolTipFontStyle":"normal","toolTipShadowVerticalLength":0,"toolTipPaddingTop":4,"progressRight":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","left":"0%","transitionMode":"blending","subtitlesPaddingLeft":5,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressOpacity":1,"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBarBorderColor":"#0066FF","subtitlesBottom":50,"playbackBarBackgroundOpacity":1},{"thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png","label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"loop":false,"class":"PhotoAlbum","playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"},"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5"},{"thumbnailUrl":"media/photo_C5955C4C_CEFB_A542_41E3_6CD4C957C8F4_t.jpg","label":trans('photo_C5955C4C_CEFB_A542_41E3_6CD4C957C8F4.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs-06"},"image":{"levels":[{"url":"media/photo_C5955C4C_CEFB_A542_41E3_6CD4C957C8F4.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5955C4C_CEFB_A542_41E3_6CD4C957C8F4"},{"thumbnailUrl":"media/photo_C573B349_CEFB_A342_41D6_42E95EC46D74_t.jpg","label":trans('photo_C573B349_CEFB_A342_41D6_42E95EC46D74.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-03 copy"},"image":{"levels":[{"url":"media/photo_C573B349_CEFB_A342_41D6_42E95EC46D74.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C573B349_CEFB_A342_41D6_42E95EC46D74"},{"right":"0%","backgroundOpacity":0,"gap":10,"id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","horizontalAlign":"center","paddingLeft":0,"paddingTop":0,"contentOpaque":false,"borderRadius":0,"scrollBarVisible":"rollOver","children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"paddingBottom":0,"paddingRight":0,"data":{"name":"Global"},"top":"0%","bottom":"0%","overflow":"visible","verticalAlign":"top","scrollBarColor":"#000000","propagateClick":false,"class":"Container","left":"0%","layout":"vertical","scrollBarWidth":10,"toolTipHorizontalAlign":"center","minHeight":1,"scrollBarMargin":2,"minWidth":1,"shadow":false,"scrollBarOpacity":0,"borderSize":0},{"right":20,"backgroundOpacity":0,"cursor":"hand","data":{"name":"IconButton X"},"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","horizontalAlign":"right","width":"10%","paddingLeft":0,"paddingTop":0,"borderRadius":0,"paddingBottom":0,"paddingRight":0,"top":20,"verticalAlign":"top","transparencyActive":false,"height":"10%","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","propagateClick":true,"maxHeight":60,"maxWidth":60,"mode":"push","class":"IconButton","toolTipHorizontalAlign":"center","minHeight":50,"minWidth":50,"shadow":false,"borderSize":0},{"right":"1%","backgroundOpacity":0,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","visible":false,"cursor":"hand","data":{"name":"IconButton3189"},"id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","horizontalAlign":"center","width":"10%","paddingLeft":0,"paddingTop":0,"borderRadius":0,"paddingBottom":0,"paddingRight":0,"top":"1%","verticalAlign":"middle","transparencyActive":true,"height":"10%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","propagateClick":false,"mode":"push","class":"IconButton","toolTipHorizontalAlign":"center","minHeight":1,"minWidth":1,"shadow":false,"borderSize":0},{"thumbnailUrl":"media/photo_C5705AE5_CEFB_AD42_41B0_20763D34B2E4_t.jpg","label":trans('photo_C5705AE5_CEFB_AD42_41B0_20763D34B2E4.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-09 copy"},"image":{"levels":[{"url":"media/photo_C5705AE5_CEFB_AD42_41B0_20763D34B2E4.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C5705AE5_CEFB_AD42_41B0_20763D34B2E4"},{"thumbnailUrl":"media/photo_C2CE8FE6_CEFB_A34E_41D7_4CAFAFD72A88_t.jpg","label":trans('photo_C2CE8FE6_CEFB_A34E_41D7_4CAFAFD72A88.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-01 copy"},"image":{"levels":[{"url":"media/photo_C2CE8FE6_CEFB_A34E_41D7_4CAFAFD72A88.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C2CE8FE6_CEFB_A34E_41D7_4CAFAFD72A88"},{"duration":500,"easing":"linear","class":"FadeInEffect","id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C"},{"data":{"name":"IconButton <"},"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","cursor":"hand","id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","horizontalAlign":"center","width":"14.22%","paddingLeft":0,"paddingTop":0,"borderRadius":0,"paddingBottom":0,"paddingRight":0,"top":"20%","bottom":"20%","verticalAlign":"middle","transparencyActive":false,"propagateClick":true,"maxHeight":40,"maxWidth":40,"mode":"push","class":"IconButton","left":10,"toolTipHorizontalAlign":"center","minHeight":40,"minWidth":40,"shadow":false,"borderSize":0},{"thumbnailUrl":"media/photo_C59549E3_CEFB_AF46_41DF_DBBADD496745_t.jpg","label":trans('photo_C59549E3_CEFB_AF46_41DF_DBBADD496745.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HiluxGR_intr_ftrs_4"},"image":{"levels":[{"url":"media/photo_C59549E3_CEFB_AF46_41DF_DBBADD496745.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C59549E3_CEFB_AF46_41DF_DBBADD496745"},{"scrollBarOpacity":0.5,"right":"0%","backgroundOpacity":0.6,"backgroundColorRatios":[0,1],"gap":10,"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","horizontalAlign":"left","paddingLeft":0,"paddingTop":0,"contentOpaque":false,"borderRadius":0,"scrollBarVisible":"rollOver","children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"paddingBottom":0,"paddingRight":0,"data":{"name":"--PHOTOALBUM"},"top":"0%","bottom":"0%","overflow":"scroll","backgroundColorDirection":"vertical","verticalAlign":"top","backgroundColor":["#000000","#000000"],"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","scrollBarColor":"#000000","propagateClick":true,"class":"Container","left":"0%","scrollBarWidth":10,"toolTipHorizontalAlign":"center","minHeight":1,"layout":"absolute","scrollBarMargin":2,"minWidth":1,"shadow":false,"borderSize":0},{"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/photo_C573BD58_CEFB_A742_41D6_9B1CE31B7022_t.jpg","label":trans('photo_C573BD58_CEFB_A742_41D6_9B1CE31B7022.label'),"duration":5000,"height":768,"class":"Photo","width":1600,"data":{"label":"25_HilluxGR_Sfty_ftrs-11 copy"},"image":{"levels":[{"url":"media/photo_C573BD58_CEFB_A742_41D6_9B1CE31B7022.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_C573BD58_CEFB_A742_41D6_9B1CE31B7022"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C265E6C0_CEFB_A543_41E2_1DE4BFCEFD13"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C58B37DA_CEFB_A346_41E2_42736729F8CB"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C59588D7_CEFB_AD4D_41D0_B27177E3CA3E"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C59549E3_CEFB_AF46_41DF_DBBADD496745"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5959B43_CEFB_A346_41D4_87D6DDAAF2F1"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5955C4C_CEFB_A542_41E3_6CD4C957C8F4"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C595AD64_CEFB_A743_41C3_ADD763EE7D06"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C2CE8FE6_CEFB_A34E_41D7_4CAFAFD72A88"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5700212_CEFB_BCC7_41D2_04AD9D19751D"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C573B349_CEFB_A342_41D6_42E95EC46D74"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5706483_CEFB_A5C6_41E1_348D0B098CC7"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C57055BE_CEFB_A73E_41E5_E640B7565941"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C57016F9_CEFB_A542_41E0_DCBA8AF9DAF1"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C570484C_CEFB_AD42_41D2_F35F0E3F0896"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C57069AD_CEFB_AFDD_41C3_F20C746BD12A"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5705AE5_CEFB_AD42_41B0_20763D34B2E4"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5706C24_CEFB_A4C2_41E8_8999C5FF9671"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C573BD58_CEFB_A742_41D6_9B1CE31B7022"},{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"media":"this.photo_C5706E80_CEFB_A5C2_41D2_8F918551B03C"}],"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList"}],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"downloadEnabled":false,"backgroundPreloadEnabled":true,"id":"rootPlayer","horizontalAlign":"left","width":"100%","paddingLeft":0,"paddingTop":0,"defaultVRPointer":"laser","contentOpaque":false,"borderRadius":0,"scrollBarVisible":"rollOver","paddingBottom":0,"paddingRight":0,"mouseWheelEnabled":true,"overflow":"hidden","backgroundColorDirection":"vertical","children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"propagateClick":false,"scrollBarColor":"#000000","scripts":{"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"isPanorama":TDV.Tour.Script.isPanorama,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"getOverlays":TDV.Tour.Script.getOverlays,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeJS":TDV.Tour.Script.executeJS,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"setLocale":TDV.Tour.Script.setLocale,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentByName":TDV.Tour.Script.getComponentByName,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"resumePlayers":TDV.Tour.Script.resumePlayers,"translate":TDV.Tour.Script.translate,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"class":"Player","vrPolyfillScale":0.75,"start":"this.init()","scrollBarWidth":10,"mediaActivationMode":"window","toolTipHorizontalAlign":"center","minHeight":20,"layout":"absolute","scrollBarMargin":2,"minWidth":20,"shadow":false,"data":{"locales":{"en":"locale/en.txt"},"name":"Player852","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"initialScale":0.5,"defaultLocale":"en"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Fri Dec 9 2022