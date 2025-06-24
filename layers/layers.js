var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlesatellite_1 = new ol.layer.Tile({
            'title': 'Google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_NV2005_QUAL_GRID1_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NV2005_QUAL_GRID1<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_0.png" /> 1<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_1.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_2.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_3.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_4.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_5.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_6.png" /> 1 - 10<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_7.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_8.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_9.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_10.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_11.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_12.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_13.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_14.png" /> 11 - 20<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_15.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_16.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_17.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_18.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_19.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_20.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_21.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_22.png" /> 21 - 30<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_23.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_24.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_25.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_26.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_27.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_28.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_29.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_30.png" /> 31 - 40<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_31.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_32.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_33.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_34.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_35.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_36.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_37.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_38.png" /> 41 - 50<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_39.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_40.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_41.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_42.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_43.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_44.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_45.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_46.png" /> 51 - 60<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_47.png" /> 61 - 75<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_48.png" /> 61 - 75<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_49.png" /> 61 - 75<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_50.png" /> 61 - 75<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_51.png" /> 61 - 75<br />\
    <img src="styles/legend/NV2005_QUAL_GRID1_2_52.png" /> 61 - 75<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NV2005_QUAL_GRID1_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [15625916.280837, -4763662.684912, 16742895.128137, -3981284.248122]
        })
    });
var format_NV1750_EVCBCS_PP_3 = new ol.format.GeoJSON();
var features_NV1750_EVCBCS_PP_3 = format_NV1750_EVCBCS_PP_3.readFeatures(json_NV1750_EVCBCS_PP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NV1750_EVCBCS_PP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NV1750_EVCBCS_PP_3.addFeatures(features_NV1750_EVCBCS_PP_3);
var lyr_NV1750_EVCBCS_PP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NV1750_EVCBCS_PP_3, 
                style: style_NV1750_EVCBCS_PP_3,
                popuplayertitle: 'NV1750_EVCBCS_PP',
                interactive: true,
    title: 'NV1750_EVCBCS_PP<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_0.png" /> 3<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_1.png" /> 6<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_2.png" /> 8<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_3.png" /> 16<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_4.png" /> 18<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_5.png" /> 19<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_6.png" /> 20<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_7.png" /> 22<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_8.png" /> 23<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_9.png" /> 28<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_10.png" /> 29<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_11.png" /> 30<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_12.png" /> 37<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_13.png" /> 45<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_14.png" /> 47<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_15.png" /> 48<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_16.png" /> 55<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_17.png" /> 56<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_18.png" /> 61<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_19.png" /> 65<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_20.png" /> 67<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_21.png" /> 68<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_22.png" /> 69<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_23.png" /> 70<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_24.png" /> 71<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_25.png" /> 72<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_26.png" /> 73<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_27.png" /> 74<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_28.png" /> 76<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_29.png" /> 77<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_30.png" /> 83<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_31.png" /> 93<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_32.png" /> 125<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_33.png" /> 132<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_34.png" /> 134<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_35.png" /> 136<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_36.png" /> 152<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_37.png" /> 164<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_38.png" /> 165<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_39.png" /> 175<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_40.png" /> 184<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_41.png" /> 191<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_42.png" /> 192<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_43.png" /> 193<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_44.png" /> 195<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_45.png" /> 198<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_46.png" /> 200<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_47.png" /> 241<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_48.png" /> 278<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_49.png" /> 279<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_50.png" /> 280<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_51.png" /> 282<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_52.png" /> 283<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_53.png" /> 284<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_54.png" /> 285<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_55.png" /> 292<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_56.png" /> 336<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_57.png" /> 342<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_58.png" /> 345<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_59.png" /> 349<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_60.png" /> 350<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_61.png" /> 351<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_62.png" /> 355<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_63.png" /> 357<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_64.png" /> 361<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_65.png" /> 371<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_66.png" /> 372<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_67.png" /> 373<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_68.png" /> 376<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_69.png" /> 377<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_70.png" /> 378<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_71.png" /> 379<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_72.png" /> 380<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_73.png" /> 381<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_74.png" /> 382<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_75.png" /> 383<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_76.png" /> 385<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_77.png" /> 387<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_78.png" /> 388<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_79.png" /> 389<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_80.png" /> 390<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_81.png" /> 391<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_82.png" /> 392<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_83.png" /> 393<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_84.png" /> 396<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_85.png" /> 399<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_86.png" /> 400<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_87.png" /> 401<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_88.png" /> 408<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_89.png" /> 409<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_90.png" /> 410<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_91.png" /> 411<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_92.png" /> 413<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_93.png" /> 414<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_94.png" /> 417<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_95.png" /> 418<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_96.png" /> 421<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_97.png" /> 422<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_98.png" /> 423<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_99.png" /> 430<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_100.png" /> 438<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_101.png" /> 439<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_102.png" /> 441<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_103.png" /> 442<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_104.png" /> 443<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_105.png" /> 444<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_106.png" /> 448<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_107.png" /> 449<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_108.png" /> 450<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_109.png" /> 451<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_110.png" /> 452<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_111.png" /> 454<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_112.png" /> 457<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_113.png" /> 468<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_114.png" /> 475<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_115.png" /> 477<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_116.png" /> 481<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_117.png" /> 485<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_118.png" /> 487<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_119.png" /> 489<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_120.png" /> 493<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_121.png" /> 500<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_122.png" /> 502<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_123.png" /> 504<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_124.png" /> 505<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_125.png" /> 506<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_126.png" /> 509<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_127.png" /> 510<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_128.png" /> 514<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_129.png" /> 515<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_130.png" /> 516<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_131.png" /> 519<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_132.png" /> 521<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_133.png" /> 522<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_134.png" /> 531<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_135.png" /> 547<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_136.png" /> 558<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_137.png" /> 559<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_138.png" /> 565<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_139.png" /> 572<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_140.png" /> 584<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_141.png" /> 585<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_142.png" /> 587<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_143.png" /> 588<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_144.png" /> 589<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_145.png" /> 590<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_146.png" /> 595<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_147.png" /> 596<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_148.png" /> 597<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_149.png" /> 598<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_150.png" /> 599<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_151.png" /> 600<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_152.png" /> 612<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_153.png" /> 623<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_154.png" /> 634<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_155.png" /> 636<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_156.png" /> 640<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_157.png" /> 641<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_158.png" /> 647<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_159.png" /> 660<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_160.png" /> 672<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_161.png" /> 679<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_162.png" /> 680<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_163.png" /> 681<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_164.png" /> 685<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_165.png" /> 691<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_166.png" /> 697<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_167.png" /> 704<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_168.png" /> 711<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_169.png" /> 724<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_170.png" /> 726<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_171.png" /> 727<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_172.png" /> 729<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_173.png" /> 745<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_174.png" /> 753<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_175.png" /> 758<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_176.png" /> 760<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_177.png" /> 761<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_178.png" /> 765<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_179.png" /> 766<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_180.png" /> 768<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_181.png" /> 773<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_182.png" /> 791<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_183.png" /> 798<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_184.png" /> 799<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_185.png" /> 802<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_186.png" /> 803<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_187.png" /> 882<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_188.png" /> 892<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_189.png" /> 896<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_190.png" /> 897<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_191.png" /> 982<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_192.png" /> 991<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_193.png" /> 992<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_194.png" /> 999<br />\
    <img src="styles/legend/NV1750_EVCBCS_PP_3_195.png" /> <br />' });
