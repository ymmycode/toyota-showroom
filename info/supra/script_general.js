(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
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
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
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
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('start', n, this);
                e['call'](this);
            };
            m['bind']('start', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"minHeight":20,"minWidth":20,"defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","data":{"defaultLocale":"en","history":{},"name":"Player852","locales":{"en":"locale/en.txt"},"initialScale":0.5,"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"pitch":1}},"gap":10,"backgroundColorRatios":[0],"class":"Player","watermark":false,"backgroundColor":["#FFFFFF"],"children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"id":"rootPlayer","hash": "abe34696d749ffd0523261240ab8bf803b6e6a4cf8413b71b43fd3743d9d8be4", "definitions": [{"progressLeft":0,"toolTipPaddingBottom":4,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"progressRight":0,"playbackBarBorderSize":0,"playbackBarLeft":0,"toolTipFontSize":"1.11vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","toolTipShadowColor":"#333333","propagateClick":false,"playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTop":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorRatios":[0],"width":"100%","playbackBarBottom":5,"height":"100%","minHeight":50,"subtitlesFontSize":"3vmin","minWidth":100,"subtitlesBottom":50,"progressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","playbackBarHeight":10,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBottom":0,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","playbackBarBackgroundOpacity":1,"class":"ViewerArea","playbackBarRight":0,"progressHeight":10,"playbackBarProgressBorderSize":0,"progressBorderSize":0,"id":"MainViewer","progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","toolTipFontFamily":"Arial","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBorderRadius":0,"subtitlesGap":0,"vrPointerColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0},{"progressLeft":0,"toolTipPaddingBottom":4,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingTop":4,"data":{"name":"Viewer photoalbum 1"},"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"progressRight":0,"playbackBarBorderSize":0,"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","toolTipShadowColor":"#333333","propagateClick":false,"playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTop":0,"progressBarBorderColor":"#0066FF","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorRatios":[0],"width":"100%","show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_9B52EF9E_8320_0AE1_41CA_0B3ED0A59483.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_9B52EF9E_8320_0AE1_41CA_0B3ED0A59483, 0)","playbackBarBottom":0,"height":"100%","subtitlesFontSize":"3vmin","minWidth":1,"subtitlesBottom":50,"top":"0%","minHeight":1,"progressBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","playbackBarHeight":10,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBottom":2,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","playbackBarBackgroundOpacity":1,"class":"ViewerArea","playbackBarRight":0,"progressHeight":10,"playbackBarProgressBorderSize":0,"progressBorderSize":0,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","toolTipFontFamily":"Arial","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"progressBackgroundColorRatios":[0.00784313725490196],"toolTipBackgroundColor":"#F6F6F6","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBorderRadius":0,"subtitlesGap":0,"vrPointerColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"left":"0%"},{"duration":500,"id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C","class":"FadeInEffect"},{"items":[{"player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","media":"this.album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203","class":"PhotoAlbumPlayListItem"}],"id":"playList_9B52EF9E_8320_0AE1_41CA_0B3ED0A59483","class":"PlayList"},{"id":"mainPlayList","class":"PlayList"},{"minHeight":1,"minWidth":1,"data":{"name":"Container photo"},"scrollBarOpacity":0,"gap":10,"children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267"],"class":"Container","layout":"absolute","id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831","propagateClick":false,"scrollBarMargin":2,"scrollBarColor":"#000000","width":"100%","backgroundOpacity":0,"height":"100%"},{"width":1600,"label":trans('photo_9306D540_82E0_1E61_41D1_BE52EC9032E1.label'),"height":768,"class":"Photo","thumbnailUrl":"media/photo_9306D540_82E0_1E61_41D1_BE52EC9032E1_t.jpg","data":{"label":"03_Supra_intr_ftrs_02"},"duration":5000,"image":{"levels":[{"url":"media/photo_9306D540_82E0_1E61_41D1_BE52EC9032E1.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_9306D540_82E0_1E61_41D1_BE52EC9032E1"},{"buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631"},{"minWidth":1,"right":"0%","layout":"absolute","data":{"name":"--PHOTOALBUM"},"gap":10,"backgroundColorRatios":[0,1],"children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"class":"Container","backgroundColor":["#000000","#000000"],"id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","scrollBarMargin":2,"scrollBarColor":"#000000","overflow":"scroll","backgroundOpacity":0.6,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","left":"0%","minHeight":1,"bottom":"0%","top":"0%"},{"width":1600,"label":trans('photo_9305D716_82E0_1BE1_41DD_8477B14232C7.label'),"height":750,"class":"Photo","thumbnailUrl":"media/photo_9305D716_82E0_1BE1_41DD_8477B14232C7_t.jpg","data":{"label":"03_Supra_intr_ftrs_04"},"duration":5000,"image":{"levels":[{"url":"media/photo_9305D716_82E0_1BE1_41DD_8477B14232C7.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_9305D716_82E0_1BE1_41DD_8477B14232C7"},{"width":1600,"label":trans('photo_93059802_82E0_15E1_41D1_963CC624E920.label'),"height":750,"class":"Photo","thumbnailUrl":"media/photo_93059802_82E0_15E1_41D1_963CC624E920_t.jpg","data":{"label":"03_Supra_intr_ftrs_05"},"duration":5000,"image":{"levels":[{"url":"media/photo_93059802_82E0_15E1_41D1_963CC624E920.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_93059802_82E0_15E1_41D1_963CC624E920"},{"minWidth":50,"minHeight":50,"right":20,"data":{"name":"IconButton X"},"class":"IconButton","id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","horizontalAlign":"right","maxHeight":60,"maxWidth":60,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","width":"10%","backgroundOpacity":0,"height":"10%","top":20},{"minHeight":40,"minWidth":40,"data":{"name":"IconButton <"},"width":"14.22%","class":"IconButton","verticalAlign":"middle","id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","horizontalAlign":"center","maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","backgroundOpacity":0,"left":10,"bottom":"20%","top":"20%"},{"minWidth":1,"minHeight":1,"right":"1%","data":{"name":"IconButton3189"},"class":"IconButton","verticalAlign":"middle","id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","horizontalAlign":"center","propagateClick":false,"iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","width":"10%","backgroundOpacity":0,"height":"10%","transparencyActive":true,"visible":false,"top":"1%"},{"width":1600,"label":trans('photo_9305A623_82E0_1A27_41D7_BB990EEFDE07.label'),"height":768,"class":"Photo","thumbnailUrl":"media/photo_9305A623_82E0_1A27_41D7_BB990EEFDE07_t.jpg","data":{"label":"03_Supra_intr_ftrs_03"},"duration":5000,"image":{"levels":[{"url":"media/photo_9305A623_82E0_1A27_41D7_BB990EEFDE07.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_9305A623_82E0_1A27_41D7_BB990EEFDE07"},{"width":1600,"label":trans('photo_9305E8DD_82E0_1663_41B1_56C9475A7C7F.label'),"height":768,"class":"Photo","thumbnailUrl":"media/photo_9305E8DD_82E0_1663_41B1_56C9475A7C7F_t.jpg","data":{"label":"03_Supra_intr_ftrs_06"},"duration":5000,"image":{"levels":[{"url":"media/photo_9305E8DD_82E0_1663_41B1_56C9475A7C7F.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_9305E8DD_82E0_1663_41B1_56C9475A7C7F"},{"minHeight":40,"minWidth":40,"right":10,"width":"14.22%","horizontalAlign":"center","data":{"name":"IconButton >"},"class":"IconButton","verticalAlign":"middle","id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","maxHeight":40,"maxWidth":40,"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","backgroundOpacity":0,"bottom":"20%","top":"20%"},{"width":1600,"label":trans('photo_90FD52C7_82E0_1A6E_41E0_1509CC73C055.label'),"height":768,"class":"Photo","thumbnailUrl":"media/photo_90FD52C7_82E0_1A6E_41E0_1509CC73C055_t.jpg","data":{"label":"03_Supra_intr_ftrs_01"},"duration":5000,"image":{"levels":[{"url":"media/photo_90FD52C7_82E0_1A6E_41E0_1509CC73C055.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_90FD52C7_82E0_1A6E_41E0_1509CC73C055"},{"label":trans('album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203.label'),"thumbnailUrl":"media/album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203_t.png","class":"PhotoAlbum","id":"album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203","data":{"label":"Photo Album 03_Supra_ext_01_"},"playList":"this.album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203_AlbumPlayList"},{"minHeight":1,"minWidth":1,"right":"0%","layout":"vertical","horizontalAlign":"center","data":{"name":"Global"},"scrollBarOpacity":0,"gap":10,"children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"class":"Container","id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","propagateClick":false,"scrollBarMargin":2,"scrollBarColor":"#000000","backgroundOpacity":0,"left":"0%","bottom":"0%","top":"0%"},{"items":[{"media":"this.photo_90FD52C7_82E0_1A6E_41E0_1509CC73C055","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"media":"this.photo_9306D540_82E0_1E61_41D1_BE52EC9032E1","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"media":"this.photo_9305A623_82E0_1A27_41D7_BB990EEFDE07","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"media":"this.photo_9305D716_82E0_1BE1_41DD_8477B14232C7","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"media":"this.photo_93059802_82E0_15E1_41D1_963CC624E920","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"media":"this.photo_9305E8DD_82E0_1663_41B1_56C9475A7C7F","class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}}],"id":"album_C2C6DB4E_E31D_59EF_41DD_DBA8861DF203_AlbumPlayList","class":"PhotoPlayList"}],"propagateClick":false,"scripts":{"executeJS":TDV.Tour.Script.executeJS,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startMeasurement":TDV.Tour.Script.startMeasurement,"createTween":TDV.Tour.Script.createTween,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"showWindow":TDV.Tour.Script.showWindow,"init":TDV.Tour.Script.init,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"clone":TDV.Tour.Script.clone,"showPopupImage":TDV.Tour.Script.showPopupImage,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlays":TDV.Tour.Script.getOverlays,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"registerKey":TDV.Tour.Script.registerKey,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"initQuiz":TDV.Tour.Script.initQuiz,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openLink":TDV.Tour.Script.openLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements},"scrollBarMargin":2,"scrollBarColor":"#000000","width":"100%","layout":"absolute","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.5.js.map
})();
//Generated with v2022.2.5, Fri Jan 6 2023