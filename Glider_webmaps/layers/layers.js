var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'opacity': 0.434000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_parkres_1 = new ol.format.GeoJSON();
var features_parkres_1 = format_parkres_1.readFeatures(json_parkres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkres_1.addFeatures(features_parkres_1);
var lyr_parkres_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkres_1, 
                style: style_parkres_1,
                popuplayertitle: 'parkres',
                interactive: true,
                title: '<img src="styles/legend/parkres_1.png" /> parkres'
            });
var format_AllPPhistoricrevegpre2025_Fixedgeometries_2 = new ol.format.GeoJSON();
var features_AllPPhistoricrevegpre2025_Fixedgeometries_2 = format_AllPPhistoricrevegpre2025_Fixedgeometries_2.readFeatures(json_AllPPhistoricrevegpre2025_Fixedgeometries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_2.addFeatures(features_AllPPhistoricrevegpre2025_Fixedgeometries_2);
var lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_2, 
                style: style_AllPPhistoricrevegpre2025_Fixedgeometries_2,
                popuplayertitle: 'All PP historic reveg pre 2025_Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/AllPPhistoricrevegpre2025_Fixedgeometries_2.png" /> All PP historic reveg pre 2025_Fixed geometries'
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
var format_Fulcrumrecordsfieldcrewapp202425_6 = new ol.format.GeoJSON();
var features_Fulcrumrecordsfieldcrewapp202425_6 = format_Fulcrumrecordsfieldcrewapp202425_6.readFeatures(json_Fulcrumrecordsfieldcrewapp202425_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordsfieldcrewapp202425_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordsfieldcrewapp202425_6.addFeatures(features_Fulcrumrecordsfieldcrewapp202425_6);
var lyr_Fulcrumrecordsfieldcrewapp202425_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordsfieldcrewapp202425_6, 
                style: style_Fulcrumrecordsfieldcrewapp202425_6,
                popuplayertitle: 'Fulcrum records field crew app 2024 25',
                interactive: true,
    title: 'Fulcrum records field crew app 2024 25<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_0.png" /> Squirrel Glider <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_1.png" /> Potential Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_2.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_3.png" /> Unknown Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_4.png" /> Sugar glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_5.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_6.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_7.png" /> <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_8.png" /> Antechinus<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_9.png" /> Brush tail possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_10.png" /> Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_11.png" /> Ring Tail Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_12.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_13.png" /> Sugar Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202425_6_14.png" /> Unknown  Owl<br />' });
var format_Fulcrumrecordsfieldcrewapp202526_7 = new ol.format.GeoJSON();
var features_Fulcrumrecordsfieldcrewapp202526_7 = format_Fulcrumrecordsfieldcrewapp202526_7.readFeatures(json_Fulcrumrecordsfieldcrewapp202526_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fulcrumrecordsfieldcrewapp202526_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fulcrumrecordsfieldcrewapp202526_7.addFeatures(features_Fulcrumrecordsfieldcrewapp202526_7);
var lyr_Fulcrumrecordsfieldcrewapp202526_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fulcrumrecordsfieldcrewapp202526_7, 
                style: style_Fulcrumrecordsfieldcrewapp202526_7,
                popuplayertitle: 'Fulcrum records field crew app 2025 26',
                interactive: true,
    title: 'Fulcrum records field crew app 2025 26<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_0.png" /> Squirrel Glider <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_1.png" /> Potential Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_2.png" /> Unknown Petaurus Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_3.png" /> Unknown Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_4.png" /> Sugar glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_5.png" /> Brush Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_6.png" /> Ring Tail Possum<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_7.png" /> <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_8.png" /> Antechinus<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_9.png" /> Brush tail possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_10.png" /> Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_11.png" /> Ring Tail Possum <br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_12.png" /> Squirrel Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_13.png" /> Sugar Glider<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_14.png" /> Unknown  Owl<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_15.png" /> Boo book<br />\
    <img src="styles/legend/Fulcrumrecordsfieldcrewapp202526_7_16.png" /> Tawny frogmouth<br />' });
