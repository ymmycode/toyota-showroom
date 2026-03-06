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
var script = {"propagateClick":false,"backgroundColorDirection":"vertical","vrPolyfillScale":0.75,"borderSize":0,"backgroundOpacity":1,"shadow":false,"defaultVRPointer":"laser","gap":10,"paddingLeft":0,"paddingTop":0,"definitions": [{"class":"FadeInEffect","easing":"linear","duration":500,"id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C"},{"class":"Photo","duration":5000,"label":trans('photo_C20A7561_CEFB_A742_41E7_3EF4B55E0620.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C20A7561_CEFB_A742_41E7_3EF4B55E0620_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-10"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C20A7561_CEFB_A742_41E7_3EF4B55E0620.jpg"}]},"id":"photo_C20A7561_CEFB_A742_41E7_3EF4B55E0620"},{"propagateClick":false,"playbackBarHeadShadow":true,"borderSize":0,"data":{"name":"Viewer photoalbum 1"},"subtitlesTextShadowBlurRadius":0,"toolTipFontColor":"#606060","toolTipBorderRadius":3,"subtitlesEnabled":true,"subtitlesPaddingTop":5,"progressHeight":10,"width":"100%","subtitlesOpacity":1,"playbackBarBorderColor":"#FFFFFF","paddingLeft":0,"playbackBarBorderRadius":0,"transitionMode":"blending","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","playbackBarOpacity":1,"subtitlesTop":0,"subtitlesShadow":false,"progressBottom":2,"paddingRight":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBorderSize":0,"toolTipPaddingBottom":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":0,"toolTipDisplayTime":600,"playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"subtitlesHorizontalAlign":"center","progressBarBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"playbackBarHeadOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0.01],"toolTipOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadBorderColor":"#000000","subtitlesBorderSize":0,"playbackBarProgressOpacity":1,"progressBarBorderSize":0,"progressRight":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderSize":0,"toolTipShadowVerticalLength":0,"vrPointerSelectionTime":2000,"progressOpacity":1,"subtitlesFontColor":"#FFFFFF","surfaceReticleOpacity":0.6,"progressBarBackgroundColorDirection":"vertical","toolTipFontSize":12,"height":"100%","displayTooltipInSurfaceSelection":true,"playbackBarHeight":10,"progressBarBorderColor":"#0066FF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontStyle":"normal","surfaceReticleSelectionOpacity":1,"transitionDuration":500,"minHeight":1,"playbackBarHeadWidth":6,"minWidth":1,"playbackBarHeadBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"subtitlesFontSize":"3vmin","toolTipShadowBlurRadius":3,"progressBarBackgroundColorRatios":[0],"toolTipFontWeight":"normal","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F8F1A1C9_F6EF_D7B8_41B6_304B12C6759A.set('selectedIndex', -1); }, this); this.playList_F8F1A1C9_F6EF_D7B8_41B6_304B12C6759A.set('selectedIndex', 0)","toolTipBorderSize":1,"playbackBarRight":0,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"subtitlesPaddingBottom":5,"firstTransitionDuration":0,"subtitlesPaddingLeft":5,"toolTipBorderColor":"#767676","subtitlesFontWeight":"normal","progressBackgroundColorDirection":"vertical","paddingTop":0,"subtitlesBottom":50,"borderRadius":0,"playbackBarHeadShadowVerticalLength":0,"paddingBottom":0,"toolTipTextShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"progressBorderRadius":0,"playbackBarBackgroundOpacity":1,"top":"0%","toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"class":"ViewerArea","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesTextDecoration":"none","toolTipShadowSpread":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"translationTransitionDuration":1000,"toolTipTextShadowColor":"#000000","progressBorderColor":"#FFFFFF","toolTipShadowColor":"#333333","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingRight":6,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"left":"0%","progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":0,"playbackBarHeadShadowColor":"#000000","shadow":false,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"displayTooltipInTouchScreens":true,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontFamily":"Arial"},{"propagateClick":true,"borderSize":0,"right":10,"backgroundOpacity":0,"cursor":"hand","width":"14.22%","paddingLeft":0,"paddingTop":0,"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","data":{"name":"IconButton >"},"paddingRight":0,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","borderRadius":0,"paddingBottom":0,"top":"20%","bottom":"20%","class":"IconButton","toolTipHorizontalAlign":"center","transparencyActive":false,"horizontalAlign":"center","verticalAlign":"middle","maxHeight":40,"maxWidth":40,"mode":"push","minHeight":40,"minWidth":40,"shadow":false},{"class":"Photo","duration":5000,"label":trans('photo_C20AA6B4_CEFB_A5C2_41CF_FA0C67C68ADF.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C20AA6B4_CEFB_A5C2_41CF_FA0C67C68ADF_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-11"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C20AA6B4_CEFB_A5C2_41CF_FA0C67C68ADF.jpg"}]},"id":"photo_C20AA6B4_CEFB_A5C2_41CF_FA0C67C68ADF"},{"class":"PhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer"},{"class":"Photo","duration":5000,"label":trans('photo_FA9FF382_F6E8_7BA8_41B7_56D7213B6586.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_FA9FF382_F6E8_7BA8_41B7_56D7213B6586_t.jpg","data":{"label":"24_BZ4X_intr_ftrs_2"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_FA9FF382_F6E8_7BA8_41B7_56D7213B6586.jpg"}]},"id":"photo_FA9FF382_F6E8_7BA8_41B7_56D7213B6586"},{"propagateClick":true,"backgroundColorDirection":"vertical","borderSize":0,"right":"0%","backgroundOpacity":0.6,"gap":10,"paddingLeft":0,"children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"paddingTop":0,"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","paddingBottom":0,"data":{"name":"--PHOTOALBUM"},"paddingRight":0,"scrollBarVisible":"rollOver","borderRadius":0,"top":"0%","bottom":"0%","scrollBarOpacity":0.5,"class":"Container","layout":"absolute","toolTipHorizontalAlign":"center","backgroundColor":["#000000","#000000"],"horizontalAlign":"left","backgroundColorRatios":[0,1],"scrollBarWidth":10,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","verticalAlign":"top","overflow":"scroll","scrollBarColor":"#000000","scrollBarMargin":2,"left":"0%","minHeight":1,"contentOpaque":false,"minWidth":1,"shadow":false},{"class":"Photo","duration":5000,"label":trans('photo_FA99C580_F6E8_7FA8_41E2_77E8EB6C1DC1.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_FA99C580_F6E8_7FA8_41E2_77E8EB6C1DC1_t.jpg","data":{"label":"24_BZ4X_intr_ftrs_4"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_FA99C580_F6E8_7FA8_41E2_77E8EB6C1DC1.jpg"}]},"id":"photo_FA99C580_F6E8_7FA8_41E2_77E8EB6C1DC1"},{"class":"Photo","duration":5000,"label":trans('photo_C2099F23_CEF8_64C5_41D6_DCB92F4EF63B.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C2099F23_CEF8_64C5_41D6_DCB92F4EF63B_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-06"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2099F23_CEF8_64C5_41D6_DCB92F4EF63B.jpg"}]},"id":"photo_C2099F23_CEF8_64C5_41D6_DCB92F4EF63B"},{"class":"Photo","duration":5000,"label":trans('photo_C2097D7E_CEF8_673F_41E3_AC4045D41679.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C2097D7E_CEF8_673F_41E3_AC4045D41679_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-05"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2097D7E_CEF8_673F_41E3_AC4045D41679.jpg"}]},"id":"photo_C2097D7E_CEF8_673F_41E3_AC4045D41679"},{"class":"Photo","duration":5000,"label":trans('photo_FB35C279_F6E8_7558_41E3_F772683DC3A9.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_FB35C279_F6E8_7558_41E3_F772683DC3A9_t.jpg","data":{"label":"24_BZ4X_intr_ftrs_1"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_FB35C279_F6E8_7558_41E3_F772683DC3A9.jpg"}]},"id":"photo_FB35C279_F6E8_7558_41E3_F772683DC3A9"},{"class":"Photo","duration":5000,"label":trans('photo_FA991470_F6E8_7D68_41D4_A86B115D80C4.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_FA991470_F6E8_7D68_41D4_A86B115D80C4_t.jpg","data":{"label":"24_BZ4X_intr_ftrs_3"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_FA991470_F6E8_7D68_41D4_A86B115D80C4.jpg"}]},"id":"photo_FA991470_F6E8_7D68_41D4_A86B115D80C4"},{"propagateClick":true,"borderSize":0,"shadow":false,"backgroundOpacity":0,"data":{"name":"IconButton <"},"cursor":"hand","width":"14.22%","paddingLeft":0,"paddingTop":0,"id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","paddingRight":0,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","borderRadius":0,"paddingBottom":0,"top":"20%","bottom":"20%","class":"IconButton","toolTipHorizontalAlign":"center","transparencyActive":false,"horizontalAlign":"center","verticalAlign":"middle","maxHeight":40,"maxWidth":40,"mode":"push","left":10,"minHeight":40,"minWidth":40},{"class":"Photo","duration":5000,"label":trans('photo_C20A626F_CEFB_9D5E_41E2_A3CFA71EFBCE.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C20A626F_CEFB_9D5E_41E2_A3CFA71EFBCE_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-08"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C20A626F_CEFB_9D5E_41E2_A3CFA71EFBCE.jpg"}]},"id":"photo_C20A626F_CEFB_9D5E_41E2_A3CFA71EFBCE"},{"fontStyle":"normal","propagateClick":false,"backgroundColorDirection":"vertical","borderSize":0,"shadow":false,"textDecoration":"none","backgroundOpacity":0.5,"width":110,"pressedBackgroundOpacity":1,"cursor":"hand","gap":5,"paddingLeft":0,"pressedRollOverBackgroundColor":["#333333"],"paddingTop":0,"id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","fontFamily":"Avenir Black","pressedRollOverBackgroundColorRatios":[0],"shadowColor":"#000000","paddingBottom":0,"rollOverBackgroundColorRatios":[0],"paddingRight":0,"borderRadius":0,"iconWidth":0,"top":"1%","class":"Button","height":40,"toolTipHorizontalAlign":"center","backgroundColor":["#666666"],"rollOverShadow":false,"horizontalAlign":"center","layout":"horizontal","click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","verticalAlign":"middle","backgroundColorRatios":[0],"shadowBlurRadius":15,"borderColor":"#000000","mode":"push","fontSize":"14px","pressedBackgroundColor":["#333333"],"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"pressedBackgroundColorRatios":[0],"left":"1%","minHeight":1,"iconHeight":0,"fontColor":"#FFFFFF","data":{"name":"Button house info"},"rollOverBackgroundOpacity":0.8,"minWidth":1,"rollOverBackgroundColor":["#333333"],"fontWeight":"bold","shadowSpread":1,"iconBeforeLabel":true},{"propagateClick":false,"borderSize":0,"backgroundOpacity":0,"data":{"name":"Container photo"},"gap":10,"paddingLeft":0,"children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"paddingTop":0,"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","width":"100%","paddingBottom":0,"paddingRight":0,"scrollBarVisible":"rollOver","borderRadius":0,"scrollBarOpacity":0,"class":"Container","toolTipHorizontalAlign":"center","height":"100%","horizontalAlign":"left","layout":"absolute","scrollBarWidth":10,"verticalAlign":"top","overflow":"visible","scrollBarColor":"#000000","scrollBarMargin":2,"minHeight":1,"contentOpaque":false,"minWidth":1,"shadow":false},{"class":"Photo","duration":5000,"label":trans('photo_C20A8104_CEFB_9CC2_41E4_4F6466E887AF.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C20A8104_CEFB_9CC2_41E4_4F6466E887AF_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-07"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C20A8104_CEFB_9CC2_41E4_4F6466E887AF.jpg"}]},"id":"photo_C20A8104_CEFB_9CC2_41E4_4F6466E887AF"},{"class":"Photo","duration":5000,"label":trans('photo_C2097A89_CEF8_6DC2_41E4_61720A39E106.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C2097A89_CEF8_6DC2_41E4_61720A39E106_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-03"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2097A89_CEF8_6DC2_41E4_61720A39E106.jpg"}]},"id":"photo_C2097A89_CEF8_6DC2_41E4_61720A39E106"},{"class":"Photo","duration":5000,"label":trans('photo_C209BBED_CEF8_6342_41DE_BC94D40FED31.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C209BBED_CEF8_6342_41DE_BC94D40FED31_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-04"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C209BBED_CEF8_6342_41DE_BC94D40FED31.jpg"}]},"id":"photo_C209BBED_CEF8_6342_41DE_BC94D40FED31"},{"propagateClick":false,"borderSize":0,"right":"0%","backgroundOpacity":0,"gap":10,"paddingLeft":0,"children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"paddingTop":0,"id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","paddingBottom":0,"data":{"name":"Global"},"paddingRight":0,"scrollBarVisible":"rollOver","borderRadius":0,"top":"0%","bottom":"0%","scrollBarOpacity":0,"class":"Container","toolTipHorizontalAlign":"center","layout":"vertical","horizontalAlign":"center","scrollBarWidth":10,"verticalAlign":"top","overflow":"visible","scrollBarColor":"#000000","scrollBarMargin":2,"left":"0%","minHeight":1,"contentOpaque":false,"minWidth":1,"shadow":false},{"class":"Photo","duration":5000,"label":trans('photo_C2098933_CEF8_6CC6_41E0_FD42FFAD649E.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C2098933_CEF8_6CC6_41E0_FD42FFAD649E_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-02"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C2098933_CEF8_6CC6_41E0_FD42FFAD649E.jpg"}]},"id":"photo_C2098933_CEF8_6CC6_41E0_FD42FFAD649E"},{"class":"PhotoAlbum","label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"loop":false,"thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png","data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"},"playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5"},{"propagateClick":false,"progressBarOpacity":1,"borderSize":0,"data":{"name":"Main Viewer"},"subtitlesTextShadowBlurRadius":0,"toolTipFontColor":"#606060","toolTipBorderRadius":3,"subtitlesEnabled":true,"subtitlesPaddingTop":5,"progressHeight":10,"width":"100%","transitionMode":"blending","subtitlesOpacity":1,"playbackBarBorderColor":"#FFFFFF","paddingLeft":0,"playbackBarBorderRadius":0,"progressBottom":0,"id":"MainViewer","playbackBarOpacity":1,"subtitlesTop":0,"subtitlesShadow":false,"playbackBarHeadOpacity":1,"paddingRight":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipDisplayTime":600,"playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipPaddingBottom":4,"subtitlesTextShadowOpacity":1,"subtitlesHorizontalAlign":"center","progressBarBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0],"toolTipOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadBorderColor":"#000000","subtitlesBorderSize":0,"playbackBarProgressOpacity":1,"progressBarBorderSize":0,"progressRight":0,"playbackBarHeadBorderRadius":0,"playbackBarBorderSize":0,"toolTipShadowVerticalLength":0,"vrPointerSelectionTime":2000,"progressOpacity":1,"subtitlesFontColor":"#FFFFFF","surfaceReticleOpacity":0.6,"progressBarBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","height":"100%","displayTooltipInSurfaceSelection":true,"playbackBarHeight":10,"progressBarBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontStyle":"normal","surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","minHeight":50,"playbackBarHeadWidth":6,"minWidth":100,"toolTipFontWeight":"normal","progressBackgroundOpacity":1,"subtitlesFontSize":"3vmin","toolTipShadowBlurRadius":3,"progressBarBackgroundColorRatios":[0],"transitionDuration":500,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipBorderSize":1,"playbackBarRight":0,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"subtitlesPaddingBottom":5,"firstTransitionDuration":0,"subtitlesPaddingLeft":5,"toolTipBorderColor":"#767676","subtitlesFontWeight":"normal","progressBackgroundColorDirection":"vertical","paddingTop":0,"subtitlesBottom":50,"borderRadius":0,"playbackBarHeadShadowVerticalLength":0,"paddingBottom":0,"toolTipTextShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"progressBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"class":"ViewerArea","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesTextDecoration":"none","toolTipShadowSpread":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"translationTransitionDuration":1000,"toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","toolTipShadowColor":"#333333","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingRight":6,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"progressLeft":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"displayTooltipInTouchScreens":true,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"shadow":false,"subtitlesFontFamily":"Arial"},{"propagateClick":false,"borderSize":0,"right":"1%","backgroundOpacity":0,"visible":false,"cursor":"hand","width":"10%","paddingLeft":0,"paddingTop":0,"id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","paddingBottom":0,"data":{"name":"IconButton3189"},"paddingRight":0,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","borderRadius":0,"top":"1%","class":"IconButton","toolTipHorizontalAlign":"center","height":"10%","transparencyActive":true,"horizontalAlign":"center","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","verticalAlign":"middle","mode":"push","minHeight":1,"minWidth":1,"shadow":false},{"class":"PlayList","id":"mainPlayList"},{"class":"Photo","duration":5000,"label":trans('photo_C37B9757_CEF8_634E_41DF_FCEC7D6456BD.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C37B9757_CEF8_634E_41DF_FCEC7D6456BD_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-01"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C37B9757_CEF8_634E_41DF_FCEC7D6456BD.jpg"}]},"id":"photo_C37B9757_CEF8_634E_41DF_FCEC7D6456BD"},{"propagateClick":true,"borderSize":0,"right":20,"backgroundOpacity":0,"cursor":"hand","width":"10%","paddingLeft":0,"paddingTop":0,"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","paddingBottom":0,"data":{"name":"IconButton X"},"paddingRight":0,"borderRadius":0,"top":20,"class":"IconButton","toolTipHorizontalAlign":"center","height":"10%","transparencyActive":false,"horizontalAlign":"right","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","verticalAlign":"top","maxHeight":60,"maxWidth":60,"mode":"push","minHeight":50,"minWidth":50,"shadow":false},{"class":"Photo","duration":5000,"label":trans('photo_C20AA3E6_CEFB_A34F_41C6_ADB1D59873F4.label'),"height":768,"width":1600,"thumbnailUrl":"media/photo_C20AA3E6_CEFB_A34F_41C6_ADB1D59873F4_t.jpg","data":{"label":"24_BZ4X_sfty_ftrs-09"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_C20AA3E6_CEFB_A34F_41C6_ADB1D59873F4.jpg"}]},"id":"photo_C20AA3E6_CEFB_A34F_41C6_ADB1D59873F4"},{"class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5"}],"id":"playList_F8F1A1C9_F6EF_D7B8_41B6_304B12C6759A"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_FB35C279_F6E8_7558_41E3_F772683DC3A9"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_FA9FF382_F6E8_7BA8_41B7_56D7213B6586"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_FA991470_F6E8_7D68_41D4_A86B115D80C4"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_FA99C580_F6E8_7FA8_41E2_77E8EB6C1DC1"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C37B9757_CEF8_634E_41DF_FCEC7D6456BD"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C2098933_CEF8_6CC6_41E0_FD42FFAD649E"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C2097A89_CEF8_6DC2_41E4_61720A39E106"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C209BBED_CEF8_6342_41DE_BC94D40FED31"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C2097D7E_CEF8_673F_41E3_AC4045D41679"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C2099F23_CEF8_64C5_41D6_DCB92F4EF63B"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C20A8104_CEFB_9CC2_41E4_4F6466E887AF"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C20A626F_CEFB_9D5E_41E2_A3CFA71EFBCE"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C20AA3E6_CEFB_A34F_41C6_ADB1D59873F4"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C20A7561_CEFB_A742_41E7_3EF4B55E0620"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_to_width"},"media":"this.photo_C20AA6B4_CEFB_A5C2_41CF_FA0C67C68ADF"}],"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList"}],"id":"rootPlayer","mouseWheelEnabled":true,"width":"100%","paddingBottom":0,"paddingRight":0,"scrollBarVisible":"rollOver","borderRadius":0,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"scripts":{"cloneBindings":TDV.Tour.Script.cloneBindings,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getKey":TDV.Tour.Script.getKey,"quizStart":TDV.Tour.Script.quizStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"init":TDV.Tour.Script.init,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clone":TDV.Tour.Script.clone,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isPanorama":TDV.Tour.Script.isPanorama,"downloadFile":TDV.Tour.Script.downloadFile,"setValue":TDV.Tour.Script.setValue,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setLocale":TDV.Tour.Script.setLocale,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPixels":TDV.Tour.Script.getPixels,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"mixObject":TDV.Tour.Script.mixObject,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics},"scrollBarOpacity":0.5,"class":"Player","backgroundPreloadEnabled":true,"height":"100%","toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"horizontalAlign":"left","layout":"absolute","backgroundColorRatios":[0],"scrollBarWidth":10,"verticalAlign":"top","overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scrollBarMargin":2,"desktopMipmappingEnabled":false,"minHeight":20,"contentOpaque":false,"minWidth":20,"data":{"defaultLocale":"en","initialScale":0.5,"name":"Player852","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"start":"this.init()","downloadEnabled":false,"mediaActivationMode":"window"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Fri Dec 9 2022