var format_NV1750_EVCBCS_hindmarsh_4 = new ol.format.GeoJSON();
var features_NV1750_EVCBCS_hindmarsh_4 = format_NV1750_EVCBCS_hindmarsh_4.readFeatures(json_NV1750_EVCBCS_hindmarsh_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NV1750_EVCBCS_hindmarsh_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NV1750_EVCBCS_hindmarsh_4.addFeatures(features_NV1750_EVCBCS_hindmarsh_4);
var lyr_NV1750_EVCBCS_hindmarsh_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NV1750_EVCBCS_hindmarsh_4, 
                style: style_NV1750_EVCBCS_hindmarsh_4,
                popuplayertitle: 'NV1750_EVCBCS_hindmarsh',
                interactive: true,
    title: 'NV1750_EVCBCS_hindmarsh<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_0.png" /> 48<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_1.png" /> 66<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_2.png" /> 87<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_3.png" /> 88<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_4.png" /> 89<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_5.png" /> 93<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_6.png" /> 95<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_7.png" /> 96<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_8.png" /> 97<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_9.png" /> 98<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_10.png" /> 101<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_11.png" /> 102<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_12.png" /> 103<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_13.png" /> 104<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_14.png" /> 107<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_15.png" /> 132<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_16.png" /> 195<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_17.png" /> 291<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_18.png" /> 292<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_19.png" /> 641<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_20.png" /> 676<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_21.png" /> 710<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_22.png" /> 741<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_23.png" /> 803<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_24.png" /> 813<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_25.png" /> 822<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_26.png" /> 823<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_27.png" /> 824<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_28.png" /> 826<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_29.png" /> 833<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_30.png" /> 834<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_31.png" /> 882<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_32.png" /> 941<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_33.png" /> 981<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_34.png" /> 992<br />\
    <img src="styles/legend/NV1750_EVCBCS_hindmarsh_4_35.png" /> <br />' });
