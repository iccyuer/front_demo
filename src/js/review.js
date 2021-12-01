function renderChart(dom, data) {
    if (!dom) return;
    var myChart = echarts.init(dom);
    var option;
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    option = {
        backgroundColor: 'transparent',
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



// function renderProgressBar(data) {

//     var reviewdata = [
//         {
//             title: '基础任务',
//             data: [
//                 { key: '人质安全1', value: 14, max: 200 },
//                 { key: '人质安全2', value: 14, max: 200 },
//                 { key: '人质安全3', value: 14, max: 200 },
//                 { key: '人质安全4', value: 134, max: 200 },
//                 { key: '人质安全5', value: 134, max: 200 },
//                 { key: '人质安全6', value: 134, max: 200 }
//             ]
//         },
//         {
//             title: '射击技巧',
//             data: [
//                 { key: '人质3安全', value: 134, max: 200 },
//                 { key: '人4质安全', value: 134, max: 200 },
//                 { key: '5人质安全', value: 134, max: 200 },
//                 { key: '人6质安全', value: 134, max: 200 },
//             ]
//         },
//         {
//             title: '战术技术',
//             data: [
//                 { key: '人质安全', value: 134, max: 200 },
//                 { key: '人质安全', value: 134, max: 200 },
//                 { key: '人质安全', value: 134, max: 200 },
//                 { key: '人质安全', value: 134, max: 200 },
//                 { key: '人质安全', value: 134, max: 200 },
//             ]
//         },
//     ]

//     function render(reviewdata) {
//         var tpl = reviewdata.map((item, index) => {
//             return '<div class="play_data_item">' +
//                 '<div class="play_data_title blod">' + item.title + '</div>' +
//                 '<div class="progress_box progress_box_' + index + '">' + renderProgress(item.data) + '</div>'
//         })
//         $('.play_data').append(tpl);
//     }

//     function renderProgress(list) {
//         var tpl = list.map(item => {
//             return renderItem(item)
//         }).join('')
//         return tpl;
//     }

//     function renderItem(item) {
//         return '<div class="progress-bar blod">' +
//             '<div class="progress-bar-title flex">' +
//             '<span>' + item.key + '</span>' +
//             '<span class="timer count-title" id="count-number" data-to="' + item.value + '" data-speed="800"></span>' +
//             '</div>' +
//             '<div class="progress-bar-body">' +
//             '<div class="back" value="' + item.max + '"></div>' +
//             '<div class="frot" value="' + item.value + '"></div>' +
//             '</div>' +
//             '</div>'
//     }


//     function run() {
//         $('.play_data  .progress-bar').each(bar)
//         function bar() {
//             var b = $(this);
//             var max = b.find('.back').attr('value');
//             var value = b.find('.frot').attr('value');
//             // console.log(max, value)
//             b.find('.frot').css("width", parseInt(value / max * 180) + "px");
//         }
//     }

//     setTimeout(() => {
//         run();
//     }, 0)


//     render(reviewdata)
// }


// renderProgressBar()