var wms_layers = [];

var format_BANK_0 = new ol.format.GeoJSON();
var features_BANK_0 = format_BANK_0.readFeatures(json_BANK_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_0.addFeatures(features_BANK_0);
var lyr_BANK_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANK_0, 
                style: style_BANK_0,
                interactive: true,
                title: '<img src="styles/legend/BANK_0.png" /> BANK'
            });
var format_BOUNDARY_1 = new ol.format.GeoJSON();
var features_BOUNDARY_1 = format_BOUNDARY_1.readFeatures(json_BOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1.addFeatures(features_BOUNDARY_1);
var lyr_BOUNDARY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_1, 
                style: style_BOUNDARY_1,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_1.png" /> BOUNDARY'
            });
var format_GASSTATION_2 = new ol.format.GeoJSON();
var features_GASSTATION_2 = format_GASSTATION_2.readFeatures(json_GASSTATION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GASSTATION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GASSTATION_2.addFeatures(features_GASSTATION_2);
var lyr_GASSTATION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GASSTATION_2, 
                style: style_GASSTATION_2,
                interactive: true,
                title: '<img src="styles/legend/GASSTATION_2.png" /> GAS STATION'
            });
var format_HEALTHFACILITIES_3 = new ol.format.GeoJSON();
var features_HEALTHFACILITIES_3 = format_HEALTHFACILITIES_3.readFeatures(json_HEALTHFACILITIES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEALTHFACILITIES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTHFACILITIES_3.addFeatures(features_HEALTHFACILITIES_3);
var lyr_HEALTHFACILITIES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEALTHFACILITIES_3, 
                style: style_HEALTHFACILITIES_3,
                interactive: true,
                title: '<img src="styles/legend/HEALTHFACILITIES_3.png" /> HEALTH FACILITIES'
            });
var format_HOTELS_4 = new ol.format.GeoJSON();
var features_HOTELS_4 = format_HOTELS_4.readFeatures(json_HOTELS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTELS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTELS_4.addFeatures(features_HOTELS_4);
var lyr_HOTELS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTELS_4, 
                style: style_HOTELS_4,
                interactive: true,
                title: '<img src="styles/legend/HOTELS_4.png" /> HOTELS'
            });
var format_Majorroad_5 = new ol.format.GeoJSON();
var features_Majorroad_5 = format_Majorroad_5.readFeatures(json_Majorroad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorroad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorroad_5.addFeatures(features_Majorroad_5);
var lyr_Majorroad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Majorroad_5, 
                style: style_Majorroad_5,
                interactive: true,
                title: '<img src="styles/legend/Majorroad_5.png" /> Major road'
            });
var format_minorroad_6 = new ol.format.GeoJSON();
var features_minorroad_6 = format_minorroad_6.readFeatures(json_minorroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minorroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minorroad_6.addFeatures(features_minorroad_6);
var lyr_minorroad_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minorroad_6, 
                style: style_minorroad_6,
                interactive: true,
                title: '<img src="styles/legend/minorroad_6.png" /> minor road'
            });
var format_PLAZA_7 = new ol.format.GeoJSON();
var features_PLAZA_7 = format_PLAZA_7.readFeatures(json_PLAZA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLAZA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLAZA_7.addFeatures(features_PLAZA_7);
var lyr_PLAZA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLAZA_7, 
                style: style_PLAZA_7,
                interactive: true,
                title: '<img src="styles/legend/PLAZA_7.png" /> PLAZA'
            });
var format_RAILWAY_8 = new ol.format.GeoJSON();
var features_RAILWAY_8 = format_RAILWAY_8.readFeatures(json_RAILWAY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAY_8.addFeatures(features_RAILWAY_8);
var lyr_RAILWAY_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAILWAY_8, 
                style: style_RAILWAY_8,
                interactive: true,
                title: '<img src="styles/legend/RAILWAY_8.png" /> RAILWAY'
            });
var format_RECREATIONALCENTER_9 = new ol.format.GeoJSON();
var features_RECREATIONALCENTER_9 = format_RECREATIONALCENTER_9.readFeatures(json_RECREATIONALCENTER_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RECREATIONALCENTER_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECREATIONALCENTER_9.addFeatures(features_RECREATIONALCENTER_9);
var lyr_RECREATIONALCENTER_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RECREATIONALCENTER_9, 
                style: style_RECREATIONALCENTER_9,
                interactive: true,
                title: '<img src="styles/legend/RECREATIONALCENTER_9.png" /> RECREATIONAL CENTER'
            });
var format_RESTUARANT_10 = new ol.format.GeoJSON();
var features_RESTUARANT_10 = format_RESTUARANT_10.readFeatures(json_RESTUARANT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESTUARANT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESTUARANT_10.addFeatures(features_RESTUARANT_10);
var lyr_RESTUARANT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESTUARANT_10, 
                style: style_RESTUARANT_10,
                interactive: true,
                title: '<img src="styles/legend/RESTUARANT_10.png" /> RESTUARANT'
            });
