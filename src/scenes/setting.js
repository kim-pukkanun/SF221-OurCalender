import React from 'react';
import {Divider, View} from "native-base";
import AppTemplate from '../components/templates/app';
import LanguageSelection from '../components/molecules/setting/languageSelection';
import FontSelection from "../components/molecules/setting/fontSelection";
import NotificationsSelection from "../components/molecules/setting/notificationsSelection";
import AccountSignIn from "../components/molecules/setting/accountSignIn";
import PasscodeSetting from "../components/molecules/setting/passcodeSetting";

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            font:'Cordia',
        }

    }

    render() {
        return (
            <AppTemplate  {...this.props}>
                <View width="100%">
                    <LanguageSelection/>
                    <FontSelection font={this.state.font}/>
                    <NotificationsSelection notification={this.state.notification} test={() => this.state.notification}/>
                    <Divider thickness="1.2" backgroundColor="#7B7D7D" width="80%" alignSelf="center" marginTop="2"/>
                    <AccountSignIn/>
                    <Divider thickness="1" backgroundColor="#7B7D7D" width="80%" alignSelf="center" marginTop="2"/>
                    <PasscodeSetting/>

                </View>
            </AppTemplate>
        );
    }
}

export default Setting;
