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
var format_February2024surveyresults_2 = new ol.format.GeoJSON();
var features_February2024surveyresults_2 = format_February2024surveyresults_2.readFeatures(json_February2024surveyresults_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February2024surveyresults_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February2024surveyresults_2.addFeatures(features_February2024surveyresults_2);
var lyr_February2024surveyresults_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_February2024surveyresults_2, 
                style: style_February2024surveyresults_2,
                popuplayertitle: 'February 2024 survey results',
                interactive: true,
    title: 'February 2024 survey results<br />\
    <img src="styles/legend/February2024surveyresults_2_0.png" /> <br />\
    <img src="styles/legend/February2024surveyresults_2_1.png" /> CBP<br />\
    <img src="styles/legend/February2024surveyresults_2_2.png" /> CBP X 2<br />\
    <img src="styles/legend/February2024surveyresults_2_3.png" /> CBP X 3<br />\
    <img src="styles/legend/February2024surveyresults_2_4.png" /> ERP<br />\
    <img src="styles/legend/February2024surveyresults_2_5.png" /> ERP X 2<br />\
    <img src="styles/legend/February2024surveyresults_2_6.png" /> ERP X 3<br />\
    <img src="styles/legend/February2024surveyresults_2_7.png" /> Glider<br />\
    <img src="styles/legend/February2024surveyresults_2_8.png" /> Possum<br />\
    <img src="styles/legend/February2024surveyresults_2_9.png" /> Rodent<br />\
    <img src="styles/legend/February2024surveyresults_2_10.png" /> Small Mammal<br />\
    <img src="styles/legend/February2024surveyresults_2_11.png" /> Squirrel Glider<br />\
    <img src="styles/legend/February2024surveyresults_2_12.png" /> Sugar<br />\
    <img src="styles/legend/February2024surveyresults_2_13.png" /> Sugar X 2<br />' });
var format_Nov2022surveyresults_3 = new ol.format.GeoJSON();
var features_Nov2022surveyresults_3 = format_Nov2022surveyresults_3.readFeatures(json_Nov2022surveyresults_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nov2022surveyresults_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nov2022surveyresults_3.addFeatures(features_Nov2022surveyresults_3);
var lyr_Nov2022surveyresults_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nov2022surveyresults_3, 
                style: style_Nov2022surveyresults_3,
                popuplayertitle: 'Nov 2022 survey results',
                interactive: true,
    title: 'Nov 2022 survey results<br />\
    <img src="styles/legend/Nov2022surveyresults_3_0.png" /> <br />\
    <img src="styles/legend/Nov2022surveyresults_3_1.png" /> CBP<br />\
    <img src="styles/legend/Nov2022surveyresults_3_2.png" /> CBP X 2<br />\
    <img src="styles/legend/Nov2022surveyresults_3_3.png" /> CBP X 3<br />\
    <img src="styles/legend/Nov2022surveyresults_3_4.png" /> ERP<br />\
    <img src="styles/legend/Nov2022surveyresults_3_5.png" /> ERP X 2<br />\
    <img src="styles/legend/Nov2022surveyresults_3_6.png" /> ERP X 3<br />\
    <img src="styles/legend/Nov2022surveyresults_3_7.png" /> Glider<br />\
    <img src="styles/legend/Nov2022surveyresults_3_8.png" /> Possum<br />\
    <img src="styles/legend/Nov2022surveyresults_3_9.png" /> Rodent<br />\
    <img src="styles/legend/Nov2022surveyresults_3_10.png" /> Small Mammal<br />\
    <img src="styles/legend/Nov2022surveyresults_3_11.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Nov2022surveyresults_3_12.png" /> Sugar<br />\
    <img src="styles/legend/Nov2022surveyresults_3_13.png" /> Sugar X 2<br />' });
var format_Fulcrumrecordscommunityapp_4 = new ol.format.GeoJSON();
var features_Fulcrumrecordscommunityapp_4 = format_Fulcrumrecordscommunityapp_4.readFeatures(json_Fulcrumrecordscommunityapp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordscommunityapp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordscommunityapp_4.addFeatures(features_Fulcrumrecordscommunityapp_4);
var lyr_Fulcrumrecordscommunityapp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordscommunityapp_4, 
                style: style_Fulcrumrecordscommunityapp_4,
                popuplayertitle: 'Fulcrum records community app',
                interactive: true,
    title: 'Fulcrum records community app<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_0.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_1.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_2.png" /> Sugar Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_3.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_4.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordscommunityapp_4_5.png" /> <br />' });
