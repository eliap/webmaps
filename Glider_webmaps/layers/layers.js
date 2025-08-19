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
var format_Landlenure_2 = new ol.format.GeoJSON();
var features_Landlenure_2 = format_Landlenure_2.readFeatures(json_Landlenure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landlenure_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landlenure_2.addFeatures(features_Landlenure_2);
var lyr_Landlenure_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landlenure_2, 
                style: style_Landlenure_2,
                popuplayertitle: 'Land lenure',
                interactive: true,
                title: '<img src="styles/legend/Landlenure_2.png" /> Land lenure'
            });
var format_February2024surveyresults_3 = new ol.format.GeoJSON();
var features_February2024surveyresults_3 = format_February2024surveyresults_3.readFeatures(json_February2024surveyresults_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February2024surveyresults_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February2024surveyresults_3.addFeatures(features_February2024surveyresults_3);
var lyr_February2024surveyresults_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_February2024surveyresults_3, 
                style: style_February2024surveyresults_3,
                popuplayertitle: 'February 2024 survey results',
                interactive: true,
    title: 'February 2024 survey results<br />\
    <img src="styles/legend/February2024surveyresults_3_0.png" /> <br />\
    <img src="styles/legend/February2024surveyresults_3_1.png" /> CBP<br />\
    <img src="styles/legend/February2024surveyresults_3_2.png" /> CBP X 2<br />\
    <img src="styles/legend/February2024surveyresults_3_3.png" /> CBP X 3<br />\
    <img src="styles/legend/February2024surveyresults_3_4.png" /> ERP<br />\
    <img src="styles/legend/February2024surveyresults_3_5.png" /> ERP X 2<br />\
    <img src="styles/legend/February2024surveyresults_3_6.png" /> ERP X 3<br />\
    <img src="styles/legend/February2024surveyresults_3_7.png" /> Glider<br />\
    <img src="styles/legend/February2024surveyresults_3_8.png" /> Possum<br />\
    <img src="styles/legend/February2024surveyresults_3_9.png" /> Rodent<br />\
    <img src="styles/legend/February2024surveyresults_3_10.png" /> Small Mammal<br />\
    <img src="styles/legend/February2024surveyresults_3_11.png" /> Squirrel Glider<br />\
    <img src="styles/legend/February2024surveyresults_3_12.png" /> Sugar<br />\
    <img src="styles/legend/February2024surveyresults_3_13.png" /> Sugar X 2<br />' });
var format_Nov2022surveyresults_4 = new ol.format.GeoJSON();
var features_Nov2022surveyresults_4 = format_Nov2022surveyresults_4.readFeatures(json_Nov2022surveyresults_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nov2022surveyresults_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nov2022surveyresults_4.addFeatures(features_Nov2022surveyresults_4);
var lyr_Nov2022surveyresults_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nov2022surveyresults_4, 
                style: style_Nov2022surveyresults_4,
                popuplayertitle: 'Nov 2022 survey results',
                interactive: true,
    title: 'Nov 2022 survey results<br />\
    <img src="styles/legend/Nov2022surveyresults_4_0.png" /> <br />\
    <img src="styles/legend/Nov2022surveyresults_4_1.png" /> CBP<br />\
    <img src="styles/legend/Nov2022surveyresults_4_2.png" /> CBP X 2<br />\
    <img src="styles/legend/Nov2022surveyresults_4_3.png" /> CBP X 3<br />\
    <img src="styles/legend/Nov2022surveyresults_4_4.png" /> ERP<br />\
    <img src="styles/legend/Nov2022surveyresults_4_5.png" /> ERP X 2<br />\
    <img src="styles/legend/Nov2022surveyresults_4_6.png" /> ERP X 3<br />\
    <img src="styles/legend/Nov2022surveyresults_4_7.png" /> Glider<br />\
    <img src="styles/legend/Nov2022surveyresults_4_8.png" /> Possum<br />\
    <img src="styles/legend/Nov2022surveyresults_4_9.png" /> Rodent<br />\
    <img src="styles/legend/Nov2022surveyresults_4_10.png" /> Small Mammal<br />\
    <img src="styles/legend/Nov2022surveyresults_4_11.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Nov2022surveyresults_4_12.png" /> Sugar<br />\
    <img src="styles/legend/Nov2022surveyresults_4_13.png" /> Sugar X 2<br />' });
