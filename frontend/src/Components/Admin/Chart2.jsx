import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart2() {
  let [cmd, setCmd] = useState();
  let [Accepted, setAccepted] = useState(0);
  let [Refused, setRefused] = useState(0);
  let [enCours, setenCours] = useState(0);

  useEffect(() => {
    const allCmd = () => {
      axios("http://localhost:4000/api/commande/")
        .then((res) => setCmd(res.data))
        .catch((err) => console.warn(err));
    };
    allCmd();
  }, []);

  useEffect(() => {
    if (cmd) {
      cmd.forEach((el) => {
        el.status == "Accepted"
          ? setAccepted(prev => prev + 1)
          : el.status == "Refused"
          ? setRefused(prev => prev + 1)
          : el.status == "en cours"
          ? setenCours(prev => prev + 1)
          : null; 
      });
    }
  }, [cmd]);
 
  const data = {
    labels: ["Accepted", "Refused", "enCours"],
    datasets: [
      {
        label: "# of Votes",
        data: [Accepted, Refused, enCours],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-5 flex justify-center">
      <div className="p-5 bg-gray-50 rounded-md shadow-md	w-full ">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default Chart2;
