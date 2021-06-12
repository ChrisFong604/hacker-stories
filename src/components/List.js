import Item from './Item';

const List = ({ list }) => 
    list.map(({ objectID, ...item }) => <Item key={objectID} item={item} />)

export default List;