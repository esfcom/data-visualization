import washingtonGeoJSON from './mapData.geojson' with { type: 'json' };

const chartData = [
  {
    "id": "line",
    "option" : {
      title: {
        text: 'PHQ-9 MODERATE TO SEVERE AT INTAKE',
        left: "center",
      },
      xAxis: {
        name: 'YEAR',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'category',
        axisLabel: {
         show: false
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        type: 'value',
        name: 'SYMPTOM SEVERITY',
        nameLocation: 'middle',
        nameGap: 30,
        max: 27,
        interval: 3
      },
    series: [{
      data: [[0.07692308, 16.092664],
            [0.15384615, 12.767045],
            [0.23076923, 10.863158],
            [0.30769231, 10.293532],
            [0.38461538, 8.2541436],
            [0.46153846, 8.5802469],
            [0.53846154, 8.6870748],
            [0.61538462, 7.8540146],
            [0.69230769, 7.8161765],
            [0.76923077, 7.9606299],
            [0.84615385, 8.0982143],
            [0.9230769, 7.7211538],
            [1, 7.7722772],
            [1.07692308, 7.0434783],
            [1.15384615, 7.4137931],
            [1.23076923, 5.8837209],
            [1.30769231, 5.3421053],
            [1.38461538, 5.6883117],
            [1.46153846, 5.1029412],
            [1.53846154, 5.9178082],
            [1.61538462, 5.6031746],
            [1.69230769, 5.6935484],
            [1.76923077, 6.12],
            [1.84615385, 5.9772727],
            [1.9230769, 5.4878049]], // Approximate values from the graph
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#CD5C5C'  // Reddish color similar to the original
      },
      lineStyle: {
        width: 2
      },
      markPoint: {
        data: [
          {
            coord: [0, 16],
            value: 'n=273',
            symbolSize: 1,
            label: {
              position: 'top'
            }
          },
          {
            coord: [13, 7.5],
            value: 'n=93',
            symbolSize: 1,
            label: {
              position: 'top'
            }
          },
          {
            coord: [24, 3],
            value: 'n=24',
            symbolSize: 1,
            label: {
              position: 'top'
            }
          },
          {
            coord: [1, 0],
            value: 'INTAKE',
            symbolSize: 1,
            label: {
              position: 'bottom'
            }
          },
          {
            coord: [12, 0],
            value: '1',
            symbolSize: 1,
            label: {
              position: 'bottom'
            }
          },
          {
            coord: [24, 0],
            value: '2',
            symbolSize: 1,
            label: {
              position: 'bottom'
            }
          },
        ]
      }
    }],
  
    }
  },
  {
    "id": "bar",
    "option" : {
      title: {
        text: 'INDIVIDUALS SERVED BY STATE FISCAL YEAR',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          return `Year: ${params[0].name}<br/>Individuals: ${params[0].value}<br/>n=${params[0].value}`;
        }
      },
      xAxis: {
        type: 'category',
        name: 'YEAR',
        nameGap: 30,
        nameLocation: 'middle',
        axisTick: {
          show: false
        },
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024*'],
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: 'PERCENT',
        nameGap: 30,
        nameLocation: 'middle',
        max: 100,
        interval: 10
      },
      series: [{
        data: [0.4602992, 2.87687, 6.0989643, 12.082854, 19.102417, 25.66168, 32.911392, 40.04603, 36.248562, 32.451093],
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          formatter: function(value) {
            return  'n = ' + Math.floor(value.value * 10);
          }
        },
        itemStyle: {
          color: function(params) {
            // Create an array of colors to match your chart
            const colors = [
              '#2F4F4F',  // 2015
              '#1C4E80',  // 2016
              '#CD5C5C',  // 2017
              '#4F7942',  // 2018
              '#808080',  // 2019
              '#87CEEB',  // 2020
              '#DEB887',  // 2021
              '#90EE90',  // 2022
              '#DAA520',  // 2023
              '#8B0000'   // 2024
            ];
            return colors[params.dataIndex];
          }
        }
      }],
      grid: {
        containLabel: true,
        left: '5%',
        right: '5%',
        bottom: '10%'
      }
    }
  },
  {
    "id": "donut",
    "option": {
      title: {
        text: 'Referral Source',
        left: 'center',
        top: 20
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        // orient: 'vertical',
        left: 'center',
        bottom: 0,
        data: ['Mental Health Provider', 'Family', 'Medical Provider', 'Other']
      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],  // Inner and outer radius for donut
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 2,
          borderWidth: 2,
          borderColor: '#fff'
        },
        label: {
          show: true,
          formatter: function(params) {
            return `${params.value}, ${Math.round(params.percent)}%`;
          },
          position: 'outside'
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 30
        },
        data: [
          {
            value: 452,
            name: 'Mental Health Provider',
            // itemStyle: { color: '#4e79a7' }  // Blue
          },
          {
            value: 211,
            name: 'Family',
            // itemStyle: { color: '#e15759' }  // Orange/Red
          },
          {
            value: 108,
            name: 'Medical Provider',
            // itemStyle: { color: '#a0a0a0' }  // Gray
          },
          {
            value: 233,
            name: 'Other',
            // itemStyle: { color: '#f28e2b' }  // Yellow/Orange
          }
        ]
      }],
      grid: {
        containLabel: true
      }
    }
  },
  {
    "id": "pie",
    "option": {
      title: {
        text: 'Referral Source',
        left: 'center',
        top: 20
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        left: 'center',
        bottom: 0,
        data: ['Mental Health Provider', 'Family', 'Medical Provider', 'Other']
      },
      series: [{
        type: 'pie',
        radius: '70%',  // Inner and outer radius for donut
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 2,
          borderWidth: 2,
          borderColor: '#fff'
        },
        label: {
          show: true,
          formatter: function(params) {
            return `${params.value}, ${Math.round(params.percent)}%`;
          },
          position: 'outside'
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 30
        },
        data: [
          {
            value: 452,
            name: 'Mental Health Provider',
            // itemStyle: { color: '#4e79a7' }  // Blue
          },
          {
            value: 211,
            name: 'Family',
            // itemStyle: { color: '#e15759' }  // Orange/Red
          },
          {
            value: 108,
            name: 'Medical Provider',
            // itemStyle: { color: '#a0a0a0' }  // Gray
          },
          {
            value: 233,
            name: 'Other',
            // itemStyle: { color: '#f28e2b' }  // Yellow/Orange
          }
        ]
      }],
      grid: {
        containLabel: true
      }
    }
  },
  {
    "id": "funnel",
    "option": {
      title: {
        text: 'NEW JOURNEYS PROGRAM MATRICULATION',
        left: 'center'
      },
      legend: {
        left: 'center',
        top: 30,
        data: ['Referrals', 'Screened', 'Eligible', 'Recieved Services', 'Graduated']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} Total Individuals'
      },
      series: [{
        name: 'Total Individuals',
        type: 'funnel',
        gap: 2,
        data: [
          {
            value: 277,
            name: 'Graduated'
          },
          {
            value: 869,
            name: 'Recieved Services'
          },
          {
            value: 1124,
            name: 'Eligible'
          },
          {
            value: 1428,
            name: 'Screened'
          },
          {
            value: 1882,
            name: 'Referrals'
          }
        ],
        label: {
          show: true,
          position: 'inside',
          color: '#fff',
          formatter: '{c}'
        },
        // funnelAlign: "center"
      }]
    }
  },
  {
    "id": "scatter",
    "option" : {
       title: {
        text: 'Scatter Plot',
        left: 'center'
      },
       xAxis: {
          type: 'value',
          min: 0,
          max: 3,
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#E0E0E0'
              }
          }
      },
      yAxis: {
          type: 'value',
          min: 0,
          max: 4.5,
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#E0E0E0'
              }
          }
      },
      legend: {
          data: ['Y-Values', 'Y2'],
          right: '10%',
          top: '5%'
      },
      series: [
       {
          name: 'Y-Values',
          type: 'scatter',
          data: [
            [0.7, 2.7],
            [1.8, 3.2],
            [2.6, 0.8],
            [0.1, 0.4],
            [0.6, 1.7],
            [0.5, 2.3],
            [1.5, 2],
          ],
          symbolSize: 8,
          itemStyle: {
              color: '#4E77BD'
          }
        },
        {
          name: 'Y2',
          type: 'scatter',
          data:  [
            [0.7, 2],
            [2.6, 3],
            [0.1, 4],
            [0.6, 2],
            [0.5, 1]
          ],
          symbolSize: 8,
          itemStyle: {
              color: '#EF8F4F'
          }
        }
      ]
    }
  },
  {
    "id": "stacked-bar",
    "option": {
      title: {
        text: 'Stacked Bar Chart',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        bottom: 0,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['Category A', 'Category B', 'Category C', 'Category D'],
        axisLabel: {
          verticalAlign: "middle",
          fontSize: 10
        }
      },
      series: [
        {
          name: 'A',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [4.3, 2.5, 3.5, 4.5]
        },
        {
          name: 'B',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [2.4, 4.4, 1.8, 2.8]
        },
        {
          name: 'C',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [2, 2, 3, 5]
        },
      ]
    }
  },
  {
    "id": "grouped-bar",
    "option": {
      title: {
        text: 'Grouped Bar Chart',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        bottom: 0,
      },
      xAxis: {
        type: 'category',
        data: ['Category A', 'Category B', 'Category C', 'Category D'],
        axisLabel: {
          verticalAlign: "middle",
          fontSize: 10
        }
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'A',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [4.3, 2.5, 3.5, 4.5]
        },
        {
          name: 'B',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [2.4, 4.4, 1.8, 2.8]
        },
        {
          name: 'C',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [2, 2, 3, 5]
        },
      ]
    }
  },
  {
    "id": "box-plot",
    "option": {
      title: {
        text: 'Box Plot',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '%3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        label: 'Groups',
        data: ['1', '2'],
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        max: 6,
        splitArea: {
          show: false
        }
      },
      series: [
        {
          name: 'Group',
          type: 'boxplot',
          data: [
            [0, 1, 1, 2, 3, 4],
            [2, 3, 3, 4, 5],
          ],
          itemStyle: {
            color: '#b8c5f2'
          },
        }
      ]
    }
  }
];