var format_parkres_5 = new ol.format.GeoJSON();
var features_parkres_5 = format_parkres_5.readFeatures(json_parkres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkres_5.addFeatures(features_parkres_5);
var lyr_parkres_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkres_5, 
                style: style_parkres_5,
                popuplayertitle: 'parkres',
                interactive: true,
                title: '<img src="styles/legend/parkres_5.png" /> parkres'
            });
var format_AllPPhistoricrevegpre2025_Fixedgeometries_6 = new ol.format.GeoJSON();
var features_AllPPhistoricrevegpre2025_Fixedgeometries_6 = format_AllPPhistoricrevegpre2025_Fixedgeometries_6.readFeatures(json_AllPPhistoricrevegpre2025_Fixedgeometries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_6.addFeatures(features_AllPPhistoricrevegpre2025_Fixedgeometries_6);
var lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_6, 
                style: style_AllPPhistoricrevegpre2025_Fixedgeometries_6,
                popuplayertitle: 'All PP historic reveg pre 2025_Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/AllPPhistoricrevegpre2025_Fixedgeometries_6.png" /> All PP historic reveg pre 2025_Fixed geometries'
            });
var format_AllPPhistoricrevegpre2025_withEVCs_7 = new ol.format.GeoJSON();
var features_AllPPhistoricrevegpre2025_withEVCs_7 = format_AllPPhistoricrevegpre2025_withEVCs_7.readFeatures(json_AllPPhistoricrevegpre2025_withEVCs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPPhistoricrevegpre2025_withEVCs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPPhistoricrevegpre2025_withEVCs_7.addFeatures(features_AllPPhistoricrevegpre2025_withEVCs_7);
var lyr_AllPPhistoricrevegpre2025_withEVCs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPPhistoricrevegpre2025_withEVCs_7, 
                style: style_AllPPhistoricrevegpre2025_withEVCs_7,
                popuplayertitle: 'All PP historic reveg pre 2025_with EVCs',
                interactive: true,
                title: '<img src="styles/legend/AllPPhistoricrevegpre2025_withEVCs_7.png" /> All PP historic reveg pre 2025_with EVCs'
            });
var format_WBMP_sites_040509_Water600m_8 = new ol.format.GeoJSON();
var features_WBMP_sites_040509_Water600m_8 = format_WBMP_sites_040509_Water600m_8.readFeatures(json_WBMP_sites_040509_Water600m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBMP_sites_040509_Water600m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBMP_sites_040509_Water600m_8.addFeatures(features_WBMP_sites_040509_Water600m_8);
var lyr_WBMP_sites_040509_Water600m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBMP_sites_040509_Water600m_8, 
                style: style_WBMP_sites_040509_Water600m_8,
                popuplayertitle: 'WBMP_sites_040509_Water600m',
                interactive: true,
                title: '<img src="styles/legend/WBMP_sites_040509_Water600m_8.png" /> WBMP_sites_040509_Water600m'
            });
var format_WBMP_sites_040509_9 = new ol.format.GeoJSON();
var features_WBMP_sites_040509_9 = format_WBMP_sites_040509_9.readFeatures(json_WBMP_sites_040509_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBMP_sites_040509_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBMP_sites_040509_9.addFeatures(features_WBMP_sites_040509_9);
var lyr_WBMP_sites_040509_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBMP_sites_040509_9, 
                style: style_WBMP_sites_040509_9,
                popuplayertitle: 'WBMP_sites_040509',
                interactive: true,
                title: '<img src="styles/legend/WBMP_sites_040509_9.png" /> WBMP_sites_040509'
            });
var format_20050923allsites_10 = new ol.format.GeoJSON();
var features_20050923allsites_10 = format_20050923allsites_10.readFeatures(json_20050923allsites_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20050923allsites_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20050923allsites_10.addFeatures(features_20050923allsites_10);
var lyr_20050923allsites_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20050923allsites_10, 
                style: style_20050923allsites_10,
                popuplayertitle: '20050923-allsites',
                interactive: true,
                title: '<img src="styles/legend/20050923allsites_10.png" /> 20050923-allsites'
            });
var format_ProjectHindmarsh2005_11 = new ol.format.GeoJSON();
var features_ProjectHindmarsh2005_11 = format_ProjectHindmarsh2005_11.readFeatures(json_ProjectHindmarsh2005_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectHindmarsh2005_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectHindmarsh2005_11.addFeatures(features_ProjectHindmarsh2005_11);
var lyr_ProjectHindmarsh2005_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectHindmarsh2005_11, 
                style: style_ProjectHindmarsh2005_11,
                popuplayertitle: 'Project Hindmarsh 2005',
                interactive: true,
                title: '<img src="styles/legend/ProjectHindmarsh2005_11.png" /> Project Hindmarsh 2005'
            });
