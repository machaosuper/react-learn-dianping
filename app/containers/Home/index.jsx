import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import HomeHeader from '../../components/homeHeader'
import Category from '../../components/category'
import Ad from './subpage/ad'
import List from './subpage/list'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}></div>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
                {/* <h1>home</h1>
                <Link to="/city">city</Link> */}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
