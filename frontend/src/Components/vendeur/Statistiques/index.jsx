import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from "react-query";
import axios from "axios";
import { useCookies } from 'react-cookie';
import Tablecommande from "../tablecommande/index.jsx";

export default function vendeur({title, collection}) {

  const [cookies, setCookie, removeCookie] = useCookies();

  let a=0;
  let b=0;
  let c=0;
  let d=0;
  let e=0;
  let f=0;
  let g=0;
  let h=0;
  let i=0;
  let j=0;
  let k=0;
  let l=0;


  const query = useQuery("commandes", async () => {
    const { data } = await axios.get("http://localhost:4000/api/commande/vendeur/"+cookies.id);
     return data;

  });

  if(query.data){
  query.data.forEach(element => {
    let date =new Date(element.date).getMonth()+1;
      switch (date) {
         case 1:a++;
          break;

         case 2:b++;
         break;

         case 3:c++;
         break;

         case 4:d++;
         break;

        case 5:e++;
        break;

        case 6:f++;
        break;

        case 7:g++;
        break;

       case 8:h++;
       break;

       case 9:i++;
       break;

       case 10:j++;
       break;

      case 11:k++;
      break;

      case 12:l++;
      break;
     }
    
 });
}

  const optionsRadial = {
    series: [a,b,c,d,e,f,g,h,i,j,k,l],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 280,
          hollow: {
            margin: 1,
            size: '15%',
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
      labels: ["Janvier", "Fevrier", "Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
      legend: {
        show: true,
        floating: true,
        fontSize: '10px',
        position: 'left',
        offsetX: 2,
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
    <div className="right-0 left-0 w-full	 top-4  h-modal  md:inset-0 w-1/2" >
        <div className=" px-4 md:h-auto  flex w-full flex-wrap">
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700 w-1/2">
                <div className=" px-6 pb-4 pt-6 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" >
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
             <div className="w-1/2" >
                     <Tablecommande/>
              </div>
         </div>
     </div> 
  )
}
