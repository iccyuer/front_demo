function renderChart(dom, data) {
    if (!dom) return;
    console.log(dom, data)
    var myChart = echarts.init(dom);
    var option;
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    option = {
        backgroundColor: '#999',
        title: {
            text: 'AQI - Radar',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        legend: {
            bottom: 5,
            data: ['Beijing', 'Shanghai', 'Guangzhou'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        radar: {
            indicator: [
                { name: '基础任务', max: 100 },
                { name: '射击技巧', max: 70 },
                { name: '战术技术', max: 150 },
            ],
            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 1)',
                        'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)',
                        'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)',
                        'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: data,
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 1
                }
            }
        ]
    };

    option && myChart.setOption(option);
}

renderChart(document.getElementsByClassName('play_chart')[0], [[55, 37, 56]]);



reviewdata1 = [
    {
        title: '基础任务',
        data: [
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 }
        ]
    },
    {
        title: '射击技巧',
        data: [
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 }
        ]
    },
    {
        title: '战术技术',
        data: [
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 },
            { key: '人质安全', value: 134, max: 200 }
        ]
    },

]