var format_SCHOOL_11 = new ol.format.GeoJSON();
var features_SCHOOL_11 = format_SCHOOL_11.readFeatures(json_SCHOOL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_11.addFeatures(features_SCHOOL_11);
var lyr_SCHOOL_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOL_11, 
                style: style_SCHOOL_11,
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_11.png" /> SCHOOL'
            });
var format_street_12 = new ol.format.GeoJSON();
var features_street_12 = format_street_12.readFeatures(json_street_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_12.addFeatures(features_street_12);
var lyr_street_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_12, 
                style: style_street_12,
                interactive: true,
                title: '<img src="styles/legend/street_12.png" /> street'
            });

lyr_BANK_0.setVisible(true);lyr_BOUNDARY_1.setVisible(true);lyr_GASSTATION_2.setVisible(true);lyr_HEALTHFACILITIES_3.setVisible(true);lyr_HOTELS_4.setVisible(true);lyr_Majorroad_5.setVisible(true);lyr_minorroad_6.setVisible(true);lyr_PLAZA_7.setVisible(true);lyr_RAILWAY_8.setVisible(true);lyr_RECREATIONALCENTER_9.setVisible(true);lyr_RESTUARANT_10.setVisible(true);lyr_SCHOOL_11.setVisible(true);lyr_street_12.setVisible(true);
var layersList = [lyr_BANK_0,lyr_BOUNDARY_1,lyr_GASSTATION_2,lyr_HEALTHFACILITIES_3,lyr_HOTELS_4,lyr_Majorroad_5,lyr_minorroad_6,lyr_PLAZA_7,lyr_RAILWAY_8,lyr_RECREATIONALCENTER_9,lyr_RESTUARANT_10,lyr_SCHOOL_11,lyr_street_12];
lyr_BANK_0.set('fieldAliases', {'NAME': 'NAME', });
lyr_BOUNDARY_1.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_GASSTATION_2.set('fieldAliases', {'NAME': 'NAME', });
lyr_HEALTHFACILITIES_3.set('fieldAliases', {'NAME': 'NAME', });
lyr_HOTELS_4.set('fieldAliases', {'NAME': 'NAME', });
lyr_Majorroad_5.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'Majorroad_': 'Majorroad_', });
lyr_minorroad_6.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'NAME': 'NAME', });
lyr_PLAZA_7.set('fieldAliases', {'NAME': 'NAME', });
lyr_RAILWAY_8.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RECREATIONALCENTER_9.set('fieldAliases', {'NAME': 'NAME', });
lyr_RESTUARANT_10.set('fieldAliases', {'NAME': 'NAME', });
lyr_SCHOOL_11.set('fieldAliases', {'NAME': 'NAME', });
lyr_street_12.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'NAME': 'NAME', });
lyr_BANK_0.set('fieldImages', {'NAME': 'TextEdit', });
lyr_BOUNDARY_1.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_GASSTATION_2.set('fieldImages', {'NAME': 'TextEdit', });
lyr_HEALTHFACILITIES_3.set('fieldImages', {'NAME': 'TextEdit', });
lyr_HOTELS_4.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Majorroad_5.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'Majorroad_': 'TextEdit', });
lyr_minorroad_6.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'NAME': 'TextEdit', });
lyr_PLAZA_7.set('fieldImages', {'NAME': 'TextEdit', });
lyr_RAILWAY_8.set('fieldImages', {'SHAPE_Leng': 'TextEdit', });
lyr_RECREATIONALCENTER_9.set('fieldImages', {'NAME': '', });
lyr_RESTUARANT_10.set('fieldImages', {'NAME': 'TextEdit', });
lyr_SCHOOL_11.set('fieldImages', {'NAME': 'TextEdit', });
lyr_street_12.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'NAME': 'TextEdit', });
lyr_BANK_0.set('fieldLabels', {'NAME': 'header label', });
lyr_BOUNDARY_1.set('fieldLabels', {'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_GASSTATION_2.set('fieldLabels', {'NAME': 'header label', });
lyr_HEALTHFACILITIES_3.set('fieldLabels', {'NAME': 'header label', });
lyr_HOTELS_4.set('fieldLabels', {'NAME': 'header label', });
lyr_Majorroad_5.set('fieldLabels', {'SHAPE_Leng': 'no label', 'Majorroad_': 'header label', });
lyr_minorroad_6.set('fieldLabels', {'SHAPE_Leng': 'no label', 'NAME': 'header label', });
lyr_PLAZA_7.set('fieldLabels', {'NAME': 'header label', });
lyr_RAILWAY_8.set('fieldLabels', {'SHAPE_Leng': 'no label', });
lyr_RECREATIONALCENTER_9.set('fieldLabels', {'NAME': 'header label', });
lyr_RESTUARANT_10.set('fieldLabels', {'NAME': 'header label', });
lyr_SCHOOL_11.set('fieldLabels', {'NAME': 'header label', });
lyr_street_12.set('fieldLabels', {'SHAPE_Leng': 'no label', 'NAME': 'header label', });
lyr_street_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});