import {combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer