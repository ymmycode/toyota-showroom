(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
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
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
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
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
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
        return function () {
            return '';
        };
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
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
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
var script = {"start":"this.init()","data":{"defaultLocale":"en","history":{},"name":"Player852","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"initialScale":0.5},"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"watermark":false,"scrollBarMargin":2,"layout":"absolute","children":["this.MainViewer","this.IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D"],"height":"100%","width":"100%","backgroundColorRatios":[0],"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneBindings":TDV.Tour.Script.cloneBindings,"translate":TDV.Tour.Script.translate,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clone":TDV.Tour.Script.clone,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPixels":TDV.Tour.Script.getPixels,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"init":TDV.Tour.Script.init,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"isPanorama":TDV.Tour.Script.isPanorama,"setLocale":TDV.Tour.Script.setLocale,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"registerKey":TDV.Tour.Script.registerKey,"executeJS":TDV.Tour.Script.executeJS,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"unregisterKey":TDV.Tour.Script.unregisterKey,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"createTween":TDV.Tour.Script.createTween,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initQuiz":TDV.Tour.Script.initQuiz,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"shareSocial":TDV.Tour.Script.shareSocial,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"mixObject":TDV.Tour.Script.mixObject,"playAudioList":TDV.Tour.Script.playAudioList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizFinish":TDV.Tour.Script.quizFinish,"getKey":TDV.Tour.Script.getKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios},"propagateClick":false,"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"class":"Player","minHeight":20,"minWidth":20,"hash": "63773422ec819205af80a52bd69840af6827992abee44a1832e8e1ba8e6b4dad", "definitions": [{"label":trans('photo_24EEDA58_1689_3996_4181_14D35556F964.label'),"data":{"label":"26_RAV4_sfty_04"},"width":1600,"class":"Photo","duration":5000,"id":"photo_24EEDA58_1689_3996_4181_14D35556F964","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_24EEDA58_1689_3996_4181_14D35556F964.jpg"}]},"thumbnailUrl":"media/photo_24EEDA58_1689_3996_4181_14D35556F964_t.jpg","height":756},{"label":trans('photo_24E12955_1689_3B9E_41B3_E685ED4ED5D6.label'),"data":{"label":"26_RAV4_sfty_03"},"width":1600,"class":"Photo","duration":5000,"id":"photo_24E12955_1689_3B9E_41B3_E685ED4ED5D6","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_24E12955_1689_3B9E_41B3_E685ED4ED5D6.jpg"}]},"thumbnailUrl":"media/photo_24E12955_1689_3B9E_41B3_E685ED4ED5D6_t.jpg","height":756},{"class":"FadeInEffect","duration":500,"id":"effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C"},{"label":trans('photo_746C2993_699B_8BE0_41C6_09D34E80719C.label'),"data":{"label":"26_RAV4_Intr_ftrs_01"},"width":1600,"class":"Photo","duration":5000,"id":"photo_746C2993_699B_8BE0_41C6_09D34E80719C","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_746C2993_699B_8BE0_41C6_09D34E80719C.jpg"}]},"thumbnailUrl":"media/photo_746C2993_699B_8BE0_41C6_09D34E80719C_t.jpg","height":756},{"iconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F.png","right":10,"id":"IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","rollOverIconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F_rollover.png","verticalAlign":"middle","data":{"name":"IconButton >"},"pressedIconURL":"skin/IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F_rollover.png","width":"14.22%","backgroundOpacity":0,"horizontalAlign":"center","maxWidth":40,"maxHeight":40,"class":"IconButton","minHeight":40,"bottom":"20%","minWidth":40,"top":"20%"},{"playList":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList","label":trans('album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5.label'),"data":{"label":"Photo Album 18_Sienta_sfty_ftrs_01"},"class":"PhotoAlbum","id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5","thumbnailUrl":"media/album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_t.png"},{"label":trans('photo_24E12851_1689_3996_41B0_E9BF22849CFD.label'),"data":{"label":"26_RAV4_sfty_02"},"width":1600,"class":"Photo","duration":5000,"id":"photo_24E12851_1689_3996_41B0_E9BF22849CFD","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_24E12851_1689_3996_41B0_E9BF22849CFD.jpg"}]},"thumbnailUrl":"media/photo_24E12851_1689_3996_41B0_E9BF22849CFD_t.jpg","height":756},{"borderColor":"#000000","fontFamily":"Avenir Black","left":"1%","verticalAlign":"middle","id":"Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A","iconWidth":0,"iconHeight":0,"rollOverBackgroundOpacity":0.8,"rollOverBackgroundColor":["#333333"],"pressedBackgroundColor":["#333333"],"fontWeight":"bold","layout":"horizontal","width":110,"height":40,"paddingLeft":0,"paddingRight":0,"fontSize":"14px","backgroundOpacity":0.5,"label":trans('Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A.label'),"pressedRollOverBackgroundColorRatios":[0],"backgroundColorRatios":[0],"pressedBackgroundColorRatios":[0],"pressedBackgroundOpacity":1,"propagateClick":false,"data":{"name":"Button house info"},"click":"this.openLink(this.translate('LinkBehaviour_CD058399_E51E_E975_41CA_4F6A0599D45B.source'), '_self')","horizontalAlign":"center","paddingTop":0,"pressedRollOverBackgroundColor":["#333333"],"backgroundColor":["#666666"],"fontColor":"#FFFFFF","paddingBottom":0,"rollOverBackgroundColorRatios":[0],"class":"Button","minHeight":1,"rollOverShadow":false,"minWidth":1,"top":"1%"},{"label":trans('photo_25AAA6C0_1689_36F6_41AD_E5AEFC20423D.label'),"data":{"label":"26_RAV4_sfty_01"},"width":1600,"class":"Photo","duration":5000,"id":"photo_25AAA6C0_1689_36F6_41AD_E5AEFC20423D","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_25AAA6C0_1689_36F6_41AD_E5AEFC20423D.jpg"}]},"thumbnailUrl":"media/photo_25AAA6C0_1689_36F6_41AD_E5AEFC20423D_t.jpg","height":756},{"label":trans('photo_27A56C67_168F_39BA_41A9_9B9A3576B6D4.label'),"data":{"label":"26_RAV4_Intr_ftrs_06"},"width":1600,"class":"Photo","duration":5000,"id":"photo_27A56C67_168F_39BA_41A9_9B9A3576B6D4","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_27A56C67_168F_39BA_41A9_9B9A3576B6D4.jpg"}]},"thumbnailUrl":"media/photo_27A56C67_168F_39BA_41A9_9B9A3576B6D4_t.jpg","height":756},{"iconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC.png","left":10,"verticalAlign":"middle","id":"IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","rollOverIconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC_rollover.png","data":{"name":"IconButton <"},"pressedIconURL":"skin/IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC_rollover.png","width":"14.22%","backgroundOpacity":0,"horizontalAlign":"center","maxWidth":40,"maxHeight":40,"class":"IconButton","minHeight":40,"bottom":"20%","minWidth":40,"top":"20%"},{"class":"PhotoAlbumPlayer","buttonNext":"this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","viewerArea":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","buttonPrevious":"this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC"},{"class":"PlayList","id":"mainPlayList"},{"toolTipPaddingRight":6,"progressBarBorderRadius":0,"playbackBarBottom":0,"progressBarBorderSize":0,"subtitlesBottom":50,"data":{"name":"Viewer photoalbum 1"},"toolTipPaddingBottom":4,"show":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_77C3F6DA_6996_9960_41D8_BB84465F9A63.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_77C3F6DA_6996_9960_41D8_BB84465F9A63, 0)","minWidth":1,"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"height":"100%","playbackBarProgressBorderColor":"#000000","playbackBarHeight":10,"width":"100%","playbackBarHeadWidth":6,"toolTipPaddingLeft":6,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowColor":"#000000","propagateClick":false,"subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderSize":0,"playbackBarLeft":0,"playbackBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressLeft":0,"id":"ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"toolTipFontFamily":"Arial","progressBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0.00784313725490196],"playbackBarHeadShadowColor":"#000000","top":"0%","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadow":true,"subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBorderColor":"#0066FF","playbackBarHeadShadowOpacity":0.7,"progressRight":0,"progressBottom":2,"toolTipPaddingTop":4,"toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"progressHeight":10,"progressBorderSize":0,"left":"0%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"minHeight":1},{"right":"1%","id":"IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3","verticalAlign":"middle","data":{"name":"IconButton3189"},"transparencyActive":true,"height":"10%","width":"10%","visible":false,"backgroundOpacity":0,"propagateClick":false,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_DE5DFBD1_C433_73BD_41D7_00AE5DE61F9C, 'showEffect', false)}.bind(this); visibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","horizontalAlign":"center","iconURL":"skin/IconButton_D15C6169_C41C_8F6D_41E5_E71CF4F10EA3.png","class":"IconButton","minHeight":1,"minWidth":1,"top":"1%"},{"label":trans('photo_24EEEB49_1689_3FF6_41B2_0704657DE215.label'),"data":{"label":"26_RAV4_sfty_05"},"width":1600,"class":"Photo","duration":5000,"id":"photo_24EEEB49_1689_3FF6_41B2_0704657DE215","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_24EEEB49_1689_3FF6_41B2_0704657DE215.jpg"}]},"thumbnailUrl":"media/photo_24EEEB49_1689_3FF6_41B2_0704657DE215_t.jpg","height":756},{"gap":10,"data":{"name":"Container photo"},"children":["this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631","this.IconButton_D28E3FBB_C414_93ED_41D8_0E5CE3D657AC","this.IconButton_D28E0FBB_C414_93ED_41E2_214B35C9579F","this.IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","this.Button_CE8EFF62_E51D_59D7_41C6_0A5DD70B6C5A"],"scrollBarMargin":2,"layout":"absolute","height":"100%","width":"100%","backgroundOpacity":0,"propagateClick":false,"scrollBarColor":"#000000","class":"Container","scrollBarOpacity":0,"minHeight":1,"minWidth":1,"id":"Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"},{"right":20,"id":"IconButton_D28EEFBB_C414_93ED_41D3_3E60799FD267","data":{"name":"IconButton X"},"height":"10%","width":"10%","backgroundOpacity":0,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","horizontalAlign":"right","maxWidth":60,"maxHeight":60,"class":"IconButton","minHeight":50,"minWidth":50,"top":20},{"label":trans('photo_27A6695B_168F_3B8A_4160_B8875F67448E.label'),"data":{"label":"26_RAV4_Intr_ftrs_03"},"width":1600,"class":"Photo","duration":5000,"id":"photo_27A6695B_168F_3B8A_4160_B8875F67448E","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_27A6695B_168F_3B8A_4160_B8875F67448E.jpg"}]},"thumbnailUrl":"media/photo_27A6695B_168F_3B8A_4160_B8875F67448E_t.jpg","height":756},{"label":trans('photo_27A68A69_168F_39B6_41AB_86085BCD8825.label'),"data":{"label":"26_RAV4_Intr_ftrs_04"},"width":1600,"class":"Photo","duration":5000,"id":"photo_27A68A69_168F_39B6_41AB_86085BCD8825","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_27A68A69_168F_39B6_41AB_86085BCD8825.jpg"}]},"thumbnailUrl":"media/photo_27A68A69_168F_39B6_41AB_86085BCD8825_t.jpg","height":756},{"label":trans('photo_75DD6B11_699B_88E0_41C5_6B29A1FA0BE7.label'),"data":{"label":"26_RAV4_Intr_ftrs_02"},"width":1600,"class":"Photo","duration":5000,"id":"photo_75DD6B11_699B_88E0_41C5_6B29A1FA0BE7","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_75DD6B11_699B_88E0_41C5_6B29A1FA0BE7.jpg"}]},"thumbnailUrl":"media/photo_75DD6B11_699B_88E0_41C5_6B29A1FA0BE7_t.jpg","height":756},{"label":trans('photo_75A25BF5_699B_8F20_41A2_9D3705758090.label'),"data":{"label":"26_RAV4_Intr_ftrs_05"},"width":1600,"class":"Photo","duration":5000,"id":"photo_75A25BF5_699B_8F20_41A2_9D3705758090","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_75A25BF5_699B_8F20_41A2_9D3705758090.jpg"}]},"thumbnailUrl":"media/photo_75A25BF5_699B_8F20_41A2_9D3705758090_t.jpg","height":756},{"class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_D28E2FBB_C414_93ED_41D0_BFF442292631PhotoAlbumPlayer","media":"this.album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5"}],"id":"playList_77C3F6DA_6996_9960_41D8_BB84465F9A63"},{"left":"0%","overflow":"scroll","right":"0%","id":"Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D","gap":10,"layout":"absolute","children":["this.Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81"],"scrollBarMargin":2,"data":{"name":"--PHOTOALBUM"},"backgroundOpacity":0.6,"backgroundColorRatios":[0,1],"scrollBarColor":"#000000","backgroundColor":["#000000","#000000"],"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_D28EFFBB_C414_93ED_41E5_4E077F8E6F0D)","class":"Container","minHeight":1,"bottom":"0%","minWidth":1,"top":"0%"},{"left":"0%","right":"0%","id":"Container_D28FCFBA_C414_93EF_41E5_BE01B2A5EE81","gap":10,"layout":"vertical","children":["this.Container_D28E4FBB_C414_93ED_41E5_ECF74C074831"],"scrollBarMargin":2,"data":{"name":"Global"},"backgroundOpacity":0,"propagateClick":false,"scrollBarColor":"#000000","horizontalAlign":"center","class":"Container","scrollBarOpacity":0,"minHeight":1,"bottom":"0%","minWidth":1,"top":"0%"},{"toolTipPaddingRight":6,"progressBarBorderRadius":0,"subtitlesBottom":50,"playbackBarBottom":5,"progressBarBorderSize":0,"data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"height":"100%","playbackBarProgressBorderColor":"#000000","playbackBarHeight":10,"width":"100%","playbackBarHeadWidth":6,"toolTipPaddingLeft":6,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowColor":"#000000","propagateClick":false,"subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderSize":0,"playbackBarLeft":0,"playbackBarBorderSize":0,"progressLeft":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"id":"MainViewer","progressBorderColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadow":true,"subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressRight":0,"progressBottom":0,"toolTipPaddingTop":4,"toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"progressHeight":10,"progressBorderSize":0,"minHeight":50,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","media":"this.photo_746C2993_699B_8BE0_41C6_09D34E80719C","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_75DD6B11_699B_88E0_41C5_6B29A1FA0BE7","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_27A6695B_168F_3B8A_4160_B8875F67448E","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_27A68A69_168F_39B6_41AB_86085BCD8825","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_75A25BF5_699B_8F20_41A2_9D3705758090","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_27A56C67_168F_39BA_41A9_9B9A3576B6D4","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_25AAA6C0_1689_36F6_41AD_E5AEFC20423D","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_24E12851_1689_3996_41B0_E9BF22849CFD","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_24E12955_1689_3B9E_41B3_E685ED4ED5D6","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_24EEDA58_1689_3996_4181_14D35556F964","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}},{"class":"PhotoPlayListItem","media":"this.photo_24EEEB49_1689_3FF6_41B2_0704657DE215","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"}}],"id":"album_CE49D7CA_E50B_68D7_41E2_8F58D13A3FC5_AlbumPlayList"}],"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.6.js.map
})();
//Generated with v2023.1.6, Wed Sep 6 2023