document.addEventListener('DOMContentLoaded', function() {
  createChart();
  createMapChart();
});

function createChart() {
  chartData.forEach((chart) => {
    let chartContainer = document.getElementById(chart.id);
    let chartInstance = echarts.init(chartContainer);
    window.addEventListener('resize', function() {
      console.log(chartContainer, chartInstance, 'resize charts');
      chartInstance.resize();
    });
    chartInstance.setOption(chart.option);
  });
};

function createMapChart() {
  const mapContainer = document.getElementById('map');

  const mapInstance = echarts.init(mapContainer);

  window.addEventListener('resize', function() {
    console.log('resize map');
    mapInstance.resize();
  });

  const bounds = {
    left: -124.7628,
    right: -116.9161,
    top: 49.0024,
    bottom: 45.5435
  };
  echarts.registerMap('washington', washingtonGeoJSON);

  let option;

  const establishedSites = [
      {name: 'Behavioral Health Resources', value: [-122.8405, 47.0458]},
      {name: 'Behavioral Health Resources', value: [-123.8829, 46.9774]},
      {name: 'Cascade Community Healthcare', value: [-122.9832, 46.7349]},
      {name: 'Catholic Charities Serving Central Washington', value: [-120.3056, 47.4234]},
      {name: 'Comprehensive Healthcare', value: [-120.5124, 46.5948]},
      {name: 'Comprehensive Healthcare', value: [-119.1142, 46.2528]}, 
      {name: 'Lummi Nation Tribal Health Center', value: [-122.6215, 48.7944]},
      {name: 'Frontier Behavioral Health', value: [-117.2834, 47.6676]},
  ];

  mapInstance.setOption(
    (option = {
      title: {
        text: 'New Journeys Teams',
        left: 'center'
      },
      tooltip: {
        position: 'top',
        formatter: (params) => {
            if (params.seriesName === 'Pins') {
                return `${params.name}`;
            }
            return `Value: ${params.name}`;
        }
      },
      label: {
        show: false
      },
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        bottom: '0',
        min: 0,
        max: 1,
        inRange: {
          color: [
            '#e8ddf0',
            '#ab9fd4'
          ]
        },
        text: ['Coverage', 'No Coverage'],
      },
      geo: {
        map: 'washington',
        boundingCoords: [
          [bounds.left, bounds.bottom],
          [bounds.right, bounds.top]
        ],
        label: {
          color: '#000',
          fontWeight: 'bold',
        },
        zoom: 1,
        tooltip: {
          show: false
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          itemStyle: {
            areaColor: '#e2d5e6',
          },
          label: {
            color: '#000',
          }
        }
      },
      series: [
                {
          name: 'Heatmap',
          type: 'map',
          map: 'washington',
          geoIndex: 0,
          itemStyle: {
              borderColor: '#fff'
          },
          data: [
            { name: 'Benton', value: 0 },
            { name: 'Clallam', value: 0 },
            { name: 'Clark', value: 0 },
            { name: 'Cowlitz', value: 1 },
            { name: 'Grant', value: 0 },
            { name: 'Jefferson', value: 0 },
            { name: 'Kittitas', value: 0 },
            { name: 'Mason', value: 1 },
            { name: 'Snohomish', value: 0 },
            { name: 'Lincoln', value: 0 },
            { name: 'Okanogan', value: 0 },
            { name: 'Pacific', value: 0 },
            { name: 'Skagit', value: 0 },
            { name: 'Yakima', value: 1 },
            { name: 'Chelan', value: 1 },
            { name: 'Ferry', value: 0 },
            { name: 'Island', value: 0 },
            { name: 'Kitsap', value: 0 },
            { name: 'Lewis', value: 1 },
            { name: 'Pierce', value: 0 },
            { name: 'Stevens', value: 0 },
            { name: 'Whatcom', value: 1 },
            { name: 'Franklin', value: 1 },
            { name: 'Whitman', value: 0 },
            { name: 'Douglas', value: 1 },
            { name: 'San Juan', value: 0 },
            { name: 'Thurston', value: 1 },
            { name: 'Adams', value: 0 },
            { name: 'Grays Harbor', value: 1 },
            { name: 'King', value: 0 },
            { name: 'Klickitat', value: 0 },
            { name: 'Walla Walla', value: 0 },
            { name: 'Skamania', value: 0 },
            { name: 'Wahkiakum', value: 0 },
            { name: 'Asotin', value: 0 },
            { name: 'Columbia', value: 0 },
            { name: 'Pend Oreille', value: 0 },
            { name: 'Spokane', value: 1 },
            { name: 'Garfield', value: 0 },
          ],
        },
        {
          name: 'pins',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: establishedSites,
          symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAIACAYAAABqwtNaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAJOVJREFUeNrs3YFxGzmaNmBItQFMBj83AtvlAIaMYOUIjorgrAgsRSBvBFQG0kZgOgCVPBFYGZwzmL9BgrMa27IokWzg636eKpX3qu72JHQ38AKND32UAA7gj7dvp90/r7uf/1f+nZSfX7l/8PNH9/Pl1e3tUmsC+3akCYA9BZ4cbk66n391P9M9/9fnEPSf/G8XiL5obUAAAmqGnt+6f+bdz/+k9SpPH+67n393P1ddGPrmKgACENBX8Jl0/3xI6xWf3yr+Klfdz0UXhO5dFUAAAg4dfOaN/WqCECAAAQcJP+fdP/+b6q74POVjCUJejQECELBT8Jl2/yzS0xVcrbjvfs66EHTj6gECEPCS8HOe1q+8IrIaBAhAwLOCT37NdZ32X87et1wy/87eIEAAAp4KP69L+JkM5E/KK0Az5wcBDx1rAuC78PNpQOEny6tZn7q/be4KAwIQ8H34yQHhLrVd5bVLCFoIQYAABDwMP+/TutJr6HIIWrjigD1AIPzkQDAf2Z+dP6Nx6uqDAASML/jk10KXIww/G3lT9EyZPAhAwLjCT97s/HrkTaFMHkbKHiAYX/h5Lfz8JbfBXWkTYESsAME4w89vWuNv8muwvBK01BQwDlaAYDzh50T4eZSzgkAAAgYYfvLAfi38PGlRvn8GDJxXYDD88JMrvd5riWdRJg8CEBA4/IzxjJ99uel+TpXJgwAExAk+Q/mae23OCoKBsgcIhhl+Pgk/e7GqmlMmD8NjBQiGFX6UuR9GXgHKK0FfNAUMgxUgEH54mjJ5EICABsNPHpjvhJ+Dh6CFEAQCENBO+Floid4sytECQGD2AEHs8KPMvR5nBYEABPQcfPLrmEvhpzpl8iAAAT2GH19zF4KAHdgDBLHCz0T4aU6+Fl+dFQSxWAGCOOFHmXvb8grQu1e3t0tNAe2zAgQxws+J8NM8ZwWBAATsMfzkAfVa+Akjl8m/1wwgAAEvDz/nyRk/EV2WIwqARtkDBO2GH2f8xHfV/ZypEAMBCHg6+ORXXfmV11RrDIIyeWiQV2DQXvj5JPwMyqp6T5k8tMUKELQTfvIAmVd+JlpjkPIKUF4J+qIpoD4rQNBO+Pkk/Azapkz+RFOAAATCz7rM/S4pcx9LCLp2VhAIQCD8KHMfo3xW0KVmgHrsAYJ64UeZO1evbm9PNQMIQDCG4JNfg1wKPxTLtP6GmDJ5EIBg0OHH19z5nrOCoGf2AEF/4Wci/PCIfE98dVYQ9McKEPQTfjZl7iq9+BVnBUFPrADB4cPPifDDlvI9cqdMHgQgiB5+8kB2LfzwTLlM/r1mAAEIIoaf8+SMH17ushyVAByAPUBwmPDjjB/25ar7OVMhBgIQtBx8Vp86SL7mzn4pkwcBCJoOP8rcOWQIygcm3msKEICglfCTQ09e+ZloDQ5ImTzsiU3QsJ/w80n4oQerVcZytAIgAEG18DNPzvih/xB07awgEICgZvhZCD9UsihHLQAvYA8QvCz8KHOnFVevbm9PNQMIQCD8MDbLtK4QUyYPAhDsPfgoc6dlzgqCZ7AHCLYLPxPhh8ble/OuVCUCT7ACBE+Hn02Zu83OROCsINiCFSD4dfiZCj8Ek+/VO2XyIADBS8PPXPghsIUQBAIQPDf8nKf1GT8QPQS5j+En7AGCH8OPMneG5qr7OVMhBgIQ/Cz45FddOfz4zhJDpEweBCD4afhR5s4YQlA+MPFeUyAAgfCTQ8918jV3xkGZPAhACD/O+GG0ISivBC01BWOlCowxh5+58MNIrV75KpNHAIJxhp+F8MPILcqRDzA6XoExxvCjzB3+7urV7e2pZkAAAuEHxuam+zlVJo8ABMMKPsrc4WnOCmI07AFiDOFnIvzAVvIzcleqI2HQrAAx9PCjzL09eXXhy08GXteorWvkrCAEIAgafqZpfcChgbW+vL/kP93P8rFTiMtKXb5m/1P+pX4Iyt8Pu9IUCEAQJ/zMk6+5tyAPnhfP/fRCCUMfkg3rLTgVghCAIEb4OS+DJ/Xcl4FzueO1nJYgO9GkdYOsMnkEIGg7/Chzry+Hnnf7qiQqFXz5VeZU0wpBIADBj4NkDj8nWmOYg6Rw2wRl8gyGMniGEn4+CT/VXRxyhaD8d19o5qpWVZVljxaEZgWI6OEnd8iL5Iyf2nrbKGuDexOUySMAQeXw44yf+gNhDj83PV/7k+Rjti1c+3e7bnQHAQievwpwaQAc7yqAANwMZfKEZA8QUcOP2X9dOfS8qfkKpPz/fpN+PFWafi26Z/K9ZiAaK0BECz951UdnWz/8NFMJ5EO3zVAmjwAEBxrolEE3MMil9ecRvjV2b+QQdOn+qC7vBTtVJo8ABGb4ZvhC8tg4K4gQ7AFC+GEbpxFeb5Tf0WuYujZnBXlmaZoVIFoOP6p82gk/V8HunXlyVlBtzgpCAIIXDGDTtP7+k/BjABOgY99DZ8rkaZFXYLQ6ezdw1XUfffZefvdZ+VuoY/WNvvJMQ1OsANFa+Mkl7pdaoqpBbWK1j6wZH7t76kwzIADBjwOVCp76lmn9eYNvA7u3cgjKr1SnLnFVzgpCAILvBqccfnzN3eAkZA+fMnmaYA8QLYSfT8JPdRdjmJmXv/HC5a5qUyZvjx9VWQGiZvjJHeEi2ZtR2+g+ZqlMvgnK5BGAGG34UelVfwDK4edmpPfgSfJR3RbuwbznbKkpEIAYy+z70sBj9i2IU5w6K4i+2QNEjfBj1l1XDj1vvHr466ygN6VNqGdRjsCA3lgBos/wk1d9dHL1w48KnB/vTWcFtUGZPAIQgxtglB83MLik9WcJhJ/HQ9Cl+9R9igAEZtZm1sI6NVip5ODsAUL4Gb5T4Wd7pa20V12bs4L0HRyMFSAOFX5U17QTfq40w4vu4XlyVlBtqhURgAg1cEzT+rtLwo+BQ5BnH/fyaM+r4nC8AuMQs2YDRl33ws9+lDaclTaljtWHbEvfAntjBYh9hp9c4n6pJaqyefQw97b9bG342N3bZ5oBAYiWBgiVM/Ut0/qzAsLP4UJQfrU71RpVqWhEAKKZQcHZKQYFYR9hHwGIUYUfrwXqu+gGgnPN0Ou9n9v7g5aoyuteBCCqDAA59CyEn+qUudd7BuZJmXxtqh0RgOg9/Kj0qt/xhy0NfrB6mCLP4ru/4yT5uK8QREjK4HlJhy/8tNHhRw0/k/TfV6ebE38nEf+Wcg1m5ZpQR+6L7pTJ81xWgHjOwDVPlvxry7PcvPnzPug99NjqYehZfAlw18kr4dq8EmZrVoDYtoO/FH6aCD+zwOHnV6uHq1di5X8nnHJNZuUaUc+iVOnBk6wAsc3Apey3vjyrPQu8V2b+jAAddhbvWAjPCwIQwwg+Dn5rpDOPfMbPC0vGQ5f2mzQ0QZk8AhAvDj/O+Kkv9J6GHYNA9OCX/26vY+qHoLB75hCA6L/jVuYu/OwjQO9j9XCZAp/4KwQ1QZk8AhDCjw67t/Czz9XD0K8yPFPNPFNhz83iMFSB8f1s9U5HXdV98PDzutxD+3x1uvrvLP/d4ZRrOSvXljpWK5LOCuIhK0BsBq73aV29Qj1WOp6exVsZY1e+nceKFSA2G1WFn7qWwcNPnlkfevUw9Im/5drOyrWmng/OCiKzAjTu4OPMkjaodnq+MVfHsb9Jxztl8gIQ4ww/luPrc97NeINjvu4fPAJVOStIAGJk4ed1mbELP3U58XgPISiN54RsDuM+rVeClMkLQIwg/CjJrSt0SW6Dq4fRN4+flBDkmaz7TDoraGRsgh5X+DkRfprpaKOGn0lq79XpKtSX3y2cci/Myr1BHaE32PMyVoDGE37myVJ7baGP5Q+wehi9TD4HuOvk1XRtoTfYsz0rQOMIP5fCTxPhZxY4/ERYPVy9miu/azjl3piVe4V6FsrkBSCGEX7yg/xeS1R1leKf8XOdYrw6DX3i74Ozgq48NlXNhaDh8wpsuMFnXx+jZMfwo1S7GkcMsCtl8gIQAcOPM37qc1ifALrrNcjtbyWifggKu3cPAWhM4UeZu/CzjwA9pNXDZQp84q8Q1ARl8gIQwg9D7igHvHroQ7Ps49nOQXqpKYbBJujhhJ88Szz0xyj5tfvg4ed1uYeG+Op09beVvzGcck/Nyj1GHZsqw7mmGAYrQMMJP5bIrTBYYdhuFm+Fjl2F3mDPmhWg+OFnIfxUt0zxy9zHsnoY+sTfB2XyS49dVR+UycdnBShu8GnlY5Rjp8ooLlV67Oqm3EfK5AUgegw/lsHrc86MAFv7Gub774NHsSpnBQlA9NThTZLvBVk92D1AWz18EIK6nzNl8uzgPq0rxJTJC0AcqKNTClvftxJ+on7N3erhAGfx5ftnC31D9b7BWUGB2AQdq4MTftro4KKGn9fCz6NWbVNWWMMp9+Ss3KPUoUw+GCtAMQauebLE3cIKwbvAX3O3ejiCWbxX5M0IvcF+LKwAtd+hnQs/TYSfWeDwY/Xw+bP4k4i/fLlHZ+WepZ6FMnkBiN0GrvwAqfCo6yrFP+PnWvh5dgi6HsBZQVcuZVVzIahtXoG1OWgN7WOUYcNP8BLpXOn13mXciaMO2JUyeQGIZ4QfG1Xrc0geQwnC+T6wEiEEIQA13VHl0JNXfiZaQ/jZIUBbPdy/ZVpvgndWEC+lTF4A4hfhx0ZVHdSu4cfqoVm8PqbtPiYH6aWmqM8m6HZmZ2P5GGWr7oOHnzy4fRV+Diq37V1p63DKvT0r9zp1OCuoIVaA2gg/lqbN7M3sY83irRSyq/z5lY+aoR4rQHU7ooXwU90yxS9zt3rY/yz+bgBl8kuXsqpLZfJ1WQGqNwPzMcr6olf3vC/3EWbxu0zC9EN15c+YnKoQE4DGEn4sP9fnfBcE6fTXafMOXK1LmbwANPjwM0m+09OC6GXuVg8bDEFpvRqkTJ5dQtCpMnkBaIjhx0bV+r6VDibq19ytHprFH/L+OikhSB9Vt49yVlBPbILur2MRftroWKKGn9fCT/NW1yhwmXx+NmblWaEOZfI9sgJ0+IFrniwttzAzfxf4a+5WD83i+7zfJsmr+haE/hxPBFaADtuRnAs/TYSfWeDwY/Uw7iz+JOIvX56VWXl2qGdRPmiMABRu4MrBR2VFXVcp/hk/18JP2BB0PYCzgq5cyqreOyvocLwC2/+g5WOUjYSf4KXJeeb33mUchI/dvXgWfDI3dxmrUiYvAIUIPzaq1hf63bkBRyBv8J7M96OVCCFIAOKnHUQOPXnlZ6I1hJ8dArTVw+FapvVmfGcF8VLK5AWgJsOPjao6hl3Dj9VDs3h9HUJQT2yC3s+sSIdQ133w8JMHla/CzyisrnXgs4JWAa48c9QR+mO8LbECtHv4sSRsRm1Gzahm8VYsmxH6Y7y1WQF6eQewEH6qW6b4Ze53wo9ZfDQPyuSXLmVVl8rkX84K0MvDz1xLVBW9qiaXuDvkjPCzeP1hG/1hCvwxXgEoxoNu2bcNF92Dfm7AQKBv5p7Oz6ODX+tSJi8AHewBnyTfx2lB9DL3S+GHIc7i7YlsJgSdqhATgPb5YNuoWt+38mBH/Zq71UMGP4sv3z9b6Cur95XK5LdgE/TTD/RU+GnmgY4afl4LP2xpda8ELpPPz+isPLPUEfpjvH2yAvTrgWueLOm2MCN+F/hr7lYPGd0s3paBZoT+LNChWQF6/AE+F36aCD+zwOFnLvwwxll8eWZn5RmmnkX5sDIC0NYDVw4+Khrqukrxz/ixF4JdQ9D1AM4KunIpq3rvrKCf8wrs74PWb2XQ8u60cvgJXhKcZ1zvXUb26GP3TJwFn1TOXcaqlinwx3gFoMOHHxtV6wv9zlpHj4nBo8/GPNlWUJuzggSgHx7MHHryhr2J1qgmP5Bnwc/4EaAxixeCIvS1yuQFIFU6HkjhB7N4fa4+d4xGvQlalU4T7oOHn9yZfxV+6NHqngt8VtAqwJVnnzpCf4x3X0a7AmQp1kx2D/fQNK1fnQrQmMU///mxctqG0Z4VNMoVoLJRVfip6ybFL3O3eohZ/As9KJO/cSmrWoy1TH50K0CqdJoQvZoll7g7XIyW5AKCj/pldumXU+CP8QpAv37ALLe24aJ7wM511GBi8d2zlfsFB9DWNaoy+VEEIN+lacZp8DJ3h2RiFn/Y52yebE9oIQSF/f6iAPT3B0rJZX3fygO1DBx+rB5iFt/P8zZNigta6LMHXyY/6E3Q5UESftp4kKKGn9fCD8Gs7tnAZfK5r5iVvoM6Qn+Md1uDXQGylNrMTPRd4K+5Wz3ELL7e8zdJti60YLBl8oNcASqb6YSf+uFnFjj8zIUfzOLrKX3HrPQl1LMoY+rgDG4FSJVOE3y0Eczi9ev6dQGopwdElY6HZB/3UT7f573LyAB97J7NMyGIHSxT4I/xDjIAqdIxy9TBwigmKPNkdba2wZwVFD4AlY2qC+GnqvwgnAU/40eAxgAWJwTllVr78+q5T+uVoND7s0IHIFU6zYQfH2QEIUjfr+8PJWwVmCqdZmYBkcNP7kS/Cj+M0OreD3xW0CrAlT6IOjZVhvOof0DIFSDvgc0g93APTZPTZsEp7exDyP2fxwFv+Evhp7qbFH8PgdVDCD6LL33QrPRJ1LMoRSShhFoBUqXThOhVJLnE/dJlhB/kQoaPgZ9t44PxYXgByDJnMy66m/tcBwkGsEaf8dw/fXAZqwqzPeIowA0t/LThNHiZu0MyYTs35XmP/IrbNon6Iaj570AeNX4jK3WszyZJMIuP9txPkyKHFsaOpquEjxu/gYWfNm7gqOEnh5474QeebTX5DFwmn/usWenDqGOzwX4qAD1v4JoLP03MAN8EP+Mn30MTlxJGGYJWfVjyNfkWQtBcANpu4MpVOt7f1g8/s9bf3wrQMO4BbIsQlPuwmRBU3aJsUG9KU3uAVOk0wccSgZ/xsWMGNb4cNXJjqtJxc+rgoH0fuz7iTB/BDpqpMjxq4IZUpWN2p2MDE6W++op5skpcWxNVhkeVb8TX5UYUfurJN+BZ8DN+BGgY4QC2YwjKJ8LbJ1jPfVofsVJtf9ZRxRvQGT9thJ/IX3OfpPVZH8IPCEHGIGPQsxxXuvHmbrwm0vcseJm7M36gnvzsfQ1eJj8rfSF1VK0y7H0FyPtXM7c93EPT5JRXaGkW77R4dtX7PtTjnm+0S+GnupsU/9291UMwi9+L0hfOSt9IPYuSEXrT2wqQKp0m+NIzcEi5oOJj4D7GODWiceqohxvK8mIbLrqb6lzHBJhomWg1rpdtGkcHvpGEnzacBi9zd0gmxNLMYXcv7HfmyXaNwYegowPeQEoM67M5ERj0LP6A/c80KbZoYQw7WLXy8QFvHOGnjRsnavhR5g6xRf+afO47Z6UvpY7NBvtpiACkSqeZmdeb4Gf85Hto4lKCEFQxBK360uRr8i2EoHnTAaj7Bd8n701bCD955ec+aPgRoMEA1lIIyn3pTAiqblEyxt7sbQ+QKp0m+Egh0DIfXaaZce5oDzdETveXbgrhR8cCbOFj11ed6avYwV6qDI92vBFU6ZhV6VCAsU3Ycn9ltbqunasMj3a4AV6XG0D4qSdf+LPgZ/wI0GAAixqC8tsP+xXr3kOnLy34OXrhhXfGTxvhJ/LX3CdpfcaG8ANCUNQQZCwMPBYev+CCn7jg1d0HDz/O+AFS6QO+Bi+Tn5U+mTpeXGX4rBUg7z3NmPYQfqbJ6arAj7N4p9azq2fthz1+xgW+FH6qu0nx35lbPQT2NotvQemTZ6WPpp5FySpb2WoFSJVOE3xhGRiDXNjxMXBfZ7wMMl4ePXEhcyrPryum2rOqi+5inusQAAOYCR9bWab1a9Vvzw5A3mk24zR4mXsOPycuI/BMeznsrmL/N0+2jdT2yz2zR49cOKV99dkUCBjAFH2w+1j606rpY+Gn6QsWNfwocwf2IfrX5HMfPit9OnX89tg9dCT8NDnjeRf4a+7uIaC3WXyQfnGSHPza3D10/OACbTY8G7jqhp9Z4PAzT+uVH/cQcIhZ/DziL1/69Fnp46l3D12XrPP3AJTWm7Um2qiaXPXwxoY/gEcHsEXks4JyH5/7epeympxx/jon6KgMXtO0fm1BvfATueRTmTugz9RnRrHaY7tZAXJeQT2nUR/kvJToQQYqmJe+J6TS55+6jNWsMs9R2Zz1VXv0Lr/qOgt+xo8yd6Cm6GXyefKYX8nYN9m/f+YVIIfU1Qk/s8DhZyL8AA3YlMlPIv7yZQxQJl/HSQ5A/9IOvbpPscs5nfEDtBaC7gKfFfSlhKB7l7JX/zo2kPUq3+hvAoefvFrojB+gNZsy+WngEPQmKZPvNTgfG8x6k79rE/1dtXOigNZD0DxoCFptjShjBT3cL3kT9J/a4eB82RigPxddn3seuM9VXduDY03Qy4MY/bwK4QeI5MMAyuQvXMbDsgJ0WKfBy9zzK6+pywgEdVP6YSfs8wMrQIcRvcx9c8aP8ANEtircePj9p0iUyR8+ANl1fpjwswwafpS5A0MSvUx+KQQdxJccgJbaYX8NmmKXua8OFUs+igsMS+7TPgU/K0iZ/H6tvgX2WTvsLfzklZ/7oOFnntYrP8rcgSGKXiafx5aZELQ3nzdfg/9q1r+T6GXuuUOw0Q4Yi7AFKqXPVia/m/vu+v9zswlaud14w89C+AFGZjGAMvkrl/HFVpnn6MFAaBVoRLOIUhVxaRbBd76VjvVzGs6my3yv/17uda94GdIEdm4C+2yr1Z/vA9A0rTfAst0gcTaAMneVXvxtMCj39SCrTYR+HrHZvxn5rKBL4X5rf1VpH33XkOfJqb/bhJ/IX3OfpPUBh8IPD4XeE2HWzB5C0LvARSybCl4h6NfyBO/j5n84+klD2lz1uPvykHzxkDAgoV8DvPBZ0M8xtMnt6zK5nbiU2/VzP5wEbXPVL2cIkc/4ORF+eKTTPxvjTDA5WI6/25TJTyP+8s4Kev4k7/gXnYNG/K+bFP8d8bXwwyMdw+iCQPmbTfR4LATNA9/XszJmsfblsUne8RONKAStB4h3gcPPebLfgcd99rfDDxal7wwZgvKYJeD/FX4eXbw43iJJjnmZ+GIAZ/zY1M6vfPO3w099GMBZQRcjf75/+ebmaItBdKwbZ6Of8ZNfeU31YTzRSR6N9W8vz8n/uQt4wk0ZDyJvgRjbW4CtNrQfb9FBrpaQRjRb2jRc5PDzSfiBJ/s2K0BsY1VAUvrWiPf51UjH8Ce38Bxv2YCPbiIaaMMtg4afvFqXP2jqjB+A/Vn1rYG/Jr8cUQg627Za+/gZDZhT5JDPCole5r55VTnRVwHsXe5bPwUOQWMok3/W1pXjZzZg/i8e4qaqzU7x+6DhZ57WKz/K3AEOJ3qZfB7jhlrhffHcrSvHL2jA8zSs8rpc5v4m8Aa390mZO0CfIWgR+aygPOYNcBw/f+7/0fELG3Aop0VfDaDM/VJ/BNC7xQDK5Ec9jh/v8P80+mnRp1HDT65G8C0jgOrmAwhBkff27lSgdbxDw0U9Lfpbin/GzyfhB6CZEHQXvEz+NMWrEPvlKc8HDUDfhaAoDRf9jJ9NpZcyd4B2rPrmro+eBA5BEcfynX7f4z00XJQQdJ+2PBxJ+AHgBSHoLniZ/KyMlYMPP3sJQN81XKshKPoZPydpnJ8jAYhkUyY/DRyCWj4raOtTnnsLQA8arsXTom/2lRYrhZ95Wn/XS/gBiBOC5kFD0Oatzk2Dv97ZPhcyjvfccFeprR3luTzuXeDwk0vcnfEDEE8ukz+PGoLy2JnaKpPfe/HS8QEaLv+CHxtorIsBnPHzXh8CENaHAZTJt/D1h4+HKF46OvAAPh9KUuwx+OTl0/zKa6rvoIcO7mjMf3/3vP3pLqAHy+7nXfCtGLWC3MEOLD4+1G9cfuG+3yFGL3PfnPEj/AAMR+7TPwU/K6hGodPNId/kHB/4l8+/eF+7yTfhZxk0/OTSya9JmTvAEEUvk1/2HIK+pAPvKT4+cIP1dVp09DL3zRk/Kr0AhmuS1itBkc8K6qNMfudTnqsHoJ5C0Kah7oOGn3meFQg/AKOQ+/q7wGXy9z2N6QdfaTruqcEOFYLy5qg3gTeW5SovZe4A47OIfFZQHnvT/svkews/vQWg7xpsHyV1mw+aRi9zv9QHAIw6BEUvk3+X9rMv6KLvBY3jCg123v3zzxcmx28lQP0zcqVX5SMCAGhH/pr8InCF2E0Z0y9eGISuyph+3vfvXvUMkHLB83eu/pXWO+QnP/lfu0/rMxQ+Rw093/29PmhKS52Xc4CgDb2+/jngM5Un97+nden/Y2N6/lv/k9Zl7tX+3qNGG3AatZz9F39TDj0L4QcBSACCX4Sgd1GLeqKN6Ufut97CjzJ3BCABCJ6y1y+e87hjTXDwDvZE+AFgS5uvyZ9oCgEocviZp/V3vYQfAJ4Tgq6jlskLQMJPLnF3xg8AL5Wrw841gwAUKfzk4PNeSwCwow+Rzwpq2T80wV6Dz2rZMvmaOwD7k88KmqR1hdg3zbEfVoD2G34+CT8AHEAeWz5FPTBRABpu+Mll7l+TM34AOJw8xtxF/Zq8ADS88LNK5UmlFwCHN0nrlSAhSACqGn7mwg8APctjzp0yeQGoVvjJVV525gNQy0IIEoD6Dj85+FxqCQAaCEEm4y+gDP55wScvO+YbzRHlALQil8nnf8+UyW/PCtDzws8n4QeAFkNQUiYvAB0g/Gy+5m7XPQCtel1C0ERTCEDCDwBjC0HOChKAdg4/86TMHYBYVls2ujHMlg0B6MXhZyH8ABA0BF0rkxeAnht+LpMzfgCIL5fJn2uGHymD/3vwmZTgM9UaAAzEh258e5XWZfL3mkMAehh88lJhPtn5g9YAYIDyfqBpN979u/v3o/OCvALbfNLiq/ADwMD9Vsa6r2XsE4BG7jLZ6AzAuILQ6D/nJAABAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEA1ONTGPB3+Xj4q+7nc/nPDNtsBH9jPvTu9+5nnhz6Cn85GnsD/PH27Z9uA4ocfM58I4eB9nWb03/nWoOs6+tGnQGsAMHaadcZXGkGBjzY5WB/2gWhvLq50CKMnT1AkNKV8MOIglC+193vCECagJHLs+IzzcDInCV73BCAYNSu7PlhbMo9f6UlEIBgvD5rAtz7IADB2Fj9wb0PAhCMy6vb26VWYKS+aAIEIADGFv6tACEAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAIQDA2f7x9O9UKuPdBAIKx+U0T4N4HAQjG5ndNgHsfBCAYm/kfb9+aCTMq5Z6fawkEIBivPBBcagZG5jJ5BYYABKOXV4HMhhmFcq+73xm9f2gCWFl0A0PeE3H26vb2m+ZggMFns9op/EDnSKfw9k+3AQ/k8HPV/XzO/7kLQ0tNQuDA8zqtX3X9XoKP1178pevfRp0BBCABCB2g5x88/6NjDxAAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAwOH88fbt1N8OCEDA2PzmbwcEIGBsfve3AwIQMDbzP96+Hd1KSPmb5y4/CEDAOOUgcDnCv/syeQUGAhAwankVaD6WP7b8rXOXHcbtH5oA6Cy6YJD3xJy9ur39NtDgs1ntEn6AdDT2Bug6xT/dBvCXHH6uup/P+T93YWgZPPC8TutXXb+X4OO1FxTd8z3qDCAACUAACECjYw8QACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAgAAEACAAAQAIQAAAAhAAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEACAAAQAIAABAAhAAAACEAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQAIAABAAgAAEACEAAAAIQACAAAQAIQAAAAhAAgAAEACAARbXUBAAY+wSgsfmsCQAw9glAY3OjCQAw9glAo/Lq9vZL988XzwIAI/GljH0CEOnfmgAAY954HGmCtT/evv3U/TPVEgAM2PLV7e1MM1gBeui0+/mmGQAYqG9lrEMA+q8uEd+7MQAY8kS/jHUIQD+EoBshCICBhh9Vzw/YA/QTf7x9e9L9s+h+ftMaAAT2TfgRgJ4bgiYlBE21BgABLZPXXgLQDkFo3v3zv93Pa60BQAD5jJ9/d8HnSlMIQPsIQjkA5VdjvyerQgC0ZZnWn7e4ccjhdv6/AAMAUN8I6MJtw/IAAAAASUVORK5CYII=',
          symbolSize: 25,
          symbolKeepAspect: true,
          itemStyle: {
            borderColor: "purple"
          },
          label: {
              show: true,
              formatter: '{b}',
              position: 'right',
              fontSize: '.9em',
              // color: '#222',
              shadowColor: '#fff',
              fontWeight: 'bold',
              offset: [0, 6]
          },
       
          // zlevel: 5 //puts pins at top
        },
      ]
    })
  );
};

