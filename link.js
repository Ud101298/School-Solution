function Password()
{
	document.getElementById('login').style.display="none";
	document.getElementById('login-box').style.display="none";
	document.getElementById('forgot').style.display="block";
	document.getElementById('dash').style.display="none";
}
function index()
{
	document.getElementById('login').style.display="none";
	document.getElementById('login-box').style.display="block";
	document.getElementById('forgot').style.display="none";
	document.getElementById('dash').style.display="none";
}
function dash()
{
	document.getElementById('login').style.display="none";
	document.getElementById('login-box').style.display="none";
	document.getElementById('forgot').style.display="none";
	document.getElementById('dash').style.display="block";
}
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "columnWidth": 1,
  "dataProvider": [{
    "category": "0"
  }, {
    "category": "1",
    "count": 50
  }, {
    "category": "2",
    "count": 21
  }, {
    "category": "3",
    "count": 80
  }, {
    "category": "4",
    "count": 4
  }, {
    "category": "5",
    "count": 20
  }, {
    "category": "6",
    "count": 7
  }, {
    "category": "7",
    "count": 50
  }, {
    "category": "8",
    "count": 22
  }, {
    "category": "9",
    "count": 2
  }, {
    "category": "10",
    "count": 10
  }, {
    "category": "11"
  }],
  "graphs": [{
    "fillColors": "#c55",
    "fillAlphas": 0.9,
    "lineColor": "#fff",
    "lineAlpha": 0.7,
    "type": "column",
    "valueField": "count"
  }],
  "categoryField": "category",
  "categoryAxis": {
    "startOnAxis": true,
    "title": "Try"
  },
  "valueAxes": [{
    "title": "Count"
  }]
});