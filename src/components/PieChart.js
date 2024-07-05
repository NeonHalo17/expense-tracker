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

function PieChart() {

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

    const highestCategoryExpenses = (sampleData) => {
        let max=0;
        let highestCategory ="";
        let categoryStatus = {};
        for(const {amount, category} of sampleData){
            if(Object.keys(categoryStatus).includes(category)){
                categoryStatus[category] += amount; 
            } else {
            categoryStatus[category] = amount;
            }
        }
        for(const value of Object.values(categoryStatus)){
            if (max < value){
                max = value;
                highestCategory = Object.keys(categoryStatus).find(key => categoryStatus[key] === max);
            }
        }
        return categoryStatus;
    }

    const labels = Object.keys(highestCategoryExpenses(sampleData));
    const data = Object.values(highestCategoryExpenses(sampleData));
    
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

export default PieChart;