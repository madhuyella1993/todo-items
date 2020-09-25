import React from 'react';
import { getAllItems, addItem, deleteItems } from '../services/todoService';

export default () => {
    const [items, setItems] = React.useState([]);
    const [newItem, setNewItem] = React.useState('');

    React.useEffect(() => {
        getAllItems().then(allItems => {
            setItems(allItems.map(i => ({...i, completed: false})));
        });
    }, []);

    const handleItemClick = itemId => {
        const newItems = items.map(i => ({...i, completed: i.itemId === itemId ? !i.completed : i.completed }));
        setItems(newItems);
    }

    const handleAddItem = () => {
        const idsArray = items.map(i => +i.itemId).sort((a, b) => a - b);
        const newId = idsArray[idsArray.length - 1] + 1;
        const payload = {
            itemId: newId,
            displayText: newItem
        }
        setNewItem('');
        addItem(payload).then(() => {
            setItems([...items, payload]);
        });
    }

    const handleDeleteCompleted = () => {
        const completedItemIds = items.filter(i => i.completed).map(i => i.itemId);
        deleteItems(completedItemIds).then(() => {
            const newItems = items.filter(i => !completedItemIds.includes(i.itemId));
            setItems(newItems);
        });
    }

    const pendingItemsLength = items.filter(i => !i.completed).length;

    return (
        <div>
            <h3>Todos Pending {pendingItemsLength} </h3>
            {items.map(item => 
                <div key={item.itemId} className={item.completed && 'completed'} onClick={() => handleItemClick(item.itemId)}>
                    {item.displayText}
                </div>
            )}
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button disabled={!newItem} onClick={handleAddItem} >Add</button>
            <div>
                <button disabled={pendingItemsLength === items.length} onClick={handleDeleteCompleted} >Delete completed</button>
            </div>
        </div>
    )
}