import PieChart from './PieChart';
import TypePieChart from './TypePieChart';

function DashBoard() {

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

    const totalExpenses = sampleData.reduce((acc, curr) => acc + curr.amount, 0);

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
        return `${highestCategory} (${max})`;
    }

    const highestTypeExpenses = (sampleData) => {
        let max=0;
        let highestType ="";
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
                highestType = Object.keys(typeStatus).find(key => typeStatus[key] === max);
            }
        }
        return `${highestType} (${max})`;
    }


    return (
        <>
            <div className="flex gap-4 mt-4 mx-4">
                <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                    Total Expenses: {<div className="mx-3 font-semibold text-xl">{totalExpenses}</div>}
                    </div>
                <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                    Highest Category Expenses: {<div className="mx-3 font-semibold text-xl">{highestCategoryExpenses(sampleData)}</div>}
                    </div>
                <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                    Highest Type expenses: {<div className="mx-3 font-semibold text-xl">{highestTypeExpenses(sampleData)}</div>}
                    </div>
            </div>
            <div className="flex justify-around mt-4 mx-4">
                <label className="text-xl font-semibold">Breakdown of category wise expenses</label>
                <label className="text-xl font-semibold">Breakdown of Type wise expenses</label>
            </div>
            <div className="flex justify-around mx-4">
                <PieChart />
                <TypePieChart />
            </div>
        </>
    )
}

export default DashBoard;