var format_Fulcrumrecordscommunityapp_5 = new ol.format.GeoJSON();
var features_Fulcrumrecordscommunityapp_5 = format_Fulcrumrecordscommunityapp_5.readFeatures(json_Fulcrumrecordscommunityapp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordscommunityapp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordscommunityapp_5.addFeatures(features_Fulcrumrecordscommunityapp_5);
var lyr_Fulcrumrecordscommunityapp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordscommunityapp_5, 
                style: style_Fulcrumrecordscommunityapp_5,
                popuplayertitle: 'Fulcrum records community app',
                interactive: true,
    title: 'Fulcrum records community app<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_0.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_1.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_2.png" /> Sugar Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_3.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_4.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_5_5.png" /> <br />' });
var format_Fulcrumrecordsfieldcrewapp_6 = new ol.format.GeoJSON();
var features_Fulcrumrecordsfieldcrewapp_6 = format_Fulcrumrecordsfieldcrewapp_6.readFeatures(json_Fulcrumrecordsfieldcrewapp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordsfieldcrewapp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordsfieldcrewapp_6.addFeatures(features_Fulcrumrecordsfieldcrewapp_6);
var lyr_Fulcrumrecordsfieldcrewapp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordsfieldcrewapp_6, 
                style: style_Fulcrumrecordsfieldcrewapp_6,
                popuplayertitle: 'Fulcrum records field crew app',
                interactive: true,
    title: 'Fulcrum records field crew app<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_0.png" /> Squirrel Glider <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_1.png" /> Potential Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_2.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_3.png" /> Unknown Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_4.png" /> Sugar glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_5.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_6.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_7.png" /> <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_8.png" /> Antechinus<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_9.png" /> Brush tail possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_10.png" /> Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_11.png" /> Ring Tail Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_12.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_13.png" /> Sugar Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_6_14.png" /> Unknown  Owl<br />' });
