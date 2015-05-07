
function nvd3Demos(pcs, xmldemo) { // pcs = nro of html containers where charts appear
pcs--;
jsChart(pcs, '', 'simpleline', {height:'250', width:'300'}, { showLegend: false, transitionDuration:3000, xmldemo: xml, shadows:'black', domain:{minY:-1.5, maxY:2} });
pcs--;
jsChart(pcs, '', 'scatterbubble', {height:'250', width:'300'}, { showLegend: true, xmldemo: xml, shadows:'black' });
pcs--; 
jsChart(pcs, '', 'viewfinder', {height:'250', width:'300'}, { showLegend: true, xmldemo: xml, shadows:'black' });
pcs--;
jsChart(pcs, '', 'multibar', {height:'250', width:'300'}, { showLegend: false, xmldemo: xml, shadows:'black'  });
pcs--;
jsChart(pcs, '', 'cumulativeline', {height:'250', width:'300'}, { showLegend: false, xmldemo: xml, xtime: true, shadows:'black', backgroundcolor:'SkyBlue' });
pcs--;
jsChart(pcs, '', 'stackedarea', {height:'250', width:'300'}, { showLegend: false, xmldemo: xml, xtime: true, shadows:'black', backgroundimage:bg_pict+'continents1.jpg'  });
pcs--;
jsChart(pcs, '', 'discretebar', {height:'250', width:'300'}, { color: ['red','green','blue','orange','brown','navy','yellow','black'], xmldemo: xml, shadows:'black', backgroundimage:bg_pict+'continents11.jpg', minY:-200 });
pcs--; 
jsChart(pcs, '', 'horizontalmultibar', {height:'250', width:'450'}, { showLegend: false, xmldemo: xml, shadows:'black'  });
pcs--;
jsChart(pcs, '', 'donut', {height:'250', width:'300'}, { showLegend: true, xmldemo: xml, shadows:'black' });
}