import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from "react-query";
import axios from "axios";

export default function vendeur({title, collection}) {

  
  const optionsRadial = {
    series: [10,20,30],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '28%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      labels: ["MOIS1", "MOIS 2", "MOIS 3"],
      legend: {
        show: true,
        floating: true,
        fontSize: '10px',
        position: 'left',
        offsetX: 160,
        offsetY: 1,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName  + ": " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 0
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    },
}

  return (
    <div className="  right-0 left-0 w-full top-4  h-modal  md:inset-0">
        <div className=" px-4 w-full  md:h-auto">
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="px-6 pb-4 pt-6 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title} statistique</h3>
                    <div>
                        <ReactApexChart    
                            options = {optionsRadial.options}
                            series = {optionsRadial.series}
                            type = "radialBar"
                            height = {300}
                        />
                    </div>
                </div>
             </div>
         </div>
     </div> 
  )
}
