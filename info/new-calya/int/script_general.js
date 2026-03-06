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
var script = {"scrollBarOpacity":0.5,"verticalAlign":"top","horizontalAlign":"left","backgroundOpacity":1,"backgroundPreloadEnabled":true,"vrPolyfillScale":0.75,"scrollBarMargin":2,"paddingLeft":0,"scrollBarColor":"#000000","definitions": [{"top":"20%","horizontalAlign":"center","backgroundOpacity":0,"paddingLeft":0,"cursor":"hand","propagateClick":true,"paddingRight":0,"toolTipHorizontalAlign":"center","borderRadius":0,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","class":"IconButton","width":"14.22%","maxHeight":40,"maxWidth":40,"paddingTop":0,"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","minHeight":40,"paddingBottom":0,"minWidth":40,"shadow":false,"transparencyActive":false,"mode":"push","borderSize":0,"verticalAlign":"middle","bottom":"20%","right":10,"data":{"name":"IconButton >"}},{"top":"20%","horizontalAlign":"center","backgroundOpacity":0,"paddingLeft":0,"cursor":"hand","propagateClick":true,"paddingRight":0,"toolTipHorizontalAlign":"center","borderRadius":0,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","class":"IconButton","width":"14.22%","maxHeight":40,"maxWidth":40,"paddingTop":0,"id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","minHeight":40,"paddingBottom":0,"minWidth":40,"shadow":false,"transparencyActive":false,"mode":"push","borderSize":0,"left":10,"verticalAlign":"middle","bottom":"20%","data":{"name":"IconButton <"}},{"verticalAlign":"top","horizontalAlign":"left","backgroundOpacity":0,"scrollBarMargin":2,"paddingLeft":0,"scrollBarColor":"#000000","propagateClick":false,"paddingRight":0,"contentOpaque":false,"toolTipHorizontalAlign":"center","borderRadius":0,"layout":"absolute","class":"Container","width":"100%","overflow":"visible","children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"paddingTop":0,"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","gap":10,"minHeight":1,"paddingBottom":0,"minWidth":1,"scrollBarWidth":10,"shadow":false,"borderSize":0,"scrollBarVisible":"rollOver","data":{"name":"Container photo"},"scrollBarOpacity":0,"height":"100%"},{"label":trans('photo_E40256F1_F694_69B5_41EC_CB09FD3A7588.label'),"data":{"label":"17_calya_intr_ftrs_Artboard 2"},"thumbnailUrl":"media/photo_E40256F1_F694_69B5_41EC_CB09FD3A7588_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E40256F1_F694_69B5_41EC_CB09FD3A7588.jpg"}]},"height":768,"duration":5000,"id":"photo_E40256F1_F694_69B5_41EC_CB09FD3A7588","class":"Photo","width":1600},{"label":trans('photo_E7129089_F693_E855_41E3_E5707432154E.label'),"data":{"label":"17_Calya_sfty_ftrs-04"},"thumbnailUrl":"media/photo_E7129089_F693_E855_41E3_E5707432154E_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7129089_F693_E855_41E3_E5707432154E.jpg"}]},"height":768,"duration":5000,"id":"photo_E7129089_F693_E855_41E3_E5707432154E","class":"Photo","width":1600},{"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","class":"PhotoAlbumPlayer","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC"},{"label":trans('photo_E7C9A938_F694_78B3_41D3_241C6A7F2693.label'),"data":{"label":"17_calya_intr_ftrs_Artboard 4"},"thumbnailUrl":"media/photo_E7C9A938_F694_78B3_41D3_241C6A7F2693_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7C9A938_F694_78B3_41D3_241C6A7F2693.jpg"}]},"height":768,"duration":5000,"id":"photo_E7C9A938_F694_78B3_41D3_241C6A7F2693","class":"Photo","width":1600},{"label":trans('photo_E7127288_F693_E853_41EA_2AC96E3A3232.label'),"data":{"label":"17_Calya_sfty_ftrs-07"},"thumbnailUrl":"media/photo_E7127288_F693_E853_41EA_2AC96E3A3232_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7127288_F693_E853_41EA_2AC96E3A3232.jpg"}]},"height":768,"duration":5000,"id":"photo_E7127288_F693_E853_41EA_2AC96E3A3232","class":"Photo","width":1600},{"horizontalAlign":"center","data":{"name":"Button house info"},"iconWidth":0,"pressedBackgroundColor":["#333333"],"textDecoration":"none","backgroundOpacity":0.5,"pressedRollOverBackgroundColorRatios":[0],"paddingLeft":0,"fontWeight":"bold","cursor":"hand","shadowColor":"#000000","propagateClick":false,"pressedBackgroundColorRatios":[0],"paddingRight":0,"rollOverBackgroundOpacity":0.8,"fontSize":"14px","fontStyle":"normal","iconHeight":0,"backgroundColorRatios":[0],"pressedRollOverBackgroundColor":["#333333"],"fontFamily":"Avenir Black","toolTipHorizontalAlign":"center","borderRadius":0,"layout":"horizontal","pressedBackgroundOpacity":1,"class":"Button","width":110,"backgroundColor":["#666666"],"rollOverBackgroundColor":["#333333"],"shadowBlurRadius":15,"click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","paddingTop":0,"id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","backgroundColorDirection":"vertical","minHeight":1,"rollOverBackgroundColorRatios":[0],"paddingBottom":0,"minWidth":1,"shadow":false,"gap":5,"rollOverShadow":false,"mode":"push","borderSize":0,"left":"1%","borderColor":"#000000","top":"1%","iconBeforeLabel":true,"verticalAlign":"middle","height":40,"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"fontColor":"#FFFFFF","shadowSpread":1},{"playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","loop":false,"label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"},"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png","class":"PhotoAlbum"},{"label":trans('photo_E596BDDD_F693_DBED_41EB_6018865A44BA.label'),"data":{"label":"17_Calya_sfty_ftrs-01"},"thumbnailUrl":"media/photo_E596BDDD_F693_DBED_41EB_6018865A44BA_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E596BDDD_F693_DBED_41EB_6018865A44BA.jpg"}]},"height":768,"duration":5000,"id":"photo_E596BDDD_F693_DBED_41EB_6018865A44BA","class":"Photo","width":1600},{"subtitlesTextDecoration":"none","toolTipPaddingRight":6,"data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","toolTipPaddingTop":4,"progressBarOpacity":1,"playbackBarHeadShadowVerticalLength":0,"paddingLeft":0,"vrPointerSelectionColor":"#FF6600","progressBottom":0,"height":"100%","propagateClick":false,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"playbackBarProgressBorderSize":0,"paddingRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","progressBackgroundOpacity":1,"toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"progressHeight":10,"toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipHorizontalAlign":"center","progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"toolTipPaddingBottom":4,"playbackBarRight":0,"displayTooltipInTouchScreens":true,"toolTipPaddingLeft":6,"doubleClickAction":"toggle_fullscreen","subtitlesPaddingTop":5,"subtitlesShadow":false,"class":"ViewerArea","progressBarBorderRadius":0,"firstTransitionDuration":0,"subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"surfaceReticleOpacity":0.6,"paddingTop":0,"subtitlesOpacity":1,"minHeight":50,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"toolTipTextShadowOpacity":0,"paddingBottom":0,"minWidth":100,"playbackBarHeadShadowBlurRadius":3,"progressBarBorderSize":0,"subtitlesVerticalAlign":"bottom","subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"transitionDuration":500,"subtitlesHorizontalAlign":"center","toolTipFontColor":"#606060","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","translationTransitionDuration":1000,"subtitlesEnabled":true,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","playbackBarOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"progressOpacity":1,"subtitlesFontColor":"#FFFFFF","borderRadius":0,"playbackBarBottom":5,"progressBarBackgroundColorDirection":"vertical","toolTipShadowSpread":0,"progressBarBorderColor":"#000000","progressRight":0,"playbackBarHeadBorderRadius":0,"toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipOpacity":1,"progressLeft":0,"toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeight":10,"playbackBarBorderSize":0,"toolTipBorderRadius":3,"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowHorizontalLength":0,"shadow":false,"displayTooltipInSurfaceSelection":true,"subtitlesFontWeight":"normal","progressBorderColor":"#000000","borderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipBorderSize":1,"toolTipDisplayTime":600,"playbackBarHeadWidth":6,"subtitlesPaddingLeft":5,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingRight":5,"progressBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"transitionMode":"blending","toolTipShadowOpacity":1,"subtitlesTextShadowBlurRadius":0},{"label":trans('photo_E71291DE_F693_EBEF_41E0_A7245FD35B9D.label'),"data":{"label":"17_Calya_sfty_ftrs-06"},"thumbnailUrl":"media/photo_E71291DE_F693_EBEF_41E0_A7245FD35B9D_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E71291DE_F693_EBEF_41E0_A7245FD35B9D.jpg"}]},"height":768,"duration":5000,"id":"photo_E71291DE_F693_EBEF_41E0_A7245FD35B9D","class":"Photo","width":1600},{"scrollBarOpacity":0.5,"verticalAlign":"top","horizontalAlign":"left","backgroundOpacity":0.6,"scrollBarMargin":2,"paddingLeft":0,"scrollBarColor":"#000000","propagateClick":true,"paddingRight":0,"contentOpaque":false,"toolTipHorizontalAlign":"center","backgroundColorRatios":[0,1],"layout":"absolute","class":"Container","borderRadius":0,"overflow":"scroll","backgroundColor":["#000000","#000000"],"children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","paddingTop":0,"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","backgroundColorDirection":"vertical","minHeight":1,"paddingBottom":0,"minWidth":1,"shadow":false,"gap":10,"borderSize":0,"left":"0%","top":"0%","scrollBarWidth":10,"scrollBarVisible":"rollOver","bottom":"0%","right":"0%","data":{"name":"--PHOTOALBUM"}},{"toolTipPaddingRight":6,"data":{"name":"Viewer photoalbum 1"},"subtitlesFontFamily":"Arial","toolTipPaddingTop":4,"progressBarOpacity":1,"playbackBarHeadShadowVerticalLength":0,"paddingLeft":0,"vrPointerSelectionColor":"#FF6600","progressBottom":2,"height":"100%","propagateClick":false,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"playbackBarProgressBorderSize":0,"paddingRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","toolTipFontStyle":"normal","progressBackgroundOpacity":1,"toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"progressHeight":10,"toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipHorizontalAlign":"center","progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"toolTipPaddingBottom":4,"playbackBarRight":0,"displayTooltipInTouchScreens":true,"toolTipPaddingLeft":6,"doubleClickAction":"toggle_fullscreen","subtitlesPaddingTop":5,"subtitlesShadow":false,"class":"ViewerArea","progressBarBorderRadius":0,"firstTransitionDuration":0,"subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"surfaceReticleOpacity":0.6,"paddingTop":0,"subtitlesOpacity":1,"minHeight":1,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"toolTipTextShadowOpacity":0,"paddingBottom":0,"minWidth":1,"playbackBarHeadShadowBlurRadius":3,"progressBarBorderSize":0,"subtitlesVerticalAlign":"bottom","subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"transitionDuration":500,"subtitlesHorizontalAlign":"center","toolTipFontColor":"#606060","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"surfaceReticleSelectionOpacity":1,"top":"0%","playbackBarBorderColor":"#FFFFFF","translationTransitionDuration":1000,"subtitlesEnabled":true,"toolTipShadowColor":"#333333","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E0FB78FB_F69C_59B5_41EA_D890BD1EFDDC.set('selectedIndex', -1); }, this); this.playList_E0FB78FB_F69C_59B5_41EA_D890BD1EFDDC.set('selectedIndex', 0)","playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0.01],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"progressOpacity":1,"subtitlesFontColor":"#FFFFFF","borderRadius":0,"playbackBarBottom":0,"progressBarBackgroundColorDirection":"vertical","toolTipShadowSpread":0,"playbackBarProgressOpacity":1,"progressRight":0,"playbackBarHeadBorderRadius":0,"toolTipFontSize":12,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#0066FF","playbackBarProgressBackgroundColorDirection":"vertical","toolTipOpacity":1,"progressLeft":0,"toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeight":10,"playbackBarBorderSize":0,"toolTipBorderRadius":3,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","vrPointerColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowHorizontalLength":0,"shadow":false,"displayTooltipInSurfaceSelection":true,"subtitlesFontWeight":"normal","progressBorderColor":"#FFFFFF","borderSize":0,"left":"0%","toolTipBorderSize":1,"toolTipDisplayTime":600,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingRight":5,"progressBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"transitionMode":"blending","toolTipShadowOpacity":1,"subtitlesPaddingLeft":5,"subtitlesTextShadowBlurRadius":0},{"scrollBarOpacity":0,"verticalAlign":"top","horizontalAlign":"center","backgroundOpacity":0,"scrollBarMargin":2,"paddingLeft":0,"scrollBarColor":"#000000","propagateClick":false,"paddingRight":0,"contentOpaque":false,"toolTipHorizontalAlign":"center","borderRadius":0,"layout":"vertical","class":"Container","overflow":"visible","children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"paddingTop":0,"id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","gap":10,"minHeight":1,"paddingBottom":0,"minWidth":1,"scrollBarWidth":10,"shadow":false,"left":"0%","top":"0%","borderSize":0,"scrollBarVisible":"rollOver","bottom":"0%","right":"0%","data":{"name":"Global"}},{"height":"10%","horizontalAlign":"right","backgroundOpacity":0,"paddingLeft":0,"cursor":"hand","propagateClick":true,"paddingRight":0,"toolTipHorizontalAlign":"center","borderRadius":0,"class":"IconButton","width":"10%","maxHeight":60,"maxWidth":60,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","paddingTop":0,"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","minHeight":50,"paddingBottom":0,"minWidth":50,"shadow":false,"transparencyActive":false,"mode":"push","borderSize":0,"verticalAlign":"top","right":20,"top":20,"data":{"name":"IconButton X"}},{"label":trans('photo_E7C999F2_F694_7BB7_41B0_58ACF5242382.label'),"data":{"label":"17_calya_intr_ftrs-01"},"thumbnailUrl":"media/photo_E7C999F2_F694_7BB7_41B0_58ACF5242382_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7C999F2_F694_7BB7_41B0_58ACF5242382.jpg"}]},"height":768,"duration":5000,"id":"photo_E7C999F2_F694_7BB7_41B0_58ACF5242382","class":"Photo","width":1600},{"label":trans('photo_E707CF2E_F693_D8AF_41E8_794E56BA75C1.label'),"data":{"label":"17_Calya_sfty_ftrs-02"},"thumbnailUrl":"media/photo_E707CF2E_F693_D8AF_41E8_794E56BA75C1_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E707CF2E_F693_D8AF_41E8_794E56BA75C1.jpg"}]},"height":768,"duration":5000,"id":"photo_E707CF2E_F693_D8AF_41E8_794E56BA75C1","class":"Photo","width":1600},{"id":"playList_E0FB78FB_F69C_59B5_41EA_D890BD1EFDDC","items":[{"media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","class":"PhotoAlbumPlayListItem"}],"class":"PlayList"},{"label":trans('photo_E7124FE3_F693_D7D5_41D1_A8EDC79B1B82.label'),"data":{"label":"17_Calya_sfty_ftrs-03"},"thumbnailUrl":"media/photo_E7124FE3_F693_D7D5_41D1_A8EDC79B1B82_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7124FE3_F693_D7D5_41D1_A8EDC79B1B82.jpg"}]},"height":768,"duration":5000,"id":"photo_E7124FE3_F693_D7D5_41D1_A8EDC79B1B82","class":"Photo","width":1600},{"id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C","easing":"linear","class":"FadeInEffect","duration":500},{"id":"mainPlayList","class":"PlayList"},{"label":trans('photo_E7F7887A_F694_78B7_41E3_511B0CD5D095.label'),"data":{"label":"17_calya_intr_ftrs_Artboard 3"},"thumbnailUrl":"media/photo_E7F7887A_F694_78B7_41E3_511B0CD5D095_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7F7887A_F694_78B7_41E3_511B0CD5D095.jpg"}]},"height":768,"duration":5000,"id":"photo_E7F7887A_F694_78B7_41E3_511B0CD5D095","class":"Photo","width":1600},{"label":trans('photo_E7125134_F693_E8B3_41D6_6EC9B993AC25.label'),"data":{"label":"17_Calya_sfty_ftrs-05"},"thumbnailUrl":"media/photo_E7125134_F693_E8B3_41D6_6EC9B993AC25_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_E7125134_F693_E8B3_41D6_6EC9B993AC25.jpg"}]},"height":768,"duration":5000,"id":"photo_E7125134_F693_E8B3_41D6_6EC9B993AC25","class":"Photo","width":1600},{"height":"10%","horizontalAlign":"center","backgroundOpacity":0,"visible":false,"paddingLeft":0,"cursor":"hand","propagateClick":false,"paddingRight":0,"toolTipHorizontalAlign":"center","borderRadius":0,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","class":"IconButton","width":"10%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","paddingTop":0,"id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","minHeight":1,"paddingBottom":0,"minWidth":1,"shadow":false,"transparencyActive":true,"mode":"push","borderSize":0,"verticalAlign":"middle","right":"1%","top":"1%","data":{"name":"IconButton3189"}},{"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","items":[{"media":"this.photo_E7C999F2_F694_7BB7_41B0_58ACF5242382","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E40256F1_F694_69B5_41EC_CB09FD3A7588","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7F7887A_F694_78B7_41E3_511B0CD5D095","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7C9A938_F694_78B3_41D3_241C6A7F2693","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E596BDDD_F693_DBED_41EB_6018865A44BA","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E707CF2E_F693_D8AF_41E8_794E56BA75C1","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7124FE3_F693_D7D5_41D1_A8EDC79B1B82","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7129089_F693_E855_41E3_E5707432154E","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7125134_F693_E8B3_41D6_6EC9B993AC25","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E71291DE_F693_EBEF_41E0_A7245FD35B9D","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"},{"media":"this.photo_E7127288_F693_E853_41EA_2AC96E3A3232","camera":{"scaleMode":"fit_to_width","class":"PhotoCamera"},"class":"PhotoPlayListItem"}],"class":"PhotoPlayList"}],"propagateClick":false,"paddingRight":0,"downloadEnabled":false,"defaultVRPointer":"laser","backgroundColorRatios":[0],"contentOpaque":false,"toolTipHorizontalAlign":"center","borderRadius":0,"layout":"absolute","mouseWheelEnabled":true,"mediaActivationMode":"window","defaultMenu":["fullscreen","mute","rotation"],"class":"Player","width":"100%","overflow":"hidden","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"paddingTop":0,"id":"rootPlayer","backgroundColorDirection":"vertical","minHeight":20,"paddingBottom":0,"minWidth":20,"shadow":false,"gap":10,"borderSize":0,"scripts":{"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"executeJS":TDV.Tour.Script.executeJS,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"openLink":TDV.Tour.Script.openLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"existsKey":TDV.Tour.Script.existsKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupImage":TDV.Tour.Script.showPopupImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"historyGoForward":TDV.Tour.Script.historyGoForward,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByName":TDV.Tour.Script.getMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"translate":TDV.Tour.Script.translate,"quizShowScore":TDV.Tour.Script.quizShowScore,"clone":TDV.Tour.Script.clone},"start":"this.init()","scrollBarWidth":10,"scrollBarVisible":"rollOver","data":{"defaultLocale":"en","initialScale":0.5,"name":"Player852","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Fri Dec 9 2022