const allItems = [	
    { 
        itemId: 1,
        displayText: 'laundry'
    },
    { 
        itemId: 2,
        displayText: 'grocery shopping',
    },
    { 
        itemId: 3,
        displayText: 'take a dentist appointment'
    }   
]
    


export const getAllItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allItems);
        }, 2000);
    });
}

export const addItem = item => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 201 });
        }, 2000);
    });
}

export const deleteItems = itemIds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 200 });
        }, 2000);
    });
}