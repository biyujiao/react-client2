import React, {PropsWithChildren} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import { RootState, HomeState } from '@/store/reducers';
import HomeHeader from './components/HomeHeader';
import actions from '@/store/actions/home';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Prop = PropsWithChildren<RouteComponentProps> & StateProps & DispatchProps;
function Home(props: Prop) {
    return (
        <>
            <HomeHeader 
                currentCategory={props.currentCategory}
                setCurrentCategory={props.setCurrentCategory }
            />
        </>
    )
}
function mapStateToProps(state: RootState):HomeState {
    return state.home;
}
//connect: 连接组件和仓库
export default connect(
    mapStateToProps, actions
)(Home);