var format_ProjectHindmarsh2006_12 = new ol.format.GeoJSON();
var features_ProjectHindmarsh2006_12 = format_ProjectHindmarsh2006_12.readFeatures(json_ProjectHindmarsh2006_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectHindmarsh2006_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectHindmarsh2006_12.addFeatures(features_ProjectHindmarsh2006_12);
var lyr_ProjectHindmarsh2006_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectHindmarsh2006_12, 
                style: style_ProjectHindmarsh2006_12,
                popuplayertitle: 'Project Hindmarsh 2006',
                interactive: true,
                title: '<img src="styles/legend/ProjectHindmarsh2006_12.png" /> Project Hindmarsh 2006'
            });
var format_Hindmarshrevegfulcrum_13 = new ol.format.GeoJSON();
var features_Hindmarshrevegfulcrum_13 = format_Hindmarshrevegfulcrum_13.readFeatures(json_Hindmarshrevegfulcrum_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindmarshrevegfulcrum_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindmarshrevegfulcrum_13.addFeatures(features_Hindmarshrevegfulcrum_13);
var lyr_Hindmarshrevegfulcrum_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindmarshrevegfulcrum_13, 
                style: style_Hindmarshrevegfulcrum_13,
                popuplayertitle: 'Hindmarsh reveg fulcrum',
                interactive: true,
                title: '<img src="styles/legend/Hindmarshrevegfulcrum_13.png" /> Hindmarsh reveg fulcrum'
            });
var group_Pasthindmarshreveg = new ol.layer.Group({
                                layers: [lyr_ProjectHindmarsh2005_11,lyr_ProjectHindmarsh2006_12,lyr_Hindmarshrevegfulcrum_13,],
                                fold: "open",
                                title: 'Past hindmarsh reveg'});
