import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishReducer';
import { Comments } from './commentReducer';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotionReducer';
import { Leaders } from './leaderReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}