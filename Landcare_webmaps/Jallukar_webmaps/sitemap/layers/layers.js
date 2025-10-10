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
var format_CrownlandparksreservesDEECAlayer_2 = new ol.format.GeoJSON();
var features_CrownlandparksreservesDEECAlayer_2 = format_CrownlandparksreservesDEECAlayer_2.readFeatures(json_CrownlandparksreservesDEECAlayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrownlandparksreservesDEECAlayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrownlandparksreservesDEECAlayer_2.addFeatures(features_CrownlandparksreservesDEECAlayer_2);
var lyr_CrownlandparksreservesDEECAlayer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrownlandparksreservesDEECAlayer_2, 
                style: style_CrownlandparksreservesDEECAlayer_2,
                popuplayertitle: 'Crown land, parks, reserves: DEECA layer',
                interactive: true,
                title: '<img src="styles/legend/CrownlandparksreservesDEECAlayer_2.png" /> Crown land, parks, reserves: DEECA layer'
            });
var format_AllUpperWimmeraLandcares_3 = new ol.format.GeoJSON();
var features_AllUpperWimmeraLandcares_3 = format_AllUpperWimmeraLandcares_3.readFeatures(json_AllUpperWimmeraLandcares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllUpperWimmeraLandcares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllUpperWimmeraLandcares_3.addFeatures(features_AllUpperWimmeraLandcares_3);
var lyr_AllUpperWimmeraLandcares_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllUpperWimmeraLandcares_3, 
                style: style_AllUpperWimmeraLandcares_3,
                popuplayertitle: 'All Upper Wimmera Landcares',
                interactive: true,
                title: '<img src="styles/legend/AllUpperWimmeraLandcares_3.png" /> All Upper Wimmera Landcares'
            });
var format_AllPPhistoricrevegpre2025_Fixedgeometries_4 = new ol.format.GeoJSON();
var features_AllPPhistoricrevegpre2025_Fixedgeometries_4 = format_AllPPhistoricrevegpre2025_Fixedgeometries_4.readFeatures(json_AllPPhistoricrevegpre2025_Fixedgeometries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_4.addFeatures(features_AllPPhistoricrevegpre2025_Fixedgeometries_4);
var lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPPhistoricrevegpre2025_Fixedgeometries_4, 
                style: style_AllPPhistoricrevegpre2025_Fixedgeometries_4,
                popuplayertitle: 'All PP historic reveg pre 2025_Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/AllPPhistoricrevegpre2025_Fixedgeometries_4.png" /> All PP historic reveg pre 2025_Fixed geometries'
            });
var format_Jallukarlongtermsites_fulcrum_5 = new ol.format.GeoJSON();
var features_Jallukarlongtermsites_fulcrum_5 = format_Jallukarlongtermsites_fulcrum_5.readFeatures(json_Jallukarlongtermsites_fulcrum_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jallukarlongtermsites_fulcrum_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jallukarlongtermsites_fulcrum_5.addFeatures(features_Jallukarlongtermsites_fulcrum_5);
var lyr_Jallukarlongtermsites_fulcrum_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jallukarlongtermsites_fulcrum_5, 
                style: style_Jallukarlongtermsites_fulcrum_5,
                popuplayertitle: 'Jallukar long term sites_fulcrum',
                interactive: true,
                title: '<img src="styles/legend/Jallukarlongtermsites_fulcrum_5.png" /> Jallukar long term sites_fulcrum'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlesatellite_1.setVisible(true);lyr_CrownlandparksreservesDEECAlayer_2.setVisible(true);lyr_AllUpperWimmeraLandcares_3.setVisible(true);lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4.setVisible(true);lyr_Jallukarlongtermsites_fulcrum_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlesatellite_1,lyr_CrownlandparksreservesDEECAlayer_2,lyr_AllUpperWimmeraLandcares_3,lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4,lyr_Jallukarlongtermsites_fulcrum_5];