var group_Surveytracks = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Survey tracks'});
var group_GliderNightSurveys = new ol.layer.Group({
                                layers: [lyr_February2024surveyresults_3,lyr_Nov2022surveyresults_4,lyr_Fulcrumrecordscommunityapp_5,lyr_Fulcrumrecordsfieldcrewapp202425_6,lyr_Fulcrumrecordsfieldcrewapp202526_7,],
                                fold: "open",
                                title: 'Glider Night Surveys'});

lyr_Googlesatellite_0.setVisible(true);lyr_parkres_1.setVisible(true);lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2.setVisible(true);lyr_February2024surveyresults_3.setVisible(true);lyr_Nov2022surveyresults_4.setVisible(true);lyr_Fulcrumrecordscommunityapp_5.setVisible(true);lyr_Fulcrumrecordsfieldcrewapp202425_6.setVisible(true);lyr_Fulcrumrecordsfieldcrewapp202526_7.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_parkres_1,lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2,group_GliderNightSurveys];
lyr_parkres_1.set('fieldAliases', {'PRIMS_ID': 'PRIMS_ID', 'NAME': 'NAME', 'NAME_SHORT': 'NAME_SHORT', 'AREA_TYPE': 'AREA_TYPE', 'TOTAL_AREA': 'TOTAL_AREA', 'AREA_SRC': 'AREA_SRC', 'MANAGER': 'MANAGER', 'VEAC_REC': 'VEAC_REC', 'VEAC_STUDY': 'VEAC_STUDY', 'IUCN': 'IUCN', 'ESTAB_DATE': 'ESTAB_DATE', 'POLY_SRC': 'POLY_SRC', 'AREATYPEID': 'AREATYPEID', 'SRCHNAME': 'SRCHNAME', 'LAST_MOD': 'LAST_MOD', 'VERS_DATE': 'VERS_DATE', 'AREASQM': 'AREASQM', 'HECTARES': 'HECTARES', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2.set('fieldAliases', {'id': 'id', 'landholder': 'landholder', 'year_estab': 'year_estab', 'landholder_1': 'landholder_1', 'Perimetre': 'Perimetre', 'Perimetr_1': 'Perimetr_1', 'perimetr_2': 'perimetr_2', 'site_initi': 'site_initi', 'site_perfo': 'site_perfo', 'site_name': 'site_name', 'site_type': 'site_type', 'tenure': 'tenure', });
lyr_February2024surveyresults_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Time': 'Photo Time', 'Photo Loca': 'Photo Loca', 'Photo Alti': 'Photo Alti', 'Photo Orie': 'Photo Orie', 'Device Typ': 'Device Typ', });
lyr_Nov2022surveyresults_4.set('fieldAliases', {'id': 'id', 'Common nam': 'Common nam', 'number': 'number', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_lookup': 'species_lookup', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'how_confident': 'how_confident', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', 'associated_plant_species': 'associated_plant_species', });
lyr_Fulcrumrecordsfieldcrewapp202425_6.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_look_up': 'species_look_up', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', });
lyr_Fulcrumrecordsfieldcrewapp202526_7.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'fulcrum_parent_id': 'fulcrum_parent_id', 'fulcrum_record_id': 'fulcrum_record_id', 'version': 'version', 'latitude': 'latitude', 'longitude': 'longitude', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'species_look_up': 'species_look_up', 'common_name': 'common_name', 'scientific_name': 'scientific_name', 'number_of_individuals': 'number_of_individuals', 'behaviour_notes': 'behaviour_notes', });
lyr_parkres_1.set('fieldImages', {'PRIMS_ID': 'Range', 'NAME': 'TextEdit', 'NAME_SHORT': 'TextEdit', 'AREA_TYPE': 'TextEdit', 'TOTAL_AREA': 'TextEdit', 'AREA_SRC': 'TextEdit', 'MANAGER': 'TextEdit', 'VEAC_REC': 'TextEdit', 'VEAC_STUDY': 'TextEdit', 'IUCN': 'TextEdit', 'ESTAB_DATE': 'DateTime', 'POLY_SRC': 'TextEdit', 'AREATYPEID': 'Range', 'SRCHNAME': 'TextEdit', 'LAST_MOD': 'DateTime', 'VERS_DATE': 'DateTime', 'AREASQM': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2.set('fieldImages', {'id': '', 'landholder': '', 'year_estab': '', 'landholder_1': '', 'Perimetre': '', 'Perimetr_1': '', 'perimetr_2': '', 'site_initi': '', 'site_perfo': '', 'site_name': '', 'site_type': '', 'tenure': '', });
lyr_February2024surveyresults_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo Name': 'TextEdit', 'Photo Date': 'TextEdit', 'Photo Time': 'TextEdit', 'Photo Loca': 'TextEdit', 'Photo Alti': 'TextEdit', 'Photo Orie': 'TextEdit', 'Device Typ': 'TextEdit', });
lyr_Nov2022surveyresults_4.set('fieldImages', {'id': 'TextEdit', 'Common nam': 'TextEdit', 'number': 'TextEdit', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_lookup': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'how_confident': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', 'associated_plant_species': 'TextEdit', });
lyr_Fulcrumrecordsfieldcrewapp202425_6.set('fieldImages', {'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_look_up': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', });
lyr_Fulcrumrecordsfieldcrewapp202526_7.set('fieldImages', {'fulcrum_id': 'TextEdit', 'fulcrum_parent_id': 'TextEdit', 'fulcrum_record_id': 'TextEdit', 'version': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'species_look_up': 'TextEdit', 'common_name': 'TextEdit', 'scientific_name': 'TextEdit', 'number_of_individuals': 'TextEdit', 'behaviour_notes': 'TextEdit', });
lyr_parkres_1.set('fieldLabels', {'PRIMS_ID': 'no label', 'NAME': 'no label', 'NAME_SHORT': 'no label', 'AREA_TYPE': 'no label', 'TOTAL_AREA': 'no label', 'AREA_SRC': 'no label', 'MANAGER': 'no label', 'VEAC_REC': 'no label', 'VEAC_STUDY': 'no label', 'IUCN': 'no label', 'ESTAB_DATE': 'no label', 'POLY_SRC': 'no label', 'AREATYPEID': 'no label', 'SRCHNAME': 'no label', 'LAST_MOD': 'no label', 'VERS_DATE': 'no label', 'AREASQM': 'no label', 'HECTARES': 'no label', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_2.set('fieldLabels', {'id': 'no label', 'landholder': 'no label', 'year_estab': 'no label', 'landholder_1': 'no label', 'Perimetre': 'no label', 'Perimetr_1': 'no label', 'perimetr_2': 'no label', 'site_initi': 'no label', 'site_perfo': 'no label', 'site_name': 'no label', 'site_type': 'no label', 'tenure': 'no label', });
lyr_February2024surveyresults_3.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo Name': 'hidden field', 'Photo Date': 'hidden field', 'Photo Time': 'hidden field', 'Photo Loca': 'hidden field', 'Photo Alti': 'hidden field', 'Photo Orie': 'hidden field', 'Device Typ': 'hidden field', });
lyr_Nov2022surveyresults_4.set('fieldLabels', {'id': 'hidden field', 'Common nam': 'inline label - always visible', 'number': 'inline label - always visible', });
lyr_Fulcrumrecordscommunityapp_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_lookup': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'no label', 'how_confident': 'hidden field', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', 'associated_plant_species': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp202425_6.set('fieldLabels', {'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_look_up': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'inline label - always visible', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp202526_7.set('fieldLabels', {'fulcrum_id': 'hidden field', 'fulcrum_parent_id': 'hidden field', 'fulcrum_record_id': 'hidden field', 'version': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'created_at': 'inline label - always visible', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'species_look_up': 'hidden field', 'common_name': 'inline label - always visible', 'scientific_name': 'inline label - always visible', 'number_of_individuals': 'inline label - always visible', 'behaviour_notes': 'inline label - always visible', });
lyr_Fulcrumrecordsfieldcrewapp202526_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});