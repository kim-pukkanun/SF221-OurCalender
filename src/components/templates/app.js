import React from 'react';
import {NativeBaseProvider, HStack, ScrollView, View} from 'native-base';
import Header from '../organisms/headerApp';
import Bottom from '../organisms/bottomApp';

import WeekDay from "../organisms/weekDay";

class AppTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }

        this.onLayout = this.onLayout.bind(this);
    }

    onLayout(event) {
        this.setState({height: event.nativeEvent.layout.height});
    }

    render() {
        const { navigation } = this.props;

        return (
            <NativeBaseProvider>
                <View h="100%" onLayout={this.onLayout}>
                    <ScrollView>
                        <HStack bg="#f57f6f" w="100%" h="60">
                            <Header navigation={navigation}/>
                        </HStack>
                        <HStack bg="#f4be82" w="100%" h="90">
                            <WeekDay/>
                        </HStack>
                        <HStack bg="#eedec4" w="100%" minH={this.state.height - 210}>
                            {this.props.children}
                        </HStack>
                        <HStack bg="#9d9fd2" w="100%" h="60">
                            <Bottom navigation={navigation}/>
                        </HStack>
                    </ScrollView>
                </View>
            </NativeBaseProvider>
        );
    }
}
export default AppTemplate;