var format_Fulcrumrecordsfieldcrewapp_5 = new ol.format.GeoJSON();
var features_Fulcrumrecordsfieldcrewapp_5 = format_Fulcrumrecordsfieldcrewapp_5.readFeatures(json_Fulcrumrecordsfieldcrewapp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordsfieldcrewapp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordsfieldcrewapp_5.addFeatures(features_Fulcrumrecordsfieldcrewapp_5);
var lyr_Fulcrumrecordsfieldcrewapp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordsfieldcrewapp_5, 
                style: style_Fulcrumrecordsfieldcrewapp_5,
                popuplayertitle: 'Fulcrum records field crew app',
                interactive: true,
    title: 'Fulcrum records field crew app<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_0.png" /> Squirrel Glider <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_1.png" /> Potential Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_2.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_3.png" /> Unknown Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_4.png" /> Sugar glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_5.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_6.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp_5_7.png" /> <br />' });
var group_Nov24NorthernGrampiansGliderSurveys2 = new ol.layer.Group({
                                layers: [lyr_February2024surveyresults_2,lyr_Nov2022surveyresults_3,lyr_Fulcrumrecordscommunityapp_4,lyr_Fulcrumrecordsfieldcrewapp_5,],
                                fold: "open",
                                title: 'Nov 24 Northern Grampians Glider Surveys (2)'});
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'group1'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlesatellite_1.setVisible(true);lyr_February2024surveyresults_2.setVisible(true);lyr_Nov2022surveyresults_3.setVisible(true);lyr_Fulcrumrecordscommunityapp_4.setVisible(true);lyr_Fulcrumrecordsfieldcrewapp_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlesatellite_1,group_Nov24NorthernGrampiansGliderSurveys2];
lyr_February2024surveyresults_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Time': 'Photo Time', 'Photo Loca': 'Photo Loca', 'Photo Alti': 'Photo Alti', 'Photo Orie': 'Photo Orie', 'Device Typ': 'Device Typ', });
lyr_Nov2022surveyresults_3.set('fieldAliases', {'id': 'id', 'Common nam': 'Common nam', 'number': 'number', });
lyr_Fulcrumrecordscommunityapp_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_lookup': 'species_lookup', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'how_confident': 'how_confident', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', 'associated_plant_species': 'associated_plant_species', });
lyr_Fulcrumrecordsfieldcrewapp_5.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_look_up': 'species_look_up', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', });
lyr_February2024surveyresults_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo Name': 'TextEdit', 'Photo Date': 'TextEdit', 'Photo Time': 'TextEdit', 'Photo Loca': 'TextEdit', 'Photo Alti': 'TextEdit', 'Photo Orie': 'TextEdit', 'Device Typ': 'TextEdit', });
lyr_Nov2022surveyresults_3.set('fieldImages', {'id': 'TextEdit', 'Common nam': 'TextEdit', 'number': 'TextEdit', });
lyr_Fulcrumrecordscommunityapp_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_lookup': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'how_confident': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', 'associated_plant_species': 'TextEdit', });
lyr_Fulcrumrecordsfieldcrewapp_5.set('fieldImages', {'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_look_up': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', });
lyr_February2024surveyresults_2.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo Name': 'hidden field', 'Photo Date': 'hidden field', 'Photo Time': 'hidden field', 'Photo Loca': 'hidden field', 'Photo Alti': 'hidden field', 'Photo Orie': 'hidden field', 'Device Typ': 'hidden field', });
lyr_Nov2022surveyresults_3.set('fieldLabels', {'id': 'hidden field', 'Common nam': 'inline label - always visible', 'number': 'inline label - always visible', });
lyr_Fulcrumrecordscommunityapp_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_lookup': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'no label', 'how_confident': 'hidden field', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', 'associated_plant_species': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp_5.set('fieldLabels', {'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_look_up': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'inline label - always visible', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});