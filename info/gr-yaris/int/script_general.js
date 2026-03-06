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
var script = {"start":"this.init()","horizontalAlign":"left","mediaActivationMode":"window","height":"100%","paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"definitions": [{"backgroundOpacity":0.6,"horizontalAlign":"left","data":{"name":"--PHOTOALBUM"},"borderRadius":0,"paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"backgroundColorRatios":[0,1],"paddingRight":0,"overflow":"scroll","propagateClick":true,"layout":"absolute","class":"Container","backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColor":["#000000","#000000"],"children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"paddingTop":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","gap":10,"minHeight":1,"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","paddingBottom":0,"minWidth":1,"borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"shadow":false,"contentOpaque":false,"left":"0%","verticalAlign":"top","bottom":"0%","top":"0%","scrollBarMargin":2,"right":"0%"},{"class":"Photo","label":trans('photo_C78BBBAC_D0F1_1E64_41C3_6A3FEC674CB2.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C78BBBAC_D0F1_1E64_41C3_6A3FEC674CB2.jpg"}]},"thumbnailUrl":"media/photo_C78BBBAC_D0F1_1E64_41C3_6A3FEC674CB2_t.jpg","height":768,"id":"photo_C78BBBAC_D0F1_1E64_41C3_6A3FEC674CB2","data":{"label":"02_yaris_intr_ftrs_Artboard 4"},"width":1600},{"class":"Photo","label":trans('photo_C7BEA4ED_D0F1_2BE4_41E3_0D043C2290AD.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C7BEA4ED_D0F1_2BE4_41E3_0D043C2290AD.jpg"}]},"thumbnailUrl":"media/photo_C7BEA4ED_D0F1_2BE4_41E3_0D043C2290AD_t.jpg","height":768,"id":"photo_C7BEA4ED_D0F1_2BE4_41E3_0D043C2290AD","data":{"label":"02_Yaris_sfty_ftrs-02"},"width":1600},{"class":"Photo","label":trans('photo_C78BCD19_D0F1_1A2C_41DC_3B94A73EFADC.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C78BCD19_D0F1_1A2C_41DC_3B94A73EFADC.jpg"}]},"thumbnailUrl":"media/photo_C78BCD19_D0F1_1A2C_41DC_3B94A73EFADC_t.jpg","height":768,"id":"photo_C78BCD19_D0F1_1A2C_41DC_3B94A73EFADC","data":{"label":"02_yaris_intr_ftrs-01"},"width":1600},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","transparencyActive":false,"propagateClick":true,"width":"14.22%","class":"IconButton","maxHeight":40,"maxWidth":40,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":40,"id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","paddingBottom":0,"minWidth":40,"borderSize":0,"mode":"push","shadow":false,"left":10,"verticalAlign":"middle","bottom":"20%","top":"20%","horizontalAlign":"center","data":{"name":"IconButton <"}},{"backgroundOpacity":0,"data":{"name":"IconButton X"},"paddingLeft":0,"height":"10%","paddingRight":0,"cursor":"hand","transparencyActive":false,"propagateClick":true,"width":"10%","class":"IconButton","maxHeight":60,"maxWidth":60,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","minHeight":50,"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","paddingBottom":0,"minWidth":50,"borderSize":0,"mode":"push","shadow":false,"borderRadius":0,"verticalAlign":"top","right":20,"top":20,"horizontalAlign":"right"},{"class":"PhotoAlbum","label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png","playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","loop":false,"data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"}},{"horizontalAlign":"left","height":"100%","paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingRight":0,"overflow":"visible","propagateClick":false,"layout":"absolute","width":"100%","class":"Container","toolTipHorizontalAlign":"center","children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"paddingTop":0,"gap":10,"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","borderRadius":0,"minWidth":1,"borderSize":0,"minHeight":1,"scrollBarVisible":"rollOver","scrollBarOpacity":0,"shadow":false,"paddingBottom":0,"contentOpaque":false,"verticalAlign":"top","backgroundOpacity":0,"scrollBarMargin":2,"data":{"name":"Container photo"}},{"duration":500,"class":"FadeInEffect","id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C","easing":"linear"},{"class":"Photo","label":trans('photo_C8DFC3E1_D0F1_2E1C_41E9_4C2319DF99EA.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C8DFC3E1_D0F1_2E1C_41E9_4C2319DF99EA.jpg"}]},"thumbnailUrl":"media/photo_C8DFC3E1_D0F1_2E1C_41E9_4C2319DF99EA_t.jpg","height":768,"id":"photo_C8DFC3E1_D0F1_2E1C_41E9_4C2319DF99EA","data":{"label":"02_Yaris_sfty_ftrs-01"},"width":1600},{"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"subtitlesBorderSize":0,"paddingLeft":0,"height":"100%","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","paddingRight":0,"progressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","transitionDuration":500,"toolTipBackgroundColor":"#F6F6F6","progressRight":0,"subtitlesTextShadowOpacity":1,"progressBackgroundOpacity":1,"propagateClick":false,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"progressOpacity":1,"subtitlesEnabled":true,"progressBarBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesFontWeight":"normal","toolTipDisplayTime":600,"progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","progressBarBackgroundColorRatios":[0],"subtitlesPaddingLeft":5,"subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","paddingTop":0,"toolTipOpacity":1,"transitionMode":"blending","minHeight":50,"toolTipFontSize":"1.11vmin","borderRadius":0,"minWidth":100,"toolTipShadowHorizontalLength":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingBottom":0,"displayTooltipInTouchScreens":true,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowVerticalLength":0,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBarOpacity":1,"subtitlesPaddingRight":5,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"progressBottom":0,"displayTooltipInSurfaceSelection":true,"playbackBarLeft":0,"toolTipFontStyle":"normal","subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"progressHeight":10,"playbackBarHeadShadowColor":"#000000","toolTipBorderRadius":3,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesPaddingBottom":5,"progressBarBorderRadius":0,"toolTipFontWeight":"normal","toolTipShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","progressBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionTime":2000,"playbackBarBottom":5,"playbackBarOpacity":1,"progressBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressLeft":0,"subtitlesBottom":50,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesPaddingTop":5,"playbackBarHeight":10,"subtitlesShadow":false,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesGap":0,"id":"MainViewer","surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"borderSize":0,"toolTipPaddingTop":4,"surfaceReticleOpacity":0.6,"playbackBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipShadowVerticalLength":0,"shadow":false,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"translationTransitionDuration":1000,"surfaceReticleSelectionColor":"#FFFFFF"},{"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Viewer photoalbum 1"},"subtitlesBorderSize":0,"paddingLeft":0,"height":"100%","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","paddingRight":0,"progressBackgroundColorRatios":[0.01],"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","transitionDuration":500,"toolTipBackgroundColor":"#F6F6F6","progressRight":0,"subtitlesTextShadowOpacity":1,"progressBackgroundOpacity":1,"propagateClick":false,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"progressOpacity":1,"subtitlesEnabled":true,"progressBarBorderColor":"#0066FF","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesFontWeight":"normal","class":"ViewerArea","progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","progressBarBackgroundColorRatios":[0],"subtitlesPaddingLeft":5,"subtitlesTextShadowHorizontalLength":1,"toolTipDisplayTime":600,"vrPointerSelectionColor":"#FF6600","paddingTop":0,"toolTipOpacity":1,"transitionMode":"blending","minHeight":1,"toolTipFontSize":12,"borderRadius":0,"minWidth":1,"toolTipShadowHorizontalLength":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingBottom":0,"displayTooltipInTouchScreens":true,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowVerticalLength":0,"progressBorderColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"progressBottom":2,"displayTooltipInSurfaceSelection":true,"progressBarOpacity":1,"toolTipFontStyle":"normal","subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"progressHeight":10,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","toolTipBorderRadius":3,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesPaddingBottom":5,"progressBarBorderRadius":0,"toolTipFontWeight":"normal","toolTipShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","progressBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CB2CDB1C_D0F3_1E24_41E2_1C39068089D1.set('selectedIndex', -1); }, this); this.playList_CB2CDB1C_D0F3_1E24_41E2_1C39068089D1.set('selectedIndex', 0)","playbackBarHeadBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionTime":2000,"playbackBarBottom":0,"playbackBarOpacity":1,"top":"0%","progressBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressLeft":0,"subtitlesBottom":50,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesPaddingTop":5,"playbackBarHeight":10,"subtitlesShadow":false,"toolTipHorizontalAlign":"center","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesGap":0,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"borderSize":0,"toolTipPaddingTop":4,"surfaceReticleOpacity":0.6,"playbackBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipShadowVerticalLength":0,"shadow":false,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"left":"0%","subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"translationTransitionDuration":1000,"surfaceReticleSelectionColor":"#FFFFFF"},{"class":"Photo","label":trans('photo_C7B3A637_D0F1_3664_41D0_0C3E2801C851.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C7B3A637_D0F1_3664_41D0_0C3E2801C851.jpg"}]},"thumbnailUrl":"media/photo_C7B3A637_D0F1_3664_41D0_0C3E2801C851_t.jpg","height":768,"id":"photo_C7B3A637_D0F1_3664_41D0_0C3E2801C851","data":{"label":"02_Yaris_sfty_ftrs-04"},"width":1600},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","horizontalAlign":"center","data":{"name":"IconButton3189"},"paddingLeft":0,"height":"10%","visible":false,"paddingRight":0,"cursor":"hand","transparencyActive":true,"propagateClick":false,"width":"10%","class":"IconButton","toolTipHorizontalAlign":"center","paddingTop":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","minHeight":1,"id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","borderRadius":0,"minWidth":1,"borderSize":0,"mode":"push","paddingBottom":0,"shadow":false,"verticalAlign":"middle","right":"1%","top":"1%"},{"class":"Photo","label":trans('photo_C7DF1882_D0F1_1A1C_41D4_F6560FECB082.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C7DF1882_D0F1_1A1C_41D4_F6560FECB082.jpg"}]},"thumbnailUrl":"media/photo_C7DF1882_D0F1_1A1C_41D4_F6560FECB082_t.jpg","height":768,"id":"photo_C7DF1882_D0F1_1A1C_41D4_F6560FECB082","data":{"label":"02_yaris_intr_ftrs_Artboard 2"},"width":1600},{"class":"PlayList","id":"playList_CB2CDB1C_D0F3_1E24_41E2_1C39068089D1","items":[{"media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer"}]},{"backgroundOpacity":0.5,"rollOverBackgroundColor":["#333333"],"data":{"name":"Button house info"},"pressedRollOverBackgroundColorRatios":[0],"borderRadius":0,"iconWidth":0,"paddingLeft":0,"shadowBlurRadius":15,"fontSize":"14px","shadowSpread":1,"shadowColor":"#000000","backgroundColorRatios":[0],"rollOverBackgroundOpacity":0.8,"paddingRight":0,"cursor":"hand","fontWeight":"bold","textDecoration":"none","fontFamily":"Avenir Black","pressedRollOverBackgroundColor":["#333333"],"pressedBackgroundColor":["#333333"],"propagateClick":false,"fontStyle":"normal","layout":"horizontal","iconBeforeLabel":true,"pressedBackgroundColorRatios":[0],"pressedBackgroundOpacity":1,"class":"Button","backgroundColorDirection":"vertical","width":110,"toolTipHorizontalAlign":"center","backgroundColor":["#666666"],"rollOverBackgroundColorRatios":[0],"paddingTop":0,"click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","gap":5,"minHeight":1,"id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","paddingBottom":0,"minWidth":1,"borderSize":0,"mode":"push","shadow":false,"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"rollOverShadow":false,"fontColor":"#FFFFFF","left":"1%","iconHeight":0,"borderColor":"#000000","verticalAlign":"middle","top":"1%","horizontalAlign":"center","height":40},{"backgroundOpacity":0,"horizontalAlign":"center","data":{"name":"Global"},"paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingRight":0,"overflow":"visible","propagateClick":false,"layout":"vertical","class":"Container","toolTipHorizontalAlign":"center","children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"paddingTop":0,"gap":10,"minHeight":1,"id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","borderRadius":0,"minWidth":1,"borderSize":0,"scrollBarVisible":"rollOver","paddingBottom":0,"scrollBarOpacity":0,"shadow":false,"contentOpaque":false,"left":"0%","verticalAlign":"top","bottom":"0%","right":"0%","top":"0%","scrollBarMargin":2},{"class":"Photo","label":trans('photo_C7894AE8_D0F1_1FEC_41DF_6AC9325FF562.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C7894AE8_D0F1_1FEC_41DF_6AC9325FF562.jpg"}]},"thumbnailUrl":"media/photo_C7894AE8_D0F1_1FEC_41DF_6AC9325FF562_t.jpg","height":768,"id":"photo_C7894AE8_D0F1_1FEC_41DF_6AC9325FF562","data":{"label":"02_yaris_intr_ftrs_Artboard 3"},"width":1600},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","data":{"name":"IconButton >"},"paddingLeft":0,"paddingRight":0,"cursor":"hand","transparencyActive":false,"propagateClick":true,"width":"14.22%","class":"IconButton","maxHeight":40,"maxWidth":40,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":40,"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","paddingBottom":0,"minWidth":40,"borderSize":0,"mode":"push","shadow":false,"borderRadius":0,"verticalAlign":"middle","bottom":"20%","right":10,"top":"20%","horizontalAlign":"center"},{"viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","class":"PhotoAlbumPlayer","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC"},{"class":"PlayList","id":"mainPlayList"},{"class":"Photo","label":trans('photo_C7B39590_D0F1_2A3C_41D4_AC2E7BD59F72.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C7B39590_D0F1_2A3C_41D4_AC2E7BD59F72.jpg"}]},"thumbnailUrl":"media/photo_C7B39590_D0F1_2A3C_41D4_AC2E7BD59F72_t.jpg","height":768,"id":"photo_C7B39590_D0F1_2A3C_41D4_AC2E7BD59F72","data":{"label":"02_Yaris_sfty_ftrs-03"},"width":1600},{"class":"Photo","label":trans('photo_C78BAC5F_D0F1_1A24_41E7_F72BE220B83E.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C78BAC5F_D0F1_1A24_41E7_F72BE220B83E.jpg"}]},"thumbnailUrl":"media/photo_C78BAC5F_D0F1_1A24_41E7_F72BE220B83E_t.jpg","height":768,"id":"photo_C78BAC5F_D0F1_1A24_41E7_F72BE220B83E","data":{"label":"02_yaris_intr_ftrs_Artboard 5"},"width":1600},{"class":"PhotoPlayList","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","items":[{"media":"this.photo_C7DF1882_D0F1_1A1C_41D4_F6560FECB082","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C7894AE8_D0F1_1FEC_41DF_6AC9325FF562","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C78BBBAC_D0F1_1E64_41C3_6A3FEC674CB2","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C78BAC5F_D0F1_1A24_41E7_F72BE220B83E","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C78BCD19_D0F1_1A2C_41DC_3B94A73EFADC","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C8DFC3E1_D0F1_2E1C_41E9_4C2319DF99EA","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C7BEA4ED_D0F1_2BE4_41E3_0D043C2290AD","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C7B39590_D0F1_2A3C_41D4_AC2E7BD59F72","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C7B3A637_D0F1_3664_41D0_0C3E2801C851","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}}]}],"backgroundColorRatios":[0],"paddingRight":0,"mouseWheelEnabled":true,"overflow":"hidden","defaultVRPointer":"laser","propagateClick":false,"downloadEnabled":false,"layout":"absolute","mobileMipmappingEnabled":false,"scripts":{"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"shareSocial":TDV.Tour.Script.shareSocial,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"openLink":TDV.Tour.Script.openLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"registerKey":TDV.Tour.Script.registerKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"existsKey":TDV.Tour.Script.existsKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizStart":TDV.Tour.Script.quizStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"setValue":TDV.Tour.Script.setValue,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setLocale":TDV.Tour.Script.setLocale,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"clone":TDV.Tour.Script.clone,"translate":TDV.Tour.Script.translate,"cloneCamera":TDV.Tour.Script.cloneCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively},"backgroundColorDirection":"vertical","width":"100%","class":"Player","backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"paddingTop":0,"children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"gap":10,"minHeight":20,"id":"rootPlayer","paddingBottom":0,"minWidth":20,"borderSize":0,"scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"scrollBarOpacity":0.5,"shadow":false,"borderRadius":0,"contentOpaque":false,"verticalAlign":"top","backgroundOpacity":1,"scrollBarMargin":2,"data":{"locales":{"en":"locale/en.txt"},"name":"Player852","defaultLocale":"en","initialScale":0.5,"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"pitch":1,"speechOnTooltip":false,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.5.js.map
})();
//Generated with v2022.0.5, Fri Dec 2 2022