var group_GliderNightSurveys = new ol.layer.Group({
                                layers: [lyr_February2024surveyresults_3,lyr_Nov2022surveyresults_4,lyr_Fulcrumrecordscommunityapp_5,lyr_Fulcrumrecordsfieldcrewapp_6,],
                                fold: "open",
                                title: 'Glider Night Surveys'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlesatellite_1.setVisible(true);lyr_Landlenure_2.setVisible(true);lyr_February2024surveyresults_3.setVisible(true);lyr_Nov2022surveyresults_4.setVisible(true);lyr_Fulcrumrecordscommunityapp_5.setVisible(true);lyr_Fulcrumrecordsfieldcrewapp_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlesatellite_1,lyr_Landlenure_2,group_GliderNightSurveys];
lyr_Landlenure_2.set('fieldAliases', {'GENER_TYPE': 'GENER_TYPE', 'GENER_DESC': 'GENER_DESC', 'POLY_SOURC': 'POLY_SOURC', 'NAME': 'NAME', 'LABEL': 'LABEL', 'LABELSHORT': 'LABELSHORT', 'NAME_SOURC': 'NAME_SOURC', 'LU_CODE': 'LU_CODE', 'MMGT_ONGEN': 'MMGT_ONGEN', 'MMGT_ONGRD': 'MMGT_ONGRD', 'MMTGEN': 'MMTGEN', 'REC_CAT': 'REC_CAT', 'REC_SBCAT': 'REC_SBCAT', 'PLU_CODE': 'PLU_CODE', 'STUDY_AREA': 'STUDY_AREA', 'AREA_CODE': 'AREA_CODE', 'REC_CODE': 'REC_CODE', 'PRIMS_ID': 'PRIMS_ID', 'MNG_GROUP': 'MNG_GROUP', 'MNG_SPEC': 'MNG_SPEC', 'IUCN_CAT': 'IUCN_CAT', 'DATE_LCCAP': 'DATE_LCCAP', 'DATE_EST': 'DATE_EST', 'IMPL_STAT': 'IMPL_STAT', 'RES_DATE': 'RES_DATE', 'STGAME_RES': 'STGAME_RES', 'ACT': 'ACT', 'ADDTL_ACTS': 'ADDTL_ACTS', 'SCHED': 'SCHED', 'PKAREA_TY': 'PKAREA_TY', 'LGA_NAME': 'LGA_NAME', 'LGA_CODE': 'LGA_CODE', 'PLM_ID': 'PLM_ID', 'AREA_HA': 'AREA_HA', 'PERIMETER': 'PERIMETER', 'VERS_DATE': 'VERS_DATE', });
lyr_February2024surveyresults_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Time': 'Photo Time', 'Photo Loca': 'Photo Loca', 'Photo Alti': 'Photo Alti', 'Photo Orie': 'Photo Orie', 'Device Typ': 'Device Typ', });
lyr_Nov2022surveyresults_4.set('fieldAliases', {'id': 'id', 'Common nam': 'Common nam', 'number': 'number', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_lookup': 'species_lookup', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'how_confident': 'how_confident', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', 'associated_plant_species': 'associated_plant_species', });
lyr_Fulcrumrecordsfieldcrewapp_6.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_look_up': 'species_look_up', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', });
lyr_Landlenure_2.set('fieldImages', {'GENER_TYPE': '', 'GENER_DESC': '', 'POLY_SOURC': '', 'NAME': '', 'LABEL': '', 'LABELSHORT': '', 'NAME_SOURC': '', 'LU_CODE': '', 'MMGT_ONGEN': '', 'MMGT_ONGRD': '', 'MMTGEN': '', 'REC_CAT': '', 'REC_SBCAT': '', 'PLU_CODE': '', 'STUDY_AREA': '', 'AREA_CODE': '', 'REC_CODE': '', 'PRIMS_ID': '', 'MNG_GROUP': '', 'MNG_SPEC': '', 'IUCN_CAT': '', 'DATE_LCCAP': '', 'DATE_EST': '', 'IMPL_STAT': '', 'RES_DATE': '', 'STGAME_RES': '', 'ACT': '', 'ADDTL_ACTS': '', 'SCHED': '', 'PKAREA_TY': '', 'LGA_NAME': '', 'LGA_CODE': '', 'PLM_ID': '', 'AREA_HA': '', 'PERIMETER': '', 'VERS_DATE': '', });
lyr_February2024surveyresults_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo Name': 'TextEdit', 'Photo Date': 'TextEdit', 'Photo Time': 'TextEdit', 'Photo Loca': 'TextEdit', 'Photo Alti': 'TextEdit', 'Photo Orie': 'TextEdit', 'Device Typ': 'TextEdit', });
lyr_Nov2022surveyresults_4.set('fieldImages', {'id': 'TextEdit', 'Common nam': 'TextEdit', 'number': 'TextEdit', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_lookup': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'how_confident': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', 'associated_plant_species': 'TextEdit', });
lyr_Fulcrumrecordsfieldcrewapp_6.set('fieldImages', {'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_look_up': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', });
lyr_Landlenure_2.set('fieldLabels', {'GENER_TYPE': 'hidden field', 'GENER_DESC': 'inline label - always visible', 'POLY_SOURC': 'hidden field', 'NAME': 'hidden field', 'LABEL': 'hidden field', 'LABELSHORT': 'hidden field', 'NAME_SOURC': 'hidden field', 'LU_CODE': 'hidden field', 'MMGT_ONGEN': 'hidden field', 'MMGT_ONGRD': 'hidden field', 'MMTGEN': 'hidden field', 'REC_CAT': 'hidden field', 'REC_SBCAT': 'hidden field', 'PLU_CODE': 'hidden field', 'STUDY_AREA': 'hidden field', 'AREA_CODE': 'hidden field', 'REC_CODE': 'hidden field', 'PRIMS_ID': 'hidden field', 'MNG_GROUP': 'inline label - always visible', 'MNG_SPEC': 'hidden field', 'IUCN_CAT': 'hidden field', 'DATE_LCCAP': 'hidden field', 'DATE_EST': 'hidden field', 'IMPL_STAT': 'hidden field', 'RES_DATE': 'hidden field', 'STGAME_RES': 'hidden field', 'ACT': 'inline label - always visible', 'ADDTL_ACTS': 'hidden field', 'SCHED': 'hidden field', 'PKAREA_TY': 'hidden field', 'LGA_NAME': 'hidden field', 'LGA_CODE': 'hidden field', 'PLM_ID': 'hidden field', 'AREA_HA': 'hidden field', 'PERIMETER': 'hidden field', 'VERS_DATE': 'hidden field', });
lyr_February2024surveyresults_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo Name': 'hidden field', 'Photo Date': 'hidden field', 'Photo Time': 'hidden field', 'Photo Loca': 'hidden field', 'Photo Alti': 'hidden field', 'Photo Orie': 'hidden field', 'Device Typ': 'hidden field', });
lyr_Nov2022surveyresults_4.set('fieldLabels', {'id': 'hidden field', 'Common nam': 'inline label - always visible', 'number': 'inline label - always visible', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_lookup': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'no label', 'how_confident': 'hidden field', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', 'associated_plant_species': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp_6.set('fieldLabels', {'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_look_up': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'inline label - always visible', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});