var group_Birdmonitoringsites = new ol.layer.Group({
                                layers: [lyr_WBMP_sites_040509_Water600m_8,lyr_WBMP_sites_040509_9,lyr_20050923allsites_10,],
                                fold: "open",
                                title: 'Bird monitoring sites'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlesatellite_1.setVisible(true);lyr_NV2005_QUAL_GRID1_2.setVisible(true);lyr_NV1750_EVCBCS_PP_3.setVisible(true);lyr_NV1750_EVCBCS_hindmarsh_4.setVisible(true);lyr_parkres_5.setVisible(true);lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6.setVisible(true);lyr_AllPPhistoricrevegpre2025_withEVCs_7.setVisible(true);lyr_WBMP_sites_040509_Water600m_8.setVisible(true);lyr_WBMP_sites_040509_9.setVisible(true);lyr_20050923allsites_10.setVisible(true);lyr_ProjectHindmarsh2005_11.setVisible(true);lyr_ProjectHindmarsh2006_12.setVisible(true);lyr_Hindmarshrevegfulcrum_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlesatellite_1,lyr_NV2005_QUAL_GRID1_2,lyr_NV1750_EVCBCS_PP_3,lyr_NV1750_EVCBCS_hindmarsh_4,lyr_parkres_5,lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6,lyr_AllPPhistoricrevegpre2025_withEVCs_7,group_Birdmonitoringsites,group_Pasthindmarshreveg];
lyr_NV1750_EVCBCS_PP_3.set('fieldAliases', {'SCALE': 'SCALE', 'EVC': 'EVC', 'EVC_BCS': 'EVC_BCS', 'BIOREGNO': 'BIOREGNO', 'EVC_GO': 'EVC_GO', 'EVCBCSDESC': 'EVCBCSDESC', 'EVC_MUT': 'EVC_MUT', 'EVCGODESC': 'EVCGODESC', 'BIOREGION': 'BIOREGION', 'EVC_CODE': 'EVC_CODE', 'EVCBCSSRC': 'EVCBCSSRC', 'VEG_CODE': 'VEG_CODE', 'BIOEVC': 'BIOEVC', 'BIOREGCODE': 'BIOREGCODE', 'HECTARES': 'HECTARES', 'EVC_GP': 'EVC_GP', 'EVC_SUBGP': 'EVC_SUBGP', 'X_EVCNAME': 'X_EVCNAME', 'AREASQM': 'AREASQM', 'XGROUPNAME': 'XGROUPNAME', 'XSUBGGROUP': 'XSUBGGROUP', });
lyr_NV1750_EVCBCS_hindmarsh_4.set('fieldAliases', {'SCALE': 'SCALE', 'EVC': 'EVC', 'EVC_BCS': 'EVC_BCS', 'BIOREGNO': 'BIOREGNO', 'EVC_GO': 'EVC_GO', 'EVCBCSDESC': 'EVCBCSDESC', 'EVC_MUT': 'EVC_MUT', 'EVCGODESC': 'EVCGODESC', 'BIOREGION': 'BIOREGION', 'EVC_CODE': 'EVC_CODE', 'EVCBCSSRC': 'EVCBCSSRC', 'VEG_CODE': 'VEG_CODE', 'BIOEVC': 'BIOEVC', 'BIOREGCODE': 'BIOREGCODE', 'HECTARES': 'HECTARES', 'EVC_GP': 'EVC_GP', 'EVC_SUBGP': 'EVC_SUBGP', 'X_EVCNAME': 'X_EVCNAME', 'AREASQM': 'AREASQM', 'XGROUPNAME': 'XGROUPNAME', 'XSUBGGROUP': 'XSUBGGROUP', });
lyr_parkres_5.set('fieldAliases', {'PRIMS_ID': 'PRIMS_ID', 'NAME': 'NAME', 'NAME_SHORT': 'NAME_SHORT', 'AREA_TYPE': 'AREA_TYPE', 'TOTAL_AREA': 'TOTAL_AREA', 'AREA_SRC': 'AREA_SRC', 'MANAGER': 'MANAGER', 'VEAC_REC': 'VEAC_REC', 'VEAC_STUDY': 'VEAC_STUDY', 'IUCN': 'IUCN', 'ESTAB_DATE': 'ESTAB_DATE', 'POLY_SRC': 'POLY_SRC', 'AREATYPEID': 'AREATYPEID', 'SRCHNAME': 'SRCHNAME', 'LAST_MOD': 'LAST_MOD', 'VERS_DATE': 'VERS_DATE', 'AREASQM': 'AREASQM', 'HECTARES': 'HECTARES', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6.set('fieldAliases', {'id': 'id', 'Landholder': 'Landholder', 'Year': 'Year', });
lyr_AllPPhistoricrevegpre2025_withEVCs_7.set('fieldAliases', {'id': 'id', 'Landholder': 'Landholder', 'Year': 'Year', 'EVC': 'EVC', });
lyr_WBMP_sites_040509_Water600m_8.set('fieldAliases', {'SITE_NUMBE': 'SITE_NUMBE', 'SITE_NAME': 'SITE_NAME', 'CFA__MAP': 'CFA__MAP', 'BIOREGION': 'BIOREGION', 'EVC_GROUP': 'EVC_GROUP', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'LAND_TENUR': 'LAND_TENUR', 'PATCH_SIZE': 'PATCH_SIZE', 'HA': 'HA', 'CATEGORY': 'CATEGORY', 'SHIRE_NAME': 'SHIRE_NAME', 'ALLOT_NO': 'ALLOT_NO', 'SITE_STATU': 'SITE_STATU', });
lyr_WBMP_sites_040509_9.set('fieldAliases', {'SITE_NUMBE': 'SITE_NUMBE', 'SITE_NAME': 'SITE_NAME', 'CFA__MAP': 'CFA__MAP', 'BIOREGION': 'BIOREGION', 'EVC_GROUP': 'EVC_GROUP', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'LAND_TENUR': 'LAND_TENUR', 'PATCH_SIZE': 'PATCH_SIZE', 'HA': 'HA', 'CATEGORY': 'CATEGORY', 'SHIRE_NAME': 'SHIRE_NAME', 'ALLOT_NO': 'ALLOT_NO', 'SITE_STATU': 'SITE_STATU', 'WTR_PROXIM': 'WTR_PROXIM', });
lyr_20050923allsites_10.set('fieldAliases', {'FID_1': 'FID_1', 'FID_1_1': 'FID_1_1', 'GROUP_NAME': 'GROUP_NAME', 'BIO_R_DESC': 'BIO_R_DESC', 'DES': 'DES', 'LCC_DESC': 'LCC_DESC', 'NAME': 'NAME', 'AREA': 'AREA', 'Easting': 'Easting', 'Northing': 'Northing', 'SITE_ID': 'SITE_ID', 'OID_': 'OID_', 'SITE_ID_1': 'SITE_ID_1', 'CATEGORY': 'CATEGORY', 'CODE': 'CODE', 'NAME_1': 'NAME_1', 'P_SPI': 'P_SPI', 'P_ALLOTMEN': 'P_ALLOTMEN', 'SiteStatus': 'SiteStatus', });
lyr_ProjectHindmarsh2005_11.set('fieldAliases', {'Area': 'Area', 'LANDHOLDER': 'LANDHOLDER', 'VEGTYPE': 'VEGTYPE', 'WORKTYPE': 'WORKTYPE', 'PROJECT': 'PROJECT', 'SPECIES': 'SPECIES', 'YEAR': 'YEAR', });
lyr_ProjectHindmarsh2006_12.set('fieldAliases', {'ID': 'ID', 'LANDHOLDER': 'LANDHOLDER', 'VEGTYPE': 'VEGTYPE', 'WORKTYPE': 'WORKTYPE', 'AREA': 'AREA', 'YEAR': 'YEAR', 'PROJECT': 'PROJECT', 'SPECIES': 'SPECIES', 'A00ID': 'A00ID', });
lyr_Hindmarshrevegfulcrum_13.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'system_created_at': 'system_created_at', 'system_updated_at': 'system_updated_at', 'version': 'version', 'status': 'status', 'project': 'project', 'assigned_to': 'assigned_to', 'latitude': 'latitude', 'longitude': 'longitude', 'site_name': 'site_name', 'site_type': 'site_type', 'site_type_other': 'site_type_other', 'landcare_region': 'landcare_region', 'year_established': 'year_established', 'site_description': 'site_description', 'land_access_manager_name': 'land_access_manager_name', 'land_access_manager_number': 'land_access_manager_number', 'planted_species_list': 'planted_species_list', 'weed_priority_list': 'weed_priority_list', 'polygon_points': 'polygon_points', 'gps_altitude': 'gps_altitude', 'gps_horizontal_accuracy': 'gps_horizontal_accuracy', 'gps_vertical_accuracy': 'gps_vertical_accuracy', 'gps_speed': 'gps_speed', 'gps_course': 'gps_course', });
lyr_NV1750_EVCBCS_PP_3.set('fieldImages', {'SCALE': 'TextEdit', 'EVC': 'TextEdit', 'EVC_BCS': 'TextEdit', 'BIOREGNO': 'TextEdit', 'EVC_GO': 'TextEdit', 'EVCBCSDESC': 'TextEdit', 'EVC_MUT': 'TextEdit', 'EVCGODESC': 'TextEdit', 'BIOREGION': 'TextEdit', 'EVC_CODE': 'TextEdit', 'EVCBCSSRC': 'TextEdit', 'VEG_CODE': 'TextEdit', 'BIOEVC': 'TextEdit', 'BIOREGCODE': 'TextEdit', 'HECTARES': 'TextEdit', 'EVC_GP': 'TextEdit', 'EVC_SUBGP': 'TextEdit', 'X_EVCNAME': 'TextEdit', 'AREASQM': 'TextEdit', 'XGROUPNAME': 'TextEdit', 'XSUBGGROUP': 'TextEdit', });
lyr_NV1750_EVCBCS_hindmarsh_4.set('fieldImages', {'SCALE': 'TextEdit', 'EVC': 'TextEdit', 'EVC_BCS': 'TextEdit', 'BIOREGNO': 'TextEdit', 'EVC_GO': 'TextEdit', 'EVCBCSDESC': 'TextEdit', 'EVC_MUT': 'TextEdit', 'EVCGODESC': 'TextEdit', 'BIOREGION': 'TextEdit', 'EVC_CODE': 'TextEdit', 'EVCBCSSRC': 'TextEdit', 'VEG_CODE': 'TextEdit', 'BIOEVC': 'TextEdit', 'BIOREGCODE': 'TextEdit', 'HECTARES': 'TextEdit', 'EVC_GP': 'TextEdit', 'EVC_SUBGP': 'TextEdit', 'X_EVCNAME': 'TextEdit', 'AREASQM': 'TextEdit', 'XGROUPNAME': 'TextEdit', 'XSUBGGROUP': 'TextEdit', });
lyr_parkres_5.set('fieldImages', {'PRIMS_ID': 'Range', 'NAME': 'TextEdit', 'NAME_SHORT': 'TextEdit', 'AREA_TYPE': 'TextEdit', 'TOTAL_AREA': 'TextEdit', 'AREA_SRC': 'TextEdit', 'MANAGER': 'TextEdit', 'VEAC_REC': 'TextEdit', 'VEAC_STUDY': 'TextEdit', 'IUCN': 'TextEdit', 'ESTAB_DATE': 'DateTime', 'POLY_SRC': 'TextEdit', 'AREATYPEID': 'Range', 'SRCHNAME': 'TextEdit', 'LAST_MOD': 'DateTime', 'VERS_DATE': 'DateTime', 'AREASQM': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6.set('fieldImages', {'id': 'TextEdit', 'Landholder': 'TextEdit', 'Year': 'TextEdit', });
lyr_AllPPhistoricrevegpre2025_withEVCs_7.set('fieldImages', {'id': 'TextEdit', 'Landholder': 'TextEdit', 'Year': 'TextEdit', 'EVC': 'TextEdit', });
lyr_WBMP_sites_040509_Water600m_8.set('fieldImages', {'SITE_NUMBE': '', 'SITE_NAME': '', 'CFA__MAP': '', 'BIOREGION': '', 'EVC_GROUP': '', 'EASTING': '', 'NORTHING': '', 'LAND_TENUR': '', 'PATCH_SIZE': '', 'HA': '', 'CATEGORY': 'TextEdit', 'SHIRE_NAME': '', 'ALLOT_NO': '', 'SITE_STATU': '', });
lyr_WBMP_sites_040509_9.set('fieldImages', {'SITE_NUMBE': '', 'SITE_NAME': '', 'CFA__MAP': '', 'BIOREGION': '', 'EVC_GROUP': '', 'EASTING': '', 'NORTHING': '', 'LAND_TENUR': '', 'PATCH_SIZE': '', 'HA': '', 'CATEGORY': 'TextEdit', 'SHIRE_NAME': '', 'ALLOT_NO': '', 'SITE_STATU': '', 'WTR_PROXIM': '', });
lyr_20050923allsites_10.set('fieldImages', {'FID_1': 'Range', 'FID_1_1': 'Range', 'GROUP_NAME': 'TextEdit', 'BIO_R_DESC': 'TextEdit', 'DES': 'TextEdit', 'LCC_DESC': 'TextEdit', 'NAME': 'TextEdit', 'AREA': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'SITE_ID': 'Range', 'OID_': 'Range', 'SITE_ID_1': 'TextEdit', 'CATEGORY': 'TextEdit', 'CODE': 'TextEdit', 'NAME_1': 'TextEdit', 'P_SPI': 'TextEdit', 'P_ALLOTMEN': 'TextEdit', 'SiteStatus': 'TextEdit', });
lyr_ProjectHindmarsh2005_11.set('fieldImages', {'Area': '', 'LANDHOLDER': '', 'VEGTYPE': '', 'WORKTYPE': '', 'PROJECT': '', 'SPECIES': '', 'YEAR': '', });
lyr_ProjectHindmarsh2006_12.set('fieldImages', {'ID': '', 'LANDHOLDER': '', 'VEGTYPE': '', 'WORKTYPE': '', 'AREA': '', 'YEAR': '', 'PROJECT': '', 'SPECIES': '', 'A00ID': '', });
lyr_Hindmarshrevegfulcrum_13.set('fieldImages', {'fulcrum_id': '', 'created_at': '', 'updated_at': '', 'created_by': '', 'updated_by': '', 'system_created_at': '', 'system_updated_at': '', 'version': '', 'status': '', 'project': '', 'assigned_to': '', 'latitude': '', 'longitude': '', 'site_name': '', 'site_type': '', 'site_type_other': '', 'landcare_region': '', 'year_established': '', 'site_description': '', 'land_access_manager_name': '', 'land_access_manager_number': '', 'planted_species_list': '', 'weed_priority_list': '', 'polygon_points': '', 'gps_altitude': '', 'gps_horizontal_accuracy': '', 'gps_vertical_accuracy': '', 'gps_speed': '', 'gps_course': '', });
lyr_NV1750_EVCBCS_PP_3.set('fieldLabels', {'SCALE': 'no label', 'EVC': 'no label', 'EVC_BCS': 'no label', 'BIOREGNO': 'no label', 'EVC_GO': 'no label', 'EVCBCSDESC': 'no label', 'EVC_MUT': 'no label', 'EVCGODESC': 'no label', 'BIOREGION': 'no label', 'EVC_CODE': 'no label', 'EVCBCSSRC': 'no label', 'VEG_CODE': 'no label', 'BIOEVC': 'no label', 'BIOREGCODE': 'no label', 'HECTARES': 'no label', 'EVC_GP': 'no label', 'EVC_SUBGP': 'no label', 'X_EVCNAME': 'no label', 'AREASQM': 'no label', 'XGROUPNAME': 'no label', 'XSUBGGROUP': 'no label', });
lyr_NV1750_EVCBCS_hindmarsh_4.set('fieldLabels', {'SCALE': 'no label', 'EVC': 'no label', 'EVC_BCS': 'no label', 'BIOREGNO': 'no label', 'EVC_GO': 'no label', 'EVCBCSDESC': 'no label', 'EVC_MUT': 'no label', 'EVCGODESC': 'no label', 'BIOREGION': 'no label', 'EVC_CODE': 'no label', 'EVCBCSSRC': 'no label', 'VEG_CODE': 'no label', 'BIOEVC': 'no label', 'BIOREGCODE': 'no label', 'HECTARES': 'no label', 'EVC_GP': 'no label', 'EVC_SUBGP': 'no label', 'X_EVCNAME': 'no label', 'AREASQM': 'no label', 'XGROUPNAME': 'no label', 'XSUBGGROUP': 'no label', });
lyr_parkres_5.set('fieldLabels', {'PRIMS_ID': 'no label', 'NAME': 'no label', 'NAME_SHORT': 'no label', 'AREA_TYPE': 'no label', 'TOTAL_AREA': 'no label', 'AREA_SRC': 'no label', 'MANAGER': 'no label', 'VEAC_REC': 'no label', 'VEAC_STUDY': 'no label', 'IUCN': 'no label', 'ESTAB_DATE': 'no label', 'POLY_SRC': 'no label', 'AREATYPEID': 'no label', 'SRCHNAME': 'no label', 'LAST_MOD': 'no label', 'VERS_DATE': 'no label', 'AREASQM': 'no label', 'HECTARES': 'no label', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_6.set('fieldLabels', {'id': 'no label', 'Landholder': 'no label', 'Year': 'no label', });
lyr_AllPPhistoricrevegpre2025_withEVCs_7.set('fieldLabels', {'id': 'no label', 'Landholder': 'no label', 'Year': 'no label', 'EVC': 'no label', });
lyr_WBMP_sites_040509_Water600m_8.set('fieldLabels', {'SITE_NUMBE': 'no label', 'SITE_NAME': 'no label', 'CFA__MAP': 'no label', 'BIOREGION': 'no label', 'EVC_GROUP': 'no label', 'EASTING': 'no label', 'NORTHING': 'no label', 'LAND_TENUR': 'no label', 'PATCH_SIZE': 'no label', 'HA': 'no label', 'CATEGORY': 'no label', 'SHIRE_NAME': 'no label', 'ALLOT_NO': 'no label', 'SITE_STATU': 'no label', });
lyr_WBMP_sites_040509_9.set('fieldLabels', {'SITE_NUMBE': 'no label', 'SITE_NAME': 'no label', 'CFA__MAP': 'no label', 'BIOREGION': 'no label', 'EVC_GROUP': 'no label', 'EASTING': 'no label', 'NORTHING': 'no label', 'LAND_TENUR': 'no label', 'PATCH_SIZE': 'no label', 'HA': 'no label', 'CATEGORY': 'no label', 'SHIRE_NAME': 'no label', 'ALLOT_NO': 'no label', 'SITE_STATU': 'no label', 'WTR_PROXIM': 'no label', });
lyr_20050923allsites_10.set('fieldLabels', {'FID_1': 'no label', 'FID_1_1': 'no label', 'GROUP_NAME': 'no label', 'BIO_R_DESC': 'no label', 'DES': 'no label', 'LCC_DESC': 'no label', 'NAME': 'no label', 'AREA': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'SITE_ID': 'no label', 'OID_': 'no label', 'SITE_ID_1': 'no label', 'CATEGORY': 'no label', 'CODE': 'no label', 'NAME_1': 'no label', 'P_SPI': 'no label', 'P_ALLOTMEN': 'no label', 'SiteStatus': 'no label', });
lyr_ProjectHindmarsh2005_11.set('fieldLabels', {'Area': 'no label', 'LANDHOLDER': 'no label', 'VEGTYPE': 'no label', 'WORKTYPE': 'no label', 'PROJECT': 'no label', 'SPECIES': 'no label', 'YEAR': 'no label', });
lyr_ProjectHindmarsh2006_12.set('fieldLabels', {'ID': 'no label', 'LANDHOLDER': 'no label', 'VEGTYPE': 'no label', 'WORKTYPE': 'no label', 'AREA': 'no label', 'YEAR': 'no label', 'PROJECT': 'no label', 'SPECIES': 'no label', 'A00ID': 'no label', });
lyr_Hindmarshrevegfulcrum_13.set('fieldLabels', {'fulcrum_id': 'no label', 'created_at': 'no label', 'updated_at': 'no label', 'created_by': 'no label', 'updated_by': 'no label', 'system_created_at': 'no label', 'system_updated_at': 'no label', 'version': 'no label', 'status': 'no label', 'project': 'no label', 'assigned_to': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'site_name': 'no label', 'site_type': 'no label', 'site_type_other': 'no label', 'landcare_region': 'no label', 'year_established': 'no label', 'site_description': 'no label', 'land_access_manager_name': 'no label', 'land_access_manager_number': 'no label', 'planted_species_list': 'no label', 'weed_priority_list': 'no label', 'polygon_points': 'no label', 'gps_altitude': 'no label', 'gps_horizontal_accuracy': 'no label', 'gps_vertical_accuracy': 'no label', 'gps_speed': 'no label', 'gps_course': 'no label', });
lyr_Hindmarshrevegfulcrum_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});