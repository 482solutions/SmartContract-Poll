import React, {useState, useContext} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Header from '../header/header'
import PollsList from '../pollsList/pollsList'
import Login from '../loginForm/loginForm'
import Menu from '../menu/menu'
import useClasses from './classes'
import {StateContext, DispatchContext} from '../storage/Context'

const App = () => {
    const classes = useClasses()
    const state = useContext(StateContext)
    const reducer = useContext(DispatchContext)
    const [page, setPage] = useState('ownerPoll')
    const closeSnackbar = () => {
        reducer({
            type: 'SET_SNACKBAR',
            payload: {
                isOpen: false,
                text: state.snackbar.text,
                type: state.snackbar.type
            }
        })
    }

    return (
        <>
            <Header /> 
            <div className={classes.body}>
                {state.web ? 
                    <>
                        <Menu page={page} setPage={setPage}/>
                        <PollsList typeOfList={page}/> 
                    </>:
                    <Login/>}
            </div>
            <Snackbar open={state.snackbar.isOpen} autoHideDuration={3000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity={state.snackbar.type}>
                    {state.snackbar.text}
                </Alert>
            </Snackbar>
            <Backdrop className={classes.loader} open={state.loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default App;
