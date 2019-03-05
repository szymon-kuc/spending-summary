import React from 'react';
import { Search } from './Search';
import { AddNewItem as Add} from './AddNewItem';
class ListContainer extends React.Component {
    render(){
        return(
            <>
            <div className="center">
                <Search />
                <Add />
            </div>
            </>
        );

    }
}

export {ListContainer};