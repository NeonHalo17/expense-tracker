import {Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function TypePieChart() {

    const sampleData = [
        {
            id: 1,
            category: "Food",
            description: "Canteen",
            user: "Aman",
            date: "2022-01-01",
            amount: 100,
            type: "UPI",
        },
        {
            id: 2,
            category: "Bills",
            description: "Electricity",
            user: "Aman",
            date: "2022-02-02",
            amount: 10000,
            type: "Net Banking",
        },
        {
            id: 3,
            category: "Entertaiment",
            description: "Movie night",
            user: "Aman",
            date: "2022-03-03",
            amount: 300,
            type: "Credit Card",
        },
        {
            id: 4,
            category: "Food",
            description: "Movie night",
            user: "Aman",
            date: "2022-03-03",
            amount: 400,
            type: "Credit Card",
        },
    ];

    const highestTypeExpenses = (sampleData) => {
        let max=0;
        let highesType ="";
        let typeStatus = {};
        for(const {amount, type} of sampleData){
            if(Object.keys(typeStatus).includes(type)){
                typeStatus[type] += amount; 
            } else {
                typeStatus[type] = amount;
            }
        }
        for(const value of Object.values(typeStatus)){
            if (max < value){
                max = value;
                highesType = Object.keys(typeStatus).find(key => typeStatus[key] === max);
            }
        }
        return typeStatus;
    }

    const labels = Object.keys(highestTypeExpenses(sampleData));
    const data = Object.values(highestTypeExpenses(sampleData));
    
    const pieChartData = {
        labels: labels,
        datasets: [{
                label: "Expenses",
                data: data,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.9)",
                    "rgba(54, 162, 235, 0.9)",
                    "rgba(255, 206, 86, 0.9)",
                    "rgba(75, 192, 192, 0.9)",
                ],
                hoverOffset: 4,
            }],
    };

    return (
        <>  
            <div className="w-[450px] h-[450px] m-4 flex justify-between">
                <Pie data={pieChartData} />
            </div>
        </>
    )
}

export default TypePieChart;