lyr_CrownlandparksreservesDEECAlayer_2.set('fieldAliases', {'GENER_TYPE': 'GENER_TYPE', 'GENER_DESC': 'GENER_DESC', 'POLY_SOURC': 'POLY_SOURC', 'NAME': 'NAME', 'LABEL': 'LABEL', 'LABELSHORT': 'LABELSHORT', 'NAME_SOURC': 'NAME_SOURC', 'LU_CODE': 'LU_CODE', 'MMGT_ONGEN': 'MMGT_ONGEN', 'MMGT_ONGRD': 'MMGT_ONGRD', 'MMTGEN': 'MMTGEN', 'REC_CAT': 'REC_CAT', 'REC_SBCAT': 'REC_SBCAT', 'PLU_CODE': 'PLU_CODE', 'STUDY_AREA': 'STUDY_AREA', 'AREA_CODE': 'AREA_CODE', 'REC_CODE': 'REC_CODE', 'PRIMS_ID': 'PRIMS_ID', 'MNG_GROUP': 'MNG_GROUP', 'MNG_SPEC': 'MNG_SPEC', 'IUCN_CAT': 'IUCN_CAT', 'DATE_LCCAP': 'DATE_LCCAP', 'DATE_EST': 'DATE_EST', 'IMPL_STAT': 'IMPL_STAT', 'RES_DATE': 'RES_DATE', 'STGAME_RES': 'STGAME_RES', 'ACT': 'ACT', 'ADDTL_ACTS': 'ADDTL_ACTS', 'SCHED': 'SCHED', 'PKAREA_TY': 'PKAREA_TY', 'LGA_NAME': 'LGA_NAME', 'LGA_CODE': 'LGA_CODE', 'PLM_ID': 'PLM_ID', 'AREA_HA': 'AREA_HA', 'PERIMETER': 'PERIMETER', 'VERS_DATE': 'VERS_DATE', });
lyr_AllUpperWimmeraLandcares_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'GROUP_NAME': 'GROUP_NAME', 'DISTRICT_N': 'DISTRICT_N', 'Group': 'Group', 'Group_Abbr': 'Group_Abbr', 'Group_Cate': 'Group_Cate', 'Group_ID': 'Group_ID', 'Network': 'Network', 'Network_ID': 'Network_ID', 'Network_Ot': 'Network_Ot', 'Network__1': 'Network__1', 'CMA': 'CMA', 'CMA_Other': 'CMA_Other', 'Areasqm': 'Areasqm', 'Hectares': 'Hectares', 'layer': 'layer', 'path': 'path', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4.set('fieldAliases', {'id': 'id', 'Landholder': 'Landholder', 'Year': 'Year', 'Who?': 'Who?', 'Perimetre': 'Perimetre', 'Perimetr_1': 'Perimetr_1', 'perimetr_2': 'perimetr_2', });
lyr_Jallukarlongtermsites_fulcrum_5.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'created_at': 'created_at', 'updated_at': 'updated_at', 'created_by': 'created_by', 'updated_by': 'updated_by', 'system_created_at': 'system_created_at', 'system_updated_at': 'system_updated_at', 'version': 'version', 'status': 'status', 'project': 'project', 'assigned_to': 'assigned_to', 'latitude': 'latitude', 'longitude': 'longitude', 'site_name': 'site_name', 'site_type': 'site_type', 'site_type_other': 'site_type_other', 'year_established': 'year_established', 'landcare_region': 'landcare_region', 'landholder_original': 'landholder_original', 'site_description': 'site_description', 'initial_site_goals': 'initial_site_goals', 'land_access_manager_name': 'land_access_manager_name', 'land_access_manager_number': 'land_access_manager_number', 'planted_species_list': 'planted_species_list', 'notable_animals_historically_present': 'notable_animals_historically_present', 'notable_plants_historically_present': 'notable_plants_historically_present', 'weed_priority_list': 'weed_priority_list', 'polygon_points': 'polygon_points', 'gps_altitude': 'gps_altitude', 'gps_horizontal_accuracy': 'gps_horizontal_accuracy', 'gps_vertical_accuracy': 'gps_vertical_accuracy', 'gps_speed': 'gps_speed', 'gps_course': 'gps_course', });
lyr_CrownlandparksreservesDEECAlayer_2.set('fieldImages', {'GENER_TYPE': 'TextEdit', 'GENER_DESC': 'TextEdit', 'POLY_SOURC': 'TextEdit', 'NAME': 'TextEdit', 'LABEL': 'TextEdit', 'LABELSHORT': 'TextEdit', 'NAME_SOURC': 'TextEdit', 'LU_CODE': 'TextEdit', 'MMGT_ONGEN': 'TextEdit', 'MMGT_ONGRD': 'TextEdit', 'MMTGEN': 'TextEdit', 'REC_CAT': 'TextEdit', 'REC_SBCAT': 'TextEdit', 'PLU_CODE': 'TextEdit', 'STUDY_AREA': 'TextEdit', 'AREA_CODE': 'TextEdit', 'REC_CODE': 'TextEdit', 'PRIMS_ID': 'TextEdit', 'MNG_GROUP': 'TextEdit', 'MNG_SPEC': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'DATE_LCCAP': 'DateTime', 'DATE_EST': 'DateTime', 'IMPL_STAT': 'TextEdit', 'RES_DATE': 'DateTime', 'STGAME_RES': 'TextEdit', 'ACT': 'TextEdit', 'ADDTL_ACTS': 'TextEdit', 'SCHED': 'TextEdit', 'PKAREA_TY': 'TextEdit', 'LGA_NAME': 'TextEdit', 'LGA_CODE': 'TextEdit', 'PLM_ID': 'TextEdit', 'AREA_HA': 'TextEdit', 'PERIMETER': 'TextEdit', 'VERS_DATE': 'DateTime', });
lyr_AllUpperWimmeraLandcares_3.set('fieldImages', {'fid': '', 'ID': 'Range', 'GROUP_NAME': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'Group': 'TextEdit', 'Group_Abbr': 'TextEdit', 'Group_Cate': 'TextEdit', 'Group_ID': 'Range', 'Network': 'TextEdit', 'Network_ID': 'Range', 'Network_Ot': 'TextEdit', 'Network__1': 'Range', 'CMA': 'TextEdit', 'CMA_Other': 'TextEdit', 'Areasqm': 'Range', 'Hectares': 'Range', 'layer': '', 'path': '', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4.set('fieldImages', {'id': 'TextEdit', 'Landholder': 'TextEdit', 'Year': 'TextEdit', 'Who?': 'TextEdit', 'Perimetre': 'TextEdit', 'Perimetr_1': 'TextEdit', 'perimetr_2': 'TextEdit', });
lyr_Jallukarlongtermsites_fulcrum_5.set('fieldImages', {'fulcrum_id': 'TextEdit', 'created_at': 'DateTime', 'updated_at': 'DateTime', 'created_by': 'TextEdit', 'updated_by': 'TextEdit', 'system_created_at': 'DateTime', 'system_updated_at': 'DateTime', 'version': 'Range', 'status': 'TextEdit', 'project': 'TextEdit', 'assigned_to': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'site_name': 'TextEdit', 'site_type': 'TextEdit', 'site_type_other': 'TextEdit', 'year_established': '', 'landcare_region': '', 'landholder_original': '', 'site_description': 'TextEdit', 'initial_site_goals': '', 'land_access_manager_name': '', 'land_access_manager_number': '', 'planted_species_list': '', 'notable_animals_historically_present': '', 'notable_plants_historically_present': '', 'weed_priority_list': '', 'polygon_points': 'TextEdit', 'gps_altitude': 'TextEdit', 'gps_horizontal_accuracy': 'TextEdit', 'gps_vertical_accuracy': 'TextEdit', 'gps_speed': 'TextEdit', 'gps_course': 'TextEdit', });
lyr_CrownlandparksreservesDEECAlayer_2.set('fieldLabels', {'GENER_TYPE': 'hidden field', 'GENER_DESC': 'hidden field', 'POLY_SOURC': 'hidden field', 'NAME': 'hidden field', 'LABEL': 'hidden field', 'LABELSHORT': 'hidden field', 'NAME_SOURC': 'hidden field', 'LU_CODE': 'hidden field', 'MMGT_ONGEN': 'hidden field', 'MMGT_ONGRD': 'inline label - always visible', 'MMTGEN': 'hidden field', 'REC_CAT': 'hidden field', 'REC_SBCAT': 'hidden field', 'PLU_CODE': 'hidden field', 'STUDY_AREA': 'hidden field', 'AREA_CODE': 'hidden field', 'REC_CODE': 'hidden field', 'PRIMS_ID': 'hidden field', 'MNG_GROUP': 'inline label - always visible', 'MNG_SPEC': 'hidden field', 'IUCN_CAT': 'hidden field', 'DATE_LCCAP': 'hidden field', 'DATE_EST': 'hidden field', 'IMPL_STAT': 'hidden field', 'RES_DATE': 'hidden field', 'STGAME_RES': 'hidden field', 'ACT': 'hidden field', 'ADDTL_ACTS': 'hidden field', 'SCHED': 'hidden field', 'PKAREA_TY': 'hidden field', 'LGA_NAME': 'hidden field', 'LGA_CODE': 'hidden field', 'PLM_ID': 'hidden field', 'AREA_HA': 'hidden field', 'PERIMETER': 'hidden field', 'VERS_DATE': 'hidden field', });
lyr_AllUpperWimmeraLandcares_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'GROUP_NAME': 'hidden field', 'DISTRICT_N': 'hidden field', 'Group': 'hidden field', 'Group_Abbr': 'hidden field', 'Group_Cate': 'hidden field', 'Group_ID': 'hidden field', 'Network': 'hidden field', 'Network_ID': 'hidden field', 'Network_Ot': 'hidden field', 'Network__1': 'hidden field', 'CMA': 'inline label - visible with data', 'CMA_Other': 'hidden field', 'Areasqm': 'hidden field', 'Hectares': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_AllPPhistoricrevegpre2025_Fixedgeometries_4.set('fieldLabels', {'id': 'hidden field', 'Landholder': 'inline label - always visible', 'Year': 'inline label - always visible', 'Who?': 'hidden field', 'Perimetre': 'hidden field', 'Perimetr_1': 'hidden field', 'perimetr_2': 'hidden field', });
lyr_Jallukarlongtermsites_fulcrum_5.set('fieldLabels', {'fulcrum_id': 'hidden field', 'created_at': 'hidden field', 'updated_at': 'hidden field', 'created_by': 'hidden field', 'updated_by': 'hidden field', 'system_created_at': 'hidden field', 'system_updated_at': 'hidden field', 'version': 'hidden field', 'status': 'hidden field', 'project': 'hidden field', 'assigned_to': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'site_name': 'inline label - always visible', 'site_type': 'inline label - always visible', 'site_type_other': 'hidden field', 'year_established': 'inline label - always visible', 'landcare_region': 'hidden field', 'landholder_original': 'inline label - always visible', 'site_description': 'inline label - always visible', 'initial_site_goals': 'inline label - always visible', 'land_access_manager_name': 'inline label - always visible', 'land_access_manager_number': 'inline label - always visible', 'planted_species_list': 'inline label - always visible', 'notable_animals_historically_present': 'hidden field', 'notable_plants_historically_present': 'hidden field', 'weed_priority_list': 'hidden field', 'polygon_points': 'hidden field', 'gps_altitude': 'hidden field', 'gps_horizontal_accuracy': 'hidden field', 'gps_vertical_accuracy': 'hidden field', 'gps_speed': 'hidden field', 'gps_course': 'hidden field', });
lyr_Jallukarlongtermsites_fulcrum_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});