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
var script = {"start":"this.init()","horizontalAlign":"left","mediaActivationMode":"window","height":"100%","paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"definitions": [{"class":"Photo","label":trans('photo_C29347BE_D17F_A58E_41E9_670BCEB7E92D.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C29347BE_D17F_A58E_41E9_670BCEB7E92D.jpg"}]},"thumbnailUrl":"media/photo_C29347BE_D17F_A58E_41E9_670BCEB7E92D_t.jpg","height":756,"id":"photo_C29347BE_D17F_A58E_41E9_670BCEB7E92D","data":{"label":"22_GR86_Sfty_intrs-01"},"width":1600},{"class":"Photo","label":trans('photo_C230F03A_D17F_9A96_41C0_0DF1D3D5650C.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230F03A_D17F_9A96_41C0_0DF1D3D5650C.jpg"}]},"thumbnailUrl":"media/photo_C230F03A_D17F_9A96_41C0_0DF1D3D5650C_t.jpg","height":756,"id":"photo_C230F03A_D17F_9A96_41C0_0DF1D3D5650C","data":{"label":"22_GR86_Sfty_intrs-13"},"width":1600},{"class":"Photo","label":trans('photo_C230D8E2_D17F_ABB6_417C_5C67526A2A01.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230D8E2_D17F_ABB6_417C_5C67526A2A01.jpg"}]},"thumbnailUrl":"media/photo_C230D8E2_D17F_ABB6_417C_5C67526A2A01_t.jpg","height":756,"id":"photo_C230D8E2_D17F_ABB6_417C_5C67526A2A01","data":{"label":"22_GR86_Sfty_intrs-02"},"width":1600},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","horizontalAlign":"center","data":{"name":"IconButton3189"},"paddingLeft":0,"height":"10%","visible":false,"paddingRight":0,"cursor":"hand","transparencyActive":true,"width":"10%","class":"IconButton","propagateClick":false,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","minHeight":1,"id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","borderRadius":0,"minWidth":1,"borderSize":0,"mode":"push","paddingBottom":0,"shadow":false,"verticalAlign":"middle","right":"1%","top":"1%"},{"backgroundOpacity":0.6,"horizontalAlign":"left","data":{"name":"--PHOTOALBUM"},"borderRadius":0,"paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"backgroundColorRatios":[0,1],"paddingRight":0,"overflow":"scroll","layout":"absolute","class":"Container","backgroundColorDirection":"vertical","propagateClick":true,"toolTipHorizontalAlign":"center","backgroundColor":["#000000","#000000"],"children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"paddingTop":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","gap":10,"minHeight":1,"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","paddingBottom":0,"minWidth":1,"borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"shadow":false,"contentOpaque":false,"left":"0%","verticalAlign":"top","bottom":"0%","top":"0%","scrollBarMargin":2,"right":"0%"},{"class":"Photo","label":trans('photo_C25DC2C0_D17E_BFF2_41D2_9A15E3FCDBFD.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25DC2C0_D17E_BFF2_41D2_9A15E3FCDBFD.jpg"}]},"thumbnailUrl":"media/photo_C25DC2C0_D17E_BFF2_41D2_9A15E3FCDBFD_t.jpg","height":756,"id":"photo_C25DC2C0_D17E_BFF2_41D2_9A15E3FCDBFD","data":{"label":"22_GR86_Intr_ftrs-02"},"width":1600},{"class":"Photo","label":trans('photo_C230B0DF_D17F_9B8E_41DC_7387D6643D41.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230B0DF_D17F_9B8E_41DC_7387D6643D41.jpg"}]},"thumbnailUrl":"media/photo_C230B0DF_D17F_9B8E_41DC_7387D6643D41_t.jpg","height":756,"id":"photo_C230B0DF_D17F_9B8E_41DC_7387D6643D41","data":{"label":"22_GR86_Sfty_intrs-14"},"width":1600},{"duration":500,"class":"FadeInEffect","id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C","easing":"linear"},{"backgroundOpacity":0,"horizontalAlign":"center","data":{"name":"Global"},"paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingRight":0,"overflow":"visible","layout":"vertical","class":"Container","propagateClick":false,"toolTipHorizontalAlign":"center","children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"paddingTop":0,"gap":10,"minHeight":1,"id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","borderRadius":0,"minWidth":1,"borderSize":0,"scrollBarVisible":"rollOver","paddingBottom":0,"scrollBarOpacity":0,"shadow":false,"contentOpaque":false,"left":"0%","verticalAlign":"top","bottom":"0%","right":"0%","top":"0%","scrollBarMargin":2},{"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"subtitlesBorderSize":0,"paddingLeft":0,"height":"100%","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","paddingRight":0,"progressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","transitionDuration":500,"toolTipBackgroundColor":"#F6F6F6","progressRight":0,"subtitlesTextShadowOpacity":1,"playbackBarProgressOpacity":1,"progressOpacity":1,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","subtitlesEnabled":true,"progressBarBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"toolTipDisplayTime":600,"progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","progressBarBackgroundColorRatios":[0],"subtitlesPaddingLeft":5,"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","paddingTop":0,"toolTipOpacity":1,"transitionMode":"blending","minHeight":50,"toolTipFontSize":"1.11vmin","borderRadius":0,"minWidth":100,"toolTipShadowHorizontalLength":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingBottom":0,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBarOpacity":1,"subtitlesPaddingRight":5,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"progressBottom":0,"displayTooltipInSurfaceSelection":true,"playbackBarLeft":0,"toolTipFontStyle":"normal","subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"progressHeight":10,"playbackBarHeadShadowColor":"#000000","toolTipBorderRadius":3,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesPaddingBottom":5,"progressBarBorderRadius":0,"toolTipFontWeight":"normal","toolTipShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","progressBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionTime":2000,"playbackBarBottom":5,"playbackBarOpacity":1,"progressBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressLeft":0,"subtitlesBottom":50,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"propagateClick":false,"playbackBarHeight":10,"subtitlesShadow":false,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesPaddingTop":5,"toolTipPaddingRight":6,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesGap":0,"id":"MainViewer","surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"borderSize":0,"toolTipPaddingTop":4,"surfaceReticleOpacity":0.6,"playbackBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipShadowVerticalLength":0,"shadow":false,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowSpread":0,"toolTipPaddingBottom":4,"translationTransitionDuration":1000,"surfaceReticleSelectionColor":"#FFFFFF"},{"class":"Photo","label":trans('photo_C551F07E_D17E_BA8E_41E5_5CE0B4E55C92.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C551F07E_D17E_BA8E_41E5_5CE0B4E55C92.jpg"}]},"thumbnailUrl":"media/photo_C551F07E_D17E_BA8E_41E5_5CE0B4E55C92_t.jpg","height":756,"id":"photo_C551F07E_D17E_BA8E_41E5_5CE0B4E55C92","data":{"label":"22_GR86_Intr_ftrs-01"},"width":1600},{"class":"Photo","label":trans('photo_C25FC4F0_D17E_BB92_41E8_F6CAEB055361.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25FC4F0_D17E_BB92_41E8_F6CAEB055361.jpg"}]},"thumbnailUrl":"media/photo_C25FC4F0_D17E_BB92_41E8_F6CAEB055361_t.jpg","height":756,"id":"photo_C25FC4F0_D17E_BB92_41E8_F6CAEB055361","data":{"label":"22_GR86_Intr_ftrs-05"},"width":1600},{"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Viewer photoalbum 1"},"subtitlesBorderSize":0,"paddingLeft":0,"height":"100%","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","paddingRight":0,"progressBackgroundColorRatios":[0.01],"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","transitionDuration":500,"toolTipBackgroundColor":"#F6F6F6","progressRight":0,"subtitlesTextShadowOpacity":1,"playbackBarProgressOpacity":1,"progressOpacity":1,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","subtitlesEnabled":true,"progressBarBorderColor":"#0066FF","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"class":"ViewerArea","progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","progressBarBackgroundColorRatios":[0],"subtitlesPaddingLeft":5,"toolTipDisplayTime":600,"vrPointerSelectionColor":"#FF6600","paddingTop":0,"toolTipOpacity":1,"transitionMode":"blending","minHeight":1,"toolTipFontSize":12,"borderRadius":0,"minWidth":1,"toolTipShadowHorizontalLength":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingBottom":0,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"progressBottom":2,"displayTooltipInSurfaceSelection":true,"progressBarOpacity":1,"toolTipFontStyle":"normal","subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"progressHeight":10,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","toolTipBorderRadius":3,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesPaddingBottom":5,"progressBarBorderRadius":0,"toolTipFontWeight":"normal","toolTipShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","progressBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C9EDD8CA_D189_ABF6_41E5_99DEBA09268B.set('selectedIndex', -1); }, this); this.playList_C9EDD8CA_D189_ABF6_41E5_99DEBA09268B.set('selectedIndex', 0)","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"vrPointerSelectionTime":2000,"playbackBarBottom":0,"playbackBarOpacity":1,"top":"0%","progressBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressLeft":0,"subtitlesBottom":50,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"propagateClick":false,"playbackBarHeight":10,"subtitlesShadow":false,"toolTipHorizontalAlign":"center","subtitlesPaddingTop":5,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesGap":0,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"borderSize":0,"toolTipPaddingTop":4,"surfaceReticleOpacity":0.6,"playbackBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipShadowVerticalLength":0,"shadow":false,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"left":"0%","subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","playbackBarHeadShadowOpacity":0.7,"progressBackgroundOpacity":1,"toolTipShadowSpread":0,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingBottom":4,"translationTransitionDuration":1000,"surfaceReticleSelectionColor":"#FFFFFF"},{"class":"PlayList","id":"mainPlayList"},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","borderRadius":0,"paddingLeft":0,"paddingRight":0,"cursor":"hand","transparencyActive":false,"width":"14.22%","class":"IconButton","maxHeight":40,"propagateClick":true,"maxWidth":40,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":40,"id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","paddingBottom":0,"minWidth":40,"borderSize":0,"mode":"push","shadow":false,"left":10,"verticalAlign":"middle","bottom":"20%","top":"20%","horizontalAlign":"center","data":{"name":"IconButton <"}},{"class":"Photo","label":trans('photo_C25FE435_D17E_BA92_41A3_9EC0669A8135.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25FE435_D17E_BA92_41A3_9EC0669A8135.jpg"}]},"thumbnailUrl":"media/photo_C25FE435_D17E_BA92_41A3_9EC0669A8135_t.jpg","height":756,"id":"photo_C25FE435_D17E_BA92_41A3_9EC0669A8135","data":{"label":"22_GR86_Intr_ftrs-04"},"width":1600},{"class":"Photo","label":trans('photo_C230CD93_D17F_A596_41E1_852E6ED842C2.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230CD93_D17F_A596_41E1_852E6ED842C2.jpg"}]},"thumbnailUrl":"media/photo_C230CD93_D17F_A596_41E1_852E6ED842C2_t.jpg","height":756,"id":"photo_C230CD93_D17F_A596_41E1_852E6ED842C2","data":{"label":"22_GR86_Sfty_intrs-09"},"width":1600},{"class":"Photo","label":trans('photo_C230AB98_D17F_AD92_41C8_F38D7464A8D1.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230AB98_D17F_AD92_41C8_F38D7464A8D1.jpg"}]},"thumbnailUrl":"media/photo_C230AB98_D17F_AD92_41C8_F38D7464A8D1_t.jpg","height":756,"id":"photo_C230AB98_D17F_AD92_41C8_F38D7464A8D1","data":{"label":"22_GR86_Sfty_intrs-06"},"width":1600},{"class":"Photo","label":trans('photo_C230C98D_D17F_AD8D_41E7_FD62C4C26A9D.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230C98D_D17F_AD8D_41E7_FD62C4C26A9D.jpg"}]},"thumbnailUrl":"media/photo_C230C98D_D17F_AD8D_41E7_FD62C4C26A9D_t.jpg","height":756,"id":"photo_C230C98D_D17F_AD8D_41E7_FD62C4C26A9D","data":{"label":"22_GR86_Sfty_intrs-03"},"width":1600},{"class":"Photo","label":trans('photo_C2308F8F_D17F_A58E_41D4_6621374AFF25.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2308F8F_D17F_A58E_41D4_6621374AFF25.jpg"}]},"thumbnailUrl":"media/photo_C2308F8F_D17F_A58E_41D4_6621374AFF25_t.jpg","height":756,"id":"photo_C2308F8F_D17F_A58E_41D4_6621374AFF25","data":{"label":"22_GR86_Sfty_intrs-12"},"width":1600},{"viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","class":"PhotoAlbumPlayer","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC"},{"class":"PhotoAlbum","label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png","playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","loop":false,"data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"}},{"class":"Photo","label":trans('photo_C25FE381_D17E_BE72_41BC_9B9E995C471F.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25FE381_D17E_BE72_41BC_9B9E995C471F.jpg"}]},"thumbnailUrl":"media/photo_C25FE381_D17E_BE72_41BC_9B9E995C471F_t.jpg","height":756,"id":"photo_C25FE381_D17E_BE72_41BC_9B9E995C471F","data":{"label":"22_GR86_Intr_ftrs-03"},"width":1600},{"horizontalAlign":"left","height":"100%","paddingLeft":0,"scrollBarColor":"#000000","scrollBarWidth":10,"paddingRight":0,"overflow":"visible","layout":"absolute","width":"100%","class":"Container","propagateClick":false,"toolTipHorizontalAlign":"center","children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"paddingTop":0,"gap":10,"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","borderRadius":0,"minWidth":1,"borderSize":0,"minHeight":1,"scrollBarVisible":"rollOver","scrollBarOpacity":0,"shadow":false,"paddingBottom":0,"contentOpaque":false,"verticalAlign":"top","backgroundOpacity":0,"scrollBarMargin":2,"data":{"name":"Container photo"}},{"class":"Photo","label":trans('photo_C2308E3D_D17F_A692_41E9_04F48E775715.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2308E3D_D17F_A692_41E9_04F48E775715.jpg"}]},"thumbnailUrl":"media/photo_C2308E3D_D17F_A692_41E9_04F48E775715_t.jpg","height":756,"id":"photo_C2308E3D_D17F_A692_41E9_04F48E775715","data":{"label":"22_GR86_Sfty_intrs-10"},"width":1600},{"backgroundOpacity":0,"data":{"name":"IconButton X"},"paddingLeft":0,"height":"10%","paddingRight":0,"cursor":"hand","transparencyActive":false,"width":"10%","class":"IconButton","maxHeight":60,"propagateClick":true,"maxWidth":60,"toolTipHorizontalAlign":"center","paddingTop":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","minHeight":50,"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","paddingBottom":0,"minWidth":50,"borderSize":0,"mode":"push","shadow":false,"borderRadius":0,"verticalAlign":"top","right":20,"top":20,"horizontalAlign":"right"},{"backgroundOpacity":0,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","data":{"name":"IconButton >"},"paddingLeft":0,"paddingRight":0,"cursor":"hand","transparencyActive":false,"width":"14.22%","class":"IconButton","maxHeight":40,"propagateClick":true,"maxWidth":40,"toolTipHorizontalAlign":"center","paddingTop":0,"minHeight":40,"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","paddingBottom":0,"minWidth":40,"borderSize":0,"mode":"push","shadow":false,"borderRadius":0,"verticalAlign":"middle","bottom":"20%","right":10,"top":"20%","horizontalAlign":"center"},{"class":"Photo","label":trans('photo_C230FC40_D17F_AAF2_41E9_E2C762E0B4A8.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230FC40_D17F_AAF2_41E9_E2C762E0B4A8.jpg"}]},"thumbnailUrl":"media/photo_C230FC40_D17F_AAF2_41E9_E2C762E0B4A8_t.jpg","height":756,"id":"photo_C230FC40_D17F_AAF2_41E9_E2C762E0B4A8","data":{"label":"22_GR86_Sfty_intrs-07"},"width":1600},{"class":"PlayList","id":"playList_C9EDD8CA_D189_ABF6_41E5_99DEBA09268B","items":[{"media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer"}]},{"class":"Photo","label":trans('photo_C230CADF_D17F_AF8E_41DD_615405D1CD2C.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230CADF_D17F_AF8E_41DD_615405D1CD2C.jpg"}]},"thumbnailUrl":"media/photo_C230CADF_D17F_AF8E_41DD_615405D1CD2C_t.jpg","height":756,"id":"photo_C230CADF_D17F_AF8E_41DD_615405D1CD2C","data":{"label":"22_GR86_Sfty_intrs-05"},"width":1600},{"class":"Photo","label":trans('photo_C25FF5A9_D17E_A5B2_41C5_1577903DE4E2.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25FF5A9_D17E_A5B2_41C5_1577903DE4E2.jpg"}]},"thumbnailUrl":"media/photo_C25FF5A9_D17E_A5B2_41C5_1577903DE4E2_t.jpg","height":756,"id":"photo_C25FF5A9_D17E_A5B2_41C5_1577903DE4E2","data":{"label":"22_GR86_Intr_ftrs-06"},"width":1600},{"backgroundOpacity":0.5,"rollOverBackgroundColor":["#333333"],"data":{"name":"Button house info"},"pressedRollOverBackgroundColorRatios":[0],"borderRadius":0,"iconWidth":0,"paddingLeft":0,"shadowBlurRadius":15,"fontSize":"14px","shadowSpread":1,"shadowColor":"#000000","backgroundColorRatios":[0],"rollOverBackgroundOpacity":0.8,"paddingRight":0,"cursor":"hand","fontWeight":"bold","textDecoration":"none","fontFamily":"Avenir Black","pressedRollOverBackgroundColor":["#333333"],"pressedBackgroundColor":["#333333"],"pressedBackgroundColorRatios":[0],"fontStyle":"normal","layout":"horizontal","iconBeforeLabel":true,"pressedBackgroundOpacity":1,"class":"Button","backgroundColorDirection":"vertical","width":110,"propagateClick":false,"toolTipHorizontalAlign":"center","backgroundColor":["#666666"],"rollOverBackgroundColorRatios":[0],"paddingTop":0,"click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","gap":5,"minHeight":1,"id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","paddingBottom":0,"minWidth":1,"borderSize":0,"mode":"push","shadow":false,"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"rollOverShadow":false,"fontColor":"#FFFFFF","left":"1%","iconHeight":0,"borderColor":"#000000","verticalAlign":"middle","top":"1%","horizontalAlign":"center","height":40},{"class":"Photo","label":trans('photo_C230DEE6_D17F_A7BE_41A4_EEC060E9CAB6.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230DEE6_D17F_A7BE_41A4_EEC060E9CAB6.jpg"}]},"thumbnailUrl":"media/photo_C230DEE6_D17F_A7BE_41A4_EEC060E9CAB6_t.jpg","height":756,"id":"photo_C230DEE6_D17F_A7BE_41A4_EEC060E9CAB6","data":{"label":"22_GR86_Sfty_intrs-11"},"width":1600},{"class":"Photo","label":trans('photo_C25FC652_D17E_A696_41D6_5FA2B7AD20CC.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C25FC652_D17E_A696_41D6_5FA2B7AD20CC.jpg"}]},"thumbnailUrl":"media/photo_C25FC652_D17E_A696_41D6_5FA2B7AD20CC_t.jpg","height":756,"id":"photo_C25FC652_D17E_A696_41D6_5FA2B7AD20CC","data":{"label":"22_GR86_Intr_ftrs-07"},"width":1600},{"class":"Photo","label":trans('photo_C230BCE9_D17F_ABB2_41B4_5A7F0CDEC2B6.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230BCE9_D17F_ABB2_41B4_5A7F0CDEC2B6.jpg"}]},"thumbnailUrl":"media/photo_C230BCE9_D17F_ABB2_41B4_5A7F0CDEC2B6_t.jpg","height":756,"id":"photo_C230BCE9_D17F_ABB2_41B4_5A7F0CDEC2B6","data":{"label":"22_GR86_Sfty_intrs-08"},"width":1600},{"class":"Photo","label":trans('photo_C230BA33_D17F_AE96_41B2_38CEB7402912.label'),"duration":5000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C230BA33_D17F_AE96_41B2_38CEB7402912.jpg"}]},"thumbnailUrl":"media/photo_C230BA33_D17F_AE96_41B2_38CEB7402912_t.jpg","height":756,"id":"photo_C230BA33_D17F_AE96_41B2_38CEB7402912","data":{"label":"22_GR86_Sfty_intrs-04"},"width":1600},{"class":"PhotoPlayList","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","items":[{"media":"this.photo_C551F07E_D17E_BA8E_41E5_5CE0B4E55C92","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25DC2C0_D17E_BFF2_41D2_9A15E3FCDBFD","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25FE381_D17E_BE72_41BC_9B9E995C471F","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25FE435_D17E_BA92_41A3_9EC0669A8135","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25FC4F0_D17E_BB92_41E8_F6CAEB055361","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25FF5A9_D17E_A5B2_41C5_1577903DE4E2","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C25FC652_D17E_A696_41D6_5FA2B7AD20CC","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C29347BE_D17F_A58E_41E9_670BCEB7E92D","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230D8E2_D17F_ABB6_417C_5C67526A2A01","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230C98D_D17F_AD8D_41E7_FD62C4C26A9D","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230BA33_D17F_AE96_41B2_38CEB7402912","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230CADF_D17F_AF8E_41DD_615405D1CD2C","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230AB98_D17F_AD92_41C8_F38D7464A8D1","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230FC40_D17F_AAF2_41E9_E2C762E0B4A8","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230BCE9_D17F_ABB2_41B4_5A7F0CDEC2B6","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230CD93_D17F_A596_41E1_852E6ED842C2","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C2308E3D_D17F_A692_41E9_04F48E775715","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230DEE6_D17F_A7BE_41A4_EEC060E9CAB6","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C2308F8F_D17F_A58E_41D4_6621374AFF25","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230F03A_D17F_9A96_41C0_0DF1D3D5650C","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}},{"media":"this.photo_C230B0DF_D17F_9B8E_41DC_7387D6643D41","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"}}]}],"backgroundColorRatios":[0],"paddingRight":0,"mouseWheelEnabled":true,"overflow":"hidden","defaultVRPointer":"laser","scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"translate":TDV.Tour.Script.translate,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"isPanorama":TDV.Tour.Script.isPanorama,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initQuiz":TDV.Tour.Script.initQuiz,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"mixObject":TDV.Tour.Script.mixObject,"getMediaByName":TDV.Tour.Script.getMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"init":TDV.Tour.Script.init,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizFinish":TDV.Tour.Script.quizFinish,"downloadFile":TDV.Tour.Script.downloadFile,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward},"downloadEnabled":false,"layout":"absolute","mobileMipmappingEnabled":false,"backgroundColorDirection":"vertical","width":"100%","class":"Player","backgroundPreloadEnabled":true,"propagateClick":false,"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"paddingTop":0,"children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"gap":10,"minHeight":20,"id":"rootPlayer","paddingBottom":0,"minWidth":20,"borderSize":0,"scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"scrollBarOpacity":0.5,"shadow":false,"borderRadius":0,"contentOpaque":false,"verticalAlign":"top","backgroundOpacity":1,"scrollBarMargin":2,"data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player852","initialScale":0.5,"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"pitch":1,"speechOnTooltip":false,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.5.js.map
})();
//Generated with v2022.0.5, Fri Dec 2 2022