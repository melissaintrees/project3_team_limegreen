import React, { Component } from 'react';
import Categories from '../../Components/Categories/Categories';
import AppHeader from '../../Components/AppHeader/AppHeader';
import LogoutBtn from '../../Components/LogoutBtn/LogoutBtn';

class CategoryOptions extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            question: "here",
            answer: "testing",
            answerState: 1,
        };
    }

    render() {
        return (
            <div>
				<AppHeader
				/>
                <Categories
				/>
                <LogoutBtn
                />
            </div>

        );
    };
};

export default